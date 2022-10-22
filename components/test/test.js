// components/test/test.js
Component({
  // 组件的配置信息
  options: {
    styleIsolation: "apply-shared" // apply-shared外界样式会影响组件，默认情况下外面样式不影响组件
  },
  // 监听节点
  observers: {
    // 监听多个数据的变化
    'count, msg, obj.a'(val, msg, a) {
      console.log('count变化了', val, msg, a)
    }
  },
  /**
   * 组件的属性列表,用来接收外界传递到组件中的数据
   */
  properties: {
    // msg: {
    //   type: String,
    //   value: ''
    // }
    msg: Number // 简化写法
  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 0,
    obj: {
      a: 1
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeObj() {
      this.setData({
        ['obj.a']: 2
      })
    },
    // 事件处理函数
    addCount() {
      if(this.data.count > this.properties.msg) {
        wx.showToast({
          title: '超过传递过来的值啦！',
          icon: 'none'
        })
        return
      }
      this.setData({
        count: this.data.count + 1
      })
      // 只能修改子组件拿到的值，并展示，但是父组件传递过来的值不会有变化
      this.setData({
        msg: this.properties.msg + 1
      })
      console.log('properties', this.properties)
      this._showCount()
    },
    // 自定义方法使用_开头的方式去定义
    _showCount() {
      wx.showToast({
        title: `count的值为：${this.data.count}`,
        icon: 'none'
      })
    }
  }
})