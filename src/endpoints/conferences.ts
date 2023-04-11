import { MlbStatsApi } from '../'
import type { ConferenceResponse } from '../types'

export const getConferences: MlbStatsApi['getConferences'] = async function (this: MlbStatsApi, options) {
  const { data } = await this.client.get<ConferenceResponse>('/conferences', { params: options })
  if (!this.shouldSkipValidation) {
    const { conferencesSchema } = await import('../schemas/conferences')
    this.validateSchema(conferencesSchema, data)
  }
  return data
}
