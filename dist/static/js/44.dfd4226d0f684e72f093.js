webpackJsonp([44],{1029:function(e,t,i){t=e.exports=i(504)(!1),t.push([e.i,".icon-bianji[data-v-5b9691f9],.icon-collect1[data-v-5b9691f9],.icon-collect[data-v-5b9691f9]{font-size:24px}",""])},1060:function(e,t,i){var n=i(1029);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(505)("372f64d1",n,!0)},1146:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view-box",{attrs:{"body-padding-top":"46px"}},[i("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{"left-options":{backText:"例题详情"}},slot:"header"},[i("div",{slot:"right"},[e._l(e.Example.detail,function(t){return i("i",{staticClass:"icon iconfont icon-collect1",staticStyle:{top:"1px"},style:"0"!==t.collectTime.toString()?"color:#FBC34B":"color:#FFF",on:{click:function(i){e._collect(t.collectTime)}}})}),e._v(" "),i("i",{staticClass:"icon iconfont icon-bianji",staticStyle:{padding:"10px",margin:"0 -10px 0 0"},on:{click:function(t){e.$router.push({name:"correct",params:{subjectId:e.Params.subjectId,id:e.Params.id}})}}})],2)]),e._v(" "),e._l(e.Example.detail,function(t,n){return[i("card",{key:n},[i("div",{staticClass:"weui-panel__hd",slot:"header"},[i("flexbox",[i("flexbox-item",{staticStyle:{color:"#4cc0be"},attrs:{span:10}},[e._v(e._s(t.charpterName))])],1)],1),e._v(" "),i("div",{slot:"content"},[i("div",{domProps:{innerHTML:e._s(t.stem)}}),e._v(" "),t.opt.hasOwnProperty("A")?i("div",[e._l(t.opt,function(t,n){return[i("div",{key:n,staticStyle:{"padding-top":"5px"}},[e._v(e._s(n)+"： "),i("p",{staticStyle:{display:"inline-block"},domProps:{innerHTML:e._s(t)}})])]})],2):e._e()])]),e._v(" "),i("card",{key:n},[i("div",{staticClass:"weui-panel__hd",staticStyle:{color:"#4cc0be"},slot:"header"},[e._v("解析")]),e._v(" "),i("div",{domProps:{innerHTML:e._s(t.answer)},slot:"content"})])]}),e._v(" "),i("div",{staticStyle:{"text-align":"center"}},[e.loading?i("spinner",{attrs:{type:"dots"}}):0==e.Example.detail.length?i("p",{staticStyle:{"font-size":"16px",padding:"10px 0",color:"#4cc0be"}},[e._v("出错了~")]):e._e()],1)],2)},staticRenderFns:[]}},536:function(e,t,i){i(1060);var n=i(50)(i(933),i(1146),"data-v-5b9691f9",null);e.exports=n.exports},616:function(e,t,i){"use strict";function n(e,t){if(!/^javas/.test(e)&&e){"object"===(void 0===e?"undefined":r()(e))||t&&"string"==typeof e&&!/http/.test(e)?"object"===(void 0===e?"undefined":r()(e))&&!0===e.replace?t.replace(e):"BACK"===e?t.go(-1):t.push(e):window.location.href=e}}t.a=n;var o=i(69),r=i.n(o)},617:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(195),o=i.n(n);t.default={name:"x-header",props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},beforeMount:function(){this.$slots["overwrite-title"]&&(this.shouldOverWriteTitle=!0)},computed:{_leftOptions:function(){return o()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}},data:function(){return{shouldOverWriteTitle:!1}}}},618:function(e,t,i){t=e.exports=i(504)(!1),t.push([e.i,'.vux-header{position:relative;padding:3px 0;box-sizing:border-box;background-color:#4cc0be}.vux-header .vux-header-title{line-height:40px;text-align:center;font-size:18px;font-weight:400;color:#fff}.vux-header-title-area,.vux-header .vux-header-title{margin:0 88px;height:40px;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vux-header .vux-header-title>span{display:inline-block}.vux-header .vux-header-left,.vux-header .vux-header-right{position:absolute;top:14px;display:block;font-size:14px;line-height:21px;color:#fff}.vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button{float:left;margin-right:8px;color:#fff}.vux-header .vux-header-left a:active,.vux-header .vux-header-left button:active,.vux-header .vux-header-right a:active,.vux-header .vux-header-right button:active{opacity:.5}.vux-header .vux-header-left{left:18px}.vux-header .vux-header-left .vux-header-back{padding-left:16px}.vux-header .vux-header-left .left-arrow{position:absolute;width:30px;height:30px;top:-5px;left:-5px}.vux-header .vux-header-left .left-arrow:before{content:"";position:absolute;width:12px;height:12px;border:1px solid #fff;border-width:1px 0 0 1px;-webkit-transform:rotate(315deg);transform:rotate(315deg);top:8px;left:7px}.vux-header .vux-header-right{right:15px}.vux-header .vux-header-right a,.vux-header .vux-header-right button{margin-left:8px;margin-right:0}.vux-header .vux-header-right .vux-header-more:after{content:"\\2022   \\2022   \\2022   ";font-size:16px}.vux-header-fade-in-right-enter-active{-webkit-animation:fadeinR .5s;animation:fadeinR .5s}.vux-header-fade-in-left-enter-active{-webkit-animation:fadeinL .5s;animation:fadeinL .5s}@-webkit-keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}',""])},619:function(e,t,i){var n=i(618);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(505)("bb31c83a",n,!0)},620:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vux-header"},[i("div",{staticClass:"vux-header-left"},[e._t("overwrite-left",[i("transition",{attrs:{name:e.transition}},[i("a",{directives:[{name:"show",rawName:"v-show",value:e._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(t){if(!("button"in t)&&e._k(t.keyCode,"preventDefault"))return null},e.onClickBack]}},[e._v(e._s(void 0===e._leftOptions.backText?"返回":e._leftOptions.backText))])]),e._v(" "),i("transition",{attrs:{name:e.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:e.onClickBack}})])]),e._v(" "),e._t("left")],2),e._v(" "),e.shouldOverWriteTitle?e._e():i("h1",{staticClass:"vux-header-title",on:{click:function(t){e.$emit("on-click-title")}}},[e._t("default",[i("transition",{attrs:{name:e.transition}},[i("span",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}]},[e._v(e._s(e.title))])])])],2),e._v(" "),e.shouldOverWriteTitle?i("div",{staticClass:"vux-header-title-area"},[e._t("overwrite-title")],2):e._e(),e._v(" "),i("div",{staticClass:"vux-header-right"},[e.rightOptions.showMore?i("a",{staticClass:"vux-header-more",on:{click:[function(t){if(!("button"in t)&&e._k(t.keyCode,"preventDefault"))return null},function(t){e.$emit("on-click-more")}]}}):e._e(),e._v(" "),e._t("right")],2)])},staticRenderFns:[]}},621:function(e,t,i){i(619);var n=i(50)(i(617),i(620),null,null);e.exports=n.exports},622:function(e,t,i){i(625);var n=i(50)(i(623),i(626),null,null);e.exports=n.exports},623:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"view-box",props:["bodyPaddingTop","bodyPaddingBottom"],methods:{scrollTo:function(e){this.$refs.viewBoxBody.scrollTop=e},getScrollTop:function(){return this.$refs.viewBoxBody.scrollTop},getScrollBody:function(){return this.$refs.viewBoxBody}}}},624:function(e,t,i){t=e.exports=i(504)(!1),t.push([e.i,'.weui-tabbar{display:-webkit-flex;display:-webkit-box;display:flex;position:absolute;z-index:500;bottom:0;width:100%;background-color:#f7f7fa}.weui-tabbar:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #c0bfc4;color:#c0bfc4;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-tabbar__item{display:block;-webkit-flex:1;flex:1;padding:5px 0 0;font-size:0;color:#999;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon>i,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{color:#4cc0be}.weui-tabbar__icon{display:inline-block;width:27px;height:27px}.weui-tabbar__icon>i,i.weui-tabbar__icon{font-size:24px;color:#999}.weui-tabbar__icon img{width:100%;height:100%}.weui-tabbar__label{text-align:center;color:#999;font-size:10px;line-height:1.8}.weui-tab{position:relative;height:100%}.weui-tab__panel{box-sizing:border-box;height:100%;padding-bottom:50px;overflow:auto;-webkit-overflow-scrolling:touch}.weui-tab__content{display:none}',""])},625:function(e,t,i){var n=i(624);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(505)("3fed9b4a",n,!0)},626:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-tab"},[e._t("header"),e._v(" "),i("div",{ref:"viewBoxBody",staticClass:"weui-tab__panel vux-fix-safari-overflow-scrolling",style:{paddingTop:e.bodyPaddingTop,paddingBottom:e.bodyPaddingBottom},attrs:{id:"vux_view_box_body"}},[e._t("default")],2),e._v(" "),e._t("bottom")],2)},staticRenderFns:[]}},637:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(639),o=["android","ios","ios-small","bubbles","circles","crescent","dots","lines","ripple","spiral"];t.default={name:"spinner",mounted:function(){var e=this;this.$nextTick(function(){i.i(n.a)(e.$el,e.type,e.size)})},props:{type:{type:String,default:"ios"},size:String},computed:{styles:function(){if(void 0!==this.size&&"28px"!==this.size)return{width:this.size,height:this.size}},className:function(){for(var e={},t=0;t<o.length;t++)e["vux-spinner-"+o[t]]=this.type===o[t];return e}}}},638:function(e,t){for(var i=0,n=["webkit","moz"],o=0;o<n.length&&!window.requestAnimationFrame;++o)window.requestAnimationFrame=window[n[o]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[o]+"CancelAnimationFrame"]||window[n[o]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),o=Math.max(0,16-(n-i)),r=window.setTimeout(function(){e(n+o)},o);return i=n+o,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})},639:function(e,t,i){"use strict";function n(e,t,i,r,a){var s,c,u,d=document.createElement(l[e]||e);for(s in t)if("[object Array]"===Object.prototype.toString.call(t[s]))for(c=0;c<t[s].length;c++)if(t[s][c].fn)for(u=0;u<t[s][c].t;u++)n(s,t[s][c].fn(u,r),d,r);else n(s,t[s][c],d,r);else o(d,s,t[s]);a&&"28px"!==a&&o(d,"style","width: "+a+"; height: "+a),i.appendChild(d)}function o(e,t,i){e.setAttribute(l[t]||t,i)}function r(e,t){var i=e.split(";"),n=i.slice(t),o=i.slice(0,i.length-n.length);return i=n.concat(o).reverse(),i.join(";")+";"+i[0]}function a(e,t){return(e/=t/2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}var s=i(638),l=(i.n(s),{a:"animate",an:"attributeName",at:"animateTransform",c:"circle",da:"stroke-dasharray",os:"stroke-dashoffset",f:"fill",lc:"stroke-linecap",rc:"repeatCount",sw:"stroke-width",t:"transform",v:"values"}),c={v:"0,32,32;360,32,32",an:"transform",type:"rotate",rc:"indefinite",dur:"750ms"},u={sw:4,lc:"round",line:[{fn:function(e,t){return{y1:"ios"===t?17:12,y2:"ios"===t?29:20,t:"translate(32,32) rotate("+(30*e+(e<6?180:-180))+")",a:[{fn:function(){return{an:"stroke-opacity",dur:"750ms",v:r("0;.1;.15;.25;.35;.45;.55;.65;.7;.85;1",e),rc:"indefinite"}},t:1}]}},t:12}]},d={android:{c:[{sw:6,da:128,os:82,r:26,cx:32,cy:32,f:"none"}]},ios:u,"ios-small":u,bubbles:{sw:0,c:[{fn:function(e){return{cx:24*Math.cos(2*Math.PI*e/8),cy:24*Math.sin(2*Math.PI*e/8),t:"translate(32,32)",a:[{fn:function(){return{an:"r",dur:"750ms",v:r("1;2;3;4;5;6;7;8",e),rc:"indefinite"}},t:1}]}},t:8}]},circles:{c:[{fn:function(e){return{r:5,cx:24*Math.cos(2*Math.PI*e/8),cy:24*Math.sin(2*Math.PI*e/8),t:"translate(32,32)",sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:"750ms",v:r(".3;.3;.3;.4;.7;.85;.9;1",e),rc:"indefinite"}},t:1}]}},t:8}]},crescent:{c:[{sw:4,da:128,os:82,r:26,cx:32,cy:32,f:"none",at:[c]}]},dots:{c:[{fn:function(e){return{cx:16+16*e,cy:32,sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:"750ms",v:r(".5;.6;.8;1;.8;.6;.5",e),rc:"indefinite"}},t:1},{fn:function(){return{an:"r",dur:"750ms",v:r("4;5;6;5;4;3;3",e),rc:"indefinite"}},t:1}]}},t:3}]},lines:{sw:7,lc:"round",line:[{fn:function(e){return{x1:10+14*e,x2:10+14*e,a:[{fn:function(){return{an:"y1",dur:"750ms",v:r("16;18;28;18;16",e),rc:"indefinite"}},t:1},{fn:function(){return{an:"y2",dur:"750ms",v:r("48;44;36;46;48",e),rc:"indefinite"}},t:1},{fn:function(){return{an:"stroke-opacity",dur:"750ms",v:r("1;.8;.5;.4;1",e),rc:"indefinite"}},t:1}]}},t:4}]},ripple:{f:"none","fill-rule":"evenodd",sw:3,circle:[{fn:function(e){return{cx:32,cy:32,a:[{fn:function(){return{an:"r",begin:-1*e+"s",dur:"2s",v:"0;24",keyTimes:"0;1",keySplines:"0.1,0.2,0.3,1",calcMode:"spline",rc:"indefinite"}},t:1},{fn:function(){return{an:"stroke-opacity",begin:-1*e+"s",dur:"2s",v:".2;1;.2;0",rc:"indefinite"}},t:1}]}},t:2}]},spiral:{defs:[{linearGradient:[{id:"sGD",gradientUnits:"userSpaceOnUse",x1:55,y1:46,x2:2,y2:46,stop:[{offset:.1,class:"stop1"},{offset:1,class:"stop2"}]}]}],g:[{sw:4,lc:"round",f:"none",path:[{stroke:"url(#sGD)",d:"M4,32 c0,15,12,28,28,28c8,0,16-4,21-9"},{d:"M60,32 C60,16,47.464,4,32,4S4,16,4,32"}],at:[c]}]}},f={android:function(e){function t(){if(!i.stop){var e=a(Date.now()-n,650),u=1,d=0,f=188-58*e,p=182-182*e;r%2&&(u=-1,d=-64,f=128- -58*e,p=182*e);var x=[0,-101,-90,-11,-180,79,-270,-191][r];o(c,"da",Math.max(Math.min(f,188),128)),o(c,"os",Math.max(Math.min(p,182),0)),o(c,"t","scale("+u+",1) translate("+d+",0) rotate("+x+",32,32)"),s+=4.1,s>359&&(s=0),o(l,"t","rotate("+s+",32,32)"),e>=1&&(r++,r>7&&(r=0),n=Date.now()),window.requestAnimationFrame(t)}}var i=this;this.stop=!1;var n,r=0,s=0,l=e.querySelector("g"),c=e.querySelector("circle");return function(){return n=Date.now(),t(),i}}};t.a=function(e,t,i){var o,r;o=t;var a=document.createElement("div");return n("svg",{viewBox:"0 0 64 64",g:[d[o]]},a,o,i),e.innerHTML=a.innerHTML,function(){f[o]&&(r=f[o](e)())}(),e}},640:function(e,t,i){t=e.exports=i(504)(!1),t.push([e.i,".vux-spinner{stroke:#444;fill:#444;vertical-align:middle;display:inline-block}.vux-spinner,.vux-spinner svg{width:28px;height:28px}.vux-spinner.vux-spinner-inverse{stroke:#fff;fill:#fff}.vux-spinner-android{stroke:#4b8bf4}.vux-spinner-ios,.vux-spinner-ios-small{stroke:#69717d}.vux-spinner-spiral .stop1{stop-color:#fff;stop-opacity:0}.vux-spinner-spiral.vux-spinner-inverse .stop1{stop-color:#000}.vux-spinner-spiral.vux-spinner-inverse .stop2{stop-color:#fff}",""])},641:function(e,t,i){var n=i(640);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(505)("e662429e",n,!0)},642:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"vux-spinner",class:e.className,style:e.styles})},staticRenderFns:[]}},643:function(e,t,i){i(641);var n=i(50)(i(637),i(642),null,null);e.exports=n.exports},650:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=["-moz-box-","-webkit-box-",""];t.default={name:"flexbox-item",props:{span:[Number,String],order:[Number,String]},beforeMount:function(){this.bodyWidth=document.documentElement.offsetWidth},methods:{buildWidth:function(e){return"number"==typeof e?e<1?e:e/12:"string"==typeof e?e.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var e={},t="horizontal"===this.$parent.orient?"marginLeft":"marginTop";if(1*this.$parent.gutter!=0&&(e[t]=this.$parent.gutter+"px"),this.span)for(var i=0;i<n.length;i++)e[n[i]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return void 0!==this.order&&(e.order=this.order),e}},data:function(){return{bodyWidth:0}}}},651:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"flexbox",props:{gutter:{type:Number,default:8},orient:{type:String,default:"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){return{"justify-content":this.justify,"-webkit-justify-content":this.justify,"align-items":this.align,"-webkit-align-items":this.align,"flex-wrap":this.wrap,"-webkit-flex-wrap":this.wrap,"flex-direction":this.direction,"-webkit-flex-direction":this.direction}}}}},652:function(e,t,i){t=e.exports=i(504)(!1),t.push([e.i,".vux-flexbox{width:100%;text-align:left;display:-webkit-box;display:flex;display:-webkit-flex;box-align:center;-webkit-align-items:center;align-items:center}.vux-flexbox .vux-flexbox-item{flex:1;-webkit-flex:1;min-width:20px;width:0}.vux-flexbox .vux-flexbox-item:first-child{margin-left:0!important;margin-top:0!important}.vux-flex-col .vux-flex-row{box-direction:row;box-orient:horizontal;-webkit-flex-direction:row;flex-direction:row}.vux-flex-col{box-orient:vertical;-webkit-flex-direction:column;flex-direction:column}.vux-flex-col>.vux-flexbox-item{width:100%}",""])},653:function(e,t,i){var n=i(652);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(505)("e72d70cc",n,!0)},654:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"vux-flexbox",class:{"vux-flex-col":"vertical"===e.orient,"vux-flex-row":"horizontal"===e.orient},style:e.styles},[e._t("default")],2)},staticRenderFns:[]}},655:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"vux-flexbox-item",style:e.style},[e._t("default")],2)},staticRenderFns:[]}},656:function(e,t,i){var n=i(50)(i(650),i(655),null,null);e.exports=n.exports},657:function(e,t,i){i(653);var n=i(50)(i(651),i(654),null,null);e.exports=n.exports},667:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(616);t.default={name:"card",props:{header:Object,footer:Object},methods:{onClickFooter:function(){this.footer.link&&i.i(n.a)(this.footer.link,this.$router),this.$emit("on-click-footer")}}}},668:function(e,t,i){t=e.exports=i(504)(!1),t.push([e.i,'.weui-cells{margin-top:1.25em;background-color:#fff;line-height:1.5;font-size:16px;overflow:hidden;position:relative}.weui-cells:before{top:0;border-top:1px solid #d9d9d9;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-cells:after,.weui-cells:before{content:" ";position:absolute;left:0;right:0;height:1px;color:#d9d9d9}.weui-cells:after{bottom:0;border-bottom:1px solid #d9d9d9;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-cells__title{margin-top:.77em;margin-bottom:.3em;padding-left:15px;padding-right:15px;color:#999;font-size:14px}.weui-cells__title+.weui-cells{margin-top:0}.weui-cells__tips{margin-top:.3em;color:#999;padding-left:15px;padding-right:15px;font-size:14px}.weui-cell{padding:10px 15px;position:relative;display:-webkit-flex;display:-webkit-box;display:flex;-webkit-align-items:center;align-items:center}.weui-cell:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d9d9d9;color:#d9d9d9;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5);left:15px}.weui-cell:first-child:before{display:none}.weui-cell_primary{-webkit-align-items:flex-start;align-items:flex-start}.weui-cell__bd{-webkit-flex:1;flex:1}.weui-cell__ft{text-align:right;color:#999}.vux-cell-justify{height:1.5em}.vux-cell-justify.vux-cell-justify:after{content:".";display:inline-block;width:100%;overflow:hidden;height:0}.weui-cell_access{-webkit-tap-highlight-color:rgba(0,0,0,0);color:inherit}.weui-cell_access:active{background-color:#ececec}.weui-cell_access .weui-cell__ft{padding-right:13px;position:relative}.weui-cell_access .weui-cell__ft:after{content:" ";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:2px}.weui-cell_link{color:#586c94;font-size:14px}.weui-cell_link:first-child:before{display:block}.weui-cell_access.vux-cell-box{padding-right:13px;position:relative}.weui-cell_access.vux-cell-box:after{content:" ";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:17px}.weui-panel{background-color:#fff;margin-top:10px;position:relative;overflow:hidden}.weui-panel:first-child{margin-top:0}.weui-panel:before{top:0;border-top:1px solid #e5e5e5;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-panel:after,.weui-panel:before{content:" ";position:absolute;left:0;right:0;height:1px;color:#e5e5e5}.weui-panel:after{bottom:0;border-bottom:1px solid #e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-panel__hd{padding:14px 15px 10px;color:#999;font-size:13px;position:relative}.weui-panel__hd:after{content:" ";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #e5e5e5;color:#e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5);left:15px}.weui-panel .weui-cell:first-child:before{display:block}',""])},669:function(e,t,i){var n=i(668);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(505)("01f4b4ce",n,!0)},670:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-panel weui-panel_access"},[e.header&&e.header.title?i("div",{staticClass:"weui-panel__hd",domProps:{innerHTML:e._s(e.header.title)},on:{click:function(t){e.$emit("on-click-header")}}}):e._e(),e._v(" "),e._t("header"),e._v(" "),i("div",{staticClass:"weui-panel__bd"},[i("div",{staticClass:"vux-card-content"},[e._t("content")],2)]),e._v(" "),i("div",{staticClass:"weui-panel__ft"},[e.footer&&e.footer.title?i("a",{staticClass:"weui-cell weui-cell_access weui-cell_link",attrs:{href:"javascript:"},on:{click:e.onClickFooter}},[i("div",{staticClass:"weui-cell__bd",domProps:{innerHTML:e._s(e.footer.title)}})]):e._e()]),e._v(" "),e._t("footer")],2)},staticRenderFns:[]}},671:function(e,t,i){i(669);var n=i(50)(i(667),i(670),null,null);e.exports=n.exports},791:function(e,t,i){"use strict";i.d(t,"a",function(){return n}),i.d(t,"c",function(){return o}),i.d(t,"d",function(){return r}),i.d(t,"b",function(){return a});var n="EXAMPLE",o="COLLECT_ADD",r="COLLECT_REMOVE",a="EXAMPLE_CLEAR"},815:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"getExample",function(){return l}),i.d(t,"collectRemove",function(){return c}),i.d(t,"collectAdd",function(){return u}),i.d(t,"exampleClear",function(){return d});var n=i(130),o=i.n(n),r=i(52),a=i(197),s=i(791),l=function(e){var t=e.rootState,n=e.commit;return new o.a(function(e,o){i.i(a.a)({method:"get",url:"exerciseList",params:{ids:[t.route.params.id],subject_id:t.route.params.subjectId,token:t.common.user.token}}).then(function(t){n(s.a,t.data.data),e(t)})})},c=function(e){var t=e.rootState,n=e.commit,l=e.dispatch;return new o.a(function(e,o){i.i(a.a)({method:"post",url:"collect/update",data:{id:t.route.params.id,subject_id:t.route.params.subjectId,handleType:"cancel",token:t.common.user.token}}).then(function(i){r.default.$vux.toast.show({text:"取消收藏成功",type:"success",time:600,isShowMask:!0}),n(s.d),t.hasOwnProperty("collect")&&l("clearCollect"),e(i)})})},u=function(e){var t=e.rootState,n=e.commit,l=e.dispatch;return new o.a(function(e,o){i.i(a.a)({method:"post",url:"collect/update",data:{id:t.route.params.id,subject_id:t.route.params.subjectId,handleType:"add",token:t.common.user.token}}).then(function(i){r.default.$vux.toast.show({text:"收藏成功",type:"success",time:600,isShowMask:!0}),n(s.c),console.log(t),t.hasOwnProperty("collect")&&l("clearCollect"),e(i)})})},d=function(e){(0,e.commit)(s.b)}},816:function(e,t,i){"use strict";var n,o=i(198),r=i.n(o),a=i(815),s=i(791),l={example:[]},c={Example:function(e){return e.example}},u=(n={},r()(n,s.a,function(e,t){e.example=t}),r()(n,s.b,function(e,t){e.example=[]}),r()(n,s.c,function(e){e.example.detail[0].collectTime=1}),r()(n,s.d,function(e){e.example.detail[0].collectTime=0}),n);t.a={mutations:u,getters:c,actions:a,state:l}},933:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(129),o=i.n(n),r=i(621),a=i.n(r),s=i(671),l=i.n(s),c=i(622),u=i.n(c),d=i(643),f=i.n(d),p=i(657),x=i.n(p),h=i(656),m=i.n(h),v=i(196),b=i(86),w=i(816);t.default={name:"example",components:{XHeader:a.a,Card:l.a,ViewBox:u.a,Spinner:f.a,Flexbox:x.a,FlexboxItem:m.a},computed:o()({},i.i(v.a)(["Example","Params"])),data:function(){return{loading:!0}},methods:o()({},i.i(v.b)(["getExample","exampleClear","collectRemove","collectAdd"]),{_getDate:function(){var e=this;this.loading=!0,this.getExample().then(function(){e.loading=!1}).catch(function(){e.loading=!1})},_collect:function(e){0===Number(e)?this.collectAdd():this.collectRemove()}}),beforeRouteEnter:function(e,t,i){"correct"!==t.name?i(function(e){e.exampleClear(),e._getDate()}):i()},beforeCreate:function(){b.a.registerModule("example",o()({},w.a))}}}});