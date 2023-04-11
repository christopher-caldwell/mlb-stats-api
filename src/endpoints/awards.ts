import { MlbStatsApi } from '../'
import type { AwardsRecipientResponse, AwardsResponse } from '../types'

export const getAwards: MlbStatsApi['getAwards'] = async function (this: MlbStatsApi, awardId = '') {
  const { data } = await this.client.get<AwardsResponse>('/awards/' + awardId)
  if (!this.shouldSkipValidation) {
    const { getAwardsSchema } = await import('../schemas/awards')
    this.validateSchema(getAwardsSchema, data)
  }
  return data
}

export const getAwardRecipients: MlbStatsApi['getAwardRecipients'] = async function (
  this: MlbStatsApi,
  { awardId, ...options }
) {
  const { data } = await this.client.get<AwardsRecipientResponse>(`/awards/${awardId}/recipients`, {
    params: options,
  })
  if (!this.shouldSkipValidation) {
    const { awardRecipientSchema } = await import('../schemas/awards')
    this.validateSchema(awardRecipientSchema, data)
  }
  return data
}
