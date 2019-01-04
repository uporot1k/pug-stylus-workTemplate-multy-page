const autoprefixer = require('autoprefixer')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const PATHS = {
  entries: __dirname + '/src/js/entries/',
  output: __dirname + '/dist/',
  pug: __dirname + '/src/pug/'
}

function jadePage(name) {
  return new HtmlWebpackPlugin({
    filename: name + '.html',
    template: PATHS.pug + name + '.pug',
    inject: false
  })
}

module.exports = {
  entry: {
    index: PATHS.entries + 'index.js',
    about: PATHS.entries + 'about.js'
  },
  output: {
    path: PATHS.output,
    filename: 'js/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {presets: ['es2015']}
      },
      { 
        test: /\.pug$/,
        exclude: /node_modules/,
        loader: 'pug' 
      },
      {
        test: /\.(styl|css)$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!stylus-loader')
      }
    ]
  },
  plugins: [
    jadePage('index'),
    new ExtractTextPlugin('css/[name].css'),
    new CopyWebpackPlugin([
      { from: 'src/images', to: 'images' }
    ])
  ],
  postcss: function () {
    return [autoprefixer];
  }
}