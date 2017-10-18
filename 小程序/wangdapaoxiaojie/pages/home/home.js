// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{ title: "1", message: "11" }, { title: "2", message: "22" }, { title: "3", message: "33" }, { title: "4", message: "44" }, { title: "5", message: "55" }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("用于加载页面的时候调用");//只调用一次，不需要绑定在页面上的数据可以在这个里面初始化
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("用于页面初次加载完成的时候调用");//只调用一次，可以写加载数据的方法
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("用于显示页面的时候调用");//如果设置了比较耗时的任务，可以在这个里面监听完成的状态（关闭等待视图）
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("用于切换页面隐藏页面的时候调用");//看不到页面的时候调用
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    //
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