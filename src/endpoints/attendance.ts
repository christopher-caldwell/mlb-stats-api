import { MlbStatsApi } from '../'
import type { AttendanceResponse } from '../types'
import type { GetAttendanceArgs } from '../schemas'

export const getAttendance: MlbStatsApi['getAttendance'] = async function (
  this: MlbStatsApi,
  options: GetAttendanceArgs
) {
  const { data } = await this.client.get<AttendanceResponse>('/attendance', { params: options })
  if (!this.shouldSkipValidation) {
    const { attendanceSchema } = await import('../schemas/attendance')
    this.validateSchema(attendanceSchema, data)
  }
  return data
}
