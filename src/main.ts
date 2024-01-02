import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
//
// import TDesign from 'tdesign-vue-next'
import 'element-plus/dist/index.css'
// import 'nes.css/css/nes.min.css'
// 引入组件库的少量全局样式变量
// import 'tdesign-vue-next/es/style/index.css'

import './assets/main.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(ElementPlus)
// app.use(TDesign)
app.use(createPinia())
app.use(router)
app.mount('#app')
