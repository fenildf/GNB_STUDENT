webpackJsonp([54,62],{263:function(t,e,o){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(4),c=i(r),u=o(3),a=o(6),s=o(7),p=n(s);e.default={components:{XHeader:u.XHeader,XInput:u.XInput,XTextarea:u.XTextarea,Group:u.Group,XButton:u.XButton},data:function(){return{title:"",content:"",contact:""}},methods:(0,c.default)({},(0,a.mapActions)(["updateAdvice"]),{_history:function(){this.$router.go("adviceList")},_submit:function(){var t=this;this.title&&this.content&&this.contact?this.updateAdvice({title:this.title,content:this.content,contact:this.contact}).then(function(){setTimeout(function(){t.$router.go("adviceList")},300)}):p.toast("请完善内容")}})}},403:function(t,e){t.exports=' <div class=userSettingsAdvice> <div> <x-header :left-options="{showBack: true}">意见反馈<a slot=right @click=_history>反馈历史</a></x-header> </div> <group> <x-input placeholder=标题 :value.sync=title></x-input> <x-input placeholder=QQ号/微信号 :value.sync=contact></x-input> <x-textarea :max=200 name=description placeholder=问题或建议描述 :rows=8 :value.sync=content></x-textarea> </group> <x-button type=primary class=btn @click=_submit>提交</x-button> </div> '},468:function(t,e,o){var n,i,r={};n=o(263),i=o(403),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default);var c="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(c.template=i),c.computed||(c.computed={}),Object.keys(r).forEach(function(t){var e=r[t];c.computed[t]=function(){return e}})}});