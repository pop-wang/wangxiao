/*CSS3多列：
 * 》column-count:规定列数，可以吧一行文字分割成设置的列的个数，前提是不能如果设置列的宽度，如果设置了列的宽度，当列的最小宽度和不够总宽度时，列的数量就会缩小
 * 》column-width:规定列的最小宽度
 * 》column-span:规定横跨的列数，一般都是标题不和正文在一起，常用来设置标题
 * 》column-rule:设置分隔线的样式，与边框的设置方式是一样的，是一个复合属性
 * 》column-gap:设置列与列之间的间距
 * 》column-fill: auto/balance(默认);设置填充样式
 * 
 * 单位：rem(相对于根元素字号的比例) 
 * 	->1.可以让较小的屏幕展示更多的内容，并且可以按照屏幕的宽度来设置字号(小屏幕设置小字号，大的设置大字号)
 * 	->2.如果所有的宽高字号都用rem表示，所有的内容展示的宽高字号都是响应式的
 * px，
 * em(也是一个类似百分比的单位，相对于父元素字号的比例)，
 * 百分比，
 * pt
 * @media (min-width:600px) and/or (其他条件) {满足这个条件下的样式}媒体查询:在不同宽度设备上显示不同的样式
 *  viewPort：试口height，width，initial-scale，max/minnum-scale,user-scalable：设置移动端显示内容窗口的配置
 * <meta name="viewport" content="width=device-width, initial-scale=1,user-scalable=no">
 * 处理媒体查询不支持的方式：
 * 1、加载处理不兼容的脚本文件：
 * <!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js 

"></script>  
<script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js 

"></script>  
<![endif]-->  
2、更改IE浏览器渲染内容时使用的内核：更改成IE10以上或者是谷歌的内核：
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">

 *
 *弹性盒/弹性布局(微信小程序有使用)
 * 新的布局方式：以前浮动定位布局(缺陷：清除浮动，浏览器是否兼容)
 * 需要将盒子设置为一个弹性盒子display:flex;旧版本是设置为box的。
 * flex-flow:flex-direction(设置弹性盒内子元素的排列方向row,column/reverse) flex-wrap(设置弹性盒内溢出是否换行nowrap,wrap,wrap-reverse):弹性布局复合属性
 * justify-content: space-around/between，center,flex-end,flex-start:设置水平方向的排布方式(设置大盒子)
 * align-items：center,flex-end,flex-start,baseline,strech（默认）:设置元素垂直方向的排列方式(设置大盒子)
 * align-content:center,flex-end,flex-start,space-around/between：设置内容垂直方向的排列方式(设置大盒子)和justify-content是一样的，一个设置水平一个设置垂直
 * order:设置子元素的排列顺序，数字越小的越排在前面
 * flex:设置子元素的分配比例
 * 
 * npm是node的一个包管理，在gitbush里面执行node -v或者npm -v只要出现版本号即可使用
 * npm install -g cnpm --registry=https://registry.npm.taobao.org很多node的包都是在国外的服务器里，为了下载更快更改镜像为国内的淘宝镜像路径https://npm.taobao.org/
 * Node：使用node的两部分
 * 1.使用基于node的包管理工具（npm：可以下载基于node的各种包和插件，比如加密，操作数据库，angular等等）
 * 1.使用API部分，大部分都是操作数据库和文件的API，可当做Java和php来使用，可以写服务器
 * npm常用指令：
 * Install：安装，简写为i
 * Golabel：-g：安装到全局目录下(在任何一个工程中，都可以使用这个插件)
 * uninstall：卸载
 *  cnpm i postcss-cli -g：全局安装postcss
 *  cnpm i autoprefixer -g：配置全局自动添加前缀
 */