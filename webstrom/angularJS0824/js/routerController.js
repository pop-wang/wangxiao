/**
 * Created by CDLX on 2017/8/24.
 */
angular.module("routercontroller.controller",[]).controller("discoverController",function ($scope) {
    $scope.showInfo=function (info) {
        alert(info);
    }
});