<template>
  <div class="login-container">
    <div class="login-plane">
      <div class="login-title">
        Melon Admin
        <img src="@/assets/login_horizontal_line.png" alt="" />
      </div>
      <div class="login-form">
        <el-form :model="loginForm" :rules="loginRules" ref="loginForm">
          <el-form-item prop="username">
            <el-input
              placeholder="账号"
              type="text"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="密码"
              type="password"
              v-model="loginForm.password"
            ></el-input>
          </el-form-item>
        </el-form>
        <el-button
          :loading="loading"
          @click="handleLogin"
          style="width: 100%"
          type="primary"
          >登录</el-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Form as ElForm } from 'element-ui'
@Component({
  name: 'Login'
})

export default class extends Vue {
  private loginForm = {
    username: '',
    password: ''
  }

  private loginRules = {
    username: [{ required: true, trigger: 'blur', message: '请输入账号' }],
    password: [{ required: true, trigger: 'blur', message: '请输入密码' }]
  }

  private loading = false

  private handleLogin () {
    (this.$refs.loginForm as ElForm).validate((valid: boolean) => {
      if (valid) {
        this.loading = true
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  min-height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("~@/assets/sky.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .login-plane {
    width: 500px;
    height: 400px;
    background-image: url("~@/assets/login_border.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: #007eff2e;
    .login-title {
      width: 100%;
      height: 100px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 35px;
      color: #fff;
      font-weight: 700;
      img {
        width: 80%;
        position: absolute;
        bottom: 0;
      }
    }
    .login-form {
      padding: 45px 55px;
    }
  }
}
</style>
