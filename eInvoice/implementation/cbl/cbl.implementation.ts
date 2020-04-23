import 'codeceptjs'
import {Microservice} from '../../microservice_objects'

declare const Given: any
const microservice = new Microservice()
const dataMemory = {} as any

Given('I am set headers for CBL endpoints: userId: {string}, tenantId: {string}, trackingNumber: {string}', 
  async function(userId: string, tenantId: string, trackingNumber: string) {
    microservice.cBLController.setHeaders = {userId, tenantId, trackingNumber}
})

Given('I am get the company entities using requestUserId: {string}', async function(requestUserId: string) {
  const {status, data} = await microservice.cBLController.getCompanyEntities(requestUserId) as any
  dataMemory.companyEntities = {status, data}
})

Given('I am get the Business Units using requestUserId: {string}, companyCode: {string}', 
  async function(requestUserId: string, companyCode: string) {
    const {status, data} = await microservice.cBLController.getBusinessUnits(requestUserId, companyCode) as any
    dataMemory.businessUnits = {status, data}
})