import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  { path: '/', component: () => import('@/views/Home/index.vue') },
  { path: '/video/:id', component: () => import('@/views/Video/index.vue') },
  { path: '/search', component: () => import('@/views/Search/index.vue') },
  { path: '/login', component: () => import('@/views/Login/index.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
