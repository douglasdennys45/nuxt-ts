export enum Method {
  get = 'get',
  post = 'post',
  patch = 'patch',
  delete = 'delete',
  put = 'put'
}

export interface HttpRequest {
  url: string
  method: Method
  body?: any
  headers?: any
}

export interface HttpResponse {
  statusCode: number
  body: any
}
