import { beforeEach, describe, expect, it } from 'vitest'
import { faker } from '@faker-js/faker'
import { mock, MockProxy } from 'vitest-mock-extended'

import { LoginRequest, Method } from '../../../src/domain/entities'
import { HttpClient, LoginUsecase } from '../../../src/domain/contracts'
import { Login } from '../../../src/domain/usecases'

const loginRequest = (): LoginRequest => ({
  username: faker.name.firstName(),
  password: faker.random.alphaNumeric()
})

describe('UseCase login.ts', () => {
  let http: MockProxy<HttpClient>
  let sut: LoginUsecase
  let body: any

  beforeEach(() => {
    body = { accessToken: faker.datatype.uuid(), refreshToken: faker.datatype.uuid() }
    http = mock()
    http.request.mockResolvedValue({ statusCode: 200, body })
    sut = new Login(http)
  })

  it('should call the function and return the correct parameters', async () => {
    const request = loginRequest()
    await sut.perform(request)
    expect(http.request).toHaveBeenCalledWith({ url: process.env.LOGIN_API_URL, method: Method.post, body: request })
    expect(http.request).toHaveBeenCalledTimes(1)
  })

  it('should return success when calling the method', async () => {
    const request = loginRequest()
    const response = await sut.perform(request)
    expect(response).toEqual(body)
  })

  it('should handle when there is an error in the validation and non-registration of the data', async () => {
    const request = loginRequest()
    delete request.username
    try {
      await sut.perform(request)
    } catch (error) {
      expect(http.request).not.toHaveBeenCalled()
      expect(http.request).toHaveBeenCalledTimes(0)
    }
  })

  it('should handle when validation error occurs', async () => {
    const request = loginRequest()
    delete request.password
    try {
      await sut.perform(request)
    } catch (error) {
      expect(error.message).toEqual('Bad Request: Password required')
      expect(error.name).toEqual('BadRequest')
    }
  })

  it('should return an exception if there is an error in the infrastructure', async () => {
    http.request.mockRejectedValueOnce(new Error('error_infra'))
    const request = loginRequest()
    const promise = sut.perform(request)
    promise.catch(() => {
      expect(http.request).toHaveBeenCalledWith({ url: process.env.LOGIN_API_URL, method: Method.post, body: request })
      expect(http.request).toHaveBeenCalledTimes(1)
    })
  })
})
