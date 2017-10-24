//index.js
//获取应用实例
var bmap = require('../../libs/bmap-wx.js'); 
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    city:'',  
    hasLocation:false,//是否获取到定位信息
    weatherData:'',//天气信息
    apiHost:app.func.apiHost,
    text: '这是一条会滚动的文字滚来滚去的文字跑马灯，哈哈哈哈哈哈哈哈',
    marqueePace: 1,//滚动速度
    marqueeDistance: 0,//初始滚动距离
    marqueeDistance2: 0,
    marquee2copy_status: false,
    marquee2_margin: 160,
    size: 14,
    orientation: 'left',//滚动方向
    interval: 20, // 时间间隔
    listTitle:[
      '快速问答',
      '热门问题',
      '最新视频',
      '附近医院'
    ],

    imgUrls: [],
    indicatorDots: true,//是否显示小圆点
    autoplay: true, //是否自动播放
    interval2: 3000,//动画间隔
    duration: 1000,//动画时长
    circular: true, //动画是否衔接
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    },
    userInfo: {
      username:"allen",
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 获取轮播数据
  loadData(){
    var that = this;
    app.func.reqGet('Api/index',function(res){
      console.log(res);
      that.setData({
          imgUrls:res,
      })
    })
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this

    this.loadData();
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    });
    // 获取当前的经纬度
    wx.getLocation({
      type: 'wgs84', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        console.log(res);
        // console.log(page);
        console.log(that);
        //获得当前经维度
        var latitude = res.latitude
        var longitude = res.longitude
        //获取当前城市名称
        that.getCurrentCity(latitude,longitude);
        //获取天气
        that.getTodayWeather(latitude, longitude);
      }
    })
  },
  //获取城市名称
  getCurrentCity(lat,long){
    var that = this
    wx.request({
      url: 'https://api.map.baidu.com/geocoder/v2/?ak=It8Tspe1qUkvqAYmDbtAe2d66zGXUimc&location=' + lat + ',' + long + '&output=json',
      data: {},
      header: { 'Content-Type': 'application/json' },
      success: function (res) { 
        // success console.log(res);
        console.log(res);
        var city=res.data.result.addressComponent.city; 
        console.log(city);
        wx.setStorageSync("currentCity", city);
        that.setData({city:city}); 
      },
      fail: function() { 
          // fail 
      }, 
      complete: function() {
        // complete
      } 
                  
     })
  },

  getTodayWeather(lat, long){
    var that = this;
    wx.request({
      url: 'https://api.map.baidu.com/telematics/v3/weather?ak=It8Tspe1qUkvqAYmDbtAe2d66zGXUimc&location=' + long + ',' + lat + '&output=json',
      data: {},
      header: { 'Content-Type': 'application/json' },
      success: function (data) {
        let res = data["data"];

        console.log("天气信息");
        console.log(res);
        let weatherArr = res["results"];
        let  weatherData = {
          currentCity: weatherArr[0]["currentCity"],
          pm25: weatherArr[0]["pm25"],
          date: weatherArr[0]["weather_data"][0]["date"],
          temperature: weatherArr[0]["weather_data"][0]["temperature"],
          weatherDesc: weatherArr[0]["weather_data"][0]["weather"],
          wind: weatherArr[0]["weather_data"][0]["wind"]
        };


        weatherData = 'PM2.5：' + weatherData.pm25 + '日期：' + weatherData.date + '温度：' + weatherData.temperature + '天气：' + weatherData.weatherDesc + '风力：' + weatherData.wind + '\n';
        that.setData({
          weatherData: weatherData
        });
        console.log("天气数据是%s", weatherData);
        
      },
      fail: function () {
        // fail 
      },
      complete: function () {
        // complete
      }
    })
  },
  // 获取天气
  // getTodayWeather(){
  //   var that = this;
  //   // 新建百度地图对象 
  //   var BMap = new bmap.BMapWX({
  //     ak: 'It8Tspe1qUkvqAYmDbtAe2d66zGXUimc'
  //   });
  //   var fail = function (data) {
  //     console.log("获取天气信息失败：");
  //     console.log(data);
  //   };
  //   var success = function (data) {
      
  //     var weatherData = data.currentWeather[0];
  //     weatherData = 'PM2.5：' + weatherData.pm25 + '日期：' + weatherData.date +  '温度：' + weatherData.temperature +  '天气：' + weatherData.weatherDesc +  '风力：' + weatherData.wind + '\n';
  //     that.setData({
  //       weatherData: weatherData
  //     });
  //     console.log("天气数据是%s",weatherData);
     
  //   }
  //   // 发起weather请求 
  //   BMap.weather({
  //     fail: fail,
  //     success: success
  //   }); 
  // },


  onShow: function () {
    // 页面显示
    var vm = this;
    var length = vm.data.text.length * vm.data.size;//文字长度
    var windowWidth = wx.getSystemInfoSync().windowWidth;// 屏幕宽度
    vm.setData({
      length: length,
      windowWidth: windowWidth,
      marquee2_margin: length < windowWidth ? windowWidth  - length : vm.data.marquee2_margin//当文字长度小于屏幕长度时，需要增加补白
    });
    // vm.run1();// 水平一行字滚动完了再按照原来的方向滚动
    vm.run2();// 第一个字消失后立即从右边出现
  },
  run1: function () {
    var vm = this;
    vm.interval = setInterval(function () {
      if (-vm.data.marqueeDistance < vm.data.length ) {
        vm.setData({
          marqueeDistance: vm.data.marqueeDistance - vm.data.marqueePace,
        });
      } else {
        clearInterval(interval);
        vm.setData({
          marqueeDistance: vm.data.windowWidth
        });
        vm.run1();
      }
    }, vm.data.interval);
  },
  run2: function () {
    var vm = this;
    vm.interval = setInterval(function () {
      if (-vm.data.marqueeDistance2 < vm.data.length) {
        // 如果文字滚动到出现marquee2_margin=30px的白边，就接着显示
        vm.setData({
          marqueeDistance2: vm.data.marqueeDistance2 - vm.data.marqueePace ,
          marquee2copy_status: vm.data.length + vm.data.marqueeDistance2 <= vm.data.windowWidth + vm.data.marquee2_margin,
        });
      } else {
        if (-vm.data.marqueeDistance2 >= vm.data.marquee2_margin) { // 当第二条文字滚动到最左边时
          vm.setData({
            marqueeDistance2: vm.data.marquee2_margin // 直接重新滚动
          });
          clearInterval(vm.interval);
          vm.run2();
        } else {
          clearInterval(vm.interval);
          vm.setData({
            marqueeDistance2: -vm.data.windowWidth
          });
          vm.run2();
        }
      }
    }, vm.data.interval);
  },


  // 点击事件
  bindtap:function (e){
    
    const index = e.currentTarget.dataset.index;
    console.log(index);
    switch(index){
      case '0':
      //快速问答
        wx.navigateTo({
          url: './consult/consult',
        }) 
      break;
      case '1':
        //热门问题
        wx.navigateTo({
          url: './hotQuestion/hotQuestion',
        }) 
        break;
      case '2':
      // 最新视频
        wx.navigateTo({
          url: './movie/movie',
        }) 
        break;
      case '3':

        const that = this;
        app.func.reqGet('Api/index/hospital_yx?j_address=' + this.data.city, function (res) {
          console.log(res);
          if (res.status == 0) {
            that.setData({
              isHasHospital: false,
            })
         
            wx.navigateTo({
              url: './hotQuestion/hotQuestion?hasHosptal='+"false",
            }) 
          }else{
            //附近医院
            wx.navigateTo({
              url: './nearbyHospital/nearbyHospital',
            }) 
          }

        })


       
        break;
      default:
        break;
    }
    
  },




  //隐藏时 停止定时器
  onHide(){
    clearInterval(this.interval);  
  },
  onUnload(){
    clearInterval(this.interval);  
  }



   

})
