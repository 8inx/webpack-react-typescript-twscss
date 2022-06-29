const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {

  entry:{
    app: ['babel-polyfill','./src/index.tsx']
  },

  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './static/index.html',
      //favicon: './static/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: "css/main.css"
    }), 
  ],

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/i,
        use: [
           MiniCssExtractPlugin.loader, 
          "css-loader", 
          "postcss-loader",
          "sass-loader",
        ]
      },
      {
        test: /\.(svg|png|jpe?g)$/,
        type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext]',
            publicPath: '/'
          }
      },
      
    ]
  },
  
  resolve: {
    extensions: ['','.js', '.jsx', '.ts', '.tsx'],
    modules: [ path.resolve(__dirname, "src"), "node_modules"]
  },
}