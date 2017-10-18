/*加载游戏数据的方法
 * 创建英雄列表的方法
 * 选择英雄（显示英雄和英雄的技能列表）
 * 随机选择怪物的方法
 * 渲染游戏界面的方法
 * 开始游戏的方法
 * */
window.baoXue=window.baoXue || {};
(function(){
	function Game(){
		//this表示通过构造函数 实例化的Game对象，谁调用loadData，this就表示谁
		this.loadData(function(result){//result代表json对象
			this.heros=this.creatHeroList(result.heros);//定义一个英雄的数组
			console.log(this.heros);
		}.bind(this));//this代表通过game创建出来的对象
	}
	//加载游戏数据
	Game.prototype.loadData=function(callback){
		var request=new XMLHttpRequest();
		request.open("GET","js/data.json");
		request.send();
		request.onload=function(){
			callback(JSON.parse(request.response));//只要不写都表示window调用
		}
	};
	/*创建英雄列表
	*heroDatas:英雄的数据
	* 返回值->创建好的英雄列表
	* */
	Game.prototype.creatHeroList=function(heroDatas){
		var list=[];
		heroDatas.forEach(function(item){
			var skills=[];
			item.skills.forEach(function(skill){
				skills.push(new baoXue.Skill(skill.name,skill.att,skill.level));
			});
			
			var hero=new baoXue.Hero(item.name,item.blood,item.att,item.skills);
			list.push(hero);
		});
		return list;//传入英雄数据返回一个英雄的数组
	};
	/*选择英雄 技能列表 */
	Game.prototype.chooseHero=function(index){
		return {};
	};
	/*怪物随机出现
	 *需要传入怪物的数据
	 * 返回值->怪物对象
	 */
	Game.prototype.showMonster=function(monsterDatas){
		/*通过随机出来的怪物数据创建怪物对象
		 **/
		return {};
	};
	/*渲染游戏界面
	 *操作游戏界面的方法
	 * */
	Game.prototype.showGame=function(){
		
	};
	/*开始游戏的方法
	 *j具体互相攻击的一些方法
	 * 一直到怪物或者英雄死了
	 * */
	Game.prototype.startGame=function(){
		
	};
	baoXue.Game=Game;//等号右面的Game是一个值，相当于上面的构造函数，左面的是变量名
})();