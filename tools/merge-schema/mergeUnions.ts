import { ZodType, ZodObject } from 'zod'
import assert from 'assert'

import { zodKeys } from './keys'

export const mergeUnionsIntoOptionals = (schemas: ZodType[]) => {
  /** Keeps track of the number of occurrences in the type. If it matches the length, it's required */
  const instanceTracker: Record<string, number> = {}
  /** Map tracking which fields are optional */
  const output: Record<string, boolean> = {}
  schemas.forEach(schema => {
    const keys = zodKeys(schema)
    keys.forEach(key => {
      instanceTracker[key] = instanceTracker[key] ? instanceTracker[key] + 1 : 1
      assert(schema instanceof ZodObject)
      output[key] = false
    })
  })
  Object.entries(instanceTracker).forEach(([key, instances]) => {
    const isRequired = instances === schemas.length
    if (isRequired) {
      output[key] = true
    }
  })

  return output
}
