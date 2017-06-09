<template>
   <div>
	    <el-row>
	        <!--<el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>-->
	        <!--使用组件-->
	        <transition>
	       	 	<elheader></elheader>
	        </transition>
	        
	         <transition>
	       	 	<Enote></Enote>
	        </transition>
	        
	    </el-row>
	     <transition name="slide">
	    <!--嵌套路由-->
	     <router-view></router-view>
	      </transition>
	</div>
</template>

<script>
import Vue from 'vue'
import Elheader from "./components/header"
import Enote from "./components/note"

    export default {
        //加载组件
        components:{Elheader,Enote},
        created:()=>{
        	console.log('生命周期钩子');
        	console.log('header组件载入');
        }
    }

</script>

<style>
</style>
