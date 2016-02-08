var path = require('path')
var webpack = require('webpack')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './demo/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:3001' })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'react-hot',
        include: path.join(__dirname, '..'),
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          cacheDirectory: true
        },
        include: path.join(__dirname, '..'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css!autoprefixer-loader?browsers=last 2 version'
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  }
}
