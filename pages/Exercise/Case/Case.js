const app = getApp()
Page({
  data: {
    value: null,
    value1: null,
    result: false,
    ins: null,
    ins1: null
  },
  handleInput(e) {
    let value = this.validateNumber(e.detail.value)
    console.log("value:" + value)
    this.setData({
      value: value,
      result: false
    })
  },
  handleInput1(e) {
    let value1 = this.validateNumber(e.detail.value)
    console.log("value1:" + value1)
    this.setData({
      value1: value1,
      result: false
    })
  },
  validateNumber(val) {
    return val.replace(/\D/g, '')
  },
  showDialog: function() {
    this.setData({
      result: true
    })
  },
})