<template>
  <div class="home-register">
    <el-form :inline="true" :model="sysUserForm" :rules="sysUserFormRules" ref="sysUserForm" label-position="left" class="demo-form-inline" label-width="90px">
      <el-form-item label="用户名" class="w50" prop="userName">
        <el-input v-model="sysUserForm.userName" placeholder="用户名" clearable />
      </el-form-item>
      <el-form-item label="密码" class="w50" prop="passWord">
        <el-input v-model="sysUserForm.passWord" placeholder="密码" clearable type="password" show-password />
      </el-form-item>
      <el-form-item label="确认密码" class="w50" prop="confirmPassWord">
        <el-input v-model="sysUserForm.confirmPassWord" placeholder="确认密码" clearable type="password" show-password />
      </el-form-item>
      <el-form-item label="真实姓名" class="w50" prop="realName">
        <el-input v-model="sysUserForm.realName" placeholder="真实姓名" clearable />
      </el-form-item>
      <el-form-item label="性别" class="w50" prop="sex">
        <el-select v-model="sysUserForm.sex" clearable placeholder="请选择性别">
          <el-option
            v-for="item in sexDict"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
<!--        <el-input v-model="sysUserForm.sex" placeholder="性别" clearable />-->
      </el-form-item>
      <el-form-item label="手机号" class="w50" prop="mobile">
        <el-input v-model="sysUserForm.mobile" placeholder="手机号" clearable type="number" />
      </el-form-item>
      <el-form-item label="身份证号" class="w50" prop="cardNum">
        <el-input v-model="sysUserForm.cardNum" placeholder="身份证号" clearable type="number" />
      </el-form-item>
      <el-form-item label="邮箱" class="w50" prop="email">
        <el-input v-model="sysUserForm.email" placeholder="邮箱" clearable />
      </el-form-item>
      <el-form-item label="头像" class="w50">
        <el-input v-model="sysUserForm.userAvatar" placeholder="头像" clearable />
      </el-form-item>
      <div class="home-register-button">
        <el-button color="#80f39b" @click="userRegister">注 册</el-button>
        <el-button color="#edf1c8" @click="userLogin">已有账号,立即登录</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>

import request from '@/utils/request'
import commonUtils from '@/utils/commonUtils'
import uiUtils from '@/utils/uiUtils'
export default {
  name: 'HomeRegister',
  data () {
    const passWordValidator = (rule, value, callback) => {
      if (value !== this.sysUserForm.passWord) {
        callback(new Error('两次密码不一致。'))
      }
      callback()
    }

    return {
      vSlot: 'label',
      sysUserForm: {},
      sysUserFormRules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        passWord: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        confirmPassWord: [
          { required: true, message: '请输入确认密码', trigger: 'blur' },
          { validator: passWordValidator, trigger: 'blur' }
        ],
        realName: [
          { required: true, message: '请输入真实姓名', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: commonUtils.phoneNumber, trigger: 'blur' }
        ],
        cardNum: [
          { required: true, message: '请输入身份证号', trigger: 'blur' }
          // { validator: commonUtils.checkIdCard, trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ]
      },
      sexDict: [
        {
          label: '女',
          value: '0'
        },
        {
          label: '男',
          value: '1'
        }
      ]
    }
  },
  methods: {
    /**
     * 注册
     * */
    userRegister () {
      const _self = this
      console.log('进入注册方法')
      _self.$refs.sysUserForm.validate((valid) => {
        // eslint-disable-next-line no-debugger
        debugger
        if (!valid) {
          uiUtils.defaultMessage('表单有字段校验未通过，请检查标红输入框')
        } else {
          request.postAxios({
            url: '/sysUser/userRegister',
            data: this.sysUserForm
          }).then(function (response) {
            if (response.data.code === '0') {
              _self.$message.success('注册成功，2秒后自动跳转登录页面。')
              setTimeout(() => {
                _self.$router.push('/')
              }, 2000)
            }
          })
        }
      })
    },
    /**
     * 登录
     * */
    userLogin () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.home-register {
  position: fixed;
  height: 100%;
  background-image: url("../../assets/dnf1.png");
}
.demo-form-inline {
  position: relative;
  margin-top: 3%;
  margin-left: 30%;
}
.home-register-button {
  position: relative;
  margin-left: 20%;
}

</style>
