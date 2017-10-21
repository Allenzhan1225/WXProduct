// hotQuestion.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePath:'',
    dataSource:[],
    apiHost:app.func.apiHost
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.loadData();
  },
  // 获取数据
  loadData(){
    const that = this; 
    app.func.reqGet('Api/index/rm_wenda', function (res) {
      console.log(res)
      that.setData({
        dataSource:res,
      })
    });  
  },



  // 查看详情
  handleClick(e){
      const id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: './detail/detail?id='+id,
      })
  },
  
  luyin(){
    var that = this;
    wx.startRecord({
      success: function (res) {
        var tempFilePath = res.tempFilePath;
        console.log(tempFilePath);
        that.setData({
          tempFilePath
        })
      },
      fail: function (res) {
        //录音失败
      }
    })
    setTimeout(function () {
      //结束录音  
      wx.stopRecord()
    }, 10000)
  },
  bofang(){
    console.log('播放');
    var that = this;
    wx.playVoice({
      filePath: this.data.tempFilePath,
      complete: function () {
      }
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