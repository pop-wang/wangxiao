/*arc(x,y,radius,startAngle,endAngle,anticlockwise(默认逆时针)):绘制弧线，x,y原点，radius半径，startAngle，endAngle起始和结束角度，是否逆时针
 * bezierCurveTo(参考点1x，参考点1y，参考点2x，参考点2y，终点x，终点y)：绘制贝塞尔曲线
 * 
 */
(function(){
	var curEle=null;
	var startPoint=document.querySelector(".startPoint");
	var endPoint=document.querySelector(".endPoint");
	var Point1=document.querySelector(".Point1");
	var Point2=document.querySelector(".Point2");
	var context=null;
	function init(){
		var canvasEle=document.querySelector("#box");
		canvasEle.width=innerWidth;
		canvasEle.height=innerHeight;
		window.onresize=function(){
			canvasEle.width=innerWidth;
			canvasEle.height=innerHeight;
		};
		context=canvasEle.getContext("2d");
		context.strokeStyle="white";
		context.lineWidth=10;
		//x,y,radius,startAngle,endAngle,anticlockwise(默认逆时针)
		/*context.beginPath();
		context.arc(500,300,200,0,Math.PI*2,true);
		context.stroke();
		context.beginPath();
		context.arc(600,300,100,0,Math.PI,true);
		context.stroke();
		context.beginPath();
		context.arc(400,300,100,0,Math.PI,false);
		context.stroke();
		context.beginPath();
		context.moveTo(300,300);
		context.bezierCurveTo(500,400,200,400,600,600);
		context.stroke();*/		
		for(var i=0;i<4;i++){//循环给每个元素添加事件
			addEvent([startPoint,endPoint,Point1,Point2][i]);
		}
		document.ondblclick=function(){
			document.removeEventListener("mousemove",move)
		};		
	}
	function addEvent(ele){
			ele.onmousedown=function(){
				curEle=this;
				document.addEventListener("mousemove",move)
			};
		}
	function move(event){
			curEle.style.left=event.pageX+"px";
			curEle.style.top=event.pageY+"px";
			context.clearRect(0,0,innerWidth,innerWidth);
			context.beginPath();
			context.moveTo(getLeft(startPoint),getTop(startPoint));
			context.bezierCurveTo(getLeft(Point1),getTop(Point1),getLeft(Point2),getTop(Point2),getLeft(endPoint),getTop(endPoint));
			context.stroke();	
	}
	function getLeft(ele){
		return parseInt(ele.style.left)
	}
	function getTop(ele){
		return parseInt(ele.style.top)
	}

	
	init();
})();
