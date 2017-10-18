//使用express框架 创建 路由对象
var router = require("express").Router();

var mysql = require("mysql");

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"DB"
});
connection.connect();


// INSERT INTO
// SELECT
// SET
// DELETE

//客户端可以通过（http://localhost:3000/news/allNews）调用服务端function (req,res) {｝
router.get("/allNews",function (req,res) {

    var curPage = parseInt(req.query.page);
    var curPageSize = parseInt(req.query.pageSize);

    var pageNum = (curPage-1)*curPageSize;

    console.log(pageNum,curPageSize);
    connection.query({
        sql:"SELECT * FROM `news` LIMIT ?,?",
        values:[pageNum,curPageSize]
    },function (error,result) {
        console.log(error);
        res.send(result);
    });
});


// page 1
// pageSize 5

// 5
// 5
//
// 1 2 3 4 5
// 6 7 8 9 10
// SELECT * FROM `news` LIMIT page-1,pageSize
// SELECT * FROM `news` LIMIT (page-1)*5,pageSize
//
// SELECT * FROM `news` LIMIT ?,?

//通过路由的名字 找到这个函数
router.get("/",function () {
    console.log("OK~");
});

router.get("/getNews",function (req,res) {
    req.query.type?res.send({message:"123"}):res.send({message:"456"});
});







module.exports = router;

// module.exports = "xxewret2353";
