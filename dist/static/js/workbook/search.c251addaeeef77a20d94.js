webpackJsonp([45],{"4riC":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("Dd8w"),a=o.n(i),r=o("ABCa"),n=o("rHil"),s=o("1DHf"),l=o("2sLL"),c=o("1sNz"),d=o("2FOq"),u=o("jOlP"),h=o("HqzV"),k=o("63CM"),p=o.n(k),b=o("NYxO"),f={name:"workbookSearch",components:{XHeader:r.a,Group:n.a,Cell:s.a,XButton:l.a,ViewBox:c.a,Previewer:d.a,Spinner:u.a,Search:h.a},computed:a()({},Object(b.mapGetters)(["User","workbookSearchList"])),data:function(){return{loading:!1,name:"",list:[{src:"",w:0,h:0}],options:{preload:[1,1],bgOpacity:1,fullscreenEl:!1,history:!0}}},directives:{TransferDom:p.a},methods:a()({},Object(b.mapActions)(["getWorkbookSearch","workbookSearchClear","workbookAdd","workbookDel"]),{_add:function(t,e,o){this.workbookAdd({type:"search",pindex:t,index:e,workbookId:o})},_del:function(t,e,o){this.workbookDel({type:"search",pindex:t,index:e,workbookId:o})},_getData:function(){var t=this;""!==this.name&&(this.loading=!0,this.getWorkbookSearch({workbookName:this.name}).then(function(){t.loading=!1}))},_onSearch:function(t){this.name=t,this.workbookSearchClear(),this._getData()},show:function(t,e){var o=this;this.list=[],this.list.push({src:this.workbookSearchList[t].list[e].img.url+"-workbookBig",w:"700",h:"1050"}),this.$nextTick(function(){o.$refs.wbpreviewer.show(0)})}}),activated:function(){this.name="",this.workbookSearchClear()}},m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{height:"100%"}},[o("view-box",{attrs:{"body-padding-top":"95px"}},[o("div",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{slot:"header"},slot:"header"},[o("x-header",{attrs:{"left-options":{backText:"搜索习题册"}}}),t._v(" "),o("search",{staticStyle:{position:"fixed","z-index":"1"},attrs:{"auto-fixed":!1,placeholder:"请输入习题册名称"},on:{"on-submit":t._onSearch,"on-change":t._onSearch},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),o("div",[t._l(t.workbookSearchList,function(e,i){return o("group",{key:i,attrs:{title:e.textbookName}},t._l(e.list,function(e,a){return o("cell",{key:a},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img.url+"?imageMogr2/auto-orient/thumbnail/120x160!/format/jpg/interlace/1/blur/1x0/quality/100|imageslim",expression:'workbook.img.url+"?imageMogr2/auto-orient/thumbnail/120x160!/format/jpg/interlace/1/blur/1x0/quality/100|imageslim"'}],staticClass:"previewer-workbook-img",attrs:{slot:"icon",width:"60",height:"80"},on:{click:function(e){t.show(i,a)}},slot:"icon"}),t._v(" "),o("div",{staticStyle:{width:"90%"},attrs:{slot:"after-title"},on:{click:function(e){t.show(i,a)}},slot:"after-title"},[o("p",{staticStyle:{color:"#4cc0be","font-size":"14px"}},[t._v("   "+t._s(e.year)+"版")]),t._v(" "),o("p",{staticClass:"ellipsis",staticStyle:{"font-size":".9rem",padding:".2rem 0"}},[t._v("  "+t._s(e.workbookName))]),t._v(" "),e.version?t._l(e.version.split(","),function(e,i){return o("p",{key:i,staticStyle:{color:"#aaa","font-size":"14px"}},[t._v("\n                   "+t._s(e)+"\n              ")])}):t._e()],2),t._v(" "),o("div",{attrs:{slot:"default"},slot:"default"},[e.status?o("x-button",{attrs:{slot:"default",mini:"",type:"warn"},nativeOn:{click:function(o){t._del(i,a,e.workbookId)}},slot:"default"},[t._v("删除")]):o("x-button",{attrs:{slot:"default",mini:"",type:"primary"},nativeOn:{click:function(o){t._add(i,a,e.workbookId)}},slot:"default"},[t._v("添加")])],1)])}))}),t._v(" "),o("div",{staticStyle:{"text-align":"center",padding:"20px 0"}},[t.loading?o("spinner",{attrs:{type:"dots"}}):0===t.workbookSearchList.length?o("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"}},[t._v("没有搜索到相对应的习题册~")]):t._e()],1)],2)]),t._v(" "),o("previewer",{ref:"wbpreviewer",attrs:{list:t.list,options:t.options}})],1)},w=[],v={render:m,staticRenderFns:w},_=v,g=o("VU/8"),x=g(f,_,!1,null,null,null);e.default=x.exports}});