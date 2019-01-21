const components = (() => {
  const modulesContext = require.context('./', true, /\.vue$/)
  const chunks = modulesContext.keys().reduce((chunks, key) => {
    return Object.assign(chunks, { [key.replace(/(^.*\/)|(\.vue$)/g, '')]: modulesContext(key).default })
  }, {})
  const result = Object.keys(chunks).reduce((modules, key) => {
    modules[key] = chunks[key]
    return modules
  }, {})
  return result
})()

export default {
  install (Vue) {
    Object.keys(components).forEach(key => {
      Vue.component(components[key].name, components[key])
    })
  }
}
