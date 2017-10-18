var requet = new XMLHttpRequest();
requet.open("GET","http://api.avatardata.cn/ZhouGongJieMeng/LookUp?key=73be05bf2b2c48c28692b5acab163104&keyword=梦见妈妈");
requet.setRequestHeader("Access-Control-Allow-Origin","*");
requet.send();
requet.onload = function () {
  console.log(requet.response)  ;
};