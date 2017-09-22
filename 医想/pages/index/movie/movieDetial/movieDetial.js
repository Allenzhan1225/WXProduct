// movieDetial.js

var util = require('../../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    

      const url = options.url;
      console.log(util.windowinfo());
      this.setData({
        url:url,
        height: util.windowinfo().screenWidth,
        width: util.windowinfo().screenHeight,
      })
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
        content: '当前是非wifi环境，确定要用流量观看视频吗？',
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