(function(){
	function GoodItem(obj){
		this.des=obj;
		this.item=$("<div><p class='good-name'>"+obj.goods_name+"</p><p><img width='"+width+"px' src='"+obj.goods_thumb+"'/></p><h3>￥"+obj.price+"</h3><p>"+obj.goods_desc+"</p></div>");
		var space=20;
		var colume=5;
		var width=(1200-space*(colume-1))/colume;
		this.item.css({
			"width":width+"px",
			"border":"2px solid #ff4411",
			"box-sizing":"border-box",
			"float":"left",
			"overflow":"hidden",
			"position":"relative",
			"height":"385px"
		});
		$(".good-name").css({
            "position": "absolute",
            "height": "20px",
            "line-height": "20px",
            "display": "none"
        });
        $(".good-name").hover(function () {
            $(".good-name").css({
                "display": "block"
            });
        },function () {
            $(".good-name").css({
                "display": "none"
            });
        })
	};
	GoodItem.prototype.click=function(callback){
		this.item.on("click",this,callback);
		return this;
	};
	function Good(url,parm,superView,action){
		this.loadData(url,parm,superView,action);
	};
	Good.prototype.loadData=function(url,parm,superView,action){
		$.get(url,parm,function(result){
			if(result.code==0){
				this.showGoodsView(result.data,superView,action);
			}
		}.bind(this));
	};
	Good.prototype.showGoodsView=function(goods,superView,action){
		goods.forEach(function(data){
			superView.append(new GoodItem(data).click(action).item)
		});
	};
	window.Good=Good;
})();
