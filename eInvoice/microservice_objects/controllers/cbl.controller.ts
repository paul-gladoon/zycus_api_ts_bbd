import 'codeceptjs'
import * as chai from 'chai'
chai.use(require('chai-json-schema'))
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
    return I.sendGetRequest(`/CBL/bu/${requestUserId}/${companyCode}`, requestHeaders || this.headers)
  }
}

export {CBLController}