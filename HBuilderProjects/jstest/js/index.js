//轮播图
var banner=document.getElementById("banner");
var imglist=document.getElementById("bannerimg");
var navlist=document.getElementById("bannernav");
var btn=document.getElementsByTagName("button");
var num=0;          //中间变量用来存放每次
var timer=setInterval(move,1000);
function move(){
	num++;
	if(num>imglist.children.length-1){//第一张图片只执行一次，然后循环剩下的1234234234...
		imglist.style.marginTop=0;
		num=1;
		
	}
	startMove(imglist,{marginTop:-num*320});//实现图片自动轮播
	for(var i=0;i<navlist.children.length;i++){//for循环实现nav样式的变化
		navlist.children[i].className="";		//拍他思想让所有的样式都为空
	}
	navlist.children[num>(navlist.children.length-1)?0:num].className="nacive";//让当前样式为设定样式
}
for (var i=0;i<navlist.children.length;i++) {//for循环给nav绑定事件
	navlist.children[i].index=i;
	navlist.children[i].onmouseover=function(){
		num=this.index;							//将当前的下标赋值给num，以便下面更换图片
		startMove(imglist,{marginTop:-num*320});
		for(var i=0;i<navlist.children.length;i++){
			navlist.children[i].className="";
		}
		this.className="nacive";
	}
}
btn[0].onclick=move;
btn[1].onclick=function(){
	num--;						
	if(num<0){									//-1,1,0	
		imglist.style.marginTop=-(imglist.children.length-1)*320+"px";
		num=imglist.children.length-2;
	}
	startMove(imglist,{marginTop:-num*320});
	for(var i=0;i<navlist.children.length;i++){
		navlist.children[i].className="";		
	}
	navlist.children[num].className="nacive";	
}
banner.onmouseover=function(){//给btn绑定鼠标划入事件同时清除定时器
	btn[0].style.display="block";
	btn[1].style.display="block";
	clearInterval(timer);
}
banner.onmouseout=function(){//给btn绑定鼠标划出事件同时还原定时器
	btn[0].style.display="none";
	btn[1].style.display="none";
	timer=setInterval(move,1000);
}
//获得当前时间
function getdate(){
	var now=new Date();
	var arr=[];
	arr[0]=now.getFullYear();
	arr[1]=now.getMonth()+1;
	arr[2]=now.getDate();
	arr[3]=now.getHours();
	arr[4]=now.getMinutes();
	arr[5]=now.getSeconds();
	return arr[0]+"年"+arr[1]+"月"+arr[2]+"日"+arr[3]+"："+arr[4]+"："+arr[5];
}
//获取输入内容并将次文本框加入页面中
var otext=document.getElementById("text");
var word=document.getElementById("word");
var sbt=document.getElementById("sbt");
var odiv=document.createElement("div");
sbt.onclick=function(){
	if(word.value!=""){
		var odiv=document.createElement("div");	
		otext.appendChild(odiv);
		odiv.className="text3";
		odiv.innerHTML="<div><img src='img/0.jpg'/>"+"<span>王大炮小姐</span>"+"</div>"
		+"<br />"+"<div>"+word.value+"<a>删除</a>"+"</div>"+"<br />"+"<i>"+getdate()+"</i>";
		var del=document.getElementsByTagName("a");
		for(var i=0;i<del.length;i++){
			del[i].onclick=function(){
				otext.removeChild(this.parentNode.parentNode);	
			}
		}
	}else{
		alert("就不让你点，先留下您此刻的感受再说~~~");
	}
	
}

