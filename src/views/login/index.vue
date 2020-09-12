<template>
  <div class="login_container">
    <!-- title登录区域 -->
    <van-nav-bar title="登录" class="login_tilte" />
    <!-- form表单区域 -->
    <van-form @submit="onSubmit">
      <!-- 手机号码区域 -->
      <van-field
        v-model="mobile"
        type="number"
        name="手机号码"
        placeholder="请填写手机号码"
        :rules="[{ required: true, message: '请填写手机号码' }]"
      />
      <!-- 验证码区域 -->
      <van-field
        v-model="code"
        type="number"
        name="密码"
        placeholder="请输入验证码"
        :rules="[{ required: true, message: '请填写验证码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
// 引入所需的请求模块
import login from '../../api/user'
export default {
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  created () {},
  mounted () {},
  methods: {
    //   提交事件, 点击提交按钮,获取用户输入的数据,然后发送请求,将用户的数据发送至后台,当通过验证规则,显示一个信息框,提示用户登录成功或者失败
    async onSubmit () {
      const user = this.user
      const res = await login(user)
      console.log(res)
    }

  }
}
</script>
<style scoped lang="less">
</style>
