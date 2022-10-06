import { LoginUsecase } from '~~/src/domain/contracts'
import { Login } from '~~/src/domain/usecases'

export const mountLogin = (): LoginUsecase => {
  return new Login()
}
