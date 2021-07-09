import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import shop from '@/pages/shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/shop',
      name: 'shopping',
      component: shop
    },
    {
      path: '/*',
      name: 'error',
      component: HelloWorld
    }
  ]
})
