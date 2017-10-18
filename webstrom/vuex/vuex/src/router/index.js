import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import My from '@/components/my'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'My',
      component: My
    }

  ]
})
