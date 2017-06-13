<template>

	<!--结果：vue的学习路线 掌握vue。-->
	<!--	    需求:vuecli(2) + vueRouter + vuex + elementul来搭建项目;-->
	<!--
		vue
	-->
	<el-tabs v-model="activeName" @tab-click="handleClick">
		<el-tab-pane label="vue" name="first">
			<vuelistbox>
				这里对应vue的tab
			</vuelistbox>
		</el-tab-pane>
		<!--
			
			angular
			
		-->
		<el-tab-pane label="angular" index="noteAngular" name="second">
			<angularlistbox>
				这里对应vue的tab
			</angularlistbox>
		</el-tab-pane>
		<!--
			
			react
		-->
		<el-tab-pane label="react" index="noteReact" name="third">
			<reactlistbox>
				这里对应react的tab
			</reactlistbox>
		</el-tab-pane>
		
		<!--
			jquery
			
		-->
		<el-tab-pane label="jquery" index="noteJquery" name="fourth">
			 <div id="app">
				<jquerylistbox>
					这里对应jquery的tab
				</jquerylistbox>
			</div>
		</el-tab-pane>
	</el-tabs>

	
</template>

<script>
	/* eslint-disable no-new */
	import Vue from 'vue'
	import Router from 'vue-router'
	
	const store = new Vuex.Store({
		state: {
			count: 0
		},
		mutations: {
			increment (state) {
			state.count++
			}
		}
		})
	const url = "../static/data/study.json"
const noteaxconfig = {
				//请求的接口，在请求的时候，如axios.get(url,config);这里的url会覆盖掉config中的url
				url: '',

				// 请求方法同上
				method: 'get', // default
				// 基础url前缀
				baseURL: 'localhost:8080',
				　　
				transformRequest: [function (data) {
					// 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
				　　data = Qs.stringify({});
					return data;
				}],

				transformResponse: [function (data) {
					// 这里提前处理返回的数据

					return data;
				}],

				// 请求头信息
				// headers: {'X-Requested-With': 'XMLHttpRequest'},

				//parameter参数
				params: {
					name: 'vue'
				},

				//post参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
				data: {
					firstName: 'Fred'
				},

				//设置超时时间
				timeout: 1000,
				//返回数据类型
				responseType: 'json', // default

				
				}
// axios.post(url,{},noteaxconfig)
//     .then(function(res){
//         console.log(res);
//     })
//     .catch(function(err){
//         console.log(err);
//     })
//axios请求返回的也是一个promise,跟踪错误只需要在最后加一个catch就可以了。
//下面是关于同时发起多个请求时的处理
// axios.all([get1(), get2()])
//   .then(axios.spread(function (res1, res2) {
//     // 只有两个请求都完成才会成功，否则会被catch捕获
//   }));
	axios({
		method:"GET",
		url:url,
	});

	export default {
		data() {
			return {
				// msg: '',
				activeName: 'first',
				notatabitem:[{
					
				},{},{},{}]
			}
		},
		components:{
			vuelistbox:require('./note/noteVue'),
			angularlistbox:require('./note/noteAngular'),
			reactlistbox:require('./note/noteReact'),
			jquerylistbox:require('./note/noteJquery')
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			}
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	code {
		display: block;
		margin-left: 20px;
	}
	
	code.codeindent {
		color: red;
		text-indent: 20px;
	}
	
	.el-tabs__header {
		margin: 0 0 -1px;
	}
</style>