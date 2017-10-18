/**
 * Created by CDLX on 2017/8/23.
 */
angular.module("app.controller",[]).controller("homeCtrl",function ($scope,$timeout,$interval,_timeout,DateTool,$http) {
    $scope.username="xiaoming";
    $scope.$watch("username",function (oldValue,newValue) {
        console.log(oldValue,newValue);
    });
    setTimeout(function () {
        $scope.$apply(function (scope) {
            scope.username="小明";
        })
    },3000);
   /* $timeout(function () {
        $scope.username="小明";
    },3000);
    $interval(function () {
        $scope.username="小明"+Math.random();
    },3000);*/
   console.log(DateTool.toTimeStamp(new Date()));
   $http.get("js/noteInfo.js").then(function (response) {
       console.log(response);
   })
});