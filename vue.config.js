/*
 * Description:
 * Author:LinJ
 * Date:2021-10-04 00:20:40
 * LastEditors:LinJ
 * LastEditTime:2021-11-06 23:11:20
 */
const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    // 别名设置
    config.resolve.alias
      .set('stylus', path.join(__dirname, './src/common/stylus/'))
      .set('@', path.join(__dirname, './src/'))
      .set('common', path.join(__dirname, './src/common/'))
      .set('pages', path.join(__dirname, './src/pages'));
  },
};
