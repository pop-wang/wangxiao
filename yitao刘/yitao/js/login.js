var $ = jQuery.noConflict();
(function(){
	function Login(success){
		this.showLogin(success);
	};
	Login.prototype.showLogin=function(success){
		var loginContainer=$("<div class='loginContainer'></div>");
		var closeButton=$("<button>关闭</button>");
		var usernameInput=$("<p><input type='text' placeholder='用户名'></p>");
		var passwordInput=$("<p><input type='password' placeholder='密码'></p>");
		var loginButton=$("<p><button>登录</button></p>");
		loginContainer.css({
			"width":"400px",
			"height":"300px",
			"background-color":"aqua",
			"border":"5px solid #ffd42e",
			"position":"absolute",
			"top":"50%",
			"left":"50%",
			"box-sizing":"border-box",
			"margin":"-150px -200px"
		});
		closeButton.css({
			"float":"right",
			"color":"white",
			"padding":"5px"
		});
		closeButton.click(function(){
			loginContainer.fadeOut(300,function(){
				loginContainer.remove();	
			});
		});
		usernameInput.css({
			"padding":"20px 0",
			"width":"300px",
			"margin":"0 auto",
			"text-align":"center"
		});
		passwordInput.css({
			"width":"300px",
			"margin":"0 auto",
			"text-align":"center"
		});
		loginButton.click(function(data){
			$.post(PRODUCT_HOST+LOGIN,{status:"login",username:usernameInput.children().val(),password:passwordInput.children().val()},function(data){
					console.log(data);
					if(data.code==0){
						loginContainer.fadeOut(300,function(){
							loginContainer.remove();
							success(data.data);
						});
					}else{
						alert(data.message);
					}
				}
			);
		});
		loginContainer.append(closeButton);
		loginContainer.append(usernameInput);
		loginContainer.append(passwordInput);
		loginContainer.append(loginButton);
		$(document.body).append(loginContainer);
	};
	window.Login=Login;
})();
