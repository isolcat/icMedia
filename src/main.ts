import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// @相当于src
import '@/assets/styles/base.less'
import '@/assets/styles/iconfont.less'
// 需要用到vant组件里面的tab标签页，在入口处引入
import { Tab, Tabs } from 'vant';

// 此处添加一个变量app，方便按照文档的方式引入
const app = createApp(App)
app.use(Tab)
app.use(Tabs)
app.use(router)
app.mount('#app')
