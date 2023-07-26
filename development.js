import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import dotenv from 'dotenv';

const env = dotenv.config().parsed;
const src  = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

export default {
  mode: 'development',
  entry: src + '/index.tsx',

  output: {
    path: dist,
    publicPath: "/SeedsOfSolitude/",
    filename: 'bundle.js',
  },

  devtool: 'eval-source-map',

  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              camelCase: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(t|j)(s|sx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'ts-loader',
        ],
      },
      {
        test: /\.(jpg|png|svg|gif|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/SeedsOfSolitude/img/',
              publicPath: path => '/SeedsOfSolitude/img/' + path.split('/').slice(-1)[0],
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: { '@': src },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: src + '/index.html',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(env)
    }),
  ],
  devServer: {
    port: 8080,
    historyApiFallback: true, 
    hot: true,
		contentBase: dist,
  }
}

