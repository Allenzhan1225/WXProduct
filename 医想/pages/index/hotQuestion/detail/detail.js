// detail.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataSource:{},
    apiHost:app.func.apiHost,
    isSelf:true,
    selftype:'',
 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    wx.setStorageSync("hotListOptions", options);
   // this.loadDataWithOptions(options);

  },




  loadDataWithOptions(options){
   
    if (options.id) {
      //热门问题详情
      const id = options.id;
      const selftype = options.type;
      // console.info(options);
      this.setData({
        isSelf:false,
        selftype:selftype,
      })
      this.loadData(id);
    } else {
      //我的问题详情 
      const id = JSON.parse(options.temp).id;
      this.setData({
        isSelf: true,
      })
      this.loadData1(id)
    } 
  },


  loadData(id){
    const that = this;
    app.func.reqGet('Api/index/wenda_xq?id='+id,function(res){
        console.log(res);
        for(var i = 0; i < res.abjc.length; ++i){
          res.abjc[i].d_images = 'http://yxtest.xgyuanda.com/Public/upload/fzml/' + res.abjc[i].d_images;
        }
        that.setData({
          dataSource:res,
        })
    })
  },
  loadData1(id) {
    const that = this;
    app.func.reqGet('Api/index/questionsyx_mes?id=' + id, function (res) {
      console.log(res);
      for (var i = 0; i < res.abjc.length; ++i) {
        res.abjc[i].d_images = 'http://yxtest.xgyuanda.com/Public/upload/fzml/' + res.abjc[i].d_images;
      }
      that.setData({
        dataSource: res,
        
      })
    })
  },

  reply(e){
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: './reply/reply?id='+id,
    })

  },

  // 播放语音
  play(e){
    // && 
    // !!this.audioCtx
    const audioid = e.currentTarget.dataset.id;
    const audioCtx =  wx.createAudioContext(audioid);
    // console.log(audioCtx);
    // console.log(this.data.audioCtx);
    
    // this.data.audioCtx != audioCtx
    if (this.data.audioid != audioid && this.data.audioCtx != null){
      // console.log("jinlaile")
      this.data.audioCtx.pause();
    }
   
    this.setData({
      audioCtx:audioCtx,
      audioid: audioid,       
    })   
        // const audioid = e.currentTarget.dataset.id;
    // const audioCtx = wx.createAudioContext(audioid);
    // console.log(audioCtx);
    // console.log(this.data.audioCtx);
    // if(!!!this.data.audioid && this.data.audioid != audioid){
    //   console.log("jinlaile");
    //   this.data.audioCtx.pause();
    // }
    // this.setData({
    //   audioCtx: audioCtx,  
    //   audioid:audioid,      
    // }) 
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
    const options =  wx.getStorageSync("hotListOptions");
    this.loadDataWithOptions(options);
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