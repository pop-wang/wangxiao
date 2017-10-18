//实现跳窗js
var aclose = document.getElementsByTagName('a');
var win = document.getElementById('win');
var win1 = document.getElementById('win1');
var win31 = document.getElementById('win3-1');
var win32 = document.getElementById('win3-2');
var goog2 = document.getElementById("good123")
for(var j=0;j<aclose.length;j++){
	aclose[j].onclick = function(){
		win.style.display="block";
	}
	win32.onclick = function(){
		win.style.display="none";
	}
	win31.onclick = function(){
		win.style.display="none";
	}
	win1.onclick = function(){
		win.style.display="none";
	}	
}


//实现加加减减js
var btn = document.getElementsByTagName('button');
var txt = document.getElementsByTagName('input');
var aprice = document.getElementsByTagName('strong');
var allpri = document.getElementById('allpri');
var allnum = document.getElementById('allnum');
var snum = document.getElementById('snum');
for(var i=0;i<btn.length;i++){
	btn[i].onclick = function(){
		if(this.innerHTML=='+'){
			var num = this.parentNode.previousSibling.previousSibling.getElementsByTagName('input')[0];			
			num.value= parseInt(num.value)  +  1 ;
		}
		if(this.innerHTML=='-'){
			var num = this.parentNode.nextSibling.nextSibling.getElementsByTagName('input')[0];
			if(num.value<=1){
				num.value=1;
				return false;
			}
			num.value = parseInt(num.value)  - 1;
		}	
		this.parentNode.parentNode.nextSibling.nextSibling.getElementsByTagName('strong')[0].innerHTML=this.parentNode.parentNode.previousSibling.previousSibling.getElementsByTagName('span')[0].innerHTML*num.value;
    	resultp();
    	resultn();
    	snum.innerText5 = num.value;
   }  		
}

//合计金额计算的函数
resultp()	
function resultp(){
	allpri.innerText = 0;
	for(var n=0;n<aprice.length;n++){
		allpri.innerText = parseInt(aprice[n].innerText) + parseInt(allpri.innerText);
	}
}

//购物车总数量计算函数
resultn()
function resultn(){
	allnum.innerText = 0;	
	for(var a=0;a<txt.length;a++){
		if(txt[a].type == "text"){
			allnum.innerText = parseInt(txt[a].value) + parseInt(allnum.innerText);
		}		
	}
}


//实现全选的时候其他checkbox均选上
var allcheck = document.getElementById('allcheck');
allcheck.onclick = function(){
	for(var m=1;m<txt.length;m++){
		if(txt[m].checked){
			txt[m].checked = false;
		}else{
			txt[m].checked = true;
		}
	}
}

//判断html中的input中类型为checkbox的个数
var cnum =0;
for(var c=0;c<txt.length;c++){
	if(txt[c].type == "checkbox"){
		cnum = cnum+1;
	}
}

//实现checkbox全选的时候全选按钮选上
for(var m=1;m<txt.length;m++){
	txt[m].onclick = function(){
		snum.innerText = 0;
		var amount = 0;
		for(var k=1;k<txt.length;k++){
			if(txt[k].checked){
				amount = amount+1;				
				snum.innerText = parseInt(txt[k].parentNode.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.getElementsByTagName('input')[0].value) + parseInt(snum.innerText);
			}
			if(amount<cnum-1){
				allcheck.checked = false;
			}
			if(amount==cnum-1){
				allcheck.checked = true;
			}
			 
		}		
	}
}


















//btn[1].onclick = function(){
//	if(txt[2].value==5){txt[2].value=4;}
//	txt[2].value = parseInt(txt[2].value) + 1;
//	
//	this.parentNode.parentNode.nextSibling.nextSibling.getElementsByTagName('span')[0].innerHTML=this.parentNode.parentNode.previousSibling.previousSibling.getElementsByTagName('span')[0].innerHTML*this.parentNode.previousSibling.previousSibling.getElementsByTagName('input')[0].value;
//	
//}
//btn[0].onclick = function(){ 
//	if(txt[2].value<=1){
//		txt[2].value=1;
////		return false;跳出循环，后面的语句就不执行了
//	}else{
//		txt[2].value = parseInt(txt[2].value) - 1;
//		
//		this.parentNode.parentNode.nextSibling.nextSibling.getElementsByTagName('span')[0].innerHTML=this.parentNode.parentNode.previousSibling.previousSibling.getElementsByTagName('span')[0].innerHTML*this.parentNode.nextSibling.nextSibling.getElementsByTagName('input')[0].value;
//	
//	}
//	
//}