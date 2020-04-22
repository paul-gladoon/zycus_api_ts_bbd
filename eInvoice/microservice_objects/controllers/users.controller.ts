import 'codeceptjs'

const {I} = inject()

class UsersController {
  private token: string
  private headers: object
  private getSingleUserEndpoint: string
  private getUserEmailsEndpoint: string

  constructor () {
    this.token = process.env.API_TOKEN
    this.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `token ${this.token || 'b4e4801ac59bc670d4eabf4ec16b7149c52e3a19'}`
    }
    this.getSingleUserEndpoint = '/users/'
    this.getUserEmailsEndpoint = '/user/emails'
  }

  async getSingleUser(userName, requestHeaders) {
    return I.sendGetRequest(this.getSingleUserEndpoint + userName, requestHeaders || this.headers)
  }

  async getUserEmails (requestHeaders) {
    return I.sendGetRequest(this.getUserEmailsEndpoint, requestHeaders || this.headers)
  }

  async postUserEmails (bodyRequest, requestHeaders) {
    return I.sendPostRequest(this.getUserEmailsEndpoint, bodyRequest, requestHeaders || this.headers)
  }
}

export {UsersController}
