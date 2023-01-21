import { reactive, toRefs } from 'vue'
import { signup, getCaptcha } from '@/api'

export interface FormType {
  username: string
  password: string
  confirmPassword: string
  captcha: string
  captchaSvg: HTMLOrSVGElement | null
}

export const useSignupEffect = () => {
  const form = reactive<FormType>({
    username: '',
    password: '',
    confirmPassword: '',
    captcha: '',
    captchaSvg: null
  })

  const requestCaptcha = async () => {
    const { data } = await getCaptcha({ id: '11' })
    form.captchaSvg = data
  }

  const onSubmit = async (values: FormType) => {
    const { status } = await signup({ ...values })
    if (status) {
      uni.showToast({
        title: '注册成功',
        duration: 2000
      })
      uni.switchTab({ url: '/pages/home/index' })
    }
  }
  return { ...toRefs(form), requestCaptcha, onSubmit }
}
