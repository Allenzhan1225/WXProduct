// consult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      content:'',
      selectedItems:[],
      labels:[
        {id:'0',title:'勃起不够硬',status:false},
        { id: '1', title: '时间短', status: false },
        { id: '2', title: '勃起硬', status: false },
        { id: '3', title: '勃起不够硬', status: true },
        { id: '4', title: '勃够硬', status: false },
        { id: '5', title: '勃起不够硬', status: false },
        { id: '6', title: '勃够dsa 硬', status: false },
        { id: '7', title: '勃起硬fafdas ', status: false },
      ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  submit(){
    //1.获取当前选中的标签
    this.selectedItems();
    console.log(this.data.selectedItems);
    const content = this.data.content;
    console.log(content);

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