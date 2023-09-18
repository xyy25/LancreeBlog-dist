var _a, _b, _c, _d, _e, _f, _g;
import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, z as normalizeStyle } from "./app-6a862fe2.js";
const __vite_glob_0_0 = '<svg width="252.000000pt" height="250.000000pt" viewBox="0 0 252.000000 250.000000" xmlns="http://www.w3.org/2000/svg">\r\n  <g transform="translate(0.000000,250.000000) scale(0.100000,-0.100000)" fill="#df4c62" stroke="none">\r\n    <path d="M466 2208 c-40 -69 -57 -127 -63 -215 l-6 -83 17 -43 c9 -24 35 -63\r\n59 -86 l42 -43 -70 8 c-83 10 -329 9 -346 -2 l-12 -7 7 -89 c8 -114 39 -268\r\n77 -382 36 -109 116 -266 177 -349 61 -83 134 -159 207 -216 69 -54 261 -170\r\n384 -231 193 -96 419 -170 636 -206 l100 -17 185 -1 185 -1 80 13 c86 14 257\r\n57 282 70 l15 9 -59 28 -58 29 -61 60 c-98 99 -178 230 -222 366 -12 36 -33\r\n117 -47 180 -30 134 -66 263 -76 270 -3 3 -19 37 -34 75 -75 189 -152 310\r\n-268 422 l-83 80 -73 43 c-124 72 -274 119 -431 135 -116 11 -230 35 -315 66\r\nl-83 30 -42 36 c-23 20 -51 50 -60 66 l-18 29 -26 -44z" />\r\n  </g>\r\n</svg>';
const __vite_glob_0_1 = '<svg width="252.000000pt" height="250.000000pt" viewBox="0 0 252.000000 250.000000" xmlns="http://www.w3.org/2000/svg">\r\n  <g transform="translate(0.000000,250.000000) scale(0.100000,-0.100000)" fill="#df4c62" stroke="none">\r\n    <path d="M1013 1829 c-91 -14 -225 -64 -304 -115 -38 -24 -73 -44 -77 -44 -5\r\n0 -67 -55 -139 -123 l-130 -123 -69 -34 -68 -35 -63 0 -63 0 6 -20 c14 -45 57\r\n-118 91 -156 20 -22 56 -51 80 -65 l43 -26 65 4 c36 1 65 1 65 -2 0 -3 -27\r\n-32 -61 -65 -62 -61 -159 -189 -159 -210 0 -6 35 -34 77 -62 144 -94 259 -143\r\n423 -180 l115 -26 115 0 c63 0 144 6 180 12 192 36 498 171 678 299 39 29 76\r\n52 80 52 14 0 186 156 238 216 114 132 212 290 263 424 12 30 21 55 21 56 0 1\r\n-21 -9 -47 -22 -145 -71 -403 -45 -613 61 -138 70 -282 124 -401 154 -139 33\r\n-254 43 -346 30z" />\r\n  </g>\r\n</svg>';
const assets = /* @__PURE__ */ Object.assign({ "../public/images/flower1.svg": __vite_glob_0_0, "../public/images/flower2.svg": __vite_glob_0_1 });
console.log(assets);
const SVGs = {};
for (const [path, inlineSvg] of Object.entries(assets)) {
  const viewBox = (_a = inlineSvg.match(/^<svg.+?viewBox="(.+?)".*>/)) == null ? void 0 : _a[1];
  const width = (_b = inlineSvg.match(/^<svg.+?width="(.+?)".*>/)) == null ? void 0 : _b[1];
  const height = (_c = inlineSvg.match(/^<svg.+?height="(.+?)".*>/)) == null ? void 0 : _c[1];
  const transform = (_d = inlineSvg.match(/transfrom="(.+?)"/)) == null ? void 0 : _d[1];
  const fill = (_e = inlineSvg.match(/fill="(.+?)"/)) == null ? void 0 : _e[1];
  const d = (_f = inlineSvg.match(/<path.+?d="(.+?)".*>/)) == null ? void 0 : _f[1];
  const name = (_g = path.match(/^.*\/(.+?)\.svg$/)) == null ? void 0 : _g[1];
  SVGs[name] = { viewBox, width, height, transform, fill, d };
}
const _sfc_main = {
  name: "SVGImage",
  props: {
    name: {
      required: true,
      type: String
    },
    rotate: {
      type: Number,
      default: null
    }
  },
  computed: {
    svg() {
      return SVGs[this.name];
    },
    style() {
      const style = {};
      if (this.rotate !== null) {
        style["rotate"] = `${this.rotate}deg`;
      }
      return style;
    }
  },
  methods: {
    getSVG() {
      return this.$refs.svg;
    }
  }
};
const _hoisted_1 = ["viewBox"];
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "use",
  { "xlink:href": "#svg-${type}" },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3 = ["transform", "fill"];
const _hoisted_4 = ["d"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    ref: "svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    width: "100%",
    height: "100%",
    version: "1.1",
    viewBox: $options.svg.viewBox,
    style: normalizeStyle($options.style)
  }, [
    _hoisted_2,
    createBaseVNode("g", {
      transform: $options.svg.transform,
      fill: $options.svg.fill
    }, [
      createBaseVNode("path", {
        class: "aplayer-fill",
        d: $options.svg.d
      }, null, 8, _hoisted_4)
    ], 8, _hoisted_3)
  ], 12, _hoisted_1);
}
const SVGImage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "SVGImage.vue"]]);
export {
  SVGImage as default
};
