webpackJsonp([47,73],{61:function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{tip:""}},methods:{goSave:function(){var t=this;this.$store.commit("uploadCreditStatu",{name:"userScan",val:!0}),this.$store.commit("uploadCreditData",{name:"userScan",val:!0}),this.$dialog(["识别完成","true"]),setTimeout(function(){t.$router.back()},2e3)}},mounted:function(){this.$store.state.creditStatus.userScan===!0&&(void 0!==this.$store.state.creditDatas.userScan?this.tip="之前已经完成了认证":console.log("发送ajax"))}}},205:function(t,s,e){var a=e(1)(e(61),e(295),null,null);t.exports=a.exports},295:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container bgF"},[e("topComponent",{attrs:{title:"人脸识别"}}),t._v(" "),e("p",{staticClass:"listTop"},[t._v("需要对接第三方接口，功能未开发。点击下方按钮，模拟已经完成。")]),t._v(" "),e("p",{staticClass:"listTop"},[t._v(t._s(t.tip))]),t._v(" "),e("div",{staticClass:"btnWarp"},[e("span",{staticClass:"subBtn",on:{click:t.goSave}},[t._v("假设完成")])])],1)},staticRenderFns:[]}}});