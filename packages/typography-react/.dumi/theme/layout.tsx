import React from 'react';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
import Layout from 'dumi-theme-default/src/layout';

export default ({ children, ...props }) => (
  <Layout {...props}>
    <ConfigProvider locale={zhCN}>
      {children}
    </ConfigProvider>
  </Layout>
)
