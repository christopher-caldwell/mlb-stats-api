import type { ZodSchema } from 'zod'
import axios, { AxiosInstance } from 'axios'

import type {
  GetAttendanceArgs,
  AttendanceResponse,
  GetAwardsResponse,
  GetAwardRecipientResponse,
  GetAwardRecipientsArgs,
  GetConferenceArgs,
  ConferenceResponse,
  GetDivisionsArgs,
  DivisionsResponse,
  GetDraftArgs,
  DraftResponse,
  DraftProspectsResponse,
  LatestDraftPickResponse,
  GetGameArgs,
  GameResponse,
} from './schemas'
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
    const result = schema.safeParse(payload)
    if (!result.success) {
      const errorMessage = formatErrorMessage(result.error, schema)
      throw new Error(errorMessage)
    }
  }

  async getAttendance(options: GetAttendanceArgs) {
    const { data } = await this.client.get<AttendanceResponse>('/attendance', { params: options })
    if (!this.shouldSkipValidation) {
      const { attendanceSchema } = await import('./schemas/attendance')
      this.validateSchema(attendanceSchema, data)
    }
    return data
  }

  async getAwards(awardId = '') {
    const { data } = await this.client.get<GetAwardsResponse>('/awards/' + awardId)
    if (!this.shouldSkipValidation) {
      const { getAwardsSchema } = await import('./schemas/awards')
      this.validateSchema(getAwardsSchema, data)
    }
    return data
  }

  async getAwardRecipients({ awardId, ...options }: GetAwardRecipientsArgs) {
    const { data } = await this.client.get<GetAwardRecipientResponse>(`/awards/${awardId}/recipients`, {
      params: options,
    })
    if (!this.shouldSkipValidation) {
      const { awardRecipientSchema } = await import('./schemas/awards')
      this.validateSchema(awardRecipientSchema, data)
    }
    return data
  }

  async getConferences(options?: GetConferenceArgs) {
    const { data } = await this.client.get<ConferenceResponse>('/conferences', { params: options })
    if (!this.shouldSkipValidation) {
      const { conferencesSchema } = await import('./schemas/conferences')
      this.validateSchema(conferencesSchema, data)
    }
    return data
  }

  async getDivisions(options?: GetDivisionsArgs) {
    const { data } = await this.client.get<DivisionsResponse>('/divisions', { params: options })
    if (!this.shouldSkipValidation) {
      const { divisionsSchema } = await import('./schemas/divisions')
      this.validateSchema(divisionsSchema, data)
    }
    return data
  }

  /** When draft year is not provided, returns the most current draft. For example, when this is called on April 3rd 2023,
   * it will return the 2023 draft, which hasn't happened yet.
   */
  async getDraft({ draftYear, ...options }: GetDraftArgs = {}) {
    const draftYearToSend = draftYear ? draftYear : ''
    const { data } = await this.client.get<DraftResponse>(`/draft/${draftYearToSend}`, { params: options })
    if (!this.shouldSkipValidation) {
      const { draftSchema } = await import('./schemas/draft')
      this.validateSchema(draftSchema, data)
    }
    return data
  }

  async getDraftProspects({ draftYear, ...options }: GetDraftArgs = {}) {
    const draftYearToSend = draftYear ? draftYear : ''
    const { data } = await this.client.get<DraftProspectsResponse>(`/draft/prospects/${draftYearToSend}`, {
      params: options,
    })
    if (!this.shouldSkipValidation) {
      const { draftProspectsSchema } = await import('./schemas/draft')
      this.validateSchema(draftProspectsSchema, data)
    }
    return data
  }

  /** Returns the most recent draft pick. If used outside the live draft, will return the very last round's, very last pick */
  async getDraftLatestDraftPick({ draftYear, ...options }: GetDraftArgs = {}) {
    const draftYearToSend = draftYear ? draftYear : ''
    // TODO: figure out most recent draft year
    const { data } = await this.client.get<LatestDraftPickResponse>(`/draft/prospects/${draftYearToSend}`, {
      params: options,
    })
    if (!this.shouldSkipValidation) {
      const { latestDraftPickSchema } = await import('./schemas/draft')
      this.validateSchema(latestDraftPickSchema, data)
    }
    return data
  }

  getGame = async ({ gamePk, ...options }: GetGameArgs) => {
    const { data } = await this.client.request<GameResponse>({
      baseURL: this.getUrl(true),
      url: `/game/${gamePk}/feed/live`,
      params: options,
    })
    if (!this.shouldSkipValidation) {
      const { gameSchema } = await import('./schemas/game')
      this.validateSchema(gameSchema, data)
    }

    return data
  }
}
