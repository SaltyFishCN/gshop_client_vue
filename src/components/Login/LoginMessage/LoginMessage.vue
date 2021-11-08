<!--
 * Description: 短信登录组件
 * Author:LinJ
 * Date:2021-11-08 22:57:33
 * LastEditors:LinJ
 * LastEditTime:2021-11-09 02:30:49
-->
<template>
  <div>
    <section class="login_message">
      <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
      <button
      :disabled="!isRightPhone"
      class="get_verification"
      :class="[isRightPhone && 'rightphone']"
      @click.prevent="getCode">{{ timer > 0 ? '已发送' : '获取验证码' }}</button>
    </section>
    <section class="login_verification">
      <input type="tel" maxlength="6" placeholder="验证码" v-model="code">
    </section>
    <section class="login_hint">
      温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
      <a href="javascript:;">《用户服务协议》</a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LoginMessage',
  // 父组件传入的数据
  props: {},
  // 组件状态值
  data() {
    return {
      phone: '', // 密码
      code: '', // 短信验证码
      timer: 0,
    };
  },
  // 计算属性
  computed: {
    // isRightPhone 手机格式是否正确
    isRightPhone() {
      return /^1\d{10}$/.test(this.phone);
    },
  },
  // 组件方法
  methods: {
    // 异步获取验证码，需要接口
    async getCode() {
      // 定时器，每30s才能获取一次验证码
      if (!this.timer) {
        this.timer = 30;
        this.intervalId = setInterval(() => {
          this.timer -= 1;
          if (this.timer <= 0) {
            // 倒计时结束，停止计时
            clearInterval(this.intervalId);
          }
        }, 1000);

        // 接口。向指定手机号码发送验证码短信
        const result = await Promise.resolve(123456);
        console.log(result);
      }
    },
    reset() {
      this.phone = '';
      this.code = '';
    },
  },
  // 仅在keep-alive下有效
  activated() {},
  deactivated() {
    // 验证码清空
    this.code = '';
  },
};
</script>

<style lang="stylus" scoped>
@import '../Login.styl';
</style>
