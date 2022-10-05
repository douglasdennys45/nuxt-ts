import { BadRequest } from './errors/bad-request'
import { LoginRequest } from './types'

export class Login {
  constructor (private readonly request: LoginRequest) {}

  auth (): LoginRequest {
    const errors = this.isValid()
    if (errors.length > 0) throw new BadRequest(errors.toString())
    return this.request
  }

  private isValid (): string[] {
    const errors: string[] = []
    if (!this.request.username) {
      errors.push('Username required')
    }
    if (!this.request.password) {
      errors.push('Password required')
    }
    return errors
  }
}
