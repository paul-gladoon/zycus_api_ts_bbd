import 'codeceptjs'
import * as chai from 'chai'
import * as schema from 'chai-json-schema'
import {businessUnitsSchema204, businessUnitsSchema400} from '../../json_schemas'

chai.use(schema)
const {assert} = chai
const {I} = inject()

interface ICBLHeaders {
  userId: string
  tenantId: string
  trackingNumber: string
}

class CBLController {
  private headers: object
  private endpointFilter: string

  constructor() {
    this.endpointFilter = '/filter'
    this.headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  public set setHeaders(data: ICBLHeaders) {
    this.headers['x-zycus-userId'] = data.userId
    this.headers['x-zycus-tenantId'] = data.tenantId
    this.headers['x-zycus-trackingNumber'] = data.trackingNumber
  }

  public async getCompanyEntities(requestUserId: string, requestHeaders?: object) {
    return I.sendGetRequest(`/CBL/company/${requestUserId}`, requestHeaders || this.headers)
  }

  public async getBusinessUnits(requestUserId: string, companyCode: string, requestHeaders?: object) {
    const response = await I.sendGetRequest(`/CBL/bu/${requestUserId}/${companyCode}`, requestHeaders || this.headers) as any

    switch(response.status) {
      case 204:
        assert.jsonSchema(response.data, businessUnitsSchema204, `The response doesn't match the schema for 204 status.`)
        return response
      case 400:
        assert.jsonSchema(response.data, businessUnitsSchema400, `The response doesn't match the schema for 400 status.`)
        return response
      default:
        throw new Error(`There is no schema for "${response.status}" status.`)
    } 
  }
}

export {CBLController}