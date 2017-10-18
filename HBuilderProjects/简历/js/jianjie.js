

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");

btn1.onclick =function a(){
	form1.style.display = "block";
    form2.style.display = "none";
    form3.style.display = "none";
}

btn2.onclick =function a(){
	form1.style.display = "none";
	form3.style.display = "none";
	form2.style.display = "block";

}
btn3.onclick =function a(){
	form1.style.display = "none";
	form2.style.display = "none";
    form3.style.display = "block";
}



