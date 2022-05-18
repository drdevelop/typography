import React from 'react';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
import Layout from 'dumi-theme-default/src/layout';
import config from '../../config/config';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(`${config.publicPath}service-worker.js`);
  })
}

export default ({ children, ...props }) => (
  <Layout {...props}>
    <ConfigProvider locale={zhCN}>
      {children}
    </ConfigProvider>
  </Layout>
)
