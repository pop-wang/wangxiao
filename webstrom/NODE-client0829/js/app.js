/**
 * Created by CDLX on 2017/8/29.
 */
/*Node
Express->webstrom->提供了这个模板

Node
npm：node的包管理工具->可以下载（发布）基于node的插件
可以使用前端技术去写服务端

Node
模块化开发
模块化开发的三个标准
1.AMD：按需加载
2.CDM：按需加载
3.commanJS：

Node的搭建本地服务器
服务器怎么去访问？
    》通过主机地址加上端口号去访问(localhost:333),在访问本地服务器的时候需要去开启服务器->开启服务器的方法：node 文件名；每一次再修改服务器里面内容的时候，都需要重启下服务器->停止服务器ctrl+c。

$Express是node.js的框架，封装了node.js的一些操作，在node.js中是通过require来引入模块（框架）。
>通过express实现路由：
    》1.require来引入模块：var express = require('express');
    》2.创建express对象：var app = express();
    》3.设置路由：传2个参数（路由的名字/路径，路由的内容《一个函数或者对象》）
        a).Use:可以设置对象或者函数->外层路由需要使用use设置成一个对象：app.use('/', index);
        b).Get/Post（通过router）：只能设置函数，需要先找到路由对象，再去设置具体路由内容，内层路由设置->具体使用这个路由的时候执行的功能：
         var router = require('express').Router();
        router.get('/', function(req, res, next) {
            res.send('respond with a resource');
        });
        module.exports = router;
     req：可以找到客户端发送过来的数据->参数（get：query；post：body）
     res：服务端->客户端传内容的时候使用send（）；

客户端与服务端的关系：
客户端：只要是直接让客户去使用的端口都是客户端，特征就是用来展示数据（让用户间接的操作服务端）
服务端：提供数据，服务的端口，特征就是直接操作数据
    >逻辑：服务：增删改查
    >数据：存储在数据库中的内容，数据依托
        a)Mysql:sql；node.js中操作mysql的框架
        b)MongoDB:
注册的本质：是在数据库中插入一条数据
流程：客户端发送注册的请求->服务端收到->收到后将数据存储到数据库中

使用express-generator创建node工程
Bin/www是服务器的启动文件
Routers：是写服务端API的地方
Localhost:3000/user
    Locahost:3000/user/register
    Locahost:3000/user/login
Localhost:3000/index
Localhost:3000/message
App.js：配置路由的地方

第一个客户端与服务端通讯的API
服务端：
 router.get('/register',function (req,res) {
 console.log(req);
 res.send({
 code:200,
 message:"注册成功",
 data:{
 id:100
 }
 });
 });
客户端：
 var HOST="http://localhost:3000/";
 var REGISTER="users/register";
 document.querySelector(".register").onclick=function () {
 var request=new XMLHttpRequest();
 request.open("GET",HOST+REGISTER);
 request.onload=function () {
 console.log(this.response);
 };
 request.send();
 }
 注意：只要是不同端口或者不同主机地址互相访问数据会出现跨域问题，常见解决跨域问题:Cores(设置允许请求的主机地址origin)||jsonP(json类型数据交换格式)


 ST API文档：
 主机地址：localhost：3000

 用户相关：
 注册：
    API:/users/register
    Method：POST
    Parms：
        username:string
        password:string
        username=小明&password=123
    Response：
        Code:200
        Message:一般是写一个提示，失败的原因
        Data:返回的数据
        {
        Code：2000,
        Message："xxx",
        Data：{}
        }



        Code值参考表
        2000：请求成功
        2001：未传入用户名
*/