/*window.jQuery = window.$ = jQuery;可以使用jQuery和$调用jQuery
想使用jQuery里面的方法
ccc();
jQuery.ccc();
$.ccc();*/

//jQuery操作DOM
/*jQuery中获取dom->$(selector)->jQuery对象不是dom
 * jQuery中的 只能用jQuery对象去调用 不能用dom对象调用
 *jQuery中有一个text()等价于dom中的textContent
 */
//console.log($("div"));//或得到是类似于数组的jQuery对象
//console.log($("div")[0]);//或得到第一个<div>222</div>dom对象
/*添加事件
 * onclick 、onmousedown、onxxx、addEventListener
 * 直接添加到了dom对象上
 * 
 * jQuery对象使用click(),xxx(),on代替addEventListener
 * 
 * jQuery->dom jQuery[0]
 * dom->jQuery $(dom)
 */

/*
* 为什么要使用jQuery? -> 简化了操作步骤
* 既然使用了jQuery就不要使用复杂的原生方法
* jQuery中提供了 替代原声方法的方法
*
* 原声 和 jQuery -> 不专业
* */
/*$("div").click(function(event){
//	alert(this.textContent);使用了jquery就不用这种写法了
	alert($(this).text());
	console.log($(this));//div，不转化的话就是dom对象<div>222</div>
	console.log(this.innerHTML);

});
var dd=$("div");
console.log(dd);*/

//定义一个UQuery
/*(function(){
	//仿照jQuery实现$()获取dom元素的方法
	function UObject(){}//封装UObject这个类对象
	UObject.prototype.click=function(callback){//给UObject这个类添加click方法
		for(var key in this){
			if((/\d/g.exec(key))){
				this[key].onclick=callback;
			}
		}
	};
	UObject.prototype.text=function(value){
		if (value) {
			for(key in this){//nodelist里面的你每个元素
				if((/\d/g.exec(key))){//属性名为数字才获取，表示它是一个dom元素
					this[key].textContent=value;//this[key]可以或得到每一个dom元素，
				}
				
			}
			return this;//传值的情况，得到的是UObject
		}else{
			var content="";
			for(var key in this){
				if((/\d/g.exec(key))){
					content+=this[key].textContent;//活动dom元素中的内容
				}
			}
			return content;//不传值得情况，返回拼接的字符串
		}
		
	};
 	function UQuery(selector){
 		var doms=document.querySelectorAll(selector);
 		var obj=new UObject();
 		while(1){
 			for(key in doms){   //doms是一个nodelist对象，利用for in遍历，并将其存到新建的obj中
	 			obj[key]=doms[key];
	 			if(!(/\d/g.exec(key))){//只取数字类型的属性，重复执行
	 				obj.length=doms.length;
	 				return obj;//返回一个有内容的obj
	 			}
 			}
 		}
 		
 		return obj;//返回一个没有内容的obj
 	}

 		
 	
 	window.uQuery=window.$$=UQuery;	
})();
console.log($$("div"));
uQuery("div").click(function(){
	alert("wow,you are so smart")
});
console.log($$("div").text("111"));*/

/*$(".contaniner").append("字符串");
//$(".contaniner").append("<div>dom</div>");
//$(".contaniner").append($("<div>jQuery对象</div>"));
//var node=document.createTextNode();//字符串节点
//document.createElement();//dom元素
//document.querySelector(".contaniner").appendChild(node);
//$("button").click(function(){
//	$("body").append("wow,you")
//});
//var div1=$("<div>111</div>");
//var div2=$("<div>222</div>");
//$("body").append(div1);//吧div1放到body里面
//$("body").append(div2);
////div1.appendTo(div2);
//div1.after(div2);
//div1.before(div2);*/

/*function testCSS(){
//	$(".css").click(function(){
//		$(this).css("color","red");//css是jquery里面的函数，需要使用jquery对象去调用
//		setTimeout(function(){
//			$(this).css({"width":"500px","height":"500px","background-color":"gray"});//只要使用回调函数this指向都是window
//		}.bind(this),3*1000);
//	});
//}
//testCSS();
//function testEvent(){
//	$(".css").hover(function(){
//		$(this).css("color","yellow");
//	},function(){
//		$(this).css("color","black");
//	});
////	$(".css").on("dblclick",function(){
////		alert("dblclic");
////		
////	}.bind(this));
//	function listener(){
//		alert("dblclic");	
//		$(".css").off("dblclick",listener);
//	}
//	$(".css").on("dblclick",listener);
//}
//testEvent();
//addEventListener(事件名，监听者《fn》，是事件冒泡还是事件捕获《默认false：先让里层的触发》):给某个元素添加事件监听者
//document.querySelector(".xxx").addEventListener("click",function(){
//	alert("xxx");
//},true);
//document.querySelector(".vvv").addEventListener("click",function(){
//	alert("vvv");
//},true);
////移除监听事件
//function listener(){}
//document.querySelector(".vvv").removeEventListener("click",listene);
//function testAtt() {
//  $(".imageButton").click(function () {
//		$(this).attr("src","img/2.png");
//		$(this).toggleClass("activeButton");
//  });
//}
//testAtt();*/

/*function test(){
	console.log($("div").first());
}
function init(){
	test();
}
init();*/

/*function ajaxTest(){
	$.get("http://route.showapi.com/955-1 ",{showapi_appid:42238,showapi_sign:"01abfedfe161472ca338b8d30e100e12",type:"ly",page:1},function(result){
		console.log(result);
	});
}
function init(){
	ajaxTest();
}
init();*/

//动画
/*$(".control").click(function(){
	$(".test").hide(3*1000,"swing",function(){
		$(this).show("slow","swing")
	});
	$(".test").fadeOut("slow","swing");	
	$(".test").slideUp(3*1000,"swing");	
	$(".test").fadeToggle(3*1000,"swing");
	$(".test").fadeTo(3*1000,0.5,"swing");
	$(".test").stop(true,true).slideToggle(3*1000,"swing");
	$(".test").stop(true,true).slideUp(3*1000,"swing");//链式写法
	var parm={"width":"100px","height":"100px","opacity":0.3,"border-radius":"50%"};
	$(".test").animate(parm,10*1000,"swing").delay(1000).animate({"opacity":1},1500);
	
});
$(".stop").click(function(){
	$(".test").finish();//立刻停止，到结束状态
	$(".test").stop(true,true);//不传参数：固定到当前状态，不影响后面的动画的继续执行；传一个参数：固定到当前状态，后面动画不执行；传二个参数：立刻完成动画（吧当前动画的值跳转到结束状态）
})*/

//解决$冲突
/*var $$ = jQuery.noConflict();
(function ($) {
    
})(jQuery);*/
