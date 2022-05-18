import { defineConfig, IConfig } from 'dumi';
import { GenerateSW } from 'workbox-webpack-plugin';
import config from './config/config';

export default defineConfig({
  title: '@typography/native',
  logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
  mode: 'site',
  hash: true,
  locales: [
    ['zh-CN', '中文'],
    ['en', 'English'],
  ],
  outputPath: 'docs-dist',
  // mfsu: true,
  publicPath: process.env.NODE_ENV === 'development' ? '/' : config.publicPath,
  history: {
    type: 'hash',
  },
  chainWebpack(memo) {
    memo.plugin('workbox-webpack-plugin')
      .use(
        GenerateSW,
        [{
          clientsClaim: true,
          skipWaiting: true,
          maximumFileSizeToCacheInBytes: 1024 * 1024 * 5,
          cleanupOutdatedCaches: true,
          exclude: [/\.map$/, /^manifest.*\.js$/, /\.html$/],
          runtimeCaching: [{
            urlPattern: /.*\.html/,
            handler: 'NetworkFirst',
          }],
        }]
      );
  },
} as IConfig)
