import { MlbStatsApi } from '../'
import type { DivisionsResponse } from '../types'

export const getDivisions: MlbStatsApi['getDivisions'] = async function (this: MlbStatsApi, options) {
  const { data } = await this.client.get<DivisionsResponse>('/divisions', { params: options })
  if (!this.shouldSkipValidation) {
    const { divisionsSchema } = await import('../schemas/divisions')
    this.validateSchema(divisionsSchema, data)
  }
  return data
}
