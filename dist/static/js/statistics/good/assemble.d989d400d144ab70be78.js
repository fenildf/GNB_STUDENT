webpackJsonp([4],{"1H6C":function(t,e,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("HhN8"),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},Doll:function(t,e,n){"use strict";function r(t){n("dlIB")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("Xxa5"),i=n.n(o),a=n("exGp"),s=n.n(a),c=n("Dd8w"),l=n.n(c),u=n("1sNz"),f=n("UIMx"),h=n("ABCa"),d=n("rHil"),p=n("dQSc"),v=n("1DHf"),y=n("jOlP"),g=n("YxJB"),m=n("3Lt7"),x=n("2sLL"),b=n("NYxO"),w=n("xJtg"),_={name:"goodAssemble",components:{ViewBox:u.a,Tabbar:f.a,XHeader:h.a,Group:d.a,Card:p.a,Cell:v.a,Spinner:y.a,Flexbox:g.a,FlexboxItem:m.a,XButton:x.a,Share:w.a},computed:l()({},Object(b.mapGetters)(["AssembleGood"]),{block:function(){return this.AssembleGood.download||[]}}),data:function(){return{loading:!0,error:!1,showAction:!1,share:{content:"试卷分享",title:"我的精选题组卷",href:""}}},methods:l()({},Object(b.mapActions)(["getStatisticsGoodAssemble","clearStatisticsDownload","getStatisticsAssemblUrl","setStatisticsGoodAssembleOrder","setStatisticsGoodAssembleList","clearStatisticsAssemble"]),{_getData:function(){var t=this;this.loading=!0,this.getStatisticsGoodAssemble().then(function(){t.error=!1,t.loading=!1}).catch(function(e){t.error=!0,t.loading=!1})},_shareSuccess:function(){this._getData(),this.clearStatisticsAssemble({type:"good"}),this.$router.go(-1)},_download:function(){var t=this;return s()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.setStatisticsGoodAssembleList();case 3:return e.next=5,t.getStatisticsAssemblUrl({type:"good"}).then(function(e){t.share.href=e.data.data.url,t.showAction=!0});case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}},e,t,[[0,7]])}))()}}),beforeRouteEnter:function(t,e,n){n(function(t){"example"!==e.name&&t.clearStatisticsDownload({type:"good"}),t._getData()})},beforeRouteLeave:function(t,e,n){this.showAction&&(this.showAction=!1),n()}},L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view-box",{attrs:{"body-padding-top":"46px","body-padding-bottom":"40px"}},[n("div",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{slot:"header"},slot:"header"},[n("x-header",{attrs:{"left-options":{backText:"精选练习"}}})],1),t._v(" "),n("div",{attrs:{slot:"default"},slot:"default"},[t._l(t.block,function(e,r){return n("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],key:r},[n("div",{staticClass:"weui-cells__title"},[t._v(t._s(e.name))]),t._v(" "),t._l(e.list,function(e,o){return n("card",{key:o},[n("div",{staticClass:"weui-panel__hd",staticStyle:{color:"#4cc0be"},attrs:{slot:"header"},slot:"header"},[t._v("\n          "+t._s(e.chapterName)+"\n        ")]),t._v(" "),n("div",{attrs:{slot:"content"},on:{click:function(n){t.$router.push({name:"example",params:{subjectId:e.subject_id,grade:e.grade,id:e.exercisesId,type:1===e.form?"exercises":"lxexercises"}})}},slot:"content"},[n("div",{domProps:{innerHTML:t._s(e.stem)}}),t._v(" "),t._l(e.opt,function(e,r){return n("div",{key:r,staticStyle:{"padding-top":"5px"}},[t._v("\n            "+t._s(r)+"："),n("p",{staticStyle:{display:"inline-block"},domProps:{innerHTML:t._s(e)}})])})],2),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("div",{staticClass:"weui-cell weui-cell_link"},[n("div",{staticClass:"weui-cell__bd"},[n("flexbox",[n("flexbox-item",{staticClass:"center",attrs:{span:4},nativeOn:{click:function(e){t.setStatisticsGoodAssembleOrder({type:"up",pindex:r,index:o})}}},[n("i",{staticClass:"icon iconfont icon-up"}),t._v("上移\n                ")]),t._v(" "),n("flexbox-item",{staticClass:"center",attrs:{span:4},nativeOn:{click:function(e){t.setStatisticsGoodAssembleOrder({type:"down",pindex:r,index:o})}}},[n("i",{staticClass:"icon iconfont icon-down"}),t._v("下移\n                ")]),t._v(" "),n("flexbox-item",{staticClass:"center",attrs:{span:4},nativeOn:{click:function(e){t.setStatisticsGoodAssembleOrder({type:"del",pindex:r,index:o})}}},[n("i",{staticClass:"icon iconfont icon-lajitong16"}),t._v("删除\n                ")])],1)],1)])])])})],2)}),t._v(" "),n("div",{staticStyle:{"text-align":"center",padding:"10px 0"}},[t.loading?n("spinner",{attrs:{type:"lines"}}):t.block.length?t.error?n("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"},on:{click:function(e){t._getData()}}},[t._v("出错了点我重新加载")]):t._e():n("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"}},[t._v("该科目还未组卷")])],1),t._v(" "),n("share",{attrs:{change:t.showAction,showAction:t.showAction,content:t.share.content,title:t.share.title,href:t.share.href},on:{"update:change":function(e){t.showAction=e},"on-share-success":function(e){t._shareSuccess()}}})],2),t._v(" "),n("tabbar",{directives:[{name:"show",rawName:"v-show",value:t.block&&t.block.length,expression:"block && block.length"}],staticStyle:{"background-color":"#4cc0be",color:"#fff"},attrs:{slot:"bottom"},slot:"bottom"},[n("flexbox-item",{staticStyle:{"font-size":".8rem","text-align":"center",padding:".25rem 0"},attrs:{span:12},nativeOn:{click:function(e){t._download()}}},[n("i",{staticClass:"icon iconfont icon-download"}),t._v("下载")])],1)],1)},S=[],k={render:L,staticRenderFns:S},A=k,O=n("VU/8"),E=r,G=O(_,A,!1,E,"data-v-5e3ab43e",null);e.default=G.exports},HhN8:function(t,e){!function(e){"use strict";function n(t,e,n,r){var i=e&&e.prototype instanceof o?e:o,a=Object.create(i.prototype),s=new d(r||[]);return a._invoke=l(t,n,s),a}function r(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(t){function e(n,o,i,a){var s=r(t[n],t,o);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&m.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(l).then(function(t){c.value=t,i(c)},a)}a(s.arg)}function n(t,n){function r(){return new Promise(function(r,o){e(t,n,r,o)})}return o=o?o.then(r,r):r()}var o;this._invoke=n}function l(t,e,n){var o=k;return function(i,a){if(o===O)throw new Error("Generator is already running");if(o===E){if("throw"===i)throw a;return v()}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var c=u(s,n);if(c){if(c===G)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===k)throw o=E,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=O;var l=r(t,e,n);if("normal"===l.type){if(o=n.done?E:A,l.arg===G)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=E,n.method="throw",n.arg=l.arg)}}}function u(t,e){var n=t.iterator[e.method];if(n===y){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=y,u(t,e),"throw"===e.method))return G;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return G}var o=r(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,G;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=y),e.delegate=null,G):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,G)}function f(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function h(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function d(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(f,this),this.reset(!0)}function p(t){if(t){var e=t[b];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(m.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=y,e.done=!0,e};return r.next=r}}return{next:v}}function v(){return{value:y,done:!0}}var y,g=Object.prototype,m=g.hasOwnProperty,x="function"==typeof Symbol?Symbol:{},b=x.iterator||"@@iterator",w=x.asyncIterator||"@@asyncIterator",_=x.toStringTag||"@@toStringTag",L="object"==typeof t,S=e.regeneratorRuntime;if(S)return void(L&&(t.exports=S));S=e.regeneratorRuntime=L?t.exports:{},S.wrap=n;var k="suspendedStart",A="suspendedYield",O="executing",E="completed",G={},j={};j[b]=function(){return this};var C=Object.getPrototypeOf,N=C&&C(C(p([])));N&&N!==g&&m.call(N,b)&&(j=N);var R=a.prototype=o.prototype=Object.create(j);i.prototype=R.constructor=a,a.constructor=i,a[_]=i.displayName="GeneratorFunction",S.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},S.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,_ in t||(t[_]="GeneratorFunction")),t.prototype=Object.create(R),t},S.awrap=function(t){return{__await:t}},s(c.prototype),c.prototype[w]=function(){return this},S.AsyncIterator=c,S.async=function(t,e,r,o){var i=new c(n(t,e,r,o));return S.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},s(R),R[_]="Generator",R[b]=function(){return this},R.toString=function(){return"[object Generator]"},S.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},S.values=p,d.prototype={constructor:d,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(h),!t)for(var e in this)"t"===e.charAt(0)&&m.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=y)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,r){return i.type="throw",i.arg=t,n.next=e,r&&(n.method="next",n.arg=y),!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=m.call(o,"catchLoc"),s=m.call(o,"finallyLoc");if(a&&s){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&m.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,G):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),G},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),h(n),G}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;h(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:p(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=y),G}}}(function(){return this}()||Function("return this")())},Xxa5:function(t,e,n){t.exports=n("1H6C")},YRy8:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n.weui-btn + .weui-btn[data-v-5e3ab43e]{\n  margin-top:0;\n}\n.center[data-v-5e3ab43e]{\n  text-align:center;\n}\n",""])},dlIB:function(t,e,n){var r=n("YRy8");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("a693533a",r,!0)},exGp:function(t,e,n){"use strict";e.__esModule=!0;var r=n("//Fk"),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,n){function r(i,a){try{var s=e[i](a),c=s.value}catch(t){return void n(t)}if(!s.done)return o.default.resolve(c).then(function(t){r("next",t)},function(t){r("throw",t)});t(c)}return r("next")})}}}});