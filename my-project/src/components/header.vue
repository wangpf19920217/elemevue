<template>
	<el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" :router="true">
        <el-menu-item index="/note">笔记</el-menu-item>
        <el-submenu index="2">
            <template slot="title">前端技能</template>
            <el-menu-item index="javascript">js</el-menu-item>
            <el-menu-item index="html">html5</el-menu-item>
            <el-menu-item index="css">css3</el-menu-item>
        </el-submenu>
        <el-menu-item index="Self">个人资料</el-menu-item>
    </el-menu>
</template>

<script>
	export default {
	  name: 'header'
	}
</script>

<style>
</style>