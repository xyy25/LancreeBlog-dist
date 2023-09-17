import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, g as createCommentVNode, t as toDisplayString, z as normalizeStyle } from "./app-bb1fc18e.js";
const TypeText_vue_vue_type_style_index_0_scoped_0ca3740d_lang = "";
const _sfc_main = {
  props: {
    text: {
      type: String,
      default: "愿每个人都有属于自己的一片星空。"
    },
    author: {
      required: false,
      type: String,
      default: ""
      // "悠哉的日常"
    },
    branket: {
      required: false,
      type: Boolean,
      default: false
    },
    textStyles: {
      required: false,
      type: Object
    }
  },
  data() {
    return {
      vsbText: "",
      vsbLen: 0,
      rev: false,
      authorOpacity: 1
    };
  },
  mounted() {
    setInterval(() => {
      this.authorOpacity += Math.random() * 1.8 - 0.8;
      if (this.authorOpacity > 1) {
        this.authorOpacity = 1;
      } else if (this.authorOpacity < 0.2) {
        this.authorOpacity = 0.2;
      }
      if (Math.random() < 0.7) {
        if (!this.rev) {
          this.vsbLen++;
          this.vsbLen >= this.text.length + 3 && (this.rev = true);
        } else {
          this.vsbLen--;
          (this.vsbLen <= -3 || Math.random() < 0.05) && (this.rev = false);
        }
        this.vsbText = this.text.slice(0, Math.max(0, Math.min(this.vsbLen, this.text.length)));
      }
    }, 300);
  }
};
const _hoisted_1 = { class: "home-banner-typewriter" };
const _hoisted_2 = { class: "typewriter-container" };
const _hoisted_3 = { class: "word" };
const _hoisted_4 = {
  key: 0,
  class: "left"
};
const _hoisted_5 = { class: "typed-text" };
const _hoisted_6 = {
  key: 1,
  class: "right"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        $props.branket ? (openBlock(), createElementBlock("div", _hoisted_4, "『")) : createCommentVNode("v-if", true),
        createBaseVNode(
          "span",
          _hoisted_5,
          toDisplayString($data.vsbText),
          1
          /* TEXT */
        ),
        $props.branket ? (openBlock(), createElementBlock("div", _hoisted_6, "』")) : createCommentVNode("v-if", true)
      ]),
      $props.author ? (openBlock(), createElementBlock(
        "div",
        {
          key: 0,
          class: "author",
          style: normalizeStyle({ opacity: $data.authorOpacity })
        },
        " ——「" + toDisplayString($props.author) + "」",
        5
        /* TEXT, STYLE */
      )) : createCommentVNode("v-if", true)
    ])
  ]);
}
const TypeText = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0ca3740d"], ["__file", "TypeText.vue"]]);
export {
  TypeText as default
};
