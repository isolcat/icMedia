<template>
  <form action="/">
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Toast, ToastOptions } from 'vant'

const value = ref('')
const onSearch = (val: string | ToastOptions | undefined) => Toast(val)
const onCancel = () => Toast('取消')
</script>

<style scoped></style>
