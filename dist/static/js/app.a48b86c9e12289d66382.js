webpackJsonp([110],{143:function(t,n,e){"use strict";e.d(n,"a",function(){return o}),e.d(n,"d",function(){return i}),e.d(n,"c",function(){return a}),e.d(n,"b",function(){return u}),e.d(n,"e",function(){return c}),e.d(n,"g",function(){return r}),e.d(n,"f",function(){return s});var o="USERINFO",i="USER_TOKEN",a="USERPHOTO_SET",u="USERPHOTO_POST",c="USER_NEW_MESSAGE",r="TEXTBOOK_VERSION",s="SWIPER_INFO"},199:function(t,n,e){"use strict";function o(t){e(520)}var i=e(270),a=e(533),u=e(52),c=o,r=u(i.a,a.a,!1,c,null,null);n.a=r.exports},200:function(t,n,e){"use strict";var o=e(61),i=e.n(o),a=e(53),u=e(534),c=e(536),r=(e.n(c),e(92)),s=e(265),l=e(249),h=e(236),d=e(239),m=e(241),f=e(240),p=e(244),b=e(245),w=e(246),_=e(247),g=e(248),v=e(250),x=e(254),k=e(253),y=e(255),S=e(263),T=e(258);a.default.use(u.a);var C=new u.a({mode:"hash",routes:[h.a,f.a,d.a,p.a,b.a].concat(i()(w.a),[l.a],i()(s.a),i()(g.a),[v.a,x.a,_.a,m.a],i()(T.a),[y.a],i()(k.a),i()(S.a))});e.i(c.sync)(r.a,C),n.a=C},209:function(t,n,e){"use strict";function o(t){e(516)}var i=e(271),a=e(529),u=e(52),c=o,r=u(i.a,a.a,!1,c,null,null);n.a=r.exports},212:function(t,n,e){"use strict";var o=e(135),i=e.n(o),a=e(134),u=e.n(a),c=e(53),r=e(218),s=e.n(r),l=e(522),h=e.n(l);s.a.defaults.timeout=1e4,s.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",s.a.defaults.baseURL="https://www.guinaben.com/student/",s.a.interceptors.request.use(function(t){return t.params=u()({},t.params,{VERSION:"3.5.0"}),"post"===t.method&&(t.data=h.a.stringify(t.data,{arrayFormat:"brackets"})),t},function(t){return c.default.$vux.toast.show({text:"非法输入",type:"text",time:1500,position:"bottom"}),i.a.reject(t)}),s.a.interceptors.response.use(function(t){return 401===t.data.code?(localStorage.removeItem("token"),c.default.$vux.toast.show({text:t.data.msg,type:"warn",time:1500,isShowMask:!0}),setTimeout(function(){try{plus.runtime.restart()}catch(t){window.location.href="/login"}},500),i.a.reject(t)):403===t.data.code?(c.default.$vux.alert.show({title:"发现新版本",content:"升级全新体验",onHide:function(){/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())?plus.runtime.openURL("itms-apps://itunes.apple.com/cn/app/gui-na-ben-xue-sheng-duan/id1184077595?l=en&mt=8"):window.location.href="market://details?id=com.sanbao.guinaben.student";try{plus.runtime.quit()}catch(t){console.log("当前是网页模式")}}}),i.a.reject(t)):200!==t.data.code?(c.default.$vux.toast.show({text:t.data.msg,type:"text",time:1500,position:"bottom"}),i.a.reject(t)):t},function(t){return c.default.$vux.toast.show({text:"网络异常",type:"text",time:1500,position:"bottom"}),i.a.reject(t)}),n.a=s.a},214:function(t,n,e){"use strict";function o(t){e(519)}var i=e(269),a=e(532),u=e(52),c=o,r=u(i.a,a.a,!1,c,null,null);n.a=r.exports},217:function(t,n,e){"use strict";function o(t){e(518)}var i=e(267),a=e(531),u=e(52),c=o,r=u(i.a,a.a,!1,c,null,null);n.a=r.exports},236:function(t,n,e){"use strict";n.a={path:"/about",component:function(t){return e.e(104).then(function(){return t(e(544))}.bind(null,e)).catch(e.oe)},children:[{path:"/",component:function(t){return e.e(42).then(function(){return t(e(543))}.bind(null,e)).catch(e.oe)}},{path:"my",component:function(t){return e.e(86).then(function(){return t(e(545))}.bind(null,e)).catch(e.oe)}},{path:"advice",component:function(t){return e.e(20).then(function(){return t(e(541))}.bind(null,e)).catch(e.oe)}},{path:"adviceHistory",component:function(t){return e.e(91).then(function(){return t(e(542))}.bind(null,e)).catch(e.oe)}}]}},237:function(t,n,e){"use strict";n.a=[{path:"/camera/chapter",name:"camera_chapter",component:function(t){return e.e(85).then(function(){return t(e(547))}.bind(null,e)).catch(e.oe)},redirect:"/camera/chapter/math",children:[{path:"physics",name:"camera_chapter_physics",component:function(t){return e.e(37).then(function(){return t(e(549))}.bind(null,e)).catch(e.oe)}},{path:"math",name:"camera_chapter_math",component:function(t){return e.e(27).then(function(){return t(e(548))}.bind(null,e)).catch(e.oe)}},{path:"chemistry",name:"camera_chapter_chemistry",component:function(t){return e.e(38).then(function(){return t(e(546))}.bind(null,e)).catch(e.oe)}}]}]},238:function(t,n,e){"use strict";n.a=[{path:"/camera/points",name:"camera_points",component:function(t){return e.e(84).then(function(){return t(e(553))}.bind(null,e)).catch(e.oe)},redirect:"/camera/points/math",children:[{path:"physics",name:"camera_points_physics",component:function(t){return e.e(49).then(function(){return t(e(555))}.bind(null,e)).catch(e.oe)}},{path:"math",name:"camera_points_math",component:function(t){return e.e(33).then(function(){return t(e(554))}.bind(null,e)).catch(e.oe)}},{path:"chemistry",name:"camera_points_chemistry",component:function(t){return e.e(50).then(function(){return t(e(552))}.bind(null,e)).catch(e.oe)}}]}]},239:function(t,n,e){"use strict";var o=e(61),i=e.n(o),a=e(237),u=e(238);n.a={path:"/camera",name:"camera",component:function(t){return e.e(103).then(function(){return t(e(550))}.bind(null,e)).catch(e.oe)},redirect:"/camera/chapter",children:[].concat(i()(a.a),i()(u.a),[{path:"photo",name:"camera_photo",component:function(t){return e.e(96).then(function(){return t(e(551))}.bind(null,e)).catch(e.oe)}},{path:"upload",name:"camera_upload",component:function(t){return e.e(32).then(function(){return t(e(556))}.bind(null,e)).catch(e.oe)}}])}},240:function(t,n,e){"use strict";n.a={path:"/collect",component:function(t){return e.e(77).then(function(){return t(e(558))}.bind(null,e)).catch(e.oe)},redirect:"/collect/math",children:[{path:"physics",name:"collect_physics",component:function(t){return e.e(63).then(function(){return t(e(560))}.bind(null,e)).catch(e.oe)}},{path:"math",name:"collect_math",component:function(t){return e.e(64).then(function(){return t(e(559))}.bind(null,e)).catch(e.oe)}},{path:"chemistry",name:"collect_chemistry",component:function(t){return e.e(65).then(function(){return t(e(557))}.bind(null,e)).catch(e.oe)}}]}},241:function(t,n,e){"use strict";n.a={path:"/comment/:wbeid",name:"comment",component:function(t){return e.e(51).then(function(){return t(e(561))}.bind(null,e)).catch(e.oe)}}},242:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"getUserInfo",function(){return l}),e.d(n,"setUserInfo",function(){return h}),e.d(n,"getToken",function(){return d}),e.d(n,"getTextbookVersion",function(){return m}),e.d(n,"getUserNews",function(){return f}),e.d(n,"setHeadImg",function(){return p}),e.d(n,"uploadHeadImg",function(){return b}),e.d(n,"getSwiperInfo",function(){return w}),e.d(n,"swiperInfoClear",function(){return _});var o=e(134),i=e.n(o),a=e(135),u=e.n(a),c=e(53),r=e(212),s=e(143),l=function(t){var n=t.rootState,o=t.commit;return c.default.$vux.loading.show({text:"请稍候"}),new u.a(function(t,i){e.i(r.a)({method:"get",url:"user",params:{token:n.common.user.token}}).then(function(n){o(s.a,n.data.data),t(n),c.default.$vux.loading.hide()}).catch(function(){c.default.$vux.loading.hide()})})},h=function(t,n){var o=t.rootState;t.commit,t.dispatch;return c.default.$vux.loading.show({text:"请稍候"}),new u.a(function(t,a){e.i(r.a)({method:"post",url:"user/update",data:i()({},n,{token:o.common.user.token})}).then(function(n){c.default.$vux.loading.hide(),t(n)}).catch(function(){c.default.$vux.loading.hide()})})},d=function(t,n){var o=t.commit;return c.default.$vux.loading.show({text:"请稍候"}),new u.a(function(t,a){e.i(r.a)({method:"get",url:"user/token",params:i()({},n)}).then(function(n){o("USER_TOKEN",n.data.token),c.default.$vux.loading.hide(),t(n)}).catch(function(t){c.default.$vux.loading.hide(),a(t)})})},m=function(t,n){var o=t.commit;return c.default.$vux.loading.show({text:"请稍候"}),new u.a(function(t,i){e.i(r.a)({method:"get",url:"textbookVersion",params:{grade:n.grade}}).then(function(n){c.default.$vux.loading.hide(),o(s.g,n.data.data),t(n)}).catch(function(t){c.default.$vux.loading.hide(),i(t)})})},f=function(t){var n=t.rootState,o=t.commit;return new u.a(function(t,i){e.i(r.a)({method:"get",url:"message/new",params:{token:n.common.user.token}}).then(function(n){o(s.e,n.data.data),t(n)})})},p=function(t,n){(0,t.commit)(s.c,n)},b=function(t,n){var o=t.rootState,i=t.commit,a=t.dispatch;return c.default.$vux.loading.show({text:"请稍候"}),new u.a(function(t,u){e.i(r.a)({method:"post",url:"user/headImg",data:{img:n.img,token:o.common.user.token}}).then(function(n){i(s.b,n.data.data),a("getUserInfo"),c.default.$vux.loading.hide(),t(n)}).catch(function(t){c.default.$vux.loading.hide(),u(t)})})},w=function(t){var n=t.rootState,o=t.commit;return new u.a(function(t,i){e.i(r.a)({method:"get",url:"swiper",params:{id:n.route.params.id}}).then(function(n){o(s.f,n.data.data),t(n)})})},_=function(t){(0,t.commit)(s.f,{title:"",article:""})}},243:function(t,n,e){"use strict";var o,i=e(213),a=e.n(i),u=e(143),c=e(242),r={system:/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())?"IOS":"Android",article:{title:"",content:""},news:{classes:!1,correct:!1,system:!1},user:{headImg:"",bufferImg:"",name:"",school:"",sex:"",mobile:"",grade:"",textbook:[],subjectType:[],textbookAll:{math:[],physics:[],chemistry:[],subjectType:[]},subject:[],version:"",swiper:[{}],token:localStorage.getItem("token")}},s={Path:function(t,n,e){return e.route.path},Query:function(t,n,e){return e.route.query},Params:function(t,n,e){return e.route.params},Route:function(t,n,e){return e.route},User:function(t){return t.user},News:function(t){return t.news},SwiperInfo:function(t){return t.article},System:function(t){return t.system}},l=(o={},a()(o,u.a,function(t,n){t.user.textbook=n.textbook[0],t.user.headImg=n.headImg,t.user.name=n.name,t.user.mobile=n.mobile,t.user.school=n.school,t.user.sex=n.sex,t.user.grade=n.grade,t.user.version=n.version,t.user.subject=n.subject,t.user.subjectType=n.subjectType,t.user.swiper=n.swiper}),a()(o,u.b,function(t,n){t.user.headImg=n.headImg}),a()(o,u.c,function(t,n){t.user.bufferImg=n}),a()(o,u.d,function(t,n){t.user.token=n,localStorage.setItem("token",n)}),a()(o,u.e,function(t,n){t.news.classes=n.classes,t.news.correct=n.correct,t.news.system=n.system}),a()(o,u.f,function(t,n){t.article.title=n.title,t.article.content=n.content}),a()(o,u.g,function(t,n){t.user.textbookAll.math=n.subjectOptions.math,t.user.textbookAll.subjectType=n.subjectType,t.user.textbookAll.physics=n.subjectOptions.physics||[],t.user.textbookAll.chemistry=n.subjectOptions.chemistry||[]}),o);n.a={state:r,getters:s,mutations:l,actions:c}},244:function(t,n,e){"use strict";n.a={path:"/correct/:subjectId/:id",name:"correct",component:function(t){return e.e(23).then(function(){return t(e(562))}.bind(null,e)).catch(e.oe)}}},245:function(t,n,e){"use strict";n.a={path:"/download",component:function(t){return e.e(102).then(function(){return t(e(568))}.bind(null,e)).catch(e.oe)},children:[{path:"/",name:"download",component:function(t){return e.e(62).then(function(){return t(e(567))}.bind(null,e)).catch(e.oe)}},{path:"camera",name:"downloadCamera",component:function(t){return e.e(3).then(function(){return t(e(563))}.bind(null,e)).catch(e.oe)}},{path:"camera/:id",name:"downloadCamera_detail",component:function(t){return e.e(35).then(function(){return t(e(564))}.bind(null,e)).catch(e.oe)}},{path:"good",name:"downloadGood",component:function(t){return e.e(2).then(function(){return t(e(565))}.bind(null,e)).catch(e.oe)}},{path:"good/:id",name:"downloadGood_detail",component:function(t){return e.e(43).then(function(){return t(e(566))}.bind(null,e)).catch(e.oe)}},{path:"remember",name:"downloadRemember",component:function(t){return e.e(1).then(function(){return t(e(569))}.bind(null,e)).catch(e.oe)}},{path:"remember/:id",name:"downloadRemember_detail",component:function(t){return e.e(34).then(function(){return t(e(570))}.bind(null,e)).catch(e.oe)}}]}},246:function(t,n,e){"use strict";n.a=[{path:"/example/:subjectId/:id",name:"example",component:function(t){return e.e(45).then(function(){return t(e(571))}.bind(null,e)).catch(e.oe)}},{path:"/practise/:subjectId/:id",name:"practise",component:function(t){return e.e(44).then(function(){return t(e(572))}.bind(null,e)).catch(e.oe)}}]},247:function(t,n,e){"use strict";n.a={path:"/homework",component:function(t){return e.e(101).then(function(){return t(e(574))}.bind(null,e)).catch(e.oe)},children:[{path:"/",name:"homework",component:function(t){return e.e(9).then(function(){return t(e(573))}.bind(null,e)).catch(e.oe)}}]}},248:function(t,n,e){"use strict";n.a=[{path:"/induce",component:function(t){return e.e(69).then(function(){return t(e(581))}.bind(null,e)).catch(e.oe)},name:"induce",redirect:"/induce/math",children:[{path:"physics",name:"induce_physics",component:function(t){return e.e(24).then(function(){return t(e(583))}.bind(null,e)).catch(e.oe)}},{path:"math",name:"induce_math",component:function(t){return e.e(25).then(function(){return t(e(582))}.bind(null,e)).catch(e.oe)}},{path:"chemistry",name:"induce_chemistry",component:function(t){return e.e(26).then(function(){return t(e(575))}.bind(null,e)).catch(e.oe)}}]},{path:"/induce/exercise/:subject/:chapterId/:chapterName",name:"induce_exercise",component:function(t){return e.e(83).then(function(){return t(e(577))}.bind(null,e)).catch(e.oe)},redirect:"/induce/exercise/:subject/:chapterId/:chapterName/total",children:[{path:"total",name:"induce_exercise_total",component:function(t){return e.e(78).then(function(){return t(e(580))}.bind(null,e)).catch(e.oe)}},{path:"pass",name:"induce_exercise_pass",component:function(t){return e.e(80).then(function(){return t(e(578))}.bind(null,e)).catch(e.oe)}},{path:"break",name:"induce_exercise_break",component:function(t){return e.e(81).then(function(){return t(e(576))}.bind(null,e)).catch(e.oe)}},{path:"practice",name:"induce_exercise_practice",component:function(t){return e.e(79).then(function(){return t(e(579))}.bind(null,e)).catch(e.oe)}}]}]},249:function(t,n,e){"use strict";n.a={path:"/login",component:function(t){return e.e(100).then(function(){return t(e(586))}.bind(null,e)).catch(e.oe)},children:[{path:"/",component:function(t){return e.e(30).then(function(){return t(e(587))}.bind(null,e)).catch(e.oe)}},{path:"/forget",component:function(t){return e.e(14).then(function(){return t(e(584))}.bind(null,e)).catch(e.oe)}},{path:"/register",component:function(t){return e.e(13).then(function(){return t(e(588))}.bind(null,e)).catch(e.oe)}},{path:"/info",component:function(t){return e.e(15).then(function(){return t(e(585))}.bind(null,e)).catch(e.oe)}},{path:"/resetPassword",component:function(t){return e.e(12).then(function(){return t(e(589))}.bind(null,e)).catch(e.oe)}},{path:"/setPassword",component:function(t){return e.e(11).then(function(){return t(e(590))}.bind(null,e)).catch(e.oe)}}]}},250:function(t,n,e){"use strict";n.a={path:"/message",component:function(t){return e.e(99).then(function(){return t(e(594))}.bind(null,e)).catch(e.oe)},redirect:"/message/",children:[{path:"/",component:function(t){return e.e(54).then(function(){return t(e(593))}.bind(null,e)).catch(e.oe)}},{path:"correct",component:function(t){return e.e(89).then(function(){return t(e(592))}.bind(null,e)).catch(e.oe)}},{path:"system",component:function(t){return e.e(88).then(function(){return t(e(595))}.bind(null,e)).catch(e.oe)}},{path:"class",component:function(t){return e.e(90).then(function(){return t(e(591))}.bind(null,e)).catch(e.oe)}}]}},251:function(t,n,e){"use strict";n.a=[{path:"/myBook",component:function(t){return e.e(68).then(function(){return t(e(598))}.bind(null,e)).catch(e.oe)},redirect:"/myBook/math",children:[{path:"physics",name:"myBook_physics",component:function(t){return e.e(74).then(function(){return t(e(600))}.bind(null,e)).catch(e.oe)}},{path:"math",name:"myBook_math",component:function(t){return e.e(75).then(function(){return t(e(599))}.bind(null,e)).catch(e.oe)}},{path:"chemistry",name:"myBook_chemistry",component:function(t){return e.e(76).then(function(){return t(e(597))}.bind(null,e)).catch(e.oe)}}]},{path:"/myBook/:subject/add",name:"myBook_add",component:function(t){return e.e(17).then(function(){return t(e(596))}.bind(null,e)).catch(e.oe)}},{path:"/myBook/:subject/search",name:"myBook_search",component:function(t){return e.e(19).then(function(){return t(e(601))}.bind(null,e)).catch(e.oe)}}]},252:function(t,n,e){"use strict";n.a={path:"/myBook/want",component:function(t){return e.e(108).then(function(){return t(e(602))}.bind(null,e)).catch(e.oe)},redirect:"/myBook/want",children:[{path:"index",name:"myBook_want",component:function(t){return e.e(41).then(function(){return t(e(604))}.bind(null,e)).catch(e.oe)}},{path:"photo",name:"myBook_want_photo",component:function(t){return e.e(95).then(function(){return t(e(603))}.bind(null,e)).catch(e.oe)}}]}},253:function(t,n,e){"use strict";var o=e(61),i=e.n(o),a=e(251),u=e(252);n.a=[].concat(i()(a.a),[u.a])},254:function(t,n,e){"use strict";n.a={path:"/class",component:function(t){return e.e(98).then(function(){return t(e(608))}.bind(null,e)).catch(e.oe)},children:[{path:"/",name:"class",component:function(t){return e.e(47).then(function(){return t(e(607))}.bind(null,e)).catch(e.oe)}},{path:"add",name:"class_add",component:function(t){return e.e(28).then(function(){return t(e(605))}.bind(null,e)).catch(e.oe)}},{path:"message",name:"class_message",redirect:"/message/class"},{path:"detail/:code",name:"class_detal",component:function(t){return e.e(48).then(function(){return t(e(606))}.bind(null,e)).catch(e.oe)}}]}},255:function(t,n,e){"use strict";n.a={path:"/settings",component:function(t){return e.e(105).then(function(){return t(e(611))}.bind(null,e)).catch(e.oe)},children:[{path:"/",name:"settings",component:function(t){return e.e(61).then(function(){return t(e(609))}.bind(null,e)).catch(e.oe)}},{path:"info",name:"settings_info",component:function(t){return e.e(60).then(function(){return t(e(610))}.bind(null,e)).catch(e.oe)}},{path:"update",name:"settings_update",component:function(t){return e.e(8).then(function(){return t(e(614))}.bind(null,e)).catch(e.oe)}},{path:"photo",name:"settings_photo",component:function(t){return e.e(97).then(function(){return t(e(612))}.bind(null,e)).catch(e.oe)}},{path:"resetPwd",name:"settings_pwd",component:function(t){return e.e(21).then(function(){return t(e(613))}.bind(null,e)).catch(e.oe)}}]}},256:function(t,n,e){"use strict";n.a=[{path:"/statistics/assemble",component:function(t){return e.e(0).then(function(){return t(e(615))}.bind(null,e)).catch(e.oe)},children:[{path:"camera/:subject/:chapterId/:name",name:"statisticsCamera",component:function(t){return e.e(5).then(function(){return t(e(616))}.bind(null,e)).catch(e.oe)}},{path:"remember/:subject/:chapterId/:name",name:"statisticsRemember",component:function(t){return e.e(4).then(function(){return t(e(621))}.bind(null,e)).catch(e.oe)}},{path:"good/:subject/:chapterId/:name",name:"statisticsGood",component:function(t){return e.e(22).then(function(){return t(e(618))}.bind(null,e)).catch(e.oe)}}]},{path:"/statistics/assemble/remember/assemble/options",name:"statisticsRemember_options",component:function(t){return e.e(70).then(function(){return t(e(623))}.bind(null,e)).catch(e.oe)}},{path:"/statistics/assemble/good/assemble/options",name:"statisticsGood_options",component:function(t){return e.e(55).then(function(){return t(e(620))}.bind(null,e)).catch(e.oe)}},{path:"/statistics/remember/assemble/:subject",name:"statisticsRemember_assemble",component:function(t){return e.e(6).then(function(){return t(e(622))}.bind(null,e)).catch(e.oe)}},{path:"/statistics/good/assemble/:subject",name:"statisticsGood_assemble",component:function(t){return e.e(10).then(function(){return t(e(619))}.bind(null,e)).catch(e.oe)}},{path:"/statistics/camera/assemble/:subject",name:"statisticsCamera_assemble",component:function(t){return e.e(7).then(function(){return t(e(617))}.bind(null,e)).catch(e.oe)}}]},257:function(t,n,e){"use strict";n.a={path:"/statistics",component:function(t){return e.e(0).then(function(){return t(e(624))}.bind(null,e)).catch(e.oe)},name:"statistics",redirect:"/statistics/math",children:[{path:"physics",name:"statistics_physics",component:function(t){return e.e(58).then(function(){return t(e(626))}.bind(null,e)).catch(e.oe)}},{path:"math",name:"statistics_math",component:function(t){return e.e(59).then(function(){return t(e(625))}.bind(null,e)).catch(e.oe)}}]}},258:function(t,n,e){"use strict";var o=e(61),i=e.n(o),a=e(256),u=e(257);n.a=[u.a].concat(i()(a.a))},259:function(t,n,e){"use strict";n.a=[{path:"/workbook",component:function(t){return e.e(67).then(function(){return t(e(629))}.bind(null,e)).catch(e.oe)},name:"workbook",redirect:"/workbook/math",children:[{path:"physics",name:"workbook_physics",component:function(t){return e.e(71).then(function(){return t(e(631))}.bind(null,e)).catch(e.oe)}},{path:"math",name:"workbook_math",component:function(t){return e.e(72).then(function(){return t(e(630))}.bind(null,e)).catch(e.oe)}},{path:"chemistry",name:"workbook_chemistry",component:function(t){return e.e(73).then(function(){return t(e(628))}.bind(null,e)).catch(e.oe)}}]},{path:"/workbook/:subject/add",name:"workbook_add",component:function(t){return e.e(16).then(function(){return t(e(627))}.bind(null,e)).catch(e.oe)}},{path:"/workbook/:subject/search",name:"workbook_search",component:function(t){return e.e(18).then(function(){return t(e(632))}.bind(null,e)).catch(e.oe)}}]},260:function(t,n,e){"use strict";n.a=[{path:"/workbook/exercise",component:function(t){return e.e(82).then(function(){return t(e(636))}.bind(null,e)).catch(e.oe)},redirect:"/workbook/exercise/result",children:[{path:"answer/:name/:id",name:"workbook_exercise_answer",component:function(t){return e.e(39).then(function(){return t(e(633))}.bind(null,e)).catch(e.oe)}},{path:"result/:name/:id",name:"workbook_exercise_result",component:function(t){return e.e(57).then(function(){return t(e(638))}.bind(null,e)).catch(e.oe)}},{path:"error/:name/:id",name:"workbook_exercise_error",component:function(t){return e.e(56).then(function(){return t(e(635))}.bind(null,e)).catch(e.oe)}}]},{path:"/workbook/exercise/photo",name:"workbook_exercise_error_photo",component:function(t){return e.e(94).then(function(){return t(e(637))}.bind(null,e)).catch(e.oe)}},{path:"/workbook/exercise/upload/:chapterId/:wbeid/:eid",name:"workbook_exercise_error_upload",component:function(t){return e.e(31).then(function(){return t(e(639))}.bind(null,e)).catch(e.oe)}},{path:"/workbook/chapter/:name/:id",name:"workbook_chapter",component:function(t){return e.e(46).then(function(){return t(e(634))}.bind(null,e)).catch(e.oe)}}]},261:function(t,n,e){"use strict";n.a={path:"/workbook/uploader",component:function(t){return e.e(107).then(function(){return t(e(640))}.bind(null,e)).catch(e.oe)},redirect:"/workbook/uploader/:name/:id",children:[{path:"index/:id",name:"workbook_uploader",component:function(t){return e.e(66).then(function(){return t(e(642))}.bind(null,e)).catch(e.oe)}},{path:"photo/:id",name:"workbook_uploader_photo",component:function(t){return e.e(93).then(function(){return t(e(641))}.bind(null,e)).catch(e.oe)}}]}},262:function(t,n,e){"use strict";n.a={path:"/workbook/want",component:function(t){return e.e(106).then(function(){return t(e(643))}.bind(null,e)).catch(e.oe)},redirect:"/workbook/want",children:[{path:"index",name:"workbook_want",component:function(t){return e.e(40).then(function(){return t(e(645))}.bind(null,e)).catch(e.oe)}},{path:"photo",name:"workbook_want_photo",component:function(t){return e.e(92).then(function(){return t(e(644))}.bind(null,e)).catch(e.oe)}}]}},263:function(t,n,e){"use strict";var o=e(61),i=e.n(o),a=e(260),u=e(261),c=e(259),r=e(262);n.a=[].concat(i()(c.a),i()(a.a),[u.a,r.a])},264:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(53),i=e(206),a=(e.n(i),e(92)),u=e(207),c=e.n(u),r=e(200),s=e(208),l=e.n(s),h=e(204),d=e(203),m=e(202),f=e(205),p=e.n(f),b=e(201),w=e(209);o.default.use(h.a),o.default.use(b.a),o.default.use(l.a,{attempt:3}),o.default.use(d.a),o.default.use(m.a),c.a.attach(document.body),o.default.config.productionTip=!1,o.default.filter("ymd",function(t){return p()(new Date(Number(t+"000")),"YYYY-MM-DD")}),o.default.filter("ymdhms",function(t){return p()(new Date(Number(t+"000")),"YYYY-MM-DD HH:mm:ss")}),o.default.filter("subject",function(t){switch(t){case 2:return"数学";case 7:return"物理";case 8:return"化学"}}),document.addEventListener("plusready",function(){var t=null;plus.navigator.setStatusBarBackground("#4cc0be"),setTimeout(function(){var t=plus.audio.createPlayer("233.mp3");t.setRoute(plus.audio.ROUTE_SPEAKER),t.play(function(){},function(t){})},500),plus.key.addEventListener("backbutton",function(){"/index"===a.a.state.route.path||"/bag"===a.a.state.route.path||"/login"===a.a.state.route.path||"/user"===a.a.state.route.path?t?(new Date).getTime()-t<1e3&&plus.runtime.quit():(t=(new Date).getTime(),o.default.$vux.toast.show({text:"再按一次退出",type:"text",time:1500,position:"bottom"}),setTimeout(function(){t=null},1e3)):history.back()},!1)});var _=new o.default({router:r.a,store:a.a,render:function(t){return t(w.a)}}).$mount("#app-box");n.default=_},265:function(t,n,e){"use strict";n.a=[{path:"/",component:function(t){return e.e(52).then(function(){return t(e(649))}.bind(null,e)).catch(e.oe)},redirect:function(t){return localStorage.getItem("token")?"index":"login"},children:[{path:"index",name:"index",component:function(t){return e.e(36).then(function(){return t(e(648))}.bind(null,e)).catch(e.oe)}},{path:"bag",name:"bag",component:function(t){return e.e(29).then(function(){return t(e(647))}.bind(null,e)).catch(e.oe)}},{path:"user",name:"user",component:function(t){return e.e(53).then(function(){return t(e(650))}.bind(null,e)).catch(e.oe)}}]},{path:"/article/:id",component:function(t){return e.e(87).then(function(){return t(e(646))}.bind(null,e)).catch(e.oe)}}]},266:function(t,n,e){"use strict";var o=e(199);n.a={name:"alert",components:{XDialog:o.a},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,hideOnBlur:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},maskZIndex:[Number,String]},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}},267:function(t,n,e){"use strict";var o=e(199);n.a={name:"confirm",components:{XDialog:o.a},props:{value:{type:Boolean,default:!1},showInput:{type:Boolean,default:!1},placeholder:{type:String,default:""},theme:{type:String,default:"ios"},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},maskZIndex:[Number,String],dialogTransition:{type:String,default:"vux-dialog"},content:String,closeOnConfirm:{type:Boolean,default:!0},inputAttrs:Object},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(t){this.showValue=t},showValue:function(t){var n=this;this.$emit("input",t),t&&(this.showInput&&(this.msg="",setTimeout(function(){n.$refs.input&&n.$refs.input.focus()},300)),this.$emit("on-show"))}},data:function(){return{msg:"",showValue:!1}},methods:{setInputValue:function(t){this.msg=t},_onConfirm:function(){this.showValue&&(this.closeOnConfirm&&(this.showValue=!1),this.$emit("on-confirm",this.msg))},_onCancel:function(){this.showValue&&(this.showValue=!1,this.$emit("on-cancel"))}}}},268:function(t,n,e){"use strict";n.a={name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}}},269:function(t,n,e){"use strict";var o=e(273);n.a={name:"toast",mixins:[o.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var n=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){n.show=!1,n.$emit("input",!1),n.$emit("on-hide"),n.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}},270:function(t,n,e){"use strict";var o=e(272);n.a={mixins:[o.a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1))}}}},271:function(t,n,e){"use strict";n.a={name:"app"}},514:function(t,n){},515:function(t,n){},516:function(t,n){},517:function(t,n){},518:function(t,n){},519:function(t,n){},520:function(t,n){},528:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vux-alert"},[e("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(n){t.$emit("on-hide")},"on-show":function(n){t.$emit("on-show")}},model:{value:t.showValue,callback:function(n){t.showValue=n},expression:"showValue"}},[e("div",{staticClass:"weui-dialog__hd"},[e("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),e("div",{staticClass:"weui-dialog__bd"},[t._t("default",[e("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),e("div",{staticClass:"weui-dialog__ft"},[e("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},i=[],a={render:o,staticRenderFns:i};n.a=a},529:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},i=[],a={render:o,staticRenderFns:i};n.a=a},530:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:t.transition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading"},[e("div",{staticClass:"weui-mask_transparent"}),t._v(" "),e("div",{staticClass:"weui-toast",style:{position:t.position}},[e("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),e("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2)])])])},i=[],a={render:o,staticRenderFns:i};n.a=a},531:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("x-dialog",{attrs:{dialogClass:"android"===t.theme?"weui-dialog weui-skin_android":"weui-dialog","mask-transition":t.maskTransition,"dialog-transition":"android"===t.theme?"vux-fade":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(n){t.$emit("on-hide")}},model:{value:t.showValue,callback:function(n){t.showValue=n},expression:"showValue"}},[t.title?e("div",{staticClass:"weui-dialog__hd"},[e("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.showInput?e("div",{staticClass:"vux-prompt"},[e("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder},domProps:{value:t.msg},on:{input:function(n){n.target.composing||(t.msg=n.target.value)}}},"input",t.inputAttrs,!1))]):e("div",{staticClass:"weui-dialog__bd"},[t._t("default",[e("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),e("div",{staticClass:"weui-dialog__ft"},[e("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:t._onCancel}},[t._v(t._s(t.cancelText||"取消"))]),t._v(" "),e("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onConfirm}},[t._v(t._s(t.confirmText||"确定"))])])])],1)},i=[],a={render:o,staticRenderFns:i};n.a=a},532:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vux-toast"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),e("transition",{attrs:{name:t.currentTransition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[e("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?e("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):e("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},i=[],a={render:o,staticRenderFns:i};n.a=a},533:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vux-x-dialog"},[e("transition",{attrs:{name:t.maskTransition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),e("transition",{attrs:{name:t.dialogTransition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},i=[],a={render:o,staticRenderFns:i};n.a=a},537:function(t,n,e){"use strict";function o(t){e(515)}var i=e(266),a=e(528),u=e(52),c=o,r=u(i.a,a.a,!1,c,null,null);n.a=r.exports},538:function(t,n,e){"use strict";function o(t){e(517)}var i=e(268),a=e(530),u=e(52),c=o,r=u(i.a,a.a,!1,c,null,null);n.a=r.exports},92:function(t,n,e){"use strict";var o=e(53),i=e(211),a=e(243);o.default.use(i.c),n.a=new i.c.Store({modules:{common:a.a}})}},[264]);