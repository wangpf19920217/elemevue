<template>
  <div id="">
  	<el-row>
	  <el-col :span="4">
	  	 <!--
	  	 		左侧菜单
	  	 -->
	  	 <el-col :span="24">
		    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
		      
		      <el-submenu index="1">
		        <template slot="title"><i class="el-icon-message"></i>前端相关</template>
		        <el-menu-item index="1-1">基础知识 <span>进入</span></el-menu-item>
	          <el-menu-item index="1-2">进阶学习 <span>进入</span></el-menu-item>
	          <el-menu-item index="1-3">常用组件/库 <span>进入</span></el-menu-item>
	          <el-menu-item index="1-4">ui库 <span>进入</span></el-menu-item>
		      </el-submenu>
		      
		      <el-submenu index="2">
		        <template slot="title"><i class="el-icon-message"></i>后端相关</template>
		        <el-menu-item index="2-1">基础知识 <span>进入</span></el-menu-item>
	          <el-menu-item index="2-2">进阶学习 <span>进入</span></el-menu-item>
	          <el-menu-item index="2-3">数据库<span>进入</span></el-menu-item>
	          <el-menu-item index="2-4">服务器相关 <span>进入</span></el-menu-item>
		      </el-submenu>
		      
		      <el-menu-item index="3"><i class=""></i>其他相关</el-menu-item>
		      <el-menu-item index="3"><i class=""></i>工具</el-menu-item>
		      <el-menu-item index="4"><i class=""></i>技巧</el-menu-item>
		      <el-menu-item index="5"><i class=""></i>收藏的网站</el-menu-item>
		      <el-menu-item index="6"><i class=""></i>其他相关</el-menu-item>
		      <el-menu-item index="7"><i class=""></i>其他相关</el-menu-item>
		    </el-menu>
		  </el-col>
	  	 
	  	 
	  	 <!--
	  	 		左侧菜单
	  	 -->
	  </el-col>
	  <el-col :span="20">
		  	<div class="grid-content" id="contbox">
		  		右侧
		  		<b-component></b-component>
		  	</div>
	  </el-col>
	</el-row>
  </div>
</template>

<script>
/* eslint-disable no-new */
import Vue from 'vue'



export default {
  name: 'index',
  data () {
    return {
      items: ""
    }
  }
}

var myComponent = Vue.extend({
    template: '<div id="bComponent">我是自定义组件的内容</div>'
});

//2.注册组件到vue里面
Vue.component('b-component', myComponent)

new Vue({
    el: '#contbox',
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.el-submenu .el-menu-item{
		height: 35px;
		line-height: 35px;
	}
	.el-menu-item{
		height: 35px;
		line-height: 35px;
		&>span{
			float: right;
		}
	}
	.el-submenu__title{
		height: 40px;
		line-height: 40px;
	}
</style>
