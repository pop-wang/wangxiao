/*CSS3:
 * 选择器：
 * 》Ele~ele2：选择Ele后面的所有ele2标签;
 * 》[attribute^=value]：选择每一个attribute属性的值以value开头的元素
 * 》[attribute$=value]：选择每一个attribute属性的值以value结尾的元素
 * 》[attribute*=value]：选择每一个attribute属性的值包含子字符串value的元素
 * 》Ele[attribute=value]:选择属性值等于value的元素
 * 》：root:可以选择文档的根元素
 * 》：empty：选择文档中所有的空元素
 * 》:target：选择激活的元素
 * 》:out-of-range：匹配值在指定区间之外的input元素
 * 》:in-range：匹配值在指定区间之内的input元素
 * 》:disabled：选择每一个禁用的输入元素
 * 》：enabled：选择每一个已启用的输入元素
 * 》：checked：选择每个选中的输入元素
 * 》：not(selector)：选择每个并非p元素的元素
 * 》::selection：匹配元素中被用户选中或处于高亮状态的部分
 * 》:out-of-range：匹配值在指定区间之外的input元素
 * 》:in-range：匹配值在指定区间之内的input元素
 * 》:read-write：用于匹配可读及可写的元素
 * 》:read-only：用于匹配设置 "readonly"（只读） 属性的元素
 * 》:optional：	用于匹配可选的输入元素
 * 》:required：	用于匹配设置了 "required" 属性的元素
 * 》:valid：用于匹配输入值为合法的元素
 * 》:invalid：用于匹配输入值为非法的元素
 * 
 * Background系列属性：
 * 》background-origin:设置背景图片的原点border-box；padding-box；content-box。
 * 》background-clip：裁切图片的容器里面的内容border-box；padding-box；content-box。
 * 》background-attachment：设置背景图片是否随着滚动条滚动
 * 
 * Border系列属性:
 * 》border-radius：设置图片的拐角
 * 》border-image:设置边框背景图的全部
 * 》border-image-source：边框图片的路径
 * 》border-image-slice：裁剪图片的位置，上右下左，与margin padding类似：只设置2个参数（垂直，水平），3个参数
 * 》border-image-width：可以直接设置边框图片的宽度，不会受到边框宽度的影响
 * 》border-image-outset:设置背景图片向外的一个距离，与父容器显示的内容有一定的关系（超出父容器的显示范围就不显示了）
 * 》border-image-repeat: 裁切之后，如果不是整个图片，会重复或者拉伸多余出来这一部分，设置边框图片的重复方式
 * 
 * Box-shadow：盒子阴影（颜色，水平偏移量，垂直偏移量，模糊范围），可以设置多组模糊数值
 * 
 * 文本属性：
 * 》text-overflow：规定文本溢出包含
 * 》text-shadow:文本阴影
 * 》word-break：是否吧一个单词分开换行：normal，break-all（分开）；keep-all；
 * 》word-wrap：是否吧一个长单词分开：break-word（分开）
 * 
 * 渐变：
 * 》线性渐变：linear-gradient(渐变方向/角度，起始颜色  位置，结束颜色  位置)
 * 》放射渐变（径向渐变）:radial-gradient(形状<ellipse，circle> 发散反向 大小半径，起始颜色，结束颜色)
 * 如果要重复渐变，只需要在前面加个repeat即可。
 * 
 * CSS3-变形：
 * 》-webkit-appearance: button：设置元素外形，设置外观外button样式
 * 》outline-offset: 设置外边线的距离
 * 》resize: both：让用户可以改变元素的大小，需要配合使用overflow：auto
 * 》box-size：设置边框内边距的时候会影响整个元素的大小，使用borde-box可以解决这种影响
 * 》transition:转场动画：指定参与过渡变化的样式  设置过渡花费的时间  动画方式  延迟时间，可以叠加多种不同步的动画
 * 》@keyframes :定义关键帧动画,animation：关键帧动画
 * 》skew(x,y):拉伸：不管是X/Y，角度为正数都是向原点拉伸，角度为负数是向结束点拉伸
 * 》scale(x,y):放大缩小，小于1就是缩小，大于1就是放大
 * 》translate():平移
 * 》rotate():旋转
 */