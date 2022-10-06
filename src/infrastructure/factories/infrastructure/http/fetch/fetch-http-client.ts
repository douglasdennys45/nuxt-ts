import { HttpClient } from '~~/src/domain/contracts'
import { FetchHttpClient } from '~~/src/infrastructure/http'

export const mountFetchHttpClient = (): HttpClient => {
  return new FetchHttpClient()
}
