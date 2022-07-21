<template>
  <!-- 头部组件 -->
  <AppHeader />
  <!-- 频道组件 -->
  <HomeChannel />
  <!-- 轮播组件 -->
  <HomeSwipe />
</template>

<script setup lang="ts">
// 使用setup语法糖后就无需注册了(这是vue2.7和vue3的特点)
import AppHeader from '@/components/app-header.vue'
import HomeChannel from '@/views/Home/components/home-channel.vue'
import HomeSwipe from './components/home-swipe.vue'
</script>

<style></style>
