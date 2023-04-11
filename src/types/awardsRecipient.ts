export interface AwardsRecipientResponse {
  copyright: string
  awards: {
    id: string
    name: string
    date: string
    season: string
    team?:
      | ({
          id: number
          link: string
        } | null)
      | undefined
    player: {
      id: number
      link: string
      primaryPosition: {
        code: string
        name: string
        type: string
        abbreviation: string
      }
      nameFirstLast: string
    }
  }[]
}
