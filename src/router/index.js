/*
 * Description: 路由配置
 * Author:LinJ
 * Date:2021-11-06 14:00:49
 * LastEditors:LinJ
 * LastEditTime:2021-11-08 20:19:03
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Msite from 'pages/Msite/Msite.vue';
import Order from 'pages/Order/Order.vue';
import Profile from 'pages/Profile/Profile.vue';
import Search from 'pages/Search/Search.vue';
import Login from 'pages/Login/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    // 将首页重定向到/msite
    redirect: '/msite',
    meta: {
      isShowFooter: true,
    },
  },
  {
    path: '/msite',
    name: 'Msite',
    component: Msite,
    meta: {
      isShowFooter: true,
    },
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    meta: {
      isShowFooter: true,
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      isShowFooter: true,
    },
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta: {
      isShowFooter: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      isShowFooter: false,
    },
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
