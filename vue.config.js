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
}
