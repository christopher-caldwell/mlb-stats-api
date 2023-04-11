export interface DivisionsResponse {
  copyright: string
  divisions: {
    id: number
    name: string
    season: string
    nameShort: string
    link: string
    abbreviation: string
    league: {
      id: number
      link: string
    }
    sport: {
      id: number
      link: string
    }
    hasWildcard: boolean
    sortOrder: number
    numPlayoffTeams?: (number | null) | undefined
    active: boolean
  }[]
}
