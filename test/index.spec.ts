import { MlbStatsApi } from '../src'

const StatsApi = new MlbStatsApi()

describe('Attendance', () => {
  test('It returns data', async () => {
    expect.assertions(1)
    const response = await StatsApi.getAttendance({ teamId: 137 })
    expect(response).toBeTruthy()
  })
})

describe('Awards', () => {
  test('[getAwards] returns a list of awards', async () => {
    expect.assertions(1)
    const response = await StatsApi.getAwards()
    expect(response).toBeTruthy()
  })
  test('[getAwards] with an ID returns one award', async () => {
    expect.assertions(1)
    const response = await StatsApi.getAwards('MLBHOF')
    expect(response.awards).toHaveLength(1)
  })
  test('[getAwardRecipients] is truthy', async () => {
    expect.assertions(1)
    const response = await StatsApi.getAwardRecipients({ awardId: 'MLBHOF' })
    expect(response).toBeTruthy()
  })
})

describe('Conferences', () => {
  test('[getConferences] returns a list of conferences', async () => {
    expect.assertions(1)
    const response = await StatsApi.getConferences()
    expect(response).toBeTruthy()
  })
  test('[getConferences] with an ID returns one conference', async () => {
    expect.assertions(1)
    const response = await StatsApi.getConferences({ conferenceId: 301 })
    expect(response.conferences).toHaveLength(1)
  })
})

describe('Divisions', () => {
  test('[getDivisions] returns a list of conferences', async () => {
    expect.assertions(1)
    const response = await StatsApi.getDivisions()
    expect(response).toBeTruthy()
  })
  test('[getDivisions] with an ID returns one division', async () => {
    expect.assertions(1)
    const response = await StatsApi.getDivisions({ divisionId: 205 })
    expect(response.divisions).toHaveLength(1)
  })
})

describe('Draft', () => {
  test('[getDraft] with no year is truthy', async () => {
    expect.assertions(1)
    const response = await StatsApi.getDraft()
    expect(response.drafts).toBeTruthy()
  })
  test('[getDraft] with a given year returns that year', async () => {
    expect.assertions(1)
    const response = await StatsApi.getDraft({ draftYear: 2022 })
    expect(response.drafts.draftYear).toBe(2022)
  })
  test('[getDraftProspects] with no draft year is truthy', async () => {
    expect.assertions(2)
    const response = await StatsApi.getDraftProspects()
    expect(response).toBeTruthy()
    expect(Array.isArray(response.prospects)).toBe(true)
  })
  test('[getDraftProspects] with a draft year returns that draft year', async () => {
    expect.assertions(1)
    const response = await StatsApi.getDraftProspects({ draftYear: 2022 })
    expect(response.prospects[0].year).toBe('2022')
  })
  test('[getDraftLatestDraftPick] returns a draft pick', async () => {
    expect.assertions(1)
    const response = await StatsApi.getDraftLatestDraftPick({ draftYear: 2022 })
    expect(response).toBeTruthy()
  })
})

describe('Game', () => {
  test('[getGame] is truthy', async () => {
    expect.assertions(1)
    const response = await StatsApi.getGame({ gamePk: 718781 })
    expect(response).toBeTruthy()
  })
})
