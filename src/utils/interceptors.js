/**
 * axios 拦截
 * @author wanghaotian
 */

import axios from 'axios'
axios.defaults.withCredentials = true
const instance = axios.create()

// http request 拦截器
instance.interceptors.request.use(
  config => {
    // config.headers.xxxx = 'xxxx'
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
    return Promise.reject(error)
  })

export default instance
