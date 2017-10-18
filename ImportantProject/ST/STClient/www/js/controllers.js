angular.module('starter.controllers', [])


  .controller('STController', function($scope,MapManager,$ionicModal,HTTPManager,Show,userInfo,$state,$rootScope,resize,dateTool) {

    $scope.isShowContent = false;
    $scope.markerInfo = {};
    $scope.toUserID = 0;
//$state 可以切换路由的位置 go
    var types = ["跑腿","家政","代练","洗车","宠物"];
    $scope.infoModel = {};
    $scope.mapSize = {
      width:innerWidth+"px",
      height:(innerHeight-88)+"px"
    };

    function changeInfoType(info) {
      var newInfo = {};
      newInfo.type = types[parseInt(info.type)];
      newInfo.startTime = new Date(info.startTime).toDateString();
      newInfo.startTimeString = dateTool.toMDH(info.startTime);
      newInfo.endTimeString = dateTool.toMDH(info.endTime);
      return newInfo;
    }
    resize.fullMap($scope);
    function loadNews() {
      HTTPManager.get(HOST+SEARCH_All_USERS_LAST_NEWS).then(function (result) {
        if (result.data.data){
          result.data.data.forEach(function (info) {
            //只要使用回调函数 都需要 更改$rootScope作用域
            //需要使用$apply去更改
            MapManager.addMarker(info,true,function (markerInfo) {
              console.log(markerInfo);
              resize.tabBarSizeControl($rootScope,$scope);
              $scope.$apply(function (scope) {
                scope.toUserID = markerInfo.userID;
                scope.isShowContent = !scope.isShowContent;
                scope.markerInfo = changeInfoType(markerInfo);
              });

              MapManager.pointToAddress(markerInfo.curPoint).then(function (result) {
                $scope.$apply(function (scope) {
                  scope.markerInfo.address = result.address;

                });
              });

            },function () {
              resize.tabBarSizeControl($rootScope,$scope);
              $scope.$apply(function (scope) {
                scope.isShowContent = !scope.isShowContent;
              });
            });
          });
        }
      }).catch(function (error) {
        Show.showAlertDelay(error.message,3);
      });
    }

    loadNews();
    MapManager.showMap();

    $ionicModal.fromTemplateUrl('templates/modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.updateMessage = function () {
      //  如果 用户登录了
      //  查询用户是不是 验证过的
      //true:"0" "null" "undefinded" "NAN" 非0 {} []
      //false: 0 "" null undefinded NAN
      userInfo.getInfo("userid")&&userInfo.getInfo("isValidity")==="true"?$scope.modal.show():$state.go("tab.user");
    };

    $scope.back = function () {
      $scope.modal.hide();
    };

    $scope.toUpdate = function () {

      if ($scope.infoModel.time){
        $scope.infoModel.endTime = $scope.infoModel.time.getTime();
      }
      if ($scope.infoModel.typeStr){
        //将字符串 转成 对应的数据类型
        $scope.infoModel.type = types.indexOf($scope.infoModel.typeStr);
      }
      console.log($scope.infoModel.endTime);
      $scope.infoModel.startTime = new Date().getTime();
      $scope.infoModel.userID = 10;
      MapManager.getCurrentLocation().then(function (point) {
        $scope.infoModel.lat = point.lat;
        $scope.infoModel.lng = point.lng;
        HTTPManager.post(HOST+ADD_NEWS,$scope.infoModel).then(function (result) {
          console.log(result);
          if (result.data.code === 2000){
            $scope.modal.hide();
          }else {
            Show.showAlertDelay(result.data.message,3);
          }
        }).catch(function (error) {
          //  弹出错误提示窗口
          Show.showAlertDelay(error.message,3);
        });
      });
    };

  })

  .controller('FriendsController', function($scope) {

  })

  .controller('RankController', function($scope) {

  })

  .controller('UserController', function($scope,userInfo) {
//  登陆成功
    var info = {userid:11,phone:"happy128906380410",username:"wangdapao",isValidity:true};
    userInfo.saveInfo(info);
  })

  .controller("MessageController",function ($scope,$stateParams,HTTPManager,userInfo,$interval) {

    $scope.messageList=[];
    $scope.friendInfo = {};

    console.log($stateParams.userID);

    HTTPManager.get(HOST+GET_USER_INFO,{userID:$stateParams.userID})
      .then(function (result) {
        console.log(result);
        if (result.data.code === 2000){
          result.data.data.forEach(function (item) {

            $scope.friendInfo = item;

          });
        }
      }).catch(function (error) {

    });

    $scope.size = {
      width:innerWidth+"px",
      height:(innerHeight-44)+"px"
    };

    $scope.sendInfo = {};

    $scope.sendMessage = function () {
      $scope.sendInfo.fromID = userInfo.getInfo("userid");
      $scope.sendInfo.toID = $stateParams.userID;

      console.log($scope.sendInfo);
      HTTPManager.post(HOST+SEND_CHAT,$scope.sendInfo).then(function (result) {
        console.log(result);
        if (result.data.code===2000){
          var info=result.data.data[0];
          info.isReceive=false;
          $scope.messageList.push(info);
        }
      }).catch(function (error) {
        console.log(error);
      });
    };

    function recMessage() {
      HTTPManager.post(HOST+RECEIVE_CHAT,{fromID:userInfo.getInfo("userid"),toID:$stateParams.userID}).then(function (result) {
        console.log(result);
        if(!result.data.data){return;}
        //新接收到的消息
        var info=result.data.data[0];
        //上一次接受到的消息
        var lastChat=$scope.messageList[$scope.messageList.length-1];
        if(lastChat){
          if(lastChat.currentTime!==info.currentTime&&lastChat.isReceive){
            info.isReceive=true;
            $scope.messageList.push(info);
          }
        }else{
          info.isReceive=true;
          $scope.messageList.push(info);
        }
      }).catch(function () {

      });
    }

    // $interval(function () {
    //   recMessage();
    // },3000);


  });


