<template>
  <view class="header">
    <image class="header__logo" src="../../../static/logo.png" alt="logo" />
    <text class="header__title">uni-demo</text>
  </view>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__logo {
    display: block;
    width: 150px;
    height: 150px;
    padding-top: 80px;
  }
  &__title {
    font-size: 36px;
    color: #000;
    font-weight: normal;
    padding-top: 30px;
  }
}
</style>
