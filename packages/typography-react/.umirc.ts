import { defineConfig, IConfig } from 'dumi';

export default defineConfig({
  title: '@typography-org/react',
  mode: 'site',
  hash: true,
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
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '//drdevelop.github.io/typography/react/'
  // mfsu: true,
} as IConfig)
