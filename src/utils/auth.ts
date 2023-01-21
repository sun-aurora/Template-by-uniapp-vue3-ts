import { config } from '@/../config'
// 用户cookie

const { tokenKey } = config[process.env.NODE_ENV || 'development']
export function getToken() {
  return uni.getStorageSync(tokenKey)
}

export function setToken(token: string) {
  return uni.setStorageSync(tokenKey, token)
}

export function removeToken() {
  return uni.removeStorageSync(tokenKey)
}

// 白名单 不需要 token 也可以访问
export const whiteList = [
  'pages/login/signin',
  'pages/login/signup',
  'pages/home/index'
]
