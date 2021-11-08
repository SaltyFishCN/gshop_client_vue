<!--
 * Description:
 * Author:LinJ
 * Date:2021-11-07 17:28:31
 * LastEditors:LinJ
 * LastEditTime:2021-11-08 20:23:46
-->
<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.isShowFooter" />
  </div>
</template>

<script>
import FooterGuide from 'components/FooterGuide/FooterGuide.vue';

export default {
  name: 'App',
  components: {
    FooterGuide,
  },
};
</script>

<style lang="stylus" scoped>
#app
  width 100%
  height 100%
  background #f5f5f5
</style>
