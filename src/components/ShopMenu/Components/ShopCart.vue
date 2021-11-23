<!--
 * Description:
 * Author:LinJ
 * Date:2021-11-11 23:59:06
 * LastEditors:LinJ
 * LastEditTime:2021-11-23 20:54:08
-->
<template>
<div>
    <div class="shopcart">
      <div class="content">
        <div class="content-left" @click="toggleShow">
          <div class="logo-wrapper">
            <div class="logo" :class="{ highlight: totalCount }">
              <i class="iconfont icon-shopping_cart" :class="{ highlight: totalCount }"></i>
            </div>
            <div class="num" v-if="totalCount">{{ totalCount }}</div>
          </div>
          <div class="price" :class="{ highlight: totalCount }">￥{{ totalPrice }}</div>
          <div class="desc">另需配送费￥{{ shopData.info.deliveryPrice }}元</div>
        </div>
        <div class="content-right">
          <div class="pay" :class="payClass">
            {{ payText }}
          </div>
        </div>
      </div>
      <transition name="move">
        <div class="shopcart-list" v-show="isShow">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty" @click="clearCart">清空</span>
          </div>
          <div class="list-content">
            <ul>
              <li class="food" v-for="(food, index) in cartFoods" :key="index">
                <span class="name">{{ food.name }}</span>
                <div class="price"><span>￥{{ food.price }}</span></div>
                <div class="cartcontrol-wrapper">
                  <CartControl :food="food"/>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <div class="list-mask" v-show="isShow" @click="toggleShow"></div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import BScroll from 'better-scroll';
import CartControl from './CartControl.vue';

export default {
  name: 'ShopCart',
  // 父组件传入的数据
  props: {
    id: [String, Number],
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
  computed: {
    ...mapState(['cartFoods', 'shopData']),
    ...mapGetters(['totalCount', 'totalPrice']),
    // 根据总价格来显示对应样式
    payClass() {
      const { totalPrice } = this;
      const { minPrice } = this.shopData.info;

      return totalPrice >= minPrice ? 'enough' : 'not-enough';
    },
    // 根据总价格来显示对应文本
    payText() {
      const { totalPrice } = this;
      const { minPrice } = this.shopData.info;
      if (totalPrice === 0) {
        return `￥${minPrice}元起送`;
      }
      if (totalPrice < minPrice) {
        return `还差￥${minPrice - totalPrice}元起送`;
      }
      return '结算';
    },
  },
  watch: {
    totalCount(newVal) {
      if (newVal === 0) {
        this.isShow = false;
      }
    },
    isShow(newVal) {
      if (newVal) {
        // 当列表显示时，创建滑动
        this.$nextTick(() => {
          // 实现BScroll的实例是一个单例
          if (!this.scroll) {
            this.scroll = new BScroll('.list-content', {
              click: true,
            });
          } else {
            this.scroll.refresh(); // 让滚动条刷新一下: 重新统计内容的高度
          }
        });
      }
    },
  },
  // 组件方法
  methods: {
    toggleShow() {
      // 只有当总数量大于0时切换
      if (this.totalCount > 0) {
        this.isShow = !this.isShow;
      }
    },
    clearCart() {
      this.$store.commit('clear_cart');
    },
  },
  updated() {
    if (this.scroll) {
      this.scroll.refresh();
    }
  },
};
</script>

<style lang="stylus" scoped>
@import "~stylus/mixins.styl"

.shopcart
  position fixed
  left 0
  bottom 0
  z-index 50
  width 100%
  height 3rem
  .content
    display flex
    background #141d27
    font-size 0
    color rgba(255, 255, 255, 0.4)
    .content-left
      flex 1
      .logo-wrapper
        display inline-block
        vertical-align top
        position relative
        top -0.625rem
        margin 0 .75rem
        padding .375rem
        width 3.5rem
        height 3.5rem
        box-sizing border-box
        border-radius 50%
        background #141d27
        .logo
          width 100%
          height 100%
          border-radius 50%
          text-align center
          background #2b343c
          &.highlight
            background $green
          .icon-shopping_cart
            line-height 2.75rem
            font-size 1.5rem
            color #80858a
            &.highlight
              color #fff
        .num
          position absolute
          top 0
          right 0
          width 1.5rem
          height 1rem
          line-height 1rem
          text-align center
          border-radius 1rem
          font-size .5625rem
          font-weight 700
          color #ffffff
          background rgb(240, 20, 20)
          box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.4)
      .price
        display inline-block
        vertical-align top
        margin-top .3125rem
        line-height 1.5rem
        padding-right .75rem
        box-sizing border-box
        font-size 1rem
        font-weight 700
        color #fff
        &.highlight
          color #fff
      .desc
        display inline-block
        vertical-align bottom
        margin-bottom .9375rem
        margin-left -2.8125rem
        font-size .625rem
    .content-right
      flex 0 0 6.5625rem
      width 6.5625rem
      .pay
        height 3rem
        line-height 3rem
        text-align center
        font-size .75rem
        font-weight 700
        color #fff
        &.not-enough
          background #2b333b
        &.enough
          background #00b43c
          color #fff
  .ball-container
    .ball
      position fixed
      left 2rem
      bottom 1.375rem
      z-index 200
      transition all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
      .inner
        width 1rem
        height 1rem
        border-radius 50%
        background $green
        transition all 0.4s linear
  .shopcart-list
    position absolute
    left 0
    top 0
    z-index -1
    width 100%
    transform translateY(-100%)
    &.move-enter-active, &.move-leave-active
      transition transform .3s
    &.move-enter, &.move-leave-to
      transform translateY(0)
    .list-header
      height 2.5rem
      line-height 2.5rem
      padding 0 1.125rem
      background #f3f5f7
      border-bottom 1px solid rgba(7, 17, 27, 0.1)
      .title
        float left
        font-size .875rem
        color rgb(7, 17, 27)
      .empty
        float right
        font-size .75rem
        color rgb(0, 160, 220)

    .list-content
      padding 0 1.125rem
      max-height 13.5625rem
      overflow hidden
      background #fff
      .food
        position relative
        padding .75rem 0
        box-sizing border-box
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        .name
          line-height 1.5rem
          font-size .875rem
          color rgb(7, 17, 27)
        .price
          position absolute
          right 5.625rem
          bottom .75rem
          line-height 1.5rem
          font-size .875rem
          font-weight 700
          color rgb(240, 20, 20)
        .cartcontrol-wrapper
          position absolute
          right 0
          bottom .375rem
.list-mask
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  z-index 40
  backdrop-filter blur(.625rem)
  opacity 1
  background rgba(7, 17, 27, 0.6)
  &.fade-enter-active, &.fade-leave-active
    transition all 0.5s
  &.fade-enter, &.fade-leave-to
    opacity 0
    background rgba(7, 17, 27, 0)
</style>
