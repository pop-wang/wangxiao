/**
 * Created by CDLX on 2017/9/20.
 */
function HTTP(){};
HTTP.prototype.get=function(url,parm){
    //parm->name=xx&age=xx(对象转换为拼接到url上的参数)
    var parmString="";
    var temp=[];
    for(var key in parm){
        temp.push(key+"="+parm[key])
    }
    var parmString = temp.join("&");
    return new Promise(function(success,fail){
        $.get({
            url: url + "?" + parmString,
            success: function (result) {
                success(result);
            },
            fail: function (error) {
                fail(error);
            }
        })
    });
}
HTTP.post = function () {

}
