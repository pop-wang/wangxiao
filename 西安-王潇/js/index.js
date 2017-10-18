//1、实现全选、 反选 点击弹出选择内容
//var allCheck=document.querySelector(".allCheck");
//var singleCheck=document.getElementsByTagName("input");
//console.log(singleCheck);
//allCheck.onclick = function(){
//	for(var i=1;i<singleCheck.length;i++){
//		if(singleCheck[i].checked){
//			singleCheck[i].checked = false;
//		}else{
//			singleCheck[i].checked = true;
//		}
//	}
//}
//2、写出至少两种数组去重的函数
//--1.去掉数组连重复的元素（不创建新数组）
//var arr=[1,3,2,4,5,6,2,3,5,4,2,3,5,7,8,567];
//	for(var i=0;i<arr.length;i++){ 
//		for (var j=i+1;j<arr.length;j++) {
//			if(arr[i]==arr[j]){
//			arr.splice(j,1);
//			j--;
//			}
//		}		
//	}
//	console.log(arr);
////--2.创建新数组
//var arr=[1,3,2,4,5,6,2,3,5,4,2,3,5,7,8,567];
//var newarr=[];
//	for(var i=0;i<arr.length;i++){
//		if(arr.indexOf(arr[i])==i){ 
//		if(newarr.indexOf(arr[i])==-1)
//			newarr.push(arr[i]);
//		}
//	}
//	console.log(newarr);
//
////3、使用js创建10个li 没给个li添加点击事件 获取
//for (var i=0;i<10;i++) {
//	var body=document.querySelector("body");
//	var oli=document.createElement("li");
//	oli.innerHTML=1;
//	body.appendChild(oli);
//	oli.onclick=function(){
//			alert("获取成功")
//	}
//}

//4、QQ号码测凶吉 使用https://www.showapi.com/api/lookPoint/863 把测试结果展示在界面上
var HOST="http://route.showapi.com/";
var SISTER="863-1";
function loadData(){
	var parm="showapi_appid=42208&showapi_sign=b1818eeddbd549ca9a6601a750ceb9fb&qq=1289063804";
	var request=new XMLHttpRequest();
	request.open("GET",HOST+SISTER+"?"+parm);
	request.onload=function(){
		var result=JSON.parse(request.response);
		var datas=result.showapi_res_body;
		console.log(datas);
		var container=document.querySelector(".container");
		container.innerHTML="<p>"+datas.score+"</p><p>"+datas.grade+"</p><p>"+datas.analysis+"</p><p>"+datas.desc+"</p>"
	}
	request.send();
}
loadData();

//5、写一个找不同的小游戏 点击显示图案 如果有两个相同 则消除 直到全部消除 提示成功
答:不会.


