var path = require('path')

var config = {
  entry: __dirname + '/src/Spinner.js',
  output: {
    path: __dirname + '/lib',
    filename: 'Spinner.js',
    library: 'react-spinner',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    'react': 'react',
    'react-prefixr': 'react-prefixr'
  },
  module: {
    loaders: [
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
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  }
}

module.exports = config
