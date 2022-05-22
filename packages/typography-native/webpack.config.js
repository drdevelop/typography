const TerserWebpackPlugin = require('terser-webpack-plugin');

const env = process.env.NODE_ENV;

const plugins = [
  new TerserWebpackPlugin({
    terserOptions: {
      compress: {
        drop_console: true,
      }
    }
  })
];

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [{
      test: /.ts$/,
      use: [
        'babel-loader',
        'ts-loader'
      ],
    }, {
      test: /.js$/,
      use: [
        'babel-loader',
      ],
    }]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins,
}
