<template>
    <div class="login">
        <div class="login_clone">
            <p @click="$router.go(-1)">X</p>
            <span>登录页面</span>
        </div>
        <div class="login_wrapp">
          <!-- 账号 -->
            <div class="login_wrappBox">
                <span>账号</span>
                <input type="text" name="username" v-model="loginForm.userName" placeholder="账号">
                <span @click="()=>loginForm.userName=''" v-show="loginForm.userName.length>0">X</span>
            </div>
          <!-- 账号 -->
          <!-- 密码 -->
          <div class="login_wrappBox">
              <span>密码</span>
              <input type="password" v-model="loginForm.userPassword" :type="loginForm.passwordType" placeholder="密码">
              <span @click="()=>loginForm.userPassword=''" v-show="loginForm.userPassword.length>0">X</span>
          </div>
          <!-- 密码 -->
          <mt-button type="primary">登录</mt-button>
        </div>
    </div>
</template>

<script>
   export default {
     name: 'login',
     data (){
       return {
          visiblePopup: {
              login: true
          },
          loginForm: {
            userName: '',
            userPassword: '',
            passwordType: 'password'
          }
       }
     }
   }
</script>

<style lang="less">
  .login{
    width: 100%;
    position: absolute;
    height: 100%;
    .login_clone{
      width: 100%;
      height: 50px;
      padding: 0 10px;
      box-sizing: border-box;
      font-size: 14px;
      text-align: center;
      font-weight: 600;
      line-height: 50px;
      background: #eee;
      p{
        float: left;
      }
    }
    .login_wrapp{
      width: 100%;
      padding: 0 10px;
      box-sizing: border-box;
      .login_wrappBox{
        width: 100%;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #999;
        span{
          width: 10%;
          font-size: 19px;
        }
        input{
          width: 80%;
          height: 45px;
          border: none;
        }
      }
    }
  }
</style>
