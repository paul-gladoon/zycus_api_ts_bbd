import {AttachmentResourceController, CBLController} from './controllers'

class Microservice {
  public attachmentResourceController: AttachmentResourceController
  public cBLController: CBLController

  constructor () {
    this.attachmentResourceController = new AttachmentResourceController()
    this.cBLController = new CBLController()
  }
}

export {Microservice}
