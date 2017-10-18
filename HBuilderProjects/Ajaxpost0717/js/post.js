//var host = "http://h6.duchengjiu.top/shop/";
//var api = "api_user.php";
//var parm = "status=register&username=xiaoma&password=333333";
//var Request = XMLHttpRequest||ActiveXObject;
//var request = new Request();
//request.open("POST",host+api);
////只要使用POST/PUT
////传输的参数 内容的格式（Content-Type 是请求头的一个属性）  是 url编码类型的（application/x-www-form-urlencoded 具体Content-Type的类型）
////设置请求头 需要在open之后调用
//request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//request.onreadystatechange = function () {
//  if (this.readyState === Request.DONE){
//  //    获得到数据
//      console.log(JSON.parse(this.response));
//  }
//};
//request.send(parm);//name=xxx&age=22
//console.log(request.response);
//
////封装起来的post方法
////扩展object方法：对象转key=value&key1=value1
//Object.prototype.toURLTypeString=function(){
//	var resultString="";
//	//遍历对象for in->key=value
//	//把所有键值对放到一个数组里面，[key=value,key=value,...]
//	//join(&)->key=value&key=value;
//	var list=[];
//	for(key in this){
//		list.push(key+"="+this[key]);
//	}
//	resultString=list.join("&");
//	return resultString;
//};
//
//function HTTP(){};
///*post：用于post请求
// *url:string api地址
// * parm：object
// * callback：function：获得到回应时候的回调函数 可以通过它得到请求结果
// */
//HTTP.post=function(url,parm,callback){
///*1、不传参数：提示有2个必传参数url；callback；
// *2、 只传一个参数：url,parm,callbck,只传了字符串，object，function分别进行提示
// * 3、传2个参数：
// * 正确：url（string）；callback（function）；
// * 错误：url&parm；parm&callback
// * 4、三个参数都传的时候：格式不匹配
// */
//	switch(arguments.length){
//		case 0||1:
//			throw new Error("提示有2个必传参数url；callback");
//			break;
//		case 2:
//			if(typeof arguments[0]!="string"||typeof arguments[1]!="function"){
//				throw new Error("提示url必须是一个字符串类型，callback必须是一个函数类型");
//			}			
//			break;
//		case 3:
//			if(typeof arguments[0]!="string"||typeof arguments[1]!="object"||typeof arguments[2]!="function"){
//				throw new Error("请传入正确的参数格式或者按照指定的顺序传参url，parm，callback");
//			}			
//			break;
////		default:
//	}
//	var request=new XMLHttpRequest();
//	request.open("POST",arguments[0]||url);
//	request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//请求头设置
//	request.onreadystatechange=function(){
//		if (this.readyState===XMLHttpRequest.DONE){
//			var result=null;
//			try{
//				result=JSON.parse(this.response);
//			}catch(error){
//				result="返回的数据不是一个json格式的数据";
//			}
//			if(callback||typeof arguments[1]==="function"){//如果3个参数就判断下是否传callback，如果2个参数，判断下第二个参数是否为function
//				var call=callback||arguments[1];
//				call(result);
//			}
//		}
//	};
//	//TODO：需要吧object类型的参数 转换为 字符串类型
//	if(arguments.length>1&&typeof arguments[1]==="object"){
//		  //toURLTypeString 将要自己扩展Object类的方法
//		request.send(arguments[1].toURLTypeString());//传参数情况
//		return;
//	}
//	request.send();//不传参数情况
//};
//var host = "http://h6.duchengjiu.top/shop/";
//var api = "api_user.php";
//HTTP.post(host+api,{status:"register",username:"xiaoma",password:"333333"},function(result){
//	console.log("封装的post",result);
//});
//
////简化版
///*Object.prototype.toUrlString = function () {
//      var list = [];
//      for (key in this){
//          list.push(key+"="+this[key]);
//      }
//      return list.join("&");
//  };
//  function HTTP() {}
//
//  HTTP.post = function (url,obj,callback) {
//      var request = new XMLHttpRequest();
//      request.open("POST",url);
//      request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//      request.onreadystatechange = function () {
//        if (this.readyState===4){
//            callback(JSON.parse(this.response));
//        }
//      };
//      request.send(obj.toUrlString());
//  };*/
//
//
//
//
////链式函数:如果需要返回一个值得话，就不能使用return了，如果想要返回一个值就要配合回调函数（callback）使用
///*obj.ccc();
//obj.ddd();
//obj.eee();
//obj.ccc().ddd().eee();*/
//function Person(){
//	
//};
//Person.prototype.move=function(){
//	return this;//每次调用完返回下自己，就实现了链式函数
//};
//Person.prototype.run=function(callback){
//	callback("mmm");
//	return this;
//};
//Person.prototype.jump=function(){
//	return this;
//};
//var p=new Person();
///*函数时使用对象去调用的
// * 只要是想使用链式函数的函数
// * 都给他返回一个调用函数的对象（this）
// */
//p.move();
//p.run();
//p.jump();
//p.move().run(function(result){
//	alert(result);
//}).jump();
/*使用环境：
 * 每次调用函数 都会对这个对象产生一个影响
 * 再次调用另外一个函数 在上一个影响之上 再去影响这个对象
 * 动画：向左移动 向上移动
 */


/*封装一个加减按钮
 * 1.有界面
 * 2.点击加减，可以出发事件：更改显示的数字，更改后的数字需要给使用我们插件的地方
 * 3.点击加减按钮的时候需要抽取出一个更新界面的方法
 * 4.需要考虑到一个界面可能需要创建多个加减按钮
 * 5.链式函数
 */
function Addcontrol(superEle,maxNum){//直接将父元素定义成属性，每次创建的时候直接从外部传入
	this.superEle=superEle;
	this.maxNum=maxNum;//这样设置不能时时监控数量
	this.curNum=1;
	this.createView();
}
Addcontrol.prototype.createView=function(){//在创建的时候我们需要知道父元素是谁
	var container=document.createElement("div");
	var self=this;
	var datas=[{type:"button",content:"-",action:self.lessAction()},{type:"input",content:"1",action:self.changeAction()},{type:"button",content:"+",action:self.moreAction()}];
	datas.forEach(function(info){//循环给每个元素绑定事件
		var ele=document.createElement(info.type);
		if(info.type==="input"){ //吧input框设置为其的一个属性
			self.showNumView=ele;
		}
		info.type==="input"?ele.value = info.content:ele.textContent = info.content;
        info.type==="input"?ele.onblur = info.action:ele.onclick = info.action;
        container.appendChild(ele);

	});

/*	var lessBtn=document.createElement("button");
	var showNum=document.createElement("input");
	var moreBtn=document.createElement("button");	
	container.appendChild(lessBtn);
	container.appendChild(showNum);
	container.appendChild(moreBtn);*/
	this.superEle.appendChild(container);
	return this;
}
Addcontrol.prototype.lessAction=function(){
	var self=this;
	return function(){
		--self.curNum;
		self.curNum=self.curNum<1?0:self.curNum;
		self.updateUI();
	}
	
}
Addcontrol.prototype.changeAction=function(event){
	var self=this;
	return function(){
		self.curNum=event.currentTarget.value;
		self.curNum=self.curNum>self.maxNum?self.maxNum:self.curNum;
		self.curNum=self.curNum<1?0:self.curNum;
		self.updateUI();
	}
	
}
Addcontrol.prototype.moreAction=function(){
	var self=this;
	return function(){
		++self.curNum;
		self.curNum=self.curNum>self.maxNum?self.maxNum:self.curNum;
		self.updateUI();
	}
}
Addcontrol.prototype.updateUI=function(){
	this.showNumView.value=this.curNum;
	
}
new Addcontrol(document.body,10)