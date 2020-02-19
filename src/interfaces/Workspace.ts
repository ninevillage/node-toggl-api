export interface Workspace {
  id: number
  name: string
  at: Date
  default_hourly_rate: number
  default_currency: string
  projects_billable_by_default: boolean
  rounding: number
  rounding_minutes: number
  api_token: string
}
