// pages/media/media.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: {
      poster: '../../static/images/04.jpg',
      name: '富士山下',
      author: '陈奕迅',
      src: '../../static/media/001.mp3',
    },
    audioAction: {
      method: "pause"
    }
  },

  bindPlay: function(e) {
    console.log(e);
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
    this.adContr = wx.createAudioContext("audio1", this);
    console.log(this.adContr);
  },

  audioPlay: function() {
    this.adContr.play();
  },

  audioPause: function() {
    this.adContr.pause();
  },

  audio20: function() {
    this.adContr.seek(20);
    this.adContr.play();
  },

  audioStart: function() {
    this.adContr.seek(0);
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