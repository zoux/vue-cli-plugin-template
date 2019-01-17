module.exports = (api, options) => {
  const dependencies = {
    "axios": "^0.18.0",
    "sass-bem": "^2.6.5"
  }
  if (options.templateType === 'base') {
    api.extendPackage({
      dependencies
    })
  } else if (options.templateType === 'typescript') {
    api.extendPackage({
      dependencies: {
        ...dependencies,
        "vuex-class": "^0.3.1"
      }
    })
  }

  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/') || path.startsWith('tsconfig.json') || path.startsWith('tslint.json'))
      .forEach(path => delete files[path])
  })
  if (options.templateType === 'base') {
    api.render('./base')
  } else if (options.templateType === 'typescript') {
    api.render('./typescript')
  }
}
