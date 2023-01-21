import { createSSRApp } from 'vue'
import App from './App.vue'
import store from './store'
import { config } from '@/../config'
import { mockXHR } from '@/../mock'
import { setupRouter } from '@/router' // 引入路由
if (
  config[process.env.NODE_ENV || 'development'].MOCK_ENABLED === 'YES' &&
  alert
) {
  // alert 存在时 表明是 H5, 则启用 mock
  mockXHR()
}
export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  // 注册router
  setupRouter(app)
  return {
    app
  }
}
