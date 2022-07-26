<template>
  <van-cell-group inset class="input">
    <van-field v-model="text" label="账号" placeholder="请输入账号" />
    <van-field
      v-model="password"
      type="password"
      label="密码"
      placeholder="请输入密码"
    />
  </van-cell-group>
  <div class="btn">
    <van-row gutter="20">
      <van-col span="2"></van-col>
      <van-col span="8">
        <van-button class="btn1" plain hairlin type="primary" to="#"
          >注册</van-button
        >
      </van-col>
      <van-col span="3"></van-col>
      <van-col span="8">
        <van-button class="btn1" plain hairlin type="primary" to="/"
          >登录</van-button
        >
      </van-col>
    </van-row>
  </div>
</template>

<script setup></script>

<style scoped>
.input {
  height: 100vh;
  width: 100%;
  height: 30%;
  margin-top: 6%;
}
.btn {
  width: 100%;
  height: 30%;
  margin-top: 10%;
}
.van-button--plain.van-button--primary {
  color: #ff9db5;
}
.btn1 {
  border: 0.1px solid #ff9db5;
  width: 20vh;
  height: 5vh;
}
</style>
