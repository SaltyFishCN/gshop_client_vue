<!--
 * Description:
 * Author:LinJ
 * Date:2021-11-06 22:16:04
 * LastEditors:LinJ
 * LastEditTime:2021-11-10 19:06:09
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

    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import BScroll from 'better-scroll';

import HeaderTop from 'components/HeaderTop/HeaderTop.vue';

export default {
  name: 'Search',
  // 父组件传入的数据
  props: {},
  // 局部注册的组件
  components: {
    HeaderTop,
  },
  // 组件状态值
  data() {
    return {
      keyword: '',
    };
  },
  // 计算属性
  computed: {
    ...mapState(['searchShops']),
  },
  // 组件方法
  methods: {
    ...mapActions(['getSearchShops']),
    search() {
      const keyword = this.keyword.trim();
      if (keyword) {
        this.getSearchShops(keyword);
      }
    },
  },
  // 生命周期钩子，没用的可以删除
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll('.search_res_wrapper', {
        click: true,
      });
    });
  },
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
.search  //搜索
  width 100%
  .search_form
    clearFix()
    margin-top 2.8125rem
    background-color #fff
    padding .75rem .5rem
    input
      height 2.1875rem
      padding 0 .25rem
      border-radius 2px
      font-weight bold
      outline none
      &.search_input
        float left
        width 79%
        border 4px solid #f2f2f2
        font-size .875rem
        color #333
        background-color #f2f2f2
      &.search_submit
        float right
        width 18%
        border 4px solid #02a774
        font-size 1rem
        color #fff
        background-color #02a774
  .search_res_wrapper
    position fixed
    top 3.125rem
    bottom 3.125rem
    width 100%
</style>
