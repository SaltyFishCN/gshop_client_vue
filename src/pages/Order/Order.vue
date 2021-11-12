<!--
 * Description:
 * Author:LinJ
 * Date:2021-11-06 22:16:12
 * LastEditors:LinJ
 * LastEditTime:2021-11-10 22:37:46
-->
<template>
  <div class="order">
    <HeaderTop title="订单列表" />
    <section class="order_no_login">
      <img src="./images/order/person.png">
      <h3>登录后查看外卖订单</h3>
      <button>立即登陆</button>
    </section>
  </div>
</template>

<script>
import HeaderTop from 'components/HeaderTop/HeaderTop.vue';

export default {
  name: 'Order',
  // 父组件传入的数据
  props: {},
  // 局部注册的组件
  components: {
    HeaderTop,
  },
  // 组件状态值
  data() {
    return {};
  },
};
</script>

<style lang="stylus" scoped>
.order  //订单
  width 100%
  .order_no_login
    padding-top 8.75rem
    width 60%
    margin 0 auto
    text-align center
    >img
      display block
      width 100%
      height 30%
    >h3
      padding .625rem 0
      font-size 1.0625rem
      color #6a6a6a
    >button
      display inline-block
      background #02a774
      font-size .875rem
      color #fff
      border 0
      outline none
      border-radius 5px
      padding .625rem 1.25rem
</style>
