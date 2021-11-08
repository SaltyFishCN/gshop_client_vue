<!--
 * Description: 顶部横条组件，共有内容为中间的标题，左右两侧内容通过插槽插入
 * Author:LinJ
 * Date:2021-11-07 23:32:32
 * LastEditors:LinJ
 * LastEditTime:2021-11-08 20:10:38
-->
<template>
  <header class="header">
    <slot name='left'></slot>
    <span class="header_title">
      <span class="header_title_text ellipsis">{{ title }}</span>
    </span>
    <slot name='right'></slot>
  </header>
</template>

<script>
export default {
  name: 'HeaderTop',
  // 父组件传入的数据
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
.header_search >>> .icon-sousuo
  font-size 1.5625rem
  color #fff
.header
  background-color #02a774
  position fixed
  z-index 500
  left 0
  top 0
  width 100%
  height 2.8125rem
  .header_search
    position absolute
    left .9375rem
    top 50%
    transform translateY(-50%)
    width 10%
    height 50%
  .header_title
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    width 50%
    color #fff
    text-align center
    .header_title_text
      font-size 1.25rem
      color #fff
      display block
  .header_login
    font-size .875rem
    color #fff
    position absolute
    right .9375rem
    top 50%
    transform translateY(-50%)
    .header_login_text
      color #fff
</style>
