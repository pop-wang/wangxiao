import {Person} from "./person";
/**
 * Created by CDLX on 2017/9/15.
 */
function sortName(list:any){
    let result=list;
    result.sort((a:any,b:any)=>{
        return a.name.localeCompare(b.name);
    });
    return result;
}
let name:string="wangxiao";
let isShow:boolean=true;
let list:Array<string>=["133"];
let info:object={};
for( var i=0;i<100;i++){
}
console.log(i);//后面可以继续使用i
//创建一个枚举，比如一些固定的东西我们可以使用枚举类型来定义，可以直观看出参数的值，代码部分的值不用修改
enum LoginType{
    phone=5,
    wechat=13,
    qq,
    sina
}
//使用枚举
console.log(LoginType.qq);

// function  run():number{//规定返回值类型为number
//     return 1;
// }
// function  run():void{//没有返回值
//
// }
function run(name:string,age=22):void{//添加参数类型，给函数参数指定默认值age=22

}
function run1(name:string,age?:num):void{//表示age为可选参数，可以传也可以不传

}
run("wangxiao",12)
function move():Function{
    return ()=>{};//arrow函数：箭头函数，匿名函数
}
var button=<HTMLScriptElement>document.querySelector(".button");
button.addEventListener("click",()=>{

});
//元祖
let tuple: [string, number];
tuple = ['hello', 10];
console.log(tuple[0].substr(1));
//symbol:是不可改变且唯一的,保证变量的唯一性，虽然值一样，但是两个变量还是不一样
let name1=Symbol("xiaoming");
let name2=Symbol("xiaoming");
console.log(name1===name2)
//T和any是差不多一样的
function runLoop():never{while(true){}}
let allS:Array<T>=[1,"2"];



