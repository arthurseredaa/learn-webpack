const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const devMode = process.env.NODE_ENV === 'development';

const plugins = [
  new HtmlWebpackPlugin({
    template: './index.html',
    minify: {
      collapseWhitespace: !devMode,
    },
  }),
  // Clean dist folder after each build, delete only modified files
  new CleanWebpackPlugin(),
  // Copy favicon to dist folder
  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, 'src/favicon.ico'),
        to: path.resolve(__dirname, 'dist'),
      },
    ],
  }),
  // Minify css
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
  }),
];

// Include hot module replacement in development modes
if (devMode) {
  plugins.push(new HotModuleReplacementPlugin());
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.js',
    analytics: './analytics.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 9000,
    open: true,
    hot: devMode,
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@models': path.resolve(__dirname, 'src/models'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimization: {
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins,
  module: {
    rules: [
      // STYLES
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          'css-loader',
        ],
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
        use: ['xml-loader'],
      },
      // CSV
      {
        test: /\.csv$/,
        use: ['csv-loader'],
      },
    ],
  },
};
