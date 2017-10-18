//window.baoXueGame=window.baoXueGame || {};//如果有值使用原来的值，没有值它的值就等于创建一个对象
//(function(){
//	function CC(){		
//	}
//	window.CC=CC;//只有把CC定义在Window上后面才能直接调用。
//	baoXue.CC=CC;//防止命名冲突,
//})();
//CC();
window.baoXue=window.baoXue || {};
(function(){
	function Skill(name,att,level){	
		this.name=name;
		this.att=att;
		this.level=level;
	}
	baoXue.Skill=Skill;
})();
