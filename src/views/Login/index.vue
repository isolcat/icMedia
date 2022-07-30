<template>
  <LoginHeader />
  <LoginMain />
</template>

<script setup>
import LoginHeader from './components/Login-header.vue'
import LoginMain from './components/Login-Main.vue'
</script>

<style scoped>
:global(body) {
  height: 100vh;
  background: #f4f4f4;
}
</style>
