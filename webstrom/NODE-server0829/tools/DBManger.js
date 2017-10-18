/**
 * Created by CDLX on 2017/9/1.
 */
var DB=require("./DBMangerBase");
var defaultConfig=require("./default")
function DBManger() {

}
DBManger.createUserTable=function () {
    DB.operationDB(defaultConfig.CREATE_USER_TABLE_SQL).catch(function (error) {
        throw error;
    });
};
//用户操作
DBManger.addUser=function (userInfo) {
   return DB.operationDB(defaultConfig.ADD_USER_SQL,defaultConfig.toArray(userInfo)).then(function (result) {

    }).catch(function () {

    });
};
DBManger.searchUser=function () {

};
DBManger.changeUserInfo=function () {

};
DBManger.deleteUser=function () {

};
module.exports=DBManger;