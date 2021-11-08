/*
 * Description: 路由配置
 * Author:LinJ
 * Date:2021-11-06 14:00:49
 * LastEditors:LinJ
 * LastEditTime:2021-11-07 21:31:36
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Msite from 'pages/Msite/Msite.vue';
import Order from 'pages/Order/Order.vue';
import Profile from 'pages/Profile/Profile.vue';
import Search from 'pages/Search/Search.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    // 将首页重定向到/msite
    redirect: '/msite',
  },
  {
    path: '/msite',
    name: 'Msite',
    component: Msite,
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
];

const router = new VueRouter({
  routes,
  // 切换页面时滚动条重置
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
