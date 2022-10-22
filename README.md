# local_life(本地生活)

## 功能模块
1. 首页
2. 详情
3. 自定义tabBar


## 前端技术点

1. 状态存储:mobx（mobx-miniprogram
+mobx-miniprogram-bindings
）进行全局数据共享

2. ui库：vant Weapp(实现自定义tabBar，和部分页面UI样式)

3. promise化：miniprogram-api-promise

4. 使用subPackages分包，将tabBar主包和分包分开管理，提高小程序加载速度

5. 分包预下载：preloadRule，提升分包响应速度

6. 使用components模块，管理部分公共组件（下拉加载loading等）

7. 代码规范和校验：eslint+prettier

8. 组件中使用behaviors,slot实现组件的代码复用和自定义填充

9. css:flex+css+css3
