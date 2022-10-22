// components/test6/test6.js
// store连接组件的桥梁
import {
  storeBindingsBehavior
} from 'mobx-miniprogram-bindings'
import {
  store
} from '../../store/store'
Component({
  behaviors: [storeBindingsBehavior], // 通过storeBindingsBehavior 来实现自动绑定
  storeBindings: {
    store,
    // 指定绑定的数据
    fields: {
      sum: 'sum', // 绑定数据方式1
      numA: () => store.numA, // 绑定数据方式2
      numB: (store) => store.numB // 绑定数据方式3
    },
    // 指定绑定的方法
    actions: {
      updateNum1: 'updateNum1'
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    btnHandler(e) {
      console.log(e.currentTarget.dataset.step)
      this.updateNum1(e.currentTarget.dataset.step)
    }
  }
})