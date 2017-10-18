(function(){
	/*
	 * Date Extention
	 */
	Date.prototype.getCurrentMonth=function(){
		var results=["一月份","二月份","三月份","四月份","五月份","六月份","七月份","八月份","九月份","十月份","十一月份","十二月份"]
		return results[this.getMonth()];
	}
	Date.prototype.getCurrentWeek=function(){
		var weeks=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
		return weeks[this.getDay()];
	}
	Date.prototype.dateFormat=function(format){
		while(1){
			var result=/\w{2,4}.\w{1,2}.\w{1,2}/.exec(format);
			return this.getFullYear()+result[1]+this.getMonth()+result[2]+this.getDate();
		}		
	}
	Array.prototype.maxValue=function(){
		return this.sort(function(a,b){
			return a>b;
		}).[this.length-1]
	}
	Array.prototype.removeObject=function(obj,i){
		var index=i || this.indexOf(obj);
		return this.splice(index,1);//只能删除找到的第一个
	}
	var date=new Date();
	console.log(date.getCurrentMonth());
	/*时间戳(数字) 转日期对象（Date类型） 
	 * setTime()
	 *new Date(时间戳)；-->***有些服务端回传给我们的是以《秒》为单位的时间戳，
	 * JS里面是以《毫秒》为单位-->转换为毫秒
	 * getTime（）-->通过日期对象 获取时间戳
	 * */
})();
