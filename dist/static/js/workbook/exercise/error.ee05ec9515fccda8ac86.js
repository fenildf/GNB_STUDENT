webpackJsonp([45],{GJrN:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("Dd8w"),s=t.n(i),n=t("rHil"),o=t("1DHf"),l=t("2FOq"),a=t("63CM"),u=t.n(a),c=t("NYxO"),p={name:"error",components:{Group:n.a,Cell:o.a,Previewer:l.a},computed:s()({},Object(c.mapGetters)(["workbookExercise"]),{errorList:function(){return this.workbookExercise.list.errorList}}),directives:{TransferDom:u.a},data:function(){return{list:[{}],options:{preload:[1,1],bgOpacity:1,fullscreenEl:!1,history:!0}}},methods:{show:function(r,e){var t=this;this.list=[],this.list.push({src:this.errorList[r].imgList[e].url,w:this.errorList[r].imgList[e].width,h:this.errorList[r].imgList[e].height}),this.$nextTick(function(){t.$refs.previewer.show(0)})}}},m=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",[r._l(r.errorList,function(e,i){return t("group",{key:i,attrs:{title:e.name,gutter:i?"10px":"0px"}},r._l(e.imgList,function(e,s){return t("cell",{key:s,nativeOn:{click:function(e){r.show(i,s)}}},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.url+"-errorList?123",expression:"img.url+'-errorList?123'"}]})])}))}),r._v(" "),t("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[t("previewer",{ref:"previewer",attrs:{list:r.list,options:r.options}})],1)],2)},f=[],h={render:m,staticRenderFns:f},d=h,v=t("VU/8"),w=v(p,d,!1,null,null,null);e.default=w.exports}});