<!--
 * Description:
 * Author:LinJ
 * Date:2021-11-06 22:16:04
 * LastEditors:LinJ
 * LastEditTime:2021-11-24 02:05:34
-->
<template>
  <div class="search">
    <HeaderTop title="搜索" />
    <form class="search_form" @submit.prevent="search">
      <input
      type="search"
      name="search"
      placeholder="请输入商家或美食名称"
      class="search_input"
      v-model="keyword">
      <input type="submit" name="submit" class="search_submit">
    </form>
    <section class="search_res_wrapper">
      <ul class="list_container" v-if="hasSearchRes">
        <li v-for="item in searchShops" :key="item.id">
          <router-link :to="`/shop/${item.id}`" class="list_li">
            <section class="item_left">
              <img :src="imgBaseUrl + item.image_path" class="restaurant_img">
            </section>
            <section class="item_right">
              <div class="item_right_text">
                <p>
                  <span>{{item.name}}</span>
                </p>
                <p>月售 {{item.month_sales || item.recent_order_num}} 单</p>
                <p>
                  {{item.delivery_fee || item.float_minimum_order_amount}} 元起送 / 距离 {{ item.distance }}
                </p>
              </div>
            </section>
          </router-link>
        </li>
      </ul>
      <div class="search_none" v-else>很抱歉！无搜索结果</div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import BScroll from 'better-scroll';

import HeaderTop from 'components/HeaderTop/HeaderTop.vue';

export default {
  name: 'Search',
  // 局部注册的组件
  components: {
    HeaderTop,
  },
  // 组件状态值
  data() {
    return {
      keyword: '',
      hasSearchRes: true,
      // 图片基础地址
      imgBaseUrl: 'http://cangdu.org:8001/img/',
    };
  },
  // 计算属性
  computed: {
    // 搜索结果
    ...mapState(['searchShops']),
  },
  // 组件方法
  methods: {
    ...mapActions(['getSearchShops', 'clearSearchShops']),
    search() {
      // clear space
      const keyword = this.keyword.trim();
      if (keyword) {
        this.getSearchShops(keyword);
      }
    },
  },
  watch: {
    searchShops(value) {
      this.hasSearchRes = !!value.length;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$searchScroll = new BScroll('.search_res_wrapper', {
        click: true,
      });
    });
  },
  updated() {
    if (this.$searchScroll) {
      this.$searchScroll.refresh();
    }
  },
  beforeDestroy() {
    console.log('beforeDestroy');
    this.clearSearchShops();
  },
};
</script>

<style lang="stylus" scoped>
@import '~stylus/mixins.styl';
.search  //搜索
  width 100%
  .search_form
    position fixed
    top 2.8125rem
    background-color #fff
    padding .75rem .5rem
    width 100%
    z-index 100
    input
      height 2.1875rem
      padding 0 .25rem
      border-radius 2px
      font-weight bold
      outline none
      &.search_input
        width 79%
        border 4px solid #f2f2f2
        font-size .875rem
        color #333
        background-color #f2f2f2
      &.search_submit
        width 18%
        border 4px solid #02a774
        font-size 1rem
        color #fff
        background-color #02a774
  .search_res_wrapper
    position fixed
    top 105px
    bottom 50px
    width 100%
    .list_container
      background-color: #fff;
      .list_li
        display: flex;
        justify-content: center;
        padding: 10px
        border-bottom: 1px solid $bc;
        .item_left
          margin-right: 10px
          .restaurant_img
            width 50px
            height 50px
            display block
        .item_right
          font-size 12px
          flex 1
          .item_right_text
            p
              line-height 12px
              margin-bottom 6px
              &:last-child
                margin-bottom 0

    .search_none
      height 100%
      margin: 0 auto
      color: #333
      background-color: #fff
      text-align: center
      padding-top .625rem
</style>
