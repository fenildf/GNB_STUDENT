webpackJsonp([102],{1116:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("keep-alive",[e("router-view")],1)},staticRenderFns:[]}},533:function(t,n,e){var o=e(50)(e(930),e(1116),null,null);t.exports=o.exports},844:function(t,n,e){"use strict";e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a}),e.d(n,"c",function(){return r}),e.d(n,"d",function(){return c}),e.d(n,"e",function(){return u});var o="DOWNLOAD",a="DOWNLOAD_RESET",r="DOWNLOAD_DETAIL",c="DOWNLOAD_DETAIL_SCROLL",u="DOWNLOAD_DETAIL_RESET"},868:function(t,n,e){"use strict";function o(t){var n="";return"2"===t.toString()?n="math":"7"===t.toString()?n="physics":"8"===t.toString()&&(n="chemistry"),n}Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"getDownloadCamera",function(){return i}),e.d(n,"getDownloadCameraDetail",function(){return d}),e.d(n,"getDownloadRemember",function(){return l}),e.d(n,"getDownloadRememberDetail",function(){return m}),e.d(n,"getDownloadGood",function(){return f}),e.d(n,"getDownloadGoodDetail",function(){return s}),e.d(n,"clearDownload",function(){return p}),e.d(n,"setDownloadDetailScroll",function(){return w}),e.d(n,"clearDownloadDetail",function(){return D});var a=e(130),r=e.n(a),c=e(844),u=e(197),i=function(t,n){var a=t.rootState,i=t.commit;return new r.a(function(t,r){e.i(u.a)({method:"get",url:" download/camera",params:{token:a.common.user.token,subject:o(n.subject)}}).then(function(n){i(c.a,{data:n.data.data,type:"camera"}),t(n)}).catch(function(t){r(t)})})},d=function(t){var n=t.rootState,o=t.commit;return new r.a(function(t,a){e.i(u.a)({method:"get",url:"download/camera/detail",params:{token:n.common.user.token,downloadId:n.route.params.id}}).then(function(n){o(c.c,{data:n.data.data,type:"camera"}),t(n)}).catch(function(t){a(t)})})},l=function(t,n){var a=t.rootState,i=t.commit;return new r.a(function(t,r){e.i(u.a)({method:"get",url:" download/remember",params:{token:a.common.user.token,subject:o(n.subject)}}).then(function(n){i(c.a,{data:n.data.data,type:"remember"}),t(n)}).catch(function(t){r(t)})})},m=function(t){var n=t.rootState,o=t.commit;return new r.a(function(t,a){e.i(u.a)({method:"get",url:"download/remember/detail",params:{token:n.common.user.token,downloadId:n.route.params.id}}).then(function(n){o(c.c,{data:n.data.data,type:"remember"}),t(n)}).catch(function(t){a(t)})})},f=function(t,n){var a=t.rootState,i=t.commit;return new r.a(function(t,r){e.i(u.a)({method:"get",url:" download/good",params:{token:a.common.user.token,subject:o(n.subject)}}).then(function(n){i(c.a,{data:n.data.data,type:"good"}),t(n)}).catch(function(t){r(t)})})},s=function(t){var n=t.rootState,o=t.commit;return new r.a(function(t,a){e.i(u.a)({method:"get",url:"download/good/detail",params:{token:n.common.user.token,downloadId:n.route.params.id}}).then(function(n){o(c.c,{data:n.data.data,type:"good"}),t(n)}).catch(function(t){a(t)})})},p=function(t,n){t.rootState;(0,t.commit)(c.b,n)},w=function(t,n){(0,t.commit)(c.d,n)},D=function(t,n){t.rootState;(0,t.commit)(c.e,n)}},869:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"DownloadCamera",function(){return o}),e.d(n,"DownloadRemember",function(){return a}),e.d(n,"DownloadGood",function(){return r});var o=function(t){return t.camera},a=function(t){return t.remember},r=function(t){return t.good}},870:function(t,n,e){"use strict";var o,a=e(198),r=e.n(a),c=e(844),u=e(869),i=e(868),d={camera:{list:[{}],detail:[{}],scroll:0},good:{list:[{}],detail:[{}],scroll:0},remember:{list:[{}],detail:[{}],scroll:0}},l=(o={},r()(o,c.a,function(t,n){t[n.type].list=n.data}),r()(o,c.b,function(t,n){t[n.type].list=[]}),r()(o,c.c,function(t,n){t[n.type].detail=n.data}),r()(o,c.d,function(t,n){t[n.type].scroll=n.scroll}),r()(o,c.e,function(t,n){t[n.type].detail=[],t[n.type].scroll=0}),o);n.a={state:d,getters:u,actions:i,mutations:l}},930:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(129),a=e.n(o),r=e(86),c=e(870);n.default={name:"download",beforeCreate:function(){r.a.registerModule("download",a()({},c.a))}}}});