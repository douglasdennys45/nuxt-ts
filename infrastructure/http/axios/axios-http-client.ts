import axios, { AxiosResponse } from 'axios'

import { HttpClient } from '~~/domain/contracts'

export class AxiosHttpClient implements HttpClient {
  async request (data: HttpClient.Request): Promise<HttpClient.Response> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers
      })
    } catch (error) {
      axiosResponse = error.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}