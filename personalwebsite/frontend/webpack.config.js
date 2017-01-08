var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  context: __dirname,

  entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/dev-server',
      './assets/js/index.jsx',
  ],

  output: {
      path: path.resolve('./assets/bundles/'),
      filename: "[name]-[hash].js",
      publicPath: 'http://localhost:3000/assets/bundles', // Tell django to use this for hot reload
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    /*
    new ExtractTextPlugin('public/style.css', {
        allChunks: true
    }),
    */
    new webpack.HotModuleReplacementPlugin(),
    //new webpack.NoErrorsPlugin(), // don't reload if error
    new HtmlWebpackPlugin({
      template: './assets/html/index.html'
      }),

  ],

  module: {
    loaders: [
      { 
          test: /\.jsx?$/, 
          exclude: /node_modules/, 
          loaders: ['react-hot-loader/webpack', 'babel-loader?presets[]=es2016,presets[]=react'],
          /*
          query: {
              presets: ['es2016','react']
          }
          */
      }, {
          test: /\.scss?$/,
          exclude: /node_modules/,
          loaders: ["style-loader", "css-loader", "sass-loader"]
          //loader: ExtractTextPlugin.extract('css!sass'),
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      {
            test: /\.json$/,
            loader: 'json'
        },{
            test: /\.html$/,
            loader: 'raw-loader'
    },
    ],
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx', '.css', '.scss']
  },
}
