/*
 * Description: 间接更新state，通过mutation
 * Author:LinJ
 * Date:2021-11-10 11:45:27
 * LastEditors:LinJ
 * LastEditTime:2021-11-10 17:19:23
 */

import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  // reqRestaurantInfo,
  // reqMenuList,
  // reqRestaurantRating,
  reqSearchShop,
} from 'api/index';
import {
  RECEIVE_COORDS,
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  // RECEIVE_USER_INFO,
  // RESET_USER_INFO,
  // RECEIVE_SHOP_INFO,
  // RECEIVE_MENU,
  // RECEIVE_RATINGS,
  RECEIVE_SEARCH_SHOPS,
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
    commit(RECEIVE_SEARCH_SHOPS, { searchShops });
  },
};
