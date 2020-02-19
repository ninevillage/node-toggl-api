import { Configuration } from './Configuration'

export interface Option {
  apiToken?: string
  email?: string
  password?: string

  config?: Configuration
}
