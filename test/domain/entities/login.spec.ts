import { describe, expect, it } from 'vitest'
import { faker } from '@faker-js/faker'

import { Login, LoginRequest } from '../../../src/domain/entities'

const loginRequest = (): LoginRequest => ({
  username: faker.name.firstName(),
  password: faker.random.alphaNumeric()
})

describe.skip('Entity login.ts', () => {
  it('should return the validated data', () => {
    const request = loginRequest()
    const login = new Login(request)
    const auth = login.auth()
    expect(auth).toEqual(request)
  })

  it('should return an exception when there is no username information', () => {
    const request = loginRequest()
    delete request.username
    const login = new Login(request)
    try {
      login.auth()
    } catch (error) {
      expect(error.message).toEqual('Bad Request: Username required')
      expect(error.name).toEqual('BadRequest')
    }
  })

  it('should return an exception when there is no password information', () => {
    const request = loginRequest()
    delete request.password
    const login = new Login(request)
    try {
      login.auth()
    } catch (error) {
      expect(error.message).toEqual('Bad Request: Password required')
      expect(error.name).toEqual('BadRequest')
    }
  })
})
