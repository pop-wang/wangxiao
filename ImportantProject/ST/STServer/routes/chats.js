/**
 * Created by CDLX on 2017/9/8.
 */
var defaultInfo = require("../tools/default");
var DBManager = require("../tools/DBManager");

var router = require("express").Router();

//发送消息
router.post(defaultInfo.SEND_CHAT,function (req,res) {

    console.log("....",req.body);
    if (req.body.fromID&&req.body.toID&&req.body.message){
        var time = new Date().getTime();
        var body = [req.body.fromID,req.body.toID,req.body.message,time];
        DBManager.sendChat(body).then(function (result) {
            console.log("send",result);
            defaultInfo.CHAT_SEND_SUCCESS.data = [{fromID:req.body.fromID,toID:req.body.toID,currentTime:time}];
            res.send(defaultInfo.CHAT_SEND_SUCCESS);
        }).catch(function (error) {
            console.log(error);
            res.send(defaultInfo.ERROR_CHAT_SEND_FAIL);
        });
    }else {
        res.send(defaultInfo.ERROR_NOT_VALIDITY_PARAM);
    }
});

//接收消息
router.post(defaultInfo.RECEIVE_CHAT,function (req,res) {
    receiveChat(DBManager.receiveChat,req,res);
});
//接收单条消息
router.post(defaultInfo.RECIVE_SIGLE_CHAT,function (req,res) {
    receiveChat(DBManager.receiveChat,req,res);
});
function receiveChat(chatFun,req,res) {
    if (req.body.fromID&&req.body.toID){
        chatFun([req.body.fromID,req.body.toID]).then(function (result) {
            console.log(result);
            defaultInfo.CHAT_SEND_SUCCESS.data = result;
            res.send(defaultInfo.CHAT_SEND_SUCCESS);
        }).catch(function () {
            res.send(defaultInfo.ERROR_CHAT_SEND_FAIL);
        });
    }else {
        res.send(defaultInfo.ERROR_NOT_VALIDITY_PARAM);
    }
}
module.exports = router;