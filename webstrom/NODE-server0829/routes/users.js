var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/*request:客户端发送给服务端的内容，
response：服务端回应给客户端的响应
*/
router.get('/register',function (req,res) {
   console.log(req.query);
    var info={};
   if (!req.query.username) {
       info = {
           code: 305,
           message: "注册失败，未传入用户名",
       }
   }else if(req.query.username==="王大炮"){
       info = {
           code: 306,
           message: "注册失败，用户名已存在",
       }
   }else{
       info = {
           code: 307,
           message: "就不让你注册",
       }
   }
   res.send(info);
});
module.exports = router;
