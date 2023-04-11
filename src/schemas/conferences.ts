import { z } from 'zod'

import type { TypeGenConfig } from '../types'

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

export type ConferenceSchemaResponse = z.infer<typeof conferencesSchema>

export const conferencesGen: TypeGenConfig = {
  typeName: 'ConferenceResponse',
  outputFileName: 'conferences.ts',
  schema: conferencesSchema,
}

export interface GetConferenceArgs {
  conferenceId?: number
  season?: number
  fields?: number
}
