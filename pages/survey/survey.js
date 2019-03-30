// pages/survey/survey.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImgUrl: [
      "../../static/images/01.jpg",
      "../../static/images/04.jpg",
      "../../static/images/02.jpg",
    ],
    regions: [
      {name: 'CHN', value: '中国', checked: 'true'},
      {name: 'USA', value: '美国'},
      {name: 'BRA', value: '巴西'},
      {name: 'ENG', value: '英国'},
      {name: 'TUR', value: '法国'}
    ],
    time: '08:00',
    date: '2016-11-1',
    suggest: '',
  },

  formSubmit: function(event) {
    console.log("--------------------提交表单-------------------------");
    wx.showLoading({
      title: '提交数据',
    });
    setTimeout( () => {
      wx.hideLoading()
    }, 1000)
    console.log(event.detail.value);
  },

  formReset: function(event) {
    console.log("form发生了reset事件");
  },

  bindDateChange: function(event) {
    console.log(event.detail.value);
    this.setData({
      date: event.detail.value
    })
  },
  bindTimeChange: function(event) {
    console.log(event.detail.value);
    this.setData({
      time: event.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    });
    setTimeout(() => {
      wx.hideLoading();
    }, 300);
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