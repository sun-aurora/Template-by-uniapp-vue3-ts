<template>
  <Logo />
  <form class="form">
    <view class="uni-form-item uni-column">
      <view class="title">用户名</view>
      <input
        v-model="username"
        class="uni-input"
        name="input"
        maxlength="20"
        placeholder="请输入用户名"
      />
    </view>
    <view class="uni-form-item uni-column">
      <view class="title">密码</view>
      <input
        v-model="password"
        password
        class="uni-input"
        name="input"
        maxlength="20"
        placeholder="请输入密码"
      />
    </view>
    <div style="margin: 16px">
      <button type="primary" @click="onSubmit">登录</button>
      <button
        style="margin-top: 10px"
        plain
        @click="navigateTo('/pages/login/signup')"
      >
        注册
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import Logo from './components/Logo.vue'
import { defineComponent } from 'vue'
import { useSigninEffect } from './hooks/useSigninEffect'

export default defineComponent({
  name: 'Signin',
  components: {
    Logo
  },
  setup() {
    const { username, password, loading, onSubmit } = useSigninEffect()
    const navigateTo = function (url) {
      uni.navigateTo({
        url
      })
    }
    return {
      username,
      password,
      loading,
      onSubmit,
      navigateTo
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
