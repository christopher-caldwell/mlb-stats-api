import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '@setup/(.*)': '<rootDir>/tests/setup/$1',
  },
  clearMocks: true,
}

export default config
