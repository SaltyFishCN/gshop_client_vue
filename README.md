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
     - mock.js 在后台接口失效的情况下，模拟后台数据
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
    - 用户注册登录需要后台接口支持，暂时无法完成，故使用promise.resolve直接决议为成功，用户信息是假的_(:з」∠)_。
    - 根据element-ui 官方文档配置按需加载
    - fastclick插件报错 Unable to preventDefault inside passive event listener due to target being treated as passive. 不影响代码实现，但是不好看。 => 在reset.css中应用 CSS 属性 touch-action: none; 这样任何触摸事件都不会产生默认行为，但是 touch 事件照样触发。[原文链接](https://segmentfault.com/a/1190000008512184)
    - 尝试修改element-ui的 messageBox样式，无法在scoped style下修改。=> 另外添加一个不带scoped的style，在其中进行修改
    - 新问题，由于设置了```touch-action: none;```，fastclick虽然不报错了，但是导致移动端触摸滚动失效，得不偿失。查阅MDN中关于touce-action的相关资料后发现可以设置为 manipulation(浏览器只允许进行滚动和持续缩放操作)，而且兼容性尚可。
6. 思考
    - vue是基于数据的框架，显示上的bug都是基于数据上的问题导致的。
    - 登录页面的两种登录方式用动态组件的方式进行拆分会不会更好一点
      - 但是点击提交的时候就需要去读取子组件的数据 => 已实现，感觉可读性增加了
    - 在没有明确好vuex的情况下敲代码比较没有思路，应该先规定好有哪些数据需要通过vuex来进行统一管理再开始编码会比较顺利。 编码前的设计阶段还是比较重要的。
    - 在search/msite点击商家=> 通过id跳转到商家组件，此时向后台申请商家信息的相应数据并存入vuex中
    - 商家页面的组件切换，虽然视频采用路由切换，但个人不希望url地址发生变化，而且只有1级跳转，所以采用动态组件的方式实现。
7. 未完成
    - 个人中心页面
    - 登录登出需要后台接口支持，现在只是模拟
    - 自动登录(保持登录状态) 后台依赖session/cookie保留登录状态，前台app加载时申请获取登录信息
    - 购物车保存，现有状态为每次进入商家页面购物车都会重置。 个人认为数据的保留应该交由后台来做。
8. 优化
    - 利用import方法将路由组件进行懒加载处理
    - 尝试使用异步组件```'my-component': () => import('./my-async-component')```在需要的时候再引入
    - 使用vue-lazyload实现图片懒加载
