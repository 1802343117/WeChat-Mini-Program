// pages/ExerciseBook/exerciseBook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    BoxList: [
      {
        id: 0,
        name: '内容绑定',
        routing: 'pages/Data-binding/binding'
      },
      {
        id: 1,
        name: '列表渲染',
        routing: 'pages/List-for/listFor'
      },
      {
        id: 2,
        name: '条件渲染',
        routing: 'pages/wx-if/wx-if'
      },
      {
        id: 3,
        name: '模板的使用',
        routing: 'pages/Templat/templat'
      },
      {
        id: 4,
        name: '布局',
        routing: 'pages/Flexbox/flexbox'
      },
      {
        id: 5,
        name: '路由传参',
        routing: 'pages/RoutingRp/Rp'
      },
      {
        id: 6,
        name: '',
        routing: ''
      },
      {
        id: 7,
        name: '',
        routing: ''
      },
      {
        id: 8,
        name: '',
        routing: ''
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
   * 页面跳转,路由传参
   */
  Shopdetail: function(e) {
    let item = e.currentTarget.dataset.item;
    console.log(item)
    wx.navigateTo({
      url: '/' + item.routing,
    })
  }
})