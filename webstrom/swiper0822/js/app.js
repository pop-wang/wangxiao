/**
 * Created by CDLX on 2017/8/18.
 */
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: false,

    // 如果需要分页器
    pagination: '.swiper-pagination',
    pagination: true,

    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }
})
//页面加载完毕播放音乐
var musicBtn=document.getElementsByClassName("music-btn")[0];
var music=document.getElementsByClassName("music")[0];
window.onload=function () {
    music.play();
};
musicBtn.onclick=function () {
    if (music.paused){
        music.play();
        musicBtn.style.background="url(images/musicBtn.png) 50% 50% no-repeat";
        musicBtn.style.backgroundSize="cover";
        musicBtn.style.animationPlayState="running";
    }else{
        music.pause();
        musicBtn.style.background="url(images/musicBtnOff.png) 50% 50% no-repeat";
        musicBtn.style.backgroundSize="cover";
        musicBtn.style.animationPlayState="paused";
    }
}
//点灯特效:
var lightoff=document.querySelector(".fourth-lightOff");
var lightOff=document.querySelector(".fourth-light-off");
var lighton=document.querySelector(".fourth-lightOn");
var lightOn=document.querySelector(".fourth-light-on");
lightoff.onclick=function () {
    lightoff.style.display="none";
    lightOff.style.display="none";
    lighton.style.display="block";
    lightOn.style.display="block";
    lightoff.parentNode.style.backgroundColor="#1B7FDD";
}