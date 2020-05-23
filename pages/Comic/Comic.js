// pages/Comic/Comic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    vertical: false,
    circular: true,
    imgUrl: [
      'https://game.gtimg.cn/images/lol/universe/v1/assets/images/champion/splash/Aatrox_0.jpg',
      'https://game.gtimg.cn/images/lol/universe/v1/assets/images/champion/splash/Ahri_0.jpg',
      'https://game.gtimg.cn/images/lol/universe/v1/assets/images/champion/splash/Akali_0.jpg'
    ],
    comic: [
      {
        id: 0,
        cover: "http://dwz.date/aDtr",
        title: "元尊",
        content: [
          {
            id: 0,
            cover: "http://dwz.date/aDtr",
            title: "元尊",
            chapter: "第***章",
            area: "大陆",
            plot: "热血 | 轻小说 | 奇幻",
            status: "连载中 ...",
            content: [
              {
                id: 0,
                image: "https://img001.1fi4b.cn/images/comic/254/506586/2069d9aee0.jpg!page-800"
              },
              {
                id: 1,
                image: "https://img001.1fi4b.cn/images/comic/254/506586/204830ce92.jpg!page-800"
              },
              {
                id: 2,
                image: "https://img001.1fi4b.cn/images/comic/254/506586/20f13208c0.jpg!page-800"
              },
              {
                id: 3,
                image: "https://img001.1fi4b.cn/images/comic/254/506586/20aa500bc1.jpg!page-800"
              },
              {
                id: 4,
                image: "https://img001.1fi4b.cn/images/comic/254/506586/20a15c3259.jpg!page-800"
              },
              {
                id: 5,
                image: "https://img001.1fi4b.cn/images/comic/254/506586/20f77b6e41.jpg!page-800"
              },
              {
                id: 6,
                image: "https://img001.1fi4b.cn/images/comic/254/506586/2071b4449d.jpg!page-800"
              },
              {
                id: 7,
                image: "https://img001.1fi4b.cn/images/comic/254/506586/205985e65d.jpg!page-800"
              },
              {
                id: 8,
                image: "https://img001.1fi4b.cn/images/comic/254/506586/20c423e9c9.jpg!page-800"
              },
              {
                id: 9,
                image: "https://img001.1fi4b.cn/images/comic/254/506586/20c8bba2e6.jpg!page-800"
              }
            ]
          }
        ],
        area: "大陆",
        plot: "热血 | 轻小说 | 奇幻",
        status: "连载中 ..."
      },
      {
        id: 1,
        cover: "http://image.yqmh.com/mh/25933.jpg-300x400.webp",
        title: "斗罗大陆",
        content: [],
        area: "大陆",
        plot: "热血 | 轻小说 | 奇幻",
        status: "连载中 ..."
      },
      {
        id: 2,
        cover: "http://i.wuqimh.com/Uploads/bcover/2013/3/151540589_h.jpg",
        title: "一拳超人",
        content: [],
        area: "大陆",
        plot: "热血 | 轻小说 | 奇幻",
        status: "连载中 ..."
      },
      {
        id: 3,
        cover: "http://www.gugu5.com/upload2/562/2017/09-13/20170913002600_8281_small.jpg",
        title: "一人之下",
        content: [],
        area: "大陆",
        plot: "热血 | 轻小说 | 奇幻",
        status: "连载中 ..."
      },
      {
        id: 4,
        cover: "http://i.zhongwei100.com/mh/cover/2020/01/06/274b5054a4.jpg",
        title: "狐妖小红娘",
        content: [],
        area: "大陆",
        plot: "热血 | 轻小说 | 奇幻",
        status: "连载中 ..."
      },
      {
        id: 5,
        cover: "http://www.7edm.com/upload2/11528/2019/05-29/20190529003125_1342tkkmlyrg_small.png",
        title: "斗破苍穹",
        content: [],
        area: "大陆",
        plot: "热血 | 轻小说 | 奇幻",
        status: "连载中 ..."
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

  Shopdetail: function(e) {
    console.log(e.currentTarget.dataset.item)
    let comic =  e.currentTarget.dataset.item;
    wx.navigateTo({
      url: '/pages/Comic/Comic-Watch/Comic-Watch?item=' + JSON.stringify(comic),
    })
  }
})