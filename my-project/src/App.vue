<template>
   <div>
	    <el-row>
	        <!--<el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>-->
	        <!--使用组件-->
	        <elheader></elheader>
	    </el-row>
	    <!--嵌套路由-->
	    <router-view></router-view>
	</div>
</template>

<script>
import Vue from 'vue'
    import elheader from "./components/header";

    export default {
        //加载组件
        components:{elheader}
    }

</script>

<style>
</style>
