function init(){
	$(".header-top-login").click(function(){
			new Login(function(user){
				$(".header-top-menu ul li:first-child").html("<a href='#'>"+user.username+"</a>")
		});
	});
	
//导航==================
	new Nav().createView(PRODUCT_HOST+PRODUCT_TYPE,$(".main-nav-container"),function(event){
    });
    new corouselView.Corouse("#left-course",[{imagePath:"image/header/hot1.jpg"},{imagePath:"image/header/hot2.jpg"}],225,340).putSuperView().createControlButton().startTimer(3*1000);
    new corouselView.Corouse("#center-course",[{imagePath:"image/header/TB1BunHRVXXXXagaXXXXXXXXXXX-750-340.jpg"},{imagePath:"image/header/TB1jT3mRVXXXXXnXXXXXXXXXXXX-750-340.jpg"}],750,340).putSuperView().startTimer(3*1000);
    new corouselView.Corouse("#right-course",[{imagePath:"image/header/hot1.jpg"},{imagePath:"image/header/hot2.jpg"}],225,340).putSuperView().startTimer(3*1000);
    new Good(PRODUCT_HOST+GOODS,null,$(".goods-container"),function(event){
    	console.log(event.data);
    });
};
init();
