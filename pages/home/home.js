const app = getApp();

Page({
  data: {
    imgUrl:{},
    motto:{},
  },

  onLoad: function () {
    this.mainDisplay();
    this.getMotto();
  },

  onShow: function () {
    
  },

  mainDisplay: function (data) {
    wx.request({
      header: {
        "content-type": "image/jpg"
      },
      url: "https://bing.ioliu.cn/v1/rand",
      // url:"https://douban.uieee.com/v2/movie/subject/1764796/photos",
      data: {
        // id: "1764796",
      },
      responseType: 'arraybuffer',
      success: res => {
        app.globalData.movieInfo = res.data
        console.log(res)
        this.setData({
          imgUrl: wx.arrayBufferToBase64(res.data)
          // hasUserInfo: true
        })
        // console.log(app.globalData)
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },
  getMotto: function(){
    wx.request({
      url: "https://v1.hitokoto.cn/",
      success: res => {
        app.globalData.movieInfo = res.data
        console.log(res)
        this.setData({
          motto: res.data
        })
        // console.log(app.globalData)
      },
      fail: function (err) {
        console.log(err)
      }
    })
  }

});