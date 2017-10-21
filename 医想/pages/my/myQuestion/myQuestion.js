// oppointment.js

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
     dataSource:[],
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.loadData();
  },

  // 加载数据
  loadData(){
    var that = this;
    const id = wx.getStorageSync('user_id');
    app.func.reqGet('Api/index/questionsyx_me?id='+id,function(res){
        console.log(res);
        that.setData({
          dataSource:res,
        })
    })
  },

// 回复
  reply(e){
    var obj = {};
    obj.id = e.currentTarget.dataset.id;
    obj.type = 'self';
    const temp = JSON.stringify(obj);
    wx.navigateTo({
      url: '../../index/hotQuestion/detail/detail?temp=' + temp,
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