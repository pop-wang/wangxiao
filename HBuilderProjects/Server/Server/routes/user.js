
var router = require("express").Router();

//相当于
//在客户端  调用服务端的函数 ->/getPassword 对应的函数
router.get("/getPassword",function (req,res) {
    if (!req.query.username){
        res.send({message:"未传入指定参数"})
        return;
    }
    req.query.username === "xiaoming"?res.send({password:"1111"}):res.send({message:"未查找到用户"});
});

module.exports = router;
