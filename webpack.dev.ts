import * as webpack from 'webpack';
import * as HtmlWebPackPlugin from 'html-webpack-plugin';
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
});

const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  output: {
    publicPath: 'http://localhost:9000/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    open: true,
  },
  plugins: [htmlPlugin],
};

export default config;
