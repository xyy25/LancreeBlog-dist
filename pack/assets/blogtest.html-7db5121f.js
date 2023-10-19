import { resolveComponent, openBlock, createElementBlock, createVNode } from "vue";
import { _ as _export_sfc } from "./app-71dcac3d.js";
import "katex";
import "vue-router";
import "@vicons/carbon";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_Meting = resolveComponent("Meting");
  return openBlock(), createElementBlock("div", null, [createVNode(_component_Meting, {
    music: {
      server: "netease",
      type: "playlist",
      mid: "7735981148"
    },
    listFolded: false
  })]);
}
const blogtest_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "blogtest.html.vue"]]);
export {
  blogtest_html as default
};
