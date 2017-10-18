(function(){
	function Painter(id){
		var canvasEle=document.getElementById(id);
		canvasEle.width=innerWidth;
		canvasEle.height=innerHeight;
		this.context=canvasEle.getContext("2d");
//		this.context.strokeStyle="white";
		this.drawLine();
		this.bgcolor=document.defaultView.getComputedStyle(canvasEle, null).backgroundColor;
	}
	Painter.prototype.drawLine=function(){
		var self=this;
		self.context.canvas.addEventListener("mousedown",startAction);
		self.context.canvas.addEventListener("mouseup",endAction);
		function startAction(event){
			if(!self.isClear){//如果没有使用橡皮擦就是划线的功能
				self.context.beginPath();
				self.context.moveTo(event.pageX,event.pageY);
				self.context.stroke();
			}
			
			self.context.canvas.addEventListener("mousemove",moveAction);
		}
		function endAction(){
			self.isClear=false;//不再使用橡皮擦的功能
			self.context.canvas.removeEventListener("mousemove",moveAction);
		}
		function moveAction(event){
			if(self.isClear){//移动的时候清除，-8的原因是要让他移动到中间
				self.context.clearRect(event.pageX-8,event.pageY-8,16,16);
				return;
			}
			self.context.lineTo(event.pageX,event.pageY);
			self.context.stroke();
		}
	}
	Painter.prototype.setLineWidth=function(width){
		this.context.lineWidth=width;
	}
	Painter.prototype.isRoundLineCap=function(isRound){
		this.context.lineCap=isRound?"round":"butt";
	}
	Painter.prototype.setLineColor=function(color){
		this.context.strokeStyle=color;
	}
	Painter.prototype.save=function(){
		return this.context.canvas.toDataURL();//吧绘制的内容保存成一个图片地址
	}
	Painter.prototype.clear=function(){
		this.context.clearRect(0,0,innerWidth,innerHeight);
	}
/*	Painter.prototype.eraser=function(){
		this.setLineColor(this.bgcolor);
		this.drawLine();		
	}*/
	Painter.prototype.rubber=function(){
		this.isClear=true;
		
	}
	window.Painter=Painter;
})();
