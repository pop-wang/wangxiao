// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //表示行数和列数
    row:2,
    //所有色块的数据数组
    colorViewDatas:[]
  },

  /**
   * 加载游戏数据的函数
   */
  loadGameDatas:function(){
    //所有游戏数据的临时数组
    var tempList=[];
    //开始处理数据:给这个临时数组添加元素，具体添加多少个由row决定,每次重新加载数据需要row自加，根据现在的行数，添加row*row的数
    //总的色块数
    var allNum = this.data.row * this.data.row;
    //随机色块的下标
    var specialIndex = parseInt(Math.random() * allNum);
    //随机颜色
    var r = parseInt(Math.random() * 256);
    var g = parseInt(Math.random() * 256);
    var b = parseInt(Math.random() * 256);
    var color="rgb("+r+","+g+","+b+")";
    //小程序认为所有设备的整个宽度都是750rpx
    var deviceWidth=750;
    //每一个色块的间距，假设为色块宽度的十分之一
    var space=deviceWidth/this.data.row*0.1;
    //计算每一个色块的宽度
    var width = (deviceWidth-(this.data.row+1)*space)/this.data.row;
    for (var i = 0; i < allNum ;i++){  
      //可以根据随机的下标确定透明度，从而确定其是不是特殊色块
      var info = { aph:specialIndex==i?0.6:1, width:width+"rpx", height:width+"rpx", background:color, space:space};
      tempList.push(info);
    }

    //把处理完成的数据数组放到属性里面
    this.setData({
      colorViewDatas:tempList
    });
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadGameDatas();
  },
  chooseColorView:function(event){
  //点击色块获取不透明度的值，判断是否是特殊色块，是特殊色块this.data.row++;不是的话this.data.row=2
    var opacity=event.target.dataset.opacity;
    if(opacity!=1){
      //透明度不是1它就是一个特殊色块
      this.setData({
        row:++this.data.row
      });
    }else{
      //不是一个特殊色块
      this.setData({
        row: 2
      });
    }
    this.loadGameDatas();
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