//自定义一个控件，加减按钮控制地图放大和缩小
window.UMap=window.UMap||{};//定义一个自己的命名空间UMap
(function(){
	function SControl(){
		this.defaultAnchor= BMAP_ANCHOR_TOP_LEFT;
		this.defaultOffset=new BMap.Size(50,50);
	}
	SControl.prototype=new BMap.Control();//所有自定义的控件也是基于基类Control的
	SControl.prototype.initialize=function(map){
		var container=document.createElement("div");
		var minbtn=document.createElement("button");
		var maxbtn=document.createElement("button");
		minbtn.textContent=" -- ";
		maxbtn.textContent=" ++ ";
		minbtn.style.cssText=maxbtn.style.cssText="font-size: 25px;";
//		minbtn.onclick = function(){
//			map.setZoom(map.getZoom()-1);
//	  	};
//	  	maxbtn.onclick = function(){
//			map.setZoom(map.getZoom()+1);
//	  	};
		function action(){//添加点击事件
			this.textContent==="++"?map.zoomIn():map.zoomOut();
		}
		minbtn.onclick=action;
		maxbtn.onclick=action;
		container.appendChild(minbtn);
		container.appendChild(maxbtn);
		map.getContainer().appendChild(container);//使用map.getContainer()方法可获得地图容器元素
		return container;//自定义控件时需要实现此方法，并将元素的DOM元素在该方法中返回。
	};

	UMap.SControl=SControl;
})();
