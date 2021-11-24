/*
 * Description: 路由配置
 * Author:LinJ
 * Date:2021-11-06 14:00:49
 * LastEditors:LinJ
 * LastEditTime:2021-11-24 15:00:54
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
// import Msite from 'pages/Msite/Msite.vue';
// import Order from 'pages/Order/Order.vue';
// import Profile from 'pages/Profile/Profile.vue';
// import Search from 'pages/Search/Search.vue';
// import Login from 'pages/Login/Login.vue';
import Shop from 'pages/Shop/Shop.vue';

Vue.use(VueRouter);
const Msite = () => import('pages/Msite/Msite.vue');
const Order = () => import('pages/Order/Order.vue');
const Profile = () => import('pages/Profile/Profile.vue');
const Search = () => import('pages/Search/Search.vue');
const Login = () => import('pages/Login/Login.vue');
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
  {
    path: '/shop/:id',
    name: 'Shop',
    component: Shop,
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
