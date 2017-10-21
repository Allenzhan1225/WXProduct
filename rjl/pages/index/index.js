//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: ["http://www.51yuban.net/img/1_1.jpg", 
          "http://www.51yuban.net/img/1_2.jpg", 
         "http://www.51yuban.net/img/1_3.jpg",
          "http://www.51yuban.net/img/1_4.jpg"],
    indicatorDots: true,//是否显示小圆点
    autoplay: true, //是否自动播放
    interval2: 3000,//动画间隔
    duration: 1000,//动画时长
    circular: true, //动画是否衔接
    next:false,
    name:'',
    age: '',
    nation: '',
    tel: '',
    fluency: '',
    date: '',
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  // 下一个填写
  next(){
    this.setData({
      next:true,
    })
  },

  // 提交按钮
  submit(){
    const that  = this;
    if(
      this.data.name === "" ||
      this.data.age === "" ||
      this.data.nation === "" ||
      this.data.tel === "" ||
      this.data.fluency === "" ||
      this.data.date === "" 
    ){
      wx.showToast({
        title: '请填写完整信息',
        duration: 2000,
        mask: true,
      })
      return ;
    }

    //提交信息
    wx.request({
      url: 'Api',
      data: {},//数据
      header: { 'content-type':'application/x-www-form-urlencoded'},
      method: POST,
      dataType: json,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })


  },


  // 输入框改变
  nameChange(e) {
    const name = e.detail.value;
    console.log(name);
    this.setData({
      name
    })
  },

  ageChange(e) {
    const age = e.detail.value;
    this.setData({
      age
    })
  },

  nationChange(e) {
    const nation = e.detail.value;
    this.setData({
      nation
    })
  },

  telChange(e) {
    const tel = e.detail.value;
    this.setData({
      tel
    })
  },

  fluencyChange(e) {
    const fluency = e.detail.value;
    this.setData({
      fluency
    })
  },

  dateChange(e) {
    const date = e.detail.value;
    this.setData({
      date
    })
  },




  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
