const { ModuleFederationPlugin } = require('webpack').container;

const TerserWebpackPlugin = require('terser-webpack-plugin');

const env = process.env.NODE_ENV;

const plugins = [
  new TerserWebpackPlugin({
    terserOptions: {
      compress: {
        drop_console: true,
      }
    }
  }),
];

if (env === 'development') {
  plugins.push(
    new ModuleFederationPlugin({
      name: 'typography_org',
      filename: 'remoteEntry.js',
      exposes: {
        '.': './src/index.ts',
      }
    })
  )
}

module.exports = {
  mode: env,
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
