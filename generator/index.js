const fs = require('fs')

module.exports = (api, options) => {
  renderCommon()

  api.onCreateComplete(() => {
    renderManuals()
  })

  function renderCommon () {
    api.extendPackage({
      dependencies: {
        "axios": "^0.18.0"
      }
    })
    __remove(api.resolve('./src'))
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
      __remove(api.resolve('./.eslintignore'))
      __remove(api.resolve('./src/assets/iconfont'))
      // ejs 控制渲染的有：
      // template/src/App.vue
    }
  }

  function __remove (path, isTop = true) {
    if (isTop) console.log(path, fs.existsSync(path))
    if (!fs.existsSync(path)) return
    if (!fs.statSync(path).isDirectory()) return fs.unlinkSync(path)
    const files = fs.readdirSync(path)
    files.forEach(item => {
      const currPath = `${path}/${item}`
      fs.statSync(currPath).isDirectory() ? __remove(currPath, false) : fs.unlinkSync(currPath)
    })
    fs.rmdirSync(path)
  }
}
