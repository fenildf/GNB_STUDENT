webpackJsonp([112],{"/kga":function(t,e,n){"use strict";function o(t){n("OQbP")}var i=n("JkZY"),a={mixins:[i.a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),e=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&e)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===t.layout}},[n("transition",{attrs:{name:t.maskTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),n("transition",{attrs:{name:t.dialogTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},u=[],c={render:r,staticRenderFns:u},s=c,l=n("VU/8"),h=o,m=l(a,s,!1,h,null,null);e.a=m.exports},"/ocq":function(t,e,n){t.exports=n("49fU")(358)},"49fU":function(t,e){t.exports=vendor_library},"62KO":function(t,e,n){"use strict";function o(t){n("vGvH")}var i=n("/kga"),a={name:"confirm",components:{XDialog:i.a},props:{value:{type:Boolean,default:!1},showInput:{type:Boolean,default:!1},placeholder:{type:String,default:""},theme:{type:String,default:"ios"},hideOnBlur:{type:Boolean,default:!1},title:String,confirmText:String,cancelText:String,maskTransition:{type:String,default:"vux-fade"},maskZIndex:[Number,String],dialogTransition:{type:String,default:"vux-dialog"},content:String,closeOnConfirm:{type:Boolean,default:!0},inputAttrs:Object},created:function(){this.showValue=this.show,this.value&&(this.showValue=this.value)},watch:{value:function(t){this.showValue=t},showValue:function(t){var e=this;this.$emit("input",t),t&&(this.showInput&&(this.msg="",setTimeout(function(){e.$refs.input&&e.setInputFocus()},300)),this.$emit("on-show"))}},data:function(){return{msg:"",showValue:!1}},methods:{setInputValue:function(t){this.msg=t},setInputFocus:function(){this.$refs.input.focus()},_onConfirm:function(){this.showValue&&(this.closeOnConfirm&&(this.showValue=!1),this.$emit("on-confirm",this.msg))},_onCancel:function(){this.showValue&&(this.showValue=!1,this.$emit("on-cancel"))}}},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-confirm"},[n("x-dialog",{attrs:{dialogClass:"android"===t.theme?"weui-dialog weui-skin_android":"weui-dialog","mask-transition":t.maskTransition,"dialog-transition":"android"===t.theme?"vux-fade":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[t.title?n("div",{staticClass:"weui-dialog__hd"},[n("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.showInput?n("div",{staticClass:"vux-prompt",on:{touchstart:function(e){e.preventDefault(),t.setInputFocus(e)}}},[n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],ref:"input",staticClass:"vux-prompt-msgbox",attrs:{placeholder:t.placeholder},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}},"input",t.inputAttrs,!1))]):n("div",{staticClass:"weui-dialog__bd"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),n("div",{staticClass:"weui-dialog__ft"},[n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{href:"javascript:;"},on:{click:t._onCancel}},[t._v(t._s(t.cancelText||"取消"))]),t._v(" "),n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onConfirm}},[t._v(t._s(t.confirmText||"确定"))])])])],1)},u=[],c={render:r,staticRenderFns:u},s=c,l=n("VU/8"),h=o,m=l(a,s,!1,h,null,null);e.a=m.exports},"7+uW":function(t,e,n){t.exports=n("49fU")(355)},"9JMe":function(t,e,n){t.exports=n("49fU")(361)},Bfwr:function(t,e,n){"use strict";function o(t){n("UZ6i")}var i={name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading"},[n("div",{staticClass:"weui-mask_transparent"}),t._v(" "),n("div",{staticClass:"weui-toast",style:{position:t.position}},[n("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),n("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2)])])])},r=[],u={render:a,staticRenderFns:r},c=u,s=n("VU/8"),l=o,h=s(i,c,!1,l,null,null);e.a=h.exports},NHnr:function(t,e,n){"use strict";function o(t){n("h+wy")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a=(n("j1ja"),n("olkN")),r=n("v5o6"),u=n.n(r),c=n("Gu7T"),s=n.n(c),l=n("/ocq"),h=n("9JMe"),m=[{path:"/",component:function(t){return Promise.all([n.e(0),n.e(2)]).then(function(){return t(n("YtIq"))}.bind(null,n)).catch(n.oe)},redirect:function(t){return localStorage.getItem("token")?"index":"login"},children:[{path:"index",name:"index",component:function(t){return Promise.all([n.e(0),n.e(5)]).then(function(){return t(n("H0dg"))}.bind(null,n)).catch(n.oe)}},{path:"bag",name:"bag",component:function(t){return Promise.all([n.e(0),n.e(8)]).then(function(){return t(n("FxCO"))}.bind(null,n)).catch(n.oe)}},{path:"user",name:"user",component:function(t){return Promise.all([n.e(0),n.e(38)]).then(function(){return t(n("P6DD"))}.bind(null,n)).catch(n.oe)}}]},{path:"/article/:id",component:function(t){return Promise.all([n.e(0),n.e(39)]).then(function(){return t(n("YpuW"))}.bind(null,n)).catch(n.oe)}}],d={path:"/login",component:function(t){return n.e(35).then(function(){return t(n("Uf6q"))}.bind(null,n)).catch(n.oe)},children:[{path:"/",component:function(t){return Promise.all([n.e(0),n.e(71)]).then(function(){return t(n("b/kq"))}.bind(null,n)).catch(n.oe)}},{path:"/forget",component:function(t){return Promise.all([n.e(0),n.e(72)]).then(function(){return t(n("s73Z"))}.bind(null,n)).catch(n.oe)}},{path:"/register",component:function(t){return Promise.all([n.e(0),n.e(70)]).then(function(){return t(n("Fiug"))}.bind(null,n)).catch(n.oe)}},{path:"/info",component:function(t){return Promise.all([n.e(0),n.e(14)]).then(function(){return t(n("zNy7"))}.bind(null,n)).catch(n.oe)}},{path:"/resetPassword",component:function(t){return Promise.all([n.e(0),n.e(69)]).then(function(){return t(n("ZUY7"))}.bind(null,n)).catch(n.oe)}},{path:"/setPassword",component:function(t){return Promise.all([n.e(0),n.e(68)]).then(function(){return t(n("EL1J"))}.bind(null,n)).catch(n.oe)}}]},p={path:"/about",component:function(t){return n.e(110).then(function(){return t(n("jCss"))}.bind(null,n)).catch(n.oe)},children:[{path:"/",component:function(t){return Promise.all([n.e(0),n.e(13)]).then(function(){return t(n("oQjA"))}.bind(null,n)).catch(n.oe)}},{path:"my",component:function(t){return Promise.all([n.e(0),n.e(36)]).then(function(){return t(n("/WIw"))}.bind(null,n)).catch(n.oe)}},{path:"advice",component:function(t){return Promise.all([n.e(0),n.e(9)]).then(function(){return t(n("+oFv"))}.bind(null,n)).catch(n.oe)}},{path:"adviceHistory",component:function(t){return Promise.all([n.e(0),n.e(101)]).then(function(){return t(n("v91k"))}.bind(null,n)).catch(n.oe)}}]},f=[{path:"/camera/chapter",name:"camera_chapter",component:function(t){return Promise.all([n.e(0),n.e(99)]).then(function(){return t(n("V9ZT"))}.bind(null,n)).catch(n.oe)},redirect:"/camera/chapter/math",children:[{path:"physics",name:"camera_chapter_physics",component:function(t){return Promise.all([n.e(0),n.e(97)]).then(function(){return t(n("xKy/"))}.bind(null,n)).catch(n.oe)}},{path:"math",name:"camera_chapter_math",component:function(t){return Promise.all([n.e(0),n.e(98)]).then(function(){return t(n("7qqS"))}.bind(null,n)).catch(n.oe)}},{path:"chemistry",name:"camera_chapter_chemistry",component:function(t){return Promise.all([n.e(0),n.e(100)]).then(function(){return t(n("Lxj8"))}.bind(null,n)).catch(n.oe)}}]}],b=[{path:"/camera/points",name:"camera_points",component:function(t){return Promise.all([n.e(0),n.e(95)]).then(function(){return t(n("2Tf7"))}.bind(null,n)).catch(n.oe)},redirect:"/camera/points/math",children:[{path:"physics",name:"camera_points_physics",component:function(t){return Promise.all([n.e(0),n.e(93)]).then(function(){return t(n("iqYT"))}.bind(null,n)).catch(n.oe)}},{path:"math",name:"camera_points_math",component:function(t){return Promise.all([n.e(0),n.e(94)]).then(function(){return t(n("4I0/"))}.bind(null,n)).catch(n.oe)}},{path:"chemistry",name:"camera_points_chemistry",component:function(t){return Promise.all([n.e(0),n.e(96)]).then(function(){return t(n("botB"))}.bind(null,n)).catch(n.oe)}}]}],w={path:"/camera",name:"camera",component:function(t){return n.e(109).then(function(){return t(n("zvYm"))}.bind(null,n)).catch(n.oe)},redirect:"/camera/chapter",children:[].concat(s()(f),s()(b),[{path:"photo",name:"camera_photo",component:function(t){return Promise.all([n.e(0),n.e(12)]).then(function(){return t(n("zAuX"))}.bind(null,n)).catch(n.oe)}},{path:"upload",name:"camera_upload",component:function(t){return Promise.all([n.e(0),n.e(32)]).then(function(){return t(n("OZur"))}.bind(null,n)).catch(n.oe)}}])},_={path:"/comment/:wbeid",name:"comment",component:function(t){return Promise.all([n.e(0),n.e(37)]).then(function(){return t(n("FcRE"))}.bind(null,n)).catch(n.oe)}},g={path:"/collect",component:function(t){return Promise.all([n.e(0),n.e(108)]).then(function(){return t(n("KWWp"))}.bind(null,n)).catch(n.oe)},redirect:"/collect/math",children:[{path:"physics",name:"collect_physics",component:function(t){return Promise.all([n.e(0),n.e(90)]).then(function(){return t(n("HqAY"))}.bind(null,n)).catch(n.oe)}},{path:"math",name:"collect_math",component:function(t){return Promise.all([n.e(0),n.e(91)]).then(function(){return t(n("lZ6T"))}.bind(null,n)).catch(n.oe)}},{path:"chemistry",name:"collect_chemistry",component:function(t){return Promise.all([n.e(0),n.e(92)]).then(function(){return t(n("xiPl"))}.bind(null,n)).catch(n.oe)}}]},v={path:"/correct/:subjectId/:grade/:id",name:"correct",component:function(t){return Promise.all([n.e(0),n.e(6)]).then(function(){return t(n("P7Ty"))}.bind(null,n)).catch(n.oe)}},x={path:"/download",component:function(t){return n.e(107).then(function(){return t(n("T6+4"))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"download",component:function(t){return Promise.all([n.e(0),n.e(85)]).then(function(){return t(n("1G/z"))}.bind(null,n)).catch(n.oe)}},{path:"camera",name:"downloadCamera",component:function(t){return Promise.all([n.e(0),n.e(89)]).then(function(){return t(n("rmG2"))}.bind(null,n)).catch(n.oe)}},{path:"camera/:id",name:"downloadCamera_detail",component:function(t){return Promise.all([n.e(0),n.e(88)]).then(function(){return t(n("AAmF"))}.bind(null,n)).catch(n.oe)}},{path:"good",name:"downloadGood",component:function(t){return Promise.all([n.e(0),n.e(87)]).then(function(){return t(n("x+rv"))}.bind(null,n)).catch(n.oe)}},{path:"good/:id",name:"downloadGood_detail",component:function(t){return Promise.all([n.e(0),n.e(86)]).then(function(){return t(n("Y9EW"))}.bind(null,n)).catch(n.oe)}},{path:"remember",name:"downloadRemember",component:function(t){return Promise.all([n.e(0),n.e(82)]).then(function(){return t(n("9TWZ"))}.bind(null,n)).catch(n.oe)}},{path:"remember/:id",name:"downloadRemember_detail",component:function(t){return Promise.all([n.e(0),n.e(81)]).then(function(){return t(n("u/rF"))}.bind(null,n)).catch(n.oe)}},{path:"paper",name:"downloadPaper",component:function(t){return Promise.all([n.e(0),n.e(84)]).then(function(){return t(n("vL23"))}.bind(null,n)).catch(n.oe)}},{path:"paper/search",name:"downloadPaperSearch",component:function(t){return Promise.all([n.e(0),n.e(83)]).then(function(){return t(n("lWoT"))}.bind(null,n)).catch(n.oe)}}]},k=[{path:"/example/:subjectId/:id",name:"example",component:function(t){return Promise.all([n.e(0),n.e(16)]).then(function(){return t(n("885F"))}.bind(null,n)).catch(n.oe)}},{path:"/practise/:subjectId/:id",name:"practise",component:function(t){return Promise.all([n.e(0),n.e(15)]).then(function(){return t(n("VtcR"))}.bind(null,n)).catch(n.oe)}}],y={path:"/homework",component:function(t){return n.e(106).then(function(){return t(n("1Ak0"))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"homework",component:function(t){return Promise.all([n.e(0),n.e(7)]).then(function(){return t(n("k9+I"))}.bind(null,n)).catch(n.oe)}}]},P=[{path:"/induce",component:function(t){return Promise.all([n.e(0),n.e(105)]).then(function(){return t(n("AKZn"))}.bind(null,n)).catch(n.oe)},name:"induce",redirect:"/induce/math",children:[{path:"physics",name:"induce_physics",component:function(t){return Promise.all([n.e(0),n.e(73)]).then(function(){return t(n("tGWf"))}.bind(null,n)).catch(n.oe)}},{path:"math",name:"induce_math",component:function(t){return Promise.all([n.e(0),n.e(74)]).then(function(){return t(n("neCz"))}.bind(null,n)).catch(n.oe)}},{path:"chemistry",name:"induce_chemistry",component:function(t){return Promise.all([n.e(0),n.e(80)]).then(function(){return t(n("MFHQ"))}.bind(null,n)).catch(n.oe)}}]},{path:"/induce/exercise/:subject/:chapterId/:chapterName",name:"induce_exercise",component:function(t){return Promise.all([n.e(0),n.e(78)]).then(function(){return t(n("xJUc"))}.bind(null,n)).catch(n.oe)},redirect:"/induce/exercise/:subject/:chapterId/:chapterName/total",children:[{path:"total",name:"induce_exercise_total",component:function(t){return Promise.all([n.e(0),n.e(75)]).then(function(){return t(n("1Zk7"))}.bind(null,n)).catch(n.oe)}},{path:"pass",name:"induce_exercise_pass",component:function(t){return Promise.all([n.e(0),n.e(77)]).then(function(){return t(n("pgLK"))}.bind(null,n)).catch(n.oe)}},{path:"break",name:"induce_exercise_break",component:function(t){return Promise.all([n.e(0),n.e(79)]).then(function(){return t(n("TFQZ"))}.bind(null,n)).catch(n.oe)}},{path:"practice",name:"induce_exercise_practice",component:function(t){return Promise.all([n.e(0),n.e(76)]).then(function(){return t(n("983X"))}.bind(null,n)).catch(n.oe)}}]}],S={path:"/message",component:function(t){return n.e(34).then(function(){return t(n("+jyd"))}.bind(null,n)).catch(n.oe)},redirect:"/message/",children:[{path:"/",component:function(t){return Promise.all([n.e(0),n.e(65)]).then(function(){return t(n("0XKR"))}.bind(null,n)).catch(n.oe)}},{path:"correct",component:function(t){return Promise.all([n.e(0),n.e(66)]).then(function(){return t(n("7kOl"))}.bind(null,n)).catch(n.oe)}},{path:"system",component:function(t){return Promise.all([n.e(0),n.e(64)]).then(function(){return t(n("fBUo"))}.bind(null,n)).catch(n.oe)}},{path:"class",component:function(t){return Promise.all([n.e(0),n.e(67)]).then(function(){return t(n("ya8Y"))}.bind(null,n)).catch(n.oe)}}]},T={path:"/class",component:function(t){return n.e(33).then(function(){return t(n("bleQ"))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"class",component:function(t){return Promise.all([n.e(0),n.e(55)]).then(function(){return t(n("2ZZq"))}.bind(null,n)).catch(n.oe)}},{path:"add",name:"class_add",component:function(t){return Promise.all([n.e(0),n.e(57)]).then(function(){return t(n("+frP"))}.bind(null,n)).catch(n.oe)}},{path:"message",name:"class_message",redirect:"/message/class"},{path:"detail/:code",name:"class_detal",component:function(t){return Promise.all([n.e(0),n.e(56)]).then(function(){return t(n("B3TT"))}.bind(null,n)).catch(n.oe)}}]},I=[{path:"/myBook",component:function(t){return Promise.all([n.e(0),n.e(104)]).then(function(){return t(n("PjNG"))}.bind(null,n)).catch(n.oe)},redirect:"/myBook/math",children:[{path:"physics",name:"myBook_physics",component:function(t){return Promise.all([n.e(0),n.e(60)]).then(function(){return t(n("IfLu"))}.bind(null,n)).catch(n.oe)}},{path:"math",name:"myBook_math",component:function(t){return Promise.all([n.e(0),n.e(61)]).then(function(){return t(n("dTB+"))}.bind(null,n)).catch(n.oe)}},{path:"chemistry",name:"myBook_chemistry",component:function(t){return Promise.all([n.e(0),n.e(62)]).then(function(){return t(n("7NEI"))}.bind(null,n)).catch(n.oe)}}]},{path:"/myBook/:subject/add",name:"myBook_add",component:function(t){return Promise.all([n.e(0),n.e(63)]).then(function(){return t(n("qhyn"))}.bind(null,n)).catch(n.oe)}},{path:"/myBook/:subject/search",name:"myBook_search",component:function(t){return Promise.all([n.e(0),n.e(59)]).then(function(){return t(n("J+Hx"))}.bind(null,n)).catch(n.oe)}}],O={path:"/myBook/want",component:function(t){return n.e(58).then(function(){return t(n("yjrD"))}.bind(null,n)).catch(n.oe)},redirect:"/myBook/want",children:[{path:"index",name:"myBook_want",component:function(t){return Promise.all([n.e(0),n.e(31)]).then(function(){return t(n("4qcF"))}.bind(null,n)).catch(n.oe)}},{path:"photo",name:"myBook_want_photo",component:function(t){return Promise.all([n.e(0),n.e(11)]).then(function(){return t(n("f5uX"))}.bind(null,n)).catch(n.oe)}}]},j=[].concat(s()(I),[O]),C={path:"/settings",component:function(t){return n.e(103).then(function(){return t(n("C3QX"))}.bind(null,n)).catch(n.oe)},children:[{path:"/",name:"settings",component:function(t){return Promise.all([n.e(0),n.e(54)]).then(function(){return t(n("8+Zw"))}.bind(null,n)).catch(n.oe)}},{path:"update",name:"settings_update",component:function(t){return Promise.all([n.e(0),n.e(3)]).then(function(){return t(n("shXn"))}.bind(null,n)).catch(n.oe)}},{path:"photo",name:"settings_photo",component:function(t){return Promise.all([n.e(0),n.e(53)]).then(function(){return t(n("cpz7"))}.bind(null,n)).catch(n.oe)}},{path:"resetPwd",name:"settings_pwd",component:function(t){return Promise.all([n.e(0),n.e(52)]).then(function(){return t(n("Pwcc"))}.bind(null,n)).catch(n.oe)}}]},E=[{path:"/workbook/exercise",component:function(t){return Promise.all([n.e(0),n.e(42)]).then(function(){return t(n("Q9ej"))}.bind(null,n)).catch(n.oe)},redirect:"/workbook/exercise/result",children:[{path:"answer/:name/:id",name:"workbook_exercise_answer",component:function(t){return Promise.all([n.e(0),n.e(23)]).then(function(){return t(n("4Gpc"))}.bind(null,n)).catch(n.oe)}},{path:"result/:name/:id",name:"workbook_exercise_result",component:function(t){return Promise.all([n.e(0),n.e(10)]).then(function(){return t(n("pMYY"))}.bind(null,n)).catch(n.oe)}},{path:"error/:name/:id",name:"workbook_exercise_error",component:function(t){return Promise.all([n.e(0),n.e(43)]).then(function(){return t(n("GJrN"))}.bind(null,n)).catch(n.oe)}}]},{path:"/workbook/exercise/photo",name:"workbook_exercise_error_photo",component:function(t){return Promise.all([n.e(0),n.e(22)]).then(function(){return t(n("QbQ4"))}.bind(null,n)).catch(n.oe)}},{path:"/workbook/exercise/upload/:chapterId/:wbeid/:eid",name:"workbook_exercise_error_upload",component:function(t){return Promise.all([n.e(0),n.e(21)]).then(function(){return t(n("E6kN"))}.bind(null,n)).catch(n.oe)}},{path:"/workbook/chapter/:name/:id",name:"workbook_chapter",component:function(t){return Promise.all([n.e(0),n.e(44)]).then(function(){return t(n("pC4q"))}.bind(null,n)).catch(n.oe)}}],$={path:"/workbook/uploader",component:function(t){return n.e(41).then(function(){return t(n("+3Wu"))}.bind(null,n)).catch(n.oe)},redirect:"/workbook/uploader/:name/:id",children:[{path:"index/:id",name:"workbook_uploader",component:function(t){return Promise.all([n.e(0),n.e(19)]).then(function(){return t(n("A6fq"))}.bind(null,n)).catch(n.oe)}},{path:"photo/:id",name:"workbook_uploader_photo",component:function(t){return Promise.all([n.e(0),n.e(20)]).then(function(){return t(n("pOS9"))}.bind(null,n)).catch(n.oe)}}]},N=[{path:"/workbook",component:function(t){return Promise.all([n.e(0),n.e(102)]).then(function(){return t(n("pJVx"))}.bind(null,n)).catch(n.oe)},name:"workbook",redirect:"/workbook/math",children:[{path:"physics",name:"workbook_physics",component:function(t){return Promise.all([n.e(0),n.e(46)]).then(function(){return t(n("hEem"))}.bind(null,n)).catch(n.oe)}},{path:"math",name:"workbook_math",component:function(t){return Promise.all([n.e(0),n.e(47)]).then(function(){return t(n("lHNI"))}.bind(null,n)).catch(n.oe)}},{path:"chemistry",name:"workbook_chemistry",component:function(t){return Promise.all([n.e(0),n.e(48)]).then(function(){return t(n("ei7+"))}.bind(null,n)).catch(n.oe)}}]},{path:"/workbook/:subject/add",name:"workbook_add",component:function(t){return Promise.all([n.e(0),n.e(49)]).then(function(){return t(n("PnlR"))}.bind(null,n)).catch(n.oe)}},{path:"/workbook/:subject/search",name:"workbook_search",component:function(t){return Promise.all([n.e(0),n.e(45)]).then(function(){return t(n("4riC"))}.bind(null,n)).catch(n.oe)}}],B={path:"/workbook/want",component:function(t){return n.e(40).then(function(){return t(n("HsTO"))}.bind(null,n)).catch(n.oe)},redirect:"/workbook/want",children:[{path:"index",name:"workbook_want",component:function(t){return Promise.all([n.e(0),n.e(17)]).then(function(){return t(n("G1I4"))}.bind(null,n)).catch(n.oe)}},{path:"photo",name:"workbook_want_photo",component:function(t){return Promise.all([n.e(0),n.e(18)]).then(function(){return t(n("MGEh"))}.bind(null,n)).catch(n.oe)}}]},U=[].concat(s()(N),s()(E),[$,B]),V=[{path:"/statistics/assemble",component:function(t){return Promise.all([n.e(0),n.e(1)]).then(function(){return t(n("cO/V"))}.bind(null,n)).catch(n.oe)},children:[{path:"camera/:subject/:chapterId/:name",name:"statisticsCamera",component:function(t){return Promise.all([n.e(0),n.e(30)]).then(function(){return t(n("ISbH"))}.bind(null,n)).catch(n.oe)}},{path:"remember/:subject/:chapterId/:name",name:"statisticsRemember",component:function(t){return Promise.all([n.e(0),n.e(27)]).then(function(){return t(n("3Tit"))}.bind(null,n)).catch(n.oe)}},{path:"good/:subject/:chapterId/:name",name:"statisticsGood",component:function(t){return Promise.all([n.e(0),n.e(29)]).then(function(){return t(n("EqDP"))}.bind(null,n)).catch(n.oe)}}]},{path:"/statistics/assemble/remember/assemble/options",name:"statisticsRemember_options",component:function(t){return Promise.all([n.e(0),n.e(26)]).then(function(){return t(n("Egso"))}.bind(null,n)).catch(n.oe)}},{path:"/statistics/assemble/good/assemble/options",name:"statisticsGood_options",component:function(t){return Promise.all([n.e(0),n.e(28)]).then(function(){return t(n("nz1i"))}.bind(null,n)).catch(n.oe)}},{path:"/statistics/remember/assemble/:subject",name:"statisticsRemember_assemble",component:function(t){return Promise.all([n.e(0),n.e(50)]).then(function(){return t(n("6IjE"))}.bind(null,n)).catch(n.oe)}},{path:"/statistics/good/assemble/:subject",name:"statisticsGood_assemble",component:function(t){return Promise.all([n.e(0),n.e(4)]).then(function(){return t(n("Doll"))}.bind(null,n)).catch(n.oe)}},{path:"/statistics/camera/assemble/:subject",name:"statisticsCamera_assemble",component:function(t){return Promise.all([n.e(0),n.e(51)]).then(function(){return t(n("4cnx"))}.bind(null,n)).catch(n.oe)}}],R={path:"/statistics",component:function(t){return Promise.all([n.e(0),n.e(1)]).then(function(){return t(n("fb1V"))}.bind(null,n)).catch(n.oe)},name:"statistics",redirect:"/statistics/math",children:[{path:"physics",name:"statistics_physics",component:function(t){return Promise.all([n.e(0),n.e(24)]).then(function(){return t(n("rXaP"))}.bind(null,n)).catch(n.oe)}},{path:"math",name:"statistics_math",component:function(t){return Promise.all([n.e(0),n.e(25)]).then(function(){return t(n("PQky"))}.bind(null,n)).catch(n.oe)}}]},F=[R].concat(s()(V));i.default.use(l.default);var H=new l.default({mode:"hash",routes:[p,g,w,v,x].concat(s()(k),[d],s()(m),s()(P),[S,T,y,_],s()(F),[C],s()(j),s()(U))});Object(h.sync)(a.a,H);var W=H,M=n("cTzj"),Y=n.n(M),Z=n("3BeM"),A=n("Y+qm"),q=n("NXWw"),G=n("ODCk"),D=n.n(G),X=n("Peep"),L={name:"app"},z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",[n("router-view")],1)],1)},Q=[],K={render:z,staticRenderFns:Q},J=K,tt=n("VU/8"),et=o,nt=tt(L,J,!1,et,null,null),ot=nt.exports;i.default.use(Z.a),i.default.use(X.a),i.default.use(Y.a,{attempt:3}),i.default.use(A.a),i.default.use(q.a),u.a.attach(document.body),i.default.config.productionTip=!1,i.default.filter("ymd",function(t){return D()(new Date(Number(t+"000")),"YYYY-MM-DD")}),i.default.filter("ymdhms",function(t){return D()(new Date(Number(t+"000")),"YYYY-MM-DD HH:mm:ss")}),i.default.filter("subject",function(t){switch(t){case 2:return"数学";case 7:return"物理";case 8:return"化学"}}),document.addEventListener("plusready",function(){var t=null;plus.navigator.setStatusBarBackground("#4cc0be"),setTimeout(function(){var t=plus.audio.createPlayer("233.mp3");t.setRoute(plus.audio.ROUTE_SPEAKER),t.play(function(){},function(t){})},500),plus.key.addEventListener("backbutton",function(){"/index"===a.a.state.route.path||"/bag"===a.a.state.route.path||"/login"===a.a.state.route.path||"/user"===a.a.state.route.path?t?(new Date).getTime()-t<1e3&&plus.runtime.quit():(t=(new Date).getTime(),i.default.$vux.toast.show({text:"再按一次退出",type:"text",time:1500,position:"bottom"}),setTimeout(function(){t=null},1e3)):history.back()},!1)});var it=new i.default({router:W,store:a.a,render:function(t){return t(ot)}}).$mount("#app-box");e.default=it},NYxO:function(t,e,n){t.exports=n("49fU")(360)},OQbP:function(t,e){},S5ax:function(t,e){},UZ6i:function(t,e){},YEn3:function(t,e,n){"use strict";var o=n("//Fk"),i=n.n(o),a=n("Dd8w"),r=n.n(a),u=n("7+uW"),c=n("mtWM"),s=n.n(c),l=n("mw3O"),h=n.n(l);s.a.defaults.timeout=1e4,s.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",s.a.defaults.baseURL="http://www.guinaben.com:8070/test/student/v2/",s.a.interceptors.request.use(function(t){return t.params=r()({},t.params,{VERSION:"3.6.0"}),"post"===t.method&&(t.data=h.a.stringify(t.data,{arrayFormat:"brackets"})),t},function(t){return u.default.$vux.toast.show({text:"非法输入",type:"text",time:1500,position:"bottom"}),i.a.reject(t)}),s.a.interceptors.response.use(function(t){return 401===t.data.code?(localStorage.removeItem("token"),u.default.$vux.toast.show({text:t.data.msg,type:"warn",time:1500,isShowMask:!0}),setTimeout(function(){try{plus.runtime.restart()}catch(t){window.location.href="/login"}},500),i.a.reject(t)):403===t.data.code?(u.default.$vux.alert.show({title:"发现新版本",content:"升级全新体验",onHide:function(){/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())?plus.runtime.openURL("itms-apps://itunes.apple.com/cn/app/gui-na-ben-xue-sheng-duan/id1184077595?l=en&mt=8"):window.location.href="market://details?id=com.sanbao.guinaben.student";try{plus.runtime.quit()}catch(t){console.log("当前是网页模式")}}}),i.a.reject(t)):200!==t.data.code?(u.default.$vux.toast.show({text:t.data.msg,type:"text",time:1500,position:"bottom"}),i.a.reject(t)):t},function(t){return u.default.$vux.toast.show({text:"网络异常",type:"text",time:1500,position:"bottom"}),i.a.reject(t)}),e.a=s.a},"ZWj+":function(t,e){},cTzj:function(t,e,n){t.exports=n("49fU")(359)},"h+wy":function(t,e){},j1ja:function(t,e,n){t.exports=n("49fU")(152)},mtWM:function(t,e,n){t.exports=n("49fU")(133)},mzja:function(t,e,n){"use strict";function o(t){n("ZWj+")}var i=n("/kga"),a={name:"alert",components:{XDialog:i.a},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,hideOnBlur:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},maskZIndex:[Number,String]},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-alert"},[n("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")},"on-show":function(e){t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[n("div",{staticClass:"weui-dialog__hd"},[n("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"weui-dialog__bd"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),n("div",{staticClass:"weui-dialog__ft"},[n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},u=[],c={render:r,staticRenderFns:u},s=c,l=n("VU/8"),h=o,m=l(a,s,!1,h,null,null);e.a=m.exports},olkN:function(t,e,n){"use strict";var o={};n.d(o,"getUserInfo",function(){return p}),n.d(o,"setUserInfo",function(){return f}),n.d(o,"getToken",function(){return b}),n.d(o,"getTextbookVersion",function(){return w}),n.d(o,"getUserNews",function(){return _}),n.d(o,"setHeadImg",function(){return g}),n.d(o,"uploadHeadImg",function(){return v}),n.d(o,"getSwiperInfo",function(){return x}),n.d(o,"swiperInfoClear",function(){return k});var i,a=n("7+uW"),r=n("NYxO"),u=n("bOdI"),c=n.n(u),s=n("Dd8w"),l=n.n(s),h=n("//Fk"),m=n.n(h),d=n("YEn3"),p=function(t){var e=t.rootState,n=t.commit;return a.default.$vux.loading.show({text:"请稍候"}),new m.a(function(t,o){Object(d.a)({method:"get",url:"user",params:{token:e.common.user.token}}).then(function(e){n("USERINFO",e.data.data),t(e),a.default.$vux.loading.hide()}).catch(function(){a.default.$vux.loading.hide()})})},f=function(t,e){var n=t.rootState;t.commit,t.dispatch;return a.default.$vux.loading.show({text:"请稍候"}),new m.a(function(t,o){Object(d.a)({method:"post",url:"user/update",data:l()({},e,{token:n.common.user.token})}).then(function(e){a.default.$vux.loading.hide(),t(e)}).catch(function(){a.default.$vux.loading.hide()})})},b=function(t,e){var n=t.commit;return a.default.$vux.loading.show({text:"请稍候"}),new m.a(function(t,o){Object(d.a)({method:"get",url:"user/token",params:l()({},e)}).then(function(e){n("USER_TOKEN",e.data.token),a.default.$vux.loading.hide(),t(e)}).catch(function(t){a.default.$vux.loading.hide(),o(t)})})},w=function(t,e){var n=t.commit;return a.default.$vux.loading.show({text:"请稍候"}),new m.a(function(t,o){Object(d.a)({method:"get",url:"textbookVersion",params:{grade:e.grade}}).then(function(e){a.default.$vux.loading.hide(),n("TEXTBOOK_VERSION",e.data.data),t(e)}).catch(function(t){a.default.$vux.loading.hide(),o(t)})})},_=function(t){var e=t.rootState,n=t.commit;return new m.a(function(t,o){Object(d.a)({method:"get",url:"message/new",params:{token:e.common.user.token}}).then(function(e){n("USER_NEW_MESSAGE",e.data.data),t(e)})})},g=function(t,e){(0,t.commit)("USERPHOTO_SET",e)},v=function(t,e){var n=t.rootState,o=t.commit,i=t.dispatch;return a.default.$vux.loading.show({text:"请稍候"}),new m.a(function(t,r){Object(d.a)({method:"post",url:"user/headImg",data:{img:e.img,token:n.common.user.token}}).then(function(e){o("USERPHOTO_POST",e.data.data),i("getUserInfo"),a.default.$vux.loading.hide(),t(e)}).catch(function(t){a.default.$vux.loading.hide(),r(t)})})},x=function(t){var e=t.rootState,n=t.commit;return new m.a(function(t,o){Object(d.a)({method:"get",url:"swiper",params:{id:e.route.params.id}}).then(function(e){n("SWIPER_INFO",e.data.data),t(e)})})},k=function(t){(0,t.commit)("SWIPER_INFO",{title:"",article:""})},y={system:/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())?"IOS":"Android",article:{title:"",content:""},news:{classes:!1,correct:!1,system:!1},user:{headImg:"",bufferImg:"",name:"",school:"",sex:"",mobile:"",grade:"",year:"",textbook:[],subjectType:[],textbookAll:{math:[],physics:[],chemistry:[],subjectType:[]},subject:[],version:"",swiper:[{}],token:localStorage.getItem("token")}},P={Path:function(t,e,n){return n.route.path},Query:function(t,e,n){return n.route.query},Params:function(t,e,n){return n.route.params},Route:function(t,e,n){return n.route},User:function(t){return t.user},News:function(t){return t.news},SwiperInfo:function(t){return t.article},System:function(t){return t.system}},S=(i={},c()(i,"USERINFO",function(t,e){t.user.textbook=e.textbook[0],t.user.headImg=e.headImg,t.user.name=e.name,t.user.mobile=e.mobile,t.user.school=e.school,t.user.sex=e.sex,t.user.grade=e.grade,t.user.year=e.year,t.user.version=e.version,t.user.subject=e.subject,t.user.subjectType=e.subjectType,t.user.swiper=e.swiper}),c()(i,"USERPHOTO_POST",function(t,e){t.user.headImg=e.headImg}),c()(i,"USERPHOTO_SET",function(t,e){t.user.bufferImg=e}),c()(i,"USER_TOKEN",function(t,e){t.user.token=e,localStorage.setItem("token",e)}),c()(i,"USER_NEW_MESSAGE",function(t,e){t.news.classes=e.classes,t.news.correct=e.correct,t.news.system=e.system}),c()(i,"SWIPER_INFO",function(t,e){t.article.title=e.title,t.article.content=e.content}),c()(i,"TEXTBOOK_VERSION",function(t,e){t.user.textbookAll.math=e.subjectOptions.math,t.user.textbookAll.subjectType=e.subjectType,t.user.textbookAll.physics=e.subjectOptions.physics||[],t.user.textbookAll.chemistry=e.subjectOptions.chemistry||[]}),i),T={state:y,getters:P,mutations:S,actions:o};a.default.use(r.default);e.a=new r.default.Store({modules:{common:T}})},rLAy:function(t,e,n){"use strict";function o(t){n("S5ax")}var i=n("xNvf"),a={name:"toast",mixins:[i.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),n("transition",{attrs:{name:t.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):n("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},u=[],c={render:r,staticRenderFns:u},s=c,l=n("VU/8"),h=o,m=l(a,s,!1,h,null,null);e.a=m.exports},v5o6:function(t,e,n){t.exports=n("49fU")(354)},vGvH:function(t,e){}},["NHnr"]);