var topp1 = document.getElementById('topp1');
var topp2 = document.getElementById('topp2');
var downn1 = document.getElementById('downn1');
var downn2 = document.getElementById('downn2');
var ouser = document.getElementsByTagName('input')[0];
var opsd = document.getElementsByTagName('input')[1];
var oremind = document.getElementsByTagName('input')[2];
var obtn = document.getElementsByTagName('input')[3];

topp1.onclick = function(){
	downn2.style.display="none";
	downn1.style.display="block";
	topp1.style.color="#FF6700";
	topp2.style.color="#B0B0B0";
}
topp2.onclick = function(){
	downn1.style.display="none";
	downn2.style.display="block";
	topp2.style.color="#FF6700";
	topp1.style.color="#B0B0B0";
}
obtn.onclick = function(){
	console.log(oremind.value)
	if(ouser.value.length<=0){
		oremind.style.display = "block";
		oremind.value= '请输入用户名';
	}
	if(ouser.value.length>0){
		if(opsd.value.length<=0){
			oremind.style.display = "block";
			oremind.value= '请输入密码';
		}
	}
}
