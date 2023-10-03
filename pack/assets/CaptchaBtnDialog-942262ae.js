import { _ as _export_sfc, G as GoCaptcha, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, g as createCommentVNode, b as createVNode, d as withCtx, A as normalizeClass, z as normalizeStyle, f as createStaticVNode, e as createTextVNode } from "./app-e3cb9e55.js";
const CaptchaBtnDialog_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "GoCaptchaBtnDialog",
  components: { GoCaptcha },
  props: {
    value: {
      type: String,
      default: "default",
      validator: (value) => ["default", "check", "error", "over", "success"].indexOf(value) > -1
    },
    width: String,
    height: String,
    maxDot: {
      type: Number,
      default: 5
    },
    imageBase64: String,
    thumbBase64: String
  },
  data() {
    return {
      popoverVisible: false,
      captStatus: "default"
    };
  },
  watch: {
    popoverVisible(val) {
      if (val) {
        this.captStatus = "check";
        this.$emit("refresh");
      } else if (this.captStatus === "check") {
        this.captStatus = this.value;
      }
    },
    value(val) {
      if (this.captStatus !== "check") {
        this.captStatus = val;
      }
      if (val === "over" || val === "success") {
        setTimeout(() => {
          this.popoverVisible = false;
        }, 0);
      }
    },
    captStatus(val) {
      if (val !== "check" && this.value !== val) {
        this.$emit("input", val);
      }
    }
  },
  computed: {
    style() {
      return `width:${this.width}; height:${this.height};`;
    },
    activeClass() {
      let activeClass = this.captStatus;
      return `wg-cap-active__${activeClass}`;
    }
  },
  methods: {
    handleBtnEvent() {
      setTimeout(() => {
        this.popoverVisible = true;
      }, 0);
    },
    handleRefreshEvent() {
      this.captStatus = "check";
      this.$emit("refresh");
    },
    handleConfirmEvent(data) {
      this.$emit("confirm", data);
    },
    handleCloseEvent() {
      this.popoverVisible = false;
    }
  }
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "wg-cap-state__inner" },
  [
    /* @__PURE__ */ createBaseVNode("div", { class: "wg-cap-btn__ico wg-cap-btn__verify" }, [
      /* @__PURE__ */ createBaseVNode("img", { src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSLlm77lsYJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDIwMCAyMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIwMCAyMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojM0U3Q0ZGO30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMTAwIiBjeT0iMTAwIiByPSI5Ni4zIi8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNDAuOCw2NC40bC0zOS42LTExLjloLTIuNEw1OS4yLDY0LjRjLTEuNiwwLjgtMi44LDIuNC0yLjgsNHYyNC4xYzAsMjUuMywxNS44LDQ1LjksNDIuMyw1NC42CgljMC40LDAsMC44LDAuNCwxLjIsMC40YzAuNCwwLDAuOCwwLDEuMi0wLjRjMjYuNS04LjcsNDIuMy0yOC45LDQyLjMtNTQuNlY2OC4zQzE0My41LDY2LjgsMTQyLjMsNjUuMiwxNDAuOCw2NC40eiIvPgo8L3N2Zz4K" })
    ]),
    /* @__PURE__ */ createBaseVNode("span", { class: "wg-cap-btn__text" }, "点击按键进行人机验证")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<div class="wg-cap-state__check"><!-- 验证状态 --><div class="wg-cap-state__inner"><div class="wg-cap-btn__ico"><img src="data:image/svg+xml;base64,PHN2ZyB0PSIxNjI3MDU1NTg2NTk0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEyMTEiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNMTIwLjI1OTQ1NiA1MTIuMDAxMDIzbS0xMTcuOTIzNzYgMGExMTUuMjM4IDExNS4yMzggMCAxIDAgMjM1Ljg0NzUxOSAwIDExNS4yMzggMTE1LjIzOCAwIDEgMC0yMzUuODQ3NTE5IDBaIiBwLWlkPSIxMjEyIiBmaWxsPSIjZmZhMDAwIj48L3BhdGg+PHBhdGggZD0iTTUxMS45OTk0ODggNTEyLjAwMTAyM20tMTE3LjkyMTcxMyAwYTExNS4yMzYgMTE1LjIzNiAwIDEgMCAyMzUuODQzNDI2IDAgMTE1LjIzNiAxMTUuMjM2IDAgMSAwLTIzNS44NDM0MjYgMFoiIHAtaWQ9IjEyMTMiIGZpbGw9IiNmZmEwMDAiPjwvcGF0aD48cGF0aCBkPSJNOTAzLjczOTUyMSA1MTIuMDAxMDIzbS0xMTcuOTIzNzYgMGExMTUuMjM4IDExNS4yMzggMCAxIDAgMjM1Ljg0NzUxOSAwIDExNS4yMzggMTE1LjIzOCAwIDEgMC0yMzUuODQ3NTE5IDBaIiBwLWlkPSIxMjE0IiBmaWxsPSIjZmZhMDAwIj48L3BhdGg+PC9zdmc+" alt=""></div><span class="wg-cap-btn__text">正在进行人机验证...</span></div></div>', 1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "wg-cap-state__inner" },
  [
    /* @__PURE__ */ createBaseVNode("div", { class: "wg-cap-btn__ico" }, [
      /* @__PURE__ */ createBaseVNode("img", {
        src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDAgMjAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0VENDYzMDt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xODQsMjYuNkwxMDIuNCwyLjFoLTQuOUwxNiwyNi42Yy0zLjMsMS42LTUuNyw0LjktNS43LDguMnY0OS44YzAsNTIuMiwzMi42LDk0LjcsODcuMywxMTIuNgoJYzAuOCwwLDEuNiwwLjgsMi40LDAuOHMxLjYsMCwyLjQtMC44YzU0LjctMTgsODcuMy01OS42LDg3LjMtMTEyLjZWMzQuN0MxODkuOCwzMS41LDE4Ny4zLDI4LjIsMTg0LDI2LjZ6IE0xMzQuNSwxMjMuMQoJYzMuMSwzLjEsMy4xLDguMiwwLDExLjNjLTEuNiwxLjYtMy42LDIuMy01LjcsMi4zcy00LjEtMC44LTUuNy0yLjNMMTAwLDExMS4zbC0yMy4xLDIzLjFjLTEuNiwxLjYtMy42LDIuMy01LjcsMi4zCgljLTIsMC00LjEtMC44LTUuNy0yLjNjLTMuMS0zLjEtMy4xLTguMiwwLTExLjNMODguNywxMDBMNjUuNSw3Ni45Yy0zLjEtMy4xLTMuMS04LjIsMC0xMS4zYzMuMS0zLjEsOC4yLTMuMSwxMS4zLDBMMTAwLDg4LjcKCWwyMy4xLTIzLjFjMy4xLTMuMSw4LjItMy4xLDExLjMsMGMzLjEsMy4xLDMuMSw4LjIsMCwxMS4zTDExMS4zLDEwMEwxMzQuNSwxMjMuMXoiLz4KPC9zdmc+Cg==",
        alt: "失败"
      })
    ]),
    /* @__PURE__ */ createBaseVNode("span", null, [
      /* @__PURE__ */ createTextVNode("人机验证失败 "),
      /* @__PURE__ */ createBaseVNode("em", null, "点击重试")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "wg-cap-state__inner" },
  [
    /* @__PURE__ */ createBaseVNode("div", { class: "wg-cap-btn__ico" }, [
      /* @__PURE__ */ createBaseVNode("img", {
        src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDAgMjAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0VENDYzMDt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xODQsMjYuNkwxMDIuNCwyLjFoLTQuOUwxNiwyNi42Yy0zLjMsMS42LTUuNyw0LjktNS43LDguMnY0OS44YzAsNTIuMiwzMi42LDk0LjcsODcuMywxMTIuNgoJYzAuOCwwLDEuNiwwLjgsMi40LDAuOHMxLjYsMCwyLjQtMC44YzU0LjctMTgsODcuMy01OS42LDg3LjMtMTEyLjZWMzQuN0MxODkuOCwzMS41LDE4Ny4zLDI4LjIsMTg0LDI2LjZ6IE0xMzQuNSwxMjMuMQoJYzMuMSwzLjEsMy4xLDguMiwwLDExLjNjLTEuNiwxLjYtMy42LDIuMy01LjcsMi4zcy00LjEtMC44LTUuNy0yLjNMMTAwLDExMS4zbC0yMy4xLDIzLjFjLTEuNiwxLjYtMy42LDIuMy01LjcsMi4zCgljLTIsMC00LjEtMC44LTUuNy0yLjNjLTMuMS0zLjEtMy4xLTguMiwwLTExLjNMODguNywxMDBMNjUuNSw3Ni45Yy0zLjEtMy4xLTMuMS04LjIsMC0xMS4zYzMuMS0zLjEsOC4yLTMuMSwxMS4zLDBMMTAwLDg4LjcKCWwyMy4xLTIzLjFjMy4xLTMuMSw4LjItMy4xLDExLjMsMGMzLjEsMy4xLDMuMSw4LjIsMCwxMS4zTDExMS4zLDEwMEwxMzQuNSwxMjMuMXoiLz4KPC9zdmc+Cg==",
        alt: "失败"
      })
    ]),
    /* @__PURE__ */ createBaseVNode("span", null, [
      /* @__PURE__ */ createTextVNode("点击次数过多 "),
      /* @__PURE__ */ createBaseVNode("em", null, "点击重试")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    onClick: () => false,
    class: "wg-cap-state__success"
  },
  [
    /* @__PURE__ */ createCommentVNode(" 验证成功状态 "),
    /* @__PURE__ */ createBaseVNode("div", { class: "wg-cap-state__inner" }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "wg-cap-btn__ico" }, [
        /* @__PURE__ */ createBaseVNode("img", {
          src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDAgMjAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzVFQUEyRjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xODMuMywyNy4yTDEwMi40LDIuOWgtNC45TDE2LjcsMjcuMkMxMy40LDI4LjgsMTEsMzIsMTEsMzUuM3Y0OS40YzAsNTEuOCwzMi40LDkzLjksODYuNiwxMTEuNwoJYzAuOCwwLDEuNiwwLjgsMi40LDAuOGMwLjgsMCwxLjYsMCwyLjQtMC44YzU0LjItMTcuOCw4Ni42LTU5LjEsODYuNi0xMTEuN1YzNS4zQzE4OSwzMiwxODYuNiwyOC44LDE4My4zLDI3LjJ6IE0xNDYuMSw4MS40CglsLTQ4LjUsNDguNWMtMS42LDEuNi0zLjIsMi40LTUuNywyLjRjLTIuNCwwLTQtMC44LTUuNy0yLjRMNjIsMTA1LjdjLTMuMi0zLjItMy4yLTguMSwwLTExLjNjMy4yLTMuMiw4LjEtMy4yLDExLjMsMGwxOC42LDE4LjYKCWw0Mi45LTQyLjljMy4yLTMuMiw4LjEtMy4yLDExLjMsMEMxNDkuNCw3My4zLDE0OS40LDc4LjIsMTQ2LjEsODEuNEwxNDYuMSw4MS40eiIvPgo8L3N2Zz4K",
          alt: "成功"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("span", null, "人机验证已通过")
    ])
  ],
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_go_captcha = resolveComponent("go-captcha");
  const _component_GDialog = resolveComponent("GDialog");
  return openBlock(), createElementBlock(
    "div",
    {
      class: "wg-cap-btn",
      style: normalizeStyle($options.style)
    },
    [
      createBaseVNode(
        "div",
        {
          class: normalizeClass(["wg-cap-btn__inner", $options.activeClass])
        },
        [
          createCommentVNode(" wg-cap-active__default wg-cap-active__error wg-cap-active__over wg-cap-active__success "),
          createBaseVNode("template", null, [
            createBaseVNode("div", {
              onClick: _cache[0] || (_cache[0] = (...args) => $options.handleBtnEvent && $options.handleBtnEvent(...args)),
              class: "wg-cap-state__default"
            }, [
              createCommentVNode(" 初始状态 "),
              _hoisted_1
            ]),
            _hoisted_2,
            createBaseVNode("div", {
              onClick: _cache[1] || (_cache[1] = (...args) => $options.handleBtnEvent && $options.handleBtnEvent(...args)),
              class: "wg-cap-state__error"
            }, [
              createCommentVNode(" 验证失败状态 "),
              _hoisted_3
            ]),
            createBaseVNode("div", {
              onClick: _cache[2] || (_cache[2] = (...args) => $options.handleBtnEvent && $options.handleBtnEvent(...args)),
              class: "wg-cap-state__over"
            }, [
              createCommentVNode(" 验证次数过多状态 "),
              _hoisted_4
            ]),
            _hoisted_5
          ]),
          createVNode(_component_GDialog, {
            modelValue: $data.popoverVisible,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.popoverVisible = $event),
            title: "人机校验",
            width: "360px"
          }, {
            default: withCtx(() => [
              createVNode(_component_go_captcha, {
                modelValue: $data.popoverVisible,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.popoverVisible = $event),
                width: "300px",
                height: "240px",
                "max-dot": $props.maxDot,
                "image-base64": $props.imageBase64,
                "thumb-base64": $props.thumbBase64,
                onClose: $options.handleCloseEvent,
                onRefresh: $options.handleRefreshEvent,
                onConfirm: $options.handleConfirmEvent
              }, null, 8, ["modelValue", "max-dot", "image-base64", "thumb-base64", "onClose", "onRefresh", "onConfirm"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ],
        2
        /* CLASS */
      )
    ],
    4
    /* STYLE */
  );
}
const CaptchaBtnDialog = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "CaptchaBtnDialog.vue"]]);
export {
  CaptchaBtnDialog as default
};
