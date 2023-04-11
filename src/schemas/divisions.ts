import { z } from 'zod'

import type { TypeGenConfig } from '../types'

export const divisionsSchema = z
  .object({
    copyright: z.string(),
    divisions: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        season: z.string(),
        nameShort: z.string(),
        link: z.string(),
        abbreviation: z.string(),
        league: z.object({ id: z.number(), link: z.string() }),
        sport: z.object({ id: z.number(), link: z.string() }),
        hasWildcard: z.boolean(),
        sortOrder: z.number(),
        numPlayoffTeams: z.number().nullish(),
        active: z.boolean(),
      })
    ),
  })
  .describe('Divisions Schema')

export type DivisionsSchemaResponse = z.infer<typeof divisionsSchema>

export const divisionsGen: TypeGenConfig = {
  typeName: 'DivisionsResponse',
  outputFileName: 'divisions.ts',
  schema: divisionsSchema,
}

export interface GetDivisionsArgs {
  divisionId?: number
  leagueId?: number
  sportId?: number
}
