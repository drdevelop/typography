---
map:
  path: /components/paragraph
---

# Paragraph

## Description
text ellipsis, expand and packup...

## Examples

### add the ability of expand
<demo src="./expand.en.vue"
  language="vue"
  desc="use`ellipsis.expandable:true`to turn on expand">
</demo>

### add the ability of expand and collapse
<demo src="./expand-packup.en.vue"
  language="vue"
  desc="use`ellipsis.expandable:true` to add the ability of expand，useellipsis.packupable:true to add the ability of collapse">
</demo>

### add style for expand collapse button
<demo src="./expand-packup-style.en.vue"
  language="vue"
  desc="use`ellipsis.expandStyle` to add style of expand btn，use`ellipsis.packupStyle` to add style of collase btn">
</demo>

### customize expand collapse button
<demo src="./expand-packup-customize.en.vue"
  language="vue"
  desc="Expand and collapse copy by setting suffix or packup, they can be strings or react dom nodes">
</demo>

### customize view more btn
<demo src="./custom-view-more.en.vue"
  language="vue"
  desc="Click to view more display to display all the text in the pop-up window">
</demo>

### Identify newlines
<demo src="./recognize-line-breaks.en.vue"
  language="vue"
  desc="use `ellipsis.recognizeLineBreaks:true` to recognize line break char">
</demo>

<demo src="./recognize-line-breaks2.en.vue"
  language="vue"
  desc="If the last line is also a newline, replace the newline with an ellipsis, and display the ellipsis placeholder (such as an expand button or a custom view more button) immediately after the ellipsis">
</demo>

## omit effect show
### text not exceed
<demo src="./demo-not-exceed.en.vue"
  language="vue"
  desc="if the text does not exceed, it is not omitted">
</demo>

### Normal ellipsis
<demo src="./demo-normal.en.vue"
  language="vue"
  desc="pure english font beyond ellipsis">
</demo>

### end of line will be long word
<demo src="./end-will-long-words.en.vue"
  language="vue"
  desc="The end of the line is a long word. When the remaining space does not fit, the whole word will be displayed at the beginning of a new line.">
</demo>

### start of line will be punctuation
<demo src="./head-punctuation.en.vue"
  language="vue"
  desc="When the beginning of a line is a punctuation mark, it can also accurately calculate the number of words dropped in the previous line">
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
