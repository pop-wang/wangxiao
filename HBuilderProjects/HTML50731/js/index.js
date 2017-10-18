var request=new XMLHttpRequest();
request.open("GET","js/index.json");
request.send();
request.onload=function(){
	var audioData=JSON.parse(this.response);
	var audio=document.createElement("audio");
	audio.src=audioData[0].audioUrl;
	audio.controls=true;
	document.body.appendChild(audio);
	var curIndex=0;
	var nextButton=document.querySelector(".nextButton");
	nextButton.onclick=function(){
		audio.src=audioData[++curIndex].audioUrl;
	}
	document.querySelector(".playButton").onclick=function(){
		audio.play();
	}
	document.querySelector(".volumeInput").onchange=function(){
		audio.volume=parseFloat(this.value)/100 ;
	}
	document.querySelector(".mutedButton").onclick=function(){
		audio.muted=!audio.muted;
		this.textContent=audio.muted?"静音":"正常";
	}
};

