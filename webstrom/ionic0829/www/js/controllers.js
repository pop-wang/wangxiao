var API = "http://route.showapi.com/970-1?showapi_appid=42209&showapi_sign=3ce6b3fcee8443ccb51cbf7c046f30ff&page=";

angular.module('starter.controllers', [])
  .controller('DashCtrl', function($scope,$http,$ionicLoading,$ionicPopup,$ionicActionSheet) {
  var pageIndex = 1;
  $scope.datas = [];
    $scope.waring = function (info) {
      $ionicPopup.alert({
        title:"警告",
        template:info,
        okText:"可以",
        okType:"button-calm"
      }).then(function () {
        alert(info);
      });

      $ionicActionSheet.show({
        buttons: [
          { text: '<b>Share</b> This' },
          { text: 'Move' },
          {text:"另一个"}
        ],
        destructiveText: 'Delete',
        titleText: 'Modify your album',
        cancelText: 'Cancel',
        buttonClicked: function(index) {
          console.log(index);
          switch (index){
            case 0:
              console.log("zhuce");
              break;
            case 1:
              console.log("denglu");
              break;
            case 2:
              console.log("zhuye");
              break;
          }
          return true;
        },
        destructiveButtonClicked:function () {
          console.log("警告");
        }
      });
    };
  $scope.loadData = function () {
    $ionicLoading.show({
      template:"正在加载",
      duration:5*1000
    });
    $http.get(API+(pageIndex++)).then(function (result) {
      console.log(result);
      $scope.datas = result.data.showapi_res_body.pagebean.contentlist;
      $scope.$broadcast('scroll.refreshComplete');
      // $ionicLoading.hide();
    });
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
