---
map:
  path: /
---

## Getting Started

vue typography components Library.

## Features

- Easy to learn and use.
- Works for both Vue 3 and 2 ( thanks for [vue-demi](https://github.com/antfu/vue-demi) ).
- Written in TypeScript with predictable static types.

## Install

```
yarn add @typography/vue -S
```

## Usage

```vue
<template>
  <div :style="{ width: '300px', border: '1px solid red', boxSizing: 'initial' }">
    <Paragraph
      :ellipsis="{
        expandable: true,
        packupable: true,
        rows: 2,
      }"
    >
      I may be the first row of data displayed in this text box hey, I may be the second row of data displayed in this text box, I may be the third row of data displayed in this text box
    </Paragraph>
  </div>
</template>

<script lang="ts">
import Paragraph from "../index.vue";

export default {
  components: {
    Paragraph: Paragraph,
  },
};
</script>
```
For more usage, see [Component-Paragraph](https://drdevelop.github.io/typography/vue/components/paragraph/)
