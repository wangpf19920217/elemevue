// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router.js'
import Vuex from 'vuex'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(Vuex)

Vue.use(ElementUI)
/* 引入elementui */

/* eslint-disable no-new */
new Vue({
	  el: '#app',
	  router,
	  template: '<App/>',
	  components: { App }
}
)
