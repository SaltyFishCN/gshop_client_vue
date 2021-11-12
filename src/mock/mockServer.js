/*
 * Description: mockjs 模拟后台接口
 * Author:LinJ
 * Date:2021-11-10 22:12:12
 * LastEditors:LinJ
 * LastEditTime:2021-11-11 14:48:42
 */
/**
 * Mock.mock( rurl, template )
 * 记录数据模板。当拦截到匹配 rurl 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回
 * Mock.mock( rurl, rtype, template )
 * 记录数据模板。当拦截到匹配 rurl 和 rtype 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回。
 *
 * rurl：表示需要拦截的 URL，可以是 URL 字符串或 URL 正则。例如 /\/domain\/list\.json/、'/domian/list.json'。
 * rtype：表示需要拦截的 Ajax 请求类型。例如 GET、POST、PUT、DELETE 等
 */
import Mock from 'mockjs';
import data from './data.json';

// 返回info的接口
Mock.mock(/\/info\/\d+$/gmi, { code: 0, data: data.info });
// 返回goods的接口
Mock.mock(/\/goods\/\d+$/gmi, { code: 0, data: data.goods });
// 返回ratings的接口
Mock.mock(/\/ratings\/\d+$/gmi, { code: 0, data: data.ratings });
