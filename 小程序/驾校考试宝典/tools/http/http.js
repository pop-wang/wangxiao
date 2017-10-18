function HTTP(){};
HTTP.get=function(url,parm){
  //parm->name=xx&age=xx(对象转换为拼接到url上的参数)
  var parmString="";
  var temp=[];
  for(var key in parm){
    temp.push(key+"="+parm[key])
  }
  var parmString = temp.join("&");
 return new Promise(function(success,fail){
   wx.request({
     url: url + "?" + parmString,
     success: function (result) {success(result) },
     fail: function (error) {fail(error) }
   })
 });
}
HTTP.post = function () {

}
module.exports.HTTP=HTTP;//必须添加HTTP，否则导出就不是一个模块了