webpackJsonp([25],{Qpyy:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"\n.table[data-v-0bed6e96] {\n  padding: 10px 0;\n  background: white;\n}\n.table_font[data-v-0bed6e96] {\n  font-size: .8rem;\n  text-align: center;\n}\n.table_number[data-v-0bed6e96] {\n  font-size: .8rem;\n  text-align: center;\n  color: #ff9800;\n}\n.table_into[data-v-0bed6e96] {\n  display: inline-block;\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  height: 6px;\n  width: 6px;\n  border-width: 3px 3px 0 0;\n  border-color: #ccc;\n  border-style: solid;\n  margin-left: 5px;\n  -webkit-transition-duration: .2s;\n          transition-duration: .2s;\n}\n",""])},kEuh:function(t,e,a){var s=a("Qpyy");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("0ea4c196",s,!0)},rXaP:function(t,e,a){"use strict";function s(t){a("kEuh")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("Dd8w"),n=a.n(i),r=a("ABCa"),o=a("jOlP"),c=a("YxJB"),l=a("3Lt7"),d=a("NYxO"),b=a("C7HL"),x={name:"physics",components:{XHeader:r.a,Spinner:o.a,selectBook:b.a,Flexbox:c.a,FlexboxItem:l.a},computed:n()({},Object(d.mapGetters)(["StatisticsPhysics"]),{textList:function(){return this.$store.getters.User.textbook.physics}}),data:function(){return{error:!1,loading:!0,textbookId:""}},methods:n()({},Object(d.mapActions)(["getStatistics","clearStatistics","clearStatisticsAssemble"]),{_toStatistics:function(t){this.clearStatisticsAssemble({type:"remember"}),this.clearStatisticsAssemble({type:"camera"}),this.clearStatisticsAssemble({type:"good"}),this.$router.push({name:"statisticsRemember",params:{subject:"physics",chapterId:t.chapterId,name:t.chapterName,textbookId:this.textbookId}})},_getData:function(){var t=this;this.loading=!0,this.error=!1,this.getStatistics({textbookId:this.textbookId||this.textList[0].id}).then(function(){t.loading=!1}).catch(function(){t.loading=!1,t.error=!0})},_currentTextbook:function(t){this.textbookId=t,this.clearStatistics(),this._getData()}}),beforeRouteEnter:function(t,e,a){a(function(t){t._getData()})}},p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("selectBook",{attrs:{list:t.textList},on:{"on-change":t._currentTextbook}}),t._v(" "),t.loading||t.error?t._e():a("div",{staticClass:"table vux-1px-t vux-1px-b"},[a("flexbox",{staticStyle:{padding:"0 0 10px"},attrs:{gutter:0,align:"center"}},[a("flexbox-item",{attrs:{span:2/9}}),t._v(" "),a("flexbox-item",{attrs:{span:2/9}},[a("div",{staticClass:"table_font"},[t._v("记题数")])]),t._v(" "),a("flexbox-item",{attrs:{span:2/9}},[a("div",{staticClass:"table_font"},[t._v("错题数")])]),t._v(" "),a("flexbox-item",{attrs:{span:2/9}},[a("div",{staticClass:"table_font"},[t._v("正确率")])])],1),t._v(" "),t._l(t.StatisticsPhysics,function(e){return a("flexbox",{key:e.chapterId,staticStyle:{padding:".25rem 0"},attrs:{gutter:0,align:"center"},nativeOn:{click:function(a){t._toStatistics(e)}}},[a("flexbox-item",{attrs:{span:2/9}},[a("div",{staticClass:"table_font"},[t._v(t._s(e.chapterName))])]),t._v(" "),a("flexbox-item",{attrs:{span:2/9}},[a("div",{staticClass:"table_number"},[t._v(t._s(e.remCount))])]),t._v(" "),a("flexbox-item",{attrs:{span:2/9}},[a("div",{staticClass:"table_number"},[t._v(t._s(e.errorCount))])]),t._v(" "),a("flexbox-item",{attrs:{span:2/9}},[a("div",{staticClass:"table_number"},[t._v(t._s(e.correctPercent))])]),t._v(" "),a("flexbox-item",[a("b",{staticClass:"table_into"})])],1)})],2),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[t.loading?a("spinner",{attrs:{type:"ripple"}}):t._e(),t._v(" "),t.error?a("p",{staticStyle:{color:"#4cc0be","font-size":".7rem",padding:".5rem 0"},on:{click:t._getData}},[t._v("点我重新加载")]):t._e()],1)],1)},_=[],u={render:p,staticRenderFns:_},f=u,m=a("VU/8"),v=s,h=m(x,f,!1,v,"data-v-0bed6e96",null);e.default=h.exports}});