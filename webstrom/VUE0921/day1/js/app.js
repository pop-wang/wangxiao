/**
 * Created by CDLX on 2017/9/21.
 */
/*vue base（github：wsdo）
* 指令
* 模板
* 自定义指令
*
* 请求API的方式
*   ajax
*   resource 可以直接使用jsonp get post
*   axios get post 不能直接使用jsonp 需要安装jsonp模块
*
*vue项目
*  技术栈：
*  vuejs2.0
*  nodejs
*  express
*  mongondb
*  redis
*  jwt
*  passport
*  nginx
* 第一个阶段
*   express简单的业务逻辑
* 第二个阶段
*   完全是在企业中用（来重构第一个阶段讲的）
* 最后上线
*   在linux那个nginx
*   解决不同端口跨域问题
*
* git推送到远程
* step1：
*   创建一个空的文件夹
*   git init
*   git status 查看git的文件状态
*   git diff
*   git remote add origin +代码仓库网址：给本地仓库添加远程仓库
*   git add .
*   git commit -am"init":吧本地的文件添加到本地仓库
*   git push origin master：
*   history | grep commit:查找所有与commit相关的命令
* 什么情况下需要创建分支：当你的项目需要开发一个新的项目，先把你的项目从主分支（默认主分支master）拉取到最新，然后再创建一个分支
*   分支的概念：
*   git checkout -b branchname:创建并切换分支（git branch branchname&&git checkout branchname<切换分支>）
 *   git checkout master
 *   git branch:列出本地所有分子
 *   git branch  branchname：创建分支
 *   想知道自己在这个分支上干了什么动作：git status
 *   查看自己修改了具体的什么东西：git diff
 *   执行完这个命令之后，类似于vim模式
 *   怎么退出：
 *   ：q
 *   shift zz（大写的ZZ）
 *
 *添加git快捷键：
 * 每天都会使用git push origin master
 * 想把它简化gpm
 * 1.切换到家目录：cd ~
 * 2.ls -a找到.bash_profile文件
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*在本地配置ssh密钥（http://jingyan.baidu.com/article/a65957f4e91ccf24e77f9b11.html）
*   ssh-keygen -t rsa -C "XXX@yy.com"
*   cd ~:切换到家目录
*   li -a:查看是否存在
*   cd .ssh
*   cat id_rsa.pub
*   吧这个公钥复制到github里面
*   点击githb的setting
*   在左侧点击下面按钮
*   ssh and GPG key
*   new ssh key
* */
/*找到官网
https://vuejs.org/（nuxtjs.org）
*ssr看一些相关的介绍
*vue基于vue的ui框架
*  element ui
*  iview ui
*  vue资源
*  https://
*angular
*   angualr.js
*   angular:笨重
* react：存在商业风险，不开源
* */
/*生命周期：
* cookie
* vue
*
* 视频地址https://pan.baidu.com/s/1qXB5BkS  密码6nru
*
*
*
* 在Vuejs里面请求API的方式：
* 可以使用jquery的ajax
* vue-resource：目前官方已经不再维护，作者建议使用axios，支持：post get jsonp
* axios：本身不支持jsonp；支持：post，get。
*
*
*
*
*CLI项目结构分析
* build：目录是一些webpack的文件，配置参数一般不动
* config：是vue项目的基本配置文件
* node——modules:是项目中安装的依赖模块，在项目中require（） import from 里面写模块地址 先在项目里面寻找，没找到就去mode——modules里面去找
* src：源码文件夹，基本上文件夹都放在这里，就是自己写一些东西
* assets：资源文件夹，里面放静态资源，图片，js，css，如果在这个里面放图片的话，vue会把这个里面的图片（如果体积不是很大）会编译成base64（一种编码方式，吧图片转换成二进制）的方式。和它相似功能的文件夹是外面的static，这个文件夹里面的图片不会转化成base64.
* components：这个里面放置各种组件，一般放置公共的组件（appa.vue主组件），main.js入口文件
* static：放置静态资源
* test：放测试的文件
* .babalrc babel编译参数 vue开发需要babel编译
* .editorconfig编辑器的配置
* .gitignore git忽略文件
* .postcssrc.js自动添加css前缀
* readme：这个项目的说明
* eslintignore：忽略eslint文件
* eslintrc.js：eslint配置文件
* spa：single page application
*
* mode:'history',//来切换hash（以#显示,默认是hash）和history（以H5的API history来显示的），在使用a标签的时候需要手工更改添加#号，如果使用router-link不需要手工更改（通过to这个属性指定要跳转的链接，默认router-link被渲染成a标签的样式，属性tag设置为目标设置的样式）
* ##自定义导航标签
* 使用tag这个属性改变默认渲染的样式
* exact：精准匹配添加样式
* ####给导航添加激活样式：通过在css里面设置.router-link-active设置样式就可以
* ###自定义给导航添加激活类，添加默认的激活样式，在html中添加active-class="xxx";并且在css中设置样式
* ###默认的根路径永远是匹配的激活样式，需要使用精准匹配才能去掉默认的样式：exact：精准匹配添加样式
* ###吧vue路由默认的激活样式统一改掉
*
*
* vue里面的@代表什么：
* 在build/webpack.base.config.js文件里面
* */