---
order: 3
nav:
  title: 快速使用
  path: /fast-use
---

# React集成
```tsx
import React, { useCallback, useEffect, useState, useMemo } from 'react';
import formatWithEllipsis from '@typography-org/native';

const Paragraph: React.FC<Props> = props => {
  const text = `我可能是展示在这个文本框中的第一行数据嘿，我可能是展示在这个文本框中的第二行数据，我可能是展示在这个文本框中的第三行数据`;

  const rows = 2;

  const suffix = '展开';

  const packup = '收起';

  const [displayText, setDisplayText] = useState<string>(null);
  const [displayTextBeforeExpand, setDisplayTextBeforeExpand] = useState<string>(null);
  const suffixWidth = 28;
  const containerInfo = useMemo(() => ({
    width: 300,
    fontSize: 14,
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
  }), []);

  useEffect(() => {
    const { width, fontSize, fontFamily } = containerInfo;
    const newDisplayText = formatWithEllipsis(text, {
      length: width * rows,
      lines: rows,
      fontSize,
      ellipsisWidth: suffixWidth,
      fontFamily,
    }, {
      recognizeLineBreaks: true,
    });
    setDisplayText(newDisplayText);
    setDisplayTextBeforeExpand(newDisplayText);
  }, [suffixWidth, containerInfo])

  const onExpand = () => {
    setDisplayText(text);
  }

  const onPackup = () => {
    setDisplayText(displayTextBeforeExpand);
  }

  return (
    <div style={{ width: containerInfo.width, fontSize: containerInfo.fontSize, border: '1px solid orange', boxSizing: 'initial' }}>
    <div
      style={{ visibility: suffixWidth === null ? 'hidden' : 'initial' }}
    >
      {
        !!displayText && <span>{displayText}</span>
      }

      {
        !!suffix &&
        <span
          style={{
            visibility: !displayText ? 'hidden' : 'initial',
            display: displayText === text ? 'none' : 'initial',
            color: '#7395f7',
            cursor: 'pointer',
          }}
          onClick={onExpand}
        >
          {suffix}
        </span>
      }
    </div>
    </div>
  )
}

export default Paragraph;
 
```

## 官方组件 <Badge>推荐</Badge>
前往 [https://drdevelop.github.io/typography/react/index.html](https://drdevelop.github.io/typography/react/index.html)
