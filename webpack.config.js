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
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@models': path.resolve(__dirname, 'src/models'),
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      // STYLES
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // IMAGES
      {
        test: /\.(png|jpg|svg|gif)$/,
        // type: 'asset/resource'
      },
      // FONTS
      {
        test: /\.(ttf|otf)$/,
        // type: 'asset/resource'
      },
      // XML
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      // CSV
      {
        test: /\.csv$/,
        use: ['csv-loader']
      }
    ],
  },
};
