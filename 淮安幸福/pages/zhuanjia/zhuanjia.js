// zhuanjia.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      { "id": "0", "img": "http://www.haxfyy.com/uploads/image/20170518/20170518161324_81743.jpg", "title": '程华中', "detial":"程华中 主任医师 淮安幸福男科医院坐诊专家WHO性功能障...."},
      {
        "id": "1", "img": "http://www.haxfyy.com/uploads/image/20170518/20170518160953_40206.jpg", "title": '孙如亮', "detial": "孙如亮 幸福生殖医院-男科主任：孙如亮-从医近40余年" },
      { "id": "2", "img": "http://www.haxfyy.com/uploads/image/20170518/20170518160044_45033.jpg", "title": '臧道明', "detial": "淮安幸福医院特邀专家,从医20年多年，一直致力于男科领域的研究和诊疗...." },
      { "id": "3", "img": "http://www.haxfyy.com/uploads/image/20170110/20170110103043_90013.jpg", "title": '马良', "detial": "幸福生殖医院-男科主任：从事泌尿外科临床工作20余年...." },
      { "id": "4", "img": "http://fuke.haxfyy.com/uploads/image/20170111/20170111134220_29968.jpg", "title": '董秀英', "detial": "妇科主任 淮安幸福妇科医院特聘专家...." },
      { "id": "5", "img": "http://fuke.haxfyy.com/uploads/150308/1-15030QA620434.jpg", "title": '汪立', "detial": "妇科主任 淮安幸福妇科医院特聘专家...." },

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