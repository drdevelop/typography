import { defineConfig, IConfig } from 'dumi';

export default defineConfig({
  title: '@typography/native',
  mode: 'site',
  hash: true,
  locales: [
    ['zh-CN', '中文'],
    ['en', 'English'],
  ],
  // mfsu: true,
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '//drdevelop.github.io/typography/native/'
} as IConfig)
