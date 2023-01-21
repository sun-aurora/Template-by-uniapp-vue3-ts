<template>
  <form class="form" @submit="onSubmit" style="padding: 12px">
    <view class="uni-form-item uni-column">
      <view class="title">用户名</view>
      <input
        v-model="username"
        class="uni-input"
        name="input"
        maxlength="20"
        placeholder="请填写用户名"
      />
    </view>
    <view class="uni-form-item uni-column">
      <view class="title">设置密码</view>
      <input
        v-model="password"
        password
        class="uni-input"
        name="input"
        maxlength="20"
        placeholder="请设置密码"
      />
    </view>
    <view class="uni-form-item uni-column">
      <view class="title">确认密码</view>
      <input
        v-model="confirmPassword"
        password
        class="uni-input"
        name="input"
        maxlength="20"
        placeholder="请再次输入密码确认"
      />
    </view>
    <div style="margin: 16px">
      <button type="primary">提交</button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useSignupEffect } from './hooks/useSignupEffect'

export default defineComponent({
  name: 'Signup',
  setup() {
    const {
      username,
      password,
      confirmPassword,
      captchaSvg,
      captcha,
      onSubmit
    } = useSignupEffect()

    return {
      onSubmit,
      username,
      password,
      confirmPassword,
      captcha,
      captchaSvg
    }
  }
})
</script>

<style lang="scss" scoped>
.form {
  padding: 24rpx;
  margin-top: 50rpx;

  .uni-form-item {
    padding: 20rpx;
  }
}
</style>
