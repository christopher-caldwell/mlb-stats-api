import { ZodSchema } from 'zod'
import axios, { AxiosInstance } from 'axios'

import * as Schemas from './schemas'
import { formatErrorMessage } from './utils'

export class MlbStatsApi {
  apiUrl = 'https://statsapi.mlb.com/api/'
  version = 'v1'
  client: AxiosInstance

  constructor(public shouldSkipValidation = false, client?: AxiosInstance) {
    if (client) this.client = client
    else {
      this.client = axios.create({
        baseURL: this.getUrl(),
      })
    }
  }

  /** Some of the APIs have deprecated old versions, and now return 404 when sending to `v1`.
   * You have to send to `v1.1` for some endpoints */
  getUrl(isDotOne?: boolean) {
    const dotOneModifier = isDotOne ? '.1' : ''
    return this.apiUrl + this.version + dotOneModifier
  }

  validateSchema = <TData>(schema: ZodSchema, payload: TData) => {
    if (this.shouldSkipValidation) return
    const result = schema.safeParse(payload)
    if (!result.success) {
      const errorMessage = formatErrorMessage(result.error, schema)
      throw new Error(errorMessage)
    }
  }

  async getAttendance(options: Schemas.GetAttendanceArgs) {
    // TODO: figure out how to lazy load schemas
    const { data } = await this.client.get<Schemas.AttendanceResponse>('/attendance', { params: options })
    this.validateSchema(Schemas.attendanceSchema, data)
    return data
  }

  async getAwards(awardId = '') {
    const { data } = await this.client.get<Schemas.GetAwardsResponse>('/awards/' + awardId)
    this.validateSchema(Schemas.getAwardsSchema, data)
    return data
  }

  async getAwardRecipients({ awardId, ...options }: Schemas.GetAwardRecipientsArgs) {
    const { data } = await this.client.get<Schemas.GetAwardRecipientResponse>(`/awards/${awardId}/recipients`, {
      params: options,
    })
    this.validateSchema(Schemas.awardRecipientSchema, data)
    return data
  }

  async getConferences(options?: Schemas.GetConferenceArgs) {
    const { data } = await this.client.get<Schemas.ConferenceResponse>('/conferences', { params: options })
    this.validateSchema(Schemas.conferencesSchema, data)
    return data
  }

  async getDivisions(options?: Schemas.GetDivisionsArgs) {
    const { data } = await this.client.get<Schemas.DivisionsResponse>('/divisions', { params: options })
    this.validateSchema(Schemas.divisionsSchema, data)
    return data
  }

  /** When draft year is not provided, returns the most current draft. For example, when this is called on April 3rd 2023,
   * it will return the 2023 draft, which hasn't happened yet.
   */
  async getDraft({ draftYear, ...options }: Schemas.GetDraftArgs = {}) {
    const draftYearToSend = draftYear ? draftYear : ''
    const { data } = await this.client.get<Schemas.DraftResponse>(`/draft/${draftYearToSend}`, { params: options })
    this.validateSchema(Schemas.draftSchema, data)
    return data
  }

  async getDraftProspects({ draftYear, ...options }: Schemas.GetDraftArgs = {}) {
    const draftYearToSend = draftYear ? draftYear : ''
    const { data } = await this.client.get<Schemas.DraftProspectsResponse>(`/draft/prospects/${draftYearToSend}`, {
      params: options,
    })
    this.validateSchema(Schemas.draftProspectsSchema, data)
    return data
  }

  /** Returns the most recent draft pick. If used outside the live draft, will return the very last round's, very last pick */
  async getDraftLatestDraftPick({ draftYear, ...options }: Schemas.GetDraftArgs = {}) {
    const draftYearToSend = draftYear ? draftYear : ''
    // TODO: figure out most recent draft year
    const { data } = await this.client.get<Schemas.LatestDraftPickResponse>(`/draft/prospects/${draftYearToSend}`, {
      params: options,
    })
    this.validateSchema(Schemas.latestDraftPickSchema, data)
    return data
  }

  getGame = async ({ gamePk, ...options }: Schemas.GetGameArgs) => {
    const { data } = await this.client.request<Schemas.GameResponse>({
      baseURL: this.getUrl(true),
      url: `/game/${gamePk}/feed/live`,
      params: options,
    })

    this.validateSchema(Schemas.gameSchema, data)
    return data
  }
}
