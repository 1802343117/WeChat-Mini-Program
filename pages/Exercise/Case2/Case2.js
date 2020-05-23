// pages/Case2/Case2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isClear: false, 
    Calculate: null,
    result: null
  },

  Show: "",
  result: "",
  Calculation: "",
  count: "",
  count2: "",

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

  resetBtn: function() {
    this.Show = ""
    this.count = ""
    this.Calculation = ""
    this.count1 = ""
    this.result = ""
    this.setData({
      count: this.count,
      Calculation: this.Calculation,
      count1: this.count1,
      result: null
    })
    console.log(this.Show + "\t" + this.count  + "\t" + this.Calculation + "\t" + this.count1 + "\t" + this.result)
  },
  delBtn: function() {},
  numBtn: function(e) {
    console.log(e.currentTarget.dataset.value)
    this.Show = this.Show + e.currentTarget.dataset.value
    let abc = this.validateNumber(e.currentTarget.dataset.value)
    if (abc == "") {
      console.log("不是数字")
    }
    if (this.Calculation != "") {
      this.setData({
        count1: this.Show
      })
      this.count1 = this.Show
      console.log("count1:" + this.count1)
    } else {
      this.setData({
        count: this.Show
      })
      this.count = this.Show
      console.log("count:" + this.count)
    }
  },
  opBtn: function(e) {
    console.log(e.currentTarget.dataset.value)
    let T = e.currentTarget.dataset.value
    
    if (T == "=") {
      if (this.Calculation == "*") {
        this.result = this.count * this.count1
        this.setData({
          result: this.result
        })
      }
      
      if (this.Calculation == "/") {
        this.result = this.count / this.count1
        this.setData({
          result: this.result
        })
      }

      if (this.Calculation == "+") {
        this.result = this.count + this.count1
        this.setData({
          result: this.result
        })
      }

      if (this.Calculation == "-") {
        this.result = this.count - this.count1
        this.setData({
          result: this.result
        })
      }
    } else {
      this.count = this.Show
      this.Calculation = T
      this.Show = ""
      this.setData({
        Calculation: this.Calculation
      })
      console.log(this.Calculation)
    }
  }, 
  dotBtn: function() {},

  validateNumber(val) {
    return val.replace(/\D/g, '')
  },
})