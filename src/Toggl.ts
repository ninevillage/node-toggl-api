import { Configuration, ProfileUpdate, SignUpRequest, TogglOptions, User } from './interfaces'
import got, { Got, GotReturn, NormalizedOptions } from 'got'

export const API_URL = 'https://www.toggl.com/api'
export const REPORTS_URL = 'https://www.toggl.com/api'
export const V8 = 'v8'
export const V9 = 'v9'

export class Toggl {
  private api: Got
  private reportApi: Got

  constructor(private togglOptions: TogglOptions) {
    this.api = got.extend({
      responseType: 'json',
      followRedirect: true,
      // resolveBodyOnly: true,
      prefixUrl: API_URL,
      handlers: [
        <T extends GotReturn>(options: NormalizedOptions, next: (options: NormalizedOptions) => T): T | Promise<T> => {
          options.username = this.togglOptions.email || this.togglOptions.apiToken
          options.password = this.togglOptions.password || 'api_token'
          options.auth = options.username + ':' + options.password
          return next(options)
        },
      ],
    })

    this.reportApi = this.api.extend({
      prefixUrl: REPORTS_URL,
    })
  }

  async signup(signUpRequest: SignUpRequest): Promise<User> {
    const response = await this.api.post<User>(`${V8}/signups`, {
      json: signUpRequest,
    })
    return response.body
  }

  async me(withRelatedData?: boolean): Promise<User> {
    const response = await this.api.get<User>(`${V8}/me?`, {
      searchParams: {
        // eslint-disable-next-line @typescript-eslint/camelcase
        with_related_data: withRelatedData || false,
      },
    })
    return response.body
  }

  async updateProfile(profileUpdate: ProfileUpdate): Promise<User> {
    const response = await this.api.put<User>(`${V8}/me`, {
      json: profileUpdate,
    })
    return response.body
  }

  async resetAPIToken(): Promise<string> {
    const response = await this.api.post<string>(`${V8}/reset_token`)
    const token = response.body

    if (this.togglOptions.apiToken) {
      this.togglOptions.apiToken = token
    }

    return token
  }

  static withEmailAndPassword(email: string, password: string, config?: Configuration): Toggl {
    return new Toggl({ email, password, config })
  }

  static withAPIToken(apiToken: string, config?: Configuration): Toggl {
    return new Toggl({ apiToken, config })
  }
}
