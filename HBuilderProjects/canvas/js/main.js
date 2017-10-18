(function(){
	function init(){
		var painter=new Painter("box");
		painter.setLineWidth(5);
		painter.isRoundLineCap(true);
		painter.setLineColor("red");
		var toolView=document.querySelector(".tool")
		document.querySelector(".openButton").onclick=function(){
			toolView.style.display=toolView.style.display==="block"?"none":"block";
		};
		document.querySelector("input[type=range]").value=painter.context.lineWidth*2;
		document.querySelector("input[type=range]").onchange=function(){
			painter.setLineWidth(this.value/4);
		};
		
		document.querySelector("input[type=color]").value=painter.context.strokeStyle;
		document.querySelector("input[type=color]").onchange=function(){
			painter.setLineColor(this.value);
		};
		var download=document.querySelector(".download");
		download.onclick=function(){
			download.setAttribute("href",painter.save());
		};
		document.querySelector(".clear").onclick=function(){
			painter.clear();
		};
		var eraser=document.querySelector(".eraser");
		/*eraser.onclick=function(){	
			eraser.innerHTML=eraser.innerHTML==="橡皮擦"?"停止":"橡皮擦";
			if(eraser.innerHTML=="停止"){
				document.body.style.cursor="url(img/eraser.png),pointer";
				painter.eraser();
			}else{
				document.body.style.cursor="";
				painter.setLineColor(document.querySelector("input[type=color]").value)
				painter.drawLine()
			}
			
		};*/
		eraser.onclick=function(){
			painter.rubber();
		}
	}
	init();
})();
