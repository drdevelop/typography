---
map:
  path: /components/paragraph
---

# Paragraph 段落

## 概述
文本省略，展开收齐等功能

## 代码演示

### 添加展开功能
<demo src="./expand.vue"
  language="vue"
  desc="设置ellipsis.expandable:true添加展开功能">
</demo>

### 添加展开收起功能
<demo src="./expand-packup.vue"
  language="vue"
  desc="设置ellipsis.expandable:true添加展开功能，设置ellipsis.packupable:true添加收起功能">
</demo>

### 展开收起按钮添加样式
<demo src="./expand-packup-style.vue"
  language="vue"
  desc="设置ellipsis.expandStyle添加展开按钮样式，设置ellipsis.packupStyle添加收起按钮样式">
</demo>

### 完全自定义展开收起按钮
<demo src="./expand-packup-customize.vue"
  language="vue"
  desc="通过设置name为suffix或者packup具名插槽自定义展开收起按钮">
</demo>

### 查看更多自定义
<demo src="./custom-view-more.vue"
  language="vue"
  desc="点击查看更多展示将全部文本展示在弹窗中">
</demo>

### 识别换行符
<demo src="./recognize-line-breaks.vue"
  language="vue"
  desc="设置ellipsis.recognizeLineBreaks:true识别换行符">
</demo>

<demo src="./recognize-line-breaks2.vue"
  language="vue"
  desc="若最后一行也是换行符，则将换行符替换为省略号，并将省略占位（例如展开按钮或者自定义的查看更多按钮）展示在紧跟省略号后">
</demo>

## 省略效果演示
### 文本未超出
<demo src="./demo-not-exceed.vue"
  language="vue"
  desc="文本未超出则不需要省略">
</demo>

### 普通省略
<demo src="./demo-normal.vue"
  language="vue"
  desc="纯中文字体超出省略">
</demo>

### 行末为长单词
<demo src="./end-will-long-words.vue"
  language="vue"
  desc="行末尾为长单词，当剩余空间排版不下时，会整词换行展示在新的一行行首">
</demo>

### 行首为标点符号
<demo src="./head-punctuation.vue"
  language="vue"
  desc="行末尾为长单词，当剩余空间排版不下时，会整词换行展示在新的一行行首">
</demo>

## API

### Props

| 参数    | 说明                      | 类型                   | 默认值 |
| ------- | ------------------------- | ---------------------- | ------ |
| ellipsis  | 省略配置[EllipsisConfig](#ellipsisconfig) | `EllipsisConfig` | `(必选)`     |

### EllipsisConfig

| 参数    | 说明                      | 类型                   | 默认值 |
| ------- | ------------------------- | ---------------------- | ------ |
| recognizeLineBreaks  | 是否识别换行符 | `boolean` | `false`    |
| rows | 当超出多少行省略 | `number`                | `(必选)` |
| expandable | 是否启用展开功能	 | `boolean`                 | `false` |
| expandStyle | 设置展开按钮样式	 | `CSSProperties`                 | `{}` |
| packupable | 是否启用收起功能	 | `boolean`                 | `false` |
| packupStyle | 设置收起按钮样式	 | `CSSProperties`                 | `{}` |

### Slot
| name    | 说明                      |
| ------- | ------------------------- |
| suffix  | 展开按钮 |
| packup  | 按钮    |