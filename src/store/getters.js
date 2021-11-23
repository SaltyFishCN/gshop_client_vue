/*
 * Description: 基于state的getter计算属性对象
 * Author:LinJ
 * Date:2021-11-10 11:45:50
 * LastEditors:LinJ
 * LastEditTime:2021-11-23 23:44:28
 */
export default {
  // 购物车商品总数
  totalCount(state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count, 0);
  },
  // 购物车商品总价
  totalPrice(state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count * food.price, 0);
  },
  // 满意评价的数量
  positiveSize(state) {
    const { ratings } = state.shopData;
    return ratings.reduce((preTotal, rating) => preTotal + (rating.rateType === 0 ? 1 : 0), 0);
  },
};
