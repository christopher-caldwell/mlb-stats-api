import { z } from 'zod'

import { TypeGenConfig } from '../types'

export const getAwardsSchema = z
  .object({
    copyright: z.string(),
    awards: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        description: z.string().nullish(),
        sortOrder: z.number().nullish(),
        sport: z.object({ id: z.number(), link: z.string() }).nullish(),
        notes: z.string().nullish(),
        league: z.object({ id: z.number(), link: z.string() }).nullish(),
      })
    ),
  })
  .describe('Awards Schema')

export const awardRecipientSchema = z
  .object({
    copyright: z.string(),
    awards: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        date: z.string(),
        season: z.string(),
        team: z.object({ id: z.number(), link: z.string() }).nullish(),
        player: z.object({
          id: z.number(),
          link: z.string(),
          primaryPosition: z.object({
            code: z.string(),
            name: z.string(),
            type: z.string(),
            abbreviation: z.string(),
          }),
          nameFirstLast: z.string(),
        }),
      })
    ),
  })
  .describe('Award Recipient Schema')

export type GetAwardsResponse = z.infer<typeof getAwardsSchema>
export type GetAwardRecipientResponse = z.infer<typeof awardRecipientSchema>

export const awardsGen: TypeGenConfig = {
  typeName: 'AwardsResponse',
  outputFileName: 'awards.ts',
  schema: getAwardsSchema,
}
export const awardsRecipientGen: TypeGenConfig = {
  typeName: 'AwardsRecipientResponse',
  outputFileName: 'awardsRecipient.ts',
  schema: awardRecipientSchema,
}

export interface GetAwardRecipientsArgs {
  sportId?: number
  leagueId?: number
  season?: number
  hydrate?: string
  fields?: string
  awardId: string
}
