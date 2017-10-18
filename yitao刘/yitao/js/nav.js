var $ = jQuery.noConflict();
(function(){
//显示在导航上的每一个按钮
	function NavItem(obj){
//两种方法=====
//		var item={};
//		item.name=obj.cat_name;
//		return item;
		var obj=obj||{};
		this.name=obj.cat_name;
		this.id=obj.cat_id;
		this.item=$("<li>"+this.name+"</li>");
	}
	NavItem.prototype.click=function(callback){
		this.item.on("click",this,callback);
		return this;
	};
	window.NavItem=NavItem;
	function Nav(){
		
	};
//点击导航按钮的时候，需要知道点击按钮的商品类型ID。
	Nav.prototype.createView=function(url,superView,callback){
		$.get(url,function(result){
			if(result.code==0){
				result.data.forEach(function(obj){
//创建导航列表
					superView.append(new NavItem(obj).click(callback).item);
				});
			}
		});
		return this;
	};
	window.Nav = Nav;
})();
