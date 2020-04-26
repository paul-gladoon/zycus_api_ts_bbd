import 'codeceptjs'
import {Microservice} from '../../microservice_objects'
import {testData} from '../../tests_data/tdo'

declare const Given: any
const microservice = new Microservice()
const dataMemory = {} as any

Given('I am set headers for Invoice Resource endpoints: userId: {string}, tenantId: {string}, trackingNumber: {string}', 
  async function(userId: string, tenantId: string, trackingNumber: string) {
    microservice.invoiceResourceController.setHeaders = {userId, tenantId, trackingNumber}
})

Given('I am post the invoice filter using requestBody: {string}', async function(requestBody: string) {
  const {invoiceResource} = testData
  const {status, data} = await microservice.invoiceResourceController.postInvoiceFilter(invoiceResource[requestBody]) as any
  dataMemory.postInvoiceFilter = {status, data}
})