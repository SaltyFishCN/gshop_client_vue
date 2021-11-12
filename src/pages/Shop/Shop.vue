<!--
 * Description:
 * Author:LinJ
 * Date:2021-11-10 22:57:43
 * LastEditors:LinJ
 * LastEditTime:2021-11-11 20:13:42
-->
<template>
  <div
  v-loading="!isReady2Show"
  element-loading-text="信息加载中...."
  element-loading-spinner="el-icon-loading"
  element-loading-background="rgba(0, 0, 0, 0.8)"
  lock>
    <template v-if="isReady2Show">
      <!-- ShopHeader -->
      <ShopHeader :shopInfo ="shopData.ShopInfo" />
      <!-- tab 这里用动态组件来实现 -->
      <ul class="tab">
        <li class="tab-item" @click="changeShownComponent('ShopMenu')">
          <p :class="[showcomp === 'ShopMenu' && 'active']">点餐</p>
        </li>
        <li class="tab-item" @click="changeShownComponent('ShopRatings')">
          <p :class="[showcomp === 'ShopRatings' && 'active']">评价</p>
        </li>
        <li class="tab-item" @click="changeShownComponent('ShopInfo')">
          <p :class="[showcomp === 'ShopInfo' && 'active']">商家详情</p>
        </li>
      </ul>
      <!-- 动态组件 -->
      <keep-alive>
        <component
        :is="showcomp"
        :compData="retunCompData()"
        />
      </keep-alive>
    </template>
  </div>
</template>

<script>
// 从element-ui 引入loading
import Vue from 'vue';
import { Loading, Message } from 'element-ui';

// 进入到这里的时候，数据应当全部加载好，所以不采用异步组件
import ShopHeader from 'components/ShopHeader/ShopHeader.vue';
import ShopMenu from 'components/ShopMenu/ShopMenu.vue';
import ShopRatings from 'components/ShopRatings/ShopRatings.vue';
import ShopInfo from 'components/ShopInfo/ShopInfo.vue';
import {
  reqRestaurantInfo_mock,
  reqRestaurantRating_mock,
  reqMenuList_mock,
} from 'api/index';

Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;

const SHOP_INFO_READY = 0x001;
const SHOP_RATINGS_READY = 0x010;
const SHOP_MENU_READY = 0x100;
const SHOP_DATA_ALL_READY = SHOP_INFO_READY + SHOP_RATINGS_READY + SHOP_MENU_READY;

export default {
  name: 'Shop',
  // 局部注册的组件
  components: {
    ShopHeader,
    ShopMenu,
    ShopRatings,
    ShopInfo,
  },
  // 组件状态值
  data() {
    return {
      // 要显示的部分，默认为menu
      showcomp: 'ShopMenu',
      isReady: 0,
      isReady2Show: false,
      timer: null,
      // 获取到的信息，包含商家信息，菜单以及评价
      shopData: {},
    };
  },
  // 计算属性
  computed: {},
  // 组件方法
  methods: {
    changeShownComponent(compName) {
      this.showcomp = compName;
    },
    retunCompData() {
      // 动态传递给组件数据，因为默认是menu 所以与[]进行短路
      return this.shopData[this.showcomp] || [];
    },
  },
  watch: {
    isReady(newVal) {
      if (newVal === SHOP_DATA_ALL_READY) {
        // 数据准备 ok
        console.log('this page is ready to show');
        // 开启页面显示
        this.isReady2Show = true;
        clearTimeout(this.timer);
      }
    },
  },
  // 生命周期钩子，没用的可以删除
  mounted() {
    const { id } = this.$route.params;
    // 根据id获取数据，应该设置一个超时机制，超时没完成则返回上一个页面
    this.timer = setTimeout(() => {
      if (this.isReady !== SHOP_DATA_ALL_READY) {
        // 数据还没准备好,弹窗提示加载失败并返回上一级页面
        this.$message({
          message: '加载失败！',
          type: 'error',
          duration: '1000',
          center: true,
        });
        this.$router.back();
      }
    }, 1000);
    reqRestaurantInfo_mock(id).then((res) => {
      if (res.code === 0) {
        // 获取到数据
        this.shopData.ShopInfo = res.data;
        this.isReady += SHOP_INFO_READY;
      }
    });
    reqRestaurantRating_mock(id).then((res) => {
      if (res.code === 0) {
        // 获取到数据
        this.shopData.ShopRatings = res.data;
        this.isReady += SHOP_RATINGS_READY;
      }
    });
    reqMenuList_mock(id).then((res) => {
      if (res.code === 0) {
        // 获取到数据
        this.shopData.ShopMenu = res.data;
        this.isReady += SHOP_MENU_READY;
      }
    });
  },
};
</script>

<style lang="stylus" scoped>
@import '~stylus/mixins.styl';
.tab
  height 2.5rem
  line-height 2.5rem
  background #fff
  bottom-border-1px(rgba(7, 17, 27, 0.1))
  .tab-item
    float left
    width: 33.33333%
    text-align center
    font-size .875rem
    color rgb(77, 85, 93)
    p
      position relative
      font-size 1.25rem
      &.active
        color #02a774
        &::after
          content ''
          position absolute
          left 50%
          bottom 1px
          width 50%
          height .125rem
          transform translateX(-50%)
          background #02a774
</style>
