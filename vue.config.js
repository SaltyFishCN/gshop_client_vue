/*
 * Description:
 * Author:LinJ
 * Date:2021-10-04 00:20:40
 * LastEditors:LinJ
 * LastEditTime:2021-11-07 23:01:54
 */
const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    // 别名设置
    config.resolve.alias
      .set('@', path.join(__dirname, './src/'))
      .set('pages', path.join(__dirname, './src/pages'))
      .set('common', path.join(__dirname, './src/common/'))
      .set('stylus', path.join(__dirname, './src/common/stylus/'))
      .set('components', path.join(__dirname, './src/components/'));
  },
};
