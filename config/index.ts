export const config: any = {
  development: {
    baseURL: '',
    tokenKey: 'H5_token', // token key
    MOCK_ENABLED: 'YES', //是否使用 mock
    mockURL: 'https://api.xwhx.top'
  },
  production: {
    baseURL: 'https://api.xwhx.top',
    tokenKey: 'H5_token',
    MOCK_ENABLED: 'NO',
    mockURL: 'https://api.xwhx.top'
  }
}
