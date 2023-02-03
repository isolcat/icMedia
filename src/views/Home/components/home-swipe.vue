<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in list" :key="item.imgSrc" v-lazy="item">
      <img :src="item.imgSrc" alt="欢迎来到哔哩哔哩" />
    </van-swipe-item>
  </van-swipe>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

// ts定义接口
interface Iswiper {
  imgSrc: string
  link: string
}
const list = ref<Iswiper[]>([])

axios({
  url: '/swiperList',
  method: 'get'
}).then((res) => {
  console.log(res.data.result)
  list.value = res.data.result
})
</script>

<style lang="less" scoped>
.my-swiper {
  img {
    width: 100%;
  }
}
</style>
