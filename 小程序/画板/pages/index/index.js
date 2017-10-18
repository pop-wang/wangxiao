// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  drawStart:function(event){
    console.log(event);
    this.context=wx.createContext();
    this.context.setStrokeStyle('white');
    this.beginPoint={
      x:event.touches[0].x,
      y: event.touches[0].y,
    };
  },
  drawMove:function(event){
    this.context.moveTo(this.beginPoint.x, this.beginPoint.y);
    this.context.lineTo(event.touches[0].x, event.touches[0].y);
    this.beginPoint = {
      x: event.touches[0].x,
      y: event.touches[0].y,
    };
    this.context.stroke();
    wx.drawCanvas({
      canvasId: "draw_container",
      actions:this.context.getActions(),
      reserve:true
    });
  },
  
  drawEnd:function(event){

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