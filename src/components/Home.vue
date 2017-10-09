<template>

		<div id="tmpl" >

  <i class="fa fa-power-off fa-5x power" @click="openVpn">   <span class="status"> <font size="5px">{{status}}</font></span> </i> 
  <mt-button  class="next" size="small" @click="next">下一条</mt-button>
  <div class="page-cell">
   <mt-cell title="选择线路" is-link :to="{ name: 'vpns' }" :value="num1+'条'"></mt-cell>
    <mt-cell title="代理的程序"  is-link :to="{ name: 'agencyApp' }" :value="num2+'个'"></mt-cell>
     <mt-cell title="不代理的程序"  is-link :to="{ name: 'noAgencyApp' }" :value="num3+'个'"></mt-cell>
      <mt-cell title="自动切换">
      <mt-switch v-model="value2" @change="handleChange"></mt-switch>
    </mt-cell>
    <mt-cell title="全局代理">
      <mt-switch v-model="value3" @change="handleChange"></mt-switch>
    </mt-cell>
     </div>
     
	</div>
</template>

<script>
import { Toast } from 'mint-ui';
import common from '../kits/common.js';

import { Cell } from 'mint-ui';
	export default{
		components:{
			
		},
		data(){
		return {
			list:[],
      status:"未连接",
       value2: true,
      value3: true,
      num1:18,
      num2:8,
      num3:5,
      title:"主页"
			}
		},
		created(){
		
		},
		methods:{
      openVpn(){
            Toast({
      message: '加速成功哦',
      position: 'bottom',
      duration: 2000
});
      },
            next(){
            Toast({
      message: '下一条',
      position: 'bottom',
      duration: 2000
});
      },
       handleChange(event) {
      console.log(event);
    }
		}
	}
</script>

<style >
.mint-button--small {
    font-size: 14px;
    height: 33px;
    margin-left: 2.5rem;
    margin-top:0.8rem;
}
.clear{ clear:both} 
.power{
margin-left: 2.5rem;
margin-top: 1rem;

}
.status{
    display: block;
   margin-top: 0.2rem;
}
.next{   
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
	.mui-icon-home:before,
	.mui-icon-email:before,
	.mui-icon-chatbubble:before,
	.mui-icon-location:before,
	.mui-icon-search:before,
	.mui-icon-phone:before{
		content: '';
		display: inline-block;
		width: 50px;
		height: 50px;
		background-repeat: round;
	}
	

</style>