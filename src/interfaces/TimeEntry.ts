export interface TimeEntry {
  id: number
  wid: number
  billable: boolean
  start: Date
  stop: Date
  duration: number
  description: string
  tags: string[]
  at: Date
}
