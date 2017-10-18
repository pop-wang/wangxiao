//数组是用来容纳信息的，js语言里面是可以定义任何类型的文件，其他语言定义有一定的规则
//var a = [1,2,3,4,5,6,7,8,9,0,1]
//var b = [0,7,6,1,8,6,9,4,8,8,0]
//var x;
//var phone="王大炮的电话号码都是：";
////document.write("王大炮的电话"+shuzu[0]+shuzu[7]+shuzu[6]+shuzu[1]+shuzu[8]+shuzu[6]+shuzu[9]+shuzu[4]+shuzu[8]+shuzu[8]+shuzu[0])
//
//for(var i=0;i<a.length;i++){
//	x = b[i];
//	phone = phone + a[x];	
//}
//console.log(phone)
//document.write(phone);
var names = ['安小兵','李珍珍','王永','井东升','孟婧','张静','张笠','姚庆涛','王永5','井东升6']
var ren = document.getElementById("ren")
function zhaoren(){
	var x = 10*Math.random()
	x=parseInt(x);
	ren.value = names[x];
}
zhaoren();
