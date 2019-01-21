import common from './common'

export default {
  ...common,
  modules: (() => {
    const modulesContext = require.context('./modules', false, /\.ts$/)
    const chunks = modulesContext.keys().reduce((object, key) => {
      return Object.assign(object, { [key.replace(/(^.*\/)|(\.ts$)/g, '')]: modulesContext(key).default })
    }, {})
    const result = Object.keys(chunks).reduce((modules, key) => {
      modules[key] = chunks[key]
      return modules
    }, {})
    return result
  })()
}
