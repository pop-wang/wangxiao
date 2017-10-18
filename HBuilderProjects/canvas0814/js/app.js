/*Scale(x,y):放大缩小，不会影响到画布本身，所放的是画布里面的内容(让画布里面的单位进行缩放)
 *Save():保存画布上面之前的样式，即在写save之前的样式，包括(笔画宽度，颜色，变形)
 * Restore()：还原的是上一次保存的状态，多次retore也是返回上次保存的内容[1]->1.[1,2]->2,1
 * Translate():平移，以画布的原点为参考。也相当于重新设置原点。
 * Rotate(anglePI/180*角度):旋转，旋转中心点一直是 canvas 的起始点。 如果想改变中心点，我们可以通过 translate() 方法移动 canvas 。
 */

(function(){
	var context=document.getElementById("container").getContext("2d");
	function scale(){
		context.save();//保存上一次canvas里面的状态
		context.scale(0.5,1);//先放大缩小才行，放大缩小的是画布里面的内容的像素点，画布本身没有变化
		context.fillStyle="red";
		context.fillRect(100,100,100,100);
		context.restore();//还原上次保存的状态
		context.save();
		context.fillStyle="yellow";
		context.fillRect(100,100,50,50)
		context.restore();
		context.fillRect(0,0,50,50)
	}
	function test(){
		context.save();
		context.strokeStyle="green";
		context.lineWidth=5;
		context.moveTo(0,0);
		context.lineTo(300,50);
		context.stroke();
		context.restore();
		context.moveTo(0,100);
		context.lineTo(300,100);
		context.stroke();
}
	function move(){
		context.save();
		context.translate(200,-100);//沿着x向右移动200px，沿着y向上一定100px，移动的时候是以原点为中心去移动的
		context.fillRect(300,300,100,100);
		context.restore();
		context.fillStyle="yellow";
		context.fillRect(300,300,50,50);
	}
	function rotation(){
		
		context.rotate(2*Math.PI/360*45);//旋转45度
		context.fillText("nhao",300,300)
		context.fillRect(300,300,50,50);
	}
	function init(){
		scale();
		test();
		move();
		rotation();
	}
	init();
})();
