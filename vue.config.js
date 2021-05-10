module.exports = {
  // devServer:{
  //   proxy:'https://opendata.corona.go.jp/api/'
  // },
  // publicPath: './', //相対パス
  publicPath: '/covid-19_app/', 
  chainWebpack: config => {
    config.plugin('html').tap(options => {
      options[0].minify = {
        removeComments: false,
        collapseWhitespace: false,
        removeAttributeQuotes: false,
        collapseBooleanAttributes: false,
        removeScriptTypeAttributes: false,
        filenameHashing: false//ファイル名の後ろに乱数発生をしない
      }
      return options
    })
  },
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
    }
  }
};
