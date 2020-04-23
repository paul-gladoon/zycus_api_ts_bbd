import 'codeceptjs'
import {Microservice} from '../../microservice_objects'

declare const Given: any
const microservice = new Microservice()
const dataMemory = {} as any

Given('I am send auth GET Request', async function() {
  const {status, data} = await microservice.authenticationController.getAuth() as any
  dataMemory.getAuth = {status, data}
})

Given('I am check variable', async function() {
  console.log(dataMemory.getAuth)
})