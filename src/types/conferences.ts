export interface ConferenceResponse {
  copyright: string
  conferences: {
    id: number
    name: string
    link: string
    abbreviation: string
    hasWildcard: boolean
    league: {
      id: number
      link: string
    }
    sport: {
      id: number
      link: string
    }
    nameShort: string
  }[]
}
