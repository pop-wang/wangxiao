/**
 * Created by CDLX on 2017/8/23.
 */
angular.module("app",[]).controller("homeController",function($scope){
    $scope.age=20;//在homeController这个控制器中定义了一个叫age的数据模型，可以在html中使用指令（ng-bind）展示数据模型
    $scope.list=["张皓","吉星","小白","水手"];
    $scope.user=[{username:"x1",age:20,phone:"123"},{username:"x",age:20,phone:"123"},{username:"x3",age:20,phone:"123"}];
    $scope.nums = [1,2,1,1,1,1,1,1];
    $scope.show=function (num) {
        alert(num);
    }

}).controller("myCtrl",function ($scope){
        $scope.list=[];
        $scope.info={};
        $scope.addAction=function () {
            var container=new noteInfo($scope.info.title,$scope.info.content,$scope.info.price);
            $scope.list.push(container);
            // $scope.list.push($scope.info);
            // $scope.info={};
    }
    $scope.deleteAction=function (index) {
        $scope.list.splice(index,1);
    }
});