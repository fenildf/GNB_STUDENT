webpackJsonp([105],{1185:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("keep-alive",[n("router-view")],1)},staticRenderFns:[]}},576:function(e,t,n){var o=n(50)(n(973),n(1185),null,null);e.exports=o.exports},891:function(e,t,n){"use strict";var o=n(130),a=n.n(o),u=n(52),r=n(197),i={updatePwd:function(e,t){var o=e.rootState,i=e.commit;return u.default.$vux.loading.show({text:"请稍候"}),new a.a(function(e,a){n.i(r.a)({method:"post",url:"pwd/update",data:{oldPwd:t.oldPwd,pwd:t.pwd,token:o.common.user.token}}).then(function(t){u.default.$vux.loading.hide(),i("PWD_UPDATE"),e(t)}).catch(function(e){u.default.$vux.loading.hide(),a(e)})})}};t.a={actions:i}},973:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(129),a=n.n(o),u=n(891),r=n(86);t.default={name:"settings",beforeCreate:function(){r.a.registerModule("settings",a()({},u.a))}}}});