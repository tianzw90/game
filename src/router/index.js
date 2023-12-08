import { createRouter, createWebHistory } from 'vue-router'
import UserLogin from '@/views/login/UserLogin'
import UserRegister from '@/views/login/UserRegister'
import Layout from '@/views/layout/Layout'
import HomePage from '@/views/home/HomePage'
import DnfFestival from '@/views/dnf/DnfFestival'
import DnfGold from '@/views/dnf/DnfGold'
import DnfFestivalCalculation from '@/views/dnf/DnfFestivalCalculation'
import { createPinia } from 'pinia'

const routes = [
  { // 登录
    path: '/userRegister',
    name: 'UserRegister',
    component: UserRegister
  },
  { // 注册
    path: '/userLogin',
    name: 'UserLogin',
    component: UserLogin
  },
  { // 主页面
    path: '/',
    redirect: '/homePage',
    component: Layout,
    children: [
      { path: '/homePage', component: HomePage },
      { path: '/dnf/festival', component: DnfFestival },
      { path: '/dnf/gold', component: DnfGold },
      { path: '/dnf/festivalCalculation', component: DnfFestivalCalculation }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to) => {
  createPinia()
})

export default router
