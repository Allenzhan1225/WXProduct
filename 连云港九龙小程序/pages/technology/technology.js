// technology.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:[
        { 'id':'1', 'img': '../../images/home/jishu1.png', 'title': '【早泄】欧式NT阴茎敏感神经分', 'detial':'该手术安全性高、精准、微创、微痛、“0”风险无并发...','num':'91'},
        { 'id': '2',  'img': '../../images/home/jishu2.jpg', 'title': '【阳痿治疗】STR五环性功能康', 'detial': '技术摒弃了传统方法治疗效果不持久、副作用大的缺点，...', 'num': '219' },
        { 'id': '3',  'img': '../../images/home/jishu3.png', 'title': '【包皮包茎】韩式纳米微创包皮整', 'detial':'为国内男科临床质控重点推广项目，其优势非常明显：安...', 'num': '203' },
        {
          'id': '4', 'img': '../../images/home/jishu4.png', 'title': '前列腺炎 隧道扫描下靶向分型', 'detial': '前列腺炎是男性发病率 高的疾病，常规临床治疗很难有...', 'num': '159' },    

        ]
  },

//cell 点击

  cellClick : function (event){
    console.log(event)
    var index = event.currentTarget.id;
    wx.navigateTo({
      url: 'detial/detial?id='+index,
    })

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