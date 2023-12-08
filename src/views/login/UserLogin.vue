<template>
  <div>
    <el-row class="login-home">
      <el-col :span="12" class="login-content">
        <el-form :model="userLoginForm" :rules="rules" label-position="left" class="demo-form-inline" label-width="70px">
          <el-form-item label="用户名" class="w50 username">
            <el-input v-model="userLoginForm.userName" placeholder="用户名" clearable />
          </el-form-item>
          <el-form-item label="密码" class="w50 passWord">
            <el-input v-model="userLoginForm.passWord" placeholder="密码" clearable type="password" show-password />
          </el-form-item>
          <div style="margin-right: 70%">
            <el-button color="#80f39b" @click="userLogin">登 录</el-button>
            <el-button color="#edf1c8" @click="userRegister">注 册</el-button>
          </div>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { userInfoStore, userTokenStore } from '@/store'
import request from '@/utils/request'
export default {
  name: 'UserLogin',
  data () {
    return {
      winHeight: window.innerHeight,
      userLoginForm: {},
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        passWord: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    userLogin () {
      const _self = this
      // if (!this.commonUtils.checkForm('userLoginForm', _self)) { return false }// 表单校验
      request.postAxios({
        url: '/sysUser/userLogin',
        data: this.userLoginForm
      }).then(function (response) {
        // eslint-disable-next-line no-debugger
        debugger
        if (response.data.code === '0') {
          const tokenStore = userTokenStore()
          tokenStore.setToken(response.data.result)
          _self.getUserInfo()
          _self.$router.push('/')
        }
      })
    },
    userRegister () {
      const _self = this
      _self.$router.push('/UserRegister')
    },
    getUserInfo () {
      request.getAxiosWithNoMsg({
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
.demo-form-inline {
  text-align: center;
  width: 100%;
  margin-top: 40%;
  margin-left: 40%;
  //background-color: #3E186C;
}
.username {
  margin-top: 3%;
}
.login-home {
  height: 100vh;
  background-image: url("../../assets/dnf1.png");
}
.login-logo {

  background-size: cover;
}
.login-content {
  //background-color: #1C0934;
}
</style>
