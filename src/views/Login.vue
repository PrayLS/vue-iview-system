<template>
  <div class="login-wrapper">
    <div class="mask"></div>
    <div class="login-content">
      <div class="login-title">后台管理系统</div>
        <div class="login-input">
          <Form ref="loginForm" :model="loginForm" :rules="rules" inline>
            <FormItem prop="user">
              <Input placeholder="Enter name" class="login-user" v-model="loginForm.user">
                <Icon type="md-person" slot="prefix" size="30" color="#0e9d5f"/>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input placeholder="Enter keyword" class="login-password" v-model="loginForm.password">
                <Icon type="ios-lock" slot="prefix" size="30" color="#0e9d5f"/>
              </Input>
            </FormItem>
          </Form>
          <Button class="login-btn" @click="handleSumbit">
            立即登录
          </Button>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        user: '',
        password: ''
      },
      rules: {
        user: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSumbit () {
      this.$refs.loginForm.validate((vaild) => {
        if (vaild) {
          this.$Message.success('登录成功！')
          localStorage.setItem('ms_username',this.loginForm.user);
          this.$router.push('/');
        } else {
          this.$Message.error('登录失败！')
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
.login-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('../assets/image/login-background.png');
  background-repeat: no-repeat;
  background-size: cover;
  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0,0,0,0.6);
  }
  .login-content {
    width: 450px;
    height: 500px;
    background-color: rgba(255,255,255,0.2);
    border-radius: 30px;
    z-index: 100;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    .login-title {
      width: 100%;
      height: 50px;
      text-align: center;
      font-size: 30px;
      color: #ffffff;
      margin-top: 30px;
    }
    .login-input {
        width: 100%;
        height: 300px;
        .login-user,.login-password {
          margin-top: 30px;
          width: 300px;
          margin-left: 75px;
        }
        .login-btn {
          width: 300px;
          border-radius: 25px;
          height: 45px;
          background-color: #0e9d5f;
          margin-left: 75px;
          margin-top: 40px;
          border: none;
          color: #ffffff;
          font-size: 20px;
        }
      }
  }
}
</style>
