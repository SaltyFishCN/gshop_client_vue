/*
 * Description: eslint 配置文件
 * Author:LinJ
 * Date:2021-11-07 00:08:38
 * LastEditors:LinJ
 * LastEditTime:2021-11-24 01:10:51
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 换行规则
    'linebreak-style': ['error', 'windows'],
    // 忽视驼峰命名
    camelcase: 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    // 最大长度
    'max-len': ['error', {'code': 120}],
  },
};
