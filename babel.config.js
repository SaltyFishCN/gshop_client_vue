/*
 * Description: babel 配置文件
 * Author:LinJ
 * Date:2021-11-09 01:50:28
 * LastEditors:LinJ
 * LastEditTime:2021-11-09 01:50:28
 */
module.exports = {
  "presets": [
    '@vue/cli-plugin-babel/preset',
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]  
};
