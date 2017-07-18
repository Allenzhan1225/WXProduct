//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    datalist:[
      {"id":"0","img":'../../images/p1_img1.png',"title":["阳痿","早泄","射精障碍","射精过快","勃起障碍","性生活时间短"]},
      { "id": "1", "img": '../../images/p1_img2.png', "title": ["包皮过长", "阴茎延长", "包茎", "阴茎增粗", "阴茎弯曲", "尿道下裂"] },
      { "id": "2", "img": '../../images/p1_img3.png', "title": ["阴虱", "梅毒", "生殖器疱疹", "尖锐湿疣"]},
      { "id": "3", "img": '../../images/p1_img4.png', "title": ["龟头炎", "睾丸炎", "尿道炎", "阴囊湿疹", "龟头红点", "鞘膜积液"] },
      { "id": "4", "img": '../../images/p1_img5.png', "title": ["前列腺炎", "前列腺增生", "尿痛", "小便带血", "尿频尿急", "尿液发黄"] },
      { "id": "5", "img": '../../images/p1_img6.png', "title": ["弱精", "少精", "精液不液化", "死精症"] },

    ],


  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
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
