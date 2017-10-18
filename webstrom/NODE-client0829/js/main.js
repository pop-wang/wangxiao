/*require("http").createServer(function(request,response){
    console.log(require("./other"));
    response.end("hello!");
}).listen(3006);*/
/*var HOST="http://localhost:3000/";
var REGISTER="users/register?username=小米&password=11111";
document.querySelector(".register").onclick=function () {
    var request=new XMLHttpRequest();
    request.open("GET",HOST+REGISTER);
    request.onload=function () {
        console.log(this.response);
    };
    request.send();
}*/
angular.module("app",[]).controller("ctrl",function ($scope,$http,$httpParamSerializerJQLike) {
    $scope.toRegister=function () {
        $http({//$http(里面可以设置请求头)
            url:"http://localhost:3000/user/register",
            method:"POST",
            data:$httpParamSerializerJQLike({
                username:"wangdapao",
                phone:"18729705991"
            }),
            headers:{
                "content-type":"application/x-www-form-urlencoded"
            }
        }).then(function (result) {
            console.log(result);
        });
    };
    $scope.tofindPassword=function () {
        $http.get("http://localhost:3000/user/findPassword?username=xiaoming").then(function (result) {
        console.log(result);
        }).catch(function (error) {
            console.log(error);
        })
    }

})