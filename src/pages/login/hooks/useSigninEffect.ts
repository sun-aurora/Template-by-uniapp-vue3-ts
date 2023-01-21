import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'

export interface FormType {
	username: string
	password: string
	loading: boolean
}

export const useSigninEffect = () => {
	const store = useStore()
	const form = reactive<FormType>({
		username: 'sunhujian',
		password: '123456',
		loading: false
	})
	const onSubmit = () => {
		form.loading = true
		const saveData = {
			username: form.username,
			password: form.password
		}
		store
			.dispatch('user/signIn', saveData)
			.then((res: any) => {
				uni.showToast({
					title: '登录成功',
					duration: 2000
				})
				uni.switchTab({ url: '/pages/home/index' })
			})
			.catch(() => {
				form.loading = false
			})
	}
	return { ...toRefs(form), onSubmit }
}
