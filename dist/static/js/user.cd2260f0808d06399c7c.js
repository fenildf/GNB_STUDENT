webpackJsonp([38],{P6DD:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("Dd8w"),i=s.n(o),c=s("ABCa"),n=s("1DHf"),l=s("rHil"),a=s("1sNz"),r=s("D8a4"),d=s("NYxO"),u={name:"user",components:{XHeader:c.a,Cell:n.a,Group:l.a,ViewBox:a.a,Badge:r.a},computed:i()({},Object(d.mapGetters)(["User","System","News"])),methods:i()({},Object(d.mapActions)(["getUserNews"]),{_openStore:function(){window.location.href="market://details?id=com.sanbao.guinaben.student"}}),beforeRouteEnter:function(t,e,s){s(function(t){t.getUserNews()})}},m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user"},[s("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"100"},attrs:{slot:"header","left-options":{showBack:!1}},slot:"header"},[t._v("\n    个人中心\n  ")]),t._v(" "),s("group",{staticClass:"headInfo",attrs:{gutter:"0"}},[s("cell",{staticClass:"userBg",attrs:{link:{name:"settings_update"}}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.User.headImg,expression:"User.headImg"}],staticStyle:{"border-radius":"50%","margin-right":"1rem"},attrs:{slot:"icon",width:"70",height:"70"},slot:"icon"}),t._v(" "),s("div",{staticStyle:{color:"#fff"},attrs:{slot:"after-title"},slot:"after-title"},[t._v(t._s(t.User.name))]),t._v(" "),s("div",{staticStyle:{color:"#fff","padding-top":".25rem"},attrs:{slot:"inline-desc"},slot:"inline-desc"},[t._v(t._s(t.User.mobile))])])],1),t._v(" "),s("group",{staticStyle:{"margin-top":"-2px"},attrs:{gutter:"0"}},[s("cell",{attrs:{title:"我的收藏本",link:"collect"}},[s("i",{staticClass:"icon iconfont icon-my_collection",staticStyle:{color:"#4cc0be"},attrs:{slot:"icon"},slot:"icon"})]),t._v(" "),s("cell",{attrs:{title:"我的习题册",link:"myBook"}},[s("i",{staticClass:"icon iconfont icon-my_exercisebook",staticStyle:{color:"#4cc0be"},attrs:{slot:"icon"},slot:"icon"})]),t._v(" "),s("cell",{attrs:{title:"设置",link:"settings"}},[s("i",{staticClass:"icon iconfont icon-settingfull",staticStyle:{color:"#4cc0be"},attrs:{slot:"icon"},slot:"icon"})]),t._v(" "),s("cell",{attrs:{title:"消息通知",link:"message"}},[s("i",{staticClass:"icon iconfont icon-comment2",staticStyle:{color:"#4cc0be"},attrs:{slot:"icon"},slot:"icon"}),t._v(" "),t.News.correct||t.News.system?s("badge"):t._e()],1),t._v(" "),"IOS"!=t.System&&"3.3.0"!==t.User.version?s("cell",{attrs:{title:"版本更新","is-link":""},nativeOn:{click:function(e){t._openStore(e)}}},[s("i",{staticClass:"icon iconfont icon-gengxin",staticStyle:{color:"#4cc0be"},attrs:{slot:"icon"},slot:"icon"}),t._v(" "),s("badge")],1):t._e()],1)],1)},f=[],_={render:m,staticRenderFns:f},g=_,v=s("VU/8"),p=v(u,g,!1,null,null,null);e.default=p.exports}});