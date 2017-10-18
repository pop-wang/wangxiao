(function(){
	var map=new BMap.Map("map");
	map.centerAndZoom("西安",12);
	//初始化BMOB
	Bmob.initialize("e85f3ead5ad48136b8d9b0bd5470c0cc", "2a670c6cf3b4bd9d8f2a849c7a32976c");//使用自己的应用秘钥
	function register(){//注册
		var locationBtn=document.querySelector(".locationBtn");
		var registerBtn=document.querySelector(".registerBtn");
		var userNameInput=document.querySelector("input[type=text]");
		var psdInput=document.querySelector("input[type=password]");
		var point=null;
		locationBtn.onclick=function(){//定位
			var geo=new BMap.Geolocation();
			geo.getCurrentPosition(function(result){
				console.log(result);
				point=result.point;
				registerBtn.disabled=false;//定位完即可注册
			});
		};
		registerBtn.onclick=function(){//注册
			var user = new Bmob.User();//使用bmob注册用户的方法
			user.set("username", userNameInput.value);
			user.set("password", psdInput.value);
			console.log(psdInput.value);
			user.set("lat", point.lat);
			user.set("lng", point.lng);
			user.signUp(null, {
			  success: function(user) {
			    // Hooray! Let them use the app now.
			  },
			  error: function(user, error) {
			    // Show the error message somewhere and let the user try again.
			    alert("Error: " + error.code + " " + error.message);
			  }
			});			
		}
	}
	function loadUsers(){
		var query = new Bmob.Query(Bmob.User);//使用bmob加载数据的方法
		query.find({
		  success: function(result) {
		    console.log(result);
		    result.forEach(function(user){
//		    	console.log(user.attributes);
//		    	console.log(user.attributes.username);
//		    	console.log(user.attributes.lat);
//		    	console.log(user.attributes.lng);
		    	var marker=new BMap.Marker(new BMap.Point(user.attributes.lng,user.attributes.lat));
		    	map.addOverlay(marker);
		    	marker.enableDragging();
		    	marker.addEventListener("click",function(){
		    		var infoWindow=new BMap.InfoWindow("<p style='padding: 10px'>"+user.attributes.username+"</p>");
   					marker.openInfoWindow(infoWindow);
		    	});
		    });
		  }
		  
		});
		function addScore() {//使用bmob获取得分的方法
	        var GameScore = Bmob.Object.extend("GameScore");
	        var gameScore = new GameScore();
	        gameScore.set("score", 137);
	        gameScore.set("userID", Bmob.User.current().id);
	
	
	        gameScore.save(null, {
	            success: function(gameScore) {
	            },
	            error: function(gameScore, error) {
	                alert('添加数据失败，返回错误信息：' + error.description);
	            }
	        });
   		}
		addScore();
		function login() {//使用bmob登录的方法
	        Bmob.User.logIn("6455", "11111", {
	            success: function(user) {
	                // Do stuff after successful login.
	            },
	            error: function(user, error) {
	                // The login failed. Check error to see why.
	            }
	        });
   		}
		login();

	}
	
	function init(){
		register();
		loadUsers();
	}
	init();
})()
