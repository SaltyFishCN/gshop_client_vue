<!--
 * Description: 首页导航组件
 * Author:LinJ
 * Date:2021-11-07 22:50:27
 * LastEditors:LinJ
 * LastEditTime:2021-11-08 18:19:39
-->
<template>
  <div class="nav_container">
    <div v-swiper:msiteSwiper="swiperOption" class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/1.jpg">
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/2.jpg">
            </div>
            <span>商超便利</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/3.jpg">
            </div>
            <span>美食</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/4.jpg">
            </div>
            <span>简餐</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/5.jpg">
            </div>
            <span>新店特惠</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/6.jpg">
            </div>
            <span>准时达</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/7.jpg">
            </div>
            <span>预订早餐</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/8.jpg">
            </div>
            <span>土豪推荐</span>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/9.jpg">
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/10.jpg">
            </div>
            <span>商超便利</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/11.jpg">
            </div>
            <span>美食</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/12.jpg">
            </div>
            <span>简餐</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/13.jpg">
            </div>
            <span>新店特惠</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/14.jpg">
            </div>
            <span>准时达</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/1.jpg">
            </div>
            <span>预订早餐</span>
          </a>
          <a href="javascript:" class="link_to_food">
            <div class="food_container">
              <img src="./images/nav/2.jpg">
            </div>
            <span>土豪推荐</span>
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
// vue-awesome-swiper 基于swiper开发的滑动插件, 这里采用局部引入
import { directive } from 'vue-awesome-swiper';
// 引入swiper样式文件
import 'swiper/css/swiper.min.css';

export default {
  name: 'msiteNav',
  // 父组件传入的数据
  props: {},
  // 组件状态值
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
      },
    };
  },
  directives: {
    swiper: directive,
  },
};
</script>

<style lang="stylus" scoped>
@import '~stylus/mixins.styl';
.swiper-pagination >>> span.swiper-pagination-bullet-active
  background #02a774
.nav_container
  bottom-border-1px(#e4e4e4)
  height 12.5rem
  background #fff
  .swiper-container
    width 100%
    height 100%
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        display flex
        justify-content center
        align-items flex-start
        flex-wrap wrap
        .link_to_food
          width 25%
          .food_container
            display block
            width 100%
            text-align center
            padding-bottom .625rem
            font-size 0
            img
              display inline-block
              width 3.125rem
              height 3.125rem
          span
            display block
            width 100%
            text-align center
            font-size .8125rem
            color #666
</style>
