<template>
	<div class="grid-content ">
  		<ul style="background: red; width: 100%;">
  			<li v-for="list in items">
			  {{ item }}
			</li>
  		</ul>
  	</div>
</template>

<script>
	export default {
	  name: 'list',
	  data () {
	    return {
	      items: ["javascript",'css','nodeJS','vue','react','h5']
	    }
	  }
	}
</script>

<style>
</style>