import request from '@/utils/request'

export type SignupRequest = {
  username: string
  password: string
  confirmPassword: string
  captcha: string
}
export type SigninRequest = {
  username: string
  password: string
}
export type SigninResponse = string
export type GetInfoResponse = {
  uuid?: string
  username?: string
  password?: string
  nickname?: string
  avatar?: string
}

export function signup(data: SignupRequest) {
  return request({
    url: '/user/signup',
    method: 'post',
    data
  })
}

export function signin(data: SigninRequest) {
  return request<SigninResponse>({
    url: '/open/auth/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request<GetInfoResponse>({
    url: '/user/current',
    method: 'get'
  })
}
