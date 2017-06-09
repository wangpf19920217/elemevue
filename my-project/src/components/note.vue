  	<template>
    <div>
       {{ this.msg }}
    </div>
</template>

<script>
/* eslint-disable no-new */
import Vue from 'vue'

let notetxt = `
	<p>vuecli(2) + vueRouter + vuex + elementul 管理模板</p>
`
export default{
    data(){
        return {msg:notetxt}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	
</style>
