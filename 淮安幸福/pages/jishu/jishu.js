// jishu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      
        {"id":"0","img":'../../images/js_s1.png',"height":0,"title":"体外冲击碎石机"},
        { "id": "1", "img": '../../images/js_s2.png', "height": 0, "title": "半导体激光治疗仪"},
        { "id": "2", "img": '../../images/js_s3.png', "height": 0,"title": "CSR光导泌尿治疗系统"},
        { "id": "3", "img": '../../images/js_s4.png', "height": 0, "title":'UKF康复磁疗'},
        { "id": "4", "img": '../../images/js_s5.png', "height": 0, "title": '美国电子真彩电子阴道镜'},
        { "id": "5", "img": '../../images/js_s6.png', "height": 0, "title": '红外线乳透诊疗仪'},
        { "id": "6", "img": '../../images/js_s7.png', "height": 0, "title": '腔道介入治疗仪'},
        // { "id": "7", "img": '../../images/js_s8.png', "height": 0, "title": 'UKF康复磁疗'}
       

    ],
    height:0,
    wh:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
      wx.getSystemInfo({
        success: function(res) {  
          console.log(res);
          that.setData({
            height: res.screenHeight,
            wh: res.screenWidth,
          })
        
          
        },
      })
      console.log(this.data.height);
      console.log(this.data.wh);
   
      for(var i = 0 ; i < this.data.list.length; ++i){
        if (this.data.list[i].height == 0)
          this.data.list[i].height = this.data.wh

      }
      console.log(this.data.list)

  },


  cellClick:function(event){
    console.log(event.currentTarget.dataset.id);
    wx.navigateTo({
      url: './detial/detial?id=' + event.currentTarget.dataset.id
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