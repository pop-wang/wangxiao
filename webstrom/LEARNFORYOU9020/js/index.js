// /**
//  * Created by CDLX on 2017/9/20.
//  */
var $=jQuery.noConflict();
(function () {
    //每一个一级菜单
    function FirstTypeItem(obj) {
        var obj=obj||{};
        this.name=obj.title;
        this.item=$("<li>"+this.name+"</li>");
    }
    FirstTypeItem.prototype.itemclick=function (callback) {
        this.item.on("click",this,callback);
        return this;
    }
    function FirstType() {
    }
    FirstType.prototype.createView=function (url,parm,superView,callback) {
        new HTTP().get(url,parm).then(function (result) {
            if(result.showapi_res_code==0){
                result.showapi_res_body.typeList.forEach(function (obj) {
                    superView.append(new FirstTypeItem(obj).itemclick(callback).item);
                });
            }
        });
        return this;
    };
    window.FirstType=FirstType;
    window.FirstTypeItem=FirstTypeItem;
})();