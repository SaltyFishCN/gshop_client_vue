<!--
 * Description:
 * Author:LinJ
 * Date:2021-11-10 15:28:24
 * LastEditors:LinJ
 * LastEditTime:2021-11-10 16:37:21
-->
<template>
  <div class="star" :class="'star-'+size">
    <span class="star-item" :class="star" v-for="star,index in starClass" :key="index"></span>
  </div>
</template>

<script>
export default {
  name: 'Star',
  // 父组件传入的数据
  props: {
    score: {
      type: Number,
      required: true,
    },
    size: {
      type: Number,
      default: 24,
    },
  },
  // 组件状态值
  data() {
    return {};
  },
  // 计算属性
  computed: {
    starClass() {
      let { score } = this;
      // 超过5分按5分算
      score = score >= 5 ? 5 : score;
      // 满星个数
      const tempArr = new Array(5).fill('off');
      const onStarCnt = Math.floor(score);
      const halfStarCnt = (score * 10) % 10 >= 5 ? 1 : 0;
      if (onStarCnt > 0) tempArr.fill('on', 0, Math.floor(score));
      if (halfStarCnt) tempArr.fill('half', onStarCnt, onStarCnt + 1);

      return tempArr;
    },
  },
  // 组件方法
  methods: {},
};
</script>

<style lang="stylus" scoped>
@import '~stylus/mixins.styl';
.star //2x图 3x图
  float left
  font-size 0
  .star-item
    display inline-block
    background-repeat no-repeat
  &.star-48
    .star-item
      width 1.25rem
      height 1.25rem
      margin-right 1.375rem
      background-size 1.25rem 1.25rem
      &:last-child
        margin-right: 0
      &.on
        bg-image('./images/star48_on')
      &.half
        bg-image('./images/star48_half')
      &.off
        bg-image('./images/star48_off')
  &.star-36
    .star-item
      width .9375rem
      height .9375rem
      margin-right .375rem
      background-size .9375rem .9375rem
      &:last-child
        margin-right 0
      &.on
        bg-image('./images/star36_on')
      &.half
        bg-image('./images/star36_half')
      &.off
        bg-image('./images/star36_off')
  &.star-24
    .star-item
      width .625rem
      height .625rem
      margin-right .1875rem
      background-size .625rem .625rem
      &:last-child
        margin-right 0
      &.on
        bg-image('./images/star24_on')
      &.half
        bg-image('./images/star24_half')
      &.off
        bg-image('./images/star24_off')
</style>
