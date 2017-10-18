/**
 * Created by CDLX on 2017/8/23.
 */
/*Angualr:
*SPAS:单页应用程序
* MVC：架构方式，编码方式
*   >M:model：数据模型
*   >V：view：视图
*   >C：controller:控制器
* 控制器是用于协调数据模型和视图之间关系，视图和模型都是互相独立的
* 为什么要使用MVC？
*   >希望代码重用性更强，降低视图和数据模型的耦合度（粘连程度）
*Angualr：
* 1.模块：每一个部分都可以单独成立一个模块
* 2.指令：ng开头的属性，有特殊意义的属性
* 3.服务：自定义服务和内置服务（指令里面有一部分是内置服务）：给我们提供一些服务的东西（写了一个工具类可以定义成服务）
* 4.控制器：用于协调数据模型和视图（主要写逻辑部分）
* 5.路由：一条线进，多条线出
*
* 特征：
* 1.允许使用MVC的方式书写代码
* 2.数据模型的双向绑定
*
* 模块：
* 1.允许创建很多模块
* 2.必须要有一个入口模块（和创建其他模块是一样的，可以通过ng-app这个指令指定哪一个模块是入口模块）
* 3.angular是一个对象，立面有一个叫module的函数，需要传入两个参数->1.模块的名字；2.需要注入模块的名字,创建完模块后需要使用ng-app指定入口模块->一个SPAS只能有1个入口模块
*     >angular.module("模块的名字"，["需要使用其他模块的模块的名字","模块2",])
* 4.模块的注入：angular.module("app",["app.controller"]);
*              angular.module("app.controller",[]).controller("homeCtrl",function ($scope) {})
*
* 指令：
* 1.ng-app：指定入口模块|指定angular的有效区域（有效作用域），一般都是写在html或者body中
*   >注意：如果表达式或者指令失效，
*       》需要去检查下是不是没有写ng-app
*       》表达式或者指令没有写在ng-app指定的范围内
*       》ng-app制定的入口模块的名字是否写错了
*       》没有引入JS文件
* 2.{{}}：可以在里面写表达式或者变量，然后就可以直接在HTML里面显示出表达式的结果
* 3.ng-model：用于指定数据模型（一般用在输入框中）
* 4.ng-bind：用于绑定数据模型
* 5.ng-repeat:类似于for in，用于遍历数组的，这个指令写在哪一个dom元素上面，就会重复某一个dom元素
*   >在循环的时候如果数组中有重复的元素，会报错ng-repeat dupes，需要使用track by $index（参考物）来指定一个不重复的参考物。
* 6.ng-init:指令初始化应用程序数据
* 7.ng-class:用于设置元素类名
*   >字符串：变量，具体的值
*   >对象：key：类名 ,值：表达式（如果表达式是真的，他就会去选择这个类）
*   >数组：字符串 对象都可以
* 8.ng-herf/src:里面的值想要用{{}}
* 9.ng-hide="" ng-show="",一个标签里面写多个状态以第一个状态为准。
* 控制器：
* 1.是angular里面的一个函数，这个函数的名字叫做controller，这个函数里面需要传两个参数->1.控制器的名字；2.回调函数
*   >controller("homeController"，function(){});
*   >创建了控制器并不代表使用了控制器，需要在html里面通过指令（ng-controller）来指定控制器的名字
*       》<div ng-controller="控制器的名字"></div>(注意控制器的名字不要写错，否则会显示找不到)
* 2.$scope:控制器的作用域，类似命名空间，只能在当前的控制器中使用$scope上面的数据模型
*
* 服务：使用服务的原因是用原生的方法不行，作用域不一样，所以需要注入服务
* 1.内置服务：
*   >$timeout,
*   >$interval,
*   >$apply()是$scope（）里面的一个方法，用于传递数据模型的值到界面上，用于回调函数中，不可以直接传递数据模型的值到界面上的$scope.$apply(function (scope) {scope.username="小明";})
*   >$wacth()：用于监听界面上数据模型值发生改变时候的状态,$scope.$watch("username",function (oldValue,newValue) {console.log(oldValue,newValue);});
*   >$http():用于实现网络请求的服务
*
*   >run:是angular里面的一个函数，应用程序开始执行的时候会先执行run这个函数，所有应用程序配置相关的都写在run里面，比如配置android的底部分栏的位置，在run这个函数里面可以使用rootScope(根作用域)
*   >config：是angualr里面配置路由的一个函数
*       》UI-router:也是在config中配置路由，与ng-route不同的是：UI-router是根据路由的状态去切换页面的(也就是锚点)
*       》使用方法：
*        1.引入UI-router
*        2.注入UI-router
*        3.在config中配置路由
*        4.每一个路由都是通过state这个函数配置
*           a)路由状态的名字->字符串
*           b)当前路由状态的详细配置->对象
*               i.模板
*                   1.没有views，不需要配置到views里面
*                   2.abstract：用于配置母版的
*                    $stateProvider
                     .state("tab",{
                     url:"/tab",//路由锚点的位置，指定锚点的名字
                     templateUrl:"",
                     controller:"",
                     abstract:true//把分栏设置成母版
                     })
                     .state("tab.home",{
                     url:"/home",
                     views:{
                     "tab.view":{
                     templateUrl:"",
                     controller:"",
                     }
                     }
                     })
*               ii.视图
*                   1.需要设置views
*                   2.在views里面需要设置视图的额名字(每一个分栏都对应着一个视图)
*                   3.如果一个分栏中有多个页面需要去展示，是通过(导航)跳转到其他页面，每一个页面的视图的名字都是相同的
*        5.都不满足的情况下也是通过otherwise重新定向页面
*        6.每一个路由里面的内容都是通过ui-view展示
*
*
*
*
* 2.自定义服务：Service(服务名，回调函数)是angular里面的一个函数
* 3.使用方法（注入服务）：先在控制器中的$scope后面注入服务，然后再使用服务
* 4.为什么要使用服务？
*   >控制器中有很多相同的功能，吧相同功能的代码抽取为一个服务，在需要使用这个服务的地方注入服务，就可以使用了
*
*
*
* Angualr-router(ngRouter)
* SPAS:单页面的应用程序
* 由单一页面到多页面就需要使用路由
* 两大块：
* 1.配置路由
*   >引入angular-router
*   >注入ngRoute这个模块
*   >通过angular这个对象里面的一个函数config去配置路由
*   >在使用config的时候需要传一个回调函数，回到函数的参数中有routeProvider（进入两小块部分）
* 2.通过ngView展示路由中的内容
* 两小块：
* 1.通过routerProvider配置每一个路由的内容
*   >通过when这个函数去指定路由的名字和内容
* 2.Otherwise配置重新定向的位置
* 通过Href决定他的位置
* 》在angular1.6在指定路由跳转到路由位置的时候，会出现乱码，可以使用$locationProvider这个模块，使用hashPrefix解决。
*
*
* Angular-directive:自定义指令：
* 目的：要封装视图
* 方法：directive（指令名字，回调函数（返回值：返回一个对象:对象里面是指令内容）），和使用控制器和服务器是一样的
* .directive("ucai",function () {
 return{
 restrict:"EA",
 // template:"<button>ucai按钮</button>",
 template:"<div><h1>ucai</h1><p>ucai简介</p><ul><li>111</li><li>222</li></ul></div>",
 }
 })

 Anular-ionic:是angular立面的一个ui框架->主要用于写移动端
 ionic的安装和创建：
 安装：
    >bower i ionic -g
    >bower i cordova -g
创建：
1.通过命令行去创建（脚手架CLI）
    >创建工程：ionic start 工程的名字（myApp） 模板的名字（tabs）
    >生成移动端执行的平台：ionic cordova platform add iOS android（要么添加IOS或者Android）注意，在去使用这些命令的时候必须切换到项目的根目录
    >同步代码到IOS Andtoid平台的代码中：ionic build iOS android
2.通过可视化的工具创建
    >移动端的方式
        》WebApp(使用web的技术去开发移动端)：是一个可以执行在手机浏览器中的网站，没有自己的入口，要想展示的话就必须依赖手机浏览器或者嵌入到其他应用程序中。

        》hybridApp(使用web的技术去开发移动端)：混合开发，即使用原生的技术也使用前端的技术（ionic+cordova技术，RN:React Navitive）
        -好处：-热更新：不需要在应用商店中更新版本就可以直接让应用程序里面的内容更新
        》nativeApp(使用原生（OC Swift Java->是使用ios中或者Android里面的SDK开发的应用程序）的技术去开发移动端)
            -优点：-用户体验好，流畅
            -缺点：-开发周期长，并且只能在一个端口上去执行，不能跨平台
    >混合开发

 SDK的添加：file-setting，搜索需要的SDK


 Ionic：是一个UI框架，里面有很多移动端的组件，里面包含了一个路由（使用的是UI-router），所以在使用ionic的时候直接注入一个ionic模块即可。
 1.分栏：
    >外层：ion-tabs
        tabs-颜色：设置分栏的背景颜色
        tabs-icon-方向：图标的位置
        tabs-icon-only：设置只有图标，没有文字
    >内层：ion-tab->每一个分栏都对应着一个视图，每一个视图都对应着对应着多个页面
        icon-on：设置触发时候的图标
        incon-off：设置未选中时候的图标
        title：分栏的标题（设置图标方向的文字）
     >内容的展示：
     tabs中每一个tab都对应着一个需要展示的视图,这个视图使用ion-nav-view表示，通过name的属性区分不同视图的
     在index中，视图也是通过ion-nav-view来展示，具体展示的内容，也是根据路由对应的视图的名字决定。
2.视图部分
两层：
    》ion-view：包含导航栏的部分
        设置导航栏的标题：view-title
        设置导航栏上的按钮：ion-nav-buttons
        side：left（默认）/right
        设置多个按钮可以在ion-nav-buttons中添加多个button标签
    》ion-conent：只用于设置展示内容的部分
3.在ionic中设置android和ios中样式居中，注入$ionicConfigProvider
 .config(function ($ionicConfigProvider) {
 //设置2个平台（ios和andro）里面的样式保持一致
 $ionicConfigProvider.platform.ios.tabs.style("standard");
 $ionicConfigProvider.platform.ios.tabs.position("bottom");
 $ionicConfigProvider.platform.android.tabs.style("standard");
 $ionicConfigProvider.platform.android.tabs.position("bottom");
 $ionicConfigProvider.platform.android.navBar.alignTitle("center");
 */
