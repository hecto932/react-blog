const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './source/server.js',
  output: {
    filename: 'index.js',
    path: './built/server',
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['latest-minimal', 'react']
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({ 
          fallback: 'style-loader', 
          use: 'css-loader'
        })
      }
    ]
  },
  target: 'node',
  plugins: [
    new ExtractTextPlugin('../statics/styles.css'),
  ]
}
