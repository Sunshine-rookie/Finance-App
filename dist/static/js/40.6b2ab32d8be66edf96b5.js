webpackJsonp([40,73],{79:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{isOnce:!0,checked:!0,knowShow:!1}},methods:{goMore:function(){this.$router.push("/loan/sureMore")},goSubmit:function(){var t=this;this.checked===!1?this.$dialog("请阅读并同意协议"):(this.$dialog(["确认成功","true"]),setTimeout(function(){t.$router.push("/")},2e3))}},mounted:function(){10*Math.random()>=5&&(this.isOnce=!1)}}},224:function(t,e,s){var c=s(1)(s(79),s(256),null,null);t.exports=c.exports},256:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("topComponent",{attrs:{title:"确认信息"}},[s("span",{staticClass:"save",attrs:{slot:"right"},on:{click:function(e){t.$router.push("/loan/cancelSup")}},slot:"right"},[t._v("取消上标")])]),t._v(" "),t.isOnce?s("div",{staticClass:"borrowInfoTit"},[t._m(0),t._v(" "),s("ul",[s("li",[s("b",[t._v("2900")]),t._v("收款金额(元)"),s("i",{staticClass:"queryIcon",on:{click:function(e){t.alertKnow("skje")}}},[t._v("?")])]),t._v(" "),t._m(1),t._v(" "),s("li",[s("b",[t._v("100")]),t._v("服务费(元)"),s("i",{staticClass:"queryIcon",on:{click:function(e){t.alertKnow("fwf")}}},[t._v("?")])])])]):t._e(),t._v(" "),t.isOnce?t._e():s("div",{staticClass:"borrowInfoTit"},[t._m(2),t._v(" "),s("ul",[s("li",[s("b",[t._v("2900")]),t._v("收款金额(元)"),s("i",{staticClass:"queryIcon",on:{click:function(e){t.alertKnow("skje")}}},[t._v("?")])]),t._v(" "),s("li",[s("b",[t._v("3000")]),t._v("授信金额(元)"),s("i",{staticClass:"queryIcon",on:{click:function(e){t.alertKnow("sxje")}}},[t._v("?")])]),t._v(" "),s("li",[s("b",[t._v("100")]),t._v("期初服务费(元)"),s("i",{staticClass:"queryIcon",on:{click:function(e){t.alertKnow("qcfwf")}}},[t._v("?")])])])]),t._v(" "),s("ul",{staticClass:"listCom list-arrow list-mini no-top"},[s("li",{staticClass:"mini",on:{click:t.goMore}},[t._v("更多详情")])]),t._v(" "),t.isOnce?t._e():s("dl",{staticClass:"borrowInfoList mt20"},[s("dt",[t._v("还款计划")]),t._v(" "),t._m(3)]),t._v(" "),s("div",{staticClass:"agreeMent mt20",class:{no:!t.checked},on:{click:function(e){t.checked=!t.checked}}},[t._v("\n    我已阅读并同意"),s("span",{staticClass:"blue",on:{click:function(e){e.stopPropagation(),t.goAgreem("/agreement")}}},[t._v("《借款协议》")]),s("span",{staticClass:"blue",on:{click:function(e){e.stopPropagation(),t.goAgreem("/agreement")}}},[t._v("《委托确认协议书》")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,null)>-1:t.checked},on:{change:function(e){var s=t.checked,c=e.target,n=!!c.checked;if(Array.isArray(s)){var i=null,a=t._i(s,i);c.checked?a<0&&(t.checked=s.concat([i])):a>-1&&(t.checked=s.slice(0,a).concat(s.slice(a+1)))}else t.checked=n}}})]),t._v(" "),s("div",{staticClass:"btnWarp"},[s("span",{staticClass:"subBtn",class:{grayBg:!t.checked},on:{click:t.goSubmit}},[t._v("确认信息")])]),t._v(" "),t.knowShow?s("alertKnow",{attrs:{title:t.knowTit,content:t.knowCon},on:{goHide:function(e){t.knowShow=!t.knowShow}}}):t._e()],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("dl",[s("dt",[t._v("项目编号"),s("span",{staticClass:"col3"},[t._v("20151206100122")])]),t._v(" "),s("dd",[t._v("借款期限(天)"),s("span",{staticClass:"col3"},[t._v("270")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("b",[t._v("3000")]),t._v("利息金额(元)")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("dl",[s("dt",[t._v("项目编号"),s("span",{staticClass:"col3"},[t._v("20151206100122")])]),t._v(" "),s("dd",[t._v("借款期限(月）"),s("span",{staticClass:"col3"},[t._v("3")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("dd",{staticClass:"table"},[s("table",[s("tbody",[s("tr",[s("th",{staticClass:"txtLeft",attrs:{width:"18%"}},[t._v("期数")]),t._v(" "),s("th",[t._v("应还本金")]),t._v(" "),s("th",[t._v("应还利息")]),t._v(" "),s("th",{attrs:{width:"20%"}},[t._v("管理费")])]),t._v(" "),s("tr",[s("td",{staticClass:"txtLeft"},[t._v("第一期")]),t._v(" "),s("td",[t._v("2000.00")]),t._v(" "),s("td",[t._v("100.81")]),t._v(" "),s("td",[t._v("21.0")])]),t._v(" "),s("tr",[s("td",{staticClass:"txtLeft"},[t._v("第二期")]),t._v(" "),s("td",[t._v("2000.00")]),t._v(" "),s("td",[t._v("100.81")]),t._v(" "),s("td",[t._v("21.0")])]),t._v(" "),s("tr",[s("td",{staticClass:"txtLeft"},[t._v("第三期")]),t._v(" "),s("td",[t._v("2000.00")]),t._v(" "),s("td",[t._v("100.81")]),t._v(" "),s("td",[t._v("21.0")])]),t._v(" "),s("tr",{staticClass:"end"},[s("td",{staticClass:"txtLeft"},[t._v("合计")]),t._v(" "),s("td",[t._v("6000.00")]),t._v(" "),s("td",[t._v("602.42")]),t._v(" "),s("td",[t._v("63.0")])])])])])}]}}});