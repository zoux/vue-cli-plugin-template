export default function (modulesContext, type = 'OBJECT') {
  const chunks = modulesContext.keys().reduce((chunks, key) => {
    return Object.assign(chunks, { [key.replace(/(^\.\/)|(\.js$)/g, '')]: modulesContext(key).default })
  }, {})
  const result = Object.keys(chunks).reduce((modules, key) => {
    if (type === 'OBJECT') {
      modules[key] = chunks[key]
    } else {
      modules.push(...chunks[key])
    }
    return modules
  }, type === 'OBJECT' ? {} : [])
  return result
}
