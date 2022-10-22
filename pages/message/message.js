// pages/message/message.js
import { createStoreBindings} from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: 3,
    count: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['numA', 'numB','sum'],
    })
    
  },
  // 自定义事件回调函数
  syncCount(e) {
    console.log('syncCount', e)
    this.setData({
      count: e.detail
    })
  },
  getChild() {
    // 获取子组件的实例对象
    // let child = this.selectComponent('.com1')
    let child = this.selectComponent('#a1')
    console.log(child)
    // 修改子组件的数据
    child.setData({
      count: child.properties.count + 1
    })
    // child.addCount()
  },
  changeMsg() {
    this.setData({
      msg: this.data.msg + 1
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  
  // promise化请求
  async getData() {
    const {data: res} = await wx.p.request({
      url: 'https://www.escook.cn/api/get',
      method: 'GET',
      data: {
        name: 'zs',
        age: 20
      }
    })
    console.log('res', res)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.storeBindings.destroyStoreBindings()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})