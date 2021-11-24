/*
 * Description: 入口JS
 * Author:LinJ
 * Date:2021-11-06 14:03:12
 * LastEditors:LinJ
 * LastEditTime:2021-11-24 00:56:12
*/

// 引入插件
import Vue from 'vue';
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

Vue.config.productionTip = false;
// 引入fastClick解决300ms延迟问题
fastClick.attach(document.body);

new Vue({
  // 使用vue-router
  router,
  // 使用vuex
  store,
  render: (h) => h(App),
}).$mount('#app');
