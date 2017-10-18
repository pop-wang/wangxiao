/**
 * Created by CDLX on 2017/8/25.
 */
/*angular.module("papp",["ngRoute"]).config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/",{
            template:"qwed"
        }).when("/find",{
            templateUrl:"findView.html"
        }).otherwise({redirectTo:"/"});
})
.directive("ucai",function () {
    return{
        restrict:"EA",
        // template:"<button>ucai按钮</button>",
        template:"<div><h1>ucai</h1><p>ucai简介</p><ul><li>111</li><li>222</li></ul></div>",
    }
})*/
angular.module("papp",["ngRoute"]).controller("myCtrl",function ($scope,$http) {
    $scope.list=[];
    $scope.sublist=[];
    $http.get("http://route.showapi.com/546-1?showapi_appid=42208&showapi_sign=b1818eeddbd549ca9a6601a750ceb9fb").then(function (response) {
        console.log(response);
        $scope.list=response.data.showapi_res_body.list;
    })
}).config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/",{
        template:"qwed1"
    }).when("/",{
        template:"qwed2"
    }).when("/",{
        template:"qwed3"
    }).when("/",{
        template:"qwed4"
    }).when("/",{
        template:"qwed5"
    }).when("/",{
        template:"qwed6"
    }).when("/",{
        template:"qwed7"
    }).when("/",{
        template:"qwed8"
    }).when("/",{
        template:"qwed9"
    }).when("/",{
        template:"qwed10"
    }).when("/",{
        template:"qwed11"
    }).when("/",{
        template:"qwed12"
    }).when("/",{
        template:"qwed13"
    }).when("/",{
        template:"qwed14"
    }).when("/",{
        template:"qwed15"
    }).when("/",{
        template:"qwed16"
    }).when("/",{
        template:"qwed17"
    })
});