var rootDocment = 'http://yxtest.xgyuanda.com/';//你的域名  
function req(url, data, cb) {
  wx.request({
    url: rootDocment + url,
    data: data,
    method: 'POST',
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    success: function (res) {
      return typeof cb == "function" && cb(res.data)
    },
    fail: function () {
      wx.showToast({
        title: res,
        duration: 1500
      })
      return typeof cb == "function" && cb(false)
    }
  })
}

function reqGet(url, cb) {
  console.log(rootDocment + url);
  wx.request({
    url: rootDocment + url,
    method: 'GET',
    header: { 'Content-Type': 'application/json' },
    success: function (res) {
      return typeof cb == "function" && cb(res.data)
    },
    fail: function (res) {
      wx.showToast({
        title: res,
        duration: 1500
      })
      return typeof cb == "function" && cb(false)
    }
  })
}


module.exports = {
  req: req,
  reqGet:reqGet
}