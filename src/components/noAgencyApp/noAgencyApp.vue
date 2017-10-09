<template>
	<div id="tmpl">
	<mt-header fixed :title="title"></mt-header>
		不代理程序界面
	</div>
</template>

<script>
	// 2.0.0 导入评论组件

	import common from '../../kits/common.js';
	import { Toast } from 'mint-ui';
export default{
		components:{
			
		},
		data(){
		return {
			list:[],
			title:"不代理程序"
			}
		},
		created(){
		
		},
		methods:{
		
		}
	}

</script>

<style scoped>
  /*图片详情样式*/
  #desc{
	  padding: 10px;
  }
	#desc  .title h4{
		color: #0094ff;
	}

  #desc .title p{
	color:rgba(0,0,0,0.4);
	  margin-top: 10px;
  }

  #desc .title .line{
	  width: 100%;
	  height: 1px;
	  border-bottom: 1px solid rgba(0,0,0,0.4);
  }

  .mui-content,.mui-content ul{
	  background-color: #fff;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
	  border-right:0px;
	  border-bottom:0px;
  }
  .mui-grid-view.mui-grid-9{
	  border-top:0px;
	  border-left:0px;
  }

  /* 9宫格缩略图的样式*/
	.mui-content img{
		width: 100px;
		height: 100px;
	}
</style>