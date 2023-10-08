import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, d as withCtx, e as createTextVNode } from "./app-ba3a1878.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "hello-world",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#hello-world",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Hello world. "),
    /* @__PURE__ */ createBaseVNode("span", { class: "blinker" })
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "rp",
  null,
  "(",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "rt",
  null,
  "nǐhǎo",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "rp",
  null,
  ")",
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "rp",
  null,
  "(",
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "rt",
  null,
  "shìjiè",
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "rp",
  null,
  ")",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_rb = resolveComponent("rb");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("ruby", null, [
        createVNode(_component_rb, null, {
          default: withCtx(() => [
            createTextVNode("你好")
          ]),
          _: 1
          /* STABLE */
        }),
        _hoisted_2,
        _hoisted_3,
        _hoisted_4
      ]),
      createTextVNode(),
      createBaseVNode("ruby", null, [
        createVNode(_component_rb, null, {
          default: withCtx(() => [
            createTextVNode("世界")
          ]),
          _: 1
          /* STABLE */
        }),
        _hoisted_5,
        _hoisted_6,
        _hoisted_7
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
