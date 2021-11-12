<!--
 * Description: 密码登录组件
 * Author:LinJ
 * Date:2021-11-08 22:57:38
 * LastEditors:LinJ
 * LastEditTime:2021-11-11 12:10:00
-->
<template>
  <div>
    <section>
      <section class="login_message">
        <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
      </section>
      <section class="login_verification">
        <input type="password" maxlength="8" placeholder="密码" v-model="pwd">
      </section>
      <section class="login_message">
        <input type="text" maxlength="4" placeholder="验证码" v-model="captcha">
        <img
        class="get_verification"
        :src="captchaUrl"
        alt="captcha"
        @click="refreshCaptcha"
        >
      </section>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginPwd',
  // 组件状态值
  data() {
    return {
      name: '', // 用户名
      pwd: '', // 登记密码
      captchaUrl: '',
      captcha: '', // 预留验证码
    };
  },
  // 组件方法
  methods: {
    // 刷新验证码
    refreshCaptcha() {
      axios.post('https://elm.cangdu.org/v1/captchas')
        .then((res) => {
          if (res.data.status) {
            this.captchaUrl = res.data.code;
          }
        });
    },
    reset() {
      this.name = '';
      this.pwd = '';
      this.captcha = '';
      this.refreshCaptcha();
    },
  },
  // 生命周期钩子，没用的可以删除
  mounted() {
    this.refreshCaptcha();
  },
  deactivated() {
    // 密码与验证码清空
    this.pwd = '';
    this.captcha = '';
  },
};
</script>

<style lang="stylus" scoped>
@import '../Login.styl';
</style>
