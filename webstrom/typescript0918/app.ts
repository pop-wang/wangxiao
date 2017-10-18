/**
 * Created by CDLX on 2017/9/18.
 */
class Person{
    constructor(){};
    private name:string="";//私有的，自己可以访问，子类不可以访问
    protected age:number=30;//受保护的，自己和子类都可以访问
    get getName(){
        if(this.age>30){}
        return this.name;
    };
    set setName(name:string){
        this.name=name;
    }

}
class China extends Person{
    constructor(){
        super();
    }
    move(){
        console.log(this.age+"岁"+this.getName+"在移动")
    }
}
let xiaoMing=new China();
xiaoMing.setName="小明";
xiaoMing.move();

//注意红路灯 现在是 xxxx灯 您可以走 停 等
class Chinese{
    constructor(){}
    protected action(type:number){
        let deng="红";
        let actionType="停";
        switch (type){
            case 0:
                deng="红";
                actionType="停";
             break;
            case 1:
                deng="绿";
                actionType="行";
             break;
            case 2:
                deng="黄";
                actionType="等";
             break;
            default:
                deng="黑";
                actionType="退";
        }
      console.log("注意红路灯 现在是 "+deng+"灯 您可以"+actionType);
    };
    red(){
        this.action(0);
    };
    green(){
        this.action(1);
    };
    yellow(){
        this.action(2);
    };

}
class XiAn extends Chinese{
    static CityName="西安";
    readonly city="西安";
    constructor(){
        super();
    };
    black(){
        this.action(3);
    }
}
new Chinese().red();
console.log(new XiAn().city);
console.log(XiAn.CityName);//静态属性（static）类直接利用类名访问
//基类（基础类）：不能够直接实例化，通过继承直接实例化他的子类的
abstract class DBMangerBase{
    private dbName:"ST";
    constructor(){};
    operation(){};
}
class DBManger  extends DBMangerBase{
    constructor(){
        super();
    }
    addUser(){
        this.operation();
    }
};
new DBManger().operation();
console.log(flower);
new flower.Rouse().open();

///<reference path="/School.ts/">
console.log(ucai.name);
new ucai.school.School().jump();

let mmmm="王大炮";
console.log(mmmm as string);//类型断言，通过as这个关键字

//高级类型：联合类型&交叉类型
function text():string{
    return "";
}
function text2():string|number{//交叉类型
    return 123;
}
function text3():string&number{//联合类型
    let result=<string&number>{};
    result=<string&number>"sss";
    return result;
}