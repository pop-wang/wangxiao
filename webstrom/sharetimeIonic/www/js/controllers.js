angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$http,$httpParamSerializerJQLike) {
  $scope.userinfo = {
    username:"",
    password:"",
    phone:""
  };
  $scope.toLogin=function () {
    $http({
      url:"http://localhost:3000/user/login",
      method:"GET",
      data:$httpParamSerializerJQLike($scope.userinfo)
    }).then(function (result) {
      console.log(result);
    });
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope,$http,$httpParamSerializerJQLike) {
  $scope.userinfo = {
    username:"",
    password:"",
    phone:""
  };
  $scope.toRegister=function () {
    console.log($httpParamSerializerJQLike($scope.userinfo))
    $http({
      url:"http://localhost:3000/user/register",
      method:"POST",
      data:$httpParamSerializerJQLike($scope.userinfo),
      headers:{
        "content-type":"application/x-www-form-urlencoded"
      }
    }).then(function (result) {
      console.log(result);
    });
  }
});
