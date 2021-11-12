<!--
 * Description:
 * Author:LinJ
 * Date:2021-11-07 17:28:31
 * LastEditors:LinJ
 * LastEditTime:2021-11-11 00:33:18
-->
<template>
  <div id="app">
    <template v-if="address.name">
      <router-view />
      <!-- 是否显示底部导航，在路由中设定 -->
      <FooterGuide v-show="$route.meta.isShowFooter" />
    </template>
    <div class="loading" v-else>
      <img src="./common/imgs/loading.gif" alt="加载中">
      <p>地址加载中</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import FooterGuide from 'components/FooterGuide/FooterGuide.vue';

export default {
  name: 'App',
  components: {
    FooterGuide,
  },
  computed: {
    ...mapState(['address']),
  },
  methods: {
    // 映射， this.actionType = this.$store.dispatch(actionType)
    // ...mapActions(['getAddress', 'getUserInfo']),
    ...mapActions(['getAddress']),
  },
  mounted() {
    // 当页面挂载的时候就要获取地址信息
    this.getAddress();
    // 还需要获取用户信息，需要后台api
    // this.getUserInfo();
  },
};
</script>

<style lang="stylus" scoped>
#app
  width 100%
  height 100%
  background #f5f5f5
  .loading
    height 100%
    display flex
    flex-direction column
    justify-content center
    align-items: center
</style>
