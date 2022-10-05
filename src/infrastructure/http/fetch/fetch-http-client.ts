import { HttpClient } from '~~/src/domain/contracts'

export class FetchHttpClient implements HttpClient {
  async request (payload: HttpClient.Request): Promise<HttpClient.Response> {
    const { data, error } = await useFetch(payload.url, { method: payload.method, body: payload.body, headers: payload.headers })

    return {
      statusCode: error ? 200 : 500,
      body: data
    }
  }
}
