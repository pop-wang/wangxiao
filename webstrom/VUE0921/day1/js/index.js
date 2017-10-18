/**
 * Created by CDLX on 2017/9/21.
 */
let app=new Vue({//hello world
    el:"#app",//element的简写
    data:{
        a:"aaa",
        arr:["12","23","23","34"],
        message:"Hello Vue!",
        id:"0000",
        seen:true,
        flag:true,
        num:5,
        addClass:true,
        imgs:"https://vuejs.org/images/logo.png",
        tpl:"<h1>hello wangdapao</h1>",
        name:"wangdpao",
        html:"<div>hello wangdapao</div>"
    },
    // components:{
    //   "dapao":{
    //       template:"#aaa",
    //   }
    // },
    components:{
        "wangXiao":{
            data(){//里面写data一定要使用return的方式返回一个对象（这个是闭包的形式：好处：每个组件相互不污染，不影响，每个组件都是独立的）
                return{
                    message:"hello world",
                    arr:["apple","banana","orange"]
                }
            },
            methods:{
                change(){
                    this.message="changed"
                }
            },
            template:"#tpl",
        }
    },
    // template:"#temp",//如果Vue选项中包含render函数，template将被忽略。
    // render(createElement){
    //     return createElement(
    //         "ul",{
    //             class:{
    //                 bg:true,
    //             },
    //             style:{
    //               fontSize:"30px",
    //                 color:"red",
    //             },
    //             attrs:{
    //                 stark:"dapao.wang"
    //             },
    //         },[
    //             createElement("li",2),
    //             createElement("li",3),
    //             createElement("li",1),
    //         ]
    //     )
    // },
    methods:{
        show:function () {
            console.log("调用了show方法")
        },
        add:function () {
            this.arr.push("666");
        },
        change(){
          this.flag=!this.flag;
        },
    },
    beforeCreate(){  //生命周期
        alert("实例创建前");
    },
    created(){
        alert("实例创建完成");
    },
    beforeMount(){
        alert("实例挂载前");
    },
    mounted(){
        alert("实例挂载完成");
        $(".wangdapao").click(function () {
            alert("我饿啦");
        })
    },
    beforeUpdate(){
        alert("数据更新前");
    },
    updated(){
        alert("数据更新完成");
    },
    beforeDestroy(){
        alert("实例销毁前");
    },
    destroyed(){
        alert("实例销毁完成");
    },
})
// function change() {
//     app.message="hello wangdapao";
// }
// function destroy() {
//     app.$destroy();
// }