/** @module color/mixer */
/*用户信息*/
export const fetchUserInfo = (state) => state.info
/*token*/
export const fetchToken = (state) => state.userInfo.token
//获取反馈信息列表
export const fetchHistory = (state) => state.advice.adviceList
//受邀好友列表
export const fetchInviteStudentList = (state) => state.friend.inviteStudentList
//邀请码
export const fetchInviteCode = (state) => state.friend.inviteCode
//我的积分
export const fetchNumericalList = (state) => state.member.numericalList
//我的积分
export const fetchBilllList = (state) => state.member.myBillList
//会员信息
export const fetchMemberInfo = (state) => state.member.memberInfo
//会员信息
export const fetchVersion = (state) => state.setting.version
/**我的班级
 * GET_CLASS_LIST:获取班级列表
 * classmGET_CLASSMATE_LISTate:班级成员名单
 * POST_INTO_CLASS:加入班级
 * GET_CLASS_BYCODE:根据代码搜索班级
 */
export const fetchMyClass = (state) => state.myClass.class
export const fetchMyClassMate = (state) => state.myClass.classmate
export const fetchMyClassSearchClass = (state) => state.myClass.searchClass


/** 教材 */
export const AllTextbook = (state) => state.user.textbook.all
export const MyTextbook = (state) => state.user.textbook.my
export const textBookSubjectId = (state) => state.user.textbook.subjectId
/** 习题册 */
export const AllWorkbook = (state) => state.user.workbook.all
export const MyWorkbook = (state) => state.user.workbook.my
export const workbookSubjectId = (state) => state.user.workbook.subjectId

/** 获取用户信息*/
export const Userinfo = (state) => state.user.userinfo
/** 获取教材信息*/
export const TextBookMathVer  = (state) => state.user.version.math
export const TextBookPhysicsVer = (state) => state.user.version.physics

// export const GradeSubject = (state) => state.user.textbookVersion.subjectType