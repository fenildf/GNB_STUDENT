import Vue from 'vue'
import 'babel-polyfill'
import store from './store'
import router from './router'
import App from './App'
import './plugin'
import './error'

Vue.config.productionTip = false

// 在首页返回键失效其他页面则直接返回上一页
document.addEventListener('plusready', () => {
  let first = null
  plus.navigator.setStatusBarBackground('#4cc0be') // 设置状态栏颜色
  // HACK 解决HTML5+ IOS<vedio>标签默认扬声器线路输出问题
  setTimeout(() => {
    let audio = plus.audio.createPlayer('233.mp3') // 没有这个音频也不需要处理
    audio.setRoute(plus.audio.ROUTE_SPEAKER)
    audio.play(() => { }, (e) => { })
  }, 500)
  /**
   * TODO
   * 1. 在主页，书包，我的页面下1秒内2次BACK键退出APP
   * 2. 其他页面则返回上一页
   */
  plus.key.addEventListener('backbutton', () => {
    if (store.state.route.path === '/index' || store.state.route.path === '/bag' || store.state.route.path === '/login' || store.state.route.path === '/user') {
      if (!first) {
        first = new Date().getTime()
        Vue.$vux.toast.show({ text: '再按一次退出', type: 'text', time: 1500, position: 'bottom' })
        setTimeout(() => { first = null }, 1000)
      } else if (new Date().getTime() - first < 1000) {
        plus.runtime.quit()
      }
    } else {
      history.back()
    }
  }, false)
})

let app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')

export default app
