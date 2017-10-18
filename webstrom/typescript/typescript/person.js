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
//只有签署了这个协议，必须得有接口里面的属性
var Hero = /** @class */ (function () {
    function Hero() {
    }
    Hero.prototype.move = function () { };
    ;
    return Hero;
}());
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.message = "123";
        this.run = function () {
            console.log("run~~~");
        };
        this.name = name,
            this.age = age;
    }
    Person.prototype.move = function () {
        console.log("move~~~");
    };
    return Person;
}());
var p = new Person("xiaoming", 30);
console.log(p.name);
var China = /** @class */ (function () {
    function China() {
    }
    ;
    China.prototype.red = function () { console.log("停"); };
    ;
    China.prototype.green = function () { console.log("行"); };
    ;
    China.prototype.yellow = function () { console.log("等"); };
    ;
    China.prototype.black = function () { console.log("跳着走"); };
    ;
    return China;
}());
var Xcountry = /** @class */ (function () {
    function Xcountry() {
    }
    ;
    Xcountry.prototype.red = function () { console.log("行"); };
    ;
    Xcountry.prototype.green = function () { console.log("等"); };
    ;
    Xcountry.prototype.yellow = function () { console.log("停"); };
    ;
    Xcountry.prototype.black = function () { console.log("跑着走"); };
    ;
    return Xcountry;
}());
var BeiJing = /** @class */ (function (_super) {
    __extends(BeiJing, _super);
    function BeiJing() {
        return _super.call(this) || this;
    }
    ;
    return BeiJing;
}(China));
var wangXiao = new China();
wangXiao.red();
var zhenZhen = new China();
zhenZhen.red();
var zhenNi = new BeiJing();
zhenNi.black();
/*动物类：blood att lev
* 英雄类：blood att lev name job 武器
* 怪物类：blood att lev
* 武器类： name att */
var Animal = /** @class */ (function () {
    function Animal(blood, att, lv) {
        this.blood = blood;
        this.att = att;
        this.lv = lv;
    }
    return Animal;
}());
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero(blood, att, lv, name, job, wepons) {
        var _this = _super.call(this, blood, att, lv) || this;
        _this.name = name;
        _this.job = job;
        _this.wepons = wepons;
        return _this;
    }
    return Hero;
}(Animal));
var Monster = /** @class */ (function (_super) {
    __extends(Monster, _super);
    function Monster(blood, att, lv) {
        return _super.call(this, blood, att, lv) || this;
    }
    return Monster;
}(Animal));
var Wepons = /** @class */ (function () {
    function Wepons(name, att) {
        this.name = name;
        this.att = att;
    }
    return Wepons;
}());
var xiaoming = new Hero(1000, 10, 1, "小明", "法师", new Wepons("打狗棒", 33));
console.log(xiaoming.wepons.name);
