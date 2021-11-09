# store vuex状态管理文件夹

首先要明确需要存放的state数据有哪些

- state
  - latitude: float 纬度 ```navigator.geolocation.getCurrentPosition```
  - longtitude: float 经度
  - address: Object 地址信息 ```reqAddress(geohash:`${latitude},${longitude}`)```
  - categorys: [] 食品分类 ```reqFoodCategorys()```
  - shops: [] 附近商家列表 ```reqShops(longitude, latitude)```
  - useInfo: {} 用户信息
  - shopInfo: {} 餐馆信息 ```reqRestaurantInfo(id)```
  - menu: [] 菜单 ``` reqMenuList(restaurant_id) ```
  - ratings: [] 商家评价列表 ```reqRestaurantRating(id)```
