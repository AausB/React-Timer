'use strict';

const path = require('path');
const webpack = require('webpack');
/**
 * With tis config file you can run webpack without any CLI parameters
  */

module.exports = {
  // Input file
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  // Output file
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  // what file extensions should be used for processing webpack
  resolve: {
    // where to find the jsx modules
    alias: {
      // example:
      // Main: path.resolve(__dirname, 'app/components/Main.jsx'),
      Main: path.resolve(__dirname, 'app/components/Main.jsx'),
      Navigation: path.resolve(__dirname, 'app/components/Navigation.jsx'),
      Countdown: path.resolve(__dirname, 'app/components/Countdown.jsx'),
      Timer: path.resolve(__dirname, 'app/components/Timer.jsx'),
      Clock: path.resolve(__dirname, 'app/components/Clock.jsx'),
      NotFound: path.resolve(__dirname, 'app/components/NotFound.jsx'),
      applicationStyles: path.resolve(__dirname, 'app/styles/app.scss')
    },
    // this is webpack 1 where an '' string could be defined
    // extensions: ['', '.js', '.jsx']
    // This is webpack 2
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        // regex: file has extension .jsx
        test: /\.jsx?$/,
        // folders not to parse
        exclude: /(node_modules|bower_components)/,

        use: [
          {
            // use babel to convert...
            loader: 'babel-loader',
            query: {
              // ... react jsx into js and then es6 to js
              presets: ['react', 'es2015', 'stage-0']
            },
          }
        ]

      }
    ]
  },
  // https://webpack.js.org/configuration/devtool/
  // show original source code in chrome debugger
  // use debugger; in source code
  devtool: 'cheap-module-eval-source-map'
}
