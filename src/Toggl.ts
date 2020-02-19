import { Configuration, Option, User } from './interfaces'

export const API_URL = 'https://www.toggl.com/api'
export const REPORTS_URL = 'https://www.toggl.com/api'
export const V8 = 'v8'
export const V9 = 'v9'

export class Toggl {
  constructor(private options: Option) {}

  static withEmailAndPassword(email: string, password: string, config?: Configuration): Toggl {
    return new Toggl({ email, password, config })
  }

  static withAPIToken(apiToken: string, config?: Configuration): Toggl {
    return new Toggl({ apiToken, config })
  }

  signup(): Promise<User> {
    return null
  }
}
