webpackJsonp([32],{IdGU:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"\n.photo[data-v-48a1c6d5] {\n  position: relative;\n  margin-top: 10px;\n  padding-left: 10px;\n}\n.photo .plus[data-v-48a1c6d5] {\n  text-align: center;\n  height: 90px;\n  width: 65px;\n  border: 1px solid #ccc;\n  font-size: 48px;\n  color: #ccc;\n  border-radius: 3px;\n  float: left;\n}\n.select-item[data-v-48a1c6d5] {\n  width: 5rem;\n  height: 1.5rem;\n  line-height: 1.5rem;\n  text-align: center;\n  border-radius: 3px;\n  color: #4cc0be;\n  border: 1px solid #4cc0be;\n  background-color: #fff;\n  margin-right: .3rem;\n  margin-top: .75rem;\n}\n.select-item-selected[data-v-48a1c6d5] {\n  background: #ffffff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTZDOEJBQ0E3NkIxMTFFNEE3MzJFOUJCMEU5QUM0QkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTZDOEJBQ0I3NkIxMTFFNEE3MzJFOUJCMEU5QUM0QkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNkM4QkFDODc2QjExMUU0QTczMkU5QkIwRTlBQzRCQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNkM4QkFDOTc2QjExMUU0QTczMkU5QkIwRTlBQzRCQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnMGp3kAAAAJUExURf9KAP///////4Jqdw0AAAADdFJOU///ANfKDUEAAAAuSURBVHjaTMpBDgAABAPB5f+PlhLUpZMWuQcYMWLEyDN4ymqa5KS4+3G+KAEGACQmAGlKzr56AAAAAElFTkSuQmCC) no-repeat right bottom;\n  border-color: #ff4a00;\n}\n",""])},OZur:function(t,e,a){"use strict";function i(t){a("fSAY")}Object.defineProperty(e,"__esModule",{value:!0});var o=a("Dd8w"),n=a.n(o),c=a("YxJB"),r=a("3Lt7"),l=a("1HIy"),s=a("rHil"),d=a("ABCa"),p=a("1sNz"),m=a("/0UN"),u=a("hGvq"),A=a("NYxO"),h={name:"uploader",components:{XHeader:d.a,ViewBox:p.a,Flexbox:c.a,FlexboxItem:r.a,Group:s.a,GroupTitle:l.a,Checker:m.a,CheckerItem:u.a},computed:n()({},Object(A.mapGetters)(["CameraUploader"])),data:function(){return{comment:""}},methods:n()({},Object(A.mapActions)(["cameraErrorUpload","cameraErrorDel","cameraErrorCamera"]),{_add:function(){var t=this;plus.camera.getCamera().captureImage(function(e){plus.io.resolveLocalFileSystemURL(e,function(e){t.cameraErrorCamera(e.toLocalURL()),t.$router.push({name:"camera_photo"})})})},_del:function(t){this.cameraErrorDel(t)},_upload:function(){this.CameraUploader.list.length?this.cameraErrorUpload({errorComment:this.comment}).then(function(){history.go(-1)}):this.$vux.toast.show({text:"您还未拍照",type:"text",time:1500,position:"bottom"})}}),beforeRouteEnter:function(t,e,a){a(function(t){t.comment=""})}},b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view-box",{attrs:{"body-padding-top":"46px"}},[a("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"1"},attrs:{slot:"header","left-options":{backText:"照片"}},slot:"header"},[a("i",{staticClass:"icon iconfont icon-upload",staticStyle:{"font-size":"22px"},attrs:{slot:"right"},on:{click:t._upload},slot:"right"})]),t._v(" "),a("div",[a("div",{staticStyle:{padding:"10px 15px"}},[a("flexbox",{attrs:{wrap:"wrap",align:"baseline",gutter:0}},[t._l(t.CameraUploader.list,function(e,i){return a("flexbox-item",{key:i,attrs:{span:3}},[a("div",{staticClass:"photo"},[a("div",{staticStyle:{"text-align":"center",height:"90px",width:"65px","background-size":"100% 100%"},style:"background-image:url("+e+")"}),t._v(" "),a("i",{staticClass:"icon iconfont icon-error",staticStyle:{"font-size":"30px",position:"absolute",left:"58px",top:"-25px"},on:{click:function(e){t._del(i)}}})])])}),t._v(" "),1!==t.CameraUploader.list.length?a("flexbox-item",{attrs:{span:3},nativeOn:{click:function(e){t._add(e)}}},[a("div",{staticClass:"photo"},[a("div",{staticClass:"plus"},[a("b",[t._v("+")])])])]):t._e()],2)],1),t._v(" "),a("group",{attrs:{title:"选择错误原因："}},[a("checker",{staticStyle:{padding:".25rem .75rem 1rem"},attrs:{type:"radio","default-item-class":"select-item","selected-item-class":"select-item-selected"},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}},[a("checker-item",{attrs:{value:"概念模糊"}},[t._v("概念模糊")]),t._v(" "),a("checker-item",{attrs:{value:"粗心大意"}},[t._v("粗心大意")]),t._v(" "),a("checker-item",{attrs:{value:"能力不够"}},[t._v("能力不够")])],1)],1)],1)],1)},x=[],f={render:b,staticRenderFns:x},g=f,v=a("VU/8"),k=i,G=v(h,g,!1,k,"data-v-48a1c6d5",null);e.default=G.exports},fSAY:function(t,e,a){var i=a("IdGU");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("0cd938b2",i,!0)}});