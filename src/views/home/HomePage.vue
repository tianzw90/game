<template>
  <div class="home-page" />
</template>

<script>
import { userInfoStore } from '@/store'
export default {
  name: 'HomePage',
  data () {
    return {
      userInfo: {}
    }
  },
  mounted () {
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      this.request.getAxiosWithNoMsg({
        url: '/sysUser/getUserInfo'
      }).then(function (response) {
        const userInfo = userInfoStore()
        userInfo.setUserInfo(response.data.result)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  background-color: rebeccapurple;
}
</style>
