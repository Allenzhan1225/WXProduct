// reply.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    content:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id,
    })


  },
  // 输入数据发生改变
  textinput(e){
    console.log(e);
    const content = e.detail.value;
    this.setData({
      content
    })
  },

  // 发起回复
  reply(){
    const id = wx.getStorageSync('user_id');
    var that = this;
    app.func.reqGet('Api/index/wenda_hui?id=' + that.data.id + '&content=' + that.data.content + "&uid=" + id,function(res){
    
    
      wx.navigateBack({
        delta: 1,
      }) 
      wx.showToast({
        title: res.msg,
        duration: 2000,
        success: function () {

        },
      })
      
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