// pages/button/button.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },

  getUserInfo: function(e) {
    let self = this;
    wx.showModal({
      title: '获取用户微信信息',
      content: '用户微信信息仅用于本程序使用，包括用户头像、昵称等',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#ff0000',
      confirmText: '确定',
      confirmColor: '',
      success: function(res) {
        console.log(res);
        if(res.confirm) {
          wx.showToast({
            title: '获取信息成功',
            icon: 'success',
            image: '',
            duration: 1500,
            mask: true,
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })

          self.setData({
            userInfo: JSON.parse(e.detail.rawData)
          })
        } else {
          wx.showToast({
            title: '获取信息失败',
            icon: 'fali',
            image: '',
            duration: 1500,
            mask: true,
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })
        }
        
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    console.log(e.detail.rawData);
    
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