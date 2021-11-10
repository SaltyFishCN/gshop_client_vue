<!--
 * Description: 首页导航组件
 * Author:LinJ
 * Date:2021-11-07 22:50:27
 * LastEditors:LinJ
 * LastEditTime:2021-11-10 15:13:03
-->
<template>
  <div class="nav_container">
    <div v-swiper:msiteSwiper="swiperOption" class="swiper-container" v-if="isShowNav">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="page, index in pagesData" :key="index">
          <a href="javascript:" class="link_to_food" v-for="item in page" :key="item.id">
            <div class="food_container">
              <img :src="baseImgUrl + item.image_url">
            </div>
            <span>{{item.title}}</span>
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <img src="./images/msite_back.svg" alt="back" v-else>
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
  props: {
    category: {
      type: Array,
      required: true,
    },
  },
  // 组件状态值
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true,
      },
      baseImgUrl: 'https://fuss10.elemecdn.com',
    };
  },
  computed: {
    // v-if中不做逻辑判断
    isShowNav() {
      return this.category.length;
    },
    // 将商品列表进行分页
    pagesData() {
      const pages = [];
      this.category.forEach((item, index) => {
        const page = Math.floor(index / 8);
        pages[page] = pages[page] || [];
        pages[page].push(item);
      });
      return pages;
    },
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
