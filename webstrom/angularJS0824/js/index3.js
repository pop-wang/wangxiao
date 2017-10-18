/**
 * Created by CDLX on 2017/8/24.
 */
angular.module("routerapp",["ngAnimate","ngRoute","routercontroller.controller"]).config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when("/home",{
        // template:"这是首页的内容"
        templateUrl:"view/home.html",
        controller:"",
    });
    $routeProvider.when("/discover",{
        // template:"这是发现的内容"
        templateUrl:"view/discover.html",
        controller:"",
    });
    $routeProvider.when("/model",{
        // template:"这是模块的内容"
        templateUrl:"view/model.html",
        controller:"",
    });
    $routeProvider.when("/design",{
        // template:"这是设计的内容"
        templateUrl:"view/design.html",
        controller:"",
    });
    $routeProvider.otherwise({redirectTo:"/home"});

})