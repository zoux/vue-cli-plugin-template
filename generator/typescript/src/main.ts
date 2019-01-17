import Vue from 'vue'

import CommonComponents from './components'
import template from './plugins/template'
import router from './plugins/template/router'
import store from './plugins/template/store'
import App from './App.vue'

Vue.use(CommonComponents)
Vue.use(template)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
