const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = () => {
  const isProduction = process.env.NODE_ENV === 'production';
  return {
    entry: './src/main.tsx',
    output: {
      publicPath: '/', // 根据部署路径调整
      filename: '[name].[contenthash].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 3000,
      hot: true,
      historyApiFallback: true, // 允许 history 路由模式
      proxy: [
        {
          context: ['/api'],
          target: 'http://localhost:30001',
          changeOrigin: true,
          pathRewrite: { '^/api': '' },
        },
      ],
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    resolve: {
      alias: {
        // ts 、webpack配置别名
        '@': path.resolve(__dirname, 'src'), // 让 @ 指向 src 目录
      },
      extensions: ['.ts', '.tsx', '.js'], // 允许导入这些扩展名的文件
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/, // 处理 .ts 和 .tsx 文件
          use: ['ts-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.js$/, //
          use: ['babel-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.less$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
            'less-loader',
          ],
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
          ],
        },
      ],
    },
    plugins: [
      new Dotenv({
        path: `./env/.env.${process.env.APP_ENV}`, // 根据 NODE_ENV 加载不同的 .env 文件
      }),
      new webpack.DefinePlugin({
        'process.env.APP_ENV': JSON.stringify(process.env.APP_ENV || 'dev'),
      }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),

      new MiniCssExtractPlugin({
        filename: isProduction ? '[name].[contenthash].css' : '[name].css',
      }),
    ],
  };
};
