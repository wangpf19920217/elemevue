import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import javascript from '@/components/javascript/js'

const routes =[
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]

export default new Router({
  routes: routes
})
Vue.use(Router)