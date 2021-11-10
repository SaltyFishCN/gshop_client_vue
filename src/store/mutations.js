/*
 * Description: 直接更新state的多个方法的对象
 * Author:LinJ
 * Date:2021-11-10 11:41:01
 * LastEditors:LinJ
 * LastEditTime:2021-11-10 21:11:36
 */

import {
  RECEIVE_COORDS,
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_SHOP_INFO,
  RECEIVE_MENU,
  RECEIVE_RATINGS,
  RECEIVE_SEARCH_SHOPS,
} from './mutation-types';
// 通过action调用时传递的是打包后的数据
export default {
  [RECEIVE_COORDS](state, { coords: { latitude, longitude } }) {
    state.latitude = latitude;
    state.longitude = longitude;
  },
  [RECEIVE_ADDRESS](state, { address }) { state.address = address; },
  [RECEIVE_CATEGORYS](state, { categorys }) { state.categorys = categorys; },
  [RECEIVE_SHOPS](state, { shops }) { state.shops = shops; },
  [RECEIVE_USER_INFO](state, { userInfo }) { state.userInfo = userInfo; },
  [RESET_USER_INFO](state) { state.userInfo = {}; },
  [RECEIVE_SHOP_INFO](state, { shopInfo }) { state.shopInfo = shopInfo; },
  [RECEIVE_MENU](state, { menu }) { state.menu = menu; },
  [RECEIVE_RATINGS](state, { ratings }) { state.ratings = ratings; },
  [RECEIVE_SEARCH_SHOPS](state, { searchShops }) { state.searchShops = searchShops; },
};
