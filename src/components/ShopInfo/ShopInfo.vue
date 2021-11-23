<!--
 * Description:
 * Author:LinJ
 * Date:2021-11-10 22:58:22
 * LastEditors:LinJ
 * LastEditTime:2021-11-23 22:54:34
-->
<template>
<div class="shop-info">
    <div class="info-content">
      <section class="section">
        <h3 class="section-title">配送信息</h3>
        <div class="delivery">
          <div>
            <span class="delivery-icon">{{info.description}}</span>
            <span>由商家配送提供配送，约{{info.deliveryTime}}分钟送达，距离{{info.distance}}</span>
          </div>
          <div class="delivery-money">配送费￥{{info.deliveryPrice}}</div>
        </div>
      </section>

      <div class="split"></div>

      <section class="section">
        <h3 class="section-title">活动与服务</h3>
        <div class="activity">
          <div class="activity-item" v-for="(support, index) in info.supports" :key="index"
              :class="supportClasses[support.type]">
            <span class="content-tag">
              <span class="mini-tag">{{support.name}}</span>
            </span>
            <span class="activity-content">{{support.content}}</span>
          </div>
        </div>
      </section>

      <div class="split"></div>

      <section class="section">
        <h3 class="section-title">商家实景</h3>
        <div class="pic-wrapper">
          <ul class="pic-list" ref="picsUl">
            <li class="pic-item" v-for="(pic, index) in info.pics" :key="index">
              <img width="120" height="90" :src="pic"/>
            </li>
          </ul>
        </div>
      </section>

      <div class="split"></div>

      <section class="section">
        <h3 class="section-title">商家信息</h3>
        <ul class="detail">
          <li><span class="bold">品类</span> <span>{{info.category}}</span></li>
          <li><span class="bold">商家电话</span> <span>{{info.phone}}</span></li>
          <li><span class="bold">地址</span> <span>{{info.address}}</span></li>
          <li><span class="bold">营业时间</span> <span>{{info.workTime}}</span></li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BScroll from 'better-scroll';

export default {
  name: 'ShopInfo',
  // 组件状态值
  data() {
    return {
      supportClasses: ['activity-green', 'activity-red', 'activity-orange'],
    };
  },
  computed: {
    ...mapState(['shopData']),
    info() {
      return this.shopData.info;
    },
  },
  // 组件方法
  methods: {
    _initScroll() {
      this.$infoScroll = new BScroll('.shop-info');
      // 动态计算ul的宽度
      const ul = this.$refs.picsUl;
      const liWidth = 120;
      const space = 6;
      const count = this.info.pics.length;
      ul.style.width = `${(liWidth + space) * count - space}px`;

      this.$infoImgScroll = new BScroll('.pic-wrapper', {
        scrollX: true, // 水平滑动
      });
    },
  },
  // 生命周期钩子，没用的可以删除
  mounted() {
    // init better-scroll
    this._initScroll();
  },
  updated() {
    this.$infoScroll.refresh();
    this.$infoImgScroll.refresh();
  },
};
</script>

<style lang="stylus" scoped>
@import "~stylus/mixins.styl"

.shop-info
  position: absolute
  top: 12.1875rem
  bottom: 0
  left: 0
  width: 100%
  background: #fff;
  overflow: hidden
  .section
    padding 1rem .875rem .875rem
    font-size 1rem
    background-color #fff
    color #666
    border-bottom 1px solid #eee
    position relative
    .section-title
      color #000
      font-weight 700
      line-height 1rem
      > .iconfont
        float right
        color #ccc
    .delivery
      margin-top 1rem
      font-size .8125rem
      line-height 1.125rem
      .delivery-icon
        width 3.4375rem
        font-size .6875rem
        margin-right .625rem
        display inline-block
        text-align center
        color #fff
        background-color #0097ff
        padding .0625rem 0
        border-radius 4px
      .delivery-money
        margin-top .3125rem

    .activity
      margin-top 1rem
      .activity-item
        margin-bottom .75rem
        display flex
        font-size .8125rem
        align-items center
        &.activity-green
          .content-tag
            background-color rgb(112, 188, 70)
        &.activity-red
          .content-tag
            background-color rgb(240, 115, 115)
        &.activity-orange
          .content-tag
            background-color: rgb(241, 136, 79)
        .content-tag
          display inline-block
          border-radius 2px
          width 2.25rem
          height: 1.125rem
          margin-right .625rem
          color #fff
          font-style normal
          position relative
          .mini-tag
            position absolute
            left 0
            top 0
            right -100%
            bottom -100%
            font-size 1.5rem
            transform scale(.5)
            transform-origin 0 0
            display flex
            align-items center
            justify-content center
    .pic-wrapper
      width: 100%
      overflow: hidden
      white-space: nowrap
      margin-top 1rem
      .pic-list
        font-size: 0
        .pic-item
          display: inline-block
          margin-right: .375rem
          width: 7.5rem
          height: 5.625rem
          &:last-child
            margin: 0
    .detail
      margin-bottom -1rem
      > li
        display flex
        justify-content space-between
        align-items center
        margin-right --0.625rem
        padding 1rem .75rem 1rem 0
        line-height 1rem
        bottom-border-1px(#ddd)
        font-size .8125rem
        > .bold
          font-weight 700
          color #333
        &:last-child
          border-none()
    .split
      width: 100%
      height: 1rem
      border-top: 1px solid rgba(7, 17, 27, 0.1)
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      background: #f3f5f7
</style>
