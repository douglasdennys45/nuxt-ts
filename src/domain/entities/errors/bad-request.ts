export class BadRequest extends Error {
  constructor (error: string) {
    super(`Bad Request: ${error}`)
    this.name = 'BadRequest'
  }
}
