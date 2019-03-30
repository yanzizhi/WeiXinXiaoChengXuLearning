// pages/calculator/calculator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num1: "", //用于保存被加数
    num2: "", //保存加数
    result: "", //保存结果
    slider: 40,
  },

  //“计算”按钮触发事件处理函数
  bindAdd: function(e) {
    let r = this.data.num1 * 1 + this.data.num2 * 1;
    this.setData({
      result: r
    });
  },

  //被加数输入事件处理函数
  bindInput1: function(e) {
    console.log(e);
    let n = e.detail.value;
    if(!isNaN(n)) {
      this.setData({
        num1: n
      });
    }
  },

  //加数输入事件处理函数
  bindInput2: function(e) {
    console.log(e);
    let n = e.detail.value;
    if(!isNaN(n)) {
      this.setData({
        num2: n
      });
    }
  },

  sliderInputing: function(event) {
    // console.log(event);
    this.setData({
      slider: event.detail.value
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