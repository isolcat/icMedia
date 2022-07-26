import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// @相当于src
import '@/assets/styles/base.less'
import '@/assets/styles/iconfont.less'
// 需要用到vant组件里面的tab标签页，在入口处引入(其他的同理)
import { Tab, Tabs, Swipe, SwipeItem, Search, Field, CellGroup, Col, Row } from 'vant';

// 让mock接口跑起来
import '@/mock/index'

// 此处添加一个变量app，方便按照文档的方式引入
const app = createApp(App)
app.use(Tab)
app.use(Tabs)
app.use(Swipe)
app.use(SwipeItem)
app.use(router)
app.use(Search)
app.use(Field)
app.use(CellGroup)
app.use(Col)
app.use(Row)
app.mount('#app')
