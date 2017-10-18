/**
 * Created by CDLX on 2017/9/15.
 */
//接口也可以叫协议(约定双方都必须达成的内容),只有申明没有实现代码（具体执行代码），简而言之就是一个公共接口,规范代码，防止遗忘写什么属性
interface PInterface{
    name:string;
    move:Function;
}
//只有签署了这个协议，必须得有接口里面的属性
class Hero implements PInterface{
    name:string;
    move(){};
    constructor(){

    }
}
class  Person implements PInterface{
    name:string;
    age:number;
    title:string;
    message:string="123";
    constructor(name:string,age:number){
        this.name=name,
        this.age=age
    }
    move(){
        console.log("move~~~")
    }
    run:Function=function () {
        console.log("run~~~")
    }
}
let p=new Person("xiaoming",30);
console.log(p.name);
/*红路灯
*中国红停绿行黄等
* x国红行绿等黄行
 */
interface Light{
    red:Function;
    green:Function;
    yellow:Function;
}
interface UpdateLight extends Light{//接口的继承
    black:Function;
}
class China implements UpdateLight{
    constructor(){};
    red(){console.log("停")};
    green(){console.log("行")};
    yellow(){console.log("等")};
    black(){console.log("跳着走")};
}
class Xcountry implements Light{
    constructor(){};
    red(){console.log("行")};
    green(){console.log("等")};
    yellow(){console.log("停")};
    black(){console.log("跑着走")};
}
class BeiJing extends China{//类的继承，需要在构造函数中调用super()这个函数
    constructor(){super();};

}
let wangXiao=new China();
wangXiao.red();
let zhenZhen=new China();
zhenZhen.red();
let zhenNi=new BeiJing();
zhenNi.black();
/*动物类：blood att lev
* 英雄类：blood att lev name job 武器
* 怪物类：blood att lev
* 武器类： name att */
class Animal{
    blood:number;
    att:number;
    lv:number;
    constructor(blood:number,att:number,lv:number){
        this.blood=blood;
        this.att=att;
        this.lv=lv;
    }
}
class Hero extends Animal{
    name:string;
    job:string;
    wepons:Wepons;
    constructor(blood:number,att:number,lv:number,name:string,job:string,wepons:Wepons){
        super(blood,att,lv);
        this.name=name;
        this.job=job;
        this.wepons=wepons;
    }

}
class Monster extends Animal{
    constructor(blood:number,att:number,lv:number){
        super(blood,att,lv);
    }
}
class Wepons{
    name:string;
    att:number;
    constructor(name,att){
        this.name=name;
        this.att=att;
    }
}
var xiaoming=new Hero(1000,10,1,"小明","法师",new Wepons("打狗棒",33));
console.log(xiaoming.wepons.name);