module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  },
  runtimeCompiler: true,
  css: {
    sourceMap: true,
    loaderOptions: {
      // sass-loader
      sass: {
        // @/  src/
        data: `@import "@/assets/scss/_variables.scss";`
      }
    }
  }
}
