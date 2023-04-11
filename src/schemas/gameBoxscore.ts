import { z } from 'zod'

import { TypeGenConfig } from '../types'

const gameBoxScoreSchema = z.object({}).describe('Game Boxscore')

export type GameBoxScoreSchemaResponse = z.infer<typeof gameBoxScoreSchema>

export const gameBoxscoreGen: TypeGenConfig = {
  typeName: 'GameBoxScoreResponse',
  outputFileName: 'gameBoxscore.ts',
  schema: gameBoxScoreSchema,
}

export interface GetGameBoxscoreArgs {
  timecode?: string
  fields?: string
  gamePk: string | number
}
