webpackJsonp([45],{1068:function(t,e,i){e=t.exports=i(539)(!1),e.push([t.i,".icon-bianji[data-v-5b9691f9],.icon-collect1[data-v-5b9691f9],.icon-collect[data-v-5b9691f9]{font-size:24px}",""])},1099:function(t,e,i){var n=i(1068);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(540)("116bbaf1",n,!0)},1185:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view-box",{attrs:{"body-padding-top":"46px"}},[i("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{slot:"header","left-options":{backText:"例题详情"}},slot:"header"},[i("div",{attrs:{slot:"right"},slot:"right"},[t._l(t.Example.detail,function(e){return i("i",{staticClass:"icon iconfont icon-collect1",staticStyle:{top:"1px"},style:"0"!==e.collectTime.toString()?"color:#FBC34B":"color:#FFF",on:{click:function(i){t._collect(e.collectTime)}}})}),t._v(" "),i("i",{staticClass:"icon iconfont icon-bianji",staticStyle:{padding:"10px",margin:"0 -10px 0 0"},on:{click:function(e){t.$router.push({name:"correct",params:{subjectId:t.Params.subjectId,id:t.Params.id}})}}})],2)]),t._v(" "),t._l(t.Example.detail,function(e,n){return[i("card",{key:n},[i("div",{staticClass:"weui-panel__hd",attrs:{slot:"header"},slot:"header"},[i("flexbox",[i("flexbox-item",{staticStyle:{color:"#4cc0be"},attrs:{span:10}},[t._v(t._s(e.charpterName))])],1)],1),t._v(" "),i("div",{attrs:{slot:"content"},slot:"content"},[i("div",{domProps:{innerHTML:t._s(e.stem)}}),t._v(" "),e.opt.hasOwnProperty("A")?i("div",[t._l(e.opt,function(e,n){return[i("div",{key:n,staticStyle:{"padding-top":"5px"}},[t._v(t._s(n)+"： "),i("p",{staticStyle:{display:"inline-block"},domProps:{innerHTML:t._s(e)}})])]})],2):t._e()])]),t._v(" "),i("card",{key:n},[i("div",{staticClass:"weui-panel__hd",staticStyle:{color:"#4cc0be"},attrs:{slot:"header"},slot:"header"},[t._v("解析")]),t._v(" "),i("div",{attrs:{slot:"content"},domProps:{innerHTML:t._s(e.answer)},slot:"content"})])]}),t._v(" "),i("div",{staticStyle:{"text-align":"center"}},[t.loading?i("spinner",{attrs:{type:"dots"}}):0==t.Example.detail.length?i("p",{staticStyle:{"font-size":"16px",padding:"10px 0",color:"#4cc0be"}},[t._v("出错了~")]):t._e()],1)],2)},o=[],r={render:n,staticRenderFns:o};e.a=r},571:function(t,e,i){"use strict";function n(t){i(1099)}Object.defineProperty(e,"__esModule",{value:!0});var o=i(968),r=i(1185),a=i(52),s=n,l=a(o.a,r.a,!1,s,"data-v-5b9691f9",null);e.default=l.exports},651:function(t,e,i){"use strict";function n(t,e){if(!/^javas/.test(t)&&t){"object"===(void 0===t?"undefined":r()(t))||e&&"string"==typeof t&&!/http/.test(t)?"object"===(void 0===t?"undefined":r()(t))&&!0===t.replace?e.replace(t):"BACK"===t?e.go(-1):e.push(t):window.location.href=t}}e.a=n;var o=i(69),r=i.n(o)},652:function(t,e,i){"use strict";function n(t){i(655)}var o=i(653),r=i(656),a=i(52),s=n,l=a(o.a,r.a,!1,s,null,null);e.a=l.exports},653:function(t,e,i){"use strict";var n=i(210),o=i.n(n);e.a={name:"x-header",props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},beforeMount:function(){this.$slots["overwrite-title"]&&(this.shouldOverWriteTitle=!0)},computed:{_leftOptions:function(){return o()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}},data:function(){return{shouldOverWriteTitle:!1}}}},654:function(t,e,i){e=t.exports=i(539)(!1),e.push([t.i,'.vux-header{position:relative;padding:3px 0;box-sizing:border-box;background-color:#4cc0be}.vux-header .vux-header-title{line-height:40px;text-align:center;font-size:18px;font-weight:400;color:#fff}.vux-header-title-area,.vux-header .vux-header-title{margin:0 88px;height:40px;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vux-header .vux-header-title>span{display:inline-block}.vux-header .vux-header-left,.vux-header .vux-header-right{position:absolute;top:14px;display:block;font-size:14px;line-height:21px;color:#fff}.vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button{float:left;margin-right:8px;color:#fff}.vux-header .vux-header-left a:active,.vux-header .vux-header-left button:active,.vux-header .vux-header-right a:active,.vux-header .vux-header-right button:active{opacity:.5}.vux-header .vux-header-left{left:18px}.vux-header .vux-header-left .vux-header-back{padding-left:16px}.vux-header .vux-header-left .left-arrow{position:absolute;width:30px;height:30px;top:-5px;left:-5px}.vux-header .vux-header-left .left-arrow:before{content:"";position:absolute;width:12px;height:12px;border:1px solid #fff;border-width:1px 0 0 1px;-webkit-transform:rotate(315deg);transform:rotate(315deg);top:8px;left:7px}.vux-header .vux-header-right{right:15px}.vux-header .vux-header-right a,.vux-header .vux-header-right button{margin-left:8px;margin-right:0}.vux-header .vux-header-right .vux-header-more:after{content:"\\2022   \\2022   \\2022   ";font-size:16px}.vux-header-fade-in-right-enter-active{-webkit-animation:fadeinR .5s;animation:fadeinR .5s}.vux-header-fade-in-left-enter-active{-webkit-animation:fadeinL .5s;animation:fadeinL .5s}@-webkit-keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}',""])},655:function(t,e,i){var n=i(654);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(540)("19cf924f",n,!0)},656:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-header"},[i("div",{staticClass:"vux-header-left"},[t._t("overwrite-left",[i("transition",{attrs:{name:t.transition}},[i("a",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault",void 0,e.key))return null},t.onClickBack]}},[t._v(t._s(void 0===t._leftOptions.backText?"返回":t._leftOptions.backText))])]),t._v(" "),i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:t.onClickBack}})])]),t._v(" "),t._t("left")],2),t._v(" "),t.shouldOverWriteTitle?t._e():i("h1",{staticClass:"vux-header-title",on:{click:function(e){t.$emit("on-click-title")}}},[t._t("default",[i("transition",{attrs:{name:t.transition}},[i("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])])],2),t._v(" "),t.shouldOverWriteTitle?i("div",{staticClass:"vux-header-title-area"},[t._t("overwrite-title")],2):t._e(),t._v(" "),i("div",{staticClass:"vux-header-right"},[t.rightOptions.showMore?i("a",{staticClass:"vux-header-more",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault",void 0,e.key))return null},function(e){t.$emit("on-click-more")}]}}):t._e(),t._v(" "),t._t("right")],2)])},o=[],r={render:n,staticRenderFns:o};e.a=r},657:function(t,e,i){"use strict";function n(t){i(660)}var o=i(658),r=i(661),a=i(52),s=n,l=a(o.a,r.a,!1,s,null,null);e.a=l.exports},658:function(t,e,i){"use strict";e.a={name:"view-box",props:["bodyPaddingTop","bodyPaddingBottom"],methods:{scrollTo:function(t){this.$refs.viewBoxBody.scrollTop=t},getScrollTop:function(){return this.$refs.viewBoxBody.scrollTop},getScrollBody:function(){return this.$refs.viewBoxBody}}}},659:function(t,e,i){e=t.exports=i(539)(!1),e.push([t.i,'.weui-tabbar{display:-webkit-flex;display:-webkit-box;display:flex;position:absolute;z-index:500;bottom:0;width:100%;background-color:#f7f7fa}.weui-tabbar:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #c0bfc4;color:#c0bfc4;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-tabbar__item{display:block;-webkit-flex:1;flex:1;padding:5px 0 0;font-size:0;color:#999;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon>i,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{color:#4cc0be}.weui-tabbar__icon{display:inline-block;width:27px;height:27px}.weui-tabbar__icon>i,i.weui-tabbar__icon{font-size:24px;color:#999}.weui-tabbar__icon img{width:100%;height:100%}.weui-tabbar__label{text-align:center;color:#999;font-size:10px;line-height:1.8}.weui-tab{position:relative;height:100%}.weui-tab__panel{box-sizing:border-box;height:100%;padding-bottom:50px;overflow:auto;-webkit-overflow-scrolling:touch}.weui-tab__content{display:none}',""])},660:function(t,e,i){var n=i(659);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(540)("5771a8c7",n,!0)},661:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-tab"},[t._t("header"),t._v(" "),i("div",{ref:"viewBoxBody",staticClass:"weui-tab__panel vux-fix-safari-overflow-scrolling",style:{paddingTop:t.bodyPaddingTop,paddingBottom:t.bodyPaddingBottom},attrs:{id:"vux_view_box_body"}},[t._t("default")],2),t._v(" "),t._t("bottom")],2)},o=[],r={render:n,staticRenderFns:o};e.a=r},672:function(t,e,i){"use strict";var n=i(674),o=["android","ios","ios-small","bubbles","circles","crescent","dots","lines","ripple","spiral"];e.a={name:"spinner",mounted:function(){var t=this;this.$nextTick(function(){i.i(n.a)(t.$el,t.type,t.size)})},props:{type:{type:String,default:"ios"},size:String},computed:{styles:function(){if(void 0!==this.size&&"28px"!==this.size)return{width:this.size,height:this.size}},className:function(){for(var t={},e=0;e<o.length;e++)t["vux-spinner-"+o[e]]=this.type===o[e];return t}}}},673:function(t,e){for(var i=0,n=["webkit","moz"],o=0;o<n.length&&!window.requestAnimationFrame;++o)window.requestAnimationFrame=window[n[o]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[o]+"CancelAnimationFrame"]||window[n[o]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var n=(new Date).getTime(),o=Math.max(0,16-(n-i)),r=window.setTimeout(function(){t(n+o)},o);return i=n+o,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})},674:function(t,e,i){"use strict";function n(t,e,i,r,a){var s,c,u,d=document.createElement(l[t]||t);for(s in e)if("[object Array]"===Object.prototype.toString.call(e[s]))for(c=0;c<e[s].length;c++)if(e[s][c].fn)for(u=0;u<e[s][c].t;u++)n(s,e[s][c].fn(u,r),d,r);else n(s,e[s][c],d,r);else o(d,s,e[s]);a&&"28px"!==a&&o(d,"style","width: "+a+"; height: "+a),i.appendChild(d)}function o(t,e,i){t.setAttribute(l[e]||e,i)}function r(t,e){var i=t.split(";"),n=i.slice(e),o=i.slice(0,i.length-n.length);return i=n.concat(o).reverse(),i.join(";")+";"+i[0]}function a(t,e){return(t/=e/2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}var s=i(673),l=(i.n(s),{a:"animate",an:"attributeName",at:"animateTransform",c:"circle",da:"stroke-dasharray",os:"stroke-dashoffset",f:"fill",lc:"stroke-linecap",rc:"repeatCount",sw:"stroke-width",t:"transform",v:"values"}),c={v:"0,32,32;360,32,32",an:"transform",type:"rotate",rc:"indefinite",dur:"750ms"},u={sw:4,lc:"round",line:[{fn:function(t,e){return{y1:"ios"===e?17:12,y2:"ios"===e?29:20,t:"translate(32,32) rotate("+(30*t+(t<6?180:-180))+")",a:[{fn:function(){return{an:"stroke-opacity",dur:"750ms",v:r("0;.1;.15;.25;.35;.45;.55;.65;.7;.85;1",t),rc:"indefinite"}},t:1}]}},t:12}]},d={android:{c:[{sw:6,da:128,os:82,r:26,cx:32,cy:32,f:"none"}]},ios:u,"ios-small":u,bubbles:{sw:0,c:[{fn:function(t){return{cx:24*Math.cos(2*Math.PI*t/8),cy:24*Math.sin(2*Math.PI*t/8),t:"translate(32,32)",a:[{fn:function(){return{an:"r",dur:"750ms",v:r("1;2;3;4;5;6;7;8",t),rc:"indefinite"}},t:1}]}},t:8}]},circles:{c:[{fn:function(t){return{r:5,cx:24*Math.cos(2*Math.PI*t/8),cy:24*Math.sin(2*Math.PI*t/8),t:"translate(32,32)",sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:"750ms",v:r(".3;.3;.3;.4;.7;.85;.9;1",t),rc:"indefinite"}},t:1}]}},t:8}]},crescent:{c:[{sw:4,da:128,os:82,r:26,cx:32,cy:32,f:"none",at:[c]}]},dots:{c:[{fn:function(t){return{cx:16+16*t,cy:32,sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:"750ms",v:r(".5;.6;.8;1;.8;.6;.5",t),rc:"indefinite"}},t:1},{fn:function(){return{an:"r",dur:"750ms",v:r("4;5;6;5;4;3;3",t),rc:"indefinite"}},t:1}]}},t:3}]},lines:{sw:7,lc:"round",line:[{fn:function(t){return{x1:10+14*t,x2:10+14*t,a:[{fn:function(){return{an:"y1",dur:"750ms",v:r("16;18;28;18;16",t),rc:"indefinite"}},t:1},{fn:function(){return{an:"y2",dur:"750ms",v:r("48;44;36;46;48",t),rc:"indefinite"}},t:1},{fn:function(){return{an:"stroke-opacity",dur:"750ms",v:r("1;.8;.5;.4;1",t),rc:"indefinite"}},t:1}]}},t:4}]},ripple:{f:"none","fill-rule":"evenodd",sw:3,circle:[{fn:function(t){return{cx:32,cy:32,a:[{fn:function(){return{an:"r",begin:-1*t+"s",dur:"2s",v:"0;24",keyTimes:"0;1",keySplines:"0.1,0.2,0.3,1",calcMode:"spline",rc:"indefinite"}},t:1},{fn:function(){return{an:"stroke-opacity",begin:-1*t+"s",dur:"2s",v:".2;1;.2;0",rc:"indefinite"}},t:1}]}},t:2}]},spiral:{defs:[{linearGradient:[{id:"sGD",gradientUnits:"userSpaceOnUse",x1:55,y1:46,x2:2,y2:46,stop:[{offset:.1,class:"stop1"},{offset:1,class:"stop2"}]}]}],g:[{sw:4,lc:"round",f:"none",path:[{stroke:"url(#sGD)",d:"M4,32 c0,15,12,28,28,28c8,0,16-4,21-9"},{d:"M60,32 C60,16,47.464,4,32,4S4,16,4,32"}],at:[c]}]}},f={android:function(t){function e(){if(!i.stop){var t=a(Date.now()-n,650),u=1,d=0,f=188-58*t,p=182-182*t;r%2&&(u=-1,d=-64,f=128- -58*t,p=182*t);var x=[0,-101,-90,-11,-180,79,-270,-191][r];o(c,"da",Math.max(Math.min(f,188),128)),o(c,"os",Math.max(Math.min(p,182),0)),o(c,"t","scale("+u+",1) translate("+d+",0) rotate("+x+",32,32)"),s+=4.1,s>359&&(s=0),o(l,"t","rotate("+s+",32,32)"),t>=1&&(r++,r>7&&(r=0),n=Date.now()),window.requestAnimationFrame(e)}}var i=this;this.stop=!1;var n,r=0,s=0,l=t.querySelector("g"),c=t.querySelector("circle");return function(){return n=Date.now(),e(),i}}};e.a=function(t,e,i){var o,r;o=e;var a=document.createElement("div");return n("svg",{viewBox:"0 0 64 64",g:[d[o]]},a,o,i),t.innerHTML=a.innerHTML,function(){f[o]&&(r=f[o](t)())}(),t}},675:function(t,e,i){e=t.exports=i(539)(!1),e.push([t.i,".vux-spinner{stroke:#444;fill:#444;vertical-align:middle;display:inline-block}.vux-spinner,.vux-spinner svg{width:28px;height:28px}.vux-spinner.vux-spinner-inverse{stroke:#fff;fill:#fff}.vux-spinner-android{stroke:#4b8bf4}.vux-spinner-ios,.vux-spinner-ios-small{stroke:#69717d}.vux-spinner-spiral .stop1{stop-color:#fff;stop-opacity:0}.vux-spinner-spiral.vux-spinner-inverse .stop1{stop-color:#000}.vux-spinner-spiral.vux-spinner-inverse .stop2{stop-color:#fff}",""])},676:function(t,e,i){var n=i(675);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(540)("7b4a41c6",n,!0)},677:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"vux-spinner",class:t.className,style:t.styles})},o=[],r={render:n,staticRenderFns:o};e.a=r},678:function(t,e,i){"use strict";function n(t){i(676)}var o=i(672),r=i(677),a=i(52),s=n,l=a(o.a,r.a,!1,s,null,null);e.a=l.exports},685:function(t,e,i){"use strict";var n=["-moz-box-","-webkit-box-",""];e.a={name:"flexbox-item",props:{span:[Number,String],order:[Number,String]},beforeMount:function(){this.bodyWidth=document.documentElement.offsetWidth},methods:{buildWidth:function(t){return"number"==typeof t?t<1?t:t/12:"string"==typeof t?t.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var t={},e="horizontal"===this.$parent.orient?"marginLeft":"marginTop";if(1*this.$parent.gutter!=0&&(t[e]=this.$parent.gutter+"px"),this.span)for(var i=0;i<n.length;i++)t[n[i]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return void 0!==this.order&&(t.order=this.order),t}},data:function(){return{bodyWidth:0}}}},686:function(t,e,i){"use strict";e.a={name:"flexbox",props:{gutter:{type:Number,default:8},orient:{type:String,default:"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){return{"justify-content":this.justify,"-webkit-justify-content":this.justify,"align-items":this.align,"-webkit-align-items":this.align,"flex-wrap":this.wrap,"-webkit-flex-wrap":this.wrap,"flex-direction":this.direction,"-webkit-flex-direction":this.direction}}}}},687:function(t,e,i){e=t.exports=i(539)(!1),e.push([t.i,".vux-flexbox{width:100%;text-align:left;display:-webkit-box;display:flex;display:-webkit-flex;box-align:center;-webkit-align-items:center;align-items:center}.vux-flexbox .vux-flexbox-item{flex:1;-webkit-flex:1;min-width:20px;width:0}.vux-flexbox .vux-flexbox-item:first-child{margin-left:0!important;margin-top:0!important}.vux-flex-col .vux-flex-row{box-direction:row;box-orient:horizontal;-webkit-flex-direction:row;flex-direction:row}.vux-flex-col{box-orient:vertical;-webkit-flex-direction:column;flex-direction:column}.vux-flex-col>.vux-flexbox-item{width:100%}",""])},688:function(t,e,i){var n=i(687);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(540)("68e459f4",n,!0)},689:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-flexbox",class:{"vux-flex-col":"vertical"===t.orient,"vux-flex-row":"horizontal"===t.orient},style:t.styles},[t._t("default")],2)},o=[],r={render:n,staticRenderFns:o};e.a=r},690:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-flexbox-item",style:t.style},[t._t("default")],2)},o=[],r={render:n,staticRenderFns:o};e.a=r},691:function(t,e,i){"use strict";var n=i(685),o=i(690),r=i(52),a=r(n.a,o.a,!1,null,null,null);e.a=a.exports},692:function(t,e,i){"use strict";function n(t){i(688)}var o=i(686),r=i(689),a=i(52),s=n,l=a(o.a,r.a,!1,s,null,null);e.a=l.exports},702:function(t,e,i){"use strict";var n=i(651);e.a={name:"card",props:{header:Object,footer:Object},methods:{onClickFooter:function(){this.footer.link&&i.i(n.a)(this.footer.link,this.$router),this.$emit("on-click-footer")}}}},703:function(t,e,i){e=t.exports=i(539)(!1),e.push([t.i,'.weui-cells{margin-top:1.25em;background-color:#fff;line-height:1.5;font-size:16px;overflow:hidden;position:relative}.weui-cells:before{top:0;border-top:1px solid #d9d9d9;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-cells:after,.weui-cells:before{content:" ";position:absolute;left:0;right:0;height:1px;color:#d9d9d9}.weui-cells:after{bottom:0;border-bottom:1px solid #d9d9d9;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-cells__title{margin-top:.77em;margin-bottom:.3em;padding-left:15px;padding-right:15px;color:#999;font-size:14px}.weui-cells__title+.weui-cells{margin-top:0}.weui-cells__tips{margin-top:.3em;color:#999;padding-left:15px;padding-right:15px;font-size:14px}.weui-cell{padding:10px 15px;position:relative;display:-webkit-flex;display:-webkit-box;display:flex;-webkit-align-items:center;align-items:center}.weui-cell:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d9d9d9;color:#d9d9d9;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5);left:15px}.weui-cell:first-child:before{display:none}.weui-cell_primary{-webkit-align-items:flex-start;align-items:flex-start}.weui-cell__bd{-webkit-flex:1;flex:1}.weui-cell__ft{text-align:right;color:#999}.vux-cell-justify{height:1.5em}.vux-cell-justify.vux-cell-justify:after{content:".";display:inline-block;width:100%;overflow:hidden;height:0}.weui-cell_access{-webkit-tap-highlight-color:rgba(0,0,0,0);color:inherit}.weui-cell_access:active{background-color:#ececec}.weui-cell_access .weui-cell__ft{padding-right:13px;position:relative}.weui-cell_access .weui-cell__ft:after{content:" ";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:2px}.weui-cell_link{color:#586c94;font-size:14px}.weui-cell_link:first-child:before{display:block}.weui-cell_access.vux-cell-box{padding-right:13px;position:relative}.weui-cell_access.vux-cell-box:after{content:" ";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:17px}.weui-panel{background-color:#fff;margin-top:10px;position:relative;overflow:hidden}.weui-panel:first-child{margin-top:0}.weui-panel:before{top:0;border-top:1px solid #e5e5e5;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-panel:after,.weui-panel:before{content:" ";position:absolute;left:0;right:0;height:1px;color:#e5e5e5}.weui-panel:after{bottom:0;border-bottom:1px solid #e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-panel__hd{padding:14px 15px 10px;color:#999;font-size:13px;position:relative}.weui-panel__hd:after{content:" ";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #e5e5e5;color:#e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5);left:15px}.weui-panel .weui-cell:first-child:before{display:block}',""])},704:function(t,e,i){var n=i(703);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(540)("795d2b3a",n,!0)},705:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-panel weui-panel_access"},[t.header&&t.header.title?i("div",{staticClass:"weui-panel__hd",domProps:{innerHTML:t._s(t.header.title)},on:{click:function(e){t.$emit("on-click-header")}}}):t._e(),t._v(" "),t._t("header"),t._v(" "),i("div",{staticClass:"weui-panel__bd"},[i("div",{staticClass:"vux-card-content"},[t._t("content")],2)]),t._v(" "),i("div",{staticClass:"weui-panel__ft"},[t.footer&&t.footer.title?i("a",{staticClass:"weui-cell weui-cell_access weui-cell_link",attrs:{href:"javascript:"},on:{click:t.onClickFooter}},[i("div",{staticClass:"weui-cell__bd",domProps:{innerHTML:t._s(t.footer.title)}})]):t._e()]),t._v(" "),t._t("footer")],2)},o=[],r={render:n,staticRenderFns:o};e.a=r},706:function(t,e,i){"use strict";function n(t){i(704)}var o=i(702),r=i(705),a=i(52),s=n,l=a(o.a,r.a,!1,s,null,null);e.a=l.exports},826:function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"d",function(){return r}),i.d(e,"b",function(){return a});var n="EXAMPLE",o="COLLECT_ADD",r="COLLECT_REMOVE",a="EXAMPLE_CLEAR"},850:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i.d(e,"getExample",function(){return l}),i.d(e,"collectRemove",function(){return c}),i.d(e,"collectAdd",function(){return u}),i.d(e,"exampleClear",function(){return d});var n=i(135),o=i.n(n),r=i(53),a=i(212),s=i(826),l=function(t){var e=t.rootState,n=t.commit;return new o.a(function(t,o){i.i(a.a)({method:"get",url:"exerciseList",params:{ids:[e.route.params.id],subject_id:e.route.params.subjectId,token:e.common.user.token}}).then(function(e){n(s.a,e.data.data),t(e)})})},c=function(t){var e=t.rootState,n=t.commit,l=t.dispatch;return new o.a(function(t,o){i.i(a.a)({method:"post",url:"collect/update",data:{id:e.route.params.id,subject_id:e.route.params.subjectId,handleType:"cancel",token:e.common.user.token}}).then(function(i){r.default.$vux.toast.show({text:"取消收藏成功",type:"success",time:600,isShowMask:!0}),n(s.d),e.hasOwnProperty("collect")&&l("clearCollect"),t(i)})})},u=function(t){var e=t.rootState,n=t.commit,l=t.dispatch;return new o.a(function(t,o){i.i(a.a)({method:"post",url:"collect/update",data:{id:e.route.params.id,subject_id:e.route.params.subjectId,handleType:"add",token:e.common.user.token}}).then(function(i){r.default.$vux.toast.show({text:"收藏成功",type:"success",time:600,isShowMask:!0}),n(s.c),console.log(e),e.hasOwnProperty("collect")&&l("clearCollect"),t(i)})})},d=function(t){(0,t.commit)(s.b)}},851:function(t,e,i){"use strict";var n,o=i(213),r=i.n(o),a=i(850),s=i(826),l={example:[]},c={Example:function(t){return t.example}},u=(n={},r()(n,s.a,function(t,e){t.example=e}),r()(n,s.b,function(t,e){t.example=[]}),r()(n,s.c,function(t){t.example.detail[0].collectTime=1}),r()(n,s.d,function(t){t.example.detail[0].collectTime=0}),n);e.a={mutations:u,getters:c,actions:a,state:l}},968:function(t,e,i){"use strict";var n=i(134),o=i.n(n),r=i(652),a=i(706),s=i(657),l=i(678),c=i(692),u=i(691),d=i(211),f=i(92),p=i(851);e.a={name:"example",components:{XHeader:r.a,Card:a.a,ViewBox:s.a,Spinner:l.a,Flexbox:c.a,FlexboxItem:u.a},computed:o()({},i.i(d.a)(["Example","Params"])),data:function(){return{loading:!0}},methods:o()({},i.i(d.b)(["getExample","exampleClear","collectRemove","collectAdd"]),{_getDate:function(){var t=this;this.loading=!0,this.getExample().then(function(){t.loading=!1}).catch(function(){t.loading=!1})},_collect:function(t){0===Number(t)?this.collectAdd():this.collectRemove()}}),beforeRouteEnter:function(t,e,i){"correct"!==e.name?i(function(t){t.exampleClear(),t._getDate()}):i()},beforeCreate:function(){f.a.registerModule("example",o()({},p.a))}}}});