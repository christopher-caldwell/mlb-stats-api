import { MlbStatsApi } from '../'
import type { GameResponse } from '../types'

export const getGameBoxscore: MlbStatsApi['getGameBoxscore'] = async function (
  this: MlbStatsApi,
  { gamePk, ...options }
) {
  const { data } = await this.client.request<GameResponse>({
    baseURL: this.getUrl(true),
    url: `/game/${gamePk}/feed/live`,
    params: options,
  })
  if (!this.shouldSkipValidation) {
    const { gameSchema } = await import('../schemas/game')
    this.validateSchema(gameSchema, data)
  }

  return data
}
