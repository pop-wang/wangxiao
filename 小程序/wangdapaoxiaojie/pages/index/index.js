// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   * 需要绑定到页面上的数据都需要在data里面初始化
   */
  data: {
    title:"标题",
    isShow:true
  },
  /*自定义一个函数
   */
  action: function(event){
    console.log(event.target.dataset.name);//吧界面中的值获取到js中，在wxml中，如果希望触发事件的同事传参数到触发的函数中，可以在wxml中可以还有data-xxx=???来设置要传递的值，在响应的函数中可以通过可以通过event.target.dataset.xxx来获得页面传递过来的值
    console.log("点击");
    this.setData({//如果需要更改data里面的值（都是绑定的xtml中的，需要使用setData去修改，通过this.data直接去获取）
      isShow:!this.data.isShow
    });
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