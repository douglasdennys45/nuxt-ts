import { LoginRequest } from '~~/src/domain/entities'

export interface LoginUsecase {
  perform: (payload: LoginUsecase.Request) => Promise<LoginUsecase.Response>
}

export namespace LoginUsecase {
  export type Request = LoginRequest
  export type Response = {
    accessToken: string
    refreshToken: string
  }
}
