webpackJsonp([64],{qhyn:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("Dd8w"),n=o.n(i),a=o("ABCa"),s=o("rHil"),r=o("1DHf"),l=o("odqc"),d=o("Znkm"),c=o("2sLL"),u=o("1sNz"),m=o("2FOq"),p=o("jOlP"),f=o("UIMx"),h=o("NYxO"),k={name:"myBookAdd",components:{XHeader:a.a,Group:s.a,Cell:r.a,Tab:l.a,TabItem:d.a,XButton:c.a,ViewBox:u.a,Previewer:m.a,Spinner:p.a,Tabbar:f.a},computed:n()({},Object(h.mapGetters)(["User","myBookAddList","Route"]),{textbookId:function(){return this.Route.query.id},textBookList:function(){return this.User.textbook[this.Route.params.subject]},textBookIndex:function(){for(var t=0;t<this.User.textbook[this.Route.params.subject].length;t++)if(Number(this.textBookList[t].id)===Number(this.Route.query.id))return t}}),data:function(){return{loading:!0,tabwidth:"0px",list:[{src:"",w:0,h:0}],options:{preload:[1,1],bgOpacity:1,fullscreenEl:!1,history:!0}}},methods:n()({},Object(h.mapActions)(["getMyBookAdd","myBookAddClear","myBookAdd","myBookDel"]),{_add:function(t,e,o){this.myBookAdd({type:"add",pindex:t,index:e,workbookId:o})},_del:function(t,e,o){this.myBookDel({type:"add",pindex:t,index:e,workbookId:o})},_getData:function(){var t=this;this.loading=!0,this.getMyBookAdd().then(function(){t.loading=!1}).catch(function(){t.loading=!0})},show:function(t,e){var o=this;this.list=[],this.list.push({src:this.myBookAddList[t].list[e].img.url+"-workbookBig",w:"700",h:"1050"}),this.$nextTick(function(){o.$refs.wbpreviewer.show(0)})}}),watch:{textbookId:function(t){t&&(this.myBookAddClear(),this._getData())}},beforeRouteEnter:function(t,e,o){o(function(t){t.myBookAddClear(),t.tabwidth=85*t.textBookList.length+"px",t.$refs.tab.scrollLeft=Number(85*(t.textBookIndex-1)),t._getData()})}},b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{height:"100%"}},[o("view-box",{attrs:{"body-padding-top":"86px","body-padding-bottom":"46px"}},[o("div",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{slot:"header"},slot:"header"},[o("x-header",{attrs:{"left-options":{backText:"习题册管理"}}},[o("div",{attrs:{slot:"right"},on:{click:function(e){t.$router.push({name:"myBook_search",param:{subject:t.Route.params.subject}})}},slot:"right"},[o("i",{staticClass:"icon iconfont icon-iconfontsousuo",staticStyle:{padding:"8px","font-size":"26px","margin-right":"-10px"}})])]),t._v(" "),o("div",{ref:"tab",staticStyle:{width:"100%",overflow:"scroll","-webkit-overflow-scrolling":"touch","z-index":"1"}},[o("tab",{style:"min-width:100%;width:"+t.tabwidth,attrs:{"line-width":1,animate:!1}},[t._l(t.textBookList,function(e,i){return[o("tab-item",{key:i,attrs:{selected:Number(t.Route.query.id)===Number(e.id)},nativeOn:{click:function(o){t.$router.replace({name:"myBook_add",query:{id:e.id}})}}},[t._v("\n              "+t._s(e.name)+"\n            ")])]})],2)],1)],1),t._v(" "),o("div",{attrs:{slot:"default"},slot:"default"},[t.loading?t._e():o("group",{attrs:{gutter:"0"}},[t._l(t.myBookAddList,function(e,i){return t._l(e.list,function(e,n){return o("cell",{key:n},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img.url+"?imageMogr2/auto-orient/thumbnail/120x160!/format/jpg/interlace/1/blur/1x0/quality/100|imageslim",expression:'myBook.img.url+"?imageMogr2/auto-orient/thumbnail/120x160!/format/jpg/interlace/1/blur/1x0/quality/100|imageslim"'}],staticClass:"previewer-myBook-img",attrs:{slot:"icon",width:"60",height:"80"},on:{click:function(e){t.show(i,n)}},slot:"icon"}),t._v(" "),o("div",{staticStyle:{width:"90%"},attrs:{slot:"after-title"},on:{click:function(e){t.show(i,n)}},slot:"after-title"},[o("p",{staticStyle:{color:"#4cc0be","font-size":"14px"}},[t._v("   "+t._s(e.year)+"版")]),t._v(" "),o("p",{staticClass:"ellipsis",staticStyle:{"font-size":".9rem"}},[t._v("  "+t._s(e.workbookName))]),t._v(" "),e.version?t._l(e.version.split(","),function(e,i){return o("p",{key:i,staticStyle:{color:"#aaa","font-size":"14px"}},[t._v("\n                     "+t._s(e)+"\n                ")])}):t._e()],2),t._v(" "),o("div",{attrs:{slot:"default"},slot:"default"},[e.status?o("x-button",{attrs:{slot:"default",mini:"",type:"warn"},nativeOn:{click:function(o){t._del(i,n,e.workbookId)}},slot:"default"},[t._v("删除")]):o("x-button",{attrs:{slot:"default",mini:"",type:"primary"},nativeOn:{click:function(o){t._add(i,n,e.workbookId)}},slot:"default"},[t._v("添加")])],1)])})})],2),t._v(" "),o("div",{staticStyle:{"text-align":"center",padding:"20px 0"}},[t.loading?o("spinner",{attrs:{type:"dots"}}):0===t.myBookAddList.length?o("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"}},[t._v("没有更多的习题册了~")]):t._e()],1)],1)]),t._v(" "),o("previewer",{ref:"wbpreviewer",attrs:{list:t.list,options:t.options}})],1)},y=[],v={render:b,staticRenderFns:y},x=v,g=o("VU/8"),w=g(k,x,!1,null,null,null);e.default=w.exports}});