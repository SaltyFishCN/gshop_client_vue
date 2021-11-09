<!--
 * Description: 首页 组件
 * Author:LinJ
 * Date:2021-11-06 22:15:54
 * LastEditors:LinJ
 * LastEditTime:2021-11-10 00:43:13
-->

<template>
  <div class="msite">
    <!--首页头部-->
    <HeaderTop title="昌平区北七家宏福科技园(337省道北)">
      <template #left>
        <router-link to="/search" class="header_search">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </template>
      <template #right>
        <span class="header_login">
          <span class="header_login_text">登录|注册</span>
        </span>
      </template>
    </HeaderTop>
    <div class="msite-wrapper" ref="wrapper">
      <div class="msite-mainContent">
        <!-- 首页导航 -->
        <Nav />
        <!--首页附近商家-->
        <ShopList />
      </div>
    </div>
  </div>
</template>

<script>
// 引入best-scroll 协助滚动
import BScroll from 'better-scroll';
// 引入首页的子组件
import HeaderTop from 'components/HeaderTop/HeaderTop.vue';
import Nav from 'components/Nav/Nav.vue';
import ShopList from 'components/ShopList/ShopList.vue';

export default {
  name: 'Msite',
  // 父组件传入的数据
  props: {},
  // 局部注册的组件
  components: {
    HeaderTop,
    Nav,
    ShopList,
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
  mounted() {
    // 一旦完成界面更新, 立即调用(此条语句要写在数据更新之后)
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
      });
    });
  },
};
</script>

<style lang="stylus" scoped>
.msite  //首页
  width 100%
  .msite-wrapper
    position fixed
    top 2.8125rem
    bottom 3.125rem
    width 100%
</style>
