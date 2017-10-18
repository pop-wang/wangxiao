/**
 * Created by CDLX on 2017/8/31.
 */
/*node.js&ionic&数据库之间的关系
* ionic工程(或者其他前端的工程)：
    》主要是用于写前端，展示数据界面用的，
    》需要通过API(http这个协议)连接node.js里面的数据库，展示数据库里面的内容

*node.js:可以用它写服务端的代码，
    》它写的内容不需要在这个工程里面使用使用界面去展示，它是用于提供数据给前端工程，
    》在提供数据的时候，还会添加一些逻辑

* 数据库：是用于存储数据的文件，
    》服务端所有的数据，都存放到了这个文件中，
    》服务端不管是任何关于数据的操作，都是直接操作数据库（注册用户，发布新内容，评价）

* 创建数据库：通过可视化界面去创建一个数据库
* 建表：
    1.通过可视化界面去建表
        》用户id一般值会比较大，并且是一个整数，需要使用bigint类型，
        》每一个表里面，都会有一个主键（可以根据这个键来找到整条数据，主键都是不可以修改的）一般userid是主键primary，并且userid需要使用自动增长AI
    2.通过代码去建表
        》1.连接数据库->切换到node.js的项目中
        》2.安装mysql->在项目的终端中执行npm i mysql
        》3.切换到node.js项目中的users中引入mysql模块var mysql=require("mysql")
        》4.创建连接数据库的对象：
        var connection=mysql.createConnection({
        host:"localhost",//数据库的地址
        user:"root",//数据库的用户名，默认是root
        database:"mysql",//数据库的名字
        })
        》5.连接数据库：
        connection.connect(function(error){
            if(error){//如果连接错误，重新连接数据库
              connection=mysql.createConnection(connection.config);
              connection.connect();
            }
        })
        》6.开始建表：不管是建表还是添加删除修改更新数据都是通过query的方法去执行sql语句的
         var createTableSql = "CREATE TABLE `st`.`users` ( `userid` BIGINT NOT NULL AUTO_INCREMENT , `username` VARCHAR(100) NOT NULL , `password` VARCHAR(100) NOT NULL , `phone` VARCHAR(100) NOT NULL , PRIMARY KEY (`userid`), UNIQUE (`username`)) ;";
         connection.query(createTableSql);
         》7.重启服务器就可以建表成功->每一次修改了服务器里面的内容都需要重启才能生效
         》8.切换到数据化的可视化界面，查看是否建表成功

 *短信验证接口：var sms = new Alidayu("23740919","d3c6942a0284362871d11c7c1b8da95c");

 验证流程：
    》1.需要通过阿里大于或者其他的短信服务平台给用户输入的手机发送一条验证码
   》2.监听发送完成的结果，发送短信验证码到前端代码(客户端)里面
   》3.客户端要去匹配用户输入的验证码和我们收到的验证码是否匹配。
   》4.设置验证码多少秒之后失效->清空收到的验证码

   注意：一般短信验证平台都会限制用户发送验证码的次数，阿里大于设置的是一分钟只能发生3次，一小时只能发生20次

   落实的步骤：
   服务端：
    ~需要写一个短信验证的接口
        》1.生成短信验证码
        》2.通过短信验证平台，发送验证码到手机
        》3.发送成功之后，同时发送验证码到客户端(为了让客户端去匹配用户输入的验证码和服务端发过去的验证码是不是匹配)
   客户端：
    ~使用短信验证的接口
        》1.告诉服务端发送一个验证码到哪一个手机号
        》2.需要吧用户输入的验证码和服务端发送过来的验证码进行匹配
        》3.如果匹配成功，就可以让用户注册
* 服务端代码实现：
    1.安装短信服务品台的插件（阿里大于）：npm i alidayu-node
    2.引入阿里大于var App = require('alidayu-node');
        var app = new App('App Key', 'App Secret');
    3.测试：
         app.smsSend({
         sms_free_sign_name: '注册验证',
         sms_param: {"code": "123456", "product": "测试网站"},
         rec_num: '13599999999',
         sms_template_code: 'SMS_640004'
         });


 *数据库操作的封装：数据库操作的基类(执行sql语句的方法)，数据库操作的执行类
  1.用户相关：users.js->负责所有用户相关的操作
    》1.注册：
    》2.登录：
    》3.好友：
  2.文章相关：pages.js->负责所有文章相关的操作
  *  */