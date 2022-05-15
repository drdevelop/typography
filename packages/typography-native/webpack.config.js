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
    library: '@typography-org/native',
    libraryTarget: 'umd',
  },
  module: {
    rules: [{
      test: /.ts$/,
      loader: 'ts-loader',
    }]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins,
}
