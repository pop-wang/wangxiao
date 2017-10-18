//使用正则表达式 验证 是否 符合咱们设置的规则
//var regexp=new RegExp("匹配规则","修饰符");
//var regexp=new RegExp("hello");

//regexp=/匹配规则/修饰符;
regexp=/hello/;

//test-->测试<是不是>符合正则表达式规则-->boolean
//document.write(regexp.test("hello"));//true

/*exec-->执行验证-->{
 1、符合规则-->把匹配结果返回给我们，结果是一个数组array
 	下标0:匹配的结果
 	index：第几个位置开始匹配开始符合的
 	input：查询是否匹配的原字符串
 2、不符合-->null
 }*/
var result=regexp.exec("hello");
console.log(result);
//console.log(regexp.exec("hello"));

/* 
 * \W匹配除了（特殊字符和数字）以外的所有内容-->字母
 * []表示中括号中的任意字符
 * [a-z]:匹配所有的小写字母
 * [abcdedghijklmnopqrstuvwxyz]:匹配所有的小写字母
 */
//var regExp=/[a-z]/i;
//document.write(regExp.test("QWER"));
//regExp=/ucai/g;//出现2个ucai
/*match：是字符串对象中查找包含某个内容的函数
 * match（regexp）需要传入一个参数
 * string.match（）-->array-->匹配之后的结果
 */
//document.write("hello ucai! nihao ucai".match(regExp));
//regExp=/[123]/;
//document.write(regExp.test("789"));

//元字符：
//.除了\n（换行符）所有字符否都匹配（0-9 a-z 特殊符号）
//var regexp=/./;
//document.write(regexp.test("789"));

//练习1：注册，只能出现字母，如果出现数字弹出你错了
//1、创建正则表达式的对象-->验证字符串规则
//2、验证字符串（exec（str） test（str））
//var oinput1=document.getElementsByTagName("input")[0];
//var oinput2=document.getElementsByTagName("input")[1];
//oinput2.onclick=function(){	
//	var regexp=/[0-9]/;
//	if (regexp.test(oinput1.value)) {
//		alert("你错了~")
//	}else{
//		alert("你对了~")
//	}
//}
//练习2：查找输入的字符串是否包含hello
//var oinput1=document.getElementsByTagName("input")[0];
//var oinput2=document.getElementsByTagName("input")[1];
//oinput2.onclick=function(){
//	var reg=/hello/;  //不用申明也可以直接在下面的if判断里面用/hello/.test(oinput1.value)
//	if (reg.test(oinput1.value)) {
//		alert("包含hello~")
//	}
//}
//练习3.把字符串里面的所有换行符替换成空格
//var reg=/\n/g;  //所有的换行符的
//var str =  "你\n好\n可爱";
//console.log(str.replace(reg,""));
//reg=/./g;
//console.log(str.match(reg));

//{}表示 需要有连着的3个w
/*1、b可以作为单词的起始或者结束为止 
 * \b写在某个字符的前面  就表示起始为止
 * \b写在某个字符的后面  就表示结束为止
 * 2、注意：单词是一个整体（不可以包含空格，包含空格就是2个单词了）
 * 3、注意：如果是中文没有办法判断（若是中文使用indexof（中文））
 */

//reg=/w{3}/;
//var oinput1=document.getElementsByTagName("input")[0];
//var oinput2=document.getElementsByTagName("input")[1];
//oinput2.onclick=function(){
	//三目运算：表达式（真或者假的公式）？第一个条件：第二个条件；
//	reg.test(oinput1.value)?alert("符合"):alert("不符合");
//	alert(/\w/.test("@#￥"));//元字符\w：查找单词字符true（包含数字，不包含特殊字符）
//	alert(/\s/.test("qwe   "));//元字符\s：查找是否有空白字符
//	alert(/o\b/.test("helloautoman"));//元字符\b：检查是否是单词边界，前面必须制定一个字符（字母和数字都可以）
//	alert(/\bh/.test("helloautoman"));//h开头（必须是连在一起的字符串）
//	alert(/\d/.test("helloautoman"));//元字符\d：检查是不是数字
//}

//^起始
//$结束
//console.log("以字母开头",/^[A-z]/.test("hello"));
//console.log("以数字结束",/[0-9]$/.test("hello1"));

//{3}:必须有3个连着前面的内容
//console.log("连着以3个字母开头",/^[A-z]{3}/.test("hello"));//true是以3个字母开头的
//console.log("连着以3-5个字母结束",/[A-z]{3,5}/.test("hello"));//true
//console.log("连着以3-5个字母结束","ttwer1234".match(/[A-z]{3,5}/));
//{2,}至少有两个前面匹配方式的内容
//console.log("至少有两个前面匹配方式的内容",/[\d]{2,}/.test("1"));

/*
 * ^[A-Z]以大写字母开头（首字母肯定是存在的（就要字母了））
 *[A-z]*可以有也可以没有字母（如果第一个首字母不算字母-->[A-z]+）
 *[0-9]+必须有一个以上数字
**/
//alert(/[A-z](?=\d)/.test("wwqw1"))//匹配w后面是否有o，需要给？=括起来表示一个整体
//console.log("ww1w1".match(/w(?=\d)/g))
//alert(/[A-z](?![0-9])/.test("wwqw1"))//没有紧跟着字母的数字

/*^[A-Z]:开头必须是大写字母
*([A-z]+\d+):前面是字母后面是数字,都至少有一个
*(\d+[A-z]+)/g):前面是数字后面是字母,都至少有一个*/
//console.log("Ww1e23ed4".match(/^[A-Z]([A-z]+\d+\w)|(\d+[A-z]+\w)/g))

//练习四：验证手机号18612962314；验证邮箱:yujing@ucai.cn
/*所有手机号都是以1开头，第二个数字没有0，1，2，9，后面的数字就没有限制了
 * 邮箱第二个位置必须是@，第四个位置必须是.最后一个位置2位以上的字母
 */
//console.log("手机号测试：","18612962314".match(/^[1][3-8]{1}\d{9}$/g));
//console.log("邮箱测试：","yujing@ucai.cn".match(/^\w+@\w+\.[a-z]{2,}$/g));

//练习五：解析歌词lrc-->解析到对象中

//error内置对象
//var error;
//error.name;
//error.message


//JS中函数时一等公民
//js在解析的的时候吧所有的全局变量预加载->loadData=undefined
//console.log(loadData);
//loadData();
//var loadData=function(){	
//	console.log("1");
//};
//function loadData(){
//	console.log("2");
//};
//try{
//	loadData();
//}catch(error){
//	console.log("异常错误",error.message);
//}

//var success=false;
//try{
////写自己不确定会不出错
////如果出错 会抛出一个错误异常
////	loadData();
//	if(!success){
//		var error=new Error("看不到刘老师心情不开心");
//		throw error;
//	}
//}catch(error){
////catch中的error就是报错的内容
////error-->文档中error类型的变量
//	console.log(error.name,error.message);
//}
//断点调试
//function cc(){
//	var list=[1,2,3,4,5];
//	console.log(list[0]);
//	console.log(list[1]);
//	console.log(list[2]);
//}
//cc();
//ccc();
//cc();
//取分组里面的值
var str='20170707';//2017年7月7日
var reg=/(\d{4})(\d{2})(\d{2})/;
console.log(reg.exec(str));
//$n分组一般和replace配合使用
str.replace(reg,"$1年$2月$3日");
console.log(str)
