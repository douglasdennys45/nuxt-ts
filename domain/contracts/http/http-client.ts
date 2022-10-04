export interface HttpClient {
  request (payload: HttpClient.Request): Promise<HttpClient.Response>
}

export namespace HttpClient {
  export type Request = any
  export type Response = any
}