// 创建Behavior
module.exports = Behavior({
  data: {
    name: 'behaviors'
  },
  // properties: {
  //   count: Number
  // },
  methods: {
    addCount() {
      this.setData({
        count: this.properties.count + 1
      })
      // 触发父组件定义的方法sync,这个名称可以自定义,将值传给父组件
      this.triggerEvent('sync', this.properties.count)
    }
  },
})