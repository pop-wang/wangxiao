/*webAPI 获取摄像头及mic
Navigator -> mediaDevices(MediaDevices)-> getUserMedia()
可以通过mediaDevices 获得设备的摄像头或者mic
通过getUserMedia 获得视频 或者 音频流 （MediaStream）

getUserMedia({video:true,audio:true}) -> promise
Then(function(stream){})-> 视频流或者音频流

Audio video标签 不可以直接播放 MediaStream这种格式的数据 -> 转换为URL -> URL.createObjectURL(MediaStream);
*/
/*navigator.mediaDevices.getUserMedia({audio:true,video:true}).then(function (stream) {
    var video=document.querySelector("video");
    video.src=URL.createObjectURL(stream);//将视频流转换为url格式的文件，并且显示在页面上，然后自己就可以和自己视频了
}).catch(function(error){
	console.log(error);
});//获取媒体设备->用户的每媒体信息(参数：可以录音频和视频，或得到视频和音频流的时候就可以调用then里面的回调函数)
navigator.mediaDevices.getUserMedia({audio:true}).then(function (stream) {
    var audio=document.querySelector("audio");
    audio.src=URL.createObjectURL(stream);//将音频流转换为url格式的文件，并且显示在页面上，然后自己就可以和自己视频了
});//audioContext可以添加频谱和音效，课下自己学习
*/
/*Promise:承诺，许诺>(可以替代callback，不知道什么时候完成，但是想获得完成后的结果)
 * 执行>可以去做->有然后了>then()>then(function(){发生然后的事})
 * 执行>不去做->发生了一些异常>catch()>catch(function(){说2.一些理由})
 * new Promise(function(){do,reject})
 * 创建Promise对象的时候 第一个参数（函数） 去做的函数 -> 如果调用第一个参数（函数） 会执行 then里面的回调函数
 * 创建Promise对象的时候 第二个参数（函数） 不去做 的函数 -> 如果调用第二个参数（函数） 会执行 catch里面的回调函数
 */
/*success,reject->形参
var promise=new Promise(function(success,reject){
	setTimeout(function(){
//		success("打车走-去簋街");
		reject("你是个丑八怪");
	},3*1000);
});*/
////链式函数写法
/*promise.then(function(口信){
	console.log("女神跟着"+口信);
}).catch(function(口信){
	console.log(口信);
});*/

/*function loadData(url,callback){
	
}
loadData("url",function(result){
	
});
function loadData(url){
	return new Promise(function(success,reject){
		var request=new XMLHttpRequest();
		request.open("GET",url);
		request.onload=function(){
			console.log(this.response);
			var obj=JSON.parse(this.response)
			obj.showapi_res_code==0?success(obj.showapi_res_body):reject(obj.showapi_res_error);
		};
		request.send();
	});

}
loadData("http://route.showapi.com/213-1").then(function(result){
	document.write(result);
}).catch(function(error){
	alert(error);
});*/

/*MediaRecorder：既可以录音频也可以录视频
 * 具体是录音频还是视频是根据传入的MediaStream决定的
 * 在创建对象的时候需要传入媒体流new MediaRecorder(媒体流对象)
 * 固定写法：类名，属性名，监听事件的名字
 * 自己写法：形参，自己定义的变量
 */
var promise=navigator.mediaDevices.getUserMedia({audio:true});
promise.then(function(stream){
//录制媒体流
	var audio=document.querySelector("audio");//时时监听音频流
    audio.src=URL.createObjectURL(stream);//src设置为媒体流格式
	var recorder=new MediaRecorder(stream);
	var recorderControl=document.querySelector(".recorderControl");
	recorderControl.onclick=function(){
		this.textContent==="录制"?audio.play():audio.pause();
		this.textContent==="录制"?recorder.start():recorder.stop();
		this.textContent=this.textContent==="录制"?"停止":"录制";
	};
	var buffer=null;
	//获得有效数据时调用的回调方法
	recorder.ondataavailable=function(event){
	//收集媒体设备或得到的可以使用的媒体流数据
		console.log(event.data);
		buffer=event.data;//收集到有效数据
	};
	var downloadButton=document.querySelector(".downloadButton");
	recorder.onstop=function(){
		var url=URL.createObjectURL(buffer);//new Blob[buffer]
		console.log(url);
		downloadButton.href=url;
		downloadButton.click();//停止的时候自动下载
		buffer=null;//清空buffer
	};
	
}).catch(function(error){
	console.log(error);
});

//获取位置信息
navigator.geolocation.getCurrentPosition(function(result){//获取当前地址
	console.log(result);
},function(error){
	console.log(error);
});
var watchID=navigator.geolocation.watchPosition(function(result){//持续获取地址
	console.log(result);
},function(error){
	console.log(error);
});
navigator.geolocation.clearWatch(watchID);//清除监听方法，百度地图里面没有这个方法