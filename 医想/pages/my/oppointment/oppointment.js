// oppointment.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hosptal:[],
    apiHost: app.func.apiHost,
    items:[
      {'name':"姓名:",'placeholder':'输入您的姓名'},
      { 'name': "年龄:", 'placeholder': '输入您的年龄' },
      { 'name': "联系:", 'placeholder': '输入您的联系方式' },
     
    ],
    hosptalName:"请选择医院",
    hosptalid:'',
    name:'',
    age:'',
    tel:'',
    time:'请选择预约时间',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取当前的城市
    const city = wx.getStorageSync('currentCity');
    this.loadData(city);
  },

  // 获取附近的医院
  loadData(city) {
    const that = this;
    app.func.reqGet('Api/index/hospital_yx?j_address=' + city, function (res) {
      console.log(res);
      var hospitalArr = [];
      for (var i = 0; i < res.hosptal.length; ++i){
        var obj = {};
        obj.id = res.hosptal[i].id;
        obj.hosptal = res.hosptal[i].hosptal;
        hospitalArr.push(obj);
      } 
      that.setData({
        hosptal: hospitalArr,
      })
    })
  },

  // 选择医院
  chooseHosptal(){
    const that = this;
    console.log(that.data.hosptal);
    var itemList = [];
    for (var i = 0; i < that.data.hosptal.length; ++i ){
      itemList.push(that.data.hosptal[i].hosptal)
    }
    wx.showActionSheet({
      itemList: itemList,
      success: function (res) {
        console.log(res.tapIndex);
        that.setData({
          hosptalid: that.data.hosptal[res.tapIndex].id,
          hosptalName: that.data.hosptal[res.tapIndex].hosptal,
        })
      },
      fail: function (res) {
        console.log(res)
      }
    })
  },


  // bindTimeChange 选择时间
  bindTimeChange(e){
    console.log(e);
    const time = e.detail.value;
    this.setData({
      time
    })
  },
  // 输入框失去焦点
  inputBlur(e){
    const index = e.currentTarget.dataset.index;
    const content = e.detail.value;
    switch(index){
      case 0:
        this.data.name = content;
      break;
      case 1:
        this.data.age = content;
      break;
      case 2:
        this.data.tel = content;
        break;
      default:
      break;
    }

  },

  // 提交预约信息
  submit(e){
    console.log(this.data);
    var that = this;
    if (this.data.age < 0 || this.data.age > 150) {
      wx.showToast({
        title: '请填写正确的年龄',
        duration: 1500
      })
      return;
    }
    
    // var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
    var reg = /^1[0-9]{10}$/;
    if (!reg.test(this.data.tel)){
      wx.showToast({
        title: '请填写正确手机号码',
        duration: 1500
      })
      return ;
    }


  if (this.data.hosptalid == '' || this.data.name == '' ||
    this.data.age == '' || this.data.tel == '' ||
    this.data.time == '请选择预约时间') {
    wx.showToast({
      title: '请填写完整的信息',
      duration: 1500
    })
    return;
  }

    const id = wx.getStorageSync('user_id')
    app.func.reqGet('Api/index/order?hospital_id=' + this.data.hosptalid + "&user=" + this.data.name + "&age=" + this.data.age + "&tel=" + this.data.tel + "&time=" + this.data.time+"&id="+id,
      function(res){
        console.log(res); 
       
        if(res[0].id != ""){
          // wx.showToast({
          //   title: "预约成功",
          //   duration: 1500
          // })
          wx.navigateTo({
            url: './oppointStatus/oppointStatus?id=' + res[0].id,
          })
        }
      }
    )



    
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