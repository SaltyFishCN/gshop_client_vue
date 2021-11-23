<!--
 * Description:
 * Author:LinJ
 * Date:2021-11-11 23:58:58
 * LastEditors:LinJ
 * LastEditTime:2021-11-22 17:33:26
-->
<template>
  <div class="food" v-if="isShow">
    <div class="food-content">
      <div class="image-header">
        <img :src="food.image">
        <p class="foodpanel-desc">{{food.info}}</p>
        <div class="back" @click="toggleShow">
          <i class="iconfont icon-arrow_left"></i>
        </div>
      </div>
      <div class="content">
        <h1 class="title">{{food.name}}</h1>
        <div class="detail">
          <span class="sell-count">月售{{food.sellCount}}份</span>
          <span class="rating">好评率{{food.rating}}%</span>
        </div>
        <div class="price">
          <span class="now">￥{{food.price}}</span>
          <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
        </div>
        <div class="cartcontrol-wrapper">
          <CartControl :food="food"/>
        </div>
      </div>
    </div>
    <div class="food-cover" @click="toggleShow"></div>
  </div>
</template>

<script>
import CartControl from './CartControl.vue';

export default {
  name: 'Food',
  // 父组件传入的数据
  props: {
    food: Object,
  },
  // 局部注册的组件
  components: {
    CartControl,
  },
  // 组件状态值
  data() {
    return {
      isShow: false,
    };
  },
  // 计算属性
  computed: {},
  // 组件方法
  methods: {
    toggleShow() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style lang="stylus" scoped>
@import "~stylus/mixins.styl"

.food
  position: fixed
  left: 0
  top: 0
  bottom: 3rem
  z-index: 101
  width: 100%
  &.fade-enter-active, &.fade-leave-active
    transition opacity .5s
  &.fade-enter, &.fade-leave-to
    opacity 0
  .food-content
    position absolute
    left 50%
    top 50%
    transform translate(-50%, -50%)
    width 80%
    height 65%
    z-index 66
    background #fff
    border-radius 5px
    .image-header
      position: relative
      width: 100%
      height: 0
      padding-top: 100%
      img
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
      .foodpanel-desc
        font-size .625rem
        color #ddd
        letter-spacing 0
        position absolute
        bottom 0
        left 0
        right 0
        padding 0 .625rem .625rem
      .back
        position: absolute
        top: .625rem
        left: 0
        .icon-arrow_left
          display: block
          padding: .625rem
          font-size: 1.25rem
          color: #fff
    .content
      position: relative
      padding: 1.125rem
      .title
        line-height: .875rem
        margin-bottom: .5rem
        font-size: .875rem
        font-weight: 700
        color: rgb(7, 17, 27)
      .detail
        margin-bottom: 1.125rem
        line-height: .625rem
        height: .625rem
        font-size: 0
        .sell-count, .rating
          font-size: .625rem
          color: rgb(147, 153, 159)
        .sell-count
          margin-right: .75rem
      .price
        font-weight: 700
        line-height: 1.5rem
        .now
          margin-right: .5rem
          font-size: .875rem
          color: rgb(240, 20, 20)
        .old
          text-decoration: line-through
          font-size: .625rem
          color: rgb(147, 153, 159)
      .cartcontrol-wrapper
        position: absolute
        right: .75rem
        bottom: .75rem
      .buy
        position: absolute
        right: 1.125rem
        bottom: 1.125rem
        z-index: 10
        height: 1.5rem
        line-height: 1.5rem
        padding: 0 .75rem
        box-sizing: border-box
        border-radius: 12px
        font-size: .625rem
        color: #fff
        background: rgb(0, 160, 220)
        &.fade-transition
          transition: all 0.2s
          opacity: 1
        &.fade-enter, &.fade-leave
          opacity: 0
  .food-cover
    position absolute
    top 0
    right 0
    bottom -3rem
    left 0
    z-index 55
    background-color rgba(0, 0, 0, 0.5)
</style>
