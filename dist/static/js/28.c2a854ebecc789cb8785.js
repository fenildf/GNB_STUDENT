webpackJsonp([28],{258:function(t,e,i){i(656);var o=i(12)(i(622),i(510),"data-v-858df3cc",null);t.exports=o.exports},279:function(t,e,i){i(284);var o=i(12)(i(281),i(280),null,null);t.exports=o.exports},280:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-tab"},[t._t("header"),t._v(" "),i("div",{ref:"viewBoxBody",staticClass:"weui-tab__panel vux-fix-safari-overflow-scrolling",style:{paddingTop:t.bodyPaddingTop,paddingBottom:t.bodyPaddingBottom},attrs:{id:"vux_view_box_body"}},[t._t("default")],2),t._v(" "),t._t("bottom")],2)},staticRenderFns:[]}},281:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["bodyPaddingTop","bodyPaddingBottom"],methods:{scrollTo:function(t){this.$refs.viewBoxBody.scrollTop=t},getScrollTop:function(){return this.$refs.viewBoxBody.scrollTop},getScrollBody:function(){return this.$refs.viewBoxBody}}}},282:function(t,e,i){"use strict";function o(t,e){if(!/^javas/.test(t)&&t){"object"===(void 0===t?"undefined":a()(t))||e&&"string"==typeof t&&!/http/.test(t)?e.push(t):window.location.href=t}}var n=i(24),a=i.n(n);e.a=o},283:function(t,e,i){e=t.exports=i(197)(),e.push([t.i,'.weui-tabbar{display:-webkit-box;display:-webkit-flex;display:flex;position:absolute;z-index:500;bottom:0;width:100%;background-color:#f7f7fa}.weui-tabbar:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #c0bfc4;color:#c0bfc4;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-tabbar__item{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:5px 0 0;font-size:0;color:#999;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon>i,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{color:#4bb7aa}.weui-tabbar__icon{display:inline-block;width:27px;height:27px}.weui-tabbar__icon>i,i.weui-tabbar__icon{font-size:24px;color:#999}.weui-tabbar__icon img{width:100%;height:100%}.weui-tabbar__label{text-align:center;color:#999;font-size:10px;line-height:1.8}.weui-tab{position:relative;height:100%}.weui-tab__panel{box-sizing:border-box;height:100%;padding-bottom:50px;overflow:auto;-webkit-overflow-scrolling:touch}.weui-tab__content{display:none}',""])},284:function(t,e,i){var o=i(283);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(198)("0409e6bc",o,!0)},330:function(t,e,i){"use strict";var o=i(282);i.d(e,"b",function(){return n}),i.d(e,"a",function(){return a});var n={mounted:function(){this.value>=0&&(this.currentIndex=this.value),this.updateIndex()},methods:{updateIndex:function(){if(this.$children&&this.$children.length){this.number=this.$children.length;for(var t=this.$children,e=0;e<t.length;e++)t[e].currentIndex=e,t[e].currentSelected&&(this.index=e)}}},props:{value:Number},watch:{currentIndex:function(t,e){e>-1&&this.$children[e]&&(this.$children[e].currentSelected=!1),t>-1&&this.$children[t]&&(this.$children[t].currentSelected=!0),this.$emit("input",t)},index:function(t){this.currentIndex=t},value:function(t){this.index=t}},data:function(){return{index:-1,currentIndex:this.index,number:this.$children.length}}},a={props:{selected:{type:Boolean,default:!1}},mounted:function(){this.$parent.updateIndex()},beforeDestroy:function(){var t=this.$parent;this.$nextTick(function(){t.updateIndex()})},methods:{onItemClick:function(t){var e=this;void 0!==this.disabled&&!1!==this.disabled||(this.currentSelected=!0,this.$parent.currentIndex=this.currentIndex,this.$nextTick(function(){e.$emit("on-item-click",e.currentIndex)})),!0===t&&i.i(o.a)(this.link,this.$router)}},watch:{currentSelected:function(t){t&&(this.$parent.index=this.currentIndex)},selected:function(t){this.currentSelected=t}},data:function(){return{currentIndex:-1,currentSelected:this.selected}}}},392:function(t,e,i){i(404);var o=i(12)(i(396),i(394),null,null);t.exports=o.exports},394:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{class:["vux-badge",{"vux-badge-single":void 0!==t.text&&1===t.text.toString().length}],domProps:{textContent:t._s(t.text)}})},staticRenderFns:[]}},396:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{text:[String,Number]}}},400:function(t,e,i){e=t.exports=i(197)(),e.push([t.i,".vux-badge{display:inline-block;text-align:center;background:#f74c31;color:#fff;font-size:12px;height:16px;line-height:16px;border-radius:8px;padding:0 6px;background-clip:padding-box;vertical-align:middle}.vux-badge-single{padding:0;width:16px}",""])},404:function(t,e,i){var o=i(400);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(198)("bcef2170",o,!0)},458:function(t,e,i){var o=i(12)(i(561),i(474),null,null);t.exports=o.exports},459:function(t,e,i){i(648);var o=i(12)(i(562),i(460),null,null);t.exports=o.exports},460:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"weui-tabbar"},[t._t("default")],2)},staticRenderFns:[]}},474:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"weui-tabbar__item",class:{"weui-bar__item_on":t.isActive,"vux-tabbar-simple":t.simple},attrs:{href:"javascript:;"},on:{click:function(e){t.onItemClick(!0)}}},[t.simple?t._e():i("div",{staticClass:"weui-tabbar__icon",class:[t.iconClass||t.$parent.iconClass,{"vux-reddot":t.showDot}]},[t.simple||t.hasActiveIcon&&t.isActive?t._e():t._t("icon"),t._v(" "),!t.simple&&t.hasActiveIcon&&t.isActive?t._t("icon-active"):t._e(),t._v(" "),t.badge?i("sup",[i("badge",{attrs:{text:t.badge}})],1):t._e()],2),t._v(" "),i("p",{staticClass:"weui-tabbar__label"},[t._t("label")],2)])},staticRenderFns:[]}},510:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%"}},[i("view-box",{ref:"viewBox",attrs:{"body-padding-top":"46px","body-padding-bottom":"50px"}},[i("keep-alive",[i("router-view")],1),t._v(" "),i("tabbar",{staticClass:"homepage",slot:"bottom",model:{value:t.select,callback:function(e){t.select=e},expression:"select"}},[i("tabbar-item",{attrs:{link:"/"}},[i("i",{staticClass:"icon iconfont icon-home",slot:"icon"}),t._v(" "),i("span",{slot:"label"},[t._v("主页")])]),t._v(" "),i("tabbar-item",{attrs:{link:"bag","show-dot":t.News.classes}},[i("i",{staticClass:"icon iconfont icon-bag",slot:"icon"}),t._v(" "),i("span",{slot:"label"},[t._v("书包")])]),t._v(" "),i("tabbar-item",{attrs:{link:"user","show-dot":t.News.correct||t.News.system}},[i("i",{staticClass:"icon iconfont icon-user",slot:"icon"}),t._v(" "),i("span",{slot:"label"},[t._v("我的")])])],1)],1)],1)},staticRenderFns:[]}},561:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(330),n=i(392),a=i.n(n);e.default={components:{Badge:a.a},beforeMount:function(){this.$slots.icon||(this.simple=!0),this.$slots["icon-active"]&&(this.hasActiveIcon=!0)},mixins:[o.a],props:{showDot:{type:Boolean,default:!1},badge:String,link:[String,Object],iconClass:String},computed:{isActive:function(){return this.$parent.index===this.currentIndex}},data:function(){return{simple:!1,hasActiveIcon:!1}}}},562:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(330);e.default={mixins:[o.b],props:{iconClass:String}}},622:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(81),n=i.n(o),a=i(459),r=i.n(a),s=i(458),c=i.n(s),l=i(279),u=i.n(l),d=i(82),b=i(647);i.n(b);e.default={name:"router",components:{Tabbar:r.a,TabbarItem:c.a,ViewBox:u.a},methods:n()({},i.i(d.b)(["getUserInfo"])),computed:n()({},i.i(d.a)(["Path","News"]),{select:function(){switch(this.Path){case"/":return 0;case"/bag":return 1;case"/user":return 2}}}),created:function(){this.getUserInfo().then(function(){})},mounted:function(){window.plus&&(plus.navigator.setStatusBarBackground(75,183,170),setTimeout(function(){plus.navigator.closeSplashscreen()},2e3))}}},630:function(t,e,i){e=t.exports=i(197)(),e.push([t.i,'.weui-tabbar{display:-webkit-box;display:-webkit-flex;display:flex;position:absolute;z-index:500;bottom:0;width:100%;background-color:#f7f7fa}.weui-tabbar:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #c0bfc4;color:#c0bfc4;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-tabbar__item{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:5px 0 0;font-size:0;color:#999;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon>i,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{color:#4bb7aa}.weui-tabbar__icon{display:inline-block;width:27px;height:27px}.weui-tabbar__icon>i,i.weui-tabbar__icon{font-size:24px;color:#999}.weui-tabbar__icon img{width:100%;height:100%}.weui-tabbar__label{text-align:center;color:#999;font-size:10px;line-height:1.8}.weui-tab{position:relative;height:100%}.weui-tab__panel{box-sizing:border-box;height:100%;padding-bottom:50px;overflow:auto;-webkit-overflow-scrolling:touch}.weui-tab__content{display:none}.vux-reddot,.vux-reddot-border,.vux-reddot-s{position:relative}.vux-reddot-border:after,.vux-reddot-s:after,.vux-reddot:after{background-color:#f74c31;right:-3px;top:-3px}.vux-reddot-border:after,.vux-reddot-border:before,.vux-reddot-s:after,.vux-reddot:after{content:"";position:absolute;display:block;width:8px;height:8px;border-radius:5px;background-clip:padding-box}.vux-reddot-border:before{background-color:#fff;right:-4px;top:-4px;padding:1px}.vux-reddot-s:after{width:6px;height:6px;top:-5px;right:-5px}.weui-tabbar__icon{position:relative}.weui-tabbar__icon>sup{position:absolute;top:-8px;left:100%;-webkit-transform:translateX(-50%);transform:translateX(-50%);z-index:101}.weui-tabbar__item.vux-tabbar-simple{padding:0;height:50px;line-height:50px}.vux-tabbar-simple .weui-tabbar__label{font-size:14px;line-height:50px}',""])},638:function(t,e,i){e=t.exports=i(197)(),e.push([t.i,".homepage .weui_tabbar_label[data-v-858df3cc]{font-size:14px;margin-top:2px}.homepage .weui-tabbar__icon .iconfont[data-v-858df3cc]{position:relative;left:1px;top:-2px}",""])},643:function(t,e,i){e=t.exports=i(197)(),e.push([t.i,".mainIndex{background:#4bb7aa;height:100%;text-align:center}.mainIndex .induce{margin-top:6rem;width:10.4rem;height:10.4rem;display:inline-block;background:url("+i(662)+") no-repeat;background-size:100% 100%}.mainIndex .rememberBtn{margin-top:3rem;font-size:.9rem;border:1px solid #fff;padding:0 1.75rem}.user .info{height:9.125rem;width:100%;text-align:center;background:url("+i(663)+") repeat;position:relative}.user .info .arrow{position:absolute;top:0;right:0;width:50px;height:100%;float:right;box-sizing:border-box;padding-top:3rem}.user .info .arrow i{margin:0 auto;color:hsla(0,0%,100%,.6)}.user .info .phone{color:#fff;margin-top:.25rem;font-size:.8rem}.user .info .upload{font-size:.8rem;color:#fff;width:25%;border-radius:.5rem;height:1.125rem;margin:.3rem auto;background:#4e9e95}",""])},647:function(t,e,i){var o=i(643);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(198)("e3ac270a",o,!0)},648:function(t,e,i){var o=i(630);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(198)("62142a31",o,!0)},656:function(t,e,i){var o=i(638);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(198)("ddd3df32",o,!0)},662:function(t,e,i){t.exports=i.p+"static/img/brush.3c117fb.png"},663:function(t,e){t.exports="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QNyaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAxNCA3OS4xNTE0ODEsIDIwMTMvMDMvMTMtMTI6MDk6MTUgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6QTQzM0QyMzQ1MjU4RTYxMUExMkVBQUVDREQ2NkEyRkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTc2NUNGQTc2N0EzMTFFNjlCMkJBMTU0MjBDODUyNzYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTc2NUNGQTY2N0EzMTFFNjlCMkJBMTU0MjBDODUyNzYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI1NmM3MDRiLTc2M2QtYTU0Ni05YTFkLTQ5ZGY1OGRiNTMwZiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNDMzRDIzNDUyNThFNjExQTEyRUFBRUNERDY2QTJGRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8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"}});