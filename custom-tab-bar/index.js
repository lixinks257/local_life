// custom-tab-bar/index.js
import {
  storeBindingsBehavior
} from 'mobx-miniprogram-bindings'
import {
  store
} from '../store/store'
Component({
  // 自定义样式时，子组件样式覆盖其他样式
  options: {
    styleIsolation: 'shared',
  },
  behaviors: [storeBindingsBehavior], // 通过storeBindingsBehavior 来实现自动绑定
  storeBindings: {
    store,
    // 指定绑定的数据
    fields: {
      sum: 'sum', // 绑定数据方式1
      activeBarIdx: 'activeTabBarIdx', // 绑定数据方式1
      // numA: () => store.numA, // 绑定数据方式2
      // numB: (store) => store.numB // 绑定数据方式3
    },
    // 指定绑定的方法
    actions: {
      updateActiveTabBarIdx: 'updateActiveTabBarIdx'
    }
  },
  observers: {
    // 动态监听sum去设置list里面的值
    'sum'(val) {
      console.log('sum', val)
      this.setData({
        'list[1].info': val
      })
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    // active: 0,
    list: [{
        "pagePath": "/pages/home/home",
        "text": "首页",
        "iconPath": "/images/tabs/home.png",
        "selectedIconPath": "/images/tabs/home-active.png"
      },
      {
        "pagePath": "/pages/message/message",
        "text": "消息",
        "iconPath": "/images/tabs/message.png",
        "selectedIconPath": "/images/tabs/message-active.png",
        "info": 0
      },
      {
        "pagePath": "/pages/contact/contact",
        "text": "联系我们",
        "iconPath": "/images/tabs/contact.png",
        "selectedIconPath": "/images/tabs/contact-active.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      console.log('onChange', event)
      // event.detail 的值为当前选中项的索引
      // this.setData({
      //   active: event.detail
      // });
      this.updateActiveTabBarIdx(event.detail)
      wx.switchTab({
        url: this.data.list[event.detail].pagePath,
      })
    },
  }
})