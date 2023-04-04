import { z } from 'zod'

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

export type DivisionsResponse = z.infer<typeof divisionsSchema>

export interface GetDivisionsArgs {
  divisionId?: number
  leagueId?: number
  sportId?: number
}
