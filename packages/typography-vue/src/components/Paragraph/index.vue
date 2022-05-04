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

<script lang="ts">
import formatWithEllipsis from "@typography-org/native";

export default {
  props: ["ellipsis"],
  data() {
    const text = this.$slots.default()[0].children;
    const {
      expandable,
      expandStyle,
      packupable,
      packupStyle,
      recognizeLineBreaks,
      rows,
      suffix: extraSuffix,
    } = this.ellipsis;

    const suffix = extraSuffix ? extraSuffix : expandable ? "展开" : null;

    return {
      expandable,
      expandStyle,
      packup: '收起',
      packupable,
      packupStyle,
      recognizeLineBreaks,
      rows,
      suffix,
      fullText: text?.trim(),
      displayText: null,
      displayTextBeforeExpand: null,
      suffixWidth: !!suffix ? null : 0,
    };
  },
  setup() {
    return {};
  },
  directives: {
    suffix: {
      mounted(dom, binding) {
        binding.instance.suffixWidth = dom.offsetWidth;
      },
    },
    ellipsis: {
      mounted(dom, binding, vm) {
        try {
          const vm = binding.instance;
          const ellipsis = vm.ellipsis;
          const { rows, recognizeLineBreaks } = ellipsis;
          const width = dom.offsetWidth;
          const fontSize = +getComputedStyle(dom).fontSize.replace("px", "");
          const fontFamily = +getComputedStyle(dom).fontFamily;
          const suffixWidth = vm.suffixWidth;
          const text = vm.$slots.default()[0].children?.trim();
          const calcFn = formatWithEllipsis.default || formatWithEllipsis;
          const newDisplayText = calcFn(
            text,
            {
              length: width * rows,
              lines: rows,
              fontSize,
              ellipsisWidth: suffixWidth,
              fontFamily,
            },
            {
              recognizeLineBreaks,
            }
          );
          vm.displayText = newDisplayText;
          vm.displayTextBeforeExpand = newDisplayText;
        } catch (err) {
          console.error(err);
        }
      },
    },
  },
  methods: {
    onExpand() {
      if (!this.expandable) return;
      this.displayText = this.fullText;
    },
    onPackup() {
      if (!this.packupable) return;
      this.displayText = this.displayTextBeforeExpand;
    },
  },
};
</script>
