/*2017.7.18
 * 日记：
 * 点击加号切换到添加日记的界面->输入日记标题，内容，保存下创建时间（07.20下午3.00）
 * 显示添加日记的列表，可以删除日记
 */
/*var now=new Date();
var y=now.getMonth()+1;
var d=now.getDate();
var h=now.getHours();
h>12?h="下午"+(h-12):h="上午"+h;
var m=now.getMinutes();
var time=y+"."+d+" "+h+"."+m;
$("button").click(function(){
	$("body").append("<div><h3>"+$("input")[0].value+"</h3><p>"+$("textarea")[0].value+"</p><i>"+time+"</i>&nbsp;&nbsp;<button>删除</button></div>");
});
$(document).on('click','div button',function(){//事件代理on(events,[selector],[data],fn):data:当一个事件被触发时要传递event.data给事件处理函数
	$(this).parent().remove();
});
//只要是通过js添加的dom元素 都不是直接渲染到文档上面的，在jQuery中可以用val()这个方法*/

//2017.7.19手风琴样式；文字手风琴添加互斥效果  展开 文字添加fadeIn效果 合拢添加fadeOut
function initList(){
	var list=$(".big");
	list.mouseover(function(){
		list.css("width","236px");
		$(this).css("width","590px")
	});	
}
initList();

//function init(){
//	var nav=$(".firsttitle");
//	var child=$(".firsttitle>ul");
//	$(".firsttitle").click(function(){
//		child.css("display","none").fadeOut("slow","linear");
//		$($(this)[0].childNodes[1]).css("display","block").fadeIn("slow","linear");
//	});
//}
//init();