import layout from './pages/layout'
import index from './pages/index'
import modules from './modules/store'
import store from 'src/store'

export default  {
  'collect': {
    component: layout,
    subRoutes: {
      '/': {
        component: index,
      }
    }
  }
}

store.registerModule('collect', {
  ...modules
});