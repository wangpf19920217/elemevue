<template>
	<el-collapse  accordion>
      <el-collapse-item title="模板.js" name="1">
	    <div>模板.js（读音 /vjuː/）是一套构建用户界面的渐进式框架。</div>
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
	  
	</el-collapse>
</template>

<script>
	export default {
	  name: 'nodevue'
	}
</script>

<style>
</style>