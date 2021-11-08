<!--
 * Description: 登录组件
 * Author:LinJ
 * Date:2021-11-08 19:34:47
 * LastEditors:LinJ
 * LastEditTime:2021-11-09 02:36:49
-->

<template>
  <section class="loginContainer">
    <el-dialog title="警告"
                :visible.sync="dialogVisible"
                top="30vh"
                width="70%">
      <span>{{ dialogMsg }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <a
          href="javascript:;"
          :class="{on: loginWay === 'LoginMessage'}"
          @click="loginWay = 'LoginMessage'"
          >
          短信登录
          </a>
          <a
          href="javascript:;"
          :class="{on: loginWay === 'LoginPwd'}"
          @click="loginWay = 'LoginPwd'"
          >密码登录
          </a>
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="login">
          <keep-alive>
            <component :is="loginWay" ref="loginComp"></component>
          </keep-alive>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import { Dialog, Button } from 'element-ui';
import LoginMessage from 'components/Login/LoginMessage/LoginMessage.vue';
import LoginPwd from 'components/Login/LoginPwd/LoginPwd.vue';

Vue.use(Dialog);
Vue.use(Button);

export default {
  name: 'login',
  // 父组件传入的数据
  props: {},
  // 子组件
  components: {
    LoginMessage,
    LoginPwd,
  },
  // 组件状态值
  data() {
    return {
      loginWay: 'LoginMessage', // 登录方式，false为密码登录
      dialogVisible: false,
      dialogMsg: '',
    };
  },
  // 组件方法
  methods: {
    showDialog(msg) {
      this.dialogMsg = msg;
      this.dialogVisible = true;
    },
    // 异步登录
    async login() {
      // 假设code： 登录失败 0 登录成功 1
      let loginResult = false;
      switch (this.loginWay) {
        case 'LoginMessage':
        {
          // 获取子组件的数据，因为是短信的方式，所以获取手机号和验证码
          const { isRightPhone, phone, code } = this.$refs.loginComp;
          // 前台做数据校验，检验有效性
          if (!isRightPhone) {
            // 弹出提示框，请输入正确的手机号
            this.showDialog('请输入正确的手机号！');
            return;
          }
          if (!(/^\d{6}$/.test(code))) {
            // 弹出提示框，验证码必须是6位数字
            this.showDialog('验证码必须是6位数字！');
            return;
          }
          // 一个promise api接口，后台验证数据准确性，返回是否登录成功
          console.log(phone, code);
          loginResult = await Promise.resolve({ code: 1 });
          break;
        }
        case 'LoginPwd':
        {
          // 获取子组件的数据，因为是密码的方式，所以获取账号，密码以及验证码
          const { name, pwd, captcha } = this.$refs.loginComp;
          // 前台做数据校验，检验有效性
          if (!name) {
            // 弹出提示框，提示该数据不能为空
            this.showDialog('用户名不能为空！');
            return;
          }
          if (!pwd) {
            // 弹出提示框，提示该数据不能为空
            this.showDialog('密码不能为空！');
            return;
          }
          if (!captcha) {
            // 弹出提示框，提示该数据不能为空
            this.showDialog('验证码不能为空！');
            return;
          }
          // 一个promise api接口，后台验证数据准确性，返回是否登录成功
          loginResult = await Promise.resolve({ code: 1 });
          break;
        }
        default:
          throw new Error('发生错误');
      }
      if (loginResult.code) {
        // 登录成功
        console.log('login success');
        // 通过vuex记录登录信息
        // 跳转到 profile页面
        this.$router.replace('/profile');
      } else {
        // 登录失败
        console.log('login failed');
        // 显示错误提醒
        this.showDialog('总之登录失败！');
        // 清空数据
        this.$refs.loginComp.reset();
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~stylus/mixins.styl';
.loginContainer
  width 100%
  height 100%
  background #fff
  .loginInner
    padding-top 3.75rem
    width 80%
    margin 0 auto
    .login_header
      .login_logo
        font-size 2.5rem
        font-weight bold
        color #02a774
        text-align center
      .login_header_title
        padding-top 2.5rem
        text-align center
        >a
          color #333
          font-size .875rem
          padding-bottom .25rem
          &:first-child
            margin-right 2.5rem
          &.on
            color #02a774
            font-weight 700
            border-bottom 2px solid #02a774
    .login_content
      >form
        .login_submit
          display block
          width 100%
          height 2.625rem
          margin-top 1.875rem
          border-radius 4px
          background #4cd96f
          color #fff
          text-align center
          font-size 1rem
          line-height 2.625rem
          border 0
      .about_us
        display block
        font-size .75rem
        margin-top 1.25rem
        text-align center
        color #999
    .go_back
      position absolute
      top .3125rem
      left .3125rem
      width 1.875rem
      height 1.875rem
      >.iconfont
        font-size 1.25rem
        color #999
</style>
