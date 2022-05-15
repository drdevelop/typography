const { getRouterConfig } = require('./router');
const { kebabCase } = require('lodash');
const { resolve } = require('path');

const base = process.env.NODE_ENV === 'production' ? '/typography/vue' : '';

module.exports = {
  title: '@typography/vue',
  description: 'typography vue components',
  alias: {
    '@typography/vue': resolve('./src/'),
  },
  base,
  outDir: '../docs-dist',
  themeConfig: {
    lang: 'en-US',
    lastUpdated: '最近更新',
    repo: 'dewfall123/@typography/vue',
    repoLabel: 'Github',
    prevLink: true,
    nextLink: true,
    locales: {
      '/': {
        lang: 'en-US',
        title: '@typography/vue',
        description: 'vue hooks',
        label: 'English',
        selectText: 'Languages',
        nav: [
          { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
          { text: 'Components', link: `/${kebabCase('components')}/paragraph/`, activeMatch: '^/components/' },
        ],
        sidebar: {
          '/': [{
            text: 'Getting Start',
            link: '/guide/start',
          }, {
            text: 'changelog',
            link: '/guide/changelog',
          }],
          '/guide/': [{
            text: 'Getting Start',
            link: '/guide/start',
          }, {
            text: 'changelog',
            link: '/guide/changelog',
          }],
          '/components/': [
            { text: 'paragraph', link: '/components/paragraph/' }
          ],
        },
      },
      '/zh/': {
        lang: 'zh-CN',
        title: '@typography/vue',
        description: 'vue hooks',
        label: '中文',
        selectText: '语言',
        nav: [
          { text: '指南', link: '/zh/guide/start', activeMatch: '^/zh/$|^/zh/guide/' },
          { text: '组件', link: `/zh/${kebabCase('components')}/paragraph/`, activeMatch: '^/zh/components/' },
        ],
        sidebar: {
          '/zh/guide/': [{
            text: '快速开始',
            link: '/zh/guide/start',
          }, {
            text: '更新日志',
            link: '/zh/guide/changelog',
          }],
          '/zh/components/': [
            { text: 'paragraph 段落', link: '/zh/components/paragraph/' }
          ],
          '/zh/': [{
            text: '快速开始',
            link: '/zh/guide/start',
          }, {
            text: '更新日志',
            link: '/zh/guide/changelog',
          }],
        },
      },
    },
  },
};
