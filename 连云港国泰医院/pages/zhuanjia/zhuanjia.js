// zhuanjia.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { 
        "id": '0',
        "title": '男科医生',
        "detial": [
          { "id": "0", "name":"吴宜澄","img":"http://www.0518jk.com/uploads/image/20161020/20161020115307_50940.jpg"},
          { "id": "1", "name": "王恩祥", "img": "http://www.0518jk.com/uploads/image/20161020/20161020115101_30867.jpg" },
          { "id": "2", "name": "相守建", "img": "http://www.0518jk.com/uploads/image/20161020/20161020114820_83733.jpg" },
          { "id": "3", "name": "陈琮琪", "img": "http://www.0518jk.com/uploads/image/20161020/20161020113208_35888.jpg" },
          { "id": "4", "name": "張汝勇", "img": "http://www.0518jk.com/uploads/image/20161020/20161020112759_20502.jpg" },
          { "id": "5", "name": "黄德骧", "img": "http://www.0518jk.com/uploads/image/20161014/20161014162335_69893.jpg" },
          { "id": "6", "name": "谢奕赟", "img": "http://www.0518jk.com/uploads/image/20161014/20161014154019_32325.jpg" },
          
        ],
        "color": "#FF8800 " 
      },
      { 
        "id": '1',
        "title": '妇科医生', 
        "detial": [
          { "id": "0", "name": "谢海玲", "img": "http://www.0518jk.com/uploads/image/20170525/20170525105906_25453.jpg" },
          { "id": "1", "name": "代群英", "img": "http://www.0518jk.com/uploads/image/20170428/20170428093351_71400.jpg" },
          { "id": "2", "name": "刘艳林", "img": "http://www.0518jk.com/uploads/image/20170408/20170408165117_85541.jpg" },
          { "id": "3", "name": "南秋利", "img": "http://www.0518jk.com/uploads/image/20161020/20161020135843_10112.jpg" },
          { "id": "4", "name": "张新军", "img": "http://www.0518jk.com/uploads/image/20161020/20161020135536_99563.png" },
          { "id": "5", "name": "黄树敏", "img": "http://www.0518jk.com/uploads/image/20161020/20161020135414_25838.jpg" },
          { "id": "6", "name": "蒋丽君", "img": "http://www.0518jk.com/uploads/image/20161020/20161020135212_10945.jpg" },
        ], 
        "color": "#77FF00" 
        },
      { 
        "id": '2', 
        "title": '肛肠科医生', 
        "detial": [
          { "id": "0", "name": "杜军", "img": "http://www.0518jk.com/uploads/image/20170525/20170525110759_30823.jpg" },
          { "id": "1", "name": "王宗好", "img": "http://www.0518jk.com/uploads/image/20170525/20170525110448_46755.jpg" },
          { "id": "2", "name": "杨洪栋", "img": "http://www.0518jk.com/uploads/image/20170525/20170525105216_64594.jpg" },
          { "id": "3", "name": "周淑珍", "img": "http://www.0518jk.com/uploads/image/20161020/20161020114116_49681.jpg" },
        
        ], 
        "color": "#00FFCC" 
      },

    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },


  // 列表被点击
  cellClick : function (event){
    console.log(event);
    var temp = { "type": event.currentTarget.dataset.type, "id": event.currentTarget.dataset.id};

    // var temp = event.currentTarget.dataset.item;
    wx.navigateTo({
      url: './detial/detial?data=' + JSON.stringify(temp),
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