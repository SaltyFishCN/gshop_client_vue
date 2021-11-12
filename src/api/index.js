/*
 * Description: 各模块请求接口封装
 * Author:LinJ
 * Date:2021-11-09 21:40:42
 * LastEditors:LinJ
 * LastEditTime:2021-11-11 00:28:54
 */

import ajax from './ajax';
// const BASE_URL = 'http://localhost:8080';
const BASE_URL = 'https://elm.cangdu.org';

// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${BASE_URL}/v2/pois/${geohash}`);
// 2、获取食品分类列表
export const reqFoodCategorys = () => ajax(`${BASE_URL}/v2/index_entry`);
// 3、根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax(`${BASE_URL}/shopping/restaurants`, { longitude, latitude });
// 4、根据经纬度和关键字搜索商铺列表, 这个接口时灵时不灵
export const reqSearchShop = (geohash, keyword) => ajax(`${BASE_URL}/v4/restaurants`, { geohash, keyword });
// 5. 根据餐馆id获取餐馆信息
export const reqRestaurantInfo = (id) => ajax(`${BASE_URL}/shopping/restaurant/${id}`);
// 6. 根据餐馆id获取餐馆评价信息
export const reqRestaurantRating = (id) => ajax(`${BASE_URL}/ugc/v2/restaurants/${id}/ratings`);
// 7. 根据餐馆id获取餐馆食品列表
export const reqMenuList = (restaurant_id) => ajax(`${BASE_URL}/shopping/v2/menu`, { restaurant_id });

/** mockjs 模拟接口 */
// 8. 获取商家信息
export const reqRestaurantInfo_mock = (id) => ajax(`/info/${id}`);
// 9. 获取商家评价数组
export const reqRestaurantRating_mock = (id) => ajax(`/ratings/${id}`);
// 10. 获取商家商品数组
export const reqMenuList_mock = (id) => ajax(`/goods/${id}`);
