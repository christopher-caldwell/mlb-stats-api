export interface AwardsResponse {
  copyright: string
  awards: {
    id: string
    name: string
    description?: (string | null) | undefined
    sortOrder?: (number | null) | undefined
    sport?:
      | ({
          id: number
          link: string
        } | null)
      | undefined
    notes?: (string | null) | undefined
    league?:
      | ({
          id: number
          link: string
        } | null)
      | undefined
  }[]
}
