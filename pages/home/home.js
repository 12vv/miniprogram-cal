const app = getApp();

// var util = require('../../utils/util.js');
import solarLunar from '../../solarlunar.min.js';


var timestamp = Date.parse(new Date());
var date = new Date(timestamp);
//获取年份  
var Y = date.getFullYear();
//获取月份  
var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
//获取当日日期 
var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();


const lunarData = solarLunar.solar2lunar(Y, M, D);
// console.log(lunarData);

Page({
  data: {
    imgUrl:{},
    motto:{},
    year: Y,
    month: M,
    day: D,
    lunarData: lunarData,
  },

  onLoad: function () {
    this.mainDisplay();
    this.getMotto();
  },

  onShow: function () {
    
  },

  //事件处理函数
  bindViewChangepic: function () {
    // wx.navigateTo({
    //   url: '../details/details'
    // })
    this.mainDisplay();
  },

  bindViewChangemotto: function () {
    // wx.navigateTo({
    //   url: '../details/details'
    // })
    this.getMotto();
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
        // console.log(res)
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
        // console.log(res)
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