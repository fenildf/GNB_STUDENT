webpackJsonp([53],{Pwcc:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("Dd8w"),d=o.n(a),n=o("ABCa"),s=o("pDNl"),r=o("rHil"),w=o("2sLL"),i=o("1sNz"),l=o("NYxO"),p={components:{XHeader:n.a,XInput:s.a,Group:r.a,XButton:w.a,ViewBox:i.a},data:function(){return{oldPwd:"",newPwd:"",repeatPwd:""}},methods:d()({},Object(l.mapActions)(["updatePwd"]),{_complete:function(){var t=this;this.oldPwd===this.newPwd?this.$vux.toast.show({text:"不可与旧密码一致",type:"text",time:1500,position:"bottom"}):this.newPwd===this.repeatPwd?this.updatePwd({oldPwd:this.oldPwd,pwd:this.newPwd}).then(function(){t.$vux.toast.show({text:"修改成功",type:"text",time:1500,position:"bottom"}),setTimeout(function(){try{localStorage.removeItem("token"),plus.runtime.restart()}catch(e){t.$router.push("/login")}},500)}):this.$vux.toast.show({text:"两次密码输入不一致",type:"text",time:1500,position:"bottom"})}})},u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view-box",{ref:"resetPwd",attrs:{"body-padding-top":"46px"}},[o("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{slot:"header","left-options":{backText:"修改密码"}},slot:"header"},[o("a",{directives:[{name:"show",rawName:"v-show",value:t.newPwd&&t.repeatPwd&&t.oldPwd,expression:"newPwd && repeatPwd && oldPwd"}],attrs:{slot:"right"},on:{click:t._complete},slot:"right"},[t._v("确定")])]),t._v(" "),o("group",{attrs:{gutter:"0"}},[o("x-input",{ref:"oldPwd",attrs:{type:"password",name:"oldPwd",placeholder:"请输入旧密码",keyboard:"text",min:6,max:18},model:{value:t.oldPwd,callback:function(e){t.oldPwd=e},expression:"oldPwd"}}),t._v(" "),o("x-input",{ref:"newpwd",attrs:{type:"password",name:"newPwd",placeholder:"新密码6位字母或符号组合",keyboard:"text",min:6,max:18},model:{value:t.newPwd,callback:function(e){t.newPwd=e},expression:"newPwd"}}),t._v(" "),o("x-input",{ref:"repeatpwd",attrs:{type:"password",name:"repeatPwd",placeholder:"请再次输入新密码",keyboard:"text","equal-with":t.newPwd},model:{value:t.repeatPwd,callback:function(e){t.repeatPwd=e},expression:"repeatPwd"}})],1)],1)},c=[],P={render:u,staticRenderFns:c},h=P,x=o("VU/8"),m=x(p,h,!1,null,null,null);e.default=m.exports}});