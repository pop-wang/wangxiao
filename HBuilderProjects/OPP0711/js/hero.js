window.baoXue=window.baoXue || {};
(function(){
	function Hero(){
		baoXue.Person.apply(this,arguments);
	}
	
	//继承父类
	Hero.prototype=new baoXue.Person();
	
	baoXue.Hero=Hero;
})();