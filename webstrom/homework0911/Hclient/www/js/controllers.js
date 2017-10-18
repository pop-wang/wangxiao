angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$http,$ionicLoading) {
  $scope.list=[];
  var i=1;
  $scope.loadData = function () {
    $ionicLoading.show({
      template:"正在加载",
      duration:1*1000
    });
    $http.get("http://localhost:3000/users/allUsers?page="+i+"&pageSize=2").then(function (result) {
      $scope.list=result.data;
      console.log($scope.list);
    }).catch(function (error) {
      console.log(error);
    });
    $scope.$broadcast('scroll.refreshComplete');
    i++;
  };
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

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
