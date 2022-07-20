import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// @相当于src
import '@/assets/styles/base.less'
import '@/assets/styles/iconfont.less'

createApp(App).use(router).mount('#app')
