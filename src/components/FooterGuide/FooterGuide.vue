<!--
 * Description: footer guide 底部导航栏组件
 * Author:LinJ
 * Date:2021-11-06 22:15:37
 * LastEditors:LinJ
 * LastEditTime:2021-11-08 00:30:26
-->
<template>
  <div class="footer_guide">
    <router-link
      to="/msite"
      class="guide_item"
      active-class="on"
    >
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </router-link>
    <router-link
      to="/search"
      class="guide_item"
      active-class="on"
    >
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </router-link>
    <router-link
      to="/order"
      class="guide_item"
      active-class="on"
    >
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </router-link>
    <router-link
      to="/profile"
      class="guide_item"
      active-class="on"
    >
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'FooterGuide',
};
</script>

<style lang="stylus" scoped>
@import '~stylus/mixins.styl';
.footer_guide
  top-border-1px(#e4e4e4)
  position fixed
  z-index 500
  bottom 0
  left 0
  right 0
  background #fff
  width 100%
  height 3.125rem
  display flex
  .guide_item
    flex 1
    display flex
    text-align center
    flex-direction column
    align-items center
    margin .3125rem
    color #999999
    &.on
      color #02a774
    span
      font-size .75rem
      margin-top .125rem
      margin-bottom .125rem
      .iconfont
        font-size 1.375rem
</style>
