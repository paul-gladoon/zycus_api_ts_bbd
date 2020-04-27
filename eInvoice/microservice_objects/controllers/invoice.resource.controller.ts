import 'codeceptjs'
import * as chai from 'chai'
import * as schema from 'chai-json-schema'
import {schemas} from '../../json_schemas/so'

chai.use(schema)
const {assert} = chai
const {I} = inject()

class InvoiceResourceController {
  private headers: object
  private endpointFilter: string

  constructor() {
    this.endpointFilter = '/filter'
    this.headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  public set setHeaders(data) {
    this.headers['x-zycus-userId'] = data.userId
    this.headers['x-zycus-tenantId'] = data.tenantId
    this.headers['x-zycus-trackingNumber'] = data.trackingNumber
  }

  public async postInvoiceFilter(requestBody, requestHeaders?: object) {
    const response = await I.sendPostRequest(`/invoice${this.endpointFilter}`, requestBody, requestHeaders || this.headers)
    const {invoiceResource: {invoiceFilter}} = schemas

    return this.switcher(response, invoiceFilter)
  }

  private switcher(responseData, schemaObj) {
    function schemaChecker(schemaData) {
      if (!schemaData) throw new Error(`Please add schema for the status "${responseData.status}"`)
    }

    switch(responseData.status) {
      case 200:
        schemaChecker(schemaObj.schema200)
        assert.jsonSchema(responseData.data, schemaObj.schema200, `The response doesn't match the schema for 200 status.`)
        return responseData
      case 204:
        schemaChecker(schemaObj.schema204)
        assert.jsonSchema(responseData.data, schemaObj.schema204, `The response doesn't match the schema for 204 status.`)
        return responseData
      case 400:
        schemaChecker(schemaObj.schema400)
        assert.jsonSchema(responseData.data, schemaObj.schema400, `The response doesn't match the schema for 400 status.`)
        return responseData
      default:
        throw new Error(`There is no schema for "${responseData.status}" status.`)
    }
  }
}

export {InvoiceResourceController}