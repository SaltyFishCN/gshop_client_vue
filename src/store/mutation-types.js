/*
 * Description: 包含N个mutation的类型名称常量
 * Author:LinJ
 * Date:2021-11-10 11:53:47
 * LastEditors:LinJ
 * LastEditTime:2021-11-22 02:01:52
 */
export const RECEIVE_COORDS = 'receive_coords'; // 获取当前定位经纬度信息
export const RECEIVE_ADDRESS = 'receive_address'; // 接收地址
export const RECEIVE_CATEGORYS = 'receive_categorys'; // 接收食品分类
export const RECEIVE_SHOPS = 'receive_shops'; // 接收商家列表
export const RECEIVE_USER_INFO = 'receive_user_info'; // 接收用户信息
export const RESET_USER_INFO = 'reset_user_info'; // 重置用户信息
export const RECEIVE_SHOP_DATA = 'reveive_shop_date'; // 获取到的商家数据，包含菜单，评价，详细信息等

export const RECEIVE_SEARCH_SHOPS = 'receive_search_shops'; // 接收搜索的商家数组
export const INCREMENT_FOOD_COUNT = 'increment_food_count'; // 增加food中的count
export const DECREMENT_FOOD_COUNT = 'decrement_food_count'; // 减少food中的count
export const CLEAR_CART = 'clear_cart'; // 清空购物车
// export const RECEIVE_MENU = 'receive_menu'; // 接收商品数组
// export const RECEIVE_RATINGS = 'receive_ratings'; // 接收商家评价数组
// export const RECEIVE_SHOP_INFO = 'receive_shop_info'; // 接收商家信息
