import axios, { AxiosInstance, AxiosError } from 'axios'
// eslint-disable-next-line
import settle from 'axios/lib/core/settle'
import buildURL from 'axios/lib/helpers/buildURL'
import store from '@/store'

// eslint-disable-next-line
import { config } from '@/../config'
const { baseURL, tokenKey } = config[process.env.NODE_ENV || 'development']

// 创建axios实例
const service: AxiosInstance = axios.create({
	baseURL,
	timeout: 5000
	// withCredentials: true
})

// 请求拦截器
service.interceptors.request.use(
	config => {
		if (store.state.user.token) {
			Object.assign(config.headers, {
				Authorization: uni.getStorageSync(tokenKey)
			})
		}
		// config.headers['x-csrf-token'] = getCsrfToken()
		return config
	},
	error => {
		console.log(error)
		return Promise.reject(error)
	}
)

// 响应拦截器
service.interceptors.response.use(
	response => {
		// TODO 根据后端成功状态配置
		if (response.status === 200) {
			return response.data
		} else {
			return Promise.reject(response.data)
		}
	},
	(error: AxiosError) => {
		// 未登录 跳转登录页
		if (error.response?.status == 401) {
			uni.navigateTo({
				url: '/pages/login/index' // TODO 配置成自己的登录页路径
			})
			return Promise.reject(error)
		}

		return Promise.reject(error)
	}
)

// 适配 小程序
service.defaults.adapter = function(config: any) {
	return new Promise((resolve, reject) => {
		uni.request({
			method: config.method.toUpperCase(),
			url:
				config.baseURL +
				buildURL(config.url, config.params, config.paramsSerializer),
			header: config.headers,
			data: config.data,
			dataType: config.dataType,
			responseType: config.responseType,
			sslVerify: config.sslVerify,
			complete: function complete(response: any) {
				response = {
					data: response.data,
					status: response.statusCode,
					errMsg: response.errMsg,
					headers: response.header, // 注意此处 单复数
					config: config
				}
				settle(resolve, reject, response)
			}
		})
	})
}
export default service
