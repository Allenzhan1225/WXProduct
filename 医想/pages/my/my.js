// my.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl:'',
    nickName:'',
    apiHost:app.func.apiHost
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
    //获取用户信息
    this.getUserInfo();

  
  },

  //获取用户信息
  getUserInfo(){
    var that = this;
    app.getUserInfo(function (res) {
      console.log(res);
      const { avatarUrl, nickName } = res;
      that.setData({
        avatarUrl,
        nickName
      });
    });
  },

  // 预约挂号
  oppointment(){
    console.log('预约挂号被点击');
    wx.navigateTo({
      url: './oppointment/oppointment',
    })
  },
  // 我的问题
  myQuestion() {
    console.log('预约挂号被点击');
    wx.navigateTo({
      url: './myQuestion/myQuestion',
    })
  },
  // 我的咨询
  myConsult() {
    console.log('预约挂号被点击');
    wx.navigateTo({
      url: './myConsult/myConsult',
    })
  },
  // 我的预约
  myOppointment() {
    console.log('预约挂号被点击');
    wx.navigateTo({
      url: './myOppointment/myOppointment',
    })
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
  
  }
})