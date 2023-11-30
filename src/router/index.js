import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/home/HomePage'
import HomeMenu from '@/views/menu/HomeMenu'
import HomeRegister from '@/views/login/HomeRegister'

const routes = [
  { // 首页
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  { // 菜单
    path: '/HomeMenu',
    name: 'HomeMenu',
    component: HomeMenu
  },
  { // 注册
    path: '/HomeRegister',
    name: 'HomeRegister',
    component: HomeRegister
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
