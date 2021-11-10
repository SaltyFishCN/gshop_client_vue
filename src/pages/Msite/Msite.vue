<!--
 * Description: 首页 组件
 * Author:LinJ
 * Date:2021-11-06 22:15:54
 * LastEditors:LinJ
 * LastEditTime:2021-11-10 17:01:04
-->

<template>
  <div class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <template #left>
        <router-link to="/search" class="header_search">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </template>
      <!-- 用户信息 -->
      <template #right>
        <span class="header_login">
          <span class="header_login_text">登录|注册</span>
        </span>
      </template>
    </HeaderTop>
    <div class="msite-wrapper">
      <div class="msite-mainContent">
        <!-- 首页导航 -->
        <Nav :category="categorys || []" />
        <!--首页附近商家-->
        <ShopList :shoplist="shops || []" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
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
  computed: {
    // this.address = this.$store.state.address
    ...mapState(['address', 'categorys', 'shops']),
  },
  // 组件方法
  methods: {
    // this.getCategorys = this.$store.dispatch(getCategorys)
    // this.getShops = this.$store.dispatch(getShops)
    ...mapActions(['getCategorys', 'getShops']),
  },
  // 生命周期钩子，没用的可以删除
  mounted() {
    console.log('msite mounted');
    // 一旦完成界面更新, 立即调用(此条语句要写在数据更新之后)
    this.$nextTick(() => {
      this.scroll = new BScroll('.msite-wrapper', {
        click: true,
      });
    });
    // 获取商品列表和餐馆列表
    this.getCategorys();
    this.getShops();
  },
  updated() {
    // 数据更新时，刷新，防止滚动失效
    this.scroll.refresh();
  },
};
</script>

<style lang="stylus" scoped>
.msite  //首页
  width 100%
  .msite-wrapper
    position fixed
    top 3.125rem
    bottom 3.125rem
    width 100%
</style>
