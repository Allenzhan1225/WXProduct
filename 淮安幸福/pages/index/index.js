//index.js
//获取应用实例
var app = getApp()
// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {},
//     index:0,
//     color1:"red",
//     color2:null,
//     indicatorDots: false,
//     autoplay: false,
//     interval: 1000,
//     duration: 1000,
//     imgUrls: [
//       'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
//       'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
//       'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
//     ],
   


//   },


//   //点击事件处理函数
//   btnclick:function(event){

//     var id = event.currentTarget.dataset.id
//     console.log(id);
//     if(id == 0){
//       //男科
//       this.setData({
//         index:0,
//         color1:'red',
//         color2:'black',
//       })
//     }else{
//       //妇科
//       this.setData({
//         index: 1,
//         color2: 'red',
//         color1: 'black',
//       })
//     }
//     console.log(this.data.index);

//   },

//   //swiper 滑动事件处理
//   swiperChange:function(e){
//     console.log(e.detail.current);
//     var event = { "currentTarget": { "dataset": { "id":"{{e.detail.current}}"}}};
//     this.btnclick(event);
//     // this.btnclick.bind(this,e.detail.current)

//   },




//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     console.log('onLoad')
//     var that = this
//     //调用应用实例的方法获取全局数据
//     app.getUserInfo(function(userInfo){
//       //更新数据
//       that.setData({
//         userInfo:userInfo
//       })
//     })
//   }
// })


Page({
  data: {
    currentTab: '',
    datalist: [
      { "id": "0", "img": '../../images/p1_img1.png', "title": ["阳痿", "早泄", "射精障碍", "性交障碍", "勃起障碍", "性生活时间短"] },
      { "id": "1", "img": '../../images/p1_img2.png', "title": ["包皮包茎", "阴茎延长", "包茎", "阴茎增粗", "阴茎弯曲", "尿道下裂"] },
      // { "id": "2", "img": '../../images/p1_img3.png', "title": ["阴虱", "梅毒", "生殖器疱疹", "尖锐湿疣"] },
      { "id": "2", "img": '../../images/p1_img4.png', "title": ["龟头炎", "睾丸炎", "尿道炎", "阴囊湿疹", "龟头红点", "鞘膜积液"] },
      { "id": "3", "img": '../../images/p1_img5.png', "title": ["前列腺炎", "前列腺增生", "尿痛", "小便带血", "前列腺囊肿", "前列腺癌"] },
      { "id": "4", "img": '../../images/p1_img6.png', "title": ["无精","弱精", "少精", "精液不液化", "死精症"] },

    ],
    datalist1: [
      { "id": "0", "img": 'http://fuke.haxfyy.com/lib/img/jkzt_wtrl2.jpg', "title": ["早孕检查", "人流常识", "人流前注意事项", "人流后注意事项", "微微保宫人流术"] },
      { "id": "1", "img": 'http://fuke.haxfyy.com/lib/img/jkzt_byby2.jpg', "title": ["宫颈性不孕", "卵巢性不孕", "子宫性不孕", "习惯性流产", "免疫性不孕", "全身性疾病不孕"] },

      { "id": "2", "img": 'http://fuke.haxfyy.com/lib/img/jkzt_fkyz2.jpg', "title": ["阴道炎", "盆腔炎", "附件炎", "外阴炎", "尿道炎", "输卵管炎"] },
      { "id": "3", "img": 'http://fuke.haxfyy.com/lib/img/jkzt_fkwc2.jpg', "title": ["子宫肌瘤", "卵巢囊肿", "宫外孕", "卵软巢肿瘤", ] },
   

    ],


  },
  /*** 滑动切换tab***/
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  /*** 点击tab切换***/
  swichNav: function (e) {
    var that = this;
    that.setData({
      currentTab: e.currentTarget.dataset.current
    });
   },

  //点击事件处理函数
  cellClick: function (event) {

    var id = event.currentTarget.dataset.id;
    var status = event.currentTarget.dataset.status;

    var obj = {"id":id,"status":status};
    console.log(obj);
    wx.navigateTo({
      url: './detial/detial?data=' + JSON.stringify(obj),
    })

  },

})