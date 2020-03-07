module.exports = {

  configureWebpack: {
    resolve: {
      alias: {
        'src': '@',
        'components': '@/components',
        'common': 'components/common',
        'assets': '@/assets',
        'styles': 'src/assets/styles'
      }
    }
  },
  // assetsSubDirectory: 'public',
  // publicPath: '/',
  // // 所有 webpack-dev-server 的选项都支持
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       //要访问的跨域的域名
  //       target: 'http://localhost:8080',
  //       ws: true,  //是否跨域
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': '/mock'
  //       }
  //     }
  //   }
  // }

}
