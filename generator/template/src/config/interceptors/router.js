export function routerBeforeEachFunc (to, from, next) {
  // 这里可以做页面拦截，比如做权限处理
  // ...

  next()
}

export function routerAfterEachFunc (to, from) {
  const prefix = 'vue.js'
  const { title } = to.meta
  document.title = title ? `${prefix} - ${title}` : prefix
}
