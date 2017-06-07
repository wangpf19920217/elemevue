<template>
  <div id="app">
  	<div class="hello">
			<el-row :gutter="5">
			  <el-col :span="20">
			  	<div class="grid-content bg-purple">
			  		<h1>主标题</h1>
			  	</div>
			  </el-col>
			  
			  <el-col :span="2">
			  	<div class="grid-content bg-purple">
			  			<button type="button" class="el-button el-button--default"><span><font><font class="">user</font></font></span></button>
			  	</div>
			  </el-col>
			  <el-col :span="2">
			  	<div class="grid-content bg-purple">
				  	<i class="el-icon-arrow-down"></i>
			  	</div>
			  </el-col>
			</el-row>
	  </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
	.el-row {
	    &:last-child {
	      margin-bottom: 0;
	    }
	  }
	  .el-col {
	    border-radius: 4px;
	  }
	  .bg-purple {
	    background: #20a0ff;
	    text-align: center;
	    color: white;
	  }
	  .grid-content {
	    border-radius: 4px;
	    min-height: 36px;
	    line-height: 36px;
	  }
</style>
