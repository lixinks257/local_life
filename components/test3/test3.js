// components/test3/test3.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  created() {
    console.log('created', this.data)
  },
  attached() {
    console.log('attached', this.data)
  },
  // 新的定义生命周期的方式,新方式会覆盖旧的方式
  lifetimes: {
    created() {
      console.log('created11', this.data)
    },
    attached() {
      console.log('attached222', this.data)
    }
  },
  // 监听组件所在页面的生命周期
  pageLifetimes: {
    show() {
      console.log('show')
      // 当页面渲染时，重新生成一组随机色
      this._randomColor()
    },
    hide() {
      console.log('hide')
    },
    resize() {
      console.log('resize')
    }
  },

  options: {
    // 纯数据字段,使用正则表达式
    pureDataPattern: /^_/
  },
  /**
   * 组件的初始数据
   */
  data: {
    _rgb: {
      r: 0,
      g: 0,
      b: 0
    },
    fullColor: '0,0,0'
  },
  observers: {
    // 'rgb.r, rgb.g, rgb.b'(r, g, b) {
    //   console.log(r, g, b)
    //   this.setData({
    //     fullColor: `${r},${g},${b}`
    //   })
    // }
    // **通配符
    '_rgb.**'(obj) {
      // obj为一个对象
      // console.log(r, g, b)
      this.setData({
        fullColor: `${obj.r},${obj.g},${obj.b}`
      })
    }
  },


  /**
   * 组件的方法列表
   */
  methods: {
    changeR() {
      this.setData({
        '_rgb.r': this.data._rgb.r + 5
      })
    },
    changeG() {
      this.setData({
        '_rgb.g': this.data._rgb.g + 5
      })
    },
    changeB() {
      this.setData({
        '_rgb.b': this.data._rgb.b + 5
      })
    },
    // 生产随机色
    _randomColor() {
      this.setData({
        _rgb: {
          r: Math.floor((Math.random() * 256)),
          g: Math.floor((Math.random() * 256)),
          b: Math.floor((Math.random() * 256)),
        }
      })
    }
  }
})