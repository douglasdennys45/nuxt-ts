import { LoginUsecase, HttpClient } from '../contracts'
import { Login as LoginEntity, Method } from '../entities'

export class Login implements LoginUsecase {
  constructor (private readonly http: HttpClient) {}

  async perform (payload: LoginUsecase.Request): Promise<LoginUsecase.Response> {
    const login = new LoginEntity(payload)
    const data = login.auth()
    const { body } = await this.http.request({ url: process.env.LOGIN_API_URL, method: Method.post, body: data })
    return body
  }
}
