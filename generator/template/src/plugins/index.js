import axios from './axios'
import api from './api'
import constants from './constants'
import utils from './utils'

function inject (Vue, name, module) {
  Object.defineProperty(Vue.prototype, name, {
    get () {
      return module
    }
  })
}

export default {
  install (Vue) {
    // 可自定义的注释或删除全局注入
    inject(Vue, '$axios', axios)
    inject(Vue, '$api', api)
    inject(Vue, '$constants', constants)
    inject(Vue, '$utils', utils)
  }
}
