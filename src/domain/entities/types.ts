export enum Method {
  get = 'get',
  post = 'post',
  patch = 'patch',
  delete = 'delete',
  put = 'put'
}

export type HttpRequest = {
  url: string
  method: Method
  body?: any
  headers?: any
}

export type HttpResponse = {
  statusCode: number
  body: any
}

export type LoginRequest = {
  username: string
  password: string
}

export type TypeError = {
  status: number
  code: string
  title: string
  detail: string
  link?: string
}
