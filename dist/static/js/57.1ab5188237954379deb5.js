webpackJsonp([57],{1039:function(t,e,n){e=t.exports=n(504)(!1),e.push([t.i,".table[data-v-9e8f9f38]{padding:10px 0;background:#fff}.table_font[data-v-9e8f9f38],.table_number[data-v-9e8f9f38]{font-size:.8rem;text-align:center}.table_number[data-v-9e8f9f38]{color:#ff9800}.table_into[data-v-9e8f9f38]{display:inline-block;transform:rotate(45deg);-webkit-transform:rotate(45deg);height:6px;width:6px;border-width:3px 3px 0 0;border-color:#ccc;border-style:solid;margin-left:5px;transition-duration:.2s}",""])},1070:function(t,e,n){var i=n(1039);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(505)("be981c62",i,!0)},1178:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("selectBook",{attrs:{list:t.textList},on:{"on-change":t._currentTextbook}}),t._v(" "),t.loading||t.error?t._e():n("div",{staticClass:"table vux-1px-t vux-1px-b"},[n("flexbox",{staticStyle:{padding:"0 0 10px"},attrs:{gutter:0,align:"center"}},[n("flexbox-item",{attrs:{span:2/9}}),t._v(" "),n("flexbox-item",{attrs:{span:2/9}},[n("div",{staticClass:"table_font"},[t._v("记错题")])]),t._v(" "),n("flexbox-item",{attrs:{span:2/9}},[n("div",{staticClass:"table_font"},[t._v("错题数")])]),t._v(" "),n("flexbox-item",{attrs:{span:2/9}},[n("div",{staticClass:"table_font"},[t._v("正确率")])])],1),t._v(" "),t._l(t.StatisticsPhysics,function(e){return n("flexbox",{key:e.chapterId,staticStyle:{padding:".25rem 0"},attrs:{gutter:0,align:"center"},nativeOn:{click:function(n){t._toStatistics(e)}}},[n("flexbox-item",{attrs:{span:2/9}},[n("div",{staticClass:"table_font"},[t._v(t._s(e.chapterName))])]),t._v(" "),n("flexbox-item",{attrs:{span:2/9}},[n("div",{staticClass:"table_number"},[t._v(t._s(e.remCount))])]),t._v(" "),n("flexbox-item",{attrs:{span:2/9}},[n("div",{staticClass:"table_number"},[t._v(t._s(e.errorCount))])]),t._v(" "),n("flexbox-item",{attrs:{span:2/9}},[n("div",{staticClass:"table_number"},[t._v(t._s(e.correctPercent))])]),t._v(" "),n("flexbox-item",[n("b",{staticClass:"table_into"})])],1)})],2),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[t.loading?n("spinner",{attrs:{type:"ripple"}}):t._e(),t._v(" "),t.error?n("p",{staticStyle:{color:"#4cc0be","font-size":".7rem",padding:".5rem 0"},on:{click:t._getData}},[t._v("点我重新加载")]):t._e()],1)],1)},staticRenderFns:[]}},591:function(t,e,n){n(1070);var i=n(50)(n(988),n(1178),"data-v-9e8f9f38",null);t.exports=i.exports},617:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(195),r=n.n(i);e.default={name:"x-header",props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},beforeMount:function(){this.$slots["overwrite-title"]&&(this.shouldOverWriteTitle=!0)},computed:{_leftOptions:function(){return r()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}},data:function(){return{shouldOverWriteTitle:!1}}}},618:function(t,e,n){e=t.exports=n(504)(!1),e.push([t.i,'.vux-header{position:relative;padding:3px 0;box-sizing:border-box;background-color:#4cc0be}.vux-header .vux-header-title{line-height:40px;text-align:center;font-size:18px;font-weight:400;color:#fff}.vux-header-title-area,.vux-header .vux-header-title{margin:0 88px;height:40px;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vux-header .vux-header-title>span{display:inline-block}.vux-header .vux-header-left,.vux-header .vux-header-right{position:absolute;top:14px;display:block;font-size:14px;line-height:21px;color:#fff}.vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button{float:left;margin-right:8px;color:#fff}.vux-header .vux-header-left a:active,.vux-header .vux-header-left button:active,.vux-header .vux-header-right a:active,.vux-header .vux-header-right button:active{opacity:.5}.vux-header .vux-header-left{left:18px}.vux-header .vux-header-left .vux-header-back{padding-left:16px}.vux-header .vux-header-left .left-arrow{position:absolute;width:30px;height:30px;top:-5px;left:-5px}.vux-header .vux-header-left .left-arrow:before{content:"";position:absolute;width:12px;height:12px;border:1px solid #fff;border-width:1px 0 0 1px;-webkit-transform:rotate(315deg);transform:rotate(315deg);top:8px;left:7px}.vux-header .vux-header-right{right:15px}.vux-header .vux-header-right a,.vux-header .vux-header-right button{margin-left:8px;margin-right:0}.vux-header .vux-header-right .vux-header-more:after{content:"\\2022   \\2022   \\2022   ";font-size:16px}.vux-header-fade-in-right-enter-active{-webkit-animation:fadeinR .5s;animation:fadeinR .5s}.vux-header-fade-in-left-enter-active{-webkit-animation:fadeinL .5s;animation:fadeinL .5s}@-webkit-keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}',""])},619:function(t,e,n){var i=n(618);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(505)("bb31c83a",i,!0)},620:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-header"},[n("div",{staticClass:"vux-header-left"},[t._t("overwrite-left",[n("transition",{attrs:{name:t.transition}},[n("a",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault"))return null},t.onClickBack]}},[t._v(t._s(void 0===t._leftOptions.backText?"返回":t._leftOptions.backText))])]),t._v(" "),n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:t.onClickBack}})])]),t._v(" "),t._t("left")],2),t._v(" "),t.shouldOverWriteTitle?t._e():n("h1",{staticClass:"vux-header-title",on:{click:function(e){t.$emit("on-click-title")}}},[t._t("default",[n("transition",{attrs:{name:t.transition}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])])],2),t._v(" "),t.shouldOverWriteTitle?n("div",{staticClass:"vux-header-title-area"},[t._t("overwrite-title")],2):t._e(),t._v(" "),n("div",{staticClass:"vux-header-right"},[t.rightOptions.showMore?n("a",{staticClass:"vux-header-more",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault"))return null},function(e){t.$emit("on-click-more")}]}}):t._e(),t._v(" "),t._t("right")],2)])},staticRenderFns:[]}},621:function(t,e,n){n(619);var i=n(50)(n(617),n(620),null,null);t.exports=i.exports},637:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(639),r=["android","ios","ios-small","bubbles","circles","crescent","dots","lines","ripple","spiral"];e.default={name:"spinner",mounted:function(){var t=this;this.$nextTick(function(){n.i(i.a)(t.$el,t.type,t.size)})},props:{type:{type:String,default:"ios"},size:String},computed:{styles:function(){if(void 0!==this.size&&"28px"!==this.size)return{width:this.size,height:this.size}},className:function(){for(var t={},e=0;e<r.length;e++)t["vux-spinner-"+r[e]]=this.type===r[e];return t}}}},638:function(t,e){for(var n=0,i=["webkit","moz"],r=0;r<i.length&&!window.requestAnimationFrame;++r)window.requestAnimationFrame=window[i[r]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[r]+"CancelAnimationFrame"]||window[i[r]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var i=(new Date).getTime(),r=Math.max(0,16-(i-n)),a=window.setTimeout(function(){t(i+r)},r);return n=i+r,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})},639:function(t,e,n){"use strict";function i(t,e,n,a,o){var s,c,u,f=document.createElement(l[t]||t);for(s in e)if("[object Array]"===Object.prototype.toString.call(e[s]))for(c=0;c<e[s].length;c++)if(e[s][c].fn)for(u=0;u<e[s][c].t;u++)i(s,e[s][c].fn(u,a),f,a);else i(s,e[s][c],f,a);else r(f,s,e[s]);o&&"28px"!==o&&r(f,"style","width: "+o+"; height: "+o),n.appendChild(f)}function r(t,e,n){t.setAttribute(l[e]||e,n)}function a(t,e){var n=t.split(";"),i=n.slice(e),r=n.slice(0,n.length-i.length);return n=i.concat(r).reverse(),n.join(";")+";"+n[0]}function o(t,e){return(t/=e/2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}var s=n(638),l=(n.n(s),{a:"animate",an:"attributeName",at:"animateTransform",c:"circle",da:"stroke-dasharray",os:"stroke-dashoffset",f:"fill",lc:"stroke-linecap",rc:"repeatCount",sw:"stroke-width",t:"transform",v:"values"}),c={v:"0,32,32;360,32,32",an:"transform",type:"rotate",rc:"indefinite",dur:"750ms"},u={sw:4,lc:"round",line:[{fn:function(t,e){return{y1:"ios"===e?17:12,y2:"ios"===e?29:20,t:"translate(32,32) rotate("+(30*t+(t<6?180:-180))+")",a:[{fn:function(){return{an:"stroke-opacity",dur:"750ms",v:a("0;.1;.15;.25;.35;.45;.55;.65;.7;.85;1",t),rc:"indefinite"}},t:1}]}},t:12}]},f={android:{c:[{sw:6,da:128,os:82,r:26,cx:32,cy:32,f:"none"}]},ios:u,"ios-small":u,bubbles:{sw:0,c:[{fn:function(t){return{cx:24*Math.cos(2*Math.PI*t/8),cy:24*Math.sin(2*Math.PI*t/8),t:"translate(32,32)",a:[{fn:function(){return{an:"r",dur:"750ms",v:a("1;2;3;4;5;6;7;8",t),rc:"indefinite"}},t:1}]}},t:8}]},circles:{c:[{fn:function(t){return{r:5,cx:24*Math.cos(2*Math.PI*t/8),cy:24*Math.sin(2*Math.PI*t/8),t:"translate(32,32)",sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:"750ms",v:a(".3;.3;.3;.4;.7;.85;.9;1",t),rc:"indefinite"}},t:1}]}},t:8}]},crescent:{c:[{sw:4,da:128,os:82,r:26,cx:32,cy:32,f:"none",at:[c]}]},dots:{c:[{fn:function(t){return{cx:16+16*t,cy:32,sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:"750ms",v:a(".5;.6;.8;1;.8;.6;.5",t),rc:"indefinite"}},t:1},{fn:function(){return{an:"r",dur:"750ms",v:a("4;5;6;5;4;3;3",t),rc:"indefinite"}},t:1}]}},t:3}]},lines:{sw:7,lc:"round",line:[{fn:function(t){return{x1:10+14*t,x2:10+14*t,a:[{fn:function(){return{an:"y1",dur:"750ms",v:a("16;18;28;18;16",t),rc:"indefinite"}},t:1},{fn:function(){return{an:"y2",dur:"750ms",v:a("48;44;36;46;48",t),rc:"indefinite"}},t:1},{fn:function(){return{an:"stroke-opacity",dur:"750ms",v:a("1;.8;.5;.4;1",t),rc:"indefinite"}},t:1}]}},t:4}]},ripple:{f:"none","fill-rule":"evenodd",sw:3,circle:[{fn:function(t){return{cx:32,cy:32,a:[{fn:function(){return{an:"r",begin:-1*t+"s",dur:"2s",v:"0;24",keyTimes:"0;1",keySplines:"0.1,0.2,0.3,1",calcMode:"spline",rc:"indefinite"}},t:1},{fn:function(){return{an:"stroke-opacity",begin:-1*t+"s",dur:"2s",v:".2;1;.2;0",rc:"indefinite"}},t:1}]}},t:2}]},spiral:{defs:[{linearGradient:[{id:"sGD",gradientUnits:"userSpaceOnUse",x1:55,y1:46,x2:2,y2:46,stop:[{offset:.1,class:"stop1"},{offset:1,class:"stop2"}]}]}],g:[{sw:4,lc:"round",f:"none",path:[{stroke:"url(#sGD)",d:"M4,32 c0,15,12,28,28,28c8,0,16-4,21-9"},{d:"M60,32 C60,16,47.464,4,32,4S4,16,4,32"}],at:[c]}]}},d={android:function(t){function e(){if(!n.stop){var t=o(Date.now()-i,650),u=1,f=0,d=188-58*t,p=182-182*t;a%2&&(u=-1,f=-64,d=128- -58*t,p=182*t);var x=[0,-101,-90,-11,-180,79,-270,-191][a];r(c,"da",Math.max(Math.min(d,188),128)),r(c,"os",Math.max(Math.min(p,182),0)),r(c,"t","scale("+u+",1) translate("+f+",0) rotate("+x+",32,32)"),s+=4.1,s>359&&(s=0),r(l,"t","rotate("+s+",32,32)"),t>=1&&(a++,a>7&&(a=0),i=Date.now()),window.requestAnimationFrame(e)}}var n=this;this.stop=!1;var i,a=0,s=0,l=t.querySelector("g"),c=t.querySelector("circle");return function(){return i=Date.now(),e(),n}}};e.a=function(t,e,n){var r,a;r=e;var o=document.createElement("div");return i("svg",{viewBox:"0 0 64 64",g:[f[r]]},o,r,n),t.innerHTML=o.innerHTML,function(){d[r]&&(a=d[r](t)())}(),t}},640:function(t,e,n){e=t.exports=n(504)(!1),e.push([t.i,".vux-spinner{stroke:#444;fill:#444;vertical-align:middle;display:inline-block}.vux-spinner,.vux-spinner svg{width:28px;height:28px}.vux-spinner.vux-spinner-inverse{stroke:#fff;fill:#fff}.vux-spinner-android{stroke:#4b8bf4}.vux-spinner-ios,.vux-spinner-ios-small{stroke:#69717d}.vux-spinner-spiral .stop1{stop-color:#fff;stop-opacity:0}.vux-spinner-spiral.vux-spinner-inverse .stop1{stop-color:#000}.vux-spinner-spiral.vux-spinner-inverse .stop2{stop-color:#fff}",""])},641:function(t,e,n){var i=n(640);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(505)("e662429e",i,!0)},642:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"vux-spinner",class:t.className,style:t.styles})},staticRenderFns:[]}},643:function(t,e,n){n(641);var i=n(50)(n(637),n(642),null,null);t.exports=i.exports},650:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=["-moz-box-","-webkit-box-",""];e.default={name:"flexbox-item",props:{span:[Number,String],order:[Number,String]},beforeMount:function(){this.bodyWidth=document.documentElement.offsetWidth},methods:{buildWidth:function(t){return"number"==typeof t?t<1?t:t/12:"string"==typeof t?t.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var t={},e="horizontal"===this.$parent.orient?"marginLeft":"marginTop";if(1*this.$parent.gutter!=0&&(t[e]=this.$parent.gutter+"px"),this.span)for(var n=0;n<i.length;n++)t[i[n]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return void 0!==this.order&&(t.order=this.order),t}},data:function(){return{bodyWidth:0}}}},651:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"flexbox",props:{gutter:{type:Number,default:8},orient:{type:String,default:"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){return{"justify-content":this.justify,"-webkit-justify-content":this.justify,"align-items":this.align,"-webkit-align-items":this.align,"flex-wrap":this.wrap,"-webkit-flex-wrap":this.wrap,"flex-direction":this.direction,"-webkit-flex-direction":this.direction}}}}},652:function(t,e,n){e=t.exports=n(504)(!1),e.push([t.i,".vux-flexbox{width:100%;text-align:left;display:-webkit-box;display:flex;display:-webkit-flex;box-align:center;-webkit-align-items:center;align-items:center}.vux-flexbox .vux-flexbox-item{flex:1;-webkit-flex:1;min-width:20px;width:0}.vux-flexbox .vux-flexbox-item:first-child{margin-left:0!important;margin-top:0!important}.vux-flex-col .vux-flex-row{box-direction:row;box-orient:horizontal;-webkit-flex-direction:row;flex-direction:row}.vux-flex-col{box-orient:vertical;-webkit-flex-direction:column;flex-direction:column}.vux-flex-col>.vux-flexbox-item{width:100%}",""])},653:function(t,e,n){var i=n(652);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(505)("e72d70cc",i,!0)},654:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-flexbox",class:{"vux-flex-col":"vertical"===t.orient,"vux-flex-row":"horizontal"===t.orient},style:t.styles},[t._t("default")],2)},staticRenderFns:[]}},655:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-flexbox-item",style:t.style},[t._t("default")],2)},staticRenderFns:[]}},656:function(t,e,n){var i=n(50)(n(650),n(655),null,null);t.exports=i.exports},657:function(t,e,n){n(653);var i=n(50)(n(651),n(654),null,null);t.exports=i.exports},724:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"gnb_textbook",props:{value:{type:[String,Number,Object,Boolean]},list:{type:Array}},data:function(){return{name:this.list[0].name,currentValue:this.value}},watch:{currentValue:function(t){var e=this;this.list.forEach(function(n){n.id.toString()===t.toString()&&(e.name=n.name)}),this.$emit("on-change",t),this.$emit("input",t)}}}},726:function(t,e,n){e=t.exports=n(504)(!1),e.push([t.i,".gnbCompoents_selectBook[data-v-78510ab8]{position:relative;height:35px;text-align:center;width:100%}.gnbCompoents_selectBook p[data-v-78510ab8]{font-size:.8rem;color:#4cc0be}.gnbCompoents_selectBook select[data-v-78510ab8]{-webkit-appearance:none;border:0;outline:0;background-color:transparent;text-align:center;font-size:inherit;width:100%;height:44px;line-height:44px;position:relative;z-index:1;top:-40px;color:#fff;opacity:0}.gnbCompoents_selectBook .header_title_select_arrow[data-v-78510ab8]{display:inline-block;transform:rotate(135deg);-webkit-transform:rotate(135deg);height:6px;width:6px;border-width:2px 2px 0 0;border-color:#4cc0be;border-style:solid;margin-left:5px;transition-duration:.2s}",""])},729:function(t,e,n){var i=n(726);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(505)("2283994c",i,!0)},732:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gnbCompoents_selectBook"},[n("p",[t._v(t._s(t.name)+"\n    "),n("b",{staticClass:"header_title_select_arrow"})]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.currentValue=e.target.multiple?n:n[0]}}},[t._l(t.list,function(e,i){return[n("option",{key:i,domProps:{value:e.id}},[t._v(t._s(e.name))])]})],2)])},staticRenderFns:[]}},734:function(t,e,n){n(729);var i=n(50)(n(724),n(732),"data-v-78510ab8",null);t.exports=i.exports},988:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(129),r=n.n(i),a=n(621),o=n.n(a),s=n(643),l=n.n(s),c=n(657),u=n.n(c),f=n(656),d=n.n(f),p=n(196),x=n(734),h=n.n(x);e.default={name:"physics",components:{XHeader:o.a,Spinner:l.a,selectBook:h.a,Flexbox:u.a,FlexboxItem:d.a},computed:r()({},n.i(p.a)(["StatisticsPhysics"]),{textList:function(){return this.$store.getters.User.textbook.physics}}),data:function(){return{error:!1,loading:!0,textbookId:""}},methods:r()({},n.i(p.b)(["getStatistics","clearStatistics","clearStatisticsAssemble"]),{_toStatistics:function(t){this.clearStatisticsAssemble({type:"remember"}),this.clearStatisticsAssemble({type:"camera"}),this.clearStatisticsAssemble({type:"good"}),this.$router.push({name:"statisticsRemember",params:{subject:"physics",chapterId:t.chapterId,name:t.chapterName}})},_getData:function(){var t=this;this.loading=!0,this.error=!1,this.getStatistics({textbookId:this.textbookId||this.textList[0].id}).then(function(){t.loading=!1}).catch(function(){t.loading=!1,t.error=!0})},_currentTextbook:function(t){this.textbookId=t,this.clearStatistics(),this._getData()}}),beforeRouteEnter:function(t,e,n){n(function(t){})},beforeRouteLeave:function(t,e,n){n()},mounted:function(){this._getData()}}}});