import { mergeUnionsIntoOptionals } from './mergeUnions'
import { schemas } from './schemas'

const output = mergeUnionsIntoOptionals(schemas)
console.log(output)
