module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://cnodejs.org/api/v1',
        pathRewrite: {'^/api': ''},
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "./node_modules/sass-bem/_bem.scss";`
      }
    }
  }
}
