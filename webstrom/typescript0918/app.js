"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by CDLX on 2017/9/18.
 */
var Person = /** @class */ (function () {
    function Person() {
        this.name = ""; //私有的，自己可以访问，子类不可以访问
        this.age = 30; //受保护的，自己和子类都可以访问
    }
    ;
    Object.defineProperty(Person.prototype, "getName", {
        get: function () {
            if (this.age > 30) { }
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Person.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var China = /** @class */ (function (_super) {
    __extends(China, _super);
    function China() {
        return _super.call(this) || this;
    }
    China.prototype.move = function () {
        console.log(this.age + "岁" + this.getName + "在移动");
    };
    return China;
}(Person));
var xiaoMing = new China();
xiaoMing.setName = "小明";
xiaoMing.move();
//注意红路灯 现在是 xxxx灯 您可以走 停 等
var Chinese = /** @class */ (function () {
    function Chinese() {
    }
    Chinese.prototype.action = function (type) {
        var deng = "红";
        var actionType = "停";
        switch (type) {
            case 0:
                deng = "红";
                actionType = "停";
                break;
            case 1:
                deng = "绿";
                actionType = "行";
                break;
            case 2:
                deng = "黄";
                actionType = "等";
                break;
            default:
                deng = "黑";
                actionType = "退";
        }
        console.log("注意红路灯 现在是 " + deng + "灯 您可以" + actionType);
    };
    ;
    Chinese.prototype.red = function () {
        this.action(0);
    };
    ;
    Chinese.prototype.green = function () {
        this.action(1);
    };
    ;
    Chinese.prototype.yellow = function () {
        this.action(2);
    };
    ;
    return Chinese;
}());
var XiAn = /** @class */ (function (_super) {
    __extends(XiAn, _super);
    function XiAn() {
        var _this = _super.call(this) || this;
        _this.city = "西安";
        return _this;
    }
    ;
    XiAn.prototype.black = function () {
        this.action(3);
    };
    XiAn.CityName = "西安";
    return XiAn;
}(Chinese));
new Chinese().red();
console.log(new XiAn().city);
console.log(XiAn.CityName); //静态属性（static）类直接利用类名访问
//基类（基础类）：不能够直接实例化，通过继承直接实例化他的子类的
var DBMangerBase = /** @class */ (function () {
    function DBMangerBase() {
    }
    ;
    DBMangerBase.prototype.operation = function () { };
    ;
    return DBMangerBase;
}());
var DBManger = /** @class */ (function (_super) {
    __extends(DBManger, _super);
    function DBManger() {
        return _super.call(this) || this;
    }
    DBManger.prototype.addUser = function () {
        this.operation();
    };
    return DBManger;
}(DBMangerBase));
;
new DBManger().operation();
console.log(flower);
new flower.Rouse().open();
///<reference path="/School.ts/">
console.log(ucai.name);
new ucai.school.School().jump();
var mmmm = "王大炮";
console.log(mmmm); //类型断言，通过as这个关键字
//高级类型：联合类型&交叉类型
function text() {
    return "";
}
function text2() {
    return 123;
}
function text3() {
    var result = {};
    result = "sss";
    return result;
}
