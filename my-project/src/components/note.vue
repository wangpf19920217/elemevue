<template>

	<!--结果：vue的学习路线 掌握vue。-->
	<!--	    需求:vuecli(2) + vueRouter + vuex + elementul来搭建项目;-->
	<!--
		vue
	-->
	<div id="elem_tab_box">
		<el-tabs  v-model="activeName" @tab-click="handleClick" >
			<tablist v-bind.tablelist="tablelistitem">
				父组件 子是一个table切换 
			</tablist>
		</el-tabs>
	
	</div>

	
</template>

<script>
	/* eslint-disable no-new */
	import Vue from 'vue'
	import axios from 'axios'
	import vuex from 'vuex'
	import Router from 'vue-router'
	
//	Vue.component('simple-counter', {
//		  data: function () {
//		    return data
//		  }
//		})
	const url = "../static/data/study.json"
	// axios.post(url,{},noteaxconfig)
	//     .then(function(res){
	//         console.log(res);
	//     })
	//     .catch(function(err){
	//         console.log(err);
	//     })
	//axios请求返回的也是一个promise,跟踪错误只需要在最后加一个catch就可以了。
	//下面是关于同时发起多个请求时的处理
	// axios.all([get1(), get2()])
	//   .then(axios.spread(function (res1, res2) {
	//     // 只有两个请求都完成才会成功，否则会被catch捕获
	//   }));
	
	export default {
		name:'noteshowbox',
		data() {
			return {
				activeName: 'first',
				items :this.listitems,
			}
		},
		components:{
			tablist:require('./note/noteshow')
		},
		methods: {
			handleClick(tab, event) {
				axios.get(url).then(function(data){
					console.log(data)
					for(let i=0;i<data.data.length;i++){
						// this.items =data.data[i].name; 
					}
				});
			},
			randervue() {
				console.log('请求数据')
			}
		},
		computed:{
			datalistitem:{
				get:function(){},
				set:function(){}
			}
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	code {
		display: block;
		margin-left: 20px;
	}
	
	code.codeindent {
		color: red;
		text-indent: 20px;
	}
	
	.el-tabs__header {
		margin: 0 0 -1px;
	}
</style>