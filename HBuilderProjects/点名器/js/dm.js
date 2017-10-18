var names = ['安小兵','李珍珍','王永','井东升','孟婧','张静','张笠','姚庆涛','王潇','范小龙'];
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

