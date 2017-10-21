// detail.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,//是否显示小圆点
    autoplay: true, //是否自动播放
    interval2: 3000,//动画间隔
    duration: 1000,//动画时长
    circular: true, //动画是否衔接
    imgUrls: [
     
    ],
    dataSource:{},
    apiHost:app.func.apiHost
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
      const hospatal_id =  options.id;
      this.loadData(hospatal_id);
  },

  // 加载医院详情数据
  loadData(id){
    const that = this;
    app.func.reqGet('Api/index/hospital_yxs?id='+id,function(res){
      console.log(res);
      var bannerArr = [];
       if(res.tpa[0].h_urla != ""){
         bannerArr.push(res.tpa[0].h_urla); 
       }
       if (res.tpa[0].h_urlb != "") {
         bannerArr.push(res.tpa[0].h_urlb);
       }
       if (res.tpa[0].h_urlc != "") {
         bannerArr.push(res.tpa[0].h_urlc);
       } 

      that.setData({
        dataSource:res,
        imgUrls:bannerArr,
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