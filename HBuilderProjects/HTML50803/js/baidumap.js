//4.创建地图对象,初始化地图
function init(){
//创建地图对象
	var opt={mapType:BMAP_NORMAL_MAP};//创建地图对象的时候可设置的可选项
	var map=new BMap.Map("map",opt);//API使用BMap作为命名空间，所有类均在该命名空间之下
//初始化地图
//	map.centerAndZoom("北京",12);//设置中心点坐标（即可以是经纬度point也可以是地名）和地图级别（默认12）
	var point=new BMap.Point(116.401481,39.914776);
	map.centerAndZoom(point,10);
	map.disableDoubleClickZoom();//禁用双加放大方法
	map.disableDragging();//禁止拖拽
	map.addEventListener("rightclick",function(){
		map.enableDragging();//单击右键启用拖拽
	});
	var location=new BMap.GeolocationControl({locationIcon:new BMap.Icon("img/icon.jpg",new BMap.Size(30, 30))});//创建定位控件
	location.setAnchor(BMAP_ANCHOR_TOP_RIGHT);//直接在control类里面调用setAnchor方法改变定位控件位置
	location.setOffset(new BMap.Size(100, 50));
	map.addControl(location);
	map.addEventListener("rightdblclick",function(){//右键双击控制定位控件显示和隐藏
		location.isVisible()?location.hide():location.show();
	});
	setTimeout(function(){
		location.location();		
	},3000);//3秒后自动定位
	location.addEventListener("locationSuccess",function(){
		var add=location.getAddressComponent();
		console.log(add);
	});
	var mapTypeControl=new BMap.MapTypeControl({type:BMAP_MAPTYPE_CONTROL_DROPDOWN,mapType:[BMAP_NORMAL_MAP,BMAP_SATELLITE_MAP]});//添加一个地图类型的控件
	map.addControl(mapTypeControl);
	var copyrightControl=new BMap.CopyrightControl({anchor:BMAP_ANCHOR_TOP_RIGHT,offset:new BMap.Size(100, 100)});	//版权控件
	map.addControl(copyrightControl);
	copyrightControl.addCopyright({id: 1, content: "<h1 style='background:yellow'>我是王大炮小姐啊~~~</h1>", bounds: map.getBounds()});//添加版权信息
	var panoramaControl=new BMap.PanoramaControl();//添加一个全景控件
	map.addControl(panoramaControl);
	var sControl=new UMap.SControl();//自定义按钮
	map.addControl(sControl);
	var icon=new BMap.Icon("img/icon.png",new BMap.Size(40,40));
	icon.setImageSize(new BMap.Size(40,40));
	var maker=new BMap.Marker(point,{
		icon:icon,
		offset:new BMap.Size(20,15)		
		});
	map.addOverlay(maker);
	map.addEventListener("dblclick",function(event){		
		var icon=new BMap.Icon("img/icon.png",new BMap.Size(40,40));
		icon.setImageSize(new BMap.Size(40,40));
		var maker=new BMap.Marker(event.point,{
			icon:icon
		});		
		map.addOverlay(maker);
		maker.setAnimation(BMAP_ANIMATION_BOUNCE);//要放在addOverlay后面，所有都可以跳
	});
	/*作业：找10个经纬度 用大头针的方式 展示在地图上
	var arr=[new BMap.Point(116.501481,39.914776),new BMap.Point(116.402286,39.914057),new BMap.Point(116.302247,39.921749),new BMap.Point(116.203824,39.925622),new BMap.Point(116.1099,39.922053),new BMap.Point(116.419159,39.807014),new BMap.Point(116.421495,39.704295),new BMap.Point(116.415279,39.605029),new BMap.Point(116.415135,39.50121),new BMap.Point(116.422771,39.401445)];
	arr.forEach(function(item){
		var marker=new BMap.Marker(item);
		map.addOverlay(marker);		
	});
	//把经纬度和发布的信息结合起来，使用详细窗口展示
	map.addEventListener("click",function(event){
		console.log(event);
		var infoWindow=new BMap.InfoWindow("此位置经度为:"+event.point.lng+",纬度为："+	event.point.lat,{
			width:100,
			height:100,
			title:"信息窗口"
		});
		map.openInfoWindow(infoWindow,new BMap.Point(event.point.lng,event.point.lat));
	});*/
}
init();

/*1.自学InfoWindow
2.找10个经纬度 用大头针的方式 展示在地图上
3.把经纬度 和 发布的信息 结合 使用 详细窗口展示*/

