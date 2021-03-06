/*
 * Description: 间接更新state，通过mutation
 * Author:LinJ
 * Date:2021-11-10 11:45:27
 * LastEditors:LinJ
 * LastEditTime:2021-11-24 01:55:08
 */

import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqSearchShop,
  // reqRestaurantInfo,
  // reqMenuList,
  // reqRestaurantRating,
  // reqRestaurantInfo_mock,
  // reqRestaurantRating_mock,
  // reqMenuList_mock,
} from 'api/index';
import {
  RECEIVE_COORDS,
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_SEARCH_SHOPS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_SEARCH_SHOPS,
  // RECEIVE_SHOP_INFO,
  // RECEIVE_MENU,
  // RECEIVE_RATINGS,
} from './mutation-types';

export default {
  // 异步获取经纬度信息及地址信息
  async getAddress({ commit }) {
    // 发送经纬度请求
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { coords: { latitude, longitude } } = position;
      const geohash = `${latitude},${longitude}`;
      // 提交一个commit
      commit(RECEIVE_COORDS, { coords: { latitude, longitude } });
      // 发送地址信息请求
      const address = await reqAddress(geohash);
      // 提交一个commit修改vuex中的地址信息
      commit(RECEIVE_ADDRESS, { address });
    }, () => {}, { enableHighAccuracy: false });
  },
  // 异步获取分类列表
  async getCategorys({ commit }) {
    const categorys = await reqFoodCategorys();
    commit(RECEIVE_CATEGORYS, { categorys });
  },
  // 异步获取商家列表
  async getShops({ commit, state }) {
    const { latitude, longitude } = state;
    const shops = await reqShops(longitude, latitude);
    commit(RECEIVE_SHOPS, { shops });
  },
  // 搜索商家列表
  async getSearchShops({ commit, state }, keyword) {
    const { geohash } = state.address;
    const searchShops = await reqSearchShop(geohash, keyword);
    // 将搜索结果写入state
    commit(RECEIVE_SEARCH_SHOPS, { searchShops });
  },
  // 清空搜索列表
  clearSearchShops({ commit }) {
    commit(CLEAR_SEARCH_SHOPS);
  },
  // 更新商品数量
  updateFoodCount({ commit }, { isAdd, food }) {
    if (isAdd) {
      // 增加
      commit(INCREMENT_FOOD_COUNT, { food });
    } else {
      // 减少
      commit(DECREMENT_FOOD_COUNT, { food });
    }
  },
  /*
  // 异步获取商家信息
  async getShopInfo({ commit }, id) {
    const res = await reqRestaurantInfo_mock(id);
    if (res.code === 0) {
      const shopInfo = res.data;
      commit(RECEIVE_SHOP_INFO, { shopInfo });
    }
  },
  // 异步获取商家菜单
  async getShopMenu({ commit }, id) {
    const res = await reqMenuList_mock(id);
    if (res.code === 0) {
      const menu = res.data;
      commit(RECEIVE_MENU, { menu });
    }
  },
  // 异步获取商家评价
  async getShopRating({ commit }, id) {
    const res = await reqRestaurantRating_mock(id);
    if (res.code === 0) {
      const ratings = res.data;
      commit(RECEIVE_RATINGS, { ratings });
    }
  },
  */
  // 记录用户信息
  saveUserInfo({ commit }, userInfo) {
    commit(RECEIVE_USER_INFO, { userInfo });
  },
  // 向后台申请用预留的用户信息
  // getUserInfo({ commit }) {
  // userInfo = await 后台接口，返回预留的登录信息
  // 前台将用户信息存到vuex中
  // commit(RECEIVE_USER_INFO, { userInfo });
  // },
  logout({ commit }) {
    // 这里需要一个后台api接口，通知退出登录
    // 它应该是一个异步的，当后端返回登出结果时，vuex对用户数据进行清空
    commit(RESET_USER_INFO);
  },
};
