webpackJsonp([14,62],{226:function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.WORKBOOK_STU="WORKBOOK_STU",o.WORKBOOK_STU_CLEAR="WORKBOOK_STU_CLEAR",o.WORKBOOK_STU_SUBJECT_CHANGE="WORKBOOK_STU_SUBJECT_CHANGE",o.WORKBOOK_STU_CHAPTER="WORKBOOK_STU_CHAPTER",o.WORKBOOK_STU_CHAPTER_CLEAR="WORKBOOK_STU_CHAPTER_CLEAR",o.WORKBOOK_STU_CHAPTER_SCROLL="WORKBOOK_STU_CHAPTER_SCROLL",o.WORKBOOK_STU_EXERCISE="WORKBOOK_STU_EXERCISE",o.WORKBOOK_STU_EXERCISE_CHANGE="WORKBOOK_STU_EXERCISE_CHANGE",o.WORKBOOK_STU_EXERCISE_POST="WORKBOOK_STU_EXERCISE_POST",o.WORKBOOK_STU_EXERCISE_CLEAR="WORKBOOK_STU_EXERCISE_CLEAR",o.WORKBOOK_STU_EXERCISE_SCROLL="WORKBOOK_STU_EXERCISE_SCROLL",o.WORKBOOK_STU_UPLOAD_ADD="WORKBOOK_STU_UPLOAD_ADD",o.WORKBOOK_STU_UPLOAD_DEL="WORKBOOK_STU_UPLOAD_DEL",o.WORKBOOK_STU_UPLOAD_CAMERA="WORKBOOK_STU_UPLOAD_CAMERA",o.WORKBOOK_STU_UPLOAD="WORKBOOK_STU_UPLOAD"},491:function(e,o,t){"use strict";function r(e){if(e&&e.__esModule)return e;var o={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t]);return o.default=e,o}function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0}),o.workbookStuUpload=o.workbookStuCamera=o.workbookStuUploadAdd=o.workbookStuUploadDel=o.setWorkbookStuExersciseScroll=o.workbookStuExAnswerChange=o.workbookStuExerciseClear=o.getWorkbookStuExercise=o.setWorkbookStuChapterScroll=o.workbookStuChapterClear=o.WorkbookExercisePost=o.getWorkbookStuChapter=o.workbookStuSetSubject=o.workbookStuClear=o.getWorkbookStu=void 0;var n=t(72),a=i(n),u=t(74),c=i(u),l=t(226),s=r(l),d=t(9),k=r(d);o.getWorkbookStu=function(e,o){var t=e.state,r=e.rootState,i=e.commit;return console.log(t.subjectId),new a.default(function(e,o){(0,c.default)({method:"get",url:"workbook",params:{token:r.login.token,subjectId:t.subjectId,textbookId:t.textbookId}}).then(function(o){i(s.WORKBOOK_STU,o.data.data),e(o)})})},o.workbookStuClear=function(e){var o=e.commit;o(s.WORKBOOK_STU_CLEAR)},o.workbookStuSetSubject=function(e,o){var t=e.commit;t(s.WORKBOOK_STU_SUBJECT_CHANGE,o),t(s.WORKBOOK_STU_CLEAR)},o.getWorkbookStuChapter=function(e){var o=(e.state,e.rootState),t=e.commit;return new a.default(function(e,r){(0,c.default)({method:"get",url:"remember/chapter",params:{token:o.login.token,workbookId:o.route.params.workbookId}}).then(function(o){t(s.WORKBOOK_STU_CHAPTER,o.data.data),e(o)})})},o.WorkbookExercisePost=function(e,o){var t=(e.state,e.rootState),r=e.commit;return k.busy(),new a.default(function(e,i){(0,c.default)({method:"post",url:"remember/submit",data:{answer:o.answer,answerId:o.answerId,token:t.login.token,chapterId:t.route.params.chapterId}}).then(function(o){k.leave(),k.toast("提交成功"),r(s.WORKBOOK_STU_EXERCISE_POST,o.data.data),r(s.WORKBOOK_STU_CHAPTER_CLEAR),e(o)}).catch(function(e){k.leave()})})},o.workbookStuChapterClear=function(e){var o=e.commit;o(s.WORKBOOK_STU_CHAPTER_CLEAR)},o.setWorkbookStuChapterScroll=function(e,o){var t=e.commit;t(s.WORKBOOK_STU_CHAPTER_SCROLL,o)},o.getWorkbookStuExercise=function(e,o){var t=(e.state,e.rootState),r=e.commit;return k.busy(),new a.default(function(e,i){(0,c.default)({method:"get",url:"remember/exercises",params:{token:t.login.token,chapterId:t.route.params.chapterId||o}}).then(function(o){k.leave(),r(s.WORKBOOK_STU_EXERCISE,o.data.data),e(o)}).catch(function(e){k.leave()})})},o.workbookStuExerciseClear=function(e){var o=e.commit;o(s.WORKBOOK_STU_EXERCISE_CLEAR)},o.workbookStuExAnswerChange=function(e,o){var t=e.commit;t(s.WORKBOOK_STU_EXERCISE_CHANGE,o)},o.setWorkbookStuExersciseScroll=function(e,o){var t=e.commit;t(s.WORKBOOK_STU_EXERCISE_SCROLL,o)},o.workbookStuUploadDel=function(e,o){var t=e.commit;t(s.WORKBOOK_STU_UPLOAD_DEL,o)},o.workbookStuUploadAdd=function(e,o){var t=e.commit;t(s.WORKBOOK_STU_UPLOAD_ADD,o)},o.workbookStuCamera=function(e,o){var t=e.commit;t(s.WORKBOOK_STU_UPLOAD_CAMERA,o)},o.workbookStuUpload=function(e){var o=e.state,t=e.rootState,r=e.commit;return k.busy(),new a.default(function(e,i){(0,c.default)({method:"post",url:"remember/uploadHomeWork/",data:{token:t.login.token,cameraList:o.uploader.list,chapterId:t.route.params.chapterId}}).then(function(o){r(s.WORKBOOK_STU_UPLOAD,o.data.data),e(o),k.leave()}).catch(function(e){k.leave()})})}},492:function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.workbookStuSubject=function(e){return e.subjectId},o.workbookStu=function(e){return e.workbook},o.workbookStuUploader=function(e){return e.uploader},o.workbookStuChapter=function(e){return e.chapter},o.workbookStuExercise=function(e){return e.exercise}},493:function(e,o,t){"use strict";function r(e){if(e&&e.__esModule)return e;var o={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t]);return o.default=e,o}function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0});var n,a=t(75),u=i(a),c=t(226),l=r(c),s=t(491),d=r(s),k=t(492),O=r(k),S={subjectId:"2",workbook:{list:[],isReset:!1},chapter:{list:[],scroll:0,isReset:!1},uploader:{list:[],camera:""},exercise:{list:[],scroll:0,isReset:!1}},_=(n={},(0,u.default)(n,l.WORKBOOK_STU_SUBJECT_CHANGE,function(e,o){e.subjectId=o}),(0,u.default)(n,l.WORKBOOK_STU,function(e,o){e.workbook.list=o,e.workbook.isReset=!1}),(0,u.default)(n,l.WORKBOOK_STU_CLEAR,function(e){e.workbook.list=[],e.workbook.isReset=!0}),(0,u.default)(n,l.WORKBOOK_STU_CHAPTER,function(e,o){e.chapter.list=o,e.chapter.isReset=!1}),(0,u.default)(n,l.WORKBOOK_STU_CHAPTER_CLEAR,function(e){e.chapter.list=[],e.chapter.isReset=!0,e.chapter.scroll=0}),(0,u.default)(n,l.WORKBOOK_STU_CHAPTER_SCROLL,function(e,o){e.chapter.scroll=o}),(0,u.default)(n,l.WORKBOOK_STU_EXERCISE,function(e,o){e.exercise.list=o,e.exercise.isReset=!1}),(0,u.default)(n,l.WORKBOOK_STU_EXERCISE_CLEAR,function(e){e.exercise.list=[],e.uploader.list=[],e.uploader.camera="",e.exercise.isReset=!0}),(0,u.default)(n,l.WORKBOOK_STU_EXERCISE_SCROLL,function(e,o){e.exercise.scroll=o}),(0,u.default)(n,l.WORKBOOK_STU_EXERCISE_POST,function(e,o){e.chapter.isReset=!0,e.exercise.list=o}),(0,u.default)(n,l.WORKBOOK_STU_EXERCISE_CHANGE,function(e,o){"1"==o.type?e.exercise.list.a[0].b[o.pid].c[o.id].answer=!e.exercise.list.a[0].b[o.pid].c[o.id].answer:e.exercise.list.a[o.pid].b[o.id].answer=!e.exercise.list.a[o.pid].b[o.id].answer}),(0,u.default)(n,l.WORKBOOK_STU_UPLOAD_DEL,function(e,o){e.uploader.list.splice(o,1)}),(0,u.default)(n,l.WORKBOOK_STU_UPLOAD_ADD,function(e,o){e.uploader.list.push(o),e.uploader.camera=""}),(0,u.default)(n,l.WORKBOOK_STU_UPLOAD_CAMERA,function(e,o){e.uploader.camera=o}),(0,u.default)(n,l.WORKBOOK_STU_UPLOAD,function(e,o){e.uploader.list=[],e.exercise.list=o}),n);o.default={state:S,mutations:_,actions:d,getters:O}},551:function(e,o,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=t(5),n=r(i);t(645);var a=t(493),u=r(a),c=t(17),l=r(c);l.default.registerModule("remember",(0,n.default)({},u.default))},629:function(e,o,t){o=e.exports=t(1)(),o.push([e.id,".workbookStuIndex .weui_cells_title{color:#4bb7aa}.workbookStuIndex .weui_cell:before{border-top:1px dashed #d9d9d9}.workbookStuIndex .weui_cells:after,.workbookStuIndex .weui_cells:before{height:0;position:relative}.workbookAnswer .photo{margin-left:.6rem}.workbookAnswer .photo,.workbookStuUploader .photo{float:left;margin-bottom:.5rem;width:3.75rem;height:5rem}.workbookStuUploader .photo{position:relative;margin-right:.6rem}.workbookStuUploader .photo i{position:absolute;right:-.95rem;top:-1.1rem;width:2rem;height:2rem;text-align:center;z-index:2016;color:#666}.workbookStuUploader .photo img{width:3.75rem;height:5rem;z-index:2015}.workbookStuUploader .photoAdd{box-sizing:border-box;width:3.75rem;height:5rem;border:.05rem solid #ddd;float:left;text-align:center;background:#fff}.workbookStuUploader .photoAdd i{margin:0 auto;top:.5rem;color:#eee}.ellipsis,.workbookStuSelect .indent1{text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:inherit;-webkit-line-clamp:1;overflow:hidden}.workbookStuSelect .indent1{text-indent:1em}.workbookStuSelect .indent2{text-indent:2em}.workbookStuSelect .indent2,.workbookStuSelect .indent3{text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:inherit;-webkit-line-clamp:1;overflow:hidden}.workbookStuSelect .indent3{text-indent:3em}.workbookStuSelect .sectionHeader{text-indent:1em;background:#fff;text-align:center;position:relative;padding:5px 0;border-bottom:1px solid #d9d9d9;color:#487d68;font-size:.85rem}.workbookStuSelect .sectionHeader .with_arrow{display:inline-block;transform:rotate(315deg);height:6px;width:6px;border-width:2px 2px 0 0;border-color:#487d68;border-style:solid;position:absolute;right:.5rem;top:20px}.workbookStuSelect .weui_cells_title{color:#4bb7aa}.workbookStuSelect .with_arrow{display:none}.workbookStuSelect .weui_cell_bd{font-size:.75rem}.workbookStuSelect .weui_cell:before{border-top:1px dashed #d9d9d9}.workbookStuSelect .weui_cells:after,.workbookStuSelect .weui_cells:before{height:0;position:relative}.workbookStuSelect .weui_cell_bd p{text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden;text-align:left}.workbookStuExercise .exampleIcon{font-size:1.3rem;padding:.35rem}.workbookStuExercise .weui_btn.weui_btn_mini{top:-2px}.workbookStuExercise .icon-correct{color:#4bb7aa}.workbookStuExercise .icon-error{color:red}.workbookStuExercise .checker{line-height:1.9;font-size:.85rem;padding:0 .6rem;margin-right:.5rem;display:inline-block;background:#4bb7aa;color:#fff}.workbookStuExercise .checker.error{background:red;color:#fff}.workbookStuExercise .weui_cell{padding:.3rem .5rem}.workbookStuExercise .weui_btn.weui_btn_mini{font-size:.85rem;padding:0 .6rem}.workbookStuExercise p{font-size:.8rem;display:inline-block;text-align:center}.workbookStuExercise .section .tl{text-align:left}.workbookStuExercise .section .tr{text-align:right}.workbookStuExercise .section article{background:#fff;margin-top:.3rem;padding:.3rem 0}.workbookStuExercise .section article .point{padding:0 1rem}.workbookStuExercise .section article header{border-bottom:1px solid #ccc;padding-bottom:.2rem}.workbookStuExercise .section article header h1{font-size:.8rem;font-weight:400;width:35%;padding:0 1rem;text-align:left}.workbookStuExercise .section article div{border-bottom:1px dashed #ccc;padding:.3rem 1rem}.workbookStuExercise .sectionHeader{background:#fff;text-align:center;position:relative;padding:5px 0;font-size:.75rem}.workbookStuExercise .sectionHeader .ellipsis{-webkit-box-orient:none}.workbookStuExercise .per-20{width:20%}.workbookStuExercise .per-21{width:21.6%}.workbookStuExercise .per-25{width:25%}.workbookStuExercise .per-35{width:35%}.workbookStuExercise .per-40{width:40%}.workbookStuExercise .per-60{width:60%}",""])},645:function(e,o,t){var r=t(629);"string"==typeof r&&(r=[[e.id,r,""]]);t(2)(r,{});r.locals&&(e.exports=r.locals)},690:function(e,o){e.exports=" <router-view keep-alive></router-view> "},755:function(e,o,t){var r,i,n={};r=t(551),i=t(690),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(a.template=i),a.computed||(a.computed={}),Object.keys(n).forEach(function(e){var o=n[e];a.computed[e]=function(){return o}})}});