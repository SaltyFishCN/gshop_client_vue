/*
 * Description: 入口JS
 * Author:LinJ
 * Date:2021-11-06 14:03:12
 * LastEditors:LinJ
 * LastEditTime:2021-11-24 15:27:43
*/

// 引入插件
import Vue from 'vue';
// vue-lazyload 懒加载
import VueLazyload from 'vue-lazyload';
// fastClick 解决移动端300ms延迟问题
import fastClick from 'fastclick';

import App from './App.vue';
import router from './router';
import store from './store';
// 加载过滤器
import './filters/index';
// 加载mockServer
import './mock/mockServer';
// 引入全局样式文件
import './common/css/reset.css';
// 引入加载图片
import loading from './common/imgs/loading.gif';

Vue.config.productionTip = false;
Vue.use(VueLazyload, {
  loading,
});
// 引入fastClick解决300ms延迟问题
fastClick.attach(document.body);

new Vue({
  // 使用vue-router
  router,
  // 使用vuex
  store,
  render: (h) => h(App),
}).$mount('#app');
