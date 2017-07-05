//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    navTitle:['首页','概况','专家','技术','路线'],
    imgUrls:[
        '../../images/home/banner1.gif',
        '../../images/home/banner7-1.gif',
    ],
    index: 1,
    msg: 'this is a template',
    time: '2016-09-15',
    //列表数据
    list:[
      { 'img':'../../images/home/index_3.jpg','title':'前列腺疾病','detial':'如何判断自己患上了前列腺炎？','color':'rgb(14,119,205)'},
      { 'img': '../../images/home/index_4.jpg', 'title': '性功能障碍', 'detial': '早泄检查项目有哪些', 'color': 'rgb(250,150,49)' },
      { 'img': '../../images/home/index_5.jpg', 'title': '性传播疾病', 'detial': '梅毒的检查需要做哪些', 'color': 'rgb(118,183,47)' },
      { 'img': '../../images/home/index_6.jpg', 'title': '生殖整形', 'detial': '欧式高频等离子包皮美容术', 'color': 'rgb(47,48,233)' },
    ],
    //列表数据
    list2: [
      { 'img': '../../images/home/index_8.jpg',},
      { 'img': '../../images/home/index_9.jpg',},
      { 'img': '../../images/home/index_10.jpg',},
      { 'img': '../../images/home/index_11.jpg',},
      { 'img': '../../images/home/index_12.jpg', },
      { 'img': '../../images/home/index_13.jpg', },
      { 'img': '../../images/home/index_14.jpg', },
      { 'img': '../../images/home/index_15.jpg', },
      { 'img': '../../images/home/index_16.jpg', },
    ],

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad');
    var that = this;




    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
