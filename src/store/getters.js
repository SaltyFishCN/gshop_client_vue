/*
 * Description: 基于state的getter计算属性对象
 * Author:LinJ
 * Date:2021-11-10 11:45:50
 * LastEditors:LinJ
 * LastEditTime:2021-11-22 22:58:31
 */
export default {
  totalCount(state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count, 0);
  },

  totalPrice(state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count * food.price, 0);
  },
};
