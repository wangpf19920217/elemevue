<template>

	<!--结果：vue的学习路线 掌握vue。-->
	<!--	    需求:vuecli(2) + vueRouter + vuex + elementul来搭建项目;-->
	<!--
		vue
	-->
	<div id="elem_tab_box">
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="vue" name="first" v-on:click="randervue()" @tab-click="randervue()" >
				<vuelistbox>
					这里对应vue的tab
				</vuelistbox>
			</el-tab-pane>
			<!--
				
				angular
				
			-->
			<el-tab-pane label="angular" index="noteAngular" name="second">
				<angularlistbox>
					这里对应vue的tab
				</angularlistbox>
			</el-tab-pane>
			<!--
				
				react
			-->
			<el-tab-pane label="react" index="noteReact" name="third">
				<reactlistbox>
					这里对应react的tab
				</reactlistbox>
			</el-tab-pane>
			
			<!--
				jquery
				
			-->
			<el-tab-pane label="jquery" index="noteJquery" name="fourth">
					<jquerylistbox>
						这里对应jquery的tab
					</jquerylistbox>
			</el-tab-pane>
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
	
	let Vobj = new Vue();
	
	Vue.component('simple-counter', {
		  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
		  // 技术上 data 的确是一个函数了，因此 Vue 不会警告，
		  // 但是我们返回给每个组件的实例的却引用了同一个data对象
		  data: function () {
		    return data
		  }
		})
	
	
	console.log(Vobj)
	export default {
		data() {
			return {
				activeName: 'first',
				items :this.listitems,
			}
		},
		components:{
			vuelistbox:require('./note/noteVue'),
			angularlistbox:require('./note/noteAngular'),
			reactlistbox:require('./note/noteReact'),
			jquerylistbox:require('./note/noteJquery')
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