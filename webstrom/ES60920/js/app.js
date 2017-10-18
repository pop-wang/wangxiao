/**
 * Created by CDLX on 2017/9/20.
 */
/*//ES6（是一个标准）不支持声明变量的类型，TS里面的功能
// let name="wangxiao";
// name=1;
// console.log(name);
// const HOST="localhost";//常量不能被修改
// let str=`123
// ${name}
// 123`;//可以写模板字符串,使用${}相当于之前拼接字符串，可以换行，打印出来还是什么样
// console.log(str);
// let message="\u4f60";//支持unicode类型的字符串
// console.log(message);//打印出来还原汉字
// let str1="qwert";
// console.log(str1.codePointAt(2));//获取指定位置的ascII码值
// let ascII=101;
// console.log(String.fromCharCode(ascII));//吧ascII码值转换成字符串，类方法（静态方法），需要直接使用类名调用
// let SAVE="SOS";
// console.log(SAVE.codePointAt(0));
// console.log(SAVE.codePointAt(1));
// console.log(SAVE.codePointAt(2));
// let sos=`${String.fromCharCode(83)}${String.fromCharCode(79)}${String.fromCharCode(83)}!`;
// console.log(sos);
// let my="wangdapaoda";
// console.log(my.includes("da")?"你好王大炮":"不开心");//查找是否包含某个字符串
// console.log(my.startsWith("da"));//查找开头是否包含某个字符串
// console.log(my.endsWith("da"));//查找结尾是否包含某个字符串
// let str2="hello,miss wang";
// console.log(str2.repeat(3));//repeat不更改原字符串，返回一个新的字符串
// let li=`<li>111</li>`;
// let result=li.repeat(10);
// document.querySelector(".container").innerHTML=result;
// let regex=/da/ig;//记录currentIndex的值继续向下查找
// let reg=/w/y;//从第一个单词开始查找
// console.log(my.replace(regex,"**"));
// console.log(my.replace(reg,"**"));
// console.log(regex.flags);//查找正则表达式的所有修饰词
// console.log(regex.sticky);//查找是否使用了y这个修饰词，返回一个布尔值
// console.log(isFinite(10/3));//判断是否为一个有限值（infinity，非数字都是无限值,整数最大值最小值范围内的都算是有限值）
// console.log(Number.isInteger(10));
// let list=[6,5,4,3,2,1];
// let list2=["wwww"];
// list2.push(...list);
// console.log(...list);//吧数组里面的元素遍历出来，使用逗号分隔
// console.log(list2);
// let eles=document.querySelectorAll(".des");
// let info={
//     0:"xxx",
//     1:"cc",
//     2:"dd",
//     length:3
// }
// info=Array.from(info);//Array.form吧对象转成数组的方法
// console.log(info);
// let list3=Array.of("12","123","sw");//吧一组值转换成一个数组
// console.log(list3);
// let list4=["wxw","wer","wxc"];
// let result4=list4.find(function (item) {
//     return item.startsWith("wx");
// });
// console.log(result4);//只能查找都就结束，也就只能查找到第一个
// let resultIndex=list4.findIndex(function (item) {
//     return item.startsWith("wx");
// });
// console.log(resultIndex);
// let list5=[1,2,3,4,5,6];
// list5.copyWithin(1,3,5);
// console.log(list5);
// console.log([2,3,4,77,33,77,43,22].copyWithin(1,6,8));//吧3,4替换成43,22
// let list6=[2,3,4,6,3,2,4,5,5];
// console.log(list6.fill("qq",0,2));//填充的时候会把前面的2个给覆盖掉
// let [names,age,sex]=["wanxiao",23,"女"];//解构赋值
// console.log(names,age,sex);
// let set=new Set();//集合：类似于数组，不重复
// set.add(33);
// set.add(33);
// set.add(33);
// set.add(33);
// console.log(set);
//
// let list7 = ["234","23",23,"234",55,23];
// let set2=new Set();
// list7.forEach(function (item) {//去重
//     set2.add(item);
// });
// console.log(set2);
// set2.delete(23);
// set2.clear();
// console.log(set2);
// console.log(set2.has("23"));
// let wset=new WeakSet();//WeakSet只能添加对象
// wset.add({name:"wnagxiao"});
// let map=new Map();  //map类似于对象，但是key可以使对象，weakmap只能是字符串
// map.set("name","xiaomin");
// console.log(map.get("name"));
// let userInfo={name:"xiaoming",age:10};
// map.set(userInfo,{score:100});
// console.log(map.get(userInfo).score);
// map.has(userInfo)?map.delete(userInfo):map.clear();
// console.log(map);
// let aname="yangzhe";
// let blood=1000;
// let weapon={name:"game",att:3000};
// let skill={name:"playgame",att:2500};
// let yangzhe={aname,blood,weapon,skill};
// console.log(yangzhe.skill.name);//对象的简写
// let obj={
//     [1+1]:{name:"playgame",att:2500}//允许以表达式的方式声明一个key,假的：undefined，null，“”，NAN，0
// };
// console.log(obj);
// let xiaomao={mname:"小猫",sex:"女"};
// let ddmao={
//     __proto__:xiaomao,//字面量方式继承
//     gf:{}
// };
// console.log(ddmao.mname);
// // __proto__和prototype都代表原型对象，一般不建议使用 __proto__，因为存在浏览器兼容问题， __proto__是实例方法，对象属性（需要new一个对象），prototype是类属性，使用类名调用
// //变量名->栈-》不需要程序猿管理，函数里面定义一个局部变量，出了函数，这个变量就会被销毁；堆->实际存储在内存的位置，需要程序猿收到去释放，只要进程打开着堆里面的东西就不会被释放掉
// let nn="";
// let model={//get,set存取器
//     set name(_name){
//         nn=_name;
//     },
//     get name(){
//         return nn;
//     }
// }
// model.name="123";
// console.log(model.name);
//
// let userModel=model;
// userModel={cccc:"次吃吃吃"};
// console.log(Object.is(userModel,model)?"yes":"no");
// let resultInfo={};
// console.log(Object.assign(resultInfo,model,userModel));
// function move(...canShu) {//函数传参可以...形式，后面的名字随便起啊
//     console.log(canShu);
// };
// move(1,2,3,4,5);
// function jump(name,age=30,sex) {//要是第一个有默认值函数参数的长度就会认为是0
//     console.log(arguments);
// }
// jump("xiaomi",30,"女");
// console.log(jump.length);
//
// let promise=new Promise(function (success,fail) {//promise对象
//    let num=Math.random()*10;
//    num>3?success("成功"):fail("失败");
// });
// promise.then(function (result) {
//     console.log(result);
// }).catch(function (error) {
//     console.log(error);
// });
//每一个yield都对应着一个任务，可以是一个函数，对象，字符串等,每次调用next都会去获取下一个任务
//下载比较耗时的任务：视频，音频
// function *gen() {//generator生成器
//     yield name="小明";
//     yield ()=>{
//         console.log("任务一");
//     };
//     yield ()=>{
//         console.log("任务二");
//     };
//     return ()=>{
//         console.log("执行完成");
//     };
// }
// let generator=gen();
// console.log("qqq",gen);
// console.log(generator.next().value);//next返回当前的任务，done看任务是否完成
// generator.next().value();//任务一，执行函数
// generator.return();//不能获得到具体的值，只能获得到完成的状态
// //线程：一个进程里面可能出现多个线程同时执行，UI线程（主线程）：显示界面的一个线程（runloop），只要不关闭电脑runloop会一直跑，在不影响主线程的情况下可以开辟多个线程去执行其他任务（每一个应用程序都有可能有多个任务同时执行，每一个同时执行的任务都是一个线程）
// // 进程：每一个应用都是一个进程，在每一个应用程序里面，多核意味着在硬件上支持同事处理多个任务（每一台设备都可以执行多个进程，每一个进程就是活动中的应用程序）
// function *downLoadGenerator() {
//     yield ()=>{
//         setTimeout(function () {
//             console.log(222);
//         },10000)
//     };
//     yield ()=>{
//         setTimeout(function () {
//             console.log(111);
//         },5000)
//     };
//     return ()=>{
//         console.log("下载完成");
//     };
// }
// function downLoad() {
//     let dg=downLoadGenerator();
//     while(1){
//         let result=dg.next();
//         result.value();
//         if(result.done){
//             break;
//         }
//     }
// }
// downLoad();//执行异步下载，时间短的先完成*/
//Proxy：代理，帮去做某些事情
let delegateAct=new Proxy({name:"小明",age:2},{
    set:function (target,key,value) {//target是我们传进来的对象
        // console.log(arguments);
        if(key=="name"){
            console.log("禁止修改名字,你的名字只能是"+target[key]);
        }
        target[key]=value;//可以修改值
    },
    get:function (target,key,value) {
        if(key=="age"){
            if(target["age"]<3){
                console.log("不能玩手机");
            }
        }
        return target[key];
    }
});
delegateAct.name="王潇";
console.log(delegateAct.name);
console.log(delegateAct.age);

let xiaoZhen = {
    name:"小珍",
    play:"家里蹲"
};
let xiaoZhenNiangObj = new Proxy(xiaoZhen,{
//target =》 xiaoZhen
//key =》 调用set方法时候的属性名
//value =》 设置的新值
set:function (target,key,value) {
    console.log(key,value);
    if (value === "去酒吧"){
        return;
    }
    target[key] = value;
}
});

xiaoZhenNiangObj.play = "去KTV";
console.log(xiaoZhen.play);