import createLogger from 'vuex/dist/logger'

// 当前宿主平台
export const HOST_PLATFORM = 'WEB'

// 当前运行环境
export const NODE_ENV = process.env.NODE_ENV || 'production'
export const NODE_ENV_IS_PRODUCTION = NODE_ENV === 'production'

// router 默认配置
export const ROUTER_DEFAULT_CONFIG = {
  mode: 'hash', // 配置路由模式
  base: '/', // 应用的基路径
  linkActiveClass: 'router-link-active', // 链接激活时使用的 class
  linkExactActiveClass: 'router-link-exact-active' // 链接被精确匹配激活时使用的 class
}

// vuex 默认配置
export const VUEX_DEFAULT_CONFIG = {
  strict: !NODE_ENV_IS_PRODUCTION, // 在开发环境进入严格模式，mutation 以外修改 state 都会抛出错误
  plugins: !NODE_ENV_IS_PRODUCTION // 在开发环境生成状态快照
    ? [createLogger({})]
    : []
}

// axios 默认配置
export const AXIOS_DEFAULT_CONFIG = {
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
}

// API 默认配置
export const API_DEFAULT_CONFIG = {
  prefix: '/api',
  errorIntercept: true
}

// 业务相关的配置
// ...

// 方便开发的配置
export const DEBUG_VUE_TIP = false // vue tip 开关
export const CONSOLE_REQUEST_ENABLE = true // 开启请求参数打印
export const CONSOLE_RESPONSE_ENABLE = true // 开启响应参数打印
