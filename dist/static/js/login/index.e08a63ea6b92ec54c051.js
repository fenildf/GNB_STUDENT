webpackJsonp([72],{"b/kq":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("Dd8w"),n=s.n(i),a=s("pDNl"),r=s("rHil"),o=s("2sLL"),l=s("NYxO"),c={components:{XInput:a.a,Group:r.a,XButton:o.a},data:function(){return{disable:!1,mobile:this.registerMobile,password:"","is-password":function(e){return e.length>=6&&e.length<=18}}},methods:n()({},Object(l.mapActions)(["getToken"]),{_change:function(){this.disable=this.$refs.mobile.valid&&this.$refs.password.valid},_login:function(){var e=this,t={mobile:this.mobile,pwd:this.password};this.getToken(t).then(function(){setTimeout(function(){e.$router.replace({name:"index"})},500)}).catch(function(t){t&&(e.pwd="")})}}),computed:n()({},Object(l.mapGetters)(["registerMobile"]))},u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[e._m(0,!1,!1),e._v(" "),e._m(1,!1,!1),e._v(" "),s("group",{staticClass:"weui_cells_form"},[s("x-input",{ref:"mobile",attrs:{name:"mobile",placeholder:"手机号",keyboard:"number","is-type":"china-mobile",required:""},on:{"on-change":e._change},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}}),e._v(" "),s("x-input",{ref:"password",attrs:{name:"password",placeholder:"密码",type:"password","is-type":"is-password",min:6,max:18,required:""},on:{"on-change":e._change},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),s("div",{staticClass:"btnWapper"},[s("x-button",{attrs:{disabled:!e.disable,type:"primary"},nativeOn:{click:function(t){e._login(t)}}},[e._v("登录")]),e._v(" "),s("div",{staticClass:"link"},[s("router-link",{attrs:{to:{path:"register"}}},[s("p",{staticClass:"register"},[e._v("新用户注册")])]),e._v(" "),s("router-link",{attrs:{to:{path:"forget"}}},[s("p",{staticClass:"resetPwd"},[e._v("忘记密码?")])])],1)],1)],1)},d=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"icon"},[i("img",{attrs:{src:s("ZSgq")}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"title"},[i("img",{attrs:{src:s("0ivl")}})])}],p={render:u,staticRenderFns:d},m=p,b=s("VU/8"),h=b(c,m,!1,null,null,null);t.default=h.exports}});