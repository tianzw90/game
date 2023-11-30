
import axios from '@/utils/interceptors'
import { ElMessage } from 'element-plus'
// import authUtil from './authUtil';
import uiUtils from './uiUtils'
const uri = 'http://localhost:18282'
/**
 * 请求方法封装
 * 方便统一管理加载提示、错误异常提示、操作成功提示
 * @type {{axios: (function(*): *)}, {getAxios: (function(*): *)}, {postAxios: (function(*): *)}}
 */
const request = {
  /**
   * get请求
   * @param options
   * @returns {PromiseLike<T | never> | Promise<T | never> | *}
   */
  getAxios: function (options) {
    return this.base(options)
      .then(function (response) {
        return response
      })
  },
  /**
   * post请求
   * @param options
   * @returns {PromiseLike<T | never> | Promise<T | never> | *}
   */
  postAxios: function (options) {
    console.log('进入post方法')
    options.method = 'post'
    options.headers = {
      'Content-type': 'application/json'
    }
    return this.axios(options)
      .then(function (response) {
        return response
      })
  },
  /**
   * axios请求
   * @param options
   * @returns {Promise<AxiosResponse<any>>}
   */
  axios: function (options) {
    uiUtils.loadingBar.start()
    options.url = uri + options.url
    return axios(options)
      .then(response => {
        if (response.data.code === '0') {
          ElMessage.success(response.data.message)
        } else {
          ElMessage.warning(response.data.message)
        }
        return response
      })
      // .catch(error => {
      // })
      .finally(() => {
        // 关闭加载
        uiUtils.loadingBar.finish()
      })
  }
}
export default request
