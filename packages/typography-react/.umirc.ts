import { defineConfig, IConfig } from 'dumi';
import { GenerateSW } from 'workbox-webpack-plugin';
import config from './config/config';

export default defineConfig({
  title: '@typography-org/react',
  logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
  mode: 'site',
  hash: true,
  algolia: {
    appId: process.env.APP_ID,
    apiKey: process.env.API_KEY,
    indexName: 'test',
  },
  sitemap: { hostname: 'https://drdevelop.github.io' },
  metas: [
    {
      name: 'keywords',
      content: 'react单行或多行省略,展开收起组件,兼容移动端和pc端',
    },
    {
      name: 'description',
      content: '一款简单易用的省略展开收起react组件，计算精准度极高A react component library that calculates fonts according to browser behavior and omits expanding and collapsing'
    },
  ],
  locales: [
    ['zh-CN', '中文'],
    ['en', 'English'],
  ],
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        style: true,
      }
    ]
  ],
  outputPath: 'docs-dist',
  publicPath: process.env.NODE_ENV === 'development' ? '/' : config.publicPath,
  // mfsu: true,
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
