import { h as defineComponent, i as r, j as ref, k as shallowRef, l as computed, v, m as onMounted, n as h, C, p as __vitePreload } from "./app-a6a7d460.js";
const style = "";
const vuePlayground = "";
const R = (e) => JSON.parse(decodeURIComponent(e));
var S = defineComponent({ name: "VuePlayground", props: { title: { type: String, default: "" }, files: { type: String, required: true }, settings: { type: String, default: "{}" } }, setup(e) {
  const i = r(), r$1 = ref(true), a = shallowRef(), l = shallowRef(), u = shallowRef(), o = computed(() => v({}, i, R(e.settings))), s = async () => {
    const [{ ReplStore: d, Repl: p }, { default: v2 }] = await Promise.all([__vitePreload(() => import("./vue-repl-8acf977a.js"), true ? ["assets/vue-repl-8acf977a.js","assets/app-a6a7d460.js","assets/commonjs-dynamic-modules-58f2b0ec.js","assets/utils-a5e1dbae-0ece3425.js"] : void 0), __vitePreload(() => import("./codemirror-editor-d0eb20a0.js"), true ? ["assets/codemirror-editor-d0eb20a0.js","assets/app-a6a7d460.js","assets/utils-a5e1dbae-0ece3425.js"] : void 0)]);
    a.value = p, u.value = v2, l.value = new d({ serializedState: decodeURIComponent(e.files) }), o.value.vueVersion && await l.value.setVueVersion(o.value.vueVersion);
  };
  return onMounted(async () => {
    await s(), r$1.value = false;
  }), () => [h("div", { class: "vue-playground-wrapper" }, [e.title ? h("div", { class: "header" }, decodeURIComponent(e.title)) : null, h("div", { class: "repl-container" }, [r$1.value ? h(C, { class: "preview-loading", height: 192 }) : null, a.value ? h(a.value, { editor: u.value, store: l.value, autoResize: true, ...o.value, layout: "horizontal" }) : null])])];
} });
export {
  S as default
};
