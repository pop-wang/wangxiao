"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by CDLX on 2017/9/15.
 */
function sortName(list) {
    var result = list;
    result.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
    return result;
}
var name = "wangxiao";
var isShow = true;
var list = ["133"];
var info = {};
for (var i = 0; i < 100; i++) {
}
console.log(i); //后面可以继续使用i
//创建一个枚举，比如一些固定的东西我们可以使用枚举类型来定义，可以直观看出参数的值，代码部分的值不用修改
var LoginType;
(function (LoginType) {
    LoginType[LoginType["phone"] = 5] = "phone";
    LoginType[LoginType["wechat"] = 13] = "wechat";
    LoginType[LoginType["qq"] = 14] = "qq";
    LoginType[LoginType["sina"] = 15] = "sina";
})(LoginType || (LoginType = {}));
//使用枚举
console.log(LoginType.qq);
// function  run():number{//规定返回值类型为number
//     return 1;
// }
// function  run():void{//没有返回值
//
// }
function run(name, age) {
    if (age === void 0) { age = 22; }
}
function run1(name, age) {
}
run("wangxiao", 12);
function move() {
    return function () { }; //arrow函数：箭头函数，匿名函数
}
var button = document.querySelector(".button");
button.addEventListener("click", function () {
});
//元祖
var tuple;
tuple = ['hello', 10];
console.log(tuple[0].substr(1));
//symbol:是不可改变且唯一的,保证变量的唯一性，虽然值一样，但是两个变量还是不一样
var name1 = Symbol("xiaoming");
var name2 = Symbol("xiaoming");
console.log(name1 === name2);
//T和any是差不多一样的
function runLoop() { while (true) { } }
var allS = [1, "2"];
