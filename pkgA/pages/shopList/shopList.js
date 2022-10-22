// pages/shopList/shopList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query: {},
    list: [],
    page: 1,
    pageSize: 10,
    total: 0,
    loadingMore: false,
    isLoading: false // 节流阀：请求完成后，才能再次请求
  },

  getList(cb) {
    this.setData({
      isLoading: true
    })
    wx.showLoading({
      title: '数据加载中...',
    })
    wx.request({
      url: `https://www.escook.cn/categories/${this.data.query.id}/shops`,
      method: 'GET',
      data: {
        _page: this.data.page,
        _limit: this.data.pageSize
      },
      success: (res) => {
        console.log('res', res)
        this.setData({
          list: [...this.data.list, ...res.data],
          total: res.header['X-Total-Count'] - 0 // 将字符串数字转化为整数
        })
        console.log('data', this.data)
      },
      complete: () => {
        wx.hideLoading()
        this.setData({
          isLoading: false
        })
        this.setData({
          loadingMore: false
        })
        cb && cb()
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 获取页面传递参数
    this.setData({
      query: options
    })
    this.getList()
    console.log('options', options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // 动态修改标题
    wx.setNavigationBarTitle({
      title: this.data.query.name
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.setData({
      list: [],
      page: 1,
      total: 0
    })
    // 下拉刷新，关闭下拉刷新的弹窗
    this.getList(() => {
      wx.stopPullDownRefresh()
    })

    console.log('下拉刷新了')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('onReachBottom')
    if (this.data.isLoading) return

    // 页码值*每页显示条数>=总数据条数 ---判断是否还有下一页数据
    if (this.data.page * this.data.pageSize >= this.data.total) {
      this.setData({
        loadingMore: false
      })
      wx.showToast({
        title: '数据加载完毕!',
        icon: 'none' // 不显示icon
      })
      return
    }
    this.setData({
      loadingMore: true
    })
    this.setData({
      page: this.data.page + 1
    })
    this.getList()
    console.log('上拉加载了')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})