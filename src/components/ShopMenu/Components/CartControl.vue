<!--
 * Description: 菜单中的加减按钮
 * Author:LinJ
 * Date:2021-11-11 23:59:13
 * LastEditors:LinJ
 * LastEditTime:2021-11-22 22:58:44
-->
<template>
  <div class="cartcontrol">
    <transition name="move">
      <div
      class="iconfont icon-remove_circle_outline"
      v-if="food.count"
      @click.stop="updateFoodCount(false)"></div>
    </transition>
    <div class="cart-count" v-if="food.count">{{food.count}}</div>
    <div class="iconfont icon-add_circle" @click.stop="updateFoodCount(true)"></div>
  </div>
</template>

<script>
export default {
  name: 'CartControl',
  // 父组件传入的数据
  props: {
    food: Object,
  },
  // 组件方法
  methods: {
    updateFoodCount(isAdd) {
      this.$store.dispatch('updateFoodCount', { isAdd, food: this.food });
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~stylus/mixins.styl';
.cartcontrol
  font-size: 0
  .cart-decrease
    display: inline-block
    padding: .375rem
    line-height: 1.5rem
    font-size: 1.5rem
    color: rgb(0, 160, 220)
  .icon-remove_circle_outline
    display: inline-block
    padding .375rem
    line-height 1.5rem
    font-size 1.5rem
    color $green
    &.move-enter-active, &.move-leave-active
      transition all .3s
    &.move-enter, &.move-leave-to
      opacity 0
      transform translateX(.9375rem) rotate(180deg)
  .cart-count
    display: inline-block
    vertical-align: top
    width: .75rem
    padding-top: .375rem
    line-height: 1.5rem
    text-align: center
    font-size: .625rem
    color: rgb(147, 153, 159)
  .icon-add_circle
    display: inline-block
    padding: .375rem
    line-height: 1.5rem
    font-size: 1.5rem
    color $green
</style>
