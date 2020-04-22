import {AuthenticationController, UsersController} from './controllers'

class Microservice {
  public authenticationController: AuthenticationController
  public usersController: UsersController

  constructor () {
    this.authenticationController = new AuthenticationController()
    this.usersController = new UsersController()
  }
}

export {Microservice}
