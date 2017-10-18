var jiantou = document.getElementById('jiantou');
var demoff = document.getElementById('demoff');
var phone = document.getElementById('phone');
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var p3 = document.getElementById('p3');

jiantou.onclick = function(){
	if(demoff.style.display == "none"){
		
		demoff.style.display = "block";
		jiantou.src = "img/icon-up.png";
		
	}else{
		
		demoff.style.display = "none";
		jiantou.src = "img/icon-down.png";
	}
	
}

p1.onclick = function(){
	phone.src = "img/p1.jpg";
	p1.style.border = "1px solid #FF6700";
	p1.style.color = "#FF6700";
	p2.style.border = "1px solid #E0E0E0";
	p2.style.color = "#000";
	p3.style.border = "1px solid #E0E0E0";
	p3.style.color = "#000";
}
p2.onclick = function(){
	phone.src = "img/p2.jpg";
	p2.style.border = "1px solid #FF6700";
	p2.style.color = "#FF6700";
	p1.style.border = "1px solid #E0E0E0";
	p1.style.color = "#000";
	p3.style.border = "1px solid #E0E0E0";
	p3.style.color = "#000";
}
p3.onclick = function(){
	phone.src = "img/p3.jpg";
	p3.style.border = "1px solid #FF6700";
	p3.style.color = "#FF6700";
	p2.style.border = "1px solid #E0E0E0";
	p2.style.color = "#000";
	p1.style.border = "1px solid #E0E0E0";
	p1.style.color = "#000";
}
