/*
 * Description: eslint 配置文件
 * Author:LinJ
 * Date:2021-11-07 00:08:38
 * LastEditors:LinJ
 * LastEditTime:2021-11-07 00:08:38
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
  },
};
