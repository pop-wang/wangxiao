/**
 * Created by CDLX on 2017/8/23.
 */
angular.module("app.service",[]).service("_timeout",function () {
   this.run=function (scope) {
       setTimeout(function () {
          scope.$apply(function (s) {
              s.username="小明";
          })
       },1000);
   }
}).service("DateTool",function () {
    this.toTimeStamp=function (date) {
        return date.getTime();
    }
});