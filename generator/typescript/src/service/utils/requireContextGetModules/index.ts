export default function (modulesContext, type = 'OBJECT') {
  const chunks = modulesContext.keys().reduce((object, key) => {
    return Object.assign(object, { [key.replace(/(^\.\/)|(\.ts$)/g, '')]: modulesContext(key).default })
  }, {})
  if (type === 'OBJECT')console.log(chunks)
  const result = Object.keys(chunks).reduce((modules, key) => {
    if (type === 'OBJECT') {
      modules[key] = chunks[key]
    } else {
      (modules as any[]).push(...chunks[key])
    }
    return modules
  }, type === 'OBJECT' ? {} : [])
  return result
}
