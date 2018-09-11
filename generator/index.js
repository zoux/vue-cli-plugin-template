module.exports = (api, options) => {
  renderCommon()
  renderManuals()

  function renderCommon () {
    api.extendPackage({
      dependencies: {
        "axios": "^0.18.0",
        "vue-router": "^3.0.1",
        "vuex": "^3.0.1"
      },
      devDependencies: {
        "node-sass": "^4.9.0",
        "sass-loader": "^7.0.1"
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
