<template>
  <van-tabs v-model:active="active">
    <van-tab v-for="item in list" :key="item.id" :title="item.text"></van-tab>
  </van-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
const active = ref(0)
// 定义一个响应式数据，初始值设置一个空数组

// TS的接口 用于标记数据格式
interface INvaItem {
  id: string
  text: string
}
// 整体的定义一下格式
const list = ref<INvaItem[]>([])

axios({
  url: '/navList',
  method: 'get'
}).then((res) => {
  console.log(res.data)
  // 这时候别忘了.value
  list.value = res.data.result
})
</script>

<style></style>
