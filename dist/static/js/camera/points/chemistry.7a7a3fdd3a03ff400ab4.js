webpackJsonp([96],{botB:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Dd8w"),s=i.n(n),r=i("ABCa"),a=i("1DHf"),o=i("32ER"),c=i("rHil"),l=i("jOlP"),u=i("NYxO"),d={name:"chemistry",components:{XHeader:r.a,Cell:a.a,Group:c.a,CellBox:o.a,Spinner:l.a},computed:s()({},Object(u.mapGetters)(["CameraPointsChemistry","User"]),{textList:function(){return this.User.textbook.chemistry}}),data:function(){return{loading:!0}},methods:s()({},Object(u.mapActions)(["getCameraPoints","setCameraPointsScroll","clearCameraPoints"]),{_getData:function(){var t=this;this.loading=!0,this.getCameraPoints({subject:"chemistry",editionId:this.User.subject.chemistry.id}).then(function(){t.loading=!1})}}),beforeRouteEnter:function(t,e,i){i(function(t){t.$parent.$refs.viewBoxBody.scrollTop=t.CameraPointsChemistry.scroll})},beforeRouteLeave:function(t,e,i){this.setCameraPointsScroll({subject:"chemistry",height:this.$parent.$refs.viewBoxBody.scrollTop}),i()},mounted:function(){this._getData()}},h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.loading?t._e():i("group",{staticClass:"gnb_collapse",attrs:{gutter:"0"}},[t._l(t.CameraPointsChemistry.list.chaper,function(e,n){return[i("cell",{key:n,attrs:{title:e.name,"is-link":"","border-intent":!1,"arrow-direction":e.check?"up":"down"},nativeOn:{click:function(t){e.check=!e.check}}}),t._v(" "),i("div",{key:n,staticClass:"slide",class:e.check?"animate":""},[t._l(e.sub_chapter_list,function(e,n){return[i("cell-box",{key:n,style:e.used?"color:#FEAA85":"",attrs:{"is-link":""},nativeOn:{click:function(i){t.$router.push({name:"camera_upload",query:{subject:"chemistry",relationId:e.id,type:"testpoint"}})}}},[i("div",{staticStyle:{width:"100%"},attrs:{slot:"default"},slot:"default"},[t._v(t._s(e.name))])])]})],2)]})],2),t._v(" "),i("div",{staticStyle:{"text-align":"center"}},[t.loading?i("spinner",{attrs:{type:"ripple"}}):t._e()],1)],1)},m=[],p={render:h,staticRenderFns:m},f=p,y=i("VU/8"),_=y(d,f,!1,null,null,null);e.default=_.exports}});