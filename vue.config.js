/*
 * Description:
 * Author:LinJ
 * Date:2021-10-04 00:20:40
 * LastEditors:LinJ
 * LastEditTime:2021-11-09 22:49:07
 */
const path = require('path');

module.exports = {
  // devServer: {
  //   proxy: {
  //     // 转发
  //     // 将发往api的请求转发到本地路径
  //     '/api': {
  //       target: 'http://localhost:8080',
  //       pathRewrite: {
  //         '^/api': '/'
  //       }
  //     }
  //   },
  // },
  chainWebpack: (config) => {
    // 别名设置
    config.resolve.alias
      .set('@', path.join(__dirname, './src/'))
      .set('api', path.join(__dirname, './src/api/'))
      .set('pages', path.join(__dirname, './src/pages/'))
      .set('common', path.join(__dirname, './src/common/'))
      .set('stylus', path.join(__dirname, './src/common/stylus/'))
      .set('components', path.join(__dirname, './src/components/'));
  },
};
