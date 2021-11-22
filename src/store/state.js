/*
 * Description: state事件对象
 * Author:LinJ
 * Date:2021-11-10 11:40:08
 * LastEditors:LinJ
 * LastEditTime:2021-11-22 00:45:51
 */

export default {
  latitude: 0, // 纬度
  longitude: 0, // 经度
  address: {}, // 地址信息
  categorys: [], // 食品分类
  shops: [], // 附近商家列表
  userInfo: {}, // 用户信息
  searchShops: [], // 搜索得到的商家列表
  shopData: {}, // 商家数据
  cartFoods: {}, // 购物车中食物的列表
  // 因为采用动态组件的方式，可以直接传递数据，以下state不做使用，mutation-type mutations actions 中注释对应内容
  // shopInfo: {}, // 餐馆信息
  // menu: [], // 菜单
  // ratings: [], // 商家评价列表
};
