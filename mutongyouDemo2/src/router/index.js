import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/index'
import Store from '@/pages/store'
import Good from '@/pages/good'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/store/:userId?/:LogUrl?/:BgUrl?',
      name: 'store',
      component: Store
    },
    {
      path: '/good',
      name: 'good',
      component: Good
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
