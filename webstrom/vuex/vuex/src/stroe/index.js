/**
 * Created by CDLX on 2017/10/12.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let store=new Vuex.Store({
  state:{
    num:100
  },
  mutations: {
    //任何时候改变state的状态都通过提交mutation来改变
    //里面可以定义n多个函数，传的参数state相当于上面的state。
    addIncrement(state, stark){
      // setTimeout(() => {//模拟异步，状态会发生混乱，mutation设计原则是同步的
        state.num += stark.n;
      // }, 1000)

    },
    minIncrement(state){
      state.num -= 5;
    },

  },
  actions: {
    addAction(context){
      // context是一个对象
      setTimeout(() => {//模拟异步，状态会发生混乱，mutation设计原则是同步的
        context.commit('addIncrement', {n: 5});
        context.dispatch('wAction',{name:'xiam',age:12})
      }, 1000)

    },
    wAction(context,xiam){
      console.log("xiam.name")
    }
  }

})
export default store
