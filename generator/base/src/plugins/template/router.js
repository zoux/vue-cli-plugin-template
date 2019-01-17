import Vue from 'vue'
import Router from 'vue-router'

import routes from '../../routes'
import { ROUTER_DEFAULT_CONFIG } from '../../config'
import { routerBeforeEachFunc, routerAfterEachFunc } from '../../config/interceptors'

Vue.use(Router)

// 注入默认配置和路由表
const routerInstance = new Router({
  ...ROUTER_DEFAULT_CONFIG,
  routes
})

routerInstance.beforeEach(routerBeforeEachFunc)
routerInstance.afterEach(routerAfterEachFunc)

export default routerInstance
