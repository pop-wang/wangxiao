
/**
 * Created by CDLX on 2017/8/28.
 */
//注入ionic模块，包含了ui-router模块
angular.module("app",["ionic"])
  .run(function ($ionicPlatform,$rootScope) {
    //$rootscope:根作用域，所有控制器都可以访问$rootscope里面的内容
    $rootScope.list=[{id:0,title:"1",content:"qq1"},{id:1,title:"2",content:"qq1"},{id:2,title:"3",content:"qq1"},{id:3,title:"4",content:"qq1"},{id:4,title:"5",content:"qq1"}];
  })
  .controller("homeCtrl",function ($scope,$rootScope) {
    $scope.gotoNext=function (info) {
      $rootScope.info=info;
    }
  })
  .config(function ($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
    //设置2个平台（ios和andro）里面的样式保持一致
    $ionicConfigProvider.platform.ios.tabs.style("standard");
    $ionicConfigProvider.platform.ios.tabs.position("bottom");
    $ionicConfigProvider.platform.android.tabs.style("standard");
    $ionicConfigProvider.platform.android.tabs.position("bottom");
    $ionicConfigProvider.platform.android.navBar.alignTitle("center");
  $stateProvider
    //state里面需要传2个参数，第一个参数是路由状态的名字，第二个参数是路由的详细配置
    .state("tab",{
      url:"/tab",//路由锚点的位置，指定锚点的名字
      templateUrl:"templates/tab.html",
      controller:"",
      abstract:true//把分栏设置成母版
    })
    .state("tab.home",{//路由状态的名字,ui-sref="路由状态的名字";href=“#/tab/home(找到模板tab，再找到模板下的home)
      url:"/home",//锚点位置-》跳转的位置
      views:{
        "tab-home":{//视图的名字
          templateUrl:"templates/home.html",//视图模板的位置
          controller:"homeCtrl",
        }
      }
    })
    .state("tab.info",{
    url:"/home/:id",
    views:{
      "tab-home":{
        templateUrl:"templates/info.html",
        controller:"",
      }
    }

  })
    .state("tab.setting",{
      url:"/setting",
      views:{
        "tab-setting":{
          templateUrl:"templates/setting.html",
          controller:"",
        }
      }

    }).state("tab.login",{
      url:"/setting/login",
      views:{
        "tab-setting":{
          templateUrl:"templates/login.html",
          controller:"",
        }
      }
  }).state("tab.score",{
    url:"/setting/score",
    views:{
      "tab-setting":{
        templateUrl:"templates/score.html",
        controller:"",
      }
    }
  }).state("tab.coupon",{
    url:"/setting/score/coupon",
    views:{
      "tab-setting":{
        templateUrl:"templates/coupon.html",
        controller:"",
      }
    }
  })
  ;
  $urlRouterProvider.otherwise("/tab/home");

  }

)
