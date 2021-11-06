/*
 * Description: 入口JS
 * Author:LinJ
 * Date:2021-11-06 14:03:12
 * LastEditors:LinJ
 * LastEditTime:2021-11-06 22:33:49
*/

// 引入插件
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  // 使用vue-router
  router,
  // 使用vuex
  store,
  render: (h) => h(App),
}).$mount('#app');
