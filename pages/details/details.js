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
    // imgUrl: {},
    motto: {},
    year: Y,
    month: M,
    day: D,
    details: {},
  },

  onLoad: function () {
    this.getDetails();
  },

  onShow: function () {

  },

  getDetails: function () {
    wx.request({
      url: "https://api.avatardata.cn/HistoryToday/LookUp",
      data: {
        key: "6b61443ed58b4ec6b571b64a2e1e6c01",
        yue: M,
        ri: D,
        type: 2,
      },
      success: res => {
        app.globalData.movieInfo = res.data
        // console.log(res)
        this.setData({
          details: res.data
        })
      },
      fail: function (err) {
        console.log(err)
      }
    })
  }

});