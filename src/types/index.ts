import type { ZodSchema } from 'zod'

export * from './attendance'
export * from './awards'
export * from './awardsRecipient'
export * from './conferences'
export * from './divisions'
export * from './draft'
export * from './draftProspect'
export * from './game'
export * from './gameBoxscore'
export * from './gameContent'
export * from './latestDraftPick'

export interface TypeGenConfig {
  typeName: string
  outputFileName: string
  schema: ZodSchema
}
