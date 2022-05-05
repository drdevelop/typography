# @typography-org/native

## install
npm i @typography-org/native -S

## fast use

### normal example
```ts
import formatWithEllipsis from '@typography-org/native';
const width = 300;
const rows = 2;
const formatedText = formatWithEllipsis(props.children, {
  length: width * rows,
  lines: rows,
  fontSize: 14,
  fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
});
```

### recognize break lines
```ts
import formatWithEllipsis from '@typography-org/native';
const width = 300;
const rows = 2;
const formatedText = formatWithEllipsis(props.children, {
  length: width * rows,
  lines: rows,
  fontSize: 14,
  fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
}, {
  recognizeLineBreaks: true,
});
```

## Documentation
See [https://drdevelop.github.io/typography/native](https://drdevelop.github.io/typography/native)
## Community
### Vue and React Components
[@typography-org/react](https://www.npmjs.com/package/@typography-org/react)
[@typography-org/vue](https://www.npmjs.com/package/@typography-org/vue)
