const REST_API_URL = process.env.API_RUN_ENV || 'http://ha.app.qc.zycus.net:53680/einvoice/soa-services/restapi'

exports.config = {
  tests: './*_test.js',
  name: 'zycus-automation',
  output: './output',
  helpers: {
    REST: {
      endpoint: REST_API_URL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }
  },
  gherkin: {
    features: './eInvoice/features/**/*.feature',
    steps: './eInvoice/implementation/**/*.ts'
  },
  plugins: {
    allure: {
      enabled: true
    }
  },
  require: ['ts-node/register']
}
