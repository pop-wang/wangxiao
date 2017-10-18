var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"myhwork"
});
connection.connect();
/* GET allUsers */
router.get('/allUsers', function(req, res, next) {
  var curPage=parseInt(req.query.page);
  var curPageSize=parseInt(req.query.pageSize);
  var pageNum=(curPage-1)*curPageSize;
  connection.query({
      sql:"SELECT * FROM `users` LIMIT ?,?",
      values:[pageNum,curPageSize]
  },function (error,result) {
      res.send(result);
  });

});

module.exports = router;
