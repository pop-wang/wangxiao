var express = require('express');
var router = express.Router();
var DBManager = require("../tools/DBManager");
var defaultInfo = require("../tools/default");



var pingpp = require('pingpp')('app_nLGOa9880SiHzPmL');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/register",function (req,res) {
});

router.post("/test",function (req,res) {
    pingpp.charges.create({
        subject: "ST",
        body: "Your Body",
        amount: 100,
        order_no: "123456789",
        channel: "upacp",
        currency: "cny",
        client_ip: "127.0.0.1",
        app: {id: "app_1Gqj58ynP0mHeX1q"}
    }, function(err, charge) {
        // 异步调用
        console.log(err,charge);
    });
});

router.get(defaultInfo.GET_USER_INFO,function (req,res) {
  if (req.query.userID){
    DBManager.getUserInfo([req.query.userID]).then(function (result) {
    if (result){
        defaultInfo.SEARCH_USER_SUCCESS.data = result;
        res.send(defaultInfo.SEARCH_USER_SUCCESS);
    }
    }).catch(function (error) {
        res.send(defaultInfo.ERROR_SEARCH_USER_FAIL);
    });
  }else {
    res.send(defaultInfo.ERROR_NOT_VALIDITY_PARAM);
  }
});

module.exports = router;
