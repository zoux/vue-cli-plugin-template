import { CommonNav, CommonNavItem } from './CommonNav'

const components = {
  CommonNav,
  CommonNavItem
}

export default {
  install (Vue) {
    Object.keys(components).forEach(key => {
      Vue.component(components[key].name, components[key])
    })
  }
}
