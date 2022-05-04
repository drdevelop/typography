const { kebabCase } = require('lodash');

const Router = {
  Guide: ['/guide/start'],
  Components: ['/components/paragraph'],
};

function getRouterConfig(langPrefix = '/') {
  const config = [
    // {
    //   text: langPrefix === '/' ? 'Getting started' : '介绍',
    //   link: `${langPrefix}`,
    // },
    ...Object.entries(Router).map(([text, children]) => ({
      text,
      children: children.map(hookName => ({
        link: `${langPrefix}${kebabCase(hookName)}/`,
        text: hookName,
      })),
    })),
  ];
  console.log('router config', JSON.stringify(config));
  return config;
}

module.exports = {
  getRouterConfig,
};
