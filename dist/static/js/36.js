webpackJsonp([36,57],{6:function(e,t,o){!function(t,o){e.exports=o()}(this,function(){return function(e){function t(i){if(o[i])return o[i].exports;var n=o[i]={exports:{},id:i,loaded:!1};return e[i].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="/",t(0)}([function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(5),p=i(n);t.default=p.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("infinite-loading",p.default)},function(e,t){"use strict";function o(e){return"BODY"===e.tagName?window:["scroll","auto"].indexOf(getComputedStyle(e).overflowY)>-1?e:o(e.parentNode)}function i(e){var t=getComputedStyle(e===window?document.body:e),o=e===window?window.innerHeight:parseInt(t.height,10),i=e===window?document.body.scrollHeight:e.scrollHeight,n=isNaN(e.scrollTop)?e.pageYOffset:e.scrollTop,p=parseInt(t.paddingTop,10),s=parseInt(t.paddingBottom,10);return i-o-n-p-s}Object.defineProperty(t,"__esModule",{value:!0});var n={bubbles:"loading-bubbles",circles:"loading-circles",default:"loading-default",spiral:"loading-spiral",waveDots:"loading-wave-dots"};t.default={data:function(){return{scrollParent:null,scrollHandler:null,isLoading:!1,isComplete:!1,isFirstLoad:!0}},computed:{spinnerType:function(){return n[this.spinner]||n.default}},props:{distance:{type:Number,default:100},onInfinite:{type:Function,required:!0},spinner:String},ready:function(){this.scrollParent=o(this.$el),this.scrollHandler=function(){var e=i(this.scrollParent);!this.isLoading&&e<=this.distance&&(this.isLoading=!0,this.onInfinite.call())}.bind(this),setTimeout(this.scrollHandler,1),this.scrollParent.addEventListener("scroll",this.scrollHandler)},events:{"$InfiniteLoading:loaded":function(){this.isLoading=!1,this.isFirstLoad=!1},"$InfiniteLoading:complete":function(){this.isLoading=!1,this.isComplete=!0,this.scrollParent.removeEventListener("scroll",this.scrollHandler)},"$InfiniteLoading:reset":function(){this.isLoading=!1,this.isComplete=!1,this.isFirstLoad=!0,this.scrollParent.addEventListener("scroll",this.scrollHandler),setTimeout(this.scrollHandler,1)}},destroyed:function(){this.isComplete||this.scrollParent.removeEventListener("scroll",this.scrollHandler)}}},function(e,t,o){t=e.exports=o(3)(),t.push([e.id,".loading-wave-dots[_v-34e13b62]{position:relative}.loading-wave-dots[_v-34e13b62]:before{content:'';position:absolute;top:50%;left:50%;margin-left:-4px;margin-top:-4px;width:8px;height:8px;background-color:#bbb;border-radius:50%;animation:linear loading-wave-dots 2.8s infinite}@keyframes loading-wave-dots{0%{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb}5%{box-shadow:-32px -4px 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb;transform:translateY(0)}10%{box-shadow:-32px -6px 0 #999,-16px -4px 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb;transform:translateY(0)}15%{box-shadow:-32px 2px 0 #bbb,-16px -2px 0 #999,16px 4px 0 #bbb,32px 4px 0 #bbb;transform:translateY(-4px);background-color:#bbb}20%{box-shadow:-32px 6px 0 #bbb,-16px 4px 0 #bbb,16px 2px 0 #bbb,32px 6px 0 #bbb;transform:translateY(-6px);background-color:#999}25%{box-shadow:-32px 2px 0 #bbb,-16px 2px 0 #bbb,16px -4px 0 #999,32px -2px 0 #bbb;transform:translateY(-2px);background-color:#bbb}30%{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px -2px 0 #bbb,32px -6px 0 #999;transform:translateY(0)}35%{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px -2px 0 #bbb}40%{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb}to{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb}}.loading-circles[_v-34e13b62]{position:relative}.loading-circles[_v-34e13b62]:before{content:'';position:absolute;left:50%;top:50%;margin-top:-2.5px;margin-left:-2.5px;width:5px;height:5px;border-radius:50%;animation:linear loading-circles .75s infinite}@keyframes loading-circles{0%{box-shadow:0 -12px 0 #505050,8.52px -8.52px 0 #646464,12px 0 0 #797979,8.52px 8.52px 0 #8d8d8d,0 12px 0 #a2a2a2,-8.52px 8.52px 0 #b6b6b6,-12px 0 0 #cacaca,-8.52px -8.52px 0 #dfdfdf}12.5%{box-shadow:0 -12px 0 #dfdfdf,8.52px -8.52px 0 #505050,12px 0 0 #646464,8.52px 8.52px 0 #797979,0 12px 0 #8d8d8d,-8.52px 8.52px 0 #a2a2a2,-12px 0 0 #b6b6b6,-8.52px -8.52px 0 #cacaca}25%{box-shadow:0 -12px 0 #cacaca,8.52px -8.52px 0 #dfdfdf,12px 0 0 #505050,8.52px 8.52px 0 #646464,0 12px 0 #797979,-8.52px 8.52px 0 #8d8d8d,-12px 0 0 #a2a2a2,-8.52px -8.52px 0 #b6b6b6}37.5%{box-shadow:0 -12px 0 #b6b6b6,8.52px -8.52px 0 #cacaca,12px 0 0 #dfdfdf,8.52px 8.52px 0 #505050,0 12px 0 #646464,-8.52px 8.52px 0 #797979,-12px 0 0 #8d8d8d,-8.52px -8.52px 0 #a2a2a2}50%{box-shadow:0 -12px 0 #a2a2a2,8.52px -8.52px 0 #b6b6b6,12px 0 0 #cacaca,8.52px 8.52px 0 #dfdfdf,0 12px 0 #505050,-8.52px 8.52px 0 #646464,-12px 0 0 #797979,-8.52px -8.52px 0 #8d8d8d}62.5%{box-shadow:0 -12px 0 #8d8d8d,8.52px -8.52px 0 #a2a2a2,12px 0 0 #b6b6b6,8.52px 8.52px 0 #cacaca,0 12px 0 #dfdfdf,-8.52px 8.52px 0 #505050,-12px 0 0 #646464,-8.52px -8.52px 0 #797979}75%{box-shadow:0 -12px 0 #797979,8.52px -8.52px 0 #8d8d8d,12px 0 0 #a2a2a2,8.52px 8.52px 0 #b6b6b6,0 12px 0 #cacaca,-8.52px 8.52px 0 #dfdfdf,-12px 0 0 #505050,-8.52px -8.52px 0 #646464}87.5%{box-shadow:0 -12px 0 #646464,8.52px -8.52px 0 #797979,12px 0 0 #8d8d8d,8.52px 8.52px 0 #a2a2a2,0 12px 0 #b6b6b6,-8.52px 8.52px 0 #cacaca,-12px 0 0 #dfdfdf,-8.52px -8.52px 0 #505050}to{box-shadow:0 -12px 0 #505050,8.52px -8.52px 0 #646464,12px 0 0 #797979,8.52px 8.52px 0 #8d8d8d,0 12px 0 #a2a2a2,-8.52px 8.52px 0 #b6b6b6,-12px 0 0 #cacaca,-8.52px -8.52px 0 #dfdfdf}}.loading-bubbles[_v-34e13b62]{position:relative}.loading-bubbles[_v-34e13b62]:before{content:'';position:absolute;left:50%;top:50%;margin-top:-.5px;margin-left:-.5px;width:1px;height:1px;border-radius:50%;animation:linear loading-bubbles .85s infinite}@keyframes loading-bubbles{0%{box-shadow:0 -12px 0 .4px #666,8.52px -8.52px 0 .8px #666,12px 0 0 1.2px #666,8.52px 8.52px 0 1.6px #666,0 12px 0 2px #666,-8.52px 8.52px 0 2.4px #666,-12px 0 0 2.8px #666,-8.52px -8.52px 0 3.2px #666}12.5%{box-shadow:0 -12px 0 3.2px #666,8.52px -8.52px 0 .4px #666,12px 0 0 .8px #666,8.52px 8.52px 0 1.2px #666,0 12px 0 1.6px #666,-8.52px 8.52px 0 2px #666,-12px 0 0 2.4px #666,-8.52px -8.52px 0 2.8px #666}25%{box-shadow:0 -12px 0 2.8px #666,8.52px -8.52px 0 3.2px #666,12px 0 0 .4px #666,8.52px 8.52px 0 .8px #666,0 12px 0 1.2px #666,-8.52px 8.52px 0 1.6px #666,-12px 0 0 2px #666,-8.52px -8.52px 0 2.4px #666}37.5%{box-shadow:0 -12px 0 2.4px #666,8.52px -8.52px 0 2.8px #666,12px 0 0 3.2px #666,8.52px 8.52px 0 .4px #666,0 12px 0 .8px #666,-8.52px 8.52px 0 1.2px #666,-12px 0 0 1.6px #666,-8.52px -8.52px 0 2px #666}50%{box-shadow:0 -12px 0 2px #666,8.52px -8.52px 0 2.4px #666,12px 0 0 2.8px #666,8.52px 8.52px 0 3.2px #666,0 12px 0 .4px #666,-8.52px 8.52px 0 .8px #666,-12px 0 0 1.2px #666,-8.52px -8.52px 0 1.6px #666}62.5%{box-shadow:0 -12px 0 1.6px #666,8.52px -8.52px 0 2px #666,12px 0 0 2.4px #666,8.52px 8.52px 0 2.8px #666,0 12px 0 3.2px #666,-8.52px 8.52px 0 .4px #666,-12px 0 0 .8px #666,-8.52px -8.52px 0 1.2px #666}75%{box-shadow:0 -12px 0 1.2px #666,8.52px -8.52px 0 1.6px #666,12px 0 0 2px #666,8.52px 8.52px 0 2.4px #666,0 12px 0 2.8px #666,-8.52px 8.52px 0 3.2px #666,-12px 0 0 .4px #666,-8.52px -8.52px 0 .8px #666}87.5%{box-shadow:0 -12px 0 .8px #666,8.52px -8.52px 0 1.2px #666,12px 0 0 1.6px #666,8.52px 8.52px 0 2px #666,0 12px 0 2.4px #666,-8.52px 8.52px 0 2.8px #666,-12px 0 0 3.2px #666,-8.52px -8.52px 0 .4px #666}to{box-shadow:0 -12px 0 .4px #666,8.52px -8.52px 0 .8px #666,12px 0 0 1.2px #666,8.52px 8.52px 0 1.6px #666,0 12px 0 2px #666,-8.52px 8.52px 0 2.4px #666,-12px 0 0 2.8px #666,-8.52px -8.52px 0 3.2px #666}}.loading-default[_v-34e13b62]{position:relative;border:1px solid #999;animation:ease loading-rotating 1.5s infinite}.loading-default[_v-34e13b62]:before{content:'';position:absolute;display:block;top:0;left:50%;margin-top:-3px;margin-left:-3px;width:6px;height:6px;background-color:#999;border-radius:50%}.loading-spiral[_v-34e13b62]{border:2px solid #777;border-right-color:transparent;animation:linear loading-rotating .85s infinite}@keyframes loading-rotating{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.infinite-loading-container[_v-34e13b62]{clear:both;text-align:center}.infinite-loading-container [class^=loading-][_v-34e13b62]{display:inline-block;margin:15px 0;width:28px;height:28px;font-size:28px;line-height:28px;border-radius:50%}.infinite-status-prompt[_v-34e13b62]{color:#666;font-size:14px;text-align:center;padding:10px 0}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},n=0;n<this.length;n++){var p=this[n][0];"number"==typeof p&&(i[p]=!0)}for(n=0;n<t.length;n++){var s=t[n];"number"==typeof s[0]&&i[s[0]]||(o&&!s[2]?s[2]=o:o&&(s[2]="("+s[2]+") and ("+o+")"),e.push(s))}},e}},function(e,t){e.exports=' <div class=infinite-loading-container _v-34e13b62=""> <div v-show=isLoading _v-34e13b62=""> <slot name=spinner _v-34e13b62=""> <i :class=spinnerType _v-34e13b62=""></i> </slot> </div> <div class=infinite-status-prompt v-show="!isLoading &amp;&amp; isComplete &amp;&amp; isFirstLoad" _v-34e13b62=""> <slot name=no-results _v-34e13b62="">No results :(</slot> </div> <div class=infinite-status-prompt v-show="!isLoading &amp;&amp; isComplete &amp;&amp; !isFirstLoad" _v-34e13b62=""> <slot name=no-more _v-34e13b62="">No more data :)</slot> </div> </div> '},function(e,t,o){var i,n,p={};o(7),i=o(1),n=o(4),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var s="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;n&&(s.template=n),s.computed||(s.computed={}),Object.keys(p).forEach(function(e){var t=p[e];s.computed[e]=function(){return t}})},function(e,t,o){function i(e,t){for(var o=0;o<e.length;o++){var i=e[o],n=l[i.id];if(n){n.refs++;for(var p=0;p<n.parts.length;p++)n.parts[p](i.parts[p]);for(;p<i.parts.length;p++)n.parts.push(a(i.parts[p],t))}else{for(var s=[],p=0;p<i.parts.length;p++)s.push(a(i.parts[p],t));l[i.id]={id:i.id,refs:1,parts:s}}}}function n(e){for(var t=[],o={},i=0;i<e.length;i++){var n=e[i],p=n[0],s=n[1],r=n[2],a=n[3],x={css:s,media:r,sourceMap:a};o[p]?o[p].parts.push(x):t.push(o[p]={id:p,parts:[x]})}return t}function p(e,t){var o=f(),i=m[m.length-1];if("top"===e.insertAt)i?i.nextSibling?o.insertBefore(t,i.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),m.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");o.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=m.indexOf(e);t>=0&&m.splice(t,1)}function r(e){var t=document.createElement("style");return t.type="text/css",p(e,t),t}function a(e,t){var o,i,n;if(t.singleton){var p=h++;o=u||(u=r(t)),i=x.bind(null,o,p,!1),n=x.bind(null,o,p,!0)}else o=r(t),i=d.bind(null,o),n=function(){s(o)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else n()}}function x(e,t,o,i){var n=o?"":i.css;if(e.styleSheet)e.styleSheet.cssText=g(t,n);else{var p=document.createTextNode(n),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(p,s[t]):e.appendChild(p)}}function d(e,t){var o=t.css,i=t.media,n=t.sourceMap;if(i&&e.setAttribute("media",i),n&&(o+="\n/*# sourceURL="+n.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var l={},c=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=c(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=c(function(){return document.head||document.getElementsByTagName("head")[0]}),u=null,h=0,m=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var o=n(e);return i(o,t),function(e){for(var p=[],s=0;s<o.length;s++){var r=o[s],a=l[r.id];a.refs--,p.push(a)}if(e){var x=n(e);i(x,t)}for(var s=0;s<p.length;s++){var a=p[s];if(0===a.refs){for(var d=0;d<a.parts.length;d++)a.parts[d]();delete l[a.id]}}}};var g=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},function(e,t,o){var i=o(2);"string"==typeof i&&(i=[[e.id,i,""]]),o(6)(i,{}),i.locals&&(e.exports=i.locals)}])})},527:function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(5),p=i(n),s=o(4),r=o(6),a=i(r),x=o(7);t.default={components:{XHeader:s.XHeader,ViewBox:s.ViewBox,Panel:s.Panel,Group:s.Group,Cell:s.Cell,XButton:s.XButton,InfiniteLoading:a.default,Checker:s.Checker,CheckerItem:s.CheckerItem,Confirm:s.Confirm},route:{data:function(e){var t=this;this.workbookStuExercise.isReset&&this.$nextTick(function(){t.$broadcast("$InfiniteLoading:reset")})}},methods:(0,p.default)({},(0,x.mapActions)(["getWorkbookStuExercise","setWorkbookStuExersciseScroll","WorkbookExercisePost","workbookStuExAnswerChange"]),{_getAnswerList:function(){if(this.answerListId=[],this.answerListAnswer=[],this.Exercise.a)if("1"==this.workbookType)for(var e=this.rememberExercise.a[0].b,t=0;t<e.length;t++)for(var o=0;o<e[t].c.length;o++)this.answerListId.push(e[t].c[o].id),this.answerListAnswer.push(e[t].c[o].answer);else for(var i=this.Exercise.a,n=0;n<i.length;n++)for(var p=0;p<i[n].b.length;p++)this.answerListId.push(i[n].b[p].id),this.answerListAnswer.push(i[n].b[p].answer)},_onInfinite:function(){var e=this;this.getWorkbookStuExercise().then(function(){e.$broadcast("$InfiniteLoading:loaded"),e.$broadcast("$InfiniteLoading:complete")})},onAction:function(e){"确认"==e&&(this._getAnswerList(),this.WorkbookExercisePost({answerId:this.answerListId,answer:this.answerListAnswer}).then(function(){setTimeout(function(){history.back()},500)}))},_intoExample:function(e){if(0==Number(e))return void _.toast("暂无例题")},_changeAnswer:function(e,t,o){this.isUsed||(this.workbookType=o,this.workbookStuExAnswerChange({pid:e,id:t,type:o}))},_post:function(){this.showConfirm=!0}}),data:function(){return{answerListId:[],answerListAnswer:[],workbookType:"",showConfirm:!1}},computed:(0,p.default)({},(0,x.mapGetters)(["workbookStuExercise","workbookStuSubject"]),{Exercise:function(){return this.workbookStuExercise.list},isUsed:function(){return this.workbookStuExercise.list.isUsed}})}},665:function(e,t){e.exports=' <view-box class=workbookStuExercise> <div slot=header style=position:absolute;left:0;top:0;width:100%;z-index:100> <x-header :left-options="{showBack: true}">章节练习</x-header> </div> <div style=padding-top:46px> <template v-if=Exercise.chaper> <header class=sectionHeader>{{Exercise.chaper.name}}</header> <template v-for="item in Exercise.a"> <template v-if="item.b[0].type == \'1\'"> <group v-for="itemB in item.b" :title=itemB.name> <cell v-for="itemC in itemB.c" :title=itemC.name> <p slot=value> <section style=display:inline-block @click=_changeAnswer($parent.$index,$index,1)> <i v-if=itemC.answer class="icon iconfont exampleIcon icon-correct"></i> <i v-else class="icon iconfont icon-error exampleIcon"></i> </section> </p> </cell> </group> </template> <template v-if="item.b[0].type == \'2\'"> <group :title=item.name> <cell v-for="itemB in item.b" :title=itemB.name> <div slot=value> <section style=display:inline-block @click=_changeAnswer($parent.$index,$index,2)> <i v-if=itemB.answer class="icon iconfont exampleIcon icon-correct"></i> <i v-else class="icon iconfont icon-error exampleIcon"></i> </section> </div> </cell> </group> </template> </template> <x-button v-if=!Exercise.isUsed style=width:95%;text-align:center;margin-top:1rem;border-radius:0px;background:#4bb7aa;color:#fff type=primary @click=_post>提交结果</x-button> <x-button v-else style=width:95%;margin-top:1rem type=primary disabled=disabled>已提交</x-button> </template> <infinite-loading :on-infinite=_onInfinite spinner=spiral> <span slot=no-results style=color:#4bb7aa> <i class="icon iconfont icon-comiiszanwushuju" style=font-size:1.5rem;margin-right:.2rem></i> <p style=font-size:1rem;display:inline-block>数据发生一点问题~</p> </span> <span slot=no-more style=color:#4bb7aa;font-size:.8rem></span> </infinite-loading> <confirm :show.sync=showConfirm confirm-text=确定 cancel-text=取消 title=确定提交练习结果？ @on-confirm="onAction(\'确认\')" @on-cancel="onAction(\'取消\')"></confirm> </div> </view-box> '},725:function(e,t,o){var i,n,p={};i=o(527),n=o(665),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var s="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;n&&(s.template=n),s.computed||(s.computed={}),Object.keys(p).forEach(function(e){var t=p[e];s.computed[e]=function(){return t}})}});