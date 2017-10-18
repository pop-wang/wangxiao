var pre = document.getElementById('pre');
var next = document.getElementById('next');
var bannersbox = document.getElementById('bannersbox').getElementsByTagName("img");
var i = 0;
pre.onclick = function(){
	i++;
	if(i==7){i=6;}
	for(var j=0;j<7;j++){              
		bannersbox[j].style.display = "none";
		}
		bannersbox[i].style.display = "block";
	}
next.onclick = function(){
	i--;
	if(i==-1){i=0;}
	for(var j=0;j<7;j++){
		bannersbox[j].style.display = "none";
	}
	bannersbox[i].style.display = "block";
}
var prea = document.getElementById('prea');
var nexta = document.getElementById('nexta');
var slide1 = document.getElementById('slide1');
var slide2 = document.getElementById('slide2');
prea.onclick = function(){
	slide1.style.display="none";
	slide2.style.display="block";
}
nexta.onclick = function(){
	slide2.style.display="none";
	slide1.style.display="block";
}
