module.exports = (api, options) => {
  renderCommon()
  renderManuals()

  function renderCommon () {
    api.extendPackage({
      dependencies: {
        "axios": "^0.18.0"
      }
    })
    api.render(files => {
      Object.keys(files)
        .filter(path => path.startsWith('src/'))
        .forEach(path => delete files[path])
    })
    api.render('./template')
  }

  function renderManuals () {
    const manualNotExist = name => options.features && !options.features.includes(name)

    if (manualNotExist('scss-bem')) {
      // ejs 控制渲染的有：
      // template/vue.config.js
    } else {
      api.extendPackage({
        dependencies: {
          "sass-bem": "^2.6.5"
        }
      })
    }

    if (manualNotExist('iconfont')) {
      api.render(files => {
        Object.keys(files)
          .filter(path => path.startsWith('.eslintignore') || path.startsWith('src/assets/iconfont'))
          .forEach(path => delete files[path])
      })
      // ejs 控制渲染的有：
      // template/src/App.vue
    }
  }
}
