webpackJsonp([84],{vL23:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("Dd8w"),a=n.n(o),i=n("2sLL"),s=n("ABCa"),r=n("1sNz"),c=n("rHil"),l=n("1DHf"),h=n("7Ah8"),d=n("jOlP"),u=n("NYxO"),p=n("UgXb"),g=n("xJtg"),f={name:"paper",components:{XButton:i.a,XHeader:s.a,ViewBox:r.a,Group:c.a,Cell:l.a,PopupPicker:h.a,Spinner:d.a,Share:g.a,gnbChangeSub:p.a},computed:a()({},Object(u.mapGetters)(["DownloadPaper"])),data:function(){return{loading:!0,error:!1,showAction:!1,subject:"",share:{content:"",title:"我的试卷下载",href:""}}},methods:a()({},Object(u.mapActions)(["getDownloadPaperHistory","clearDownload"]),{_download:function(t){this.share.href=t.url,this.share.content=t.name,this.showAction=!0},_getData:function(){var t=this;this.clearDownload({type:"paper"}),this.loading=!0,this.getDownloadPaperHistory({subject:this.subject}).then(function(){t.error=!1,t.loading=!1}).catch(function(e){t.error=!0,t.loading=!1})}}),watch:{subject:function(){this._getData()}},beforeRouteEnter:function(t,e,n){n(function(t){"download"===e.name&&t._getData()})},beforeRouteLeave:function(t,e,n){this.showAction?(this.showAction=!1,n(!1)):n()}},w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view-box",{attrs:{"body-padding-top":"46px"}},[n("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{slot:"header","left-options":{backText:"试卷下载"}},slot:"header"},[n("div",{staticStyle:{margin:"0"},attrs:{slot:"right"},slot:"right"},[n("gnbChangeSub",{attrs:{change:t.subject},on:{"update:change":function(e){t.subject=e}}})],1)]),t._v(" "),n("div",[n("group",{directives:[{name:"show",rawName:"v-show",value:t.DownloadPaper.list.length,expression:"DownloadPaper.list.length"}],attrs:{gutter:0,title:"只展示最近一个月的试卷"}},t._l(t.DownloadPaper.list,function(e,o){return n("cell",{key:o,attrs:{title:e.name}},[n("div",{staticStyle:{color:"#4cc0be"},attrs:{slot:"value"},slot:"value"},[n("span",{staticStyle:{padding:"0 5px","line-height":"24px"},on:{click:function(n){t._download(e)}}},[n("i",{staticClass:"icon iconfont icon-download",staticStyle:{"font-size":"16px"}}),t._v("下载\n          ")])])])})),t._v(" "),n("div",{staticStyle:{"text-align":"center",padding:"10px 0"}},[t.loading?n("spinner",{attrs:{type:"lines"}}):t.DownloadPaper.list.length?t.error?n("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"},on:{click:function(e){t._getData()}}},[t._v("出错了点我重新加载")]):t._e():n("p",{staticStyle:{"font-size":"16px",color:"#4cc0be"}},[t._v("近一月还未有下载记录")])],1)],1),t._v(" "),n("share",{attrs:{change:t.showAction,showAction:t.showAction,content:t.share.content,title:t.share.title,href:t.share.href},on:{"update:change":function(e){t.showAction=e}}})],1)},b=[],v={render:w,staticRenderFns:b},_=v,x=n("VU/8"),y=x(f,_,!1,null,null,null);e.default=y.exports}});