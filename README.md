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
4. 涉及技术栈
     - vue-router单页面应用
     - axios 与后端数据交互
     - vuex 状态管理
     - vue-awesome-swiper 实现swiper
     - better-scroll 优化滚动效果
     - element ui 组件库
     - vue-lazyload 图片懒加载
     - stylus CSS预处理器
     - eslint 代码格式规范，使用规则eslint-config-airbnb
5. 问题记录
    - 自建vue代码片段节省vue文件的创建。
    - eslint 换行符报错 "Expected linebreaks to be 'LF' but found 'CRLF'"
    添加新的规则:
    ```"linebreak-style": ["error", "windows"]```
    - 路由设置别名，'/' 增加别名'/msite', 访问'/msite'时路由规则匹配'/'
    - 报错```Stylus Loader has been initialized using an options object that does not match the API schema```。回退stylus-loader版本为3.0.2
    - 原视频后台接口过期，无法获取后台json数据 => 顺藤摸瓜找到视频中后台源码所用的接口。[地址](https://github.com/bailicangdu/node-elm)
    - 用户注册登录需要后台接口支持，暂时无法完成，故使用promise.resolve直接决议为成功_(:з」∠)_。
    - 根据element-ui 官方文档配置按需加载
6. 思考
    - 登录页面的两种登录方式用动态组件的方式进行拆分会不会更好一点
      - 但是点击提交的时候就需要去读取子组件的数据 => 已实现，感觉可读性增加了
