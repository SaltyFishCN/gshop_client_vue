<!--
 * Description:
 * Author:LinJ
 * Date:2021-11-10 22:57:52
 * LastEditors:LinJ
 * LastEditTime:2021-11-24 15:09:53
-->
<template>
  <div>
    <div class="menu">
      <!-- 左侧分类栏 -->
      <div class="menu-wrapper">
        <ul class="menu-content">
          <li
          class="menu-item"
          :class="{current: index === currentIndex}"
          v-for="(item,index) in menus"
          :key="index"
          @click="ClickMenuItem(index)">
            <span class="text bottom-border-1px">
              <img class="icon" :src="item.icon" v-if="item.icon">
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <!-- 右侧食品栏 -->
      <div class="foods-wrapper">
        <!-- 嵌套，ul=>li=>ul=>li -->
        <ul ref="foodsUl">
          <li class="food-list-hook" v-for="(menu, index) in menus" :key="index">
            <h1 class="title">{{menu.name}}</h1>
            <ul>
              <li class="food-item bottom-border-1px" v-for="(food, index) in menu.foods"
                  :key="index" @click="showFood(food)">
                <div class="icon">
                  <img width="57" height="57" v-lazy="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <!-- 数量控制 -->
                    <CartControl :food="food" />
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- 购物车组件 -->
      <ShopCart />
    </div>
    <Food :food="food" ref="food" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BScroll from 'better-scroll';
import CartControl from './Components/CartControl.vue';
import ShopCart from './Components/ShopCart.vue';
import Food from './Components/Food.vue';

export default {
  name: 'ShopMenu',
  // 父组件传入的数据
  props: {
    compData: Object,
  },
  // 局部注册的组件
  components: {
    CartControl,
    ShopCart,
    Food,
  },
  // 组件状态值
  data() {
    return {
      // 当前滚动距离
      currentY: 0,
      // 记录左侧分类在右侧对应的滚动位置
      scrollTops: [],
      // 需要显示的食物
      food: {},
    };
  },
  // 计算属性
  computed: {
    ...mapState(['shopData']),
    menus() {
      return this.shopData.menus;
    },
    currentIndex() {
      // 根据当前的滚动位置求出index值
      const { scrollTops, currentY } = this;
      const menuIndex = scrollTops.findIndex(
        (top, index, arr) => (top <= currentY && currentY < arr[index + 1]),
      );
      return menuIndex;
    },
  },
  // 组件方法
  methods: {
    // 初始化滚动
    _initScroll() {
      // 左侧滚动
      this.menuScroll = new BScroll('.menu-wrapper', {
        click: true,
      });
      // 右侧滚动
      this.foodsScroll = new BScroll('.foods-wrapper', {
        // probeType: 2 仅仅当手指按在滚动区域上，一直派发 scroll 事件
        probeType: 2,
        click: true,
      });
      // 监控右侧滚动
      this.foodsScroll.on('scroll', ({ y }) => {
        // 记录当前的滚动位置
        this.currentY = Math.abs(y);
      });
      this.foodsScroll.on('scrollEnd', ({ y }) => {
        // 记录当前的滚动位置
        this.currentY = Math.abs(y);
      });
    },
    // 初始化scrollTops数组
    _initTops() {
      // 初始化默认项
      const tops = [];
      let top = 0;
      // 第一个的滚动为0
      tops.push(top);
      // 获取所有的 food-list-hook
      const foodLists = this.$refs.foodsUl.querySelectorAll('.food-list-hook');
      Array.from(foodLists).forEach((foodList) => {
        // 每一次增长的幅度时foodlist的内部高度
        top += foodList.clientHeight;
        tops.push(top);
      });
      this.scrollTops = tops;
    },
    // 左侧列表点击跳转
    ClickMenuItem(index) {
      // 通过this.foodsScroll.scrollTo(x, y, time, easing)进行跳转
      // 找到所在的位置
      const curY = this.scrollTops[index];
      // 更新当前滚动距离
      this.currentY = curY;
      this.foodsScroll.scrollTo(0, -curY, 300);
    },
    showFood(food) {
      this.food = food;
      // 调用子组件方法，切换显示状态
      this.$refs.food.toggleShow();
    },
  },
  // 生命周期钩子
  mounted() {
    this.$nextTick(() => {
      this._initScroll();
      this._initTops();
    });
  },
  updated() {
    this.menuScroll.refresh();
    this.foodsScroll.refresh();
  },
};
</script>

<style lang="stylus" scoped>
@import '~stylus/mixins.styl';
.menu
  position fixed
  top 12.5rem
  bottom 2.875rem
  width 100%
  background #fff
  display flex
  overflow hidden
  .menu-wrapper
    flex 0 0 5rem
    width 5rem
    background #f3f5f7
    .menu-item
      display table
      height 3.375rem
      width 3.5rem
      padding 0 .75rem
      line-height .875rem
      &.current
        position relative
        z-index 10
        margin-top -0.0625rem
        background #fff
        color $green
        font-weight 700
        .text
          border-none()
      .icon
        display: inline-block
        vertical-align: top
        width: .75rem
        height: .75rem
        margin-right: .125rem
        background-size: .75rem .75rem
        background-repeat: no-repeat
      .text
        display: table-cell
        width: 3.5rem
        vertical-align: middle
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        font-size: .875rem
  .foods-wrapper
    flex 1
    .title
      padding-left .875rem
      height 1.625rem
      line-height 1.625rem
      border-left 2px solid #d9dde1
      font-size .75rem
      color rgb(147, 153, 159)
      background #f3f5f7
    .food-item
      display flex
      margin 1.125rem
      padding-bottom 1.125rem
      bottom-border-1px(rgba(7, 17, 27, 0.1))
      &:last-child
        border-none()
        margin-bottom 0
      .icon
        flex 0 0 3.5625rem
        margin-right .625rem
      .content
        flex 1
        .name
          margin .125rem 0 .5rem 0
          height .875rem
          line-height .875rem
          font-size .875rem
          color rgb(7, 17, 27)
        .desc, .extra
          line-height .625rem
          font-size .625rem
          color rgb(147, 153, 159)
        .desc
          line-height .75rem
          margin-bottom .5rem
        .extra
          .count
            margin-right .75rem
        .price
          font-weight 700
          line-height 1.5rem
          .now
            margin-right .5rem
            font-size .875rem
            color rgb(240, 20, 20)
          .old
            text-decoration line-through
            font-size .625rem
            color rgb(147, 153, 159)
        .cartcontrol-wrapper
          position absolute
          right 0
          bottom .75rem
</style>
