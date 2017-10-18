/**
 * Created by CDLX on 2017/9/1.
 */
var mysql=require("mysql");//引入mysql
var sqLConfig={  //数据库配置
    host     : 'localhost',
    user     : 'root',
    database : 'sharetime'
};
var connection=mysql.createConnection(sqLConfig);
connection.connect(function (error) {
    if (error){
        //如果连接错误 重新连接数据库
        connection = mysql.createConnection(connection.config);
        connection.connect();
    }
});



function DBMangerBase() {}
DBMangerBase.connection=connection;
/*使用callback去封装
DBMangerBase.operationDB=function (sql,callback) {
    connection.query(sql,function (error,result) {
        callback(error,result);
    });
};*/
DBMangerBase.operationDB=function(sql,values){
    return new Promise(function (success,fail) {
        if(!sql){
            fail({message:"没有传入sql语句"});
            return;
        }
        connection.query({
            sql:sql,
            values:values
        },function (error,result) {
            error?fail(error):success(result);
        });
    });
};
// DBMangerBase.operationDB("").then(function(){}).catch(function(){});
module.exports=DBMangerBase;//使用的时候需要导出下