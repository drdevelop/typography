---
order: 1
nav:
  title: guide
---

## Getting Started

react typography components Library.

## Features

- Easy to learn and use.
- Works for both react 16.8.0 above or below.
- Written in TypeScript with predictable static types.

## Install

```
yarn add @typography-org/react -S
```

## Usage

```tsx | pure
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
        I may be the first row of data displayed in this text box hey, I may be the second row of data displayed in this text box, I may be the third row of data displayed in this text box
      </Paragraph>
    </div>
    </>
  )
}
```
