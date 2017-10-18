var tu =document.getElementById('tu');
var n = 1;
function banners(){
	n++;
	if(n==4){
		n=1;
	}
	tu.src="img/sqb"+n+".jpg";
}
setInterval(banners,2000);
