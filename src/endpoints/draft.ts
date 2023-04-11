import { MlbStatsApi } from '../'
import type { DraftResponse, DraftProspectsResponse, LatestDraftPickResponse } from '../types'

/** When draft year is not provided, returns the most current draft. For example, when this is called on April 3rd 2023,
 * it will return the 2023 draft, which hasn't happened yet.
 */
export const getDraft: MlbStatsApi['getDraft'] = async function (this: MlbStatsApi, { draftYear, ...options } = {}) {
  const draftYearToSend = draftYear ? draftYear : ''
  const { data } = await this.client.get<DraftResponse>(`/draft/${draftYearToSend}`, { params: options })
  if (!this.shouldSkipValidation) {
    const { draftSchema } = await import('../schemas/draft')
    this.validateSchema(draftSchema, data)
  }
  return data
}

export const getDraftProspects: MlbStatsApi['getDraftProspects'] = async function (
  this: MlbStatsApi,
  { draftYear, ...options } = {}
) {
  const draftYearToSend = draftYear ? draftYear : ''
  const { data } = await this.client.get<DraftProspectsResponse>(`/draft/prospects/${draftYearToSend}`, {
    params: options,
  })
  if (!this.shouldSkipValidation) {
    const { draftProspectsSchema } = await import('../schemas/draft')
    this.validateSchema(draftProspectsSchema, data)
  }
  return data
}

/** Returns the most recent draft pick. If used outside the live draft, will return the very last round's, very last pick */
export const getDraftLatestDraftPick: MlbStatsApi['getDraftLatestDraftPick'] = async function (
  this: MlbStatsApi,
  { draftYear, ...options } = {}
) {
  const draftYearToSend = draftYear ? draftYear : ''
  // TODO: figure out most recent draft year
  const { data } = await this.client.get<LatestDraftPickResponse>(`/draft/prospects/${draftYearToSend}`, {
    params: options,
  })
  if (!this.shouldSkipValidation) {
    const { latestDraftPickSchema } = await import('../schemas/draft')
    this.validateSchema(latestDraftPickSchema, data)
  }
  return data
}
