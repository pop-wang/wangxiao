(function(){
	/*1.封装表格的背景
	 *2.绘制带文字小方块
	 * datas是传过来的需要可视化的数据
	 */
	function Table(superEle,datas){
		this.canvasContext=document.createElement("canvas").getContext("2d");//创建canvas对象
		superEle.appendChild(this.canvasContext.canvas);//添加到父元素中
		this.width=this.canvasContext.canvas.width=innerWidth;//设置宽
		this.height=this.canvasContext.canvas.height=innerHeight;//设置高
		this.datas=datas||[];
		this.background();
		this.addRect();
	}
	Table.prototype.background=function(){
		this.canvasContext.beginPath();
		this.canvasContext.strokeStyle="black";
		var space=10;
		this.canvasContext.strokeRect(space,space,this.width-space*2,this.height-space*2);//绘制矩形，边距留白
		var lineHeight=(this.height-space*2)/10;
		for(var i=1;i<10;i++){//绘制背景的9根线
			this.canvasContext.moveTo(space,space+lineHeight*i);
			this.canvasContext.lineTo(this.width-space,space+lineHeight*i);
			this.canvasContext.stroke();
		}
	}
	Table.prototype.addRect=function(){
		var gradient=this.canvasContext.createLinearGradient(0,0,0,this.height);
		gradient.addColorStop(0,"red");
		gradient.addColorStop(1,"green");
		this.canvasContext.fillStyle=gradient;
		//宽度间距
		var rectWidth=this.width-10*2;//总宽度
		var rectHeight=this.height-10*2;//总高度
		var space=rectWidth/this.datas.length/5;//间距是柱状图的1/5
		var width=(rectWidth-space*(this.datas.length+1))/this.datas.length;
		var max=1000;
		var heightScale=rectHeight/max;//计算比例
		for (var i=0;i<this.datas.length;i++) {
			var height=this.datas[i]*heightScale;
			var y=this.height-10-height;//总宽度-边距-小方块宽度
			this.canvasContext.fillRect(space+(space+width)*i+10,y,width,height);
		}
	}
	Table.prototype.setDatas=function(datas){
		this.datas=datas;
		this.canvasContext.clearRect(0,0,innerWidth,innerHeight);//清除上一次的内容然后再新建
		this.background();
		this.addRect();
	}
	window.Table=Table;
})();
