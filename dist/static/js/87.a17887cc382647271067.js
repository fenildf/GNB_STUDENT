webpackJsonp([87],{1043:function(t,e,i){"use strict";var n=i(134),r=i.n(n),a=i(652),o=i(657),s=i(678),l=i(211);e.a={name:"article",components:{XHeader:a.a,ViewBox:o.a,Spinner:s.a},computed:r()({},i.i(l.a)(["SwiperInfo"])),data:function(){return{loading:!0}},methods:r()({},i.i(l.b)(["getSwiperInfo","swiperInfoClear"])),beforeRouteEnter:function(t,e,i){i(function(t){t.loading=!0,t.swiperInfoClear(),t.getSwiperInfo().then(function(){t.loading=!1})})}}},1223:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view-box",{ref:"viewBox",attrs:{"body-padding-top":"46px","body-padding-bottom":"50px"}},[i("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{slot:"header","left-options":{showBack:!0,backText:t.SwiperInfo.title}},slot:"header"}),t._v(" "),i("div",{staticStyle:{padding:"1rem","font-size":"16px"},domProps:{innerHTML:t._s(t.SwiperInfo.content)}}),t._v(" "),i("div",{staticStyle:{"text-align":"center"}},[t.loading?i("spinner",{attrs:{type:"dots"}}):t._e()],1)],1)},r=[],a={render:n,staticRenderFns:r};e.a=a},646:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1043),r=i(1223),a=i(52),o=a(n.a,r.a,!1,null,null,null);e.default=o.exports},652:function(t,e,i){"use strict";function n(t){i(655)}var r=i(653),a=i(656),o=i(52),s=n,l=o(r.a,a.a,!1,s,null,null);e.a=l.exports},653:function(t,e,i){"use strict";var n=i(210),r=i.n(n);e.a={name:"x-header",props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},beforeMount:function(){this.$slots["overwrite-title"]&&(this.shouldOverWriteTitle=!0)},computed:{_leftOptions:function(){return r()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}},data:function(){return{shouldOverWriteTitle:!1}}}},654:function(t,e,i){e=t.exports=i(539)(!1),e.push([t.i,'.vux-header{position:relative;padding:3px 0;box-sizing:border-box;background-color:#4cc0be}.vux-header .vux-header-title{line-height:40px;text-align:center;font-size:18px;font-weight:400;color:#fff}.vux-header-title-area,.vux-header .vux-header-title{margin:0 88px;height:40px;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vux-header .vux-header-title>span{display:inline-block}.vux-header .vux-header-left,.vux-header .vux-header-right{position:absolute;top:14px;display:block;font-size:14px;line-height:21px;color:#fff}.vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button{float:left;margin-right:8px;color:#fff}.vux-header .vux-header-left a:active,.vux-header .vux-header-left button:active,.vux-header .vux-header-right a:active,.vux-header .vux-header-right button:active{opacity:.5}.vux-header .vux-header-left{left:18px}.vux-header .vux-header-left .vux-header-back{padding-left:16px}.vux-header .vux-header-left .left-arrow{position:absolute;width:30px;height:30px;top:-5px;left:-5px}.vux-header .vux-header-left .left-arrow:before{content:"";position:absolute;width:12px;height:12px;border:1px solid #fff;border-width:1px 0 0 1px;-webkit-transform:rotate(315deg);transform:rotate(315deg);top:8px;left:7px}.vux-header .vux-header-right{right:15px}.vux-header .vux-header-right a,.vux-header .vux-header-right button{margin-left:8px;margin-right:0}.vux-header .vux-header-right .vux-header-more:after{content:"\\2022   \\2022   \\2022   ";font-size:16px}.vux-header-fade-in-right-enter-active{-webkit-animation:fadeinR .5s;animation:fadeinR .5s}.vux-header-fade-in-left-enter-active{-webkit-animation:fadeinL .5s;animation:fadeinL .5s}@-webkit-keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}',""])},655:function(t,e,i){var n=i(654);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(540)("19cf924f",n,!0)},656:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-header"},[i("div",{staticClass:"vux-header-left"},[t._t("overwrite-left",[i("transition",{attrs:{name:t.transition}},[i("a",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault",void 0,e.key))return null},t.onClickBack]}},[t._v(t._s(void 0===t._leftOptions.backText?"返回":t._leftOptions.backText))])]),t._v(" "),i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:t.onClickBack}})])]),t._v(" "),t._t("left")],2),t._v(" "),t.shouldOverWriteTitle?t._e():i("h1",{staticClass:"vux-header-title",on:{click:function(e){t.$emit("on-click-title")}}},[t._t("default",[i("transition",{attrs:{name:t.transition}},[i("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])])],2),t._v(" "),t.shouldOverWriteTitle?i("div",{staticClass:"vux-header-title-area"},[t._t("overwrite-title")],2):t._e(),t._v(" "),i("div",{staticClass:"vux-header-right"},[t.rightOptions.showMore?i("a",{staticClass:"vux-header-more",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault",void 0,e.key))return null},function(e){t.$emit("on-click-more")}]}}):t._e(),t._v(" "),t._t("right")],2)])},r=[],a={render:n,staticRenderFns:r};e.a=a},657:function(t,e,i){"use strict";function n(t){i(660)}var r=i(658),a=i(661),o=i(52),s=n,l=o(r.a,a.a,!1,s,null,null);e.a=l.exports},658:function(t,e,i){"use strict";e.a={name:"view-box",props:["bodyPaddingTop","bodyPaddingBottom"],methods:{scrollTo:function(t){this.$refs.viewBoxBody.scrollTop=t},getScrollTop:function(){return this.$refs.viewBoxBody.scrollTop},getScrollBody:function(){return this.$refs.viewBoxBody}}}},659:function(t,e,i){e=t.exports=i(539)(!1),e.push([t.i,'.weui-tabbar{display:-webkit-flex;display:-webkit-box;display:flex;position:absolute;z-index:500;bottom:0;width:100%;background-color:#f7f7fa}.weui-tabbar:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #c0bfc4;color:#c0bfc4;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-tabbar__item{display:block;-webkit-flex:1;flex:1;padding:5px 0 0;font-size:0;color:#999;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon>i,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{color:#4cc0be}.weui-tabbar__icon{display:inline-block;width:27px;height:27px}.weui-tabbar__icon>i,i.weui-tabbar__icon{font-size:24px;color:#999}.weui-tabbar__icon img{width:100%;height:100%}.weui-tabbar__label{text-align:center;color:#999;font-size:10px;line-height:1.8}.weui-tab{position:relative;height:100%}.weui-tab__panel{box-sizing:border-box;height:100%;padding-bottom:50px;overflow:auto;-webkit-overflow-scrolling:touch}.weui-tab__content{display:none}',""])},660:function(t,e,i){var n=i(659);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(540)("5771a8c7",n,!0)},661:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-tab"},[t._t("header"),t._v(" "),i("div",{ref:"viewBoxBody",staticClass:"weui-tab__panel vux-fix-safari-overflow-scrolling",style:{paddingTop:t.bodyPaddingTop,paddingBottom:t.bodyPaddingBottom},attrs:{id:"vux_view_box_body"}},[t._t("default")],2),t._v(" "),t._t("bottom")],2)},r=[],a={render:n,staticRenderFns:r};e.a=a},672:function(t,e,i){"use strict";var n=i(674),r=["android","ios","ios-small","bubbles","circles","crescent","dots","lines","ripple","spiral"];e.a={name:"spinner",mounted:function(){var t=this;this.$nextTick(function(){i.i(n.a)(t.$el,t.type,t.size)})},props:{type:{type:String,default:"ios"},size:String},computed:{styles:function(){if(void 0!==this.size&&"28px"!==this.size)return{width:this.size,height:this.size}},className:function(){for(var t={},e=0;e<r.length;e++)t["vux-spinner-"+r[e]]=this.type===r[e];return t}}}},673:function(t,e){for(var i=0,n=["webkit","moz"],r=0;r<n.length&&!window.requestAnimationFrame;++r)window.requestAnimationFrame=window[n[r]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[r]+"CancelAnimationFrame"]||window[n[r]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var n=(new Date).getTime(),r=Math.max(0,16-(n-i)),a=window.setTimeout(function(){t(n+r)},r);return i=n+r,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})},674:function(t,e,i){"use strict";function n(t,e,i,a,o){var s,c,u,f=document.createElement(l[t]||t);for(s in e)if("[object Array]"===Object.prototype.toString.call(e[s]))for(c=0;c<e[s].length;c++)if(e[s][c].fn)for(u=0;u<e[s][c].t;u++)n(s,e[s][c].fn(u,a),f,a);else n(s,e[s][c],f,a);else r(f,s,e[s]);o&&"28px"!==o&&r(f,"style","width: "+o+"; height: "+o),i.appendChild(f)}function r(t,e,i){t.setAttribute(l[e]||e,i)}function a(t,e){var i=t.split(";"),n=i.slice(e),r=i.slice(0,i.length-n.length);return i=n.concat(r).reverse(),i.join(";")+";"+i[0]}function o(t,e){return(t/=e/2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}var s=i(673),l=(i.n(s),{a:"animate",an:"attributeName",at:"animateTransform",c:"circle",da:"stroke-dasharray",os:"stroke-dashoffset",f:"fill",lc:"stroke-linecap",rc:"repeatCount",sw:"stroke-width",t:"transform",v:"values"}),c={v:"0,32,32;360,32,32",an:"transform",type:"rotate",rc:"indefinite",dur:"750ms"},u={sw:4,lc:"round",line:[{fn:function(t,e){return{y1:"ios"===e?17:12,y2:"ios"===e?29:20,t:"translate(32,32) rotate("+(30*t+(t<6?180:-180))+")",a:[{fn:function(){return{an:"stroke-opacity",dur:"750ms",v:a("0;.1;.15;.25;.35;.45;.55;.65;.7;.85;1",t),rc:"indefinite"}},t:1}]}},t:12}]},f={android:{c:[{sw:6,da:128,os:82,r:26,cx:32,cy:32,f:"none"}]},ios:u,"ios-small":u,bubbles:{sw:0,c:[{fn:function(t){return{cx:24*Math.cos(2*Math.PI*t/8),cy:24*Math.sin(2*Math.PI*t/8),t:"translate(32,32)",a:[{fn:function(){return{an:"r",dur:"750ms",v:a("1;2;3;4;5;6;7;8",t),rc:"indefinite"}},t:1}]}},t:8}]},circles:{c:[{fn:function(t){return{r:5,cx:24*Math.cos(2*Math.PI*t/8),cy:24*Math.sin(2*Math.PI*t/8),t:"translate(32,32)",sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:"750ms",v:a(".3;.3;.3;.4;.7;.85;.9;1",t),rc:"indefinite"}},t:1}]}},t:8}]},crescent:{c:[{sw:4,da:128,os:82,r:26,cx:32,cy:32,f:"none",at:[c]}]},dots:{c:[{fn:function(t){return{cx:16+16*t,cy:32,sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:"750ms",v:a(".5;.6;.8;1;.8;.6;.5",t),rc:"indefinite"}},t:1},{fn:function(){return{an:"r",dur:"750ms",v:a("4;5;6;5;4;3;3",t),rc:"indefinite"}},t:1}]}},t:3}]},lines:{sw:7,lc:"round",line:[{fn:function(t){return{x1:10+14*t,x2:10+14*t,a:[{fn:function(){return{an:"y1",dur:"750ms",v:a("16;18;28;18;16",t),rc:"indefinite"}},t:1},{fn:function(){return{an:"y2",dur:"750ms",v:a("48;44;36;46;48",t),rc:"indefinite"}},t:1},{fn:function(){return{an:"stroke-opacity",dur:"750ms",v:a("1;.8;.5;.4;1",t),rc:"indefinite"}},t:1}]}},t:4}]},ripple:{f:"none","fill-rule":"evenodd",sw:3,circle:[{fn:function(t){return{cx:32,cy:32,a:[{fn:function(){return{an:"r",begin:-1*t+"s",dur:"2s",v:"0;24",keyTimes:"0;1",keySplines:"0.1,0.2,0.3,1",calcMode:"spline",rc:"indefinite"}},t:1},{fn:function(){return{an:"stroke-opacity",begin:-1*t+"s",dur:"2s",v:".2;1;.2;0",rc:"indefinite"}},t:1}]}},t:2}]},spiral:{defs:[{linearGradient:[{id:"sGD",gradientUnits:"userSpaceOnUse",x1:55,y1:46,x2:2,y2:46,stop:[{offset:.1,class:"stop1"},{offset:1,class:"stop2"}]}]}],g:[{sw:4,lc:"round",f:"none",path:[{stroke:"url(#sGD)",d:"M4,32 c0,15,12,28,28,28c8,0,16-4,21-9"},{d:"M60,32 C60,16,47.464,4,32,4S4,16,4,32"}],at:[c]}]}},d={android:function(t){function e(){if(!i.stop){var t=o(Date.now()-n,650),u=1,f=0,d=188-58*t,p=182-182*t;a%2&&(u=-1,f=-64,d=128- -58*t,p=182*t);var h=[0,-101,-90,-11,-180,79,-270,-191][a];r(c,"da",Math.max(Math.min(d,188),128)),r(c,"os",Math.max(Math.min(p,182),0)),r(c,"t","scale("+u+",1) translate("+f+",0) rotate("+h+",32,32)"),s+=4.1,s>359&&(s=0),r(l,"t","rotate("+s+",32,32)"),t>=1&&(a++,a>7&&(a=0),n=Date.now()),window.requestAnimationFrame(e)}}var i=this;this.stop=!1;var n,a=0,s=0,l=t.querySelector("g"),c=t.querySelector("circle");return function(){return n=Date.now(),e(),i}}};e.a=function(t,e,i){var r,a;r=e;var o=document.createElement("div");return n("svg",{viewBox:"0 0 64 64",g:[f[r]]},o,r,i),t.innerHTML=o.innerHTML,function(){d[r]&&(a=d[r](t)())}(),t}},675:function(t,e,i){e=t.exports=i(539)(!1),e.push([t.i,".vux-spinner{stroke:#444;fill:#444;vertical-align:middle;display:inline-block}.vux-spinner,.vux-spinner svg{width:28px;height:28px}.vux-spinner.vux-spinner-inverse{stroke:#fff;fill:#fff}.vux-spinner-android{stroke:#4b8bf4}.vux-spinner-ios,.vux-spinner-ios-small{stroke:#69717d}.vux-spinner-spiral .stop1{stop-color:#fff;stop-opacity:0}.vux-spinner-spiral.vux-spinner-inverse .stop1{stop-color:#000}.vux-spinner-spiral.vux-spinner-inverse .stop2{stop-color:#fff}",""])},676:function(t,e,i){var n=i(675);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(540)("7b4a41c6",n,!0)},677:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"vux-spinner",class:t.className,style:t.styles})},r=[],a={render:n,staticRenderFns:r};e.a=a},678:function(t,e,i){"use strict";function n(t){i(676)}var r=i(672),a=i(677),o=i(52),s=n,l=o(r.a,a.a,!1,s,null,null);e.a=l.exports}});