webpackJsonp([91],{lZ6T:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=l("Dd8w"),o=l.n(a),i=l("ABCa"),n=l("dQSc"),c=l("jOlP"),s=l("YxJB"),r=l("3Lt7"),d=l("NYxO"),_={name:"math",components:{XHeader:i.a,Card:n.a,Spinner:c.a,Flexbox:s.a,FlexboxItem:r.a},computed:o()({},Object(d.mapGetters)(["collectMath"]),{list:function(){return this.collectMath.list}}),data:function(){return{loading:!0,loadingNoData:!1}},methods:o()({},Object(d.mapActions)(["getCollect","setCollectScroll","clearCollect"]),{_getData:function(){var t=this;this.loading=!0,this.getCollect({id:2,subject:"math"}).then(function(e){e.data.data.list.length<10&&(t.loadingNoData=!0),t.loading=!1}).catch(function(){t.loading=!1})}}),beforeRouteEnter:function(t,e,l){l(function(t){("bag"===e.name||t.collectMath.isReset)&&(t.clearCollect(),t._getData()),t.$parent.$refs.viewBoxBody.scrollTop=t.collectMath.scroll})},beforeRouteLeave:function(t,e,l){this.setCollectScroll({subject:"math",height:this.$parent.$refs.viewBoxBody.scrollTop}),l()}},u=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[t._l(t.list,function(e,a){return l("card",{key:a},[l("div",{staticClass:"weui-panel__hd",attrs:{slot:"header"},slot:"header"},[l("flexbox",[l("flexbox-item",{staticStyle:{color:"#4cc0be"},attrs:{span:10}},[t._v(t._s(e.chapter_name))]),t._v(" "),l("flexbox-item",{attrs:{span:2}},[t._v("难度: "+t._s(e.degree))])],1)],1),t._v(" "),l("div",{attrs:{slot:"content"},on:{click:function(l){t.$router.push({name:"example",params:{subjectId:"2",id:e.exercises_id,from:e.from}})}},slot:"content"},[l("div",{domProps:{innerHTML:t._s(e.stem)}}),t._v(" "),t._l(e.opt_jo,function(e,a){return l("div",{key:a,staticStyle:{"padding-top":"5px"}},[t._v(t._s(a)+"： "),l("p",{staticStyle:{display:"inline-block"},domProps:{innerHTML:t._s(e)}})])})],2),t._v(" "),l("div",{attrs:{slot:"footer"},slot:"footer"},[l("div",{staticClass:"weui-cell weui-cell_access weui-cell_link"},[l("div",{staticClass:"weui-cell__bd",staticStyle:{"text-align":"right"}},[t._v("收藏时间: "+t._s(t._f("ymd")(e.collect_time)))])])])])}),t._v(" "),l("div",{staticStyle:{"text-align":"center",padding:"20px 0"}},[t.loading?l("spinner",{attrs:{type:"lines"}}):t._e(),t._v(" "),l("div",[t.loadingNoData?l("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"}},[t._v("已经加载全部收藏~")]):t._e(),t._v(" "),t.loadingNoData||t.loading?t._e():l("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"},on:{click:t._getData}},[t._v("点我加载更多")])])],1)],2)},p=[],f={render:u,staticRenderFns:p},v=f,h=l("VU/8"),m=h(_,v,!1,null,null,null);e.default=m.exports}});