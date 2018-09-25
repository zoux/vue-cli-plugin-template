import Vue from 'vue'

import { DEBUG_VUE_TIP } from './config'
import CommonComponents from './components'
import plugins from './plugins'
import router from './plugins/router'
import store from './plugins/store'
import App from './App.vue'

Vue.config.productionTip = DEBUG_VUE_TIP

Vue.use(CommonComponents)
Vue.use(plugins)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
