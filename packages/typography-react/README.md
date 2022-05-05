# @typography-org/react

## install
npm i @typography-org/react -S

## fast use

```tsx
import React from 'react';
import { Paragraph } from '@typography-org/react';
export default () => {
  return (
    <div style={{ width: 300, fontSize: 14, border: '1px solid orange', boxSizing: 'initial'}}>
      <Paragraph
        ellipsis={{
          expandable: true,
          packupable: true,
          rows: 2,
        }}
      >
        I may be the first row of data displayed in this text box hey, I may be the second row of data displayed in this text box, I may be the third row of data displayed in this text box
      </Paragraph>
    </div>
  )
}
```

## Documentation
See [https://drdevelop.github.io/typography/react/index.html](https://drdevelop.github.io/typography/react/index.html)

## Community
### Vue Components
[@typography-org/vue](https://www.npmjs.com/package/@typography-org/vue)

### Native
[@typography-org/native](https://www.npmjs.com/package/@typography-org/native)
