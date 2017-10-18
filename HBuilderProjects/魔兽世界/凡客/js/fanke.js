var tu = document.getElementById("tu");
var n =10;
function lunbo(){
	n++;
	if(n==16){
		n = 10;
	}
	tu.src="img/lcq-fk-0"+n+".jpg"
}
setInterval(lunbo,2000)
