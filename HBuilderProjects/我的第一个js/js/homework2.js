//<!--2017.6.26:vip.com-->
//function fun(oinput){
//		oinput.value="内容不能为空";
//}
////var btn=document.getElementsByTagName("button")[0];
////console.log(btn.parentNode.parentNode);
//function btn1(btn){
//	
//	btn.parentNode.parentNode.style.fontSize="30px";
//}
//function btn2(btn){
//	btn.parentNode.parentNode.style.fontSize="20px";
//}
//function btn3(btn){
//	btn.parentNode.parentNode.style.fontSize="13px";
//}

//<!--2017.6.27:时间，星星，日历-->
//var otd=tbody.getElementsByTagName("td");
//var otdd=tfoot.getElementsByTagName("td")[0];
//var arr=["元旦快乐","春节快乐","妇女节快乐","清明节快乐","劳动节快乐","儿童节快乐","建党节快乐","建军节快乐","新学期快乐","中秋节快乐","期末快乐","圣诞节快乐"];
//for(var i=0;i<otd.length;i++){
//	otd[i].index=i;
//	otd[i].onclick=function(){
//		otdd.innerHTML=arr[this.index];		
//	}	
//}
//var comment=document.getElementById("comment");
//var oli=document.getElementsByTagName("li");
//var arr1=["不推荐","一般推荐","推荐","较好推荐","强烈推荐"];
//for(var j=0;j<oli.length-1;j++){
//	oli[j].index=j;
//	oli[j].onclick=function(){
//		comment.innerHTML=arr1[this.index];
//	}
//	oli[j].onmouseover=function(){
//		for(var i=0;i<oli.length-1;i++){
//			if(i<=this.index){
//				oli[i].style.background = "url(img/str.gif) no-repeat 0px -29px";//backgroundposition
//			}else{
//				oli[i].style.background = "url(img/str.gif) no-repeat 0px 0px";
//			}
//			
//		}		
//	}
//}
//var oimg=document.getElementsByTagName("img");
//function gettime(){
//	var now = new Date();
//	var h=now.getHours();
//	var m=now.getMinutes();
//	var s=now.getSeconds();
//	oimg[0].src="img/"+parseInt(h/10)+".png";
//	oimg[1].src="img/"+parseInt(h%10)+".png";
//	oimg[2].src="img/"+parseInt(m/10)+".png";
//	oimg[3].src="img/"+parseInt(m%10)+".png";
//	oimg[4].src="img/"+parseInt(s/10)+".png";
//	oimg[5].src="img/"+parseInt(s%10)+".png";	
//}
//setInterval(gettime,1000)
//循环方法:
//gettime();
//setInterval(gettime,1000);
//function gettime(){
//	var str;
//	var oimg=document.getElementsByTagName("img");
//	var now = new Date();
//	var h=now.getHours();
//	var m=now.getMinutes();
//	var s=now.getSeconds();
//	str=tostr(h)+tostr(m)+tostr(s);
//	for(var i=0;i<oimg.length;i++){
//		oimg[i].src="img/"+str[i]+".png";
//	}	
//}
//function tostr(num){
//	if(num<10){
//		return "0"+num;
//	}else{
//		return ""+num;
//	}
//}
//<!--2017.6.27：tab切换-->
//var navlist=document.querySelector("#tabnav").getElementsByTagName("a");//遍历一级菜单的a链接元素
//var sectionlist=document.querySelector("#tabsaction").getElementsByTagName("li");//遍历二级菜单的li元素
//for (var i=0;i<navlist.length;i++) {
//	navlist[i].index=i;
//	navlist[i].onmouseover=function(){  //排他思想
//		for(var j=0;j<navlist.length;j++){
//			navlist[j].style.fontWeight=100;
//			navlist[j].style.borderBottom="";
//			sectionlist[j].className="";
//		}                                //让当前的产生变化
//		this.style.fontWeight=900;
//		this.style.borderBottom="2px solid orange";
//		sectionlist[this.index].className="active";
//	}
//}
//var banner=document.getElementById("banner");
//var btn=document.getElementsByTagName("button");
//var imglist=document.querySelector("#bannerimg").children;
//var navlist=document.querySelector("#bannernav").children;
//var num=0;
//var time=setInterval(move,1000);
////自动轮播效果
//function move(){
//	num++;
//	if(num>imglist.length-1){
//		num=0;
//	}
//	change();
//}
////图片和小圆点样式改变
//function change(){
//	for(var i=0;i<imglist.length;i++){
//		imglist[i].className="";
//		navlist[i].className="";
//	}
//	imglist[num].className="iactive";
//	navlist[num].className="nactive";
//}
////给小圆点绑定点击事件
//for(var j=0;j<navlist.length;j++){
//	navlist[j].index=j;
//	navlist[j].onmouseover=function(){
//		num=this.index;
//		change();
//	}
//}
////btn绑定点击事件
//btn[1].onclick=move;
//btn[0].onclick= function(){
//	num--;
//	if(num<0){
//		num=imglist.length-1;
//	}
//	change();
//}
//
////btn划入划出事件
//banner.onmouseover=function(){
//	btn[0].style.display="block";
//	btn[1].style.display="block";
//	clearInterval(time);
//}
//banner.onmouseout=function(){
//	btn[0].style.display="none";
//	btn[1].style.display="none";
//	time=setInterval(move,1000);
//}

/*<!--推进式轮播图-->*/
var banner=document.getElementById("banner");
var btn=document.getElementsByTagName("button");
var imglist=document.querySelector("#bannerimg");
var navlist=document.querySelector("#bannernav");
var num=0;
var time=setInterval(move,2000);
//自动轮播效果
function move(){
	num++;
	if(num>imglist.children.length-1){
		imglist.style.marginLeft=0;
		num=1;
		
	}
	startMove(imglist,{marginLeft:-num*1200});
	for(var i=0;i<navlist.children.length;i++){
		navlist.children[i].className="";
	}
	navlist.children[num>=(imglist.children.length-1)?0:num].className="nactive";
}
for(var i=0;i<navlist.children.length;i++){
	navlist.children[i].index=i;
	navlist.children[i].onclick=function(){
		num=this.index;
		startMove(imglist,{marginLeft:-num*1200});
		for(var i=0;i<navlist.children.length;i++){
			navlist.children[i].className="";
		}
		this.className="nactive";
	}
}
//btn绑定点击事件
btn[1].onclick=move;
btn[0].onclick= function(){
		num--;
	if(num<0){
		imglist.style.marginLeft=(imglist.children.length-1)*1200+"px";
		num=imglist.children.length-2;
		
	}
	startMove(imglist,{marginLeft:-num*1200});
	for(var i=0;i<navlist.children.length;i++){
		navlist.children[i].className="";
	}
	navlist.children[num>=(imglist.children.length-1)?0:num].className="nactive";
}

//btn划入划出事件
banner.onmouseover=function(){
	btn[0].style.display="block";
	btn[1].style.display="block";
	clearInterval(time);
}
banner.onmouseout=function(){
	btn[0].style.display="none";
	btn[1].style.display="none";
	time=setInterval(move,1000);
}