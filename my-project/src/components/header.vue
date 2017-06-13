<template>
	<el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" :router="true">
        <el-menu-item index="/note">应用笔记</el-menu-item>
        <el-submenu index="2">
            <template slot="title">前端技能基础</template>
            <el-menu-item index="javascript">js</el-menu-item>
            <el-menu-item index="html">html5</el-menu-item>
            <el-menu-item index="css">css3</el-menu-item>
        </el-submenu>
        <el-menu-item index="self">简历管理</el-menu-item>
    </el-menu>
</template>

<script>
	export default {
	  name: 'header',
	  data(){
	  	return {
	  		activeIndex: '1'
	  	}
	  }
	}
</script>

<style>
</style>