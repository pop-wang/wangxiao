//回调函数
//function aaa(){
//	alert("hi~");
//}
//setTimeout(aaa,1000);

//直接传入参数和直接传入函数是一样的
//function loadData(callback){
//	callback("结果");
//}
//loadData(function(result){
//	
//});

//function  action(){
//	alert("hi~鱼头")
//}
//function loadData(callback){
//	var result=prompt();
//	//arguents:实参数组
//	if(result=="1"){
////		callback;//代表的是  传进来的整个函数
//		callback();//调用传进来的函数		
//	}
//}
//loadData(action);


window.baoXue=window.baoXue || {};
(function(){
	new baoXue.Game();
	var xiaoming=new baoXue.Hero("小明",100,100,[]);
	console.log(xiaoming.name);
})();

/*学生类继承了人类 但是不能使用人类的构造方法
 *学生类继承了人类 但是它里面的属性都是未定义的值->没有在人类的构造函数中赋值成功
 * 在new一个学生类的时候就调用人类
 * 
 * 使用函数对象调用.call/.apply(要改变的对象，参数)
 * call():参数是一个一个传的
 * apply():参数是传一个数组
 * bind：只需要改变this的指向，不需要传参数
 * */
//function Person(_name,_age){
//	this.name=_name;
//	this.age=_age;
//	console.log(this);//打印2次
//}
//function Student(_name,_age,_sex,_hobby){
//	this.sex=_sex;
//	this.hobby=_hobby;
////	Person.call(this,arguments[0],arguments[1]);//把人类里面的this更改成学生类里面的this(更改this指向),加上参数
//	Person.apply(this,arguments);
//
//}
//Student.prototype=new Person();//第一使用人类创建一个对象打印一次为person
//var xiaoming=new Student("小明",18,"男","游泳");//再次使用又打印一次为student