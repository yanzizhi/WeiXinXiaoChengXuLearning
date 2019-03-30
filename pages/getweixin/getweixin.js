// pages/getweixin/getweixin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {},
    phoneNum: null,
  },

  inputPhoneNum: function(e) {
    console.log(e);
    this.setData({
      phoneNum: e.detail.value,
    })
  },

  getweixinTap: function() {
    let self = this;
    self.setData({
      info: {},
    })
    if(isNaN(self.data.phoneNum)) {
      wx.showModal({
        title: '错误',
        content: '电话号码为数字',
        showCancel: false,
        cancelText: '',
        cancelColor: '',
        confirmText: '确定',
        confirmColor: '',
        success: function(res) {
          self.setData({
            phoneNum: ''
          })
        },
        fail: function(res) {},
        complete: function(res) {},
      })
    } else if (self.data.phoneNum.length < 11) {
      wx.showModal({
        title: '号码错误',
        content: '手机号码为11位数字',
        showCancel: false,
      })
    } else {
      wx.request({
        url: 'https://route.showapi.com/6-1',
        data: {
          showapi_appid: '88530',
          showapi_sign: '0d98a48996b84902b8aa580b63103173',
          num: self.data.phoneNum,
        },
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          console.log(res);
          if (res.data.showapi_res_body.remark !== '') {
            wx.showModal({
              title: '找不到手机归属地',
              content: '请检查电话号码是否正确',
              showCancel: false,
              cancelText: '',
              cancelColor: '',
              confirmText: '确定',
              confirmColor: '',
              success: function(res) {},
              fail: function(res) {},
              complete: function(res) {},
            })
          } else {
            console.log(res.data.showapi_res_body);
            self.setData({
              info: res.data.showapi_res_body,
            })
          }
        }
      })
    }
    
    
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