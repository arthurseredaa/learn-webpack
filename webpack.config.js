const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      // styles
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // images
      {
        test: /\.(png|jpg|svg|gif)$/,
        // type: 'asset/resource'
      },
      // fonts
      {
        test: /\.(ttf|otf)$/,
        // type: 'asset/resource'
      },
      // xml
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      // csv
      {
        test: /\.csv$/,
        use: ['csv-loader']
      }
    ],
  },
};
