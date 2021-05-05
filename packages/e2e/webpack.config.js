const webpack = require('webpack');
const path = require('path');
const { ESBuildPlugin } = require('esbuild-loader');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'ts',
          target: 'es2015',
          tsconfigRaw: require('./tsconfig.json')
        }
      },
      {
        test: /\.js$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'js',
          target: 'es2015'
        }
      }
      // {
      //   test: /\.ts$/,
      //   exclude: [/node_modules/],
      //   use: [
      //     {
      //       loader: 'babel-loader',
      //       options: {
      //         presets: ['@babel/typescript']
      //       }
      //     }
      //   ]
      // },
      // {
      //   test: /\.m?js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: [['@babel/preset-env', { loose: true, modules: false }]],
      //       plugins: ['@babel/plugin-transform-runtime'],
      //       sourceType: 'unambiguous'
      //     }
      //   }
      // }
    ]
  },
  plugins: [
    new ESBuildPlugin(),
    new webpack.DefinePlugin(
      Object.keys(require('dotenv').config({ path: path.resolve(__dirname, '../project/.env.development') }).parsed).reduce((a, key) => ({
        ...a,
        [`process.env.${key}`]: JSON.stringify(process.env[key.toString()])
      }))
    ),
    new webpack.ProvidePlugin({
      process: 'process/browser'
    })
  ],
  resolve: {
    extensions: ['.ts', '.js', '.mjs'],
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      path: require.resolve('path-browserify')
    }
  }
};
