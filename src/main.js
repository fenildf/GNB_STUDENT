import Vue from 'vue'
import Router from 'vue-router'
import VueTouch from 'vue-touch'
import { sync } from 'vuex-router-sync'
import App from './app'
import store from './store'
//登陆、注册
import Login from './login/pages/login'
import agreement from './login/pages/agreement'
import register from './login/pages/register'
import setPassword from './login/pages/setPassword'
import forget from './login/pages/forget'
import resetPassword from './login/pages/resetPassword'
//首页
import Main from './main/common/main'
import User from './main/pages/user'
import Message from './main/pages/message'
import Index from './main/pages/index'
//题目评注、纠错
import correct from './common/pages/correct'
import comment from './common/pages/comment'
//拍错题
import camera from './camera/pages/index'
import cameraHistory from './camera/pages/history'
import cameraCorrect from './camera/pages/correct'
import cameraRecord from './camera/pages/record'
import cameraResult from './camera/pages/result'
//归纳本
import error from './error/pages/index'
import errorList from './error/pages/list'
import errorDetail from './error/pages/detail'
import errorCorrect from './error/pages/correct'
import errorMore from './error/pages/more'
import errorRecommend from './error/pages/recommend'
import errorComment from './error/pages/comment'
//收藏本
import collectExample from './collect/pages/example'
import collectCamera from './collect/pages/camera'
import collectExampleDetail from './collect/pages/exampleDetail'
import collectCameraDetail from './collect/pages/cameraDetail'
import collectCorrect from './collect/pages/correct'
//通知
import messageClass from './message/pages/class'
import messageCorrect from './message/pages/correct'
import messageSystem from './message/pages/system'
//个人中心
import userResetPwd from './user/pages/resetPwd'
import userInfo from './user/pages/info'
//个人中心-设置
import userSettingsIndex from './user/pages/settings/index'
import userSettingsAboutUs from './user/pages/settings/aboutUs'
import userSettingsAdvice from './user/pages/settings/advice'
import userSettingsAdviceHistory from './user/pages/settings/adviceHistory'
//个人中心-邀请好友
import userInviteIndex from './user/pages/invite/index'
import userInviteFriend from './user/pages/invite/friend'
import userCodeInput from './user/pages/invite/input'
//我的会员
import userMemberIndex from './user/pages/member/index'
import userMemberVip from './user/pages/member/vip'
import userMemberPoints from './user/pages/member/points'
import userMemberRecharge from './user/pages/member/recharge'
import userMemberMyBill from './user/pages/member/myBill'
//我的班级
import userClassIndex from './user/pages/class/index'
import userClassDetail from './user/pages/class/classDetail'
import userClassAdd from './user/pages/class/addClass'
//我的教材
import userTextbook from './user/pages/textbook/index'

import moment from 'moment'
import FastClick from 'fastclick'

Vue.use(Router)
Vue.use(VueTouch)
Vue.config.devtools = true
FastClick.attach(document.body)

Vue.filter('ymd', function(value) {
  return moment.unix(value).format('YYYY-MM-DD');
});

const router = new Router()
router.map({
  '/': { component: Login },
  'agreement': { component: agreement },
  //注册账户
  'register': { component: register },
  'register/password': { component: setPassword },
  //忘记密码
  'forget': { component: forget },
  'forget/password': { component: resetPassword },
  //纠错
  'correct/:id':{component: correct},
  //评注
  'comment/:id':{component: comment},
  //主页
  'main/': {
    component: Main,
    subRoutes: {
      'user/': {
        component: User
      },
      'message/': {
        component: Message
      },
      'index/': {
        component: Index
      }
    }
  },
  //拍错题
 'camera':{component: camera},
 'camera/history':{component: cameraHistory},
 'camera/record/:knowledgeId':{component: cameraRecord},
 'camera/result/:knowledgeId':{component: cameraResult},
  //'camera/correct/:id':{component: exampleCorrect},
 //'camera/comment/:id': { component: cameraComment },
  //归纳本
  'error': { component: error },
  'error/detail/:id': { component: errorDetail },
  'error/list/:knowledgeId': { component: errorList },
  'error/more/:knowledgeId/:Id': { component: errorMore },
  'error/recommend/:knowledgeId': { component: errorRecommend },
  //'error/correct/:id': { component: exampleCorrect },
  //'error/comment/:id': { component: cameraComment },
  //收藏本
  'collect/example': { component: collectExample },
  'collect/camera': { component: collectCamera },
  'collect/camera/detail/:id': { component: collectCameraDetail },
  'collect/example/detail/:id': { component: collectExampleDetail },
  //'collect/correct/:id': { component: exampleCorrect },
  //'collect/comment/:id': { component: cameraComment },
  //消息
  'message/class': { component: messageClass },
  'message/system': { component: messageSystem },
  'message/correct': { component: messageCorrect },
  //个人中心
  'user/resetPwd': { component: userResetPwd },
  'user/info': { component: userInfo },
  //设置
  'user/settings': { component: userSettingsIndex },
  'user/settings/aboutUs': { component: userSettingsAboutUs },
  'user/settings/advice': { component: userSettingsAdvice },
  'user/settings/advice/history': { component: userSettingsAdviceHistory },
  //邀请好友
  'user/invite': { component: userInviteIndex },
  'user/invite/friend': { component: userInviteFriend },
  'user/invite/input': { component: userCodeInput },
  //我的会员
  'user/member': { component: userMemberIndex },
  'user/vip': { component: userMemberVip }, //我的会员 VIP
  'user/member/points': { component: userMemberPoints }, //我的积分
  'user/member/recharge': { component: userMemberRecharge }, //充值
  'user/member/myBill': { component: userMemberMyBill }, //我的账单
  //我的班级
  'user/class': { component: userClassIndex },
  'user/class/detail': { component: userClassDetail },
  'user/class/addClass': { component: userClassAdd },
  //我的教材
  'user/textBook': { component: userTextbook },
})

router.redirect({
  '/main/': '/main/index',
  '/collect/': '/collect/example',
  'camera/correct/:id':'/correct/:id',
  'collect/correct/:id':'/correct/:id',
  'error/correct/:id':'/correct/:id',
  'camera/comment/:id':'/comment/:id',
  'collect/comment/:id':'/comment/:id',
  'error/comment/:id':'/comment/:id'
});

sync(store, router)

router.beforeEach(function(transition) {
  if (transition.to.path == '/register/password') {
    if (store.state.register.mobile == '') {
      console.log("禁止访问!");
      router.replace('/register');
    }
  }
  if (transition.to.path == '/forget/password') {
    if (store.state.forget.mobile == '') {
      console.log("禁止访问!");
      router.replace('/forget');
    }
  }
  transition.next();
})



// (function(){
//   function plusReady(){
//     plus.key.addEventListener("backbutton",function(){
// 		  window.history.back();
// 	  });
//   }
//   if(window.plus){
//     plusReady();
//   }else{
//     document.addEventListener("plusready",plusReady,false);
//   }
// }())

router.start(App, '#App')
