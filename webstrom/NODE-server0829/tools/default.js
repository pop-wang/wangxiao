/**
 * Created by CDLX on 2017/9/1.
 */
var defaultConfig={};
//---SQL-------
//用户
defaultConfig.CREATE_USER_TABLE_SQL="CREATE TABLE `sharetime`.`users` ( `userid` BIGINT NOT NULL AUTO_INCREMENT , `username` VARCHAR(255) NOT NULL , `phone` VARCHAR(255) NOT NULL , `password` VARCHAR(255) NOT NULL , PRIMARY KEY (`userid`), UNIQUE (`username`), UNIQUE (`phone`))";
defaultConfig.ADD_USER_SQL="INSERT INTO `users` (`userid`, `username`, `phone`, `password`) VALUES (NULL, ?, ?, ?)";
// [].forEach(function (values) {
//     defaultConfig.CREATE_USER_TABLE_SQL.replace(/\?/g,values);
// })
defaultConfig.toArray=function (obj) {//对象转数组，一定要按照顺序去传
    var result=[];
    for (key in obj){
        result.push(obj[key])
    }
    console.log(result)
    return result;
}
//-------API-------
module.exports=defaultConfig;