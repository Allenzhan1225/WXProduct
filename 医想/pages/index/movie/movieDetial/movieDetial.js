// movieDetial.js
var WxParse = require('../../../../wxParse/wxParse.js')
var util = require('../../../../utils/util.js')
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay:false,
    apiHost:app.func.apiHost
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

      const that = this;
      const url = options.url;
      console.log(util.windowinfo());
      this.setData({
        url:url,
        height: util.windowinfo().screenWidth,
        width: util.windowinfo().screenHeight,
      })
     
 
      var videoStr = this.data.apiHost+'/Public/upload/re_shipin/'+this.data.url;
  //     var voideHTML = `<video width=${util.windowinfo().screenHeight} height="240" controls autoplay>
  // <source src= "${videoStr}" type= "video/ogg" >
  // <source src="${videoStr}" type="video/mp4">
  // <source src="${videoStr}" type="video/webm">
  // <object data="${videoStr}" width= ${util.windowinfo().screenHeight}  height= "240" >
  // <embed width=${util.windowinfo().screenHeight}  height= "240" src= "${videoStr}" />
  // </object>
  // </video>`;
      // console.error(videoStr);
  // http://yxtest.xgyuanda.com/Public/upload/re_shipin/trailer.mp4
//       var voideHTML1 = `<video src=${videoStr} width="320" height="240" controls="controls">

// </video>`;
      // WxParse.wxParse('voideHTML', 'html', voideHTML1, that, 5); 

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  // function name(){},
//  error:function(e){
//     console.log('e.detail.errMsg=',e.detail.errMsg);
//   },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 监听当前的网络状态
    const that = this;

    wx.onNetworkStatusChange(function(res){
      // 获取当前是否有网络和当前的网络状态
      const isConnected = res.isConnected;
      const networkType = res.networkType;
      that.showModel(networkType);
    })
    wx.getNetworkType({
      success: function (res) {
        // 返回网络类型, 有效值：
        // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
        var networkType = res.networkType;
        that.showModel(networkType);
      }
    })
  },

  showModel:function (networkType){
    var that = this;
    if (networkType != 'wifi') {
      wx.showModal({
        title: '提示',
        content: '当前是非wifi环境，请注意流量的使用情况呦？',
        success: function (res) {
          if (res.confirm) {
            that.setData({
              autoplay: true,
            })
          } else if (res.cancel) {
            wx.navigateBack({});
          }
        }
      })
    }
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
  
  }
})