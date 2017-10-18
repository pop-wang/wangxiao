//多重继承
//(function(){
//	function Animal(){
//		
//	}
//	function Person(){
//		
//	}
//	Person.prototype=new Animal();
//	function Student(){
//		
//	}
//	Student.prototype=new Person();
//	var xiaoming = new Student();
//	//typeof
//	//instanceof:判断是不是某一个类里面实例化出的对象
//	console.log(xiaoming instanceof Student);//true
//	console.log(xiaoming instanceof Person);//true
//	console.log(xiaoming instanceof Animal);//true
//	console.log(xiaoming);//打印结果无法判断继承顺序
//})();
//混合继承：不仅改变原型对象 同时 改变原型对象的构造函数
//(function(){
//	function Animal(){		
//	}
//	function Person(){		
//	}
//	var p=new Animal();//创建一个对象
//	p.constructor=Person;//更改父类对象的构造函数,constructor是系统提供的一个属性
//	Person.prototype=p;//继承原型对象
//	function Student(){		
//	}
//	var q=new Person();
//	q.constructor=Student;
//	Student.prototype=q;
//	var xiaoming = new Student();
//	//typeof
//	//instanceof:判断是不是某一个类里面实例化出的对象
//	console.log(xiaoming instanceof Student);//true
//	console.log(xiaoming instanceof Person);//true
//	console.log(xiaoming instanceof Animal);//true
//	console.log(xiaoming.constructor);//打印结果可以判断继承顺序
//	console.log(Student.prototype);
//	console.log(Person);
	
//封装一个继承的函数：
//function jicheng(Sup,Sub){
//	//Object.create(Sup.prototype)
//	var prototype=new Sup();
//	prototype.constructor=Sub;
//	Sub.prototype=prototype;
//}
//jicheng(Person,Student);
//扩展到Function原型上
//Function.prototype.jicheng=function(Sup){
//	var prototype=Object.create(Sup.prototype);//创建对象的一种方法
//	prototype.constructor=this;//this是function类型的对象，也是子类的构造函数，更改父类对象的构造函数
//	this.prototype=prototype;//实现继承，更改原型对象
//}
//Student.jicheng(Person);
//})();

//-------------------getter&setter----------------
//function Person(){
//	this.type="人类";
//}
//var xiaoMing=new Person();
//xiaoMing.type="妖类";//type的属性可读可修改，
//alert(xiaoMing.type);

//只能读取
function Person(hobby){
	this.hobby=hobby;
	var _type="人类";//声明一个局部变量，外面就无法读取
	//getter->读取函数内部变量的方法
	//计算属性：可以再里面做一些逻辑相关的内容
	this.type=function(){
		if(this.hobby=="篮球"){
			return "爱运动"+_type;
		}
		return _type;
	}
}
var xiaoMing=new Person();
xiaoMing.hobby="足球";
alert(xiaoMing.type());
new Person();

//只能设置
//function Person(){	
//	var type="人类";
//	//setter:只能设置不能读取
//	this.setType=function(value){	
//		type=value?value:"人类";
//	}
//}
//var xiaoMing=new Person();
//xiaoMing.setType("124");

//function Person(){
//	var _sex=1;
//	//getter
//	this.sex=function(){
//		return _sex;
//	}
//	//setter
//	this.setType=function(sex){
//		_sex=sex
//	}
//	//可读可写
//	this._sex=1
//}
//function Image(supSelector,imgPath){
//	this.supSelector=function(){
//		return supSelector;
//	}
//	var image=document.createElement("img");
//	image.src=imgPath;
//	document.querySelector(supSelector).appendChild(image);
//}
//var image=new Image("body","img/0.jpg");
//alert(Image.supSelector());

//静态方法，类方法,不能写在构造函数里面，一定要写在外面，要不然就当做对象的方法了
//function Tool(){}
////以下2个函数都叫做静态方法或者类方法，使用类名调用的
//Tool.get=function(){
////进行网络请求，请求服务端数据
//};
//Tool.getCurrentTime=function(){
//	return "2017";
//}
//
//alert(Tool.getCurrentTime());
