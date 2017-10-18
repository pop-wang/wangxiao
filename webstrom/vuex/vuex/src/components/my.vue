<template>
  <div>
    <h2>加减法计算器</h2>
    <div>
      <input type="button" value="-" @click="minHandler">
      <span>{{num}}</span>
      <input type="button" value="+" @click="addHandler">
    </div>
  </div>
</template>
<script>
  export default{
//      data(){
//          return {
//             num:this.$store.state.num,
//          }
//      },
    computed:{
          num(){
              return this.$store.state.num
          }
  },
    methods:{
          addHandler(){
//              this.num+=5;
//            this.$store.commit("addIncrement",{name:'stark',age:5,n:5})//点击的时候需要改变状态，提交mutation addIncrement，利用$store.commit里面写的参数相当于mutation的函数名字
//            this.$store.commit({
//              type:'addIncrement',
//              n:5,
//              age:18,
//              name:'stark'
//            })
            this.$store.dispatch("addAction")
          },
          minHandler(){
//            this.num-=5;
            this.$store.commit("minIncrement")
          }
    }
  }
</script>
