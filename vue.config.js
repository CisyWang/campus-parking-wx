module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/uni.scss";`
      }
    }
  },
  configureWebpack: {
  }
} 