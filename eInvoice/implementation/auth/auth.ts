import 'codeceptjs'
import {Microservice} from '../../microservice_objects'

declare const Given: any

const microservice = new Microservice()

Given('I am send auth GET Request', async () => {
  const {status, data} = await microservice.authenticationController.getAuth() as any
  console.log({status, data})
})