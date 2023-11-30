
import { ElLoading, ElMessage } from 'element-plus'
/**
 * UI 组件根据引用的框架自行扩展
 * @type {{loadingBar: {start: uiUtils.loadingBar.start, finish: uiUtils.loadingBar.finish}, warning: uiUtils.warning, error: uiUtils.error, info: uiUtils.info}}
 */
const uiUtils = {
  defaultMessage (message) {
    // eslint-disable-next-line no-debugger
    debugger
    ElMessage(message)
  },
  message (message) {
    ElMessage(
      {
        duration: 5000,
        dangerouslyUseHTMLString: true,
        showClose: true,
        message: message
      }
    )
  },
  warning: function (message) {
    ElMessage({
      type: 'warning',
      duration: 5000,
      showClose: true,
      message: message
    })
  },
  error: function (message) {
    ElMessage({
      type: 'error',
      duration: 5000,
      showClose: true,
      message: message
    })
  },
  info: function (message) {
    ElMessage({
      type: 'info',
      duration: 5000,
      showClose: true,
      message: message
    })
  },
  loadingInstance: null,
  loadingBar: {
    start: function () {
      this.loadingInstance = ElLoading.service({
        lock: true,
        text: '加载中',
        background: 'rgba(96,98,102, 0.3)'
      })
    },
    finish: function () {
      this.loadingInstance.close()
    }
  }
}

export default uiUtils
