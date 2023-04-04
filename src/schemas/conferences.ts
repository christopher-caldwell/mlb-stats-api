import { z } from 'zod'

export const conferencesSchema = z
  .object({
    copyright: z.string(),
    conferences: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        link: z.string(),
        abbreviation: z.string(),
        hasWildcard: z.boolean(),
        league: z.object({ id: z.number(), link: z.string() }),
        sport: z.object({ id: z.number(), link: z.string() }),
        nameShort: z.string(),
      })
    ),
  })
  .describe('Conferences Schema')

export type ConferenceResponse = z.infer<typeof conferencesSchema>

export interface GetConferenceArgs {
  conferenceId?: number
  season?: number
  fields?: number
}
