<template>
  <div
    :style="{ visibility: suffixWidth === null ? 'hidden' : 'initial' }"
    v-ellipsis
  >
    <span
      v-if="!!displayText && recognizeLineBreaks"
      v-html="displayText.replace(/\n/g, '<br />').replace(/\\n/g, '<br />')"
    ></span>
    <span v-else-if="!!displayText && !recognizeLineBreaks">
      {{displayText}}
    </span>

    <span
      v-if="!!suffix"
      v-suffix
      :style="{
        visibility: !displayText ? 'hidden' : 'initial',
        display: displayText === fullText ? 'none' : 'initial',
        color: '#7395f7',
        cursor: 'pointer',
        ...expandStyle,
      }"
      @click="onExpand"
    >
      <template v-if="!$slots.suffix">{{ suffix }}</template>
      <slot name="suffix"></slot>
    </span>

    <div
      v-if="packupable && displayTextBeforeExpand"
      :style="{
        display: displayText === displayTextBeforeExpand ? 'none' : 'block',
        color: '#7395f7',
        cursor: 'pointer',
        textAlign: 'right',
        ...packupStyle,
      }"
      @click="onPackup"
    >
      <template v-if="!$slots.packup">{{ packup }}</template>
      <slot name="packup"></slot>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts">

</script>
