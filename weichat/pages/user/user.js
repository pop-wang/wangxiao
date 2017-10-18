// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    answer:null,
    isShow:true,
    questionData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadData();
  },
  loadData:function(){
    var questionItem=[];
    wx.request({
      url: 'http://api.avatardata.cn/Jztk/Query?key=4d829b44867a4a659368da4c799e689e&subject=4&model=c1',
      success:function(result){
        questionItem=result.data.result;
        console.log(questionItem);
        this.setData({
          questionData:questionItem
        });        
      }.bind(this)
    })
  },
  checked:function(e){
    this.setData({
      answer: e.detail.value    
    });
    console.log(this.data.answer);
    this.data.answer == this.data.questionData.answer?wx.showModal({
      title: '提示',
      content: '选择正确',
    }):wx.showModal({
      title: '提示',
      content: '选择错误',
    });
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