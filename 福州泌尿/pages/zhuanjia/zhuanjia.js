// zhuanjia.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      { "id": "0", "img": "../../images/yisheng1.jpg", "title": '江鱼', "detial":"教授、主任医师 福州泌尿专科医院首位荣誉院长...."},
      {
        "id": "1", "img": "../../images/yisheng2.jpg", "title": '柳福祺', "detial": "主任医师 教授 硕士生导师毕业于华西医科大学...." },
      { "id": "2", "img": "../../images/yisheng3.jpg", "title": '邹殿强', "detial": "1982年毕业于湖北医学院，长期从事男科临床研究与科研、教学工作...." },
      { "id": "3", "img": "../../images/yisheng4.jpg", "title": '张志宏', "detial": "主任医师，北京大学医学部博士后，现留任北京大学 医院泌尿外科...." },
     

    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },


  // 列表被点击
  cellClick : function (event){

    var temp = event.currentTarget.dataset.item;
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