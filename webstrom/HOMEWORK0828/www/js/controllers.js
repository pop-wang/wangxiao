angular.module('starter.controllers', ["ionic"])
  .run(function ($ionicPlatform,$rootScope) {
    $rootScope.mainlist=[];
    $rootScope.sublist=[];
  })
.controller('DashCtrl', function($scope,$http,$rootScope) {
  $http.get("http://route.showapi.com/546-1?showapi_appid=42208&showapi_sign=b1818eeddbd549ca9a6601a750ceb9fb").then(function (result) {
    $rootScope.mainlist=result.data.showapi_res_body.list;
  });
  $scope.gotoNext=function (info) {
    $rootScope.info=info;
    $rootScope.sublist=info.subList;
  }

})
.controller('DashDetailCtrl', function($scope, $rootScope){})

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

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
