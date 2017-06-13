<template>
   <div id="app">
	    <el-row>
	        <!--<el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>-->
	        <!--使用组件-->
	        <transition>
	       	 	<elheader></elheader>
	        </transition>
	    </el-row>
	     <!--嵌套路由-->
	    <transition name="slide" >
	     	<router-view></router-view>
	    </transition>
	</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import Qs from 'qs'
import Elheader from "./components/header"
	
    export default {
        //加载组件
        components:{Elheader},
        created:()=>{
        	console.log('生命周期钩子');
        	console.log('header组件载入');
        }
    }

</script>

<style>
</style>
