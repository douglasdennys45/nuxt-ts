import { LoginUsecase, HttpClient } from '~~/src/domain/contracts'
import { Login as LoginEntity, Method } from '~~/src/domain/entities'

export class Login implements LoginUsecase {
  constructor (private readonly http: HttpClient) {}

  async perform (payload: LoginUsecase.Request): Promise<LoginUsecase.Response> {
    const login = new LoginEntity(payload)
    const { body } = await this.http.request({ url: process.env.LOGIN_API_URL, method: Method.post, body: login })
    return body
  }
}
