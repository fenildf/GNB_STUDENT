webpackJsonp([45],{Q9ej:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o("Dd8w"),n=o.n(r),a=o("ABCa"),i=o("1sNz"),s=o("odqc"),c=o("Znkm"),l=o("NYxO"),u={name:"exercise",components:{XHeader:a.a,ViewBox:i.a,Tab:s.a,TabItem:c.a},computed:n()({},Object(l.mapGetters)(["Route","workbookExercise"])),methods:n()({},Object(l.mapActions)(["getWorkbookExercise","workbookExerciseClear"])),beforeRouteEnter:function(e,t,o){var r=this;o(function(e){("workbook_chapter"===t.name||e.workbookExercise.isReset)&&(e.workbookExerciseClear(),e.getWorkbookExercise().then(function(){o()}).catch(function(){r.$router.go(-1)}))})}},k=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("view-box",{ref:"workbook",attrs:{"body-padding-top":"46px"}},[o("div",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{slot:"header"},slot:"header"},[o("x-header",{attrs:{"left-options":{backText:e.Route.params.name}}},[o("i",{staticClass:"icon iconfont icon-home",attrs:{slot:"right"},on:{click:function(t){e.$router.go(-2)}},slot:"right"})])],1),e._v(" "),o("keep-alive",[o("router-view")],1)],1)},b=[],d={render:k,staticRenderFns:b},p=d,f=o("VU/8"),x=f(u,p,!1,null,null,null);t.default=x.exports}});