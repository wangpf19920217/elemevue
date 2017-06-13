<template>
	<el-collapse v-model="activeNames" accordion>
      <el-collapse-item title="jquery.js" name="1">
	    <div>vue.js（读音 /vjuː/）是一套构建用户界面的渐进式框架。{{ message }}</div>
	    <div>
	    	<a target="_blank"  href="https://cn.vuejs.org/v2/guide/installation.html">文档地址：https://cn.vuejs.org/v2/guide/installation.html</a>
	    </div>
	  </el-collapse-item>
	  
	  
	  <el-collapse-item title="vuecli" name="2">
	    <div>Vue.js 提供一个官方命令行工具，可用于快速搭建大型单页应用。</div>
	    <div>
	    		<code># 全局安装 vue-cli</code>
				<code class="codeindent">$ npm install --global vue-cli</code>
				<code># 创建一个基于 webpack 模板的新项目</code>
				<code class="codeindent">$ vue init webpack my-project</code>
				<code># 安装依赖，走你</code>
				<code class="codeindent">$ cd my-project</code>
				<code class="codeindent">$ npm install</code>
				<code class="codeindent">$ npm run dev</code>
				<a target="_blank" href="https://cn.vuejs.org/v2/guide/installation.html#命令行工具">文档地址：https://cn.vuejs.org/v2/guide/installation.html#命令行工具</a>
	    </div>
	  </el-collapse-item>
	  
	  
	  <el-collapse-item title="vueRouter" name="3">
	    <div>对于大多数单页面应用，都推荐使用官方支持的<a href="">vue-router</a>库。更多细节可以看<a href="">vue-router文档</a>。</div>
	    <div>npm安装：npm install vue-router -s</div>
	    <div>
	    	如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能：
			<code class="codeindent">import Vue from 'vue'</code>
			<code class="codeindent">import VueRouter from 'vue-router'</code>
			<code class="codeindent">Vue.use(VueRouter)</code>
			<a target="_blank" href="https://router.vuejs.org/zh-cn/installation.html">文档地址：https://router.vuejs.org/zh-cn/installation.html</a>
	    </div>
	  </el-collapse-item>
	  
	  
	  <el-collapse-item title="elementUi" name="4">
	    <div>elementUi：饿了么发布的基于vue的ui框架</div>
	    <div>
	    	使用方法:NPM安装：
	    	<code class="codeindent">npm i element-ui -S</code>
	    	<code>完整引入</code>
	    	<code class="codeindent">import Vue from 'vue'</code>
			<code class="codeindent">import ElementUI from 'element-ui'</code>
			<code class="codeindent">import 'element-ui/lib/theme-default/index.css'</code>
			<code>....引入后注册</code>
			<code class="codeindent">Vue.use(ElementUI)</code>
	    </div>
	    <div>
	    	<a target="_blank" href="http://element.eleme.io/#/zh-CN">文档地址:http://element.eleme.io/#/zh-CN</a>
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
</template>

<script>
	export default {
	  name: 'nodejquery',
		data(){
		}
	}
</script>

<style>
</style>