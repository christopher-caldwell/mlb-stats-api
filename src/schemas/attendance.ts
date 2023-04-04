import { z } from 'zod'

import { RequireAtLeastOne } from '../utils'

export const attendanceSchema = z.object({
  copyright: z.string(),
  records: z.array(
    z.object({
      openingsTotal: z.number(),
      openingsTotalAway: z.number(),
      openingsTotalHome: z.number(),
      openingsTotalLost: z.number(),
      gamesTotal: z.number(),
      gamesAwayTotal: z.number(),
      gamesHomeTotal: z.number(),
      year: z.string(),
      attendanceAverageAway: z.number(),
      attendanceAverageHome: z.number().nullish(),
      attendanceAverageYtd: z.number(),
      attendanceHigh: z.number().nullish(),
      attendanceHighDate: z.string().nullish(),
      attendanceHighGame: z
        .object({
          gamePk: z.number(),
          link: z.string(),
          content: z.object({ link: z.string() }),
          dayNight: z.string(),
        })
        .nullish(),
      attendanceLow: z.number().nullish(),
      attendanceLowDate: z.string().nullish(),
      attendanceLowGame: z
        .object({
          gamePk: z.number(),
          link: z.string(),
          content: z.object({ link: z.string() }),
          dayNight: z.string(),
        })
        .nullish(),
      attendanceOpeningAverage: z.number().nullish(),
      attendanceTotal: z.number().nullish(),
      attendanceTotalAway: z.number(),
      attendanceTotalHome: z.number().nullish(),
      gameType: z.object({ id: z.string(), description: z.string() }),
      team: z.object({ id: z.number(), name: z.string(), link: z.string() }),
    })
  ),
  aggregateTotals: z.object({
    openingsTotalAway: z.number(),
    openingsTotalHome: z.number(),
    openingsTotalLost: z.number(),
    openingsTotalYtd: z.number(),
    attendanceAverageAway: z.number(),
    attendanceAverageHome: z.number(),
    attendanceAverageYtd: z.number(),
    attendanceHigh: z.number(),
    attendanceHighDate: z.string(),
    attendanceTotal: z.number(),
    attendanceTotalAway: z.number(),
    attendanceTotalHome: z.number(),
  }),
})

export type AttendanceResponse = z.infer<typeof attendanceSchema>

export type GetAttendanceArgs = RequireAtLeastOne<
  {
    teamId?: number
    leagueId?: number
    leagueListId?: number
  },
  'leagueId' | 'leagueListId' | 'teamId'
> &
  // TODO: not sure what type these are
  Partial<{
    fields: string
    gameType: string
    date: string
    season: string
  }>
