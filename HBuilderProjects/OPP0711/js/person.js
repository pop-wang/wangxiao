window.baoXue=window.baoXue || {};
(function(){
	function Person(_name,_blood,_att,_skills){	
		this.name=_name;
		this.blood=_blood;
		this.att=_att;
		this.skills=_skills;		
	}
	Person.prototype.fire=function(target){
		//target.blood-=(this.att+this.chooseSkill().att);
		target.blood-=this.att;
	};
	Person.prototype.chooseSkill=function(index){
		return this.skills[index];
	};
	baoXue.Person=Person;
})();



//命名空间
window.BMap = window.BMap||{};
(function () {
    
    function Map() {
        
    }
    
    
    function Control() {
        
    }
    
    function Overlay() {
        
    }

    window.BMap.Map = Map;
    window.BMap.Control = Control;
    window.BMap.Overlay = Overlay;
})();

new BMap.Map();
new BMap.Control();
