import { HttpRequest, HttpResponse } from '~~/src/domain/entities'

export interface HttpClient {
  request: (payload: HttpClient.Request) => Promise<HttpClient.Response>
}

export namespace HttpClient {
  export type Request = HttpRequest
  export type Response = HttpResponse
}
