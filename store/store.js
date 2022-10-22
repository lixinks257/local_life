// 创建store实例对象
import {
  action,
  observable
}
from "mobx-miniprogram"

export const store = observable({
  // 存储数据
  numA: 1,
  numB: 2,
  activeTabBarIdx: 0,
  // 计算属性
  get sum() {
    return this.numA + this.numB
  },
  // action函数，专门来修改store中数据的值
  updateNum1: action(function (step) {
    this.numA += step
  }),
  updateNum2: action(function (step) {
    this.numB += step
  }),
  // 更新tabBar下标
  updateActiveTabBarIdx: action(function (idx) {
    this.activeTabBarIdx = idx
  })
})