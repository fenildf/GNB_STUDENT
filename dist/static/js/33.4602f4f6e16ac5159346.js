webpackJsonp([33],{211:function(t,e,i){var r=i(12)(i(581),i(469),null,null,null);t.exports=r.exports},273:function(t,e,i){"use strict";function r(t,e){if(!/^javas/.test(t)&&t){"object"===(void 0===t?"undefined":a()(t))||e&&"string"==typeof t&&!/http/.test(t)?e.push(t):window.location.href=t}}var n=i(24),a=i.n(n);e.a=r},274:function(t,e,i){function r(t){i(278)}var n=i(12)(i(276),i(275),r,null,null);t.exports=n.exports},275:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-header"},[i("div",{staticClass:"vux-header-left"},[i("transition",{attrs:{name:t.transition}},[i("a",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault"))return null},t.onClickBack]}},[t._v(t._s(void 0===t._leftOptions.backText?"返回":t._leftOptions.backText))])]),t._v(" "),i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:t.onClickBack}})]),t._v(" "),t._t("left")],2),t._v(" "),i("h1",{staticClass:"vux-header-title",on:{click:function(e){t.$emit("on-click-title")}}},[t._t("default",[i("transition",{attrs:{name:t.transition}},[i("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])])],2),t._v(" "),i("div",{staticClass:"vux-header-right"},[t.rightOptions.showMore?i("a",{staticClass:"vux-header-more",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault"))return null},function(e){t.$emit("on-click-more")}]}}):t._e(),t._v(" "),t._t("right")],2)])},staticRenderFns:[]}},276:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(80),n=i.n(r);e.default={props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},computed:{_leftOptions:function(){return n()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}}}},277:function(t,e,i){e=t.exports=i(194)(),e.push([t.i,'.vux-header{position:relative;padding:3px 0;box-sizing:border-box;background-color:#4bb7aa}.vux-header .vux-header-title,.vux-header h1{margin:0 88px;line-height:40px;text-align:center;height:40px;font-size:18px;font-weight:400;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#fff}.vux-header .vux-header-title>span{display:inline-block}.vux-header .vux-header-left,.vux-header .vux-header-right{position:absolute;top:14px;display:block;font-size:14px;line-height:21px;color:#fff}.vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button{float:left;margin-right:8px;color:#fff}.vux-header .vux-header-left a:active,.vux-header .vux-header-left button:active,.vux-header .vux-header-right a:active,.vux-header .vux-header-right button:active{opacity:.5}.vux-header .vux-header-left{left:18px}.vux-header .vux-header-left .vux-header-back{padding-left:16px}.vux-header .vux-header-left .left-arrow{position:absolute;width:30px;height:30px;top:-5px;left:-5px}.vux-header .vux-header-left .left-arrow:before{content:"";position:absolute;width:12px;height:12px;border:1px solid #fff;border-width:1px 0 0 1px;-webkit-transform:rotate(315deg);transform:rotate(315deg);top:8px;left:7px}.vux-header .vux-header-right{right:15px}.vux-header .vux-header-right a,.vux-header .vux-header-right button{margin-left:8px;margin-right:0}.vux-header .vux-header-right .vux-header-more:after{content:"\\2022   \\2022   \\2022   ";font-size:16px}.vux-header-fade-in-right-enter-active{-webkit-animation:fadeinR .5s;animation:fadeinR .5s}.vux-header-fade-in-left-enter-active{-webkit-animation:fadeinL .5s;animation:fadeinL .5s}@-webkit-keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}',""])},278:function(t,e,i){var r=i(277);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i(195)("0b0d8f1c",r,!0)},280:function(t,e,i){function r(t){i(284)}var n=i(12)(i(282),i(281),r,null,null);t.exports=n.exports},281:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-tab"},[t._t("header"),t._v(" "),i("div",{ref:"viewBoxBody",staticClass:"weui-tab__panel vux-fix-safari-overflow-scrolling",style:{paddingTop:t.bodyPaddingTop,paddingBottom:t.bodyPaddingBottom},attrs:{id:"vux_view_box_body"}},[t._t("default")],2),t._v(" "),t._t("bottom")],2)},staticRenderFns:[]}},282:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["bodyPaddingTop","bodyPaddingBottom"],methods:{scrollTo:function(t){this.$refs.viewBoxBody.scrollTop=t},getScrollTop:function(){return this.$refs.viewBoxBody.scrollTop},getScrollBody:function(){return this.$refs.viewBoxBody}}}},283:function(t,e,i){e=t.exports=i(194)(),e.push([t.i,'.weui-tabbar{display:-webkit-box;display:-webkit-flex;display:flex;position:absolute;z-index:500;bottom:0;width:100%;background-color:#f7f7fa}.weui-tabbar:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #c0bfc4;color:#c0bfc4;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-tabbar__item{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:5px 0 0;font-size:0;color:#999;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon>i,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{color:#4bb7aa}.weui-tabbar__icon{display:inline-block;width:27px;height:27px}.weui-tabbar__icon>i,i.weui-tabbar__icon{font-size:24px;color:#999}.weui-tabbar__icon img{width:100%;height:100%}.weui-tabbar__label{text-align:center;color:#999;font-size:10px;line-height:1.8}.weui-tab{position:relative;height:100%}.weui-tab__panel{box-sizing:border-box;height:100%;padding-bottom:50px;overflow:auto;-webkit-overflow-scrolling:touch}.weui-tab__content{display:none}',""])},284:function(t,e,i){var r=i(283);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i(195)("d93698b8",r,!0)},327:function(t,e,i){"use strict";var r=i(273);i.d(e,"b",function(){return n}),i.d(e,"a",function(){return a});var n={mounted:function(){this.value>=0&&(this.currentIndex=this.value),this.updateIndex()},methods:{updateIndex:function(){if(this.$children&&this.$children.length){this.number=this.$children.length;for(var t=this.$children,e=0;e<t.length;e++)t[e].currentIndex=e,t[e].currentSelected&&(this.index=e)}}},props:{value:Number},watch:{currentIndex:function(t,e){e>-1&&this.$children[e]&&(this.$children[e].currentSelected=!1),t>-1&&this.$children[t]&&(this.$children[t].currentSelected=!0),this.$emit("input",t)},index:function(t){this.currentIndex=t},value:function(t){this.index=t}},data:function(){return{index:-1,currentIndex:this.index,number:this.$children.length}}},a={props:{selected:{type:Boolean,default:!1}},mounted:function(){this.$parent.updateIndex()},beforeDestroy:function(){var t=this.$parent;this.$nextTick(function(){t.updateIndex()})},methods:{onItemClick:function(t){var e=this;void 0!==this.disabled&&!1!==this.disabled||(this.currentSelected=!0,this.$parent.currentIndex=this.currentIndex,this.$nextTick(function(){e.$emit("on-item-click",e.currentIndex)})),!0===t&&i.i(r.a)(this.link,this.$router)}},watch:{currentSelected:function(t){t&&(this.$parent.index=this.currentIndex)},selected:function(t){this.currentSelected=t}},data:function(){return{currentIndex:-1,currentSelected:this.selected}}}},351:function(t,e,i){var r=i(12)(i(355),i(354),null,null,null);t.exports=r.exports},352:function(t,e,i){function r(t){i(358)}var n=i(12)(i(356),i(353),r,null,null);t.exports=n.exports},353:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-tab",class:{"vux-tab-no-animate":!t.animate}},[t._t("default"),t._v(" "),t.animate?i("div",{staticClass:"vux-tab-ink-bar",class:t.barClass,style:t.barStyle},[t.customBarWidth?i("span",{staticClass:"vux-tab-bar-inner",style:t.innerBarStyle}):t._e()]):t._e()],2)},staticRenderFns:[]}},354:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-tab-item",class:[t.currentSelected?t.activeClass:"",{"vux-tab-selected":t.currentSelected,"vux-tab-disabled":t.disabled}],style:t.style,on:{click:t.onItemClick}},[t._t("default")],2)},staticRenderFns:[]}},355:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(327);e.default={mixins:[r.a],props:{activeClass:String,disabled:Boolean},computed:{style:function(){return{borderWidth:this.$parent.lineWidth+"px",borderColor:this.$parent.activeColor,color:this.currentSelected?this.$parent.activeColor:this.disabled?this.$parent.disabledColor:this.$parent.defaultColor,border:this.$parent.animate?"none":"auto"}}}}},356:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(327);e.default={mixins:[r.b],mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.hasReady=!0},0)})},props:{lineWidth:{type:Number,default:3},activeColor:String,barActiveColor:String,defaultColor:String,disabledColor:String,animate:{type:Boolean,default:!0},customBarWidth:[Function,String]},computed:{barLeft:function(){return this.currentIndex*(100/this.number)+"%"},barRight:function(){return(this.number-this.currentIndex-1)*(100/this.number)+"%"},innerBarStyle:function(){return{width:"function"==typeof this.customBarWidth?this.customBarWidth(this.currentIndex):this.customBarWidth,backgroundColor:this.barActiveColor||this.activeColor}},barStyle:function(){var t={left:this.barLeft,right:this.barRight,display:"block",height:this.lineWidth+"px",transition:this.hasReady?null:"none"};return this.customBarWidth?t.backgroundColor="transparent":t.backgroundColor=this.barActiveColor||this.activeColor,t},barClass:function(){return{"vux-tab-ink-bar-transition-forward":"forward"===this.direction,"vux-tab-ink-bar-transition-backward":"backward"===this.direction}}},watch:{currentIndex:function(t,e){this.direction=t>e?"forward":"backward",this.$emit("on-index-change",t,e)}},data:function(){return{direction:"forward",right:"100%",hasReady:!1}}}},357:function(t,e,i){e=t.exports=i(194)(),e.push([t.i,".vux-tab-ink-bar{position:absolute;height:2px;bottom:0;left:0;background-color:#4bb7aa;text-align:center}.vux-tab-ink-bar-transition-forward{-webkit-transition:right .3s cubic-bezier(.35,0,.25,1),left .3s cubic-bezier(.35,0,.25,1) .09s;transition:right .3s cubic-bezier(.35,0,.25,1),left .3s cubic-bezier(.35,0,.25,1) .09s}.vux-tab-ink-bar-transition-backward{-webkit-transition:right .3s cubic-bezier(.35,0,.25,1) .09s,left .3s cubic-bezier(.35,0,.25,1);transition:right .3s cubic-bezier(.35,0,.25,1) .09s,left .3s cubic-bezier(.35,0,.25,1)}.vux-tab{display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff;height:44px;position:relative}.vux-tab button{padding:0;border:0;outline:0;background:0 0;-webkit-appearance:none;appearance:none}.vux-tab .vux-tab-item{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%;height:100%;box-sizing:border-box;background:-webkit-linear-gradient(top,#e5e5e5,#e5e5e5,hsla(0,0%,90%,0)) 0 100% no-repeat;background:linear-gradient(180deg,#e5e5e5,#e5e5e5,hsla(0,0%,90%,0)) 0 100% no-repeat;background-size:100% 1px;font-size:14px;text-align:center;line-height:44px;color:#666}.vux-tab .vux-tab-item.vux-tab-selected{color:#4bb7aa;border-bottom:3px solid #4bb7aa}.vux-tab .vux-tab-item.vux-tab-disabled{color:#ddd}.vux-tab.vux-tab-no-animate .vux-tab-item.vux-tab-selected{background:0 0}.vux-tab-bar-inner{display:block;background-color:#4bb7aa;margin:auto;height:100%;-webkit-transition:width .3s cubic-bezier(.35,0,.25,1);transition:width .3s cubic-bezier(.35,0,.25,1)}",""])},358:function(t,e,i){var r=i(357);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i(195)("54355590",r,!0)},447:function(t,e,i){"use strict";i.d(e,"c",function(){return r}),i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a}),i.d(e,"d",function(){return o}),i.d(e,"e",function(){return s}),i.d(e,"f",function(){return c}),i.d(e,"g",function(){return u}),i.d(e,"h",function(){return d});var r="INDUCE_SCROLL",n="INDUCE",a="INDUCE_CLEAR",o="INDUCE_LIST",s="INDUCE_LIST_CLEAR",c="INDUCE_LIST_SCROLL",u="INDUCE_ACTION",d="INDUCE_BACK"},469:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view-box",{ref:"induce",attrs:{"body-padding-top":"100px"}},[i("div",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},slot:"header"},[i("x-header",{attrs:{"left-options":{backText:"题型归纳"}}}),t._v(" "),i("tab",[i("tab-item",{attrs:{selected:"induce_math"===t.Route.name},nativeOn:{click:function(e){t.$router.replace("math")}}},[t._v("数学")]),t._v(" "),t.User.subjectType.length>1?[i("tab-item",{attrs:{selected:"induce_physics"===t.Route.name},nativeOn:{click:function(e){t.$router.replace("physics")}}},[t._v("物理")])]:t._e()],2)],1),t._v(" "),i("div",[i("keep-alive",[i("router-view")],1)],1)])},staticRenderFns:[]}},539:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(43),n=i.n(r),a=i(81),o=i(447);i.d(e,"getInduce",function(){return s}),i.d(e,"setInduceScroll",function(){return c}),i.d(e,"clearInduce",function(){return u}),i.d(e,"getInduceList",function(){return d}),i.d(e,"induceTotalAction",function(){return l}),i.d(e,"induceBack",function(){return h}),i.d(e,"induceListClear",function(){return f}),i.d(e,"setInduceListScroll",function(){return p});var s=function(t,e){var r=t.rootState,s=t.commit,c=-1!==r.route.name.indexOf("math")?"math":"physics";return new n.a(function(t,n){i.i(a.a)({method:"get",url:"induce",params:{textbook_id:e.textbook_id,token:r.common.user.token}}).then(function(e){s(o.a,{subject:c,data:e.data.data}),t(e)})})},c=function(t,e){var i=t.rootState,r=t.commit,n=-1!==i.route.name.indexOf("math")?"math":"physics";r(o.c,{subject:n,height:e})},u=function(t){var e=t.rootState,i=t.commit,r=-1!==e.route.name.indexOf("math")?"math":"physics";i(o.b,{subject:r})},d=function(t,e){var r=t.state,s=t.rootState,c=t.commit,u=-1!==s.route.params.subject.indexOf("math")?2:7;return new n.a(function(t,n){i.i(a.a)({method:"get",url:"induce/list",params:{token:s.common.user.token,chapter_id:s.route.params.chapterId,subject_id:u,type:e.type,currentChapterId:r.exercise[e.type].currentChapterId,currentExercisesId:r.exercise[e.type].currentExercisesId}}).then(function(i){c(o.d,{data:i.data.data,type:e.type}),t(i)})})},l=function(t,e){var r=(t.state,t.rootState),s=t.commit,c=-1!==r.route.params.subject.indexOf("math")?2:7;return new n.a(function(t,n){i.i(a.a)({method:"post",url:"induce/update",data:{exerciseId:e.id,chapter_id:e.chapter_id,type:e.type,subject_id:c,token:r.common.user.token}}).then(function(i){s(o.g,e.index),t(i)})})},h=function(t,e){var r=(t.state,t.rootState),s=t.commit,c=-1!==r.route.params.subject.indexOf("math")?2:7;return new n.a(function(t,n){i.i(a.a)({method:"post",url:"induce/back",data:{exerciseId:e.id,chapter_id:e.chapter_id,type:e.type,subject_id:c,token:r.common.user.token}}).then(function(i){s(o.h,{type:e.type,index:e.index}),t(i)})})},f=function(t,e){t.rootState;(0,t.commit)(o.e,{type:e.type})},p=function(t,e){t.rootState;(0,t.commit)(o.f,{type:e.type,height:e.height})}},540:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i.d(e,"induceMath",function(){return r}),i.d(e,"inducePhysics",function(){return n}),i.d(e,"induceTotal",function(){return a}),i.d(e,"inducePractice",function(){return o}),i.d(e,"induceBreak",function(){return s}),i.d(e,"inducePass",function(){return c});var r=function(t){return t.index.math},n=function(t){return t.index.physics},a=function(t){return t.exercise.total},o=function(t){return t.exercise.practice},s=function(t){return t.exercise.break},c=function(t){return t.exercise.pass}},541:function(t,e,i){"use strict";var r={index:{math:{list:[],scroll:0},physics:{list:[],scroll:0}},exercise:{total:{list:[],isReset:!0,scroll:0,recordSize:0,totalCount:0,chapterName:"",currentChapterId:"",currentExercisesId:""},practice:{list:[],isReset:!0,scroll:0,recordSize:0,totalCount:0,chapterName:"",currentChapterId:"",currentExercisesId:""},break:{list:[],isReset:!0,scroll:0,recordSize:0,totalCount:0,chapterName:"",currentChapterId:"",currentExercisesId:""},pass:{list:[],isReset:!0,scroll:0,recordSize:0,totalCount:0,chapterName:"",currentChapterId:"",currentExercisesId:""}}};e.a=r},542:function(t,e,i){"use strict";var r,n=i(82),a=i.n(n),o=i(447),s=i(540),c=i(539),u=i(541),d=(r={},a()(r,o.a,function(t,e){t.index[e.subject].list=e.data}),a()(r,o.b,function(t,e){t.index[e.subject].list=[],t.index[e.subject].scroll=0}),a()(r,o.c,function(t,e){t.index[e.subject].scroll=e.height}),a()(r,o.d,function(t,e){t.exercise[e.type].list?t.exercise[e.type].list=t.exercise[e.type].list.concat(e.data.list):t.exercise[e.type].list=e.data.list,t.exercise[e.type].currentChapterId=e.data.currentChapterId,t.exercise[e.type].currentExercisesId=e.data.currentExercisesId,t.exercise[e.type].totalCount=e.data.totalCount,t.exercise[e.type].recordSize=e.data.recordSize,t.exercise[e.type].isReset=!1}),a()(r,o.e,function(t,e){t.exercise[e.type].isReset=!0,t.exercise[e.type].list=[],t.exercise[e.type].scroll=0,t.exercise[e.type].totalCount=0,t.exercise[e.type].recordSize=0,t.exercise[e.type].currentChapterId="",t.exercise[e.type].currentExercisesId=""}),a()(r,o.f,function(t,e){t.exercise[e.type].scroll=e.height}),a()(r,o.g,function(t,e){t.exercise.total.recordSize=--t.exercise.total.recordSize,t.exercise.total.list.splice(e,1)}),a()(r,o.h,function(t,e){t.exercise[e.type].recordSize=--t.exercise[e.type].recordSize,t.exercise[e.type].list.splice(e.index,1)}),r);e.a={state:u.a,mutations:d,getters:s,actions:c}},581:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(78),n=i.n(r),a=i(274),o=i.n(a),s=i(280),c=i.n(s),u=i(352),d=i.n(u),l=i(351),h=i.n(l),f=i(79),p=i(542);i(25).a.registerModule("induce",n()({},p.a)),e.default={name:"induce",components:{XHeader:o.a,ViewBox:c.a,Tab:d.a,TabItem:h.a},computed:n()({},i.i(f.a)(["Route","User"])),methods:{}}}});