// components/test5/test5.js

// 引入behaviors
const behaviors = require('../../behaviors/my-behaviors')
Component({
  behaviors: [behaviors],
  /**
   * 组件的属性列表
   */
  properties: {
    count: Number
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // addCount() {
    //   this.setData({
    //     count: this.properties.count + 1
    //   })
    //   // 触发父组件定义的方法sync,这个名称可以自定义,将值传给父组件
    //   this.triggerEvent('sync', this.properties.count)
    // }
  }
})
