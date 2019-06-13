module.exports = {
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
