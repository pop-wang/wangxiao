/*应用缓存(Application Cache):
 * 在移动设备没有网络的情况下，不出现404并且可以基本使用
 * 使用步骤：
 * 1.需要有一个用于缓存的文件，尾缀为.manifest。(可以有尾缀也可以也没有尾缀)
 * 	a):是用于配置需要缓存的文件的
 *	b):在不同情况下缓存的内容
 * 2.在HTML中引入.manifest文件，可以使用应用缓存了
 */
(function(){
	console.log(window.applicationCache);
//已经缓存过的文件 下一有网的情况下，加载出来的内容还是之前缓存中的内容
/*解决思路：更新缓存的配置文件
 * window.applicationCache
 * onobsolete
*/
	window.applicationCache.onobsolete=function(){
		//更改应用缓存文件的名字
		console.log("应用缓存文件失效")
		this.swapCache();//会把旧的应用缓存替换成新的
		location.reload();///Location.reload()方法从当前URL重新加载资源。
	};
})();


//测试网络
(function(){
	navigator.onLine=function(){//online只是navigator的一个属性
		var request=new XMLHttpRequest();
		request.open("GET","js/data.json");
		request.onload=function(){
			console.log(JSON.parse(this.response).data.appcacheURL);
			document.querySelector("html").manifest=JSON.parse(this.response).data.appcacheURL;//可以动态去获得manifest这个文件了
		
		};
		request.send();
		window.applicationCache.onobsolete=function(){
			//更改应用缓存文件的名字
			console.log("应用缓存文件失效")
			this.swapCache();//会把旧的应用缓存替换成新的
			location.reload();///Location.reload()方法从当前URL重新加载资源。
		};
	}
})();
//可以监听在线离线事件
window.addEventListener("online",function(){
	console.log("online");
});
window.addEventListener("offline",function(){
	console.log("offline");
});
/*应用缓存的详细使用
 *1. 需要在服务端配制应用缓存文件
 * 2. 在客户端断网的时候保存一个版本当来网的时候更新应用缓存的文件可以通过applicationCache监听 应用缓存失效的状态，如果失效更新页面
 */
