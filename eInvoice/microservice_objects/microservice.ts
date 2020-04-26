import {
  AttachmentResourceController, CBLController, InvoiceResourceController
} from './controllers'

class Microservice {
  public attachmentResourceController: AttachmentResourceController
  public cBLController: CBLController
  public invoiceResourceController: InvoiceResourceController

  constructor () {
    this.attachmentResourceController = new AttachmentResourceController()
    this.cBLController = new CBLController()
    this.invoiceResourceController = new InvoiceResourceController()
  }
}

export {Microservice}
