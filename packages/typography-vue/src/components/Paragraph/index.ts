import * as formatWithEllipsis from "@typography-org/native";

export default {
  props: ["ellipsis"],
  data() {
    const text = this.$slots.default()[0].children as string;
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
      mounted(dom, binding) {
        try {
          const vm = binding.instance;
          const ellipsis = vm.ellipsis;
          const { rows, recognizeLineBreaks } = ellipsis;
          const width = dom.offsetWidth;
          const fontSize = +getComputedStyle(dom).fontSize.replace("px", "");
          const fontFamily = getComputedStyle(dom).fontFamily;
          const suffixWidth = vm.suffixWidth;
          const text = vm.$slots.default()[0].children?.trim();
          const calc = formatWithEllipsis.default;
          const newDisplayText = calc(
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
}
