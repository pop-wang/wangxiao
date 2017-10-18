// pages/detail/detail.js
var HTTP = require('../../tools/http/http.js').HTTP;
var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas:[],
    randActive:"randActive",
    chooseType:""
  },
  chooseQuestion:function(event){
    console.log(event);
    app.result=event.target.dataset.info;
  },
  loadData:function(testType){
    wx.showLoading({
      title: '正在加载中...',
      mask:true
    });
    HTTP.get(app.API, { key: app.KEY, testType: testType, subject: this.parm.subObj, model: this.parm.type}).then(function(result){
      console.log(result);
      this.setData({
        datas:result.data.result
      });
      wx.hideLoading();
      wx.stopPullDownRefresh();//成功之后调用下下拉刷新的方法
    }.bind(this)).catch(function(error){
      wx.hideLoading();
      wx.showLoading({
        title: '加载错误...',
        mask: true
      });
      setTimeout(function(){
        wx.hideLoading();
      },3000);
    });
  },
  chooseType:function(event){
    this.type = event.target.dataset.type;
    this.setData({
      randActive: this.type=="rand"?"randActive":"",
      chooseType: this.type=="order"?"orderction":""
    });   
    this.loadData(event.target.dataset.type);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.parm=options;
    this.type="rand";
    this.loadData("rand");
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
    this.loadData(this.type);
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