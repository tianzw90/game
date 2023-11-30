<template>

    <el-form :inline="true" :model="userLoginForm" :rules="rules" label-position="left" class="demo-form-inline" label-width="70px">
      <el-form-item label="用户名" class="w50 username">
        <el-input v-model="userLoginForm.userName" placeholder="用户名" clearable />
      </el-form-item>
      <el-form-item label="密码" class="w50 passWord">
        <el-input v-model="userLoginForm.passWord" placeholder="密码" clearable type="password" show-password />
      </el-form-item>
      <div>
        <el-button color="#80f39b" @click="homeLogin">登 录</el-button>
        <el-button color="#edf1c8" @click="homeRegister">注 册</el-button>
      </div>
    </el-form>

</template>

<script>
import request from '@/utils/request'
export default {
  name: 'HomeLogin',
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
    homeLogin () {
      const _self = this
      // if (!this.commonUtils.checkForm('userLoginForm', _self)) { return false }// 表单校验
      request.postAxios({
        url: '/sysUser/userLogin',
        data: this.userLoginForm
      }).then(function (response) {
        if (response.data.code === '0') {
          _self.$router.push('/HomeMenu')
        }
      })
    },
    homeRegister () {
      this.$router.push('/HomeRegister')
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-form-inline {
  text-align: center;
  margin-top: 20%;
  margin-right: 40%;
  //background-color: #edf1c8;
}
.username {
  margin-top: 3%;
}
</style>
