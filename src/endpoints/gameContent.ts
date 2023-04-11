import { MlbStatsApi } from '../'
import type { GameContentResponse } from '../types'

export const getGameContent: MlbStatsApi['getGameContent'] = async function (
  this: MlbStatsApi,
  { gamePk, ...options }
) {
  const { data } = await this.client.get<GameContentResponse>(`/game/${gamePk}/content`, {
    params: options,
  })
  // TODO: clean this up to just give a key? Possible to import with variables?
  if (!this.shouldSkipValidation) {
    const { gameContentSchema } = await import('../schemas/gameContent')
    this.validateSchema(gameContentSchema, data)
  }

  return data
}
