webpackJsonp([61],{237:function(e,t,n){var o=n(12)(n(607),n(519),null,null,null);e.exports=o.exports},519:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("keep-alive",[n("router-view")],1)},staticRenderFns:[]}},556:function(e,t,n){"use strict";var o=n(43),a=n.n(o),u=n(11),i=n(81),r={updatePwd:function(e,t){var o=e.rootState,r=e.commit;return u.a.$vux.loading.show({text:"请稍候"}),new a.a(function(e,a){n.i(i.a)({method:"post",url:"pwd/update",data:{oldPwd:t.oldPwd,pwd:t.pwd,token:o.common.user.token}}).then(function(t){u.a.$vux.loading.hide(),r("PWD_UPDATE"),e(t)}).catch(function(e){u.a.$vux.loading.hide(),a(e)})})}};t.a={actions:r}},607:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(78),a=n.n(o),u=n(556);n(25).a.registerModule("settins",a()({},u.a)),t.default={name:"settings"}}});