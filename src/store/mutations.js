/*
 * Description: 直接更新state的多个方法的对象
 * Author:LinJ
 * Date:2021-11-10 11:41:01
 * LastEditors:LinJ
 * LastEditTime:2021-11-22 02:18:59
 */
import Vue from 'vue';
import {
  RECEIVE_COORDS,
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RECEIVE_SHOP_DATA,
  RESET_USER_INFO,
  RECEIVE_SEARCH_SHOPS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  // RECEIVE_SHOP_INFO,
  // RECEIVE_MENU,
  // RECEIVE_RATINGS,
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
  [RECEIVE_SHOP_DATA](state, { id, shopData }) { state.shopData = { id, ...shopData }; },
  [RECEIVE_SEARCH_SHOPS](state, { searchShops }) { state.searchShops = searchShops; },
  [INCREMENT_FOOD_COUNT](state, { id, food }) {
    // 先根据id找到商家, 没有就新建一个
    if (!state.cartFoods[id]) {
      state.cartFoods[id] = [];
    }
    // 在对应的商家购物篮中找对应的商品，没有则表示是新点击的商品
    const findIndex = state.cartFoods[id].findIndex((cardfood) => cardfood.name === food.name);
    if (findIndex === -1) {
      // 新增菜品
      Vue.set(food, 'count', 1); // 让新增的属性也有数据绑定, 触发响应式更新
      // 将food添加到cartFoods中
      state.cartFoods[id].push(food);
    } else {
      state.cartFoods[id][findIndex].count += 1;
    }
  },
  [DECREMENT_FOOD_COUNT](state, { id, food }) {
    // 先根据id找到对应商家，再根据food.name找到商家下对应的菜品
    const findIndex = state.cartFoods[id].findIndex((cardfood) => cardfood.name === food.name);
    if (findIndex !== -1) {
      state.cartFoods[id][findIndex].count -= 1;
      if (state.cartFoods[id][findIndex].count === 0) {
        state.cartFoods[id].splice(findIndex, 1);
      }
    }
  },
  [CLEAR_CART](state, { id }) {
    delete state.cartFoods[id];
  },
  // [RECEIVE_SHOP_INFO](state, { shopInfo }) { state.shopInfo = shopInfo; },
  // [RECEIVE_MENU](state, { menu }) { state.menu = menu; },
  // [RECEIVE_RATINGS](state, { ratings }) { state.ratings = ratings; },
};
