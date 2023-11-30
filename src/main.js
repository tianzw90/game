import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 图标和组件需要分开引入
import ElementPlus from 'element-plus' // 引入 ElementPlus 组件
import zhCn from 'element-plus/es/locale/lang/zh-cn' // 引入组件要使用的语言（示例是中文）

// Element Plus
import 'element-plus/theme-chalk/index.css' // 引入 ElementPlus 组件样式
// 统一导入el-icon图标
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import './scss/UiForm.scss'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus, { locale: zhCn }) // 全局挂载 ElementPlus
app.use(store)
app.use(router).mount('#app')
