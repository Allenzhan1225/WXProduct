function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}


module.exports = {
  formatTime: formatTime
};


var index = require('../data/data_index.js') 
var index_next = require('../data/data_index_next.js')
// 获取网络数据
function getData (url) {
  //回调数据，返回一个 Promise  对象
  return new Promise(function (resolve, reject) {
    wx.request({
      url: url,//网址
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success:function(res){
        console.log("request success");
        resolve(res)
      },
      fail:function(res){
        console.log("request fail")
        reject(res)
      }

    })
  }
)
   

}

// 获取首页的数据
function getindexData () {
  return index.index;
}
function getNext() {
  return index_next.next;
}


module.exports.getData = getData;
module.exports.getindexData = getindexData;
module.exports.getData = getData;
module.exports.getNext = getNext;