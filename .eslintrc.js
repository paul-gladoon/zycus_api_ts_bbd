module.exports = {
  "plugins": [
    "codeceptjs"
  ],
  env: {
    "codeceptjs/codeceptjs": true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "no-undef": "off"
  }
}
