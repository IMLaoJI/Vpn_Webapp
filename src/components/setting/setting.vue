<template>
	<div id="tmpl">
	<mt-header fixed :title="title"></mt-header>
	设置界面
	</div>
</template>

<script>
	import {getgoodsObject,updateData,remoteItem} from '../../kits/localSg.js';
	import common from '../../kits/common.js';
	import { Toast } from 'mint-ui';
	import { Field } from 'mint-ui';
	import { Button } from 'mint-ui';
	import { Checklist } from 'mint-ui';


	export default{
		components:{
			
		},
		computed:{

		},
		data(){
			return {
				value1: [],
				value2: [],
				value3: '',
				title:'设置'

			}
		},
		created(){
			
		},
		methods:{


		}
	}
</script>

<style scoped>
.mint-field-core {
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    border-radius: 0;
    border: 1px solid rgba(0, 0, 0, .2);
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
    outline: 0;
    line-height: 1.6;
    font-size: inherit;
    width: 100%;
}
</style>