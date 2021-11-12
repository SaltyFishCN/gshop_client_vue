<!--
 * Description:
 * Author:LinJ
 * Date:2021-11-08 00:36:10
 * LastEditors:LinJ
 * LastEditTime:2021-11-10 23:51:24
-->
<template>
  <div class="shop_list_container">
    <div class="shop_header">
      <i class="iconfont icon-xuanxiang"></i>
      <span class="shop_header_title">附近商家</span>
    </div>
    <div class="shop_container">
      <ul class="shop_list" v-if="isShowList">
        <li class="shop_li border-1px" v-for="shop in shoplist" :key="shop.id">
          <router-link :to="`/shop/${shop.id}`">
            <div class="shop_left">
              <img class="shop_img" :src="baseImgUrl + shop.image_path">
            </div>
            <div class="shop_right">
              <section class="shop_detail_header">
                <h4 class="shop_title ellipsis">{{shop.name}}</h4>
                <ul class="shop_detail_ul">
                  <li
                  class="supports"
                  v-for="item in shop.supports"
                  :key="item.id"
                  >
                  {{item.icon_name}}
                  </li>
                </ul>
              </section>
              <section class="shop_rating_order">
                <section class="shop_rating_order_left">
                  <Star :score="shop.rating" :size="24" />
                  <div class="rating_section">
                    {{shop.rating}}
                  </div>
                  <div class="order_section">
                    月售{{shop.recent_order_num}}单
                  </div>
                </section>
                <section class="shop_rating_order_right">
                  <span class="delivery_style delivery_right">{{shop.delivery_mode.text}}</span>
                </section>
              </section>
              <section class="shop_distance">
                <p class="shop_delivery_msg">
                  <span>¥{{shop.float_minimum_order_amount}}起送</span>
                  <span class="segmentation">/</span>
                  <span>配送费约¥{{shop.float_delivery_fee}}</span>
                </p>
              </section>
            </div>
          </router-link>
        </li>
      </ul>
      <ul v-else>
        <li v-for="item,index in 6" :key="index">
          <img src="./images/shop_back.svg" alt="back">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Star from 'components/Star/Star.vue';

export default {
  name: 'ShopList',
  // 父组件传入的数据
  props: {
    shoplist: {
      type: Array,
      required: true,
    },
  },
  // 局部注册的组件
  components: {
    Star,
  },
  // 组件状态值
  data() {
    return {
      baseImgUrl: 'https://elm.cangdu.org/img/',
    };
  },
  // 计算属性
  computed: {
    isShowList() {
      return this.shoplist.length;
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~stylus/mixins.styl';
.shop_list_container
    top-border-1px(#e4e4e4)
    margin-top .625rem
    background #fff
    .shop_header
      padding .625rem .625rem 0
      .shop_icon
        margin-left .3125rem
        color #999
      .shop_header_title
        color #999
        font-size .875rem
        line-height 1.25rem
    .shop_container
      margin-bottom 3.125rem
      .shop_list
        .shop_li
          bottom-border-1px(#f1f1f1)
          width 100%
          >a
            clearFix()
            display block
            box-sizing border-box
            padding .9375rem .5rem
            width 100%
            .shop_left
              float left
              box-sizing border-box
              width 23%
              height 4.6875rem
              padding-right .625rem
              .shop_img
                display block
                width 100%
                height 100%
            .shop_right
              float right
              width 77%
              .shop_detail_header
                clearFix()
                width 100%
                .shop_title
                  float left
                  width 12.5rem
                  color #333
                  font-size 1rem
                  line-height 1rem
                  font-weight 700
                  &::before
                    content '品牌'
                    display inline-block
                    font-size .6875rem
                    line-height .6875rem
                    color #333
                    background-color #ffd930
                    padding .125rem .125rem
                    border-radius 2px
                    margin-right .3125rem
                .shop_detail_ul
                  float right
                  margin-top .1875rem
                  .supports
                    float left
                    font-size .625rem
                    color #999
                    border 1px solid #f1f1f1
                    padding 0 .125rem
                    border-radius 2px
              .shop_rating_order
                clearFix()
                width 100%
                margin-top 1.125rem
                margin-bottom .5rem
                .shop_rating_order_left
                  float left
                  color #ff9a0d
                  .rating_section
                    float left
                    font-size .625rem
                    color #ff6000
                    margin-left .25rem
                  .order_section
                    float left
                    font-size .625rem
                    color #666
                    transform scale(.8)
                .shop_rating_order_right
                  float right
                  font-size 0
                  .delivery_style
                    transform-origin 2.1875rem 0
                    transform scale(.7)
                    display inline-block
                    font-size .75rem
                    padding .0625rem
                    border-radius 2px
                  .delivery_left
                    color #fff
                    margin-right --0.625rem
                    background-color #02a774
                    border 1px solid #02a774
                  .delivery_right
                    color #02a774
                    border 1px solid #02a774
              .shop_distance
                clearFix()
                width 100%
                font-size .75rem
                .shop_delivery_msg
                  float left
                  transform-origin 0
                  transform scale(.9)
                  color #666
                .segmentation
                  color #ccc
</style>
