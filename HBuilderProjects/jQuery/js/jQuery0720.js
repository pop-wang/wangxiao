//图片手风琴：面向对象(总宽度会变化)
/*function Accordion(_superView,_datas){//创建一个Accordion的构造函数
	this.superView=_superView;
	this.datas=_datas;
	this.curWidth = (this.datas.length*100-300)/(this.datas.length-1);
	this.showAccordion();//在创建一个新对象的时候就让他已经调用showAccordion这个函数，而在showAccordion这个函数中又调用了action这个函数，层层相扣
}*/
/*显示手风琴
   * 显示在哪
   * 图片数据
   */
/*Accordion.prototype.showAccordion=function(){//showAccordion显示图片
	var container=$("<ul></ul>");
	container.css("list-style","none");
	var self=this;//让this一直代表Accordion对象
	this.datas.forEach(function(image){
		var item=$("<li></li>");
		item.css({
			"width":"100px",
			"height":"200px",
			"float":"left",
			"background":"url("+image+") center"
		});
		container.append(item);
		//给每一个li添加一个事件
		self.action(item);
	});
	this.superView.append(container);
};
Accordion.prototype.action=function(item){
	item.hover(function(){
//		$(this).css("width","300px");//利用css
		$(this).stop().animate({"width":"300px"},500,"swing");//利用动画
	},function(){
//		$(this).css("width","100px");
		$(this).stop().animate({"width":"100px"},500,"swing");
	})
};

var list = ["img/image/0.jpg","img/image/1.jpg","img/image/2.jpg","img/image/3.jpg","img/image/4.jpg","img/image/5.jpg"];
new Accordion($(document.body),list);*/

//图片手风琴：面向过程
/*var container = $("<ul></ul>");
var list = ["img/image/0.jpg","img/image/1.jpg","img/image/2.jpg","img/image/3.jpg","img/image/4.jpg","img/image/5.jpg"];

list.forEach(function (image) {
    var li = $("<li></li>");
    li.css({
        "width":"100px",
        "height":"200px",
        "float":"left",
        "background":"url("+image+") center"
    });
    container.append(li);
    li.hover(function () {
        li.css( "width","300px");
    },function () {
        li.css( "width","100px");
    });
});
$(document.body).append(container);*/

//图片手风琴：面向对象(总宽度不变，鼠标画上去的元素增加的是其他元素减少的总和)
/*
 * 变到最宽是300px，默认100px，变到最宽比默认多了200px，这200px就平均分给其他图片了
 * 计算方式是剩下的图片需要减少的：200/(图片数量-1)，只需更改action方法
 */
/*Accordion.prototype.action=function(item){
	var self=this;
	item.hover(function(){
		$(this).stop().animate({"width":"300px"},{});
		 $("ul li").not($(this)).stop().animate({"width":self.curWidth+"px"});
	},function(){
		 $("ul li").stop().animate({"width":"100px"});
	})
};*/

//手风琴
/*
 * 整个效果
 * 每一个整体
 * 标题
 * 内容->展开 收拢->互斥isOpen
 */
//每一条视图类
/*function AccordionItemView(_content){
	this.content=_content;
}*/

//创建试图
/*AccordionItemView.prototype.view=function(){
	var itemView=$("<li></li>");
	var headView=$("<h3 class='headView'>"+this.content.title+"</h3>");
	var bodyView=$("<div class='bodyView'></div>");
	bodyView.html(this.content.des);
	bodyView.slideUp().finish();
	itemView.append(headView);
	itemView.append(bodyView);	
	this.bodyView=bodyView;//将bodyView设置为一个属性	
	return itemView;
};*/
//点击视图触发的事件
/*AccordionItemView.prototype.action=function(){
	var self=this;
	this.bodyView.parent().click(function(){
		self.bodyView.stop().slideToggle(200,"swing");		
		$(".bodyView").not(self.bodyView).slideUp();//排他思想
	});
};*/
//整个手风琴对象
/*function AccordionView(_superView,_datas){
	this.superView=_superView;
	this.datas=_datas;
	this.init();
}*/
//初始化界面的方法
/*AccordionView.prototype.init=function(){
	var container=$("<ul></ul>");
	this.datas.forEach(function(obj){//包含标题 内容
		var itemView=new AccordionItemView(obj);//创建一个itemView的对象
		container.append(itemView.view());
		itemView.action();//一创建就调用action方法
	});
	this.superView.append(container);
};
var datas=[{title:"标题1",des:"123"},{title:"标题2",des:"<i>123</i>"},{title:"标题3",des:"<b>123</b>"}];
new AccordionView($(document.body),datas);//datas是数组，数组元素是obj*/

//轮播图
/*
 * 把所有的视图存放到一个数组里面，当点击的时候移除当前的选取数组中的下一个
 */
function Course(superView,datas){//这是一个插件	
	this.datas=datas;//this.datas是轮播图的图片数据	
	this.allContainer=$("<div class='allContainer'></div>");//大容器
	this.container=$("<ul class='courseContainer'></ul>");//存放轮播图单独视图的容器	
	this.allContainer.css({
		"position":"relative",
		"width":"300px",
		"height":"200px",
		"margin":"50px auto"
	});
	this.allContainer.append(this.container)
	$(superView).append(this.allContainer);//吧轮播图添加到传入的父元素中
	this.showFirstView();
}
//itemView是轮播图上面的单独视图
Course.prototype.itemView=function(content){//content：创建图片视图需要的数据，是datas里面某一个元素，必须要有imgPath
	return $("<li><img src='"+content.imgPath+"'></li>");
};
//存放所有轮播图视图的数组
Course.prototype.itemViewList=function(){
	var imgViews=[];
	var self=this;
	this.datas.forEach(function(data){
		imgViews.push(self.itemView(data));//数组里面有多少条数据就创建多少个li，然后存放到数组里
	});
	this.imgViews=imgViews;//将数组赋给course的一个属性
};
//显示第一次页面的方法
Course.prototype.showFirstView=function(){
	this.itemViewList();
	this.curIndex=0;
	this.container.append(this.imgViews[this.curIndex]);
	this.addControl();
	this.pageControl();
	this.auto();
};
Course.prototype.addControl=function(){//添加按钮和小圆点
	var leftButton=$("<span><</span>");
	var rightButton=$("<span>></span>");
	leftButton.css({
		"position":"absolute",
		"left":"5px",
		"top":"40%",
		"font-size":"35px"
	});
	rightButton.css({
		"position":"absolute",
		"right":"5px",
		"top":"40%",
		"font-size":"35px"
	});
	this.allContainer.append(leftButton);
	this.allContainer.append(rightButton);	
	leftButton.click(function(){
		this.pre();
	}.bind(this));
	rightButton.click(function(){
		this.next();
	}.bind(this));

};
Course.prototype.pre=function(){//上一页	 更改curIndex
	this.curIndex=--this.curIndex<0?this.imgViews.length-1:this.curIndex;
	this.updateUI();
};
Course.prototype.next=function(){//下一页   更改curIndex
	//点击下一页，判断this.curIndex是不是超过了数组的范围，如果超出就让当前页面变成第一页，没有超出就是当前页面
	this.curIndex=++this.curIndex>=this.imgViews.length?0:this.curIndex;
	this.updateUI();
};
Course.prototype.auto=function(){//自动轮播
	setInterval(function(){
		this.next();
	}.bind(this),1000);
};
//更新界面
Course.prototype.updateUI=function(){
	this.container.children().remove();
	this.container.append(this.imgViews[this.curIndex]);
	var li = $(".pageControl li");
    li.not(li[this.curIndex]).css("border","none");
    $(li[this.curIndex]).css("border","2px #ffc31a solid");
};

Course.prototype.pageControl=function(){
	var pageControl=$("<ul class='pageControl'></ul>");
	var self=this;
	this.datas.forEach(function(image,index){
		var item=$("<li><img width='45px'  src='"+image.imgPath+"'></li>")//重新创建一个对象，要么移除的的时候连下面的控制图片也会移除
		item.css({
			"float":"left",
			"width":"45px",
			"margin-right":"5px",
			"border":self.curIndex===index?"2px solid #ffc31a":"none",
			"box-sizing":"border-box"
			});
//		item.click((function(cur){//闭包
//			return function(){
//				$(".pageControl li").css("border","none");
//				$($(".pageControl li")[cur]).css("border","2px solid #ffc31a")
//				self.curIndex=$(this).index();
//				self.updateUI();
//			}
//		}.bind(this))(index));
		item.click(function(){
			self.curIndex=$(this).index();
			self.updateUI();
		});
		pageControl.append(item);
	});
	this.allContainer.append(pageControl);
};







var img=[{imgPath:"img/image/0.jpg"},{imgPath:"img/image/1.jpg"},{imgPath:"img/image/2.jpg"},{imgPath:"img/image/3.jpg"},{imgPath:"img/image/4.jpg"},{imgPath:"img/image/5.jpg"},]
new Course(document.body,img);

