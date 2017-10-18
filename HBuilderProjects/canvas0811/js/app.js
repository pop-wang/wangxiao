/*CanvasGradient :设置canvas里免颜色渐变的类，可以通过设置颜色的方式(fillStyl/strokeStyle)去设置渐变对象
 * 方法：
 * addColorStop(offset(0-1),color):这个方法可以多次调用添加渐变的颜色值
 * CanvasRenderingContext2D.createLinearGradient()//创建一个渐变对象
 * CanvasRenderingContext2D.strokeText(text，x，y [，maxWidth]);Canvas 2D API 的方法在给定的(x，y)位置上触发给定的文本。如果提供了最大宽度的可选第四个参数，文本将被缩放以适应该宽度。
*/
(function(){
	function init(){
		/*var canvasEle=document.querySelector("#box");
		canvasEle.width=innerWidth;
		canvasEle.height=innerHeight;
		window.onresize=function(){
			cavnasEle.width=innerWidth;
			canvasEle.height=innerHeight;
		};
		var context=canvasEle.getContext("2d");
		var linearGradient=context.createLinearGradient(0,0,innerWidth,innerHeight);//创建线性渐变的方法->CanvasGradient类型的对象
		linearGradient.addColorStop(0,"blue");
		linearGradient.addColorStop(0.5,"white");
		linearGradient.addColorStop(1,"green");
		context.fillStyle=linearGradient;//添加颜色渐变
		context.strokeStyle=linearGradient;
		context.font="40px 华文楷体";
		context.strokeText("你好",100,100);
		context.fillText("你好",200,200);
//		context.fillRect(0,0,innerWidth,innerHeight);*/
		
		var table=new Table(document.body,[33,200,500,90,100,800,770,1000,560]);		
		setInterval(function(){
			var datas=[];
			for (var i=0;i<10;i++) {
				datas.push(Math.random()*1000);//随机创建数组
			}
			table.setDatas(datas);//将新的数据传入到table中
		},1000*Math.random()*4);//随机一个秒数
	}
	init();
})();
