Page({
  onShareAppMessage() {
    return {
      title: 'form',
      path: 'page/component/pages/form/form'
    }
  },

  data: {
    pickerHidden: true,
    chosen: ''
  },

  // pickerConfirm(e) {
  //   console.log(e.detail.value)
  //   this.setData({
  //     pickerHidden: true
  //   })
  //   this.setData({
  //     chosen: e.detail.value
  //   })
  // },

  // pickerCancel() {
  //   console.log("1")
  //   this.setData({
  //     pickerHidden: true
  //   })
  // },

  // pickerShow() {
  //   console.log("1")
  //   this.setData({
  //     pickerHidden: false
  //   })
  // },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },

  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  }
})