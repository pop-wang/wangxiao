/*canvas:
 * >做游戏：白鹭引擎、trees...;
 * >做动画；做动态图表，频谱；画图...
 * HTML5不是单纯的html
 * canvas本身是一个标签<canvas></canvas>,是一个空白的画布，默认是300*150的宽高
 * 本身有宽高的属性，不需要使用CSS去设置，如果非要设置，一定要和canvas的宽高设置相同，不然绘制出来的内容就是变形的
 * 如果希望画布上有内容，需要通过JS来绘制->是通过画布的上下文(相当于舞台，舞台上面可以有各种移动，展示出来)进行绘制的
 *使用步骤：
 *  >1.创建一个空白画布
 *  >2.获得画布的上下文
 *  >3.绘制准备：设置要绘制的一些样式和内容(画笔的宽，颜色，所需的资源)
 *  >4.开始绘制
 * HTMLCanvasElement的2个属性:
 * >width:宽；
 * >height:高
 * >lineWidth：设置笔画宽度
 * HTMLCanvasElement的2个方法：
 * >getContext(inDOMString contextId)，可以传2d或者experimental-webgl(图形图像处理)
 * >toDataURL():把canvas对象转成url->生成带有绘制内容的一个资源链接地址
 * >moveTo(x,y):抬起笔来要落到哪一个位置
 * >lineTo(x,y):画线到某个点
 * >stroke(不传||path)：把画的内容绘制出来:path是2d类型的
 * >beginPath():标识，要开始一个路径
 * >closePath():标识，要闭合一个路径
 * >clearRect():是 Canvas 2D API 设置指定矩形区域内（以 点 (x, y) 为起点，范围是(width, height) ）所有像素变成透明，并擦除之前绘制的所有内容的方法。
 * >canvas:获得画布的DOM元素；
 * >lineCap：设置画笔结束位置的形状(butt:方形，round：圆形，square：线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。)
 * >CanvasRenderingContext2D.createLinearGradient()Canvas 2D API 的方法沿着由参数表示的坐标给出的线创建一个梯度。
 * >CanvasRenderingContext2D.createRadialGradient()Canvas 2D API 的方法创建由参数表示的两个圆的坐标给出的径向渐变。此方法返回a CanvasGradient。
 * >CanvasRenderingContext2D.arc（x<原点x坐标>，y<原点y坐标>，radius<半径>，startAngle<起始角度>，endAngle<结束角度>，anticlockwise<是否逆时针>）:其在中心的路径（X，Y）与半径位置[R开始于由startAngle和在结束endAngle通过在给定的方向上行进逆时针（默认顺时针）。
 * >CanvasRenderingContext2D.createLinearGradient()//创建一个渐变对象
 * >CanvasRenderingContext2D.strokeText(text，x，y [，maxWidth]);Canvas 2D API 的方法在给定的(x，y)位置上触发给定的文本。如果提供了最大宽度的可选第四个参数，文本将被缩放以适应该宽度。
 * >Scale(x,y):放大缩小，不会影响到画布本身，所放的是画布里面的内容(让画布里面的单位进行缩放)
 * >Save():保存画布上面之前的样式，即在写save之前的样式，包括(笔画宽度，颜色，变形)
 * >Restore()：还原的是上一次保存的状态，多次retore也是返回上次保存的内容[1]->1.[1,2]->2,1
 * >Translate():平移，以画布的原点为参考。也相当于重新设置原点。
 * >Rotate(anglePI/180*角度):旋转，旋转中心点一直是 canvas 的起始点。 如果想改变中心点，我们可以通过 translate() 方法移动 canvas 。
 * canvas里面的动画：
 * >1.通过不断刷新canvas里面的内容，实现动画
 * >2.清除上一次canvas里面的内容
 * CanvasGradient :设置canvas里免颜色渐变的类，可以通过设置颜色的方式(fillStyl/strokeStyle)去设置渐变对象
 * 方法：
 * >addColorStop(offset(0-1),color):这个方法可以多次调用添加渐变的颜色值
 */
 (function(){
 	var rectX=0;
 	var rectY=0;
 	var timer;
 	function init(){
 		//dom操作  HTMLElement
 		//canvas：HTMLCanvasElement
 		var canvasEle=document.querySelector("#box");
 		canvasEle.width=innerWidth;
 		canvasEle.height=innerHeight;	
 		/*获得画布的上下文 
 		 * 返回一个 CanvasRenderingContext2D对象：提供了绘制，设置绘制内容的方法属性
 		 * >fillStyle：设置填充的样式(充满)
 		 * >storkeStyle：设置绘制内容轮廓的样式
 		 * >fillRect(x,y,w,h):绘制矩形的方法,以填充的方式绘制,原点是画布的左上角
 		 */
 		var context=canvasEle.getContext("2d");	
 		//设置要绘制的参数
// 		context.fillStyle="red";
   		//设置绘制内容轮廓的样式
// 		context.strokeStyle="yellow";
 		//距离原点左上角100,边长为50，50()的画布
        //context.fillRect(100,100,50,50);
        context.lineWidth=2;
        /*context.moveTo(200,100);
        context.lineTo(400,100);
        context.moveTo(400,100);
        context.lineTo(400,200);
        context.moveTo(400,200);
        context.lineTo(200,200);
        context.moveTo(200,200);
        context.lineTo(200,100);
        context.stroke();*/
       
       	rectX=50;
       	rectY=30;
       	drawRect({
       		context:context,
       		strokeColor:"white",
       		fillColor:"orange",
       		x:50,
       		y:30,
       		width:100,
       		height:100
       		
       	});
       	/*setTimeout(function(){
       		context.clearRect(0,0,innerWidth,innerHeight);
       	},3000);
       	rectControl(context);*/
 	}
 	//封装一个画矩形的方法
 	function drawRect(info){
 		if(!info){
 			console.log("必须传参数");
 			return;
 		}
 		info.context.strokeStyle=info.strokeColor;
 		info.context.fillStyle=info.fillColor;
 		info.context.beginPath();//是 Canvas 2D API 通过清空子路径列表开始一个新路径的方法。 当你想创建一个新的路径时，调用此方法。
 		info.context.moveTo(info.x,info.y);
        info.context.lineTo(info.x+info.width,info.y);
        info.context.lineTo(info.x+info.width,info.y+info.height);
        info.context.lineTo(info.x,info.y+info.height);
//      info.context.lineTo(info.x,info.y);
        info.context.closePath();//是 Canvas 2D API 将笔点返回到当前子路径起始点的方法
        info.context.fill();//是 Canvas 2D API 根据当前的填充样式，填充当前或已存在的路径的方法
        info.context.stroke();       
 	}	
 	function rectControl(context){
 		document.onkeydown=function(event){//当按下wasd的时候执行不同的动画
 			var dis="";
// 			console.log(event);
 			switch(event.keyCode){
 				case 87:
 					dis="top";
 					break;
 				case 65:
 					dis="left";
 					break;
 				case 83:
 					dis="bottom";
 					break;
 				case 68:
 					dis="right";
 					break;
 				default:
 					break;
 			}
 			move(context,dis);
 		};
 		document.onkeyup=function(){
 			clearInterval(timer);
 			timer=null;
 		}
 	} 	
 	function move(context,direction){
 		context.clearRect(1,1,innerWidth,innerHeight);//清除上一帧
 		var distance=5;
 		switch(direction){
 			case "left":
 				rectX-=distance;
 				break;
 			case "right":
 				rectX+=distance;
 				break;
 			case "top":			
 				rectY-=distance;
 				console.log(rectY)
 				break;
 			case "bottom":
 				rectY+=distance;
 				break;
 		}    	
 		drawRect({
       		context:context,
       		strokeColor:"white",
       		fillColor:"orange",
       		x:rectX,
       		y:rectY,
       		width:100,
       		height:100      		
       	});  
       	if(timer){return}//自己调用自己，如果有timer，就不要去创建，如果不写，每次都创建，定时器效果会叠加
       	timer=setInterval(function(){
       		move(context,direction);
       	},30)
 	}
 	init();
 })();
