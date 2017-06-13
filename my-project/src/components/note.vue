<template>

	<!--结果：vue的学习路线 掌握vue。-->
	<!--	    需求:vuecli(2) + vueRouter + vuex + elementul来搭建项目;-->
	<!--
		vue
	-->
	<el-tabs v-model="activeName" @tab-click="handleClick">
		<el-tab-pane label="vue" name="first">
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
			 <div id="app">
				<jquerylistbox>
					这里对应jquery的tab
				</jquerylistbox>
			</div>
		</el-tab-pane>
	</el-tabs>

	
</template>

<script>
	/* eslint-disable no-new */
	import Vue from 'vue'
	import Router from 'vue-router'
	

	export default {
		data() {
			return {
				msg: '',
				activeNames: ['1'],
				activeName: 'first'
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
				console.log(tab, event);
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