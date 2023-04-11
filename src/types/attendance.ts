export interface AttendanceResponse {
  copyright: string
  records: {
    openingsTotal: number
    openingsTotalAway: number
    openingsTotalHome: number
    openingsTotalLost: number
    gamesTotal: number
    gamesAwayTotal: number
    gamesHomeTotal: number
    year: string
    attendanceAverageAway: number
    attendanceAverageHome?: (number | null) | undefined
    attendanceAverageYtd: number
    attendanceHigh?: (number | null) | undefined
    attendanceHighDate?: (string | null) | undefined
    attendanceHighGame?:
      | ({
          gamePk: number
          link: string
          content: {
            link: string
          }
          dayNight: string
        } | null)
      | undefined
    attendanceLow?: (number | null) | undefined
    attendanceLowDate?: (string | null) | undefined
    attendanceLowGame?:
      | ({
          gamePk: number
          link: string
          content: {
            link: string
          }
          dayNight: string
        } | null)
      | undefined
    attendanceOpeningAverage?: (number | null) | undefined
    attendanceTotal?: (number | null) | undefined
    attendanceTotalAway: number
    attendanceTotalHome?: (number | null) | undefined
    gameType: {
      id: string
      description: string
    }
    team: {
      id: number
      name: string
      link: string
    }
  }[]
  aggregateTotals: {
    openingsTotalAway: number
    openingsTotalHome: number
    openingsTotalLost: number
    openingsTotalYtd: number
    attendanceAverageAway: number
    attendanceAverageHome: number
    attendanceAverageYtd: number
    attendanceHigh: number
    attendanceHighDate: string
    attendanceTotal: number
    attendanceTotalAway: number
    attendanceTotalHome: number
  }
}
