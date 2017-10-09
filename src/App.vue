<!-- 以后项目的根组件 -->
<template>
	<div>
		<!-- 1.0 利用mint-ui中的header组件实现整个系统的头部 -->
		<mt-header fixed :title="title"></mt-header>
			<!--1.0.1 统一的返回按钮-->
		<div  id="back"  v-if="isShow">
			<a  @click="goback"  ><span class="mui-icon mui-icon-back"></span></a>
		</div>
			
		<!-- 2.0 利用vue-router的 <router-view>进行占位 -->
		<router-view></router-view>

		<!-- 3.0 利用mui中的tabbar组件实现系统的底部 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/my">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">主页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/clients">
				<span class="mui-icon mui-icon-person">
				
				</span>
				<span class="mui-tab-label">用户</span>
			</router-link>
		
			<router-link class="mui-tab-item" to="/setting">
				<span class=" mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
	</div>
</template>

<script>

	export default{  // es6的导出对象的写法
		data(){  //等价于 es5的 data:function(){
			return {
				isShow : false,
				title:"主页"
				
			}
		},
	watch:{
			//监控当前的路由对象 $route ，如果url中的路由规则发生了改变，那么就会触发这个方法
			'$route':function(newval,oldval){
				if(newval.path.toLowerCase() == '/my'){
					//表示当前页面是首页应该要隐藏返回按钮
					this.isShow = false;
				}else if (newval.path.toLowerCase()=='/setting') {
					this.isShow = false;
				}else if (newval.path.toLowerCase()=='/clients') {
					this.isShow = false;
				}else{
					//非首页要显示返回按钮
					this.isShow = true;
				}
			}
		},
		methods:{
			goback(){
				this.$router.go(-1); //返回上一个页面
			}
		},
		created(){
			this.isShow=false;
		}
	}
</script>

<style scoped>
/*当前页面的css样式写到这里，其中scoped表示这个里面写的css代码只是在当前组件页面上有效，不会去影响到其他组件页面*/
#back{
	width: 60px;
	position: absolute;
	top:10px;
	left:10px;
	z-index: 101;
}
#tool{

	position: absolute;
	top:10px;
	right:10px;
	z-index: 101;
}

#back a{
	color:white;
	font-size: 16px;
	font-weight: bold;
}
#tool a{
	color:white;
	font-size: 16px;
	font-weight: bold;
}
</style>