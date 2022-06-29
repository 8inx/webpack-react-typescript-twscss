const {merge} = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {

  mode: 'development',
  target: 'web',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    historyApiFallback: true,
    host:'0.0.0.0',
    hot: true,
  },
})