var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')

var HandlebarsPlugin = require("handlebars-webpack-plugin");
var path = require("path");



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
    /*
    new HtmlWebpackPlugin({
      template: './assets/html/index.hbs',
      }),
    new HtmlWebpackPlugin({
      template: './assets/html/index.hbs',
      filename: './dist/index.html',

      }),
    new HtmlWebpackPlugin({
      template: './assets/html/index2.hbs',
      filename: './dist/index2.html',
      }),
  */
    // if you want to compile hbs files to html in dist/
    /*
     new HandlebarsPlugin({
        // path to main hbs template
        entry: path.join(process.cwd(), "assets", "html", "index.hbs"),
        // filepath to result
        output: path.join(process.cwd(), "dist", "index.html"),
        // data passed to main hbs template: `main-template(data)`
        // data: require("./app/data/project.json"),

        // globbed path to partials, where folder/filename is unique
        partials: [
            path.join(process.cwd(), "assets", "html", "components", "*", "*.hbs")
        ],

        // register custom helpers. May be either a function or a glob-pattern
        helpers: {
            nameOfHbsHelper: Function.prototype,
            projectHelpers: path.join(process.cwd(), "assets", "html", "helpers", "*.helper.js")
        },

        // hooks
        onBeforeSetup: function (Handlebars) {},
        onBeforeAddPartials: function (Handlebars, partialsMap) {},
        onBeforeCompile: function (Handlebars, templateContent) {},
        onBeforeRender: function (Handlebars, data) {},
        onBeforeSave: function (Handlebars, resultHtml) {},
        onDone: function (Handlebars) {}
      }),
      */

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
    },{
        test: /\.hbs?$/,
        loader: 'handlebars-loader',
    },

    ],
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx', '.css', '.scss','.hbs', '.html']
  },
}
