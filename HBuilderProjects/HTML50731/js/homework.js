//解析歌词
//function parseLRC(filePath){
//	var lrcObj={};
//	var request=new XMLHttpRequest();
//	request.open("GET",filePath);
//	request.send();
//	request.onload=function(){
//		var lrcString=this.response;
//		console.log(lrcString);
//		 var regExp = /\[(\d{2}):(\d{2})\.(\d{2})\](.*)/g;//正则表达式的对象（每一个需要单独提出来的元素）
//		while(1){
//			var result=regExp.exec(lrcString);
//			if(result){//result是一个数组，第一个值是所有遍历出来的对象，剩下为小括号单独提取出来的值
//				var time=parseInt(result[1])*60+parseInt(result[2]);//将时间转换为毫秒
//              lrcObj[time]=result[4];//在对象中存储，毫秒时间对应的歌词
//			}else{
//				break;
//			}
//		}
//	};	
//	return lrcObj;
//}
//
//function init(){
//	var lrcObj=parseLRC("resource/丑八怪 .lrc");
//	console.log(lrcObj)
//	var audio=document.createElement("audio");
//	audio.src="resource/薛之谦-丑八怪.mp3";
//	audio.autoplay=true;
//	audio.controls=true;
//	document.body.appendChild(audio);
//	//获取总时长
//	var audioProgress=document.querySelector(".audioProgress");
//	audio.oncanplay=function(){
//		console.log(this.duration);//歌曲的元数据加载出来才能获取总时长
//		audioProgress.max=this.duration;
//	}
//	
//	audio.ontimeupdate = function () {
//		console.log(this.duration);//歌曲的元数据加载出来才能获取总时长
//		audioProgress.value=this.currentTime;
//      console.log(this.currentTime);
//      //歌词显示以秒为单位，如果有当前时间，则显示当前时间取整，没有就显示原来盒子里面的内容
//      document.querySelector(".lrcContainer").innerHTML = lrcObj[parseInt(this.currentTime)]?lrcObj[parseInt(this.currentTime)]:document.querySelector(".lrcContainer").innerHTML;
// }
//
//	/*var curTime = 0;
//  console.log(lrcObj);
//  var timer = setInterval(function () {
//      console.log(lrcObj[curTime]);
//      document.querySelector(".lrcContainer").innerHTML = lrcObj[curTime]?lrcObj[curTime]:document.querySelector(".lrcContainer").innerHTML;
//     curTime++;
//     if (curTime >= audio.duration*60){
//         clearInterval(timer);
//     }
//  },1000);*/
//}
//init();


var request=new XMLHttpRequest();
request.open("GET", "js/homework.json");
request.send();
request.onload = function() {
	var audioData = JSON.parse(this.response);
	console.log(audioData);
	var audio = document.createElement("audio");
	audio.src = audioData[0].audioUrl;
	audio.controls = true;
	document.body.appendChild(audio);
	var curIndex = 0;
	//调节音量，自动播放
	document.querySelector(".volumeInput").onchange = function() {
		audio.volume = parseFloat(this.value) / 100;
	};
	document.querySelector(".playButton").onclick = function() {
			audio.play();
		}
	//显示歌词
	
	
	//设置播放方式：单曲循环 顺序播放 随机播放
	var mySelect = document.querySelector(".playButton");
	var myIndex = mySelect.selectedIndex;
	//				mySelect.options[myIndex].value.onchange=function(){
	//					switch (mySelect.options[myIndex].value){
	//						case "单曲循环":
	//							audio.src=audioData[curIndex].audioUrl;
	//							break;
	//						case "顺序播放":
	//							audio.src=audioData[curIndex].audioUrl;
	//							break;
	//						default:
	//							break;
	//					}
	//				}

	//上一曲，下一曲				
	document.querySelector(".preButton").onclick = function() {
		curIndex--;
		if(curIndex < 0) {
			curIndex = 0;
		}
		audio.src = audioData[curIndex].audioUrl;
		audio.play();
	};
	document.querySelector(".nextButton").onclick = function() {
		curIndex++;
		if(curIndex > audioData.length - 1) {
			curIndex = audioData.length - 1;
		}
		audio.src = audioData[curIndex].audioUrl;
		audio.lrc = audioData[curIndex].audioUrl;
		audio.play();
	};
	
	var duration=''
	audio.oncanplay=function(){
		duration = this.duration;//歌曲的元数据加载出来才能获取总时长
		
	} 
	
}
//封装思想
//function Player(src,lrc){
//	this.obtainUrl();
//}
//Player.prototype.obtainUrl=function(){
//	var request=new XMLHttpRequest();
//	request.open("GET", "js/homework.json");
//	request.send();	
//	var self = this;
//	request.onload = function() {
//		var audioURL = JSON.parse(this.response);
//		var audio = document.createElement("audio");
//		audio.src = audioURL[0].audioUrl;
//		audio.controls = true;
//		document.body.appendChild(audio);
//		
//		self.updateUI(audioURL)
//	}
//}
//var curIndex = 0;
//
////获得歌曲src地址
//
////更新播放歌曲界面
//Player.prototype.updateUI=function(audioURL){
//	
////	console.log(audioURL)
//	var audio = document.querySelector('audio');
//	audio.src = audioURL[curIndex].audioUrl;
//	audio.lrc = audioURL[curIndex].audioLrc;
//	if(curIndex > audioURL.length - 1) {
//		curIndex = audioURL.length - 1;
//	}
//	audio.play();
//	curIndex++;
//}
//
//
////document.querySelector(".nextButton").onclick=new Player().updateUI;
//
//
//var p = new Player()