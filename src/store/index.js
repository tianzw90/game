import { defineStore } from 'pinia'
import { ref } from 'vue'
// token
export const userTokenStore = defineStore('token', function (response) {
  const token = ref('')

  const setToken = (userToken) => {
    token.value = userToken
  }

  const removeToken = () => {
    token.value = ''
  }

  console.log('token:', token)
  return {
    token, setToken, removeToken
  }
},
{
  persist: true
})
// userInfo
export const userInfoStore = defineStore('userInfo', function (response) {
  const userInfo = ref('')

  const setUserInfo = (userToken) => {
    userInfo.value = userToken
  }

  const removeUserInfo = () => {
    userInfo.value = ''
  }

  return {
    userInfo, setUserInfo, removeUserInfo
  }
},
{
  persist: true
})
