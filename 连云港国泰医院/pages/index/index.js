//index.js
//获取应用实例

//  var ahha = require('../../utils/atil.js');

var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    scrWidth:0,
    
    imgUrls: [
      'http://www.0518jk.com/lib/img/head11_big.jpg',
      'http://www.0518jk.com/lib/img/head12_big.jpg',
      'http://www.0518jk.com/lib/img/head13_big.jpg',
      'http://www.0518jk.com/lib/img/head14_big.jpg',
    ],
    //前列腺炎|前列腺增生|前列腺囊肿|前列腺钙化|前列腺痛|
    //包皮包茎|精索静脉曲张|输尿管畸形|阴茎弯曲|阴茎延长|
    //龟头炎|尿道炎|附睾炎|精囊炎|睾丸炎|膀胱炎|阴囊湿疹|淋巴肉芽肿|
    //尖锐湿疣|生殖器疱疹|淋病|非淋|梅毒|阴虱|软下疳|淋巴肉芽肿|
    //肾结石|尿道结石|输尿管结石|膀胱结石|
    dataList:[
      { "id": '0', "title": '男科', "detial": ["前列腺炎", "前列腺增生", "早泄", "龟头炎", "睾丸炎", "包皮包茎","淋病","尖锐湿疣"], "color":"#FF8800 "},
      { "id": '1', "title": '妇科', "detial": ["妇科炎症", "宫颈疾病", "月经疾病", "计划生育", "女性不孕","妇科整形","卵巢疾病","妇科肿瘤"], "color": "#77FF00" },
      { "id": '2', "title": '肛肠科', "detial": ["痔疮疾病", "肛周疾病", "肛门疾病", "肠道疾病", ], "color": "#00FFCC"},
     
    ],

    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000

  },


  callBack:function(res){
      //回调函数
      console.log(res);
  },

  //点击事件处理函数
  cellClick:function(event){
    var that = this;
    var id = event.currentTarget.dataset.id
    console.log(this.callBack);
    var func1 = this.callBack.bind(this);

    // func1 = function(res){
    //   console.log(res);

    // };

    var temp = { "id": 0, "type": "1", "name": "Allen", "callBack": func1.toString()};

    var tempStr = JSON.stringify(temp); 
    console.log(tempStr);

    wx.navigateTo({
      url: './detial/detial?id='+id,
      //url: './detial/detial?callBack=' + tempStr,
    })

  },

  
  

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this;
    
    // ahha.req(res){


    // }

    wx.getSystemInfo({
      success: function(res) {
        console.log(res);
        that.setData({
          scrWidth: res.screenWidth
        });
      },
    })
   
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
   

    
  }
 

})
