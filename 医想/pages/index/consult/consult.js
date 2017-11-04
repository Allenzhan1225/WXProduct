// consult.js

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      content:'',
      selectedItems:[],
      labels:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.loadData();
  },

  // 加载症状
  loadData(){
    var that = this;
   
    app.func.reqGet('Api/index/zheng_zhuang',function(res){
      console.log(res);
      for(var i = 0 ; i < res.length; ++i){
        res[i].status = false;
      }
      const labels = res;
      console.log(res);
      that.setData({
        labels
      })
    }) 


  },



  // 输入框失去焦点
  textBlur(e){
    const content = e.detail.value;
    this.setData({
      content
    })
  },
  // 输入框的值改变的时候
  bindTextChange:function(e){
    
    
  },
// 症状按钮点击
  itemClick(e){
      const status = !e.currentTarget.dataset.status;
      const index = e.currentTarget.dataset.index;
      this.data.labels[index].status = status;
      const labels = this.data.labels;
      this.setData({
        labels
      });

  },
  selectedItems:function(){
    //清空数组
    this.data.selectedItems = []; 
    const labels = this.data.labels;
    for (var i = 0; i < labels.length; ++i){
        if(labels[i].status == true){
          this.data.selectedItems.push(labels[i].id);
        }
      }
  },

  // 提交问答
  submit(e){
    var that = this;
    //1.获取当前选中的标签
    this.selectedItems();
    console.log(this.data.selectedItems);
    const content = this.data.content;
    console.log(content);
    console.log(e);
    let typestr = '0';
    if (e &&e.currentTarget.dataset.type){
      typestr = e.currentTarget.dataset.type;
    }
    

    const id = wx.getStorageSync('user_id');
    console.log('用户id');
    console.log(id);
    const selectedStr = this.data.selectedItems.join(',');
    app.func.reqGet('Api/index/ks_wenda?uid='+id+'&sid='+selectedStr+'&content='+content+'&type='+typestr,function(res){
      console.log(res);
      if(res.status != 200){
        wx.showToast({
          title: res.msg,
          duration: 1500,
          complete:function(){
            wx.navigateBack({
              delta: 1,
            })
          }
        })
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