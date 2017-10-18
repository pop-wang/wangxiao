/**
 * Created by CDLX on 2017/8/23.
 */
angular.module("app.sickctrl",[]).controller("myCtrl",function ($scope,$http) {
    $scope.typeList=[];
    $scope.subTypeList=[];
    $http.get("http://route.showapi.com/546-1?showapi_appid=42208&showapi_sign=b1818eeddbd549ca9a6601a750ceb9fb").then(function (response) {
        console.log(response);
        $scope.typeList=response.data.showapi_res_body.list;
    });
    $scope.toSubType=function (info) {
        console.log(info);
        $scope.subTypeList=info.subList;
    };
});