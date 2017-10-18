//面向过程的编程
//function loadData(){
//	
//}
//function UI(){
//	
//}
//function init(){
//	loadData();
//	UI();
//}

//面向对象思想
//通过Date创建出来的变量 都表示日期
//var date=new Date();
//Date.prototype.miao=function(){//只用给date对象添加方法就行
//	alert("miao");
//};
//console.log(date.miao());
//setTimeout(function(){
//	var date1=new Date();
//	console.log(date1.miao());
//},5*1000);
//具体的一个时间对象
//var date=new Date();
//console.log(date.getSeconds());
//console.log(data.getMinutes());
//console.log(data.getHours());
//男朋友
//var 鱼头=new 男朋友();
//鱼头.买饭();

//封装
//var 塑料袋的价格=0.2;
//var 塑料袋的材质="塑料";
//var 塑料袋的容量="可装10斤";
//使用函数封装起来
//function daizi(价格,材质,容量){
//	var 袋子的价格=价格;
//	var 袋子的材质=材质;
//	var 袋子的容量=容量;
//	console.log(袋子的价格,袋子的材质,袋子的容量)
//}
//var 塑料袋=new daizi(0.2,"塑料","可装10斤");

//继承
//多态
//[].toString();
//var error=new Error();
//error.toString();

//创建对象
//1.通过字面量创建：每一个属性之间使用逗号隔开
//var 塑料袋={
//	name:"雕牌塑料袋",
//	fill:function(name){//fill是行为
//		console.log(name);
//	}
//}
//使用对象中的属性，通过.来获取
//console.log(塑料袋.name);
//塑料袋.fill("好吃的");
//血量：1000 名字：哈利波特 技能：白骨爪 使用技能攻击怪物
//var hlbt={
//	blood:1000,
//	name:"哈利波特",
//	skill:"白骨爪",
//	fire:function(monster){
//		console.log(monster+"减血");
//	}
//}
//hlbt.fire("葫芦娃")
//function hero(blood,name,skill){
//	return{
//		blood:1000,
//		name:"哈利波特",
//		skill:"白骨爪",
//		fire:function(monster){
//			console.log("减血");
//		}	
//	}
//}
//var xiaoming=hero("小明",100,"xxx")
//xiaoming.fire("苍蝇");


//创建一个工厂模式的英雄函数
//(function(){
//	function hero(_name,_blood,_att){
//		return{
//			name:_name,
//			blood:_blood,
//			att:_att,
//			title:"取经四人组",
//			fire:function(target){
//				//谁调用fire这个函数 this就是谁
//				target.blood-=this.att;
//			}
//		}
//	}
//		var bajie=hero("八戒",3000,100);
//		bajie.title="取经三人组";
//		
//		var wukong=hero("悟空",1000,500);
//		
//		//this->这是：这个，是一个临时变量，用来<代替>表示<某个对象>的关键字
//		//this->调用的对象是谁他就代表谁（this是动态指定的 不能只用眼看）
////		function move(){
////			console.log("111");
////		}
////		move();
////		window.move();
//	
////		bajie.fire(wukong);//this就代表八戒,target就是悟空,target掉血
////		console.log(wukong.name+"还剩"+wukong.blood+"滴血");
////		wukong.fire(bajie);//this就是代表悟空
//		while(1){//不知道循环多少次
//			var at=prompt("打call：1");
//			if(at=="1"){
//				bajie.fire(wukong);
//				alert(wukong.name+"还剩"+wukong.blood+"滴血");
//				wukong.fire(bajie);
//				alert(bajie.name+"还剩"+bajie.blood+"滴血");
//				if(wukong.blood<=0 || bajie.blood<=0){
//					alert(wukong.blood<=0?"悟空死了":"八戒死了");
//					break;
//				}
//			}else{
//				alert("去取经~");
//				break;
//			}
//		}




//})();

//var div=document.querySelector(".xxx");
//div.onclick=function(){
//	console.log(this.textContent);
//	this.innerText="鱼头爱你";
//innerHTML:可以嵌入html的元素
//innertext：只能嵌入字符串
//textContent：文本内容和innertext相似
//break直接跳出循环
//continue跳过此次循环，执行下次循环
/*
* break -> 直接跳出循环 -> i==5的时候 后面的循环永远不再执行
* continue -> i==2跳过这一次  继续循环执行
* */
//
//for (var i=0;i<10;i++){
//
//
//  if (i==5){
//      //执行到 i==5  -> 跳出循环
//      break;
//  //    break 《后面的》 所有代码 都不执行了
//  }
//  if (i==2){
//      //不执行 2 这次
//      continue;
//  //    continue 《后面的》 这次循环 都不再继续执行
//  }
//  
//  console.log(i);
//}

//}
/*构造器：用于创建对象的函数（又叫构造函数）
 * class：类->构造器（又叫构造函数）***
 * 构造函数的首字母要大写
 * new：关键字  用于（通过构造函数）创建对象的关键字 函数名前面必须加new关键字
 */
//function Hero(_name){
//	console.log(this);
//	//通过构造函数 this 代表将要创建出来的那个对象
//	this.name=_name;	
//}
//Hero.prototype.title="取经四人组";
////通过构造函数 创建对象 函数名前面 必须加new
//var bajie=new Hero("八戒");
//var wukong=new Hero("悟空");
//var heshang=new Hero("和尚");
//Hero.prototype.title="取经四人组";
//
////wukong.constructor.prototype.title=""//通过对象修改原型
//
//alert(bajie.name+wukong.name+heshang.name)
//alert(bajie.title+wukong.title+heshang.title)
//console.log(Hero.prototype)//object
//prototype:原型
//可以显示 类的本质
//原型 是某一个类里面《共享的空间》-->可以存放所有对象都相同的内容-->定义在原型上面的属性是所有对象共享属性（同一个类创建）
//所有通过这个类创建出来的对象都可以访问这个空间，往这个空间中添加一个属性，所有对象都具备这个属性
//Array.prototype.firstObject=function(){
//	return this[0];
//}
//var list=new Array(1,2,3,4);
//console.log(list.firstObject());

/*时间戳 1970-现在 的秒（毫）数  （时间标记）*/
//Date.prototype.timeStemp=function(){
//	return this.getTime()/1000;
//}
//var date=new Date();
//console.log(date.timeStemp());

//自定义一个类添加方法
//function Tool(){
//	
//}
//Tool.prototype.replaceSign=function(str){
//	return str.replace(/,/g," ");
//}
//var tool=new Tool();
//console.log(tool.replaceSign("we,se,ws"));

//中文排序
//var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
//items.sort(function (a, b) {
//return a.localeCompare(b);
//});
//console.log(items);

//闭包面试
//function fun(){
//	for(var i=0,arr=[];i<3;i++){
//		arr[i]=function(){
//			return i;
//		}//i=3
//	}
//	return arr;
//}
//var funs=fun();//在调用funs的时候循环已经完成，返回的是最终的结果
////数组里面存放的是3个相同的函数，没有调用的时候根本不变
//console.log(funs[0]());//3
//console.log(funs[1]());//3
//console.log(funs[2]());//3

//function fun(){
//	var n=99;
//	add=function(){return n++;}
//	return function(){return n;}	
//}
//var funs=fun();
//console.log(funs());//99
//console.log(funs());//99
//add();
//console.log(funs());//100


//prototype：原型 只有函数才具备原型
//所有通过同一个类 创建出来 所有对象  共享区域
//function animal(){
//	
//}
//animal.prototype.message=[];
//var ahuang=new animal();
//ahuang.message.push("111");//更改的是原型
//ahuang.message=[];//是给ahuang添加了一个message
//var ahuang1=new animal();
//var ahuang2=new animal();
//console.log(ahuang1.message,ahuang2.message);
/*对象 调用属性
 * .
 * []
 * 
 * */
//var person={name:"XXX",age:20};
//console.log(person.name);
//console.log(person[name]);
//for(key in person){
//	console.log(key+":"+person[Key])
//}
//function Animal(){
//	this.type="动物";
//}
//function Person(){
//	
//}
//var obj={name:"小米"};
//Person.prototype=new Animal();//原型继承：person是一个类，改变person的原型对象为animal，所有通过person创建出来的对象就都具备了animal里面的特征
//var p=new Person();
//console.log(p.type);

//*****************继承**********************
/*
 * 技能：名字 攻击力 等级
 * 英雄&怪物:名字 等级 血量 攻击力 技能
 * 英雄：用户
 * 怪物：电脑
 * 3个英雄，每个英雄有3个技能 3个怪物，每个怪物有3个技能
 */
//(function(){
//	function Person(名字,等级,血量,攻击力,技能){
//		this.name="名字";
//		this.level="等级";
//		this.fire=function(){
//			
//		}
//		function Hero(){
//			
//		}
//		Hero.prototype=new Person();
//		function Monster(){
//			
//		}
//		Monster.prototype=new Person();
//	}
//})()

//var request=new XMLHttpRequest();//读取本地文件
//request.open("GET","regexp.html");//打开某一个文件
//request.send();//发送打开的请求（执行）
//request.onload=function(){
//	//request.response:打开文件，读取的结果
//	console.log(request.response)
//}


//json:数据格式:只能识别以下数据格式
//[]:数组
//{}:对象
//1234567：数字
//""：字符串
//通过读取文件的方式读取的是字符串，通过JSON.parse()解析成对象访问
(function(){
	function Game(){
	
	}
	Game.prototype.startGame=function(){
		this.loadData();
		
	}
	//把json文件里面的数据加载完毕
	Game.prototype.loadData=function(){
		//this===game
		var temp=this;//temp没有特殊意义，是一个普通变量，在任何函数里面，都表示现在this所代表的game
		var request=new XMLHttpRequest();
		request.open("GET","js/tooboject.json");
		request.send();
		request.onload=function(){
			var datas=JSON.parse(request.response);
			console.log(datas);//以对象格式打印出来
		//加载完数据，可以选择英雄-->调用chooseHero（只能被英雄调用）
		//this：谁调用就代表谁，这里的this代表request
		temp.chooseHero(datas);
		}
	}
	Game.prototype.chooseHero=function(datas){
		console.log("选择英雄");
		var heroListView=document.querySelector(".heroListView");
		var heroList=datas.heros;
		heroList.forEach(function(hero,index){//利用foreach创建出英雄界面
			var img=document.createElement("img");
			img.src="img/"+hero.name+".jpg";
			heroListView.appendChild(img);
			img.onclick=function(){
				
			}
		})
	}
	var game=new Game();
	game.startGame();

})()

