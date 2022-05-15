---
map:
  path: /
---

## 介绍

Typography组件 的 vue 实现。

## 特点

- 易于使用.
- 同时适用于 Vue3 和 Vue2。( 感谢[vue-demi](https://github.com/antfu/vue-demi) ).
- 由 TS 编写，完整的类型推导.

## 安装

```
yarn add @typography/vue -S
```

## 使用

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
      我可能是展示在这个文本框中的第一行数据嘿，我可能是展示在这个文本框中的第二行数据，我可能是展示在这个文本框中的第三行数据
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
更多用法, 详见 [Component-Paragraph](https://drdevelop.github.io/typography/vue/zh/components/paragraph/index.html)
