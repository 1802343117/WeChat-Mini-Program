// pages/requestAPI/requestAPI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var thar = this
    // wx.request({
    //   url: 'https://yz.lol.qq.com/v1/zh_cn/champion-browse/index.json',
    //   success: function(res) {
    //     console.log(res.data.champions[0])
    //     thar.setData({
    //       url: res.data.champions[0].image.uri
    //     })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  },

  /**
   * 求情API接口
   */
  send: function() {
    var thar = this
    wx.request({
      url: 'https://yz.lol.qq.com/v1/zh_cn/champion-browse/index.json',
      method: 'GET',
      data: {
        id: '',
        name: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data.champions[0])
        console.log(res.data.champions[0].image.uri)
        thar.setData({
          url: res.data.champions[0].image.uri
        })
      }
    })
  }
})