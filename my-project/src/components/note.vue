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
			<el-collapse v-model="activeNames" accordion>
				<el-collapse-item title="react.js" name="1">
				    <div>react.js（读音 /vjuː/）是一套构建用户界面的渐进式框架。</div>
				    <div>
				    	<a target="_blank"  href="https://cn.vuejs.org/v2/guide/installation.html">文档地址：https://cn.vuejs.org/v2/guide/installation.html</a>
				    </div>
				 </el-collapse-item>


				<el-collapse-item title="vuex" name="5">
					<div>
						Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式
					</div>
					<div>
						npm 安装
						<code class="codeindent">npm install vuex --save</code>
						<code>在一个模块化的打包系统中，您必须显式地通过 Vue.use() 来安装 Vuex：</code>
						<code class="codeindent">import Vue from 'vue'</code>
						<code class="codeindent">import Vuex from 'vuex'</code>
						<code class="codeindent">Vue.use(Vuex)</code>
					</div>
					<div>
						<a target="_blank" href="https://vuex.vuejs.org/zh-cn/">文档地址:https://vuex.vuejs.org/zh-cn/</a>
					</div>
				</el-collapse-item>
			</el-collapse>
		</el-tab-pane>
		
		<!--
			jquery
			
		-->
		<el-tab-pane label="jquery" index="noteJquery" name="fourth">
			 <div id="app">
				<myComponent>
					这里对应jquery的tab
				</myComponent>
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
			angularlistbox:require('./note/noteAngular')
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