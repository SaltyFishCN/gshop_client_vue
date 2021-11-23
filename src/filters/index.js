/*
 * Description: 过滤器
 * Author:LinJ
 * Date:2021-11-24 00:20:34
 * LastEditors:LinJ
 * LastEditTime:2021-11-24 00:26:42
 */
import Vue from 'vue';

// 转换日期格式 Unix 时间戳 => YYYY-MM-DD HH:mm:ss
Vue.filter('date-format', (value) => {
  const date = new Date(value);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const formatNumber = (n) => {
    n = n.toString();
    // 个位数据转化为'0n'
    return n[1] ? n : `0${n}`;
  };
  return `${[year, month, day].map(formatNumber).join('-')} ${[hour, minute, second].map(formatNumber).join(':')}`;
});
