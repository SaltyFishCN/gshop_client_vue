/*
 * Description: ajax 接口请求文件
 * Author:LinJ
 * Date:2021-11-09 21:29:53
 * LastEditors:LinJ
 * LastEditTime:2021-11-09 23:56:18
 */
import axios from 'axios';

export default function ajax(url, data = {}, type = 'GET') {
  return new Promise((resolve, reject) => {
    // 执行异步ajax请求
    let promise;
    let tempUrl = url;
    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = ''; // 数据拼接字符串
      dataStr = Object.entries(data).map((item) => item.join('=')).join('&');
      if (dataStr !== '') {
        tempUrl += `?${dataStr}`;
      }
      // 发送get请求
      promise = axios.get(tempUrl);
    } else {
      // 发送post请求
      promise = axios.post(tempUrl, data);
    }
    promise.then((response) => {
      // 成功了调用resolve()
      resolve(response.data);
    }).catch((error) => {
      // 失败了调用reject()
      reject(error);
    });
  });
}
