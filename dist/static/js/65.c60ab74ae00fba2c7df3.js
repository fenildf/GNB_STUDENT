webpackJsonp([65],{1004:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(129),r=i.n(o),a=i(657),n=i.n(a),l=i(656),s=i.n(l),c=i(765),d=i.n(c),u=i(621),p=i.n(u),f=i(622),x=i.n(f),h=i(196);e.default={name:"photo",components:{XHeader:p.a,ViewBox:x.a,Flexbox:n.a,FlexboxItem:s.a,GroupTitle:d.a},methods:r()({},i.i(h.b)(["uploadHeadImg","workbookUploadAdd","workbookUpload","workbookUploadDel","workbookCamera"]),{_add:function(){var t=this;plus.camera.getCamera().captureImage(function(e){plus.io.resolveLocalFileSystemURL(e,function(e){t.workbookCamera(e.toLocalURL()),t.$router.push({name:"workbook_uploader_photo"})})})},_del:function(t){this.workbookUploadDel(t)},_upload:function(){if(!this.workbookUploader.list.length)return void this.$vux.toast.show({text:"您还未拍照",type:"text",time:1500,position:"bottom"});this.workbookUpload().then(function(){history.go(-1)})}}),computed:r()({},i.i(h.a)(["workbookUploader","Route"]))}},1035:function(t,e,i){e=t.exports=i(504)(!1),e.push([t.i,".photo[data-v-6afbec60]{position:relative;margin-top:10px;padding-left:10px}.photo .plus[data-v-6afbec60]{text-align:center;height:90px;width:65px;border:1px solid #ccc;font-size:48px;color:#ccc;border-radius:3px;float:left}",""])},1066:function(t,e,i){var o=i(1035);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(505)("14332643",o,!0)},1160:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view-box",{attrs:{"body-padding-top":"46px"}},[i("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{"left-options":{backText:"上传作业"}},slot:"header"},[i("i",{staticClass:"icon iconfont icon-upload",staticStyle:{"font-size":"22px"},on:{click:t._upload},slot:"right"})]),t._v(" "),i("div",[i("group-title",{staticStyle:{margin:"10px 0 0"}},[t._v("需要上传作业后方可查看答案,最多5张")]),t._v(" "),i("div",{staticStyle:{padding:"10px 15px"}},[i("flexbox",{attrs:{wrap:"wrap",align:"baseline",gutter:0}},[t._l(t.workbookUploader.list,function(e,o){return i("flexbox-item",{key:o,attrs:{span:3}},[i("div",{staticClass:"photo"},[i("div",{staticStyle:{"text-align":"center",height:"90px",width:"65px","background-size":"100% 100%"},style:"background-image:url("+e+")"}),t._v(" "),i("i",{staticClass:"icon iconfont icon-error",staticStyle:{"font-size":"30px",position:"absolute",left:"58px",top:"-25px"},on:{click:function(e){t._del(o)}}})])])}),t._v(" "),5!==t.workbookUploader.list.length?i("flexbox-item",{attrs:{span:3},nativeOn:{click:function(e){t._add(e)}}},[i("div",{staticClass:"photo"},[i("div",{staticClass:"plus"},[i("b",[t._v("+")])])])]):t._e()],2)],1)],1)],1)},staticRenderFns:[]}},607:function(t,e,i){i(1066);var o=i(50)(i(1004),i(1160),"data-v-6afbec60",null);t.exports=o.exports},617:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(195),r=i.n(o);e.default={name:"x-header",props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},beforeMount:function(){this.$slots["overwrite-title"]&&(this.shouldOverWriteTitle=!0)},computed:{_leftOptions:function(){return r()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}},data:function(){return{shouldOverWriteTitle:!1}}}},618:function(t,e,i){e=t.exports=i(504)(!1),e.push([t.i,'.vux-header{position:relative;padding:3px 0;box-sizing:border-box;background-color:#4cc0be}.vux-header .vux-header-title{line-height:40px;text-align:center;font-size:18px;font-weight:400;color:#fff}.vux-header-title-area,.vux-header .vux-header-title{margin:0 88px;height:40px;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vux-header .vux-header-title>span{display:inline-block}.vux-header .vux-header-left,.vux-header .vux-header-right{position:absolute;top:14px;display:block;font-size:14px;line-height:21px;color:#fff}.vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button{float:left;margin-right:8px;color:#fff}.vux-header .vux-header-left a:active,.vux-header .vux-header-left button:active,.vux-header .vux-header-right a:active,.vux-header .vux-header-right button:active{opacity:.5}.vux-header .vux-header-left{left:18px}.vux-header .vux-header-left .vux-header-back{padding-left:16px}.vux-header .vux-header-left .left-arrow{position:absolute;width:30px;height:30px;top:-5px;left:-5px}.vux-header .vux-header-left .left-arrow:before{content:"";position:absolute;width:12px;height:12px;border:1px solid #fff;border-width:1px 0 0 1px;-webkit-transform:rotate(315deg);transform:rotate(315deg);top:8px;left:7px}.vux-header .vux-header-right{right:15px}.vux-header .vux-header-right a,.vux-header .vux-header-right button{margin-left:8px;margin-right:0}.vux-header .vux-header-right .vux-header-more:after{content:"\\2022   \\2022   \\2022   ";font-size:16px}.vux-header-fade-in-right-enter-active{-webkit-animation:fadeinR .5s;animation:fadeinR .5s}.vux-header-fade-in-left-enter-active{-webkit-animation:fadeinL .5s;animation:fadeinL .5s}@-webkit-keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinR{0%{opacity:0;-webkit-transform:translateX(150px);transform:translateX(150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes fadeinL{0%{opacity:0;-webkit-transform:translateX(-150px);transform:translateX(-150px)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}',""])},619:function(t,e,i){var o=i(618);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(505)("bb31c83a",o,!0)},620:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-header"},[i("div",{staticClass:"vux-header-left"},[t._t("overwrite-left",[i("transition",{attrs:{name:t.transition}},[i("a",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault"))return null},t.onClickBack]}},[t._v(t._s(void 0===t._leftOptions.backText?"返回":t._leftOptions.backText))])]),t._v(" "),i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:t.onClickBack}})])]),t._v(" "),t._t("left")],2),t._v(" "),t.shouldOverWriteTitle?t._e():i("h1",{staticClass:"vux-header-title",on:{click:function(e){t.$emit("on-click-title")}}},[t._t("default",[i("transition",{attrs:{name:t.transition}},[i("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])])],2),t._v(" "),t.shouldOverWriteTitle?i("div",{staticClass:"vux-header-title-area"},[t._t("overwrite-title")],2):t._e(),t._v(" "),i("div",{staticClass:"vux-header-right"},[t.rightOptions.showMore?i("a",{staticClass:"vux-header-more",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault"))return null},function(e){t.$emit("on-click-more")}]}}):t._e(),t._v(" "),t._t("right")],2)])},staticRenderFns:[]}},621:function(t,e,i){i(619);var o=i(50)(i(617),i(620),null,null);t.exports=o.exports},622:function(t,e,i){i(625);var o=i(50)(i(623),i(626),null,null);t.exports=o.exports},623:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"view-box",props:["bodyPaddingTop","bodyPaddingBottom"],methods:{scrollTo:function(t){this.$refs.viewBoxBody.scrollTop=t},getScrollTop:function(){return this.$refs.viewBoxBody.scrollTop},getScrollBody:function(){return this.$refs.viewBoxBody}}}},624:function(t,e,i){e=t.exports=i(504)(!1),e.push([t.i,'.weui-tabbar{display:-webkit-flex;display:-webkit-box;display:flex;position:absolute;z-index:500;bottom:0;width:100%;background-color:#f7f7fa}.weui-tabbar:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #c0bfc4;color:#c0bfc4;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-tabbar__item{display:block;-webkit-flex:1;flex:1;padding:5px 0 0;font-size:0;color:#999;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon>i,.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{color:#4cc0be}.weui-tabbar__icon{display:inline-block;width:27px;height:27px}.weui-tabbar__icon>i,i.weui-tabbar__icon{font-size:24px;color:#999}.weui-tabbar__icon img{width:100%;height:100%}.weui-tabbar__label{text-align:center;color:#999;font-size:10px;line-height:1.8}.weui-tab{position:relative;height:100%}.weui-tab__panel{box-sizing:border-box;height:100%;padding-bottom:50px;overflow:auto;-webkit-overflow-scrolling:touch}.weui-tab__content{display:none}',""])},625:function(t,e,i){var o=i(624);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(505)("3fed9b4a",o,!0)},626:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-tab"},[t._t("header"),t._v(" "),i("div",{ref:"viewBoxBody",staticClass:"weui-tab__panel vux-fix-safari-overflow-scrolling",style:{paddingTop:t.bodyPaddingTop,paddingBottom:t.bodyPaddingBottom},attrs:{id:"vux_view_box_body"}},[t._t("default")],2),t._v(" "),t._t("bottom")],2)},staticRenderFns:[]}},650:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=["-moz-box-","-webkit-box-",""];e.default={name:"flexbox-item",props:{span:[Number,String],order:[Number,String]},beforeMount:function(){this.bodyWidth=document.documentElement.offsetWidth},methods:{buildWidth:function(t){return"number"==typeof t?t<1?t:t/12:"string"==typeof t?t.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var t={},e="horizontal"===this.$parent.orient?"marginLeft":"marginTop";if(1*this.$parent.gutter!=0&&(t[e]=this.$parent.gutter+"px"),this.span)for(var i=0;i<o.length;i++)t[o[i]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return void 0!==this.order&&(t.order=this.order),t}},data:function(){return{bodyWidth:0}}}},651:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"flexbox",props:{gutter:{type:Number,default:8},orient:{type:String,default:"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){return{"justify-content":this.justify,"-webkit-justify-content":this.justify,"align-items":this.align,"-webkit-align-items":this.align,"flex-wrap":this.wrap,"-webkit-flex-wrap":this.wrap,"flex-direction":this.direction,"-webkit-flex-direction":this.direction}}}}},652:function(t,e,i){e=t.exports=i(504)(!1),e.push([t.i,".vux-flexbox{width:100%;text-align:left;display:-webkit-box;display:flex;display:-webkit-flex;box-align:center;-webkit-align-items:center;align-items:center}.vux-flexbox .vux-flexbox-item{flex:1;-webkit-flex:1;min-width:20px;width:0}.vux-flexbox .vux-flexbox-item:first-child{margin-left:0!important;margin-top:0!important}.vux-flex-col .vux-flex-row{box-direction:row;box-orient:horizontal;-webkit-flex-direction:row;flex-direction:row}.vux-flex-col{box-orient:vertical;-webkit-flex-direction:column;flex-direction:column}.vux-flex-col>.vux-flexbox-item{width:100%}",""])},653:function(t,e,i){var o=i(652);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(505)("e72d70cc",o,!0)},654:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-flexbox",class:{"vux-flex-col":"vertical"===t.orient,"vux-flex-row":"horizontal"===t.orient},style:t.styles},[t._t("default")],2)},staticRenderFns:[]}},655:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-flexbox-item",style:t.style},[t._t("default")],2)},staticRenderFns:[]}},656:function(t,e,i){var o=i(50)(i(650),i(655),null,null);t.exports=o.exports},657:function(t,e,i){i(653);var o=i(50)(i(651),i(654),null,null);t.exports=o.exports},754:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"group-title"}},757:function(t,e,i){e=t.exports=i(504)(!1),e.push([t.i,'.weui-cell_access{-webkit-tap-highlight-color:rgba(0,0,0,0);color:inherit}.weui-cell_access:active{background-color:#ececec}.weui-cell_access .weui-cell__ft{padding-right:13px;position:relative}.weui-cell_access .weui-cell__ft:after{content:" ";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:2px}.weui-cell_link{color:#586c94;font-size:14px}.weui-cell_link:first-child:before{display:block}.weui-cell_access.vux-cell-box{padding-right:13px;position:relative}.weui-cell_access.vux-cell-box:after{content:" ";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;-webkit-transform:matrix(.71,.71,-.71,.71,0,0);transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:17px}.weui-cells{margin-top:1.25em;background-color:#fff;line-height:1.5;font-size:16px;overflow:hidden;position:relative}.weui-cells:before{top:0;border-top:1px solid #d9d9d9;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-cells:after,.weui-cells:before{content:" ";position:absolute;left:0;right:0;height:1px;color:#d9d9d9}.weui-cells:after{bottom:0;border-bottom:1px solid #d9d9d9;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-cells__title{margin-top:.77em;margin-bottom:.3em;padding-left:15px;padding-right:15px;color:#999;font-size:14px}.weui-cells__title+.weui-cells{margin-top:0}.weui-cells__tips{margin-top:.3em;color:#999;padding-left:15px;padding-right:15px;font-size:14px}.weui-cell{padding:10px 15px;position:relative;display:-webkit-flex;display:-webkit-box;display:flex;-webkit-align-items:center;align-items:center}.weui-cell:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d9d9d9;color:#d9d9d9;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5);left:15px}.weui-cell:first-child:before{display:none}.weui-cell_primary{-webkit-align-items:flex-start;align-items:flex-start}.weui-cell__bd{-webkit-flex:1;flex:1}.weui-cell__ft{text-align:right;color:#999}.vux-cell-justify{height:1.5em}.vux-cell-justify.vux-cell-justify:after{content:".";display:inline-block;width:100%;overflow:hidden;height:0}',""])},759:function(t,e,i){var o=i(757);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(505)("31a57a6e",o,!0)},762:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"weui-cells__title"},[t._t("default")],2)},staticRenderFns:[]}},765:function(t,e,i){i(759);var o=i(50)(i(754),i(762),null,null);t.exports=o.exports}});