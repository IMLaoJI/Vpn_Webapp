webpackJsonp([6],{1:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={apidomain:"http://webhm.top:8899"}},11:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=n(1);o(a);t.default={components:{},data:function(){return{list:[],status:"未连接",value2:!0,value3:!0,num1:18,num2:8,num3:5,title:"主页"}},created:function(){},methods:{openVpn:function(){(0,i.Toast)({message:"加速成功哦",position:"bottom",duration:2e3})},next:function(){(0,i.Toast)({message:"下一条",position:"bottom",duration:2e3})},handleChange:function(e){console.log(e)}}}},26:function(e,t,n){t=e.exports=n(2)(void 0),t.push([e.id,'.mint-button--small{font-size:14px;height:33px;margin-left:2.5rem;margin-top:.8rem}.clear{clear:both}.power{margin-left:2.5rem;margin-top:1rem}.status{display:block;margin-top:.2rem}.mui-content,.mui-content ul{background-color:#fff}.mui-grid-view.mui-grid-9 .mui-table-view-cell{border-right:0;border-bottom:0}.mui-grid-view.mui-grid-9{border-top:0;border-left:0}.mui-icon-chatbubble:before,.mui-icon-email:before,.mui-icon-home:before,.mui-icon-location:before,.mui-icon-phone:before,.mui-icon-search:before{content:"";display:inline-block;width:50px;height:50px;background-repeat:round}',""])},43:function(e,t,n){n(58);var o=n(4)(n(11),n(49),null,null);e.exports=o.exports},49:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"tmpl"}},[n("i",{staticClass:"fa fa-power-off fa-5x power",on:{click:e.openVpn}},[n("span",{staticClass:"status"},[n("font",{attrs:{size:"5px"}},[e._v(e._s(e.status))])],1)]),e._v(" "),n("mt-button",{staticClass:"next",attrs:{size:"small"},on:{click:e.next}},[e._v("下一条")]),e._v(" "),n("div",{staticClass:"page-cell"},[n("mt-cell",{attrs:{title:"选择线路","is-link":"",to:{name:"vpns"},value:e.num1+"条"}}),e._v(" "),n("mt-cell",{attrs:{title:"代理的程序","is-link":"",to:{name:"agencyApp"},value:e.num2+"个"}}),e._v(" "),n("mt-cell",{attrs:{title:"不代理的程序","is-link":"",to:{name:"noAgencyApp"},value:e.num3+"个"}}),e._v(" "),n("mt-cell",{attrs:{title:"自动切换"}},[n("mt-switch",{on:{change:e.handleChange},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1),e._v(" "),n("mt-cell",{attrs:{title:"全局代理"}},[n("mt-switch",{on:{change:e.handleChange},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1)],1)],1)},staticRenderFns:[]}},58:function(e,t,n){var o=n(26);"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);n(5)("2a0b9f9e",o,!0)}});