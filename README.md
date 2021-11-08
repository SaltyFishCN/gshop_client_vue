# gshop_client_vue

## Project setup

```npm install```

### Compiles and hot-reloads for development

```npm run serve```

### Compiles and minifies for production

```npm run build```

### Lints and fixes files

```npm run lint```

## # 项目描述

[视频地址:bilibili](https://www.bilibili.com/video/BV1Lp411d7w4)

1. 此项目为外卖Web App(SPA)
2. 包括商家、商品、购物车、用户等多个子模块
3. 采用模块化、组件化、工程化的模式开发
4. 主要技术栈
    1. 视频采用vue: vue全家桶 + es6+新语法 + webpack等前端技术
        - vue-router单页面应用
        - axios/vue-resource与后端数据交互
        - vuex 状态管理
        - better-scroll / vue-scroller 页面滑动
        - mini-ui (尝试使用element ui)组件库构建页面
        - vue-lazyload 图片懒加载
5. 问题记录
    - 自建vue代码片段节省vue文件的创建。
    - eslint 换行符报错 "Expected linebreaks to be 'LF' but found 'CRLF'"
    添加新的规则:
    ```"linebreak-style": ["error", "windows"]```
    - 路由设置别名，'/' 增加别名'/msite', 访问'/msite'时路由规则匹配'/'
    - 报错```Stylus Loader has been initialized using an options object that does not match the API schema```。回退stylus-loader版本为3.0.2
