var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { resolveDirective, withDirectives, openBlock, createElementBlock, normalizeStyle, toDisplayString, createCommentVNode, Fragment, createTextVNode, renderSlot } from "vue";
var dist = { exports: {} };
(() => {
  var e = { d: (t2, n2) => {
    for (var l2 in n2)
      e.o(n2, l2) && !e.o(t2, l2) && Object.defineProperty(t2, l2, { enumerable: true, get: n2[l2] });
  }, o: (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), r: (e2) => {
    typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
  } }, t = {};
  let n;
  e.r(t), e.d(t, { default: () => f });
  let l = false;
  function i(e2) {
    return /^\p{Sc}+|^\p{P}+/u.test(e2);
  }
  function o() {
    if (n)
      return;
    const e2 = document.createElement("canvas");
    var t2;
    t2 = e2, (l || t2.getContext && (l = true, 1)) && (n = e2.getContext("2d"));
  }
  const r = [12289, 65307, 12300, 12301, 12302, 8216, 8217, 8220, 8221, 65288, 65289, 12308, 12309, 12304, 12305, 8211, 65294];
  function c(e2, t2) {
    return e2 >= 0 && e2 <= 255 || function(e3) {
      return r.includes(e3);
    }(e2) ? t2 / 2 : t2;
  }
  function s(e2, t2, i2) {
    if (o(), l)
      return i2 = i2 || '"PingFangSC", "Helvetica Neue", Helvetica, "Hiragino Sans GB", sans-serif', n.font = `${t2}px ${i2}`, +n.measureText(e2).width.toFixed(1);
    let r2, s2 = 0;
    for (let n2 = 0; n2 < e2.length; n2++) {
      const l2 = e2.charCodeAt(n2);
      r2 === " " && e2[n2] === " " || l2 !== 10 && (s2 += c(l2, t2), r2 = e2[n2]);
    }
    return s2;
  }
  function a(e2, t2) {
    let n2 = -1, l2 = 0, i2 = e2;
    for (; l2 < e2.length; ) {
      let o2 = i2.indexOf(t2);
      o2 >= 0 ? (n2 === -1 && (n2 = 0), n2 = n2 + o2 + t2.length, i2 = i2.slice(o2 + t2.length)) : l2 = e2.length;
    }
    return n2 !== -1 && (n2 -= t2.length), n2;
  }
  function f(e2, t2, n2 = {}) {
    const { recognizeLineBreaks: l2 } = n2, { fontSize: o2, ellipsisWidth: r2 = 0 } = t2, c2 = r2 + o2, f2 = function(e3, t3, n3) {
      var _a, _b, _c, _d, _e;
      const { fontSize: l3, lines: o3, length: r3, ellipsisWidth: c3, fontFamily: f3 } = t3, u2 = r3 / o3;
      let g = "", h = e3, d = 0, p = -1;
      const m = {};
      let b = u2 * o3, y = 0, S = false;
      for (; h !== ""; ) {
        const e4 = d % u2, t4 = i(h[0]), o4 = (_a = h.match(/^[a-zA-Z]+/)) == null ? void 0 : _a[0], r4 = (_b = h.match(/^-?[0-9]+/)) == null ? void 0 : _b[0], v = (_c = h.match(/^\\n/)) == null ? void 0 : _c[0], x = v || o4 || r4 || h[0];
        g += x, p += x.length;
        const z = s(x, l3, f3);
        if (e4 > u2 / 2 && (m[x] = z), n3 && v) {
          y = u2 - e4, d += y, d === b && (S = true), h = h.replace(/^\\n/, "");
          continue;
        }
        e4 + z > u2 ? (y = u2 - e4, d = d + y + z) : d += z;
        const O = e4 + z > u2, P = g.slice(p - x.length, p - x.length + 1) === "\u201C" || g.slice(p - x.length, p - x.length + 1) === '"';
        if (O && (t4 || P && r4) && d >= u2 && !/\\n$/.test(g)) {
          let e5 = g, t5 = g.length - 1 - x.length;
          for (e5 = e5.slice(0, -x.length); ; ) {
            if (t5 <= 0) {
              t5 = e5.length - 1;
              break;
            }
            if (i(e5[t5])) {
              t5--;
              continue;
            }
            const n5 = ((_d = e5.match(/[a-zA-z]+$/)) == null ? void 0 : _d[0]) || ((_e = e5.match(/-?[0-9]+$/)) == null ? void 0 : _e[0]);
            if ((n5 == null ? void 0 : n5.length) > 0) {
              t5 -= n5.length - 1;
              break;
            }
            break;
          }
          const n4 = e5.slice(t5);
          d += m[n4] || s(n4, l3, f3);
        }
        if (h = h.slice(x.length), d >= b) {
          const e5 = a(g, "\\n");
          for (S && e5 >= 0 && (p = e5 - 1, d = b), b -= c3, d -= y; d > b; )
            d -= m[g[p]] || s(g[p], l3, f3), p--;
          break;
        }
      }
      return p;
    }(e2, __spreadProps(__spreadValues({}, t2), { ellipsisWidth: c2 }), l2);
    let u = e2.slice(0, f2 + 1);
    return u !== e2 && (u += "..."), u;
  }
  dist.exports = t;
})();
var formatWithEllipsis = dist.exports;
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
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
      suffix: extraSuffix
    } = this.ellipsis;
    const suffix = extraSuffix ? extraSuffix : expandable ? "\u5C55\u5F00" : null;
    return {
      expandable,
      expandStyle,
      packup: "\u6536\u8D77",
      packupable,
      packupStyle,
      recognizeLineBreaks,
      rows,
      suffix,
      fullText: text == null ? void 0 : text.trim(),
      displayText: null,
      displayTextBeforeExpand: null,
      suffixWidth: !!suffix ? null : 0
    };
  },
  setup() {
    return {};
  },
  directives: {
    suffix: {
      mounted(dom, binding) {
        binding.instance.suffixWidth = dom.offsetWidth;
      }
    },
    ellipsis: {
      mounted(dom, binding, vm) {
        var _a;
        try {
          const vm2 = binding.instance;
          const ellipsis = vm2.ellipsis;
          const { rows, recognizeLineBreaks } = ellipsis;
          const width = dom.offsetWidth;
          const fontSize = +getComputedStyle(dom).fontSize.replace("px", "");
          const fontFamily = +getComputedStyle(dom).fontFamily;
          const suffixWidth = vm2.suffixWidth;
          const text = (_a = vm2.$slots.default()[0].children) == null ? void 0 : _a.trim();
          const calcFn = formatWithEllipsis.default || formatWithEllipsis;
          const newDisplayText = calcFn(text, {
            length: width * rows,
            lines: rows,
            fontSize,
            ellipsisWidth: suffixWidth,
            fontFamily
          }, {
            recognizeLineBreaks
          });
          vm2.displayText = newDisplayText;
          vm2.displayTextBeforeExpand = newDisplayText;
        } catch (err) {
          console.error(err);
        }
      }
    }
  },
  methods: {
    onExpand() {
      if (!this.expandable)
        return;
      this.displayText = this.fullText;
    },
    onPackup() {
      if (!this.packupable)
        return;
      this.displayText = this.displayTextBeforeExpand;
    }
  }
};
const _hoisted_1 = ["innerHTML"];
const _hoisted_2 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_suffix = resolveDirective("suffix");
  const _directive_ellipsis = resolveDirective("ellipsis");
  return withDirectives((openBlock(), createElementBlock("div", {
    style: normalizeStyle({ visibility: $data.suffixWidth === null ? "hidden" : "initial" })
  }, [
    !!$data.displayText && $data.recognizeLineBreaks ? (openBlock(), createElementBlock("span", {
      key: 0,
      innerHTML: $data.displayText.replace(/\n/g, "<br />").replace(/\\n/g, "<br />")
    }, null, 8, _hoisted_1)) : !!$data.displayText && !$data.recognizeLineBreaks ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString($data.displayText), 1)) : createCommentVNode("", true),
    !!$data.suffix ? withDirectives((openBlock(), createElementBlock("span", {
      key: 2,
      style: normalizeStyle(__spreadValues({
        visibility: !$data.displayText ? "hidden" : "initial",
        display: $data.displayText === $data.fullText ? "none" : "initial",
        color: "#7395f7",
        cursor: "pointer"
      }, $data.expandStyle)),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onExpand && $options.onExpand(...args))
    }, [
      !_ctx.$slots.suffix ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createTextVNode(toDisplayString($data.suffix), 1)
      ], 64)) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "suffix")
    ], 4)), [
      [_directive_suffix]
    ]) : createCommentVNode("", true),
    $data.packupable && $data.displayTextBeforeExpand ? (openBlock(), createElementBlock("div", {
      key: 3,
      style: normalizeStyle(__spreadValues({
        display: $data.displayText === $data.displayTextBeforeExpand ? "none" : "block",
        color: "#7395f7",
        cursor: "pointer",
        textAlign: "right"
      }, $data.packupStyle)),
      onClick: _cache[1] || (_cache[1] = (...args) => $options.onPackup && $options.onPackup(...args))
    }, [
      !_ctx.$slots.packup ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createTextVNode(toDisplayString($data.packup), 1)
      ], 64)) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "packup")
    ], 4)) : createCommentVNode("", true)
  ], 4)), [
    [_directive_ellipsis]
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as Paragraph, index as default };
