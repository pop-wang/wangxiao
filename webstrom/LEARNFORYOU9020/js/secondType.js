/**
 * Created by CDLX on 2017/9/21.
 */
(function () {
    //每一个一级菜单
    function SecondTypeItem(obj) {
        var obj=obj||{};
        this.name=obj.title;
        this.classId=obj.class_id;
        this.courseNum=obj.course_num;
        this.wordNum=obj.word_num;
        this.item=$("<li><h3>"+this.name+"</h3><p>"+this.wordNum+"个</p></li>");
    }
    SecondTypeItem.prototype.itemclick=function (callback) {
        this.item.on("click",this,callback);
        return this;
    }
    function SecondType() {
    }
    SecondType.prototype.createView=function (url,parm,superView,callback) {
        new HTTP().get(url,parm).then(function (result) {
            if(result.showapi_res_code==0){
                result.showapi_res_body.typeList[0].child_list.forEach(function (obj) {

                    superView.append(new SecondTypeItem(obj).itemclick(callback).item);
                });
            }
        });
        return this;
    };
    window.SecondType=SecondType;
    window.SecondTypeItem=SecondTypeItem;
})();