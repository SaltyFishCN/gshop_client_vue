<!--
 * Description:
 * Author:LinJ
 * Date:2021-11-06 22:16:26
 * LastEditors:LinJ
 * LastEditTime:2021-11-08 20:13:05
-->

<template>
  <div class="profile">
    <HeaderTop title="我的" />
    <section class="profile-number">
      <router-link to='/login' href="javascript:" class="profile-link">
        <div class="profile_image">
          <i class="iconfont icon-person"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top">登录/注册</p>
          <p>
            <span class="user-icon">
              <i class="iconfont icon-shouji icon-mobile"></i>
            </span>
            <span class="icon-mobile-number">暂无绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-jiantou1"></i>
        </span>
      </router-link>
    </section>
    <section class="profile_info_data border-1px">
      <ul class="info_data_list">
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0.00</span>元</span>
          <span class="info_data_bottom">我的余额</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>个</span>
          <span class="info_data_bottom">我的优惠</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>分</span>
          <span class="info_data_bottom">我的积分</span>
        </a>
      </ul>
    </section>
    <section class="profile_my_order border-1px">
      <!-- 我的订单 -->
      <a href='javascript:' class="my_order">
        <span>
          <i class="iconfont icon-order-s"></i>
        </span>
        <div class="my_order_div">
          <span>我的订单</span>
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
      <!-- 积分商城 -->
      <a href='javascript:' class="my_order">
        <span>
          <i class="iconfont icon-jifen"></i>
        </span>
        <div class="my_order_div">
          <span>积分商城</span>
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
      <!-- 硅谷外卖会员卡 -->
      <a href="javascript:" class="my_order">
        <span>
          <i class="iconfont icon-vip"></i>
        </span>
        <div class="my_order_div">
          <span>硅谷外卖会员卡</span>
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
    </section>
    <section class="profile_my_order border-1px">
      <!-- 服务中心 -->
      <a href="javascript:" class="my_order">
        <span>
          <i class="iconfont icon-fuwu"></i>
        </span>
        <div class="my_order_div">
          <span>服务中心</span>
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
    </section>
  </div>
</template>

<script>
import HeaderTop from 'components/HeaderTop/HeaderTop.vue';

export default {
  name: 'Profile',
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
  // 计算属性
  computed: {},
  // 组件方法
  methods: {},
  // 生命周期钩子，没用的可以删除
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  // 仅在keep-alive下有效
  activated() {},
  deactivated() {},
};
</script>

<style lang="stylus" scoped>
@import '~stylus/mixins.styl';
.profile //我的
  width 100%
  overflow hidden
  .profile-number
    margin-top 2.875rem
    .profile-link
      clearFix()
      position relative
      display block
      background #02a774
      padding 1.25rem .625rem
      .profile_image
        float left
        width 3.75rem
        height 3.75rem
        border-radius 50%
        overflow hidden
        vertical-align top
        .icon-person
          background #e4e4e4
          font-size 3.875rem
      .user-info
        float left
        margin-top .5rem
        margin-left .9375rem
        p
          font-weight: 700
          font-size 1.125rem
          color #fff
          &.user-info-top
            padding-bottom .5rem
          .user-icon
            display inline-block
            margin-left -0.9375rem
            margin-right .3125rem
            width 1.25rem
            height 1.25rem
            .icon-mobile
              font-size 1.875rem
              vertical-align text-top
          .icon-mobile-number
            font-size .875rem
            color #fff
      .arrow
        width .75rem
        height .75rem
        position absolute
        right .9375rem
        top 40%
        .icon-jiantou1
          color #fff
          font-size .3125rem
  .profile_info_data
    bottom-border-1px(#e4e4e4)
    width 100%
    background #fff
    overflow hidden
    .info_data_list
      clearFix()
      .info_data_link
        float left
        width 33%
        text-align center
        border-right 1px solid #f1f1f1
        .info_data_top
          display block
          width 100%
          font-size .875rem
          color #333
          padding .9375rem .3125rem .625rem
          span
            display inline-block
            font-size 1.875rem
            color #f90
            font-weight 700
            line-height 1.875rem
        .info_data_bottom
          display inline-block
          font-size .875rem
          color #666
          font-weight 400
          padding-bottom .625rem
      .info_data_link:nth-of-type(2)
        .info_data_top
          span
            color #ff5f3e
      .info_data_link:nth-of-type(3)
        border 0
        .info_data_top
          span
            color #6ac20b
  .profile_my_order
    top-border-1px(#e4e4e4)
    margin-top .625rem
    background #fff
    .my_order
      display flex
      align-items center
      padding-left .9375rem
      >span
        display flex
        align-items center
        width 1.25rem
        height 1.25rem
        >.iconfont
          margin-left -0.625rem
          font-size 1.875rem
        .icon-order-s
          color #02a774
        .icon-jifen
          color #ff5f3e
        .icon-vip
          color #f90
        .icon-fuwu
          color #02a774
      .my_order_div
        width 100%
        border-bottom 1px solid #f1f1f1
        padding 1.125rem .625rem 1.125rem 0
        font-size 1rem
        color #333
        display flex
        justify-content space-between
        span
          display block
        .my_order_icon
          width .625rem
          height .625rem
          .icon-jiantou1
            color #bbb
            font-size .625rem
</style>
