(function(){
	var map=new BMap.Map("map");
	/*先右键开启可以收集的功能
	 * 双击地图 添加经纬度到数组
	 * 添加到10个，关闭收集功能
	 */
	function takePoints(done){
//		return new Promise(function(done){
			var points=[];//存储经纬度的数组
			var isActionDblclick=false;//判断是否触发过双击
			function listener(){/*双击地图 添加经纬度到数组，添加到10个，关闭收集功能*/	
				if(isActionDblclick){
					return;
				}
				isActionDblclick=true;
				function takeStart(event){//收集坐标点
					console.log(event);					
					points.push(event.point);//添加经纬度到数组	
					console.log(points);
					if(points.length>=10){//添加到10个关闭
						done(points);//把收集好的坐标点给调用的位置，Promise里面执行或者拒绝的方法只能执行一次，执行完就会移除函数(有可能把Promise里面的参数移除了。所以在需要多次执行某个回调的时候就不能使用Promise)
						isActionDblclick=false;
						map.removeEventListener("dblclick",takeStart);
						points=[];
					}
				}
				map.addEventListener("dblclick",takeStart);
			}
			map.addEventListener("rightclick",listener);
			
//		});
	}
	function addMarkerToMap(point){
		var marker=new BMap.Marker(point);
		map.addOverlay(marker);		
		marker.addEventListener("click",function(){
			new BMap.Geocoder().getLocation(point,function(result){
				console.log(result.address);
				var infowindow=new BMap.InfoWindow(result.address,{width:100,height:100,title:地址信息});
				map.openInfoWindow(infowindow,point);
			});
		});
	}
	function init(){
		map.centerAndZoom("北京");
		map.disableDoubleClickZoom();
//		takePoints().then(function(result){//result代表传过来的数组
		takePoints(function(result){
			result.forEach(function(point){
				addMarkerToMap(point);
			});
		});
	}
	init();
	var coder=new BMap.Geocoder();
	coder.getLocation(new BMap.Point(116.401481,39.914776),function(result){
		console.log(result);
	});//对指定的坐标点进行反地址解析。
	coder.getPoint("北京大学",function(result){
		console.log(result);
	},"北京")
	
})();
