(function(){
	function cube(className){
		var width=className==="out-cube"?400:200;
		var ul=document.createElement("ul");
		ul.setAttribute("class",className);
		//判断是否是是里面的还是外面的那个立方块
		className==="out-cube"?ul.style.cssText="width:"+width+"px;height:"+width+"px;list-style: none;position:absolute;margin: 10% auto;transform-style: preserve-3d;animation: rotate 5s linear 0s infinite;":ul.style.cssText="width:"+width+"px;height:"+width+"px;list-style: none;position:absolute;margin: 10% auto;transform-style: preserve-3d;animation: rotate 5s linear 0s infinite;top:100px;left:100px;";
		//将立方体每个面的样式存到数组中
		var styles=["background-color: yellow;transform: translateZ("+width/2+"px);","background-color: yellowgreen;transform: translateZ("+-width/2+"px);","background-color: cyan;transform: translateX("+width/2+"px) rotateY(90deg);","background-color: lightseagreen;transform: translateX("+-width/2+"px) rotateY(90deg);","background-color: cornflowerblue;transform: translateY("+width/2+"px) rotateX(90deg);","background-color: skyblue;transform: translateY("+-width/2+"px) rotateX(90deg);"];
		//循环创建立方体的每个面
		for(var i=0;i<styles.length;i++){
			var li=document.createElement("li");
			li.style.cssText=styles[i]+"opacity:0.4;width:"+width+"px;height:"+width+"px;position:absolute;";
			ul.appendChild(li);			
		};
		return ul;
	}
	function init(){
		//创建立方块并且将它添加到父容器中
		document.querySelector(".container").appendChild(cube("out-cube"));
		document.querySelector(".container").appendChild(cube("in-cube"));
	}
	init();
})();
