<!--
 * Description:
 * Author:LinJ
 * Date:2021-11-10 22:58:06
 * LastEditors:LinJ
 * LastEditTime:2021-11-24 00:30:07
-->
<template>
<div class="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{info.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家99%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <Star :score="info.serviceScore" :size="36" />
            <span class="score">{{info.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <Star :score="info.foodScore" :size="36" />
            <span class="score">{{info.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{info.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>

      <div class="split"></div>

      <div class="ratingSelect">
        <div class="rating-type border-1px">
          <span class="block positive" :class="{active: selectType===2}" @click="setSelectType(2)">
            全部<span class="count">{{ratings.length}}</span>
          </span>
          <span class="block positive" :class="{active: selectType===0}" @click="setSelectType(0)">
            满意<span class="count">{{positiveSize}}</span>
          </span>
          <span class="block negative" :class="{active: selectType===1}" @click="setSelectType(1)">
            不满意<span class="count">{{ratings.length - positiveSize}}</span>
          </span>
        </div>
        <div class="switch" :class="{on: onlyShowText}" @click="toggleOnlyShowText">
          <span class="iconfont icon-check_circle"></span>
          <span class="text">只看有内容的评价</span>
        </div>
      </div>

      <div class="rating-wrapper">
        <ul>
          <li class="rating-item" v-for="(rating, index) in filterRatings" :key="index">
            <div class="avatar">
              <img width="28" height="28" :src="rating.avatar">
            </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <Star :score="rating.score" :size="24" />
                <span class="delivery">{{rating.deliveryTime}}</span>
              </div>
              <p class="text">{{rating.text}}</p>
              <div class="recommend">
                <span class="iconfont"
                :class="rating.rateType === 0 ? 'icon-thumb_up' : 'icon-thumb_down'"></span>
                <span
                class="item"
                v-for="(item, index) in rating.recommend"
                :key="index">{{item}}</span>
              </div>
              <!-- 使用过滤器对日期格式进行转换 -->
              <div class="time">{{ rating.rateTime | date-format}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import BScroll from 'better-scroll';
import Star from 'components/Star/Star.vue';

export default {
  name: 'ShopRatings',
  // 局部注册的组件
  components: {
    Star,
  },
  // 组件状态值
  data() {
    return {
      onlyShowText: true, // 是否只显示有文本的
      selectType: 2, // 选择的评价类型: 0满意, 1不满意, 2全部
    };
  },
  // 计算属性
  computed: {
    ...mapState(['shopData']),
    ...mapGetters(['positiveSize']),
    info() {
      return this.shopData.info;
    },
    ratings() {
      return this.shopData.ratings;
    },
    // 过滤评价数组
    filterRatings() {
      const { ratings, selectType, onlyShowText } = this;

      return ratings.filter((rating) => {
        const { rateType, text } = rating;
        /*
          条件1:
              selectType: 0/1/2
              rateType: 0/1
              selectType === 2 || selectType === rateType
          条件2
            onlyShowText:true && text.length > 0
            onlyShowText:false 全部通过

            !onlyShowText || text.length > 0
          */
        return (selectType === 2 || selectType === rateType) && (!onlyShowText || text.length > 0);
      });
    },
  },
  // 组件方法
  methods: {
    setSelectType(type) {
      this.selectType = type;
    },
    toggleOnlyShowText() {
      this.onlyShowText = !this.onlyShowText;
    },
  },
  // 生命周期钩子，没用的可以删除
  mounted() {
    this.$nextTick(() => {
      this.$raingScroll = new BScroll('.ratings', {
        click: true,
      });
    });
  },
  updated() {
    this.$raingScroll.refresh();
  },
};
</script>

<style lang="stylus" scoped>
@import '~stylus/mixins.styl';
.ratings
  position: absolute
  top: 12.1875rem
  bottom: 0
  left: 0
  width: 100%
  overflow: hidden
  background: #fff
  .overview
    display: flex
    padding: 1.125rem 0
    .overview-left
      flex: 0 0 8.5625rem
      padding: .375rem 0
      width: 8.5625rem
      border-right: 1px solid rgba(7, 17, 27, 0.1)
      text-align: center
      @media only screen and (max-width: 20rem)
        flex: 0 0 7.5rem
        width: 7.5rem
      .score
        margin-bottom: .375rem
        line-height: 1.75rem
        font-size: 1.5rem
        color: rgb(255, 153, 0)
      .title
        margin-bottom: .5rem
        line-height: .75rem
        font-size: .75rem
        color: rgb(7, 17, 27)
      .rank
        line-height: .625rem
        font-size: .625rem
        color: rgb(147, 153, 159)
    .overview-right
      flex: 1
      padding: .375rem 0 .375rem 1.5rem
      @media only screen and (max-width: 20rem)
        padding-left: .375rem
      .score-wrapper
        margin-bottom: .5rem
        font-size: 0
        .title
          display: inline-block
          line-height: 1.125rem
          vertical-align: top
          font-size: .75rem
          color: rgb(7, 17, 27)
        .star
          display: inline-block
          margin: 0 .75rem
          vertical-align: top
        .score
          display: inline-block
          line-height: 1.125rem
          vertical-align: top
          font-size: .75rem
          color: rgb(255, 153, 0)
      .delivery-wrapper
        font-size: 0
        .title
          line-height: 1.125rem
          font-size: .75rem
          color: rgb(7, 17, 27)
        .delivery
          margin-left: .75rem
          font-size: .75rem
          color: rgb(147, 153, 159)
  .split
    width: 100%
    height: 1rem
    border-top: 1px solid rgba(7, 17, 27, 0.1)
    border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    background: #f3f5f7
  .ratingSelect
    .rating-type
      padding: 1.125rem 0
      margin: 0 1.125rem
      bottom-border-1px(rgba(7, 17, 27, 0.1))
      font-size: 0
      .block
        display: inline-block
        padding: .5rem .75rem
        margin-right: .5rem
        line-height: 1rem
        border-radius: 1px
        font-size: .75rem
        color: rgb(77, 85, 93)
        background: rgba(77, 85, 93, 0.2)
        &.active
          background: $green
          color: #fff
        .count
          margin-left: .125rem
          font-size: .5rem
    .switch
      padding: .75rem 1.125rem
      line-height: 1.5rem
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      color: rgb(147, 153, 159)
      font-size: 0
      &.on
        .icon-check_circle
          color: $green
      .icon-check_circle
        display: inline-block
        vertical-align: top
        margin-right: .25rem
        font-size: 1.5rem
      .text
        display: inline-block
        vertical-align: top
        font-size: .75rem
  .rating-wrapper
    padding: 0 1.125rem
    .rating-item
      display: flex
      padding: 1.125rem 0
      bottom-border-1px(rgba(7, 17, 27, 0.1))
      .avatar
        flex: 0 0 1.75rem
        width: 1.75rem
        margin-right: .75rem
        img
          border-radius: 50%
      .content
        position: relative
        flex: 1
        .name
          margin-bottom: .25rem
          line-height: .75rem
          font-size: .625rem
          color: rgb(7, 17, 27)
        .star-wrapper
          margin-bottom: .375rem
          font-size: 0
          .star
            display: inline-block
            margin-right: .375rem
            vertical-align: top
          .delivery
            display: inline-block
            vertical-align: top
            line-height: .75rem
            font-size: .625rem
            color: rgb(147, 153, 159)
        .text
          margin-bottom: .5rem
          line-height: 1.125rem
          color: rgb(7, 17, 27)
          font-size: .75rem
        .recommend
          line-height: 1rem
          font-size: 0
          .icon-thumb_up, .icon-thumb_down, .item
            display: inline-block
            margin: 0 .5rem .25rem 0
            font-size: .5625rem
          .icon-thumb_up
            color: $yellow
          .icon-thumb_down
            color: rgb(147, 153, 159)
          .item
            padding: 0 .375rem
            border: 1px solid rgba(7, 17, 27, 0.1)
            border-radius: 1px
            color: rgb(147, 153, 159)
            background: #fff
        .time
          position: absolute
          top: 0
          right: 0
          line-height: .75rem
          font-size: .625rem
          color: rgb(147, 153, 159)
</style>
