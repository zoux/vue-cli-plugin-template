module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '././',
  outputDir: 'dist',
  assetsDir: 'static',
  <%_ if (!(options.features && !options.features.includes('scss-bem'))) { _%>
  css: {
    loaderOptions: {
      sass: {
        data: `@import "./node_modules/sass-bem/_bem.scss";`
      }
    }
  },
  <%_ } _%>
  devServer: {
    proxy: {
      '/api': {
        target: 'https://cnodejs.org/api/v1',
        pathRewrite: { '^/api': '' },
        changeOrigin: true
      }
    }
  }
}
