//app.js
var http = require('./utils/request.js'); 
App({
  
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var that = this;
    // 获取openID
    // this.getOpenid();

    //判断是否保存了账户
    // 1.有的话直接登录

    // 2.没有的话  就注册

    // 3.注册成功 本地缓存
    wx.login({
      success: function (res) {
        // console.log('qqq');
        // console.log(res);
      
        wx.request({
              url: 'http://yxtest.xgyuanda.com/Api/index/url_add?js_code='+res.code,
              data: {},
              method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT    
              // header: {}, // 设置请求的 header    
              success: function (res) {
                
                var obj = {};
                obj.open_id = res.data.openid;
                
                wx.setStorageSync('user', obj);//存储openid  
                that.getUserInfo(function(res){
                 
                  obj.u_image = res.avatarUrl;
                  obj.weixin_name = res.nickName;
              
                  // const api = 'Api/index/login?open_id=' + obj.open_id + "&u_image=" + obj.u_image + "&weixin_name=" + obj.weixin_name;
                  // console.log(obj);
                  // console.log(api);
                  that.func.req('Api/index/login',obj, function (res) {
                    console.log("成功");
                    console.log(res);
                    wx.setStorageSync('user_id', res.id)
                  });
                  // that.func.reqGet(api, function (res) {
                  //   console.log("成功");
                  //   console.log(res);
                  //  
                  // });
                  wx.request({
                    url: 'http://yxtest.xgyuanda.com/Api/index/login',
                    data: {
                       'u_image': obj.u_image,
                       'weixin_name': obj.weixin_name,
                       'open_id': obj.open_id

                    },
                    header: { 'Content-Type': 'application/json' },
                    method: 'POST',
                    success: function (res) {
                      console.log("成功");
                      console.log(res)
                      
                    },
                    fail: function (res) { },
                    complete: function (res) { },
                  })
                });
                
              }
            });

      }
    })
    
  },
  // getOpenid:function(){
  //   var that = this
  //   console.log('hahha1');
  //   var user = wx.getStorageSync('user') || {};
  //   var userInfo = wx.getStorageSync('userInfo') || {};
  //   // if ((!user.openid || (user.expires_in || Date.now()) < (Date.now() + 600)) && (!userInfo.nickName)) {
  //     wx.login({
  //       success: function (res) {
  //         if (res.code) {
  //           wx.getUserInfo({
  //             success: function (res) {
  //               var objz = {};
  //               objz.avatarUrl = res.userInfo.avatarUrl;
  //               objz.nickName = res.userInfo.nickName;
  //               //console.log(objz);  
  //               wx.setStorageSync('userInfo', objz);//存储userInfo  
  //             }
  //           });
  //           console.log('hahha2');
  //           var d = that.globalData;//这里存储了appid、secret、token串    
  //           var l = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + d.appid + '&secret=' + d.secret + '&js_code=' + res.code + '&grant_type=authorization_code';
  //           wx.request({
  //             url: l,
  //             data: {},
  //             method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT    
  //             // header: {}, // 设置请求的 header    
  //             success: function (res) {
  //               console.log('hahha3');
  //               console.log(res);
  //               var obj = {};
  //               obj.openid = res.data.openid;
  //               obj.expires_in = Date.now() + res.data.expires_in;
  //               //console.log(obj);  
  //               wx.setStorageSync('user', obj);//存储openid    
  //             }
  //           });
  //         } else {
  //           console.log('获取用户登录态失败！' + res.errMsg)
  //         }
  //       }
  //     });
  //   // }   
  // },

  onShow:function(){

    // var a = 'A';
    // a++;
    // console.log('A的值是');
    // console.log(a);

  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null,
    appid: 'wx39bf2dd4c04a8352',//appid，
    secret: '2c75532d91e748e6190cee68acf55fb1',//secret， 
  },
  func: {
    req: http.req,
    reqGet:http.reqGet,
    apiHost:'http://yxtest.xgyuanda.com'
  } 


})
