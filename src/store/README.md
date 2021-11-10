# store vuex状态管理文件夹

首先要明确vuex的整体结构，有哪些state需要通过vuex来做统一管理

- state.js 状态对象
  - latitude: float 纬度 ```navigator.geolocation.getCurrentPosition```
  - longtitude: float 经度
  - address: Object 地址信息 ```reqAddress(geohash:`${latitude},${longitude}`)```
  - categorys: [] 食品分类 ```reqFoodCategorys()```
  - shops: [] 附近商家列表 ```reqShops(longitude, latitude)```
  - useInfo: {} 用户信息

  - shopInfo: {} 餐馆信息 ```reqRestaurantInfo(id)```
  - menu: [] 菜单 ``` reqMenuList(restaurant_id) ```
  - ratings: [] 商家评价列表 ```reqRestaurantRating(id)```
  - searchShops: [] 搜索得到的商家列表 ```reqSearchShop(geohash, keyword)```
- mutations.js 注册mutation, 通过commit直接修改state
- actions.js 通过提交mutation间接修改state
- mutation-type.js mutation类型常量
- getters.js 基于state的getter计算对象
