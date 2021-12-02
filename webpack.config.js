const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  devServer: {
    host: 'localhost',
    hot: true,
    static: {
      publicPath: '/public',
    },
    port: 8080,
    proxy: {
      '/api/**' : {
        target: 'https://localhost:3000/api',
        secure: false,
      }
    },
  },
  resolve: {
    //Enable importing js or jsx without specifying type
    extensions: ['.js', '.jsx'],
  }
};
// devServer: {
//   host: 'localhost',
//   port: 8080,
//   // match the output path
//   contentBase: path.resolve(__dirname, 'dist'),
//   // enable HMR on the devServer
//   hot: true,
//   // match the output 'publicPath'
//   publicPath: '/',
//   // fallback to root for other urls
//   historyApiFallback: true,

//   inline: true,

//   headers: { 'Access-Control-Allow-Origin': '*' },
//   /**
//    * proxy is required in order to make api calls to
//    * express server while using hot-reload webpack server
//    * routes api fetch requests from localhost:8080/api/* (webpack dev server)
//    * to localhost:3000/api/* (where our Express server is running)
//    */
//   proxy: {
//     '/api/**': {
//       target: 'http://localhost:3000/',
//       secure: false,
//     },
//     '/assets/**': {
//       target: 'http://localhost:3000/',
//       secure: false,
//     },
//   },
// },