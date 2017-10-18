var myDate = new Date();
var h = myDate.getHours();
var m = myDate.getMinutes();
var s = myDate.getSeconds();
document.write(myDate);

var miao = document.getElementById("miao");
var fen = document.getElementById("fen");
var shi = document.getElementById("shi");
function zhuan(){
	var myDate = new Date();
	var h = myDate.getHours();
	var m = myDate.getMinutes();
	var s = myDate.getSeconds();
	miao.style.transform = "rotate("+6*s+"deg)";
    miao.style.transformOrigin = "2.5px 100%";
    fen.style.transform = "rotate("+6*(m+s/60)+"deg)";
    fen.style.transformOrigin = "2.5px 100%";
    shi.style.transform = "rotate("+30*(h+m/60)+"deg)";
    shi.style.transformOrigin = "2.5px 100%";
}
setInterval(zhuan,1000)
