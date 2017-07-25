// jishu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [

      { "id": "0", "img": '../../images/js_s1.png', "height": 0, "title": "阴茎脱细胞生物补片疗法您坚持不“泄”" },
      { "id": "1", "img": '../../images/js_s2.png', "height": 0, "title": "MyWave线性震波ED治疗仪" },
      { "id": "2", "img": '../../images/js_s3.png', "height": 0, "title": "LZL型腔道介入治疗仪有效治好前列腺钙化" },
      { "id": "3", "img": '../../images/js_s4.png', "height": 0, "title": '瑞士EMS-Ⅴ超声气压弹道碎石清石系统' },
      { "id": "4", "img": '../../images/js_s5.png', "height": 0, "title": '显微镜下输精管附睾吻合术，为你打开生育之门' },
      { "id": "5", "img": '../../images/js_s6.png', "height": 0, "title": '安全、快速、美观的“射流式无痛麻醉包皮整形术”' },
      { "id": "6", "img": '../../images/js_s7.png', "height": 0, "title": '2微米激光治疗系统，治疗前列腺增生的权威“标兵”' },
  

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