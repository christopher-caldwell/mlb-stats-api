import type { ZodSchema } from 'zod'
import axios, { AxiosInstance } from 'axios'

import type {
  GetAttendanceArgs,
  GetAwardRecipientsArgs,
  GetConferenceArgs,
  GetDivisionsArgs,
  GetDraftArgs,
  GetGameArgs,
  GetGameContentArgs,
} from './schemas'
import type {
  AttendanceResponse,
  AwardsResponse,
  AwardsRecipientResponse,
  DraftResponse,
  GameResponse,
  LatestDraftPickResponse,
  ConferenceResponse,
  DraftProspectsResponse,
  DivisionsResponse,
  GameContentResponse,
} from './types'
import { formatErrorMessage } from './utils'
import {
  getAttendance,
  getAwards,
  getAwardRecipients,
  getConferences,
  getDivisions,
  getDraft,
  getDraftProspects,
  getDraftLatestDraftPick,
  getGame,
  getGameBoxscore,
  getGameContent,
} from './endpoints'

export class MlbStatsApi {
  apiUrl = 'https://statsapi.mlb.com/api/'
  version = 'v1'
  client: AxiosInstance

  // endpoints
  getAttendance: (options: GetAttendanceArgs) => Promise<AttendanceResponse>
  getAwards: (awardId?: string) => Promise<AwardsResponse>
  getAwardRecipients: (options: GetAwardRecipientsArgs) => Promise<AwardsRecipientResponse>
  getConferences: (options: GetConferenceArgs) => Promise<ConferenceResponse>
  getDivisions: (options: GetDivisionsArgs) => Promise<DivisionsResponse>
  getDraft: (options: GetDraftArgs) => Promise<DraftResponse>
  getDraftProspects: (options: GetDraftArgs) => Promise<DraftProspectsResponse>
  getDraftLatestDraftPick: (options: GetDraftArgs) => Promise<LatestDraftPickResponse>
  getGame: (options: GetGameArgs) => Promise<GameResponse>
  getGameBoxscore: (options: GetGameArgs) => Promise<{}>
  getGameContent: (options: GetGameContentArgs) => Promise<GameContentResponse>

  constructor(public shouldSkipValidation = false, client?: AxiosInstance) {
    this.getAttendance = getAttendance.bind(this)
    this.getAwards = getAwards.bind(this)
    this.getAwardRecipients = getAwardRecipients.bind(this)
    this.getConferences = getConferences.bind(this)
    this.getDivisions = getDivisions.bind(this)
    this.getDraft = getDraft.bind(this)
    this.getDraftProspects = getDraftProspects.bind(this)
    this.getDraftLatestDraftPick = getDraftLatestDraftPick.bind(this)
    this.getGame = getGame.bind(this)
    this.getGameBoxscore = getGameBoxscore.bind(this)
    this.getGameContent = getGameContent.bind(this)

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
}
