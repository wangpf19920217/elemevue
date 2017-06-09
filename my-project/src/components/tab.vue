<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick">
		    <el-tab-pane label="vue" name="first" class="is-active">
		    	
		    </el-tab-pane>
		    <el-tab-pane label="react" name="second">
		    	
		    </el-tab-pane>
		    <el-tab-pane label="angular" name="third">
		    	
		    </el-tab-pane>
		    <el-tab-pane label="jquery" name="fourth">
		    	
		    </el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	export default {
	  name: 'tab'
	}
</script>

<style>
</style>