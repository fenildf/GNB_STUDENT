webpackJsonp([81],{"u/rF":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("Dd8w"),r=n.n(i),o=n("rHil"),a=n("dQSc"),s=n("1DHf"),l=n("jOlP"),c=n("2FOq"),d=n("63CM"),u=n.n(d),m=n("NYxO"),p={name:"chemistry",components:{Group:o.a,Card:a.a,Cell:s.a,Spinner:l.a,Previewer:c.a},computed:r()({},Object(m.mapGetters)(["downloadRemember"])),data:function(){return{loading:!1,list:[{w:0,h:0,src:""}],options:{preload:[1,1],bgOpacity:1,fullscreenEl:!1,history:!0}}},directives:{TransferDom:u.a},methods:r()({},Object(m.mapActions)(["getDownloadRememberDetail"]),{_getData:function(){var e=this;this.loading=!0,this.getDownloadRememberDetail().then(function(t){e.loading=!1}).catch(function(){e.loading=!1})},show:function(e){var t=this;this.list[0].w=e.width,this.list[0].h=e.height,this.list[0].src=e.url,this.$nextTick(function(){t.$refs.previewer.show(0)})}}),beforeRouteEnter:function(e,t,n){n(function(e){"downloadRemember"===t.name&&e._getData()})},beforeRouteLeave:function(e,t,n){}},f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._l(e.downloadRemember.detail,function(t,i){return n("card",{key:i},[n("div",{attrs:{slot:"content"},slot:"content"},[n("div",{on:{click:function(n){e.show(t.photo)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.photo.url+"-errorList",expression:"detail.photo.url+'-errorList'"}]})])])])}),e._v(" "),n("div",{staticStyle:{"text-align":"center",padding:"20px 0"}},[e.loading?n("spinner",{attrs:{type:"lines"}}):e._e()],1),e._v(" "),n("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[n("previewer",{ref:"previewer",attrs:{list:e.list,options:e.options}})],1)],2)},h=[],v={render:f,staticRenderFns:h},w=v,g=n("VU/8"),b=g(p,w,!1,null,null,null);t.default=b.exports}});