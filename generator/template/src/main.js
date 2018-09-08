import Vue from 'vue'

import App from './App.vue'
import router from './plugins/router'
import store from './plugins/store'
import inject from './plugins/inject'
import CommonComponents from './components'
import { DEBUG_VUE_TIP } from './config'

window.GLOBAL = {}

Vue.use(inject)
Vue.use(CommonComponents)
Vue.config.productionTip = DEBUG_VUE_TIP

window.GLOBAL.APP = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
