//index.js
//获取应用实例

var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
   feed:[],
   feed_length:0
  },
  //cell点击事件
  bindItemTap:function(){
    wx.navigateTo({
      url: '../answer/answer',
    })
  },
  
  //上拉刷新
  refresh:function(){
    wx.showToast({
      title: '正在刷新...',
      icon:"loading",
      duration:4000
    });
    var feed = util.getindexData();
    var data = feed.data;
    this.setData({
      feed:data,
      feed_length: data.length
    }); 
    setTimeout(function(){
      wx.showToast({
        title: '刷新成功',
        icon: 'success',
        duration: 2000
      })
    },3000)

  },
  //下拉加载
  loadmore: function(){
    wx.showToast({
      title: '正在加载...',
      icon: "loading",
      duration: 4000
    });
    var feed = util.getNext();
    console.log('下面是新加载的数据')
    var data = feed.data;
    console.log(data);
 
    this.setData({
      feed: this.data.feed.concat(data),
      feed_length: data.length + this.data.feed.length
    });
    setTimeout(function () {
      wx.showToast({
        title: '加载成功',
        icon: 'success',
        duration: 2000
      })
    }, 3000)

  },



  onLoad: function () {
    console.log('onLoad')
    this.getData();


    var that = this


    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },

  //使用本地 fake 数据实现刷新效果
  getData:function(){

    console.log('下面将打印index界面的数据');
    //获取到index界面的数据
    var data = util.getindexData();
    var feed_data = data.data;
    // 将数据赋值给变量
    this.setData({
      feed:feed_data,
      feed_length : feed_data.length 
    });

    console.log(feed_data);
    //获取网络数据
    util.getData('http://huanqiuxiaozhen.com/wemall/slider/list')

  }




})
