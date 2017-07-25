//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    scrWidth:0,
    
    imgUrls: [
      'http://www.fzyyzx.com/uploads/image/20170327/20170327094753_87043.jpg',
      'http://www.fzyyzx.com/uploads/image/20170304/20170304102309_97937.jpg',
      'http://www.fzyyzx.com/uploads/image/20170304/20170304165848_79930.jpg',
      'http://www.fzyyzx.com/uploads/image/20161022/20161022113709_43737.jpg',
      'http://www.fzyyzx.com/uploads/image/20161022/20161022114032_35422.jpg',
    ],
    //前列腺炎|前列腺增生|前列腺囊肿|前列腺钙化|前列腺痛|
    //包皮包茎|精索静脉曲张|输尿管畸形|阴茎弯曲|阴茎延长|
    //龟头炎|尿道炎|附睾炎|精囊炎|睾丸炎|膀胱炎|阴囊湿疹|淋巴肉芽肿|
    //尖锐湿疣|生殖器疱疹|淋病|非淋|梅毒|阴虱|软下疳|淋巴肉芽肿|
    //肾结石|尿道结石|输尿管结石|膀胱结石|
    dataList:[
      { "id": '0', "title": '性功能障碍', "detial": ["阳痿", "早泄", "射精障碍", "勃起异常", "性冷淡", "性亢进",], "color":"#FF8800 "},
      { "id": '1', "title": '前列腺疾病', "detial": ["前列腺炎", "前列腺增生", "前列腺囊肿", "前列腺钙化", "前列腺痛",], "color": "#77FF00" },
      { "id": '2', "title": '生殖器整形', "detial": ["包皮包茎", "精索静脉曲张", "输尿管畸形", "阴茎弯曲", "阴茎延长",], "color": "#00FFCC"},
      { "id": '3', "title": '泌尿生殖感染', "detial": ["龟头炎", "尿道炎", "附睾炎", "精囊炎", "睾丸炎", "膀胱炎"], "color": "#0066FF " },
      { "id": '4', "title": '性传播疾病', "detial": ["尖锐湿疣", "生殖器疱疹", "淋病", "非淋", "梅毒", "阴虱"], "color": "#7700FF "},
      { "id": '5', "title": '泌尿结石', "detial": ["肾结石", "尿道结石", "输尿管结石", "膀胱结石"], "color": "#FF00FF " },
    ],

    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000

  },


  //点击事件处理函数
  cellClick:function(event){

    var id = event.currentTarget.dataset.id
 
    wx.navigateTo({
      url: './detial/detial?id='+id,
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
    wx.getSystemInfo({
      success: function(res) {
        console.log(res);
        this.setData({
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
