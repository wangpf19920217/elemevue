<template>
	
	    <!--结果：vue的学习路线 掌握vue。-->
<!--	    需求:vuecli(2) + vueRouter + vuex + elementul来搭建项目;-->
</template>

<script type="application/ecmascript">
/* eslint-disable no-new */
import Vue from 'vue'
import Router from 'vue-router'
import Notevue from "./note/notevue"
	
	var showN = () =>{
	      const app = new Vue({
	      		Router,
			    components:{ Notevue }
			})
			app.$mount('#showNote')
	}
	
	export default{
	    data(){
	        return {msg:'', activeNames: ['1'],activeName: 'first'}
	    },
	    methods: {
		    handleClick(tab, event) {
		      console.log(tab, event);
		    }
		}
	}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	code{
		display: block;
		margin-left: 20px;
	}
	
	code.codeindent{
			color: red;
			text-indent: 20px;
		}
</style>
