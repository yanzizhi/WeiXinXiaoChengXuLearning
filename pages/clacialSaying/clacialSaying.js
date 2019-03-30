// pages/clacialSaying/clacialSaying.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyWord: '春天',
    contentlist: [],
    warning: ''
  },

  inputTap: function(e) {
    console.log(e.detail.value);
    this.setData({
      keyWord: e.detail.value,
    })
  },
  getClacialSaying: function(e) {
    let self = this;
    self.setData({
      contentlist: [],
    })
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'http://route.showapi.com/1646-1',
      data: {
        showapi_appid: '88530',
        showapi_sign: '0d98a48996b84902b8aa580b63103173',
        name: self.data.keyWord,
        page: '1',
      },
      success: function(res) {
        console.log(res.data.showapi_res_body.result.contentlist);
        if (res.data.showapi_res_body.result.contentlist.length == 0) {
          self.setData({
            warning: "未找到相关语录..."
          });
          wx.hideLoading();
        } else {
          self.setData({
            contentlist: res.data.showapi_res_body.result.contentlist,
            warning: ''
          });
          wx.hideLoading();
        }
        
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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