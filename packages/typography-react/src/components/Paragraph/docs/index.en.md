---
order: 1
nav:
  title: 'components'
  path: /components
---

# Paragraph

## Description
text ellipsis, expand and packup...

## Examples

### add the ability of expand
```tsx
/**
 * desc: use`ellipsis.expandable:true`to turn on expand
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
        I may be the first row of data displayed in this text box hey, I may be the second row of data displayed in this text box, I may be the third row of data displayed in this text box
      </Paragraph>
    </div>
    </>
  )
}
```

### add the ability of expand and collapse
```tsx
/**
 * desc: use`ellipsis.expandable:true` to add the ability of expand，use`ellipsis.packupable:true` to add the ability of collapse
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
        I may be the first row of data displayed in this text box hey, I may be the second row of data displayed in this text box, I may be the third row of data displayed in this text box
      </Paragraph>
    </div>
    </>
  )
}
```

### add style for expand collapse button
```tsx
/**
 * desc: use`ellipsis.expandStyle` to add style of expand btn，use`ellipsis.packupStyle` to add style of collase btn
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
        I may be the first row of data displayed in this text box hey, I may be the second row of data displayed in this text box, I may be the third row of data displayed in this text box
      </Paragraph>
    </div>
    </>
  )
}
```

### customize expand collapse button
```tsx
/**
 * desc: Expand and collapse copy by setting `suffix` or `packup`, they can be strings or react dom nodes
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
        I may be the first row of data displayed in this text box hey, I may be the second row of data displayed in this text box, I may be the third row of data displayed in this text box
      </Paragraph>
    </div>
    </>
  )
}
```

### customize view more btn
```tsx
/**
 * desc:  Click to view more display to display all the text in the pop-up window
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
          suffix: <span style={{ color: '#7395f7' }}><span onClick={onVisibleChange.bind(null, true)}>view more</span></span>
        }}
      >
        I may be the first row of data displayed in this text box hey, I may be the second row of data displayed in this text box, I may be the third row of data displayed in this text box
      </Paragraph>
    </div>
    <Drawer
      title="view more"
      placement="bottom"
      visible={visible}
      onClose={onVisibleChange.bind(null, false)}
    >
       I may be the first row of data displayed in this text box hey, I may be the second row of data displayed in this text box, I may be the third row of data displayed in this text box
    </Drawer>
    </>
  )
}
```

### add padding for view more btn
```tsx
/**
 * desc: Add left padding effect by adding `paddingLeft` to view more inline tags
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
          suffix: <span style={{ color: '#7395f7', paddingLeft: 12 }}><span>view more</span></span>
        }}
      >
         I may be the first row of data displayed in this text box hey, I may be the second row of data displayed in this text box, I may be the third row of data displayed in this text box
      </Paragraph>
    </div>
  )
}
```


### Identify newlines

```tsx
/**
 * desc: use `ellipsis.recognizeLineBreaks:true` to recognize line break char
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
        next is break line char\n I may be the second row of data displayed in this text box, I may be the third row of data displayed in this text box
      </Paragraph>
    </div>
    </>
  )
}
```

```tsx
/**
 * desc: If the last line is also a newline, replace the newline with an ellipsis, and display the ellipsis placeholder (such as an expand button or a custom view more button) immediately after the ellipsis
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
        next is break line char\n next is break line char\n the data of first line
      </Paragraph>
    </div>
    </>
  )
}
```

## omit effect show

### text not exceed
```tsx
/**
 * desc: if the text does not exceed, it is not omitted
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
          suffix: <span style={{ color: '#7395f7' }}><span>view more</span></span>
        }}
      >
        I may be the first row of data displayed in this text box hey, I may be the second row of data.
      </Paragraph>
    </div>
  )
}
```

### Normal ellipsis
```tsx
/**
 * desc: pure english font beyond ellipsis
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
          suffix: <span style={{ color: '#7395f7' }}><span>view more</span></span>
        }}
      >
        I may be the first row of data displayed in this text box hey, I may be the second row of data displayed in this text box, I may be the third row of data displayed in this text box
      </Paragraph>
    </div>
  )
}
```

### end of line will be long word
```tsx
/**
 * desc: The end of the line is a long word. When the remaining space does not fit, the whole word will be displayed at the beginning of a new line.
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
          suffix: <span style={{ color: '#7395f7' }}><span>view more</span></span>
        }}
      >
        I may be the first row of data displayed namespace, I may be the second row of data displayed in this text box, I may be the third row of data displayed in this text box
      </Paragraph>
    </div>
  )
}
```

### start of line will be punctuation
```tsx
/**
 * desc: When the beginning of a line is a punctuation mark, it can also accurately calculate the number of words dropped in the previous line
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
          suffix: <span style={{ color: '#7395f7' }}><span>view more</span></span>
        }}
      >
        I may be the first row of data display in this a b, I may be the second row of data displayed in this text box, I may be the third row of data displayed in this text box
      </Paragraph>
    </div>
  )
}
```

## API

<API
  src="./index.en.tsx"
  exports='["ParagraphProps", "EllipsisConfig"]'
/>
