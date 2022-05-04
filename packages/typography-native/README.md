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
  fontFamily: 'xxx',
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
  fontFamily: 'xxx',
}, {
  recognizeLineBreaks: true,
});
```

## Community
### Vue and React Components
[@typography-org/react](https://www.npmjs.com/package/@typography-org/react)
[@typography-org/vue](https://www.npmjs.com/package/@typography-org/vue)
