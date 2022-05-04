---
order: 1
nav:
  title: '组件'
  path: /components
---

# Paragraph 段落

## 概述
文本省略，展开收齐等功能

## 代码演示

### 添加展开功能
```tsx
/**
 * desc: 设置`ellipsis.expandable:true`添加展开功能
 */
import React, { useState } from 'react';
import { Paragraph } from '@typography-org/react';
import { Drawer } from 'antd';

export default (props) => {
  const [visible, setVisible] = useState<boolean>(false);
  const onVisibleChange = (show: boolean) => {
    setVisible(show);
  }
  return (
    <>
    <div style={{ width: 300, fontSize: 14, border: '1px solid orange', boxSizing: 'initial'}}>
      <Paragraph
        ellipsis={{
          expandable: true,
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

### 添加展开收起功能
```tsx
/**
 * desc: 设置`ellipsis.expandable:true`添加展开功能，设置`ellipsis.packupable:true`添加收起功能`
 */
import React, { useState } from 'react';
import { Paragraph } from '@typography-org/react';
import { Drawer } from 'antd';

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

### 展开收起按钮添加样式
```tsx
/**
 * desc: 设置`ellipsis.expandStyle`添加展开按钮样式，设置`ellipsis.packupStyle`添加收起按钮样式`
 */
import React, { useState } from 'react';
import { Paragraph } from '@typography-org/react';

export default (props) => {
  return (
    <>
    <div style={{ width: 300, fontSize: 14, border: '1px solid orange', boxSizing: 'initial'}}>
      <Paragraph
        ellipsis={{
          expandable: true,
          expandStyle: {
            color: 'red',
          },
          packupable: true,
          packupStyle: {
            color: 'green',
          },
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

### 完全自定义展开收起按钮
```tsx
/**
 * desc: 通过设置`suffix`或者`packup`自定义展开收起文案，它们可以是字符串，也可以是react dom节点
 */
import React, { useState } from 'react';
import { Paragraph } from '@typography-org/react';

export default (props) => {
  return (
    <>
    <div style={{ width: 300, fontSize: 14, border: '1px solid orange', boxSizing: 'initial'}}>
      <Paragraph
        ellipsis={{
          recognizeLineBreaks: true,
          rows: 2,
          expandable: true,
          packupable: true,
          suffix: <span style={{ color: '#7395f7' }}>view more</span>,
          packup: <span style={{ color: 'red' }}>packup</span>,
        }}
      >
        我可能是展示在这个文本框中的第一行数据嘿，我可能是展示在这个文本框中的第二行数据，我可能是展示在这个文本框中的第三行数据
      </Paragraph>
    </div>
    </>
  )
}
```

### 查看更多自定义
```tsx
/**
 * desc: 点击查看更多展示将全部文本展示在弹窗中
 */
import React, { useState } from 'react';
import { Paragraph } from '@typography-org/react';
import { Drawer } from 'antd';

export default (props) => {
  const [visible, setVisible] = useState<boolean>(false);
  const onVisibleChange = (show: boolean) => {
    setVisible(show);
  }
  return (
    <>
    <div style={{ width: 300, fontSize: 14, border: '1px solid orange', boxSizing: 'initial'}}>
      <Paragraph
        ellipsis={{
          recognizeLineBreaks: true,
          rows: 2,
          suffix: <span style={{ color: '#7395f7' }}><span onClick={onVisibleChange.bind(null, true)}>查看更多</span></span>
        }}
      >
        我可能是展示在这个文本框中的第一行数据嘿，我可能是展示在这个文本框中的第二行数据，我可能是展示在这个文本框中的第三行数据
      </Paragraph>
    </div>
    <Drawer
      title="查看更多"
      placement="bottom"
      visible={visible}
      onClose={onVisibleChange.bind(null, false)}
    >
      我可能是展示在这个文本框中的第一行数据嘿，我可能是展示在这个文本框中的第二行数据，我可能是展示在这个文本框中的第三行数据
    </Drawer>
    </>
  )
}
```

### 查看更多添加间距
```tsx
/**
 * desc: 通过给查看更多的内联标签添加`paddingLeft`实现加左间距效果
 */
import React from 'react';
import { Paragraph } from '@typography-org/react';

export default (props) => {
  return (
    <div style={{ width: 300, fontSize: 14, border: '1px solid orange', boxSizing: 'initial'}}>
      <Paragraph
        ellipsis={{
          recognizeLineBreaks: true,
          rows: 2,
          suffix: <span style={{ color: '#7395f7', paddingLeft: 12 }}><span>查看更多</span></span>
        }}
      >
        我可能是展示在这个文本框中的第一行数据嘿，我可能是展示在这个文本框中的第二行数据，我可能是展示在这个文本框中的第三行数据
      </Paragraph>
    </div>
  )
}
```


### 识别换行符

```tsx
/**
 * desc: 设置`ellipsis.recognizeLineBreaks:true`识别换行符
 */
import React, { useState } from 'react';
import { Paragraph } from '@typography-org/react';
import { Drawer } from 'antd';

export default (props) => {
  return (
    <>
    <div style={{ width: 300, fontSize: 14, border: '1px solid orange', boxSizing: 'initial'}}>
      <Paragraph
        ellipsis={{
          recognizeLineBreaks: true,
          expandable: true,
          packupable: true,
          rows: 2,
        }}
      >
        接下来是换行符\n我可能是展示在这个文本框中的第二行数据，我可能是展示在这个文本框中的第三行数据
      </Paragraph>
    </div>
    </>
  )
}
```

```tsx
/**
 * desc: 若最后一行也是换行符，则将换行符替换为省略号，并将省略占位（例如展开按钮或者自定义的查看更多按钮）展示在紧跟省略号后
 */
import React, { useState } from 'react';
import { Paragraph } from '@typography-org/react';
import { Drawer } from 'antd';

export default (props) => {
  return (
    <>
    <div style={{ width: 300, fontSize: 14, border: '1px solid orange', boxSizing: 'initial'}}>
      <Paragraph
        ellipsis={{
          recognizeLineBreaks: true,
          expandable: true,
          packupable: true,
          rows: 2,
        }}
      >
        接下来是换行符\n 接下来是换行符\n第一行数据嘿
      </Paragraph>
    </div>
    </>
  )
}
```

## 省略效果演示

### 文本未超出
```tsx
/**
 * desc: 文本未超出则不需要省略
 */
import React from 'react';
import { Paragraph } from '@typography-org/react';

export default (props) => {
  return (
    <div style={{ width: 300, fontSize: 14, border: '1px solid orange', boxSizing: 'initial'}}>
      <Paragraph
        ellipsis={{
          recognizeLineBreaks: true,
          rows: 2,
          suffix: <span style={{ color: '#7395f7' }}><span>查看更多</span></span>
        }}
      >
        我可能是展示在这个文本框中的第一行数据嘿，我可能是展示在这个文本框中的第二行数据。
      </Paragraph>
    </div>
  )
}
```

### 普通省略
```tsx
/**
 * desc: 纯中文字体超出省略
 */
import React from 'react';
import { Paragraph } from '@typography-org/react';

export default (props) => {
  return (
    <div style={{ width: 300, fontSize: 14, border: '1px solid orange', boxSizing: 'initial'}}>
      <Paragraph
        ellipsis={{
          recognizeLineBreaks: true,
          rows: 2,
          suffix: <span style={{ color: '#7395f7' }}><span>查看更多</span></span>
        }}
      >
        我可能是展示在这个文本框中的第一行数据嘿，我可能是展示在这个文本框中的第二行数据，我可能是展示在这个文本框中的第三行数据
      </Paragraph>
    </div>
  )
}
```

### 行末为长单词
```tsx
/**
 * desc: 行末尾为长单词，当剩余空间排版不下时，会整词换行展示在新的一行行首
 */
import React from 'react';
import { Paragraph } from '@typography-org/react';

export default (props) => {
  return (
    <div style={{ width: 300, fontSize: 14, border: '1px solid orange', boxSizing: 'initial'}}>
      <Paragraph
        ellipsis={{
          recognizeLineBreaks: true,
          rows: 2,
          suffix: <span style={{ color: '#7395f7' }}><span>查看更多</span></span>
        }}
      >
        我可能是展示在这个文本框中的第一行namespace，我可能是展示在这个文本框中的第二行数据，我可能是展示在这个文本框中的第三行数据
      </Paragraph>
    </div>
  )
}
```

### 行首为标点符号
```tsx
/**
 * desc: 行首为标点符号时，也能精准计算前一行掉下来的字数
 */
import React from 'react';
import { Paragraph } from '@typography-org/react';

export default (props) => {
  return (
    <div style={{ width: 300, fontSize: 14, border: '1px solid orange', boxSizing: 'initial'}}>
      <Paragraph
        ellipsis={{
          recognizeLineBreaks: true,
          rows: 2,
          suffix: <span style={{ color: '#7395f7' }}><span>查看更多</span></span>
        }}
      >
        我可能是展示在这个文本框中的第一行数据嘿，，我可能是展示在这个文本框中的第二行数据，我可能是展示在这个文本框中的第三行数据
      </Paragraph>
    </div>
  )
}
```

## API

<API
  src="./index.tsx"
  exports='["ParagraphProps", "EllipsisConfig"]'
/>
