webpackJsonp([75],{"1Zk7":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Dd8w"),a=i.n(n),o=i("dQSc"),s=i("jOlP"),c=i("YxJB"),l=i("3Lt7"),r=i("63CM"),d=i.n(r),p=i("NYxO"),u={name:"total",components:{Card:o.a,Spinner:s.a,Flexbox:c.a,FlexboxItem:l.a},computed:a()({},Object(p.mapGetters)(["Route","induceTotal"]),{list:function(){return this.induceTotal.list},recordSize:function(){return this.induceTotal.recordSize},totalCount:function(){return this.induceTotal.totalCount}}),directives:{TransferDom:d.a},data:function(){return{loading:!0,loadingNoData:!1}},methods:a()({},Object(p.mapActions)(["getInduceList","setInduceListScroll","induceListClear","induceTotalAction"]),{_operate:function(t,e,i){var n=this,a=void 0;a="practice"===t?"已放入练习本":"break"===t?"已放入斩题本":"已放入弃题本",this.induceTotalAction({index:i,type:t,id:e.exercises_id,chapter_id:e.chapter_id}).then(function(){n.$vux.toast.show({text:a,type:"text",time:1500,position:"bottom"})})},_getData:function(){var t=this;this.loading=!0,this.getInduceList({type:"total"}).then(function(e){e.data.data.list.length<10&&(t.loadingNoData=!0),t.loading=!1}).catch(function(){t.loading=!1})}}),beforeRouteEnter:function(t,e,i){i(function(t){"example"!==e.name&&(t.loadingNoData=!1,t.induceListClear({type:"total"})),t.induceTotal.isReset&&t._getData(),t.$parent.$refs.viewBoxBody.scrollTop=t.induceTotal.scroll})},beforeRouteLeave:function(t,e,i){this.setInduceListScroll({type:"total",height:this.$parent.$refs.viewBoxBody.scrollTop}),i()}},_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.list.length?i("aside",{staticStyle:{padding:"0 .5rem","font-size":".7rem","line-height":"1.5rem","margin-bottom":"-10px"}},[i("p",[t._v("本节共有"),i("b",{staticStyle:{color:"#F8BF4D"}},[t._v(t._s(t.totalCount))]),t._v("个题型，未处理"),i("b",{staticStyle:{color:"#F8BF4D"}},[t._v(t._s(t.recordSize))]),t._v("题")])]):t._e(),t._v(" "),t._l(t.list,function(e,n){return i("card",{key:n},[i("div",{staticClass:"weui-panel__hd",attrs:{slot:"header"},slot:"header"},[i("flexbox",[i("flexbox-item",{staticStyle:{color:"#4cc0be"},attrs:{span:10}},[t._v(t._s(e.chapter_name))]),t._v(" "),i("flexbox-item",{attrs:{span:2}},[t._v("难度: "+t._s(e.degree))])],1)],1),t._v(" "),i("div",{attrs:{slot:"content"},on:{click:function(i){t.$router.push({name:"example",params:{subjectId:-1!==t.Route.params.subject.indexOf("math")?2:7,id:e.exercises_id}})}},slot:"content"},[i("div",{domProps:{innerHTML:t._s(e.stem)}}),t._v(" "),e.opt_jo.hasOwnProperty("A")?i("div",[t._l(e.opt_jo,function(e,n){return[i("div",{key:n,staticStyle:{"padding-top":"5px"}},[t._v(t._s(n)+"： "),i("p",{staticStyle:{display:"inline-block"},domProps:{innerHTML:t._s(e)}})])]})],2):t._e()]),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("div",{staticClass:"weui-cell weui-cell_link",staticStyle:{padding:"0"}},[i("div",{staticClass:"weui-cell__bd"},[i("flexbox",{staticStyle:{"text-align":"center"},attrs:{gutter:0}},[i("flexbox-item",{attrs:{span:3}}),t._v(" "),i("flexbox-item",{staticClass:"weui-cell_access",staticStyle:{padding:"10px 0px"},attrs:{span:3},nativeOn:{click:function(i){t._operate("practice",e,n)}}},[i("i",{staticClass:"icon iconfont icon-jinrulianxi",staticStyle:{"font-size":"17px"}}),t._v("练习\n            ")]),t._v(" "),i("flexbox-item",{staticClass:"weui-cell_access",staticStyle:{padding:"10px 0px"},attrs:{span:3},nativeOn:{click:function(i){t._operate("break",e,n)}}},[i("i",{staticClass:"icon iconfont icon-brush",staticStyle:{"font-size":"17px"}}),t._v("斩题\n            ")]),t._v(" "),i("flexbox-item",{staticClass:"weui-cell_access",staticStyle:{padding:"10px 0px"},attrs:{span:3},nativeOn:{click:function(i){t._operate("pass",e,n)}}},[i("i",{staticClass:"icon iconfont icon-lajitong16",staticStyle:{"font-size":"17px"}}),t._v("弃题\n            ")])],1)],1)])])])}),t._v(" "),i("div",{staticStyle:{"text-align":"center",padding:"20px 0"}},[t.loading?i("spinner",{attrs:{type:"lines"}}):t._e(),t._v(" "),i("div",[t.loadingNoData?i("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"}},[t._v("已经加载全部题型~")]):t._e(),t._v(" "),t.loadingNoData||t.loading?t._e():i("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"},on:{click:t._getData}},[t._v("点我加载更多")])])],1)],2)},x=[],v={render:_,staticRenderFns:x},f=v,g=i("VU/8"),m=g(u,f,!1,null,null,null);e.default=m.exports}});