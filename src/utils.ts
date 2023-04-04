import type { ZodError, ZodSchema } from 'zod'

export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>
  }[Keys]

export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
  }[Keys]

export const formatErrorMessage = (error: ZodError, schema: ZodSchema): string => {
  const errorName = schema.description ? `${schema.description} schema` : ''

  if (error.errors.length === 1) {
    const { path, code, message } = error.issues[0]
    const occurrencePath = path.join('.')
    return `${errorName}${code} occurred at ${occurrencePath}: ${message}`
  }
  let errorMessage = `${error.issues.length} errors occurred during validation ${errorName}:\n\n`
  error.issues.forEach(({ path, code, message }) => {
    errorMessage += '  - '
    const occurrencePath = path.join('.')
    errorMessage += `${code} occurred at ${occurrencePath}: ${message}\n`
  })
  return errorMessage
}
