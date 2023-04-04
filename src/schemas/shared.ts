import { z } from 'zod'

export const homeSchema = z
  .object({
    city: z.string(),
    state: z.string().nullish(),
    country: z.string(),
  })
  .describe('Home')

export const schoolSchema = z
  .object({
    name: z.string(),
    schoolClass: z.string().nullish(),
    country: z.string(),
    state: z.string().nullish(),
  })
  .describe('School')

export const personSchema = z
  .object({
    id: z.number(),
    fullName: z.string().nullish(),
    link: z.string(),
    firstName: z.string().nullish(),
    lastName: z.string().nullish(),
    birthDate: z.string().nullish(),
    currentAge: z.number().nullish(),
    birthCity: z.string().nullish(),
    birthStateProvince: z.string().nullish(),
    birthCountry: z.string().nullish(),
    height: z.string().nullish(),
    weight: z.number().nullish(),
    active: z.boolean().nullish(),
    primaryPosition: z.object({
      code: z.string(),
      name: z.string(),
      type: z.string(),
      abbreviation: z.string(),
    }),
    useName: z.string().nullish(),
    useLastName: z.string().nullish(),
    middleName: z.string().nullish(),
    boxscoreName: z.string().nullish(),
    gender: z.string().nullish(),
    isPlayer: z.boolean().nullish(),
    isVerified: z.boolean().nullish(),
    draftYear: z.number().nullish(),
    batSide: z.object({ code: z.string(), description: z.string() }).nullish(),
    pitchHand: z.object({ code: z.string(), description: z.string() }).nullish(),
    nameFirstLast: z.string().nullish(),
    nameSlug: z.string().nullish(),
    firstLastName: z.string().nullish(),
    lastFirstName: z.string().nullish(),
    lastInitName: z.string().nullish(),
    initLastName: z.string().nullish(),
    fullFMLName: z.string().nullish(),
    fullLFMName: z.string().nullish(),
    strikeZoneTop: z.number().nullish(),
    strikeZoneBottom: z.number().nullish(),
  })
  .describe('Person')

export const teamSchema = z
  .object({
    springLeague: z.object({
      id: z.number(),
      name: z.string(),
      link: z.string(),
      abbreviation: z.string(),
    }),
    allStarStatus: z.string(),
    id: z.number(),
    name: z.string(),
    link: z.string(),
  })
  .describe('Team')

export const fullTeamSchema = teamSchema
  .extend({
    season: z.number(),
    venue: z.object({ id: z.number(), name: z.string(), link: z.string() }),
    springVenue: z.object({ id: z.number(), link: z.string() }),
    teamCode: z.string(),
    fileCode: z.string(),
    abbreviation: z.string(),
    teamName: z.string(),
    locationName: z.string(),
    firstYearOfPlay: z.string(),
    league: z.object({ id: z.number(), name: z.string(), link: z.string() }),
    division: z.object({
      id: z.number(),
      name: z.string(),
      link: z.string(),
    }),
    sport: z.object({ id: z.number(), link: z.string(), name: z.string() }),
    shortName: z.string(),
    franchiseName: z.string(),
    clubName: z.string(),
    active: z.boolean(),
  })
  .describe('Full Team')
