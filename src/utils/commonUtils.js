import uiUtils from '@/utils/uiUtils'

const commonUtils = {
  // 身份证验证 idCard:身份证字段值
  checkIdCard: function (idCard) {
    // 15位和18位身份证号码的正则表达式
    const regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
    // 如果通过该验证，说明身份证格式正确，但准确性还需计算
    if (regIdCard.test(idCard)) {
      if (idCard.length === 18) {
        const idCardWi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2] // 将前17位加权因子保存在数组里
        const idCardY = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2] // 这是除以11后，可能产生的11位余数、验证码，也保存成数组
        let idCardWiSum = 0 // 用来保存前17位各自乖以加权因子后的总和
        for (let i = 0; i < 17; i++) {
          idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i]
        }
        const idCardMod = idCardWiSum % 11// 计算出校验码所在数组的位置
        const idCardLast = idCard.substring(17)// 得到最后一位身份证号码
        // 如果等于2，则说明校验码是10，身份证号码最后一位应该是X
        if (idCardMod === 2) {
          if (idCardLast === 'X' || idCardLast === 'x') {
            return true
          } else {
            return false
          }
        } else {
          // 用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
          if (idCardLast === idCardY[idCardMod]) {
            // alert("恭喜通过验证啦！");
            return true
          } else {
            return false
          }
        }
      }
    } else {
      return false
    }
  },
  /**
   * 手机号校验
   * @param rule
   * @param value
   * @param callback
   */
  phoneNumber (rule, value, callback) {
    if (value && !/^((13[0-9])|(14[5,7,9])|(15[0-3,5-9])|(166)|(17[3,5,6,7,8])|(18[0-9])|(19[1,3,5,8,9]))\d{8}$/.test(value)) {
      callback(new Error('手机号码不符合规范'))
    } else {
      callback()
    }
  },
  /**
   * 公共校验：表单提交之前进行表单校验并提示信息给用户
   * @param ruleForm
   * @param _self
   * @returns {boolean}
   */
  checkForm: function (ruleForm, _self) {
    return new Promise((resolve, reject) => {
      _self.$refs[ruleForm].validate((valid) => {
        if (!valid) {
          uiUtils.defaultMessage('表单有字段校验未通过，请检查标红输入框')
          resolve(valid)
        } else {
          resolve(valid)
          return true
        }
      })
    })
  },
  /**
   * 获取默认查询条件
   * @param searchForm
   * @returns {string}
   */
  getDefaultFilter: function (searchForm) {
    let filter = ''
    const _self = this
    if (!(JSON.stringify(searchForm) === '{}')) {
      Object.keys(searchForm).forEach(function (key) {
        let symbol = '&'
        if (filter === '') {
          symbol = ''
        }
        if (searchForm[key] != null) {
          if (typeof searchForm[key] === 'object') {
            const d0 = searchForm[key][0]
            const d1 = searchForm[key][1]
            // 判断是时间范围查询
            if (typeof d0 === 'object' && typeof d1 === 'object') {
              filter += symbol + key + '_begin' + '=' + _self.dateFormat(d0)
              filter += '&' + key + '_end' + '=' + _self.dateFormat(d1)
            } else { // 判断是数字范围查询
              if (!commonUtils.isStrIsNull(d0) && !commonUtils.isStrIsNull(d1)) {
                filter += symbol + key + '_min' + '=' + d0
                filter += '&' + key + '_max' + '=' + d1
              } else if (!commonUtils.isStrIsNull(d0)) {
                filter += symbol + key + '_min' + '=' + d0
              } else if (!commonUtils.isStrIsNull(d1)) {
                filter += symbol + key + '_max' + '=' + d1
              }
            }
          } else {
            filter += symbol + key + '=' + searchForm[key]
          }
        }
      })
    }
    return encodeURIComponent(filter)
  },
  /**
   * 抽取公共分页
   * @returns {number[]}
   */
  paginationPageSize: function () {
    return [10, 20, 30, 40]
  },
  /**
   * 格式化时间
   * @param row
   * @param column
   * @param value
   * @param index
   * @returns {*|string}
   */
  formatDate (row, column, value, index) {
    return commonUtils.formatDateNormal(value)
  },
  formatDateNormal (str) {
    if (commonUtils.isStrIsNull(str)) {
      return str
    }
    const date = new Date(str).toJSON()
    return new Date(+new Date(date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
  },
  /**
   * 字符串是否是空
   * @param str
   * @returns {Boolean}
   * @author wht
   */
  isStrIsNull: function (str) {
    if (str === null || str === '' || str === undefined || str === 'undefined' || str === 'null') {
      return true
    }
    return false
  },
  /**
   * 获取数据的ids 数组
   * @param data
   * @returns {Array}
   */
  getTableDataIdsArr (data) {
    const ids = []
    for (let i = 0; i < data.length; i++) {
      ids.push(data[i].id)
    }
    return ids
  },
  /**
   * element ui中表格字段中美化金额
   * @param row
   * @param column
   * @param value
   * @param index
   * @returns {number|string}
   */
  formatMoney (row, column, value, index) {
    return commonUtils.formatMoneyNormal(value)
  },
  /**
   * 美化金额显示，例如983726.22元显示为983,726.22
   * @param value
   * @returns {number | string}
   */
  formatMoneyNormal (value) {
    if (value && !isNaN(value)) {
      value = parseFloat(value)
      if (value > 999 || value < 0) {
        value = value.toLocaleString()
      }
    }
    return value
  }
}
export default commonUtils
