import uniCrazyRouter, { onError } from 'uni-crazy-router'

import { bindInterceptLogin } from './interceptLogin'

// 开放给main.js
export function setupRouter(app) {
  // 接收vue3的实例
  app.use(uniCrazyRouter)
  // 启用登录页的拦截
  bindInterceptLogin()

  // 除了在beforeEach钩子里没有使用next导致的无法跳转的情况外，其他情况导致的跳转失败都会触发onError
  onError((to, from) => {
    uni.showToast({
      title: `${to.url} 有误`,
      icon: 'none'
    })
  })
}
