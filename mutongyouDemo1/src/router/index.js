import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/index'
import page1 from '@/pages/page1'
import product from '@/pages/product'
import Case from '@/pages/case'
import aboutus from '@/pages/aboutus.vue'
import joinus from '@/pages/joinus.vue'
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
      name: 'index',
      component: index
    },
    {
      path: '/page1',
      name: 'test',
      component: page1
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/case',
      name: 'case',
      component: Case
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
    },
    {
      path: '/joinus',
      name: 'joinus',
      component: joinus
    },
    {
      path: '/*',
      name: 'error',
      component: index,
      redirect: '/index'
    }
  ]
})
