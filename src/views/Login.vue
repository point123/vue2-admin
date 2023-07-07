<template>
  <div>
    <el-form class="loginForm" :model="loginForm" :rules="rules" ref="loginForm">
      <h2 class="title">Login</h2>
      <el-form-item prop="username">
        <el-input placeholder="用户名" v-model="loginForm.username" clearable></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" placeholder="密码" v-model="loginForm.password" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native.prevent="handleLogin()" style="width:48%">登录</el-button>
        <el-button @click="resetForm()" style="width:48%">清除</el-button>
      </el-form-item>
      <span @click="handleClearCookie()">清除cookie</span>
    </el-form>
  </div>
</template>

<script>
import { login } from '../api/api';
import Cookie from "js-cookie";
export default {
    name:"Login",
    data(){
      return {
        loginForm: {
          username: "",
          password: "",
        },
        rules:{
          username: [
            {required:true, message:"请输入用户名", trigger: "blur"}
          ],
          password: [
            {required:true, message:"请输入密码", trigger: "blur"}
          ]
        }
      }
    },
    methods: {
      handleLogin(){
        // 校验表单
        this.$refs.loginForm.validate((valid)=> {
          if (valid) {
            login(this.loginForm).then(res => {
              Cookie.set('Authorization', res.data.token);//设置token到Cookie中
              sessionStorage.setItem("user",JSON.stringify(this.loginForm))//保存用户到本地会话
              this.$router.push({
                path:"/home", //登录成功跳转
              })
            }).catch(res => {
              console.log("error:",res);
            })
          }
        })
      },
      handleClearCookie() {
        Cookie.remove("Authorization")
        sessionStorage.clear()
        console.log("已清除");
      },
      resetForm() {
        this.$refs.loginForm.resetFields();
      }
    }
}
</script>

<style lang="scss" scoped>
  .loginForm {
    width: 21.875rem;
    margin:11.25rem auto;
    border: 1px solid #eaeaea;
    background-color: #fff;
    border-radius: 5px;
    padding: 2.25rem 1.5rem;
    box-shadow: 0 0 10px #666;
    .title {
      margin: 0 auto 2.5rem auto;
      color: #505458;
      text-align: center;
    }
  }
</style>