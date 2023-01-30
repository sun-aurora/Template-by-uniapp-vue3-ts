<template>
  <uni-nav-bar title="导航栏组件"></uni-nav-bar>
  <view class="home">{{ hello }}</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const hello = ref('Hello uni_demo')
</script>

<style lang="scss" scoped>
.home {
  background: #f5f5f5;
  min-height: 100vh;
  text-align: center;
  line-height: 800rpx;
  font-size: 40rpx;
  font-weight: bold;
}
</style>
