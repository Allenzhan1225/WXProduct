
// nearbyHospital.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
      dataSource:[],
      isHasHospital:true,
      apiHost:app.func.apiHost
        
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取当前的城市
    const city = wx.getStorageSync('currentCity');
    this.loadData(city);
  },

  // 获取附近的医院
  loadData(city){
    const that = this;
    app.func.reqGet('Api/index/hospital_yx?j_address='+city,function(res){
      console.log(res);
      if(res.status  == 0){
        that.setData({
          isHasHospital:false,
        })
   

      }
      that.setData({
        dataSource:res.hosptal || res,
      })
      

    })
  },




  // 点击进入详情
  click(e){
    const id = e.currentTarget.dataset.id;
    console.log("id");
    console.log(id);
    wx.navigateTo({
      url: './detail/detail?id='+id,
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