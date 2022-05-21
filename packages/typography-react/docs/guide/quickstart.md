---
order: 1
nav:
  title: 指南
---

## 介绍

Typography组件 的 react 实现。

## 特点

- 易于使用.
- 同时适用于 react 16.8.0以上或以下。
- 由 TS 编写，完整的类型推导.

## 安装

```
yarn add @typography-org/react -S
```

## 使用

```
import React from 'react';
import { Paragraph } from '@typography-org/react';

export default (props) => {
  return (
    <>
    <div style={{ width: 300, fontSize: 14, border: '1px solid orange', boxSizing: 'initial'}}>
      <Paragraph
        ellipsis={{
          expandable: true,
          packupable: true,
          rows: 2,
        }}
      >
        我可能是展示在这个文本框中的第一行数据嘿，我可能是展示在这个文本框中的第二行数据，我可能是展示在这个文本框中的第三行数据
      </Paragraph>
    </div>
    </>
  )
}
```
