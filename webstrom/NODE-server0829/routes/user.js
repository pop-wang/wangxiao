/**
 * Created by CDLX on 2017/8/30.
 */
var Alidayu=require("alidayu-node");//1.引入阿里大于模块，返回一个类
var alidayu=new Alidayu("23740919","d3c6942a0284362871d11c7c1b8da95c");//2.创建一个阿里大于对象（初始化下它）,id和secret都需要在控制台中找

var dbManger=require("../tools/DBManger");
try{
    dbManger.createUserTable();
}catch(error){
    console.log(error);
}
//使用数据库
var router=require("express").Router();
router.get("/",function (req,res) {
    res.send({
        message:"Hello,Miss Wang"
    })
});

//3.写一个短信验证接口
router.get("/smsCode",function (req,res) {
    //随机生成短信验证码。判断有没有传入手机号，如果传入就开始发送验证码到手机，发送成功之后，吧验证码发送到客户端。
    //生成6位的验证码
    var numCode=null;
    var arr=[];
    for (var i=0;i<6;i++) {
	    arr.push(parseInt(Math.random()*10));
    }
    numCode=arr.join("");
    var info= req.query.phone?{code:2000,message:"成功",data:{smsCode:"123123"}}:{code:3000,message:"未传入手机号"};
    res.send(info);
    //
    alidayu.smsSend({
        sms_free_sign_name: '我的小秘书',//短信签名
        sms_param: {"code": numCode, "product": "ST"},//模板里面的变量
        rec_num: '18612962314',//接收的手机号
        sms_template_code: 'SMS_60420032'//模板
    },function () {
       console.log(arguments);//接收到发送的结果
    });
});

//4.注册：本质是在数据库中插入一条数据
//url：主机地址+外层路由地址+当前路由地址：www.localhost:3000/user/register
router.post("/register",function (req,res) {
    console.log(req.body)
    // console.log(req.body);//post方法通过req.body获得客户端传过来的数据
    if(!req.body.username||!req.body.password||!req.body.phone){
        res.send({
            code:3000,
            message:"请传入完整的参数，需要包含username，password，phone"
        });
        return;
    }
    dbManger.addUser(req.body).then(function (result) {
        // console.log(result)
        res.send({
            code:2000,
            message:"注册成功"
        })
    }).catch(function (error) {
        console.log(error);
        res.send({
            code:3001,
            message:"注册失败"
        })
    });
})
//5.登录模块，使用get请求
router.get("/login",function (req,res,next) {
    console.log(req.query);
    connection.query("SELECT * FROM `users` WHERE `username` = '"+req.query.username+"' AND `password` = '"+req.query.password+"' AND `phone` = '"+req.query.phone+"'",function (error,result) {
        error?res.send({
            code:3000,
            message:"登录失败",
            data:error
        }):res.send({
            code:2000,
            message:"登录成功"
        })
    });
})

//!!!找回密码
router.get("/findPassword",function (req,res) {
    req.query.username="xiaoming"?res.send({password:"1111"}):res.send({message:"用户名错误"})
});


module.exports=router;//导出这个模块，整个js文件就代表这个模块，如果在别的地方需要使用这个模块，引入的时候是使用require("这个文件路径")