var names = ['余敏','付铭祥','张静','彭慧','周沛','吴娇','刘金燕','姚兰','任刚','刘畅'];
var classmate = document.getElementById("classmate");
var btn = document.getElementById("btn");
var tu = document.getElementById("tu");
var huanhu = document.getElementById("huanhu");
var t;
function dianming(){
	var x = 10*Math.random();
	x=parseInt(x);
	classmate.value = names[x];
}

function kaishi(){
	
	if(btn.value == "停止"){
		clearInterval(t);
		btn.value = "开始";
		tu.style.display = "block";
		tu.innerHTML = classmate.value;
		huanhu.play();
		
	}else{
		t = setInterval(dianming,100);
		btn.value = "停止";
		tu.style.display = "none";
		huanhu.pause();
	}
}

