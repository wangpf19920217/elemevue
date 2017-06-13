import Vue from 'vue'
import Router from 'vue-router'
// import Header from '@/components/header'
import Note from '@/components/note'
import Self from '@/components/self'
import Javascript from '@/components/javascript'
import Html from '@/components/html'
import Css from '@/components/css'

Vue.use(Router)
const routes = [
	{ path: '/',component: Note},
	// 避免头部重复
	{ path: '/note',component: Note},
	{ path: '/self',component: Self},
	{ path: '/html',component: Html},
	{ path: '/css',component: Css},
	{ path: '/javascript',component: Javascript}
]

export default new Router({
  routes: routes
})
