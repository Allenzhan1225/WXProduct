// movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    dataSource:[
      { 'id': 0, 'img': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'content': '这是一部电影', 'url':'https://media.w3.org/2010/05/sintel/trailer.mp4'},
      { 'id': 1, 'img': 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'content': '这是一部电影', 'url': 'https://media.w3.org/2010/05/sintel/trailer.mp4'},
      { 'id': 2, 'img': 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg', 'content': '这是一部电影', 'url': 'https://media.w3.org/2010/05/sintel/trailer.mp4'},
      { 'id': 3, 'img': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'content': '这是一部电影', 'url': 'https://media.w3.org/2010/05/sintel/trailer.mp4' },
      { 'id': 4, 'img': 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'content': '这是一部电影', 'url': 'https://media.w3.org/2010/05/sintel/trailer.mp4'},
      { 'id': 5, 'img': 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg', 'content': '这是一部电影', 'url': 'https://media.w3.org/2010/05/sintel/trailer.mp4'},
      { 'id': 6, 'img': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'content': '这是一部电影', 'url': 'https://media.w3.org/2010/05/sintel/trailer.mp4'},
      { 'id': 7, 'img': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'content': '这是一部电影', 'url': 'https://media.w3.org/2010/05/sintel/trailer.mp4' },
      { 'id': 8, 'img': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'content': '这是一部电影', 'url': 'https://media.w3.org/2010/05/sintel/trailer.mp4' },
      { 'id': 9, 'img': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'content': '这是一部电影', 'url': 'https://media.w3.org/2010/05/sintel/trailer.mp4' },
      { 'id': 10, 'img': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'content': '这是一部电影', 'url': 'https://media.w3.org/2010/05/sintel/trailer.mp4' },

    ]
  },



  handelClick(e){
      const index = e.currentTarget.dataset.index;
      const url = this.data.dataSource[index].url;
      wx.navigateTo({
        url: './movieDetial/movieDetial?url='+url,
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const windowWidth = wx.getSystemInfoSync().windowWidth;
    this.setData({
      windowWidth: windowWidth - 16,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})