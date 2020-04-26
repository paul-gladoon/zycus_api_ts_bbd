import 'codeceptjs'
import * as chai from 'chai'
import * as schema from 'chai-json-schema'

chai.use(schema)
const {assert} = chai
const {I} = inject()

class AttachmentResourceController {
  private headers: object
  private root: string
  private endpointAdd: string

  constructor () {
    this.root = '/attachment'
    this.endpointAdd = '/add'
    this.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }

  public async postAttachmentAdd(moduleName: string, requestBody: object, requestHeaders?: object) {
    return I.sendPostRequest(`${this.root}/${moduleName}${this.endpointAdd}`, requestBody, requestHeaders || this.headers)
  }
}

export {AttachmentResourceController}
