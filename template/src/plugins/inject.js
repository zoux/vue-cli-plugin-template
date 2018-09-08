import axios from './axios'
import api from './api'
import consts from './const'
import utils from '../service/utils'

function inject (Vue, name, module) {
  Object.defineProperty(Vue.prototype, name, {
    get () {
      return module
    }
  })
}

export default {
  install (Vue) {
    inject(Vue, '$ajax', axios)
    inject(Vue, '$api', api)
    inject(Vue, '$const', consts)
    inject(Vue, '$utils', utils)
  }
}
