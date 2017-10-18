// 为了能够调用相关的CSS3动画定义，这里我们使用jQuery
$('button').mouseon(function(){

  //点击图片触发CSS动画
  $(this).toggleClass('start').toggleClass('end');
  