/**
 * axios 拦截
 * @author wanghaotian
 */

import axios from 'axios'
import { userTokenStore } from '@/store'
import router from '@/router'
import { ElMessage } from 'element-plus'
axios.defaults.withCredentials = true
const instance = axios.create()

// http request 拦截器
instance.interceptors.request.use(
  config => {
    // 先清除请求头
    config.headers.Authorization = ''
    // 再重新添加请求头  加之前校验是否存在token
    const tokenStore = userTokenStore()
    if (!tokenStore.token) {
      ElMessage.error('未登录，请先登录。')
      router.push('/userLogin')
    }
    config.headers.Authorization = tokenStore.token
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器
instance.interceptors.response.use(
  response => {
    return response
  },
  // 接口错误状态处理，也就是说无响应时的处理
  error => {
    // eslint-disable-next-line no-debugger
    debugger
    if (error.response.status === 401) {
      ElMessage.error('未登录，请先登录。')
      router.push('/userLogin')
    } else {
      ElMessage.error('服务异常。')
    }
    return Promise.reject(error)
  })

export default instance
