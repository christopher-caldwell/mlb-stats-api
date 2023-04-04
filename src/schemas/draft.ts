import { z } from 'zod'

import { personSchema, schoolSchema, homeSchema, teamSchema, fullTeamSchema } from './shared'

export const draftSchema = z
  .object({
    copyright: z.string(),
    drafts: z.object({
      draftYear: z.number(),
      rounds: z.array(
        z.object({
          round: z.string(),
          picks: z.array(
            z.object({
              bisPlayerId: z.number(),
              pickRound: z.string(),
              pickNumber: z.number(),
              roundPickNumber: z.number(),
              rank: z.number().nullish(),
              pickValue: z.string().nullish(),
              signingBonus: z.string().nullish(),
              home: homeSchema,
              scoutingReport: z.string().nullish(),
              school: schoolSchema,
              blurb: z.string().nullish(),
              headshotLink: z.string().nullish(),
              person: personSchema,
              team: teamSchema,
              draftType: z.object({ code: z.string(), description: z.string() }),
              isDrafted: z.boolean(),
              isPass: z.boolean(),
              year: z.string(),
            })
          ),
        })
      ),
    }),
  })
  .describe('Draft Schema')

export const draftProspectsSchema = z
  .object({
    copyright: z.string(),
    totalSize: z.number(),
    queriedSize: z.number(),
    returnedSize: z.number(),
    offset: z.number(),
    prospects: z.array(
      z.object({
        bisPlayerId: z.number().nullish(),
        home: homeSchema,
        school: schoolSchema,
        headshotLink: z.string(),
        person: personSchema,
        draftType: z.object({ code: z.string(), description: z.string() }),
        isDrafted: z.boolean(),
        isPass: z.boolean(),
        year: z.string(),
      })
    ),
  })
  .describe('Draft Prospects')

export const latestDraftPickSchema = z
  .object({
    copyright: z.string(),
    pick: z
      .object({
        pickRound: z.string(),
        pickNumber: z.number(),
        roundPickNumber: z.number(),
        home: homeSchema,
        school: schoolSchema,
        headshotLink: z.string(),
        person: personSchema.extend({
          xrefIds: z.array(
            z.object({
              xrefId: z.string(),
              xrefType: z.string(),
              season: z.string(),
            })
          ),
        }),
        team: fullTeamSchema,
        draftType: z.object({ code: z.string(), description: z.string() }),
        isDrafted: z.boolean(),
        isPass: z.boolean(),
        year: z.string(),
      })
      .nullish(),
    number: z.number().nullish(),
    nextUp: z.array(z.unknown()).nullish(),
  })
  .describe('Latest Draft Pick')

export type DraftResponse = z.infer<typeof draftSchema>
export type DraftProspectsResponse = z.infer<typeof draftProspectsSchema>
export type LatestDraftPickResponse = z.infer<typeof latestDraftPickSchema>

export interface GetDraftArgs {
  limit?: number
  fields?: number
  round?: number
  name?: string
  // I can't get school to work
  // school?: string
  state?: string
  country?: string
  position?: string
  teamId?: string
  playerId?: string
  bisPlayerId?: string
  draftYear?: number
}
