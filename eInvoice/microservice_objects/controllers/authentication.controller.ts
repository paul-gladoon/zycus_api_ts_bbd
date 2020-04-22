import 'codeceptjs'

const {I} = inject()

class AuthenticationController {
  private token: string
  private headers: object

  constructor () {
    this.token = process.env.API_TOKEN
    this.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `token ${this.token || 'b4e4801ac59bc670d4eabf4ec16b7149c52e3a19'}`
    }
  }

  public async getAuth(requestHeaders?: object) {
    return I.sendGetRequest('/', requestHeaders || this.headers)
  }
}

export {AuthenticationController}
