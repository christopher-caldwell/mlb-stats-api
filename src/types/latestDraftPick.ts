export interface LatestDraftPickResponse {
  copyright: string
  pick?:
    | ({
        pickRound: string
        pickNumber: number
        roundPickNumber: number
        /** Home */
        home: {
          city: string
          state?: (string | null) | undefined
          country: string
        }
        /** School */
        school: {
          name: string
          schoolClass?: (string | null) | undefined
          country: string
          state?: (string | null) | undefined
        }
        headshotLink: string
        /** Person */
        person: {
          id: number
          fullName?: (string | null) | undefined
          link: string
          firstName?: (string | null) | undefined
          lastName?: (string | null) | undefined
          birthDate?: (string | null) | undefined
          currentAge?: (number | null) | undefined
          birthCity?: (string | null) | undefined
          birthStateProvince?: (string | null) | undefined
          birthCountry?: (string | null) | undefined
          height?: (string | null) | undefined
          weight?: (number | null) | undefined
          active?: (boolean | null) | undefined
          primaryPosition: {
            code: string
            name: string
            type: string
            abbreviation: string
          }
          useName?: (string | null) | undefined
          useLastName?: (string | null) | undefined
          middleName?: (string | null) | undefined
          boxscoreName?: (string | null) | undefined
          gender?: (string | null) | undefined
          isPlayer?: (boolean | null) | undefined
          isVerified?: (boolean | null) | undefined
          draftYear?: (number | null) | undefined
          batSide?:
            | ({
                code: string
                description: string
              } | null)
            | undefined
          pitchHand?:
            | ({
                code: string
                description: string
              } | null)
            | undefined
          nameFirstLast?: (string | null) | undefined
          nameSlug?: (string | null) | undefined
          firstLastName?: (string | null) | undefined
          lastFirstName?: (string | null) | undefined
          lastInitName?: (string | null) | undefined
          initLastName?: (string | null) | undefined
          fullFMLName?: (string | null) | undefined
          fullLFMName?: (string | null) | undefined
          strikeZoneTop?: (number | null) | undefined
          strikeZoneBottom?: (number | null) | undefined
          xrefIds: {
            xrefId: string
            xrefType: string
            season: string
          }[]
        }
        /** Full Team */
        team: {
          springLeague: {
            id: number
            name: string
            link: string
            abbreviation: string
          }
          allStarStatus: string
          id: number
          name: string
          link: string
          season: number
          venue: {
            id: number
            name: string
            link: string
          }
          springVenue: {
            id: number
            link: string
          }
          teamCode: string
          fileCode: string
          abbreviation: string
          teamName: string
          locationName: string
          firstYearOfPlay: string
          league: {
            id: number
            name: string
            link: string
          }
          division: {
            id: number
            name: string
            link: string
          }
          sport: {
            id: number
            link: string
            name: string
          }
          shortName: string
          franchiseName: string
          clubName: string
          active: boolean
        }
        draftType: {
          code: string
          description: string
        }
        isDrafted: boolean
        isPass: boolean
        year: string
      } | null)
    | undefined
  number?: (number | null) | undefined
  nextUp?: (unknown[] | null) | undefined
}
