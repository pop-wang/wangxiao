---
title: iBlog
date: 2017-10-14 17:51:36
tags:
---
**Vue懒加载（vue-lazy-load）**

**1.安装插件(client)**
1.npm i vue:安装vue
2.npm i -g vue-cli:全局安装vue-cli（vue脚手架）
3.vue init webpack my-project:创建一个基于webpack模板的新项目
4.npm i  vue-lazy-load：安装vue-lazy-load插件

**2.使用懒加载插件**
```
import Vue from 'vue'
import lazyload from 'vue-lazy-load'
Vue.use(lazyload,{
	loading:'默认加载图片的路径',
	error:'加载错误图片的路径'
})
```

**3.使用v-lazy指令执行懒加载**
```
<div v-for="img in list">
	<img v-lazy="img">
</div>
```

**4.运行demo（client）**
```
npm run dev
```