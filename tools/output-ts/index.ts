import { printNode, zodToTs } from 'zod-to-ts'
import { resolve } from 'path'
import { writeFileSync } from 'fs'
import { execSync } from 'child_process'
// import * as schemas from '../../src/schemas/gameContent'
import type { TypeGenConfig } from '../../src/types'
import { attendanceGen } from '../../src/schemas/attendance'
import { awardsGen, awardsRecipientGen } from '../../src/schemas/awards'
import { conferencesGen } from '../../src/schemas/conferences'
import { divisionsGen } from '../../src/schemas/divisions'
import { draftGen, draftProspectsGen, latestDraftPickGen } from '../../src/schemas/draft'
import { gameGen } from '../../src/schemas/game'
import { gameBoxscoreGen } from '../../src/schemas/gameBoxscore'
import { gameContentGen } from '../../src/schemas/gameContent'

const typeOutputRoot = resolve(process.cwd(), 'src', 'types')

const generateTypes = (config: TypeGenConfig) => {
  const { node } = zodToTs(config.schema, config.typeName)
  const nodeString = printNode(node)

  const result = `export interface ${config.typeName} ${nodeString}`

  writeFileSync(resolve(typeOutputRoot, config.outputFileName), result)
}

generateTypes(attendanceGen)
generateTypes(awardsGen)
generateTypes(awardsRecipientGen)
generateTypes(conferencesGen)
generateTypes(divisionsGen)
generateTypes(draftGen)
generateTypes(draftProspectsGen)
generateTypes(latestDraftPickGen)
generateTypes(gameGen)
generateTypes(gameBoxscoreGen)
generateTypes(gameContentGen)

execSync('yarn prettier --write src/types')
