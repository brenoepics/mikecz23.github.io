import { defineComponent as _, ref as m, computed as h, onMounted as f, openBlock as d, createBlock as w, Transition as v, withCtx as T, unref as k, createElementBlock as g, createCommentVNode as y, pushScopeId as b, popScopeId as x, createElementVNode as a, render as B, h as C } from "vue";
const E = (e) => (b("data-v-09295527"), e = e(), x(), e), I = /* @__PURE__ */ E(() => /* @__PURE__ */ a("svg", {
  class: "icon-top",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  stroke: "currentColor",
  "stroke-width": "0",
  "stroke-linecap": "butt",
  "stroke-linejoin": "miter"
}, [
  /* @__PURE__ */ a("path", { d: "M5.375 21.45q-.5.2-.937-.1T4 20.525v-4.45q0-.5.238-.95T4.9 14.4l1.1-.725q.175 2.025.538 3.5t1.187 3.35zM9.8 20q-.35 0-.6-.225t-.375-.55q-.675-1.725-1-3.187T7.5 12.675q0-2.8 1-5.337t2.725-4.113q.15-.15.363-.213T12 2.95t.413.063t.362.212Q14.5 4.8 15.5 7.338t1 5.337q0 1.925-.325 3.375t-1 3.175q-.125.325-.375.55t-.6.225zm2.2-7q.825 0 1.413-.587T14 11t-.587-1.412T12 9t-1.412.588T10 11t.588 1.413T12 13m6.625 8.45l-2.35-.925q.825-1.875 1.188-3.35t.537-3.5l1.1.725q.425.275.663.725t.237.95v4.45q0 .525-.437.825t-.938.1" })
], -1)), S = [
  I
], L = /* @__PURE__ */ _({
  __name: "back-to-top",
  props: {
    threshold: { default: 300 }
  },
  setup(e) {
    const t = e, o = m(0), c = h(() => o.value > t.threshold);
    f(() => {
      o.value = n(), window.addEventListener(
        "scroll",
        u(() => {
          o.value = n();
        }, 100)
      );
    });
    function n() {
      return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }
    function p() {
      window.scrollTo({ top: 0, behavior: "smooth" }), o.value = 0;
    }
    function u(r, s = 100) {
      let l;
      return (...i) => {
        clearTimeout(l), l = setTimeout(() => {
          r.apply(null, i);
        }, s);
      };
    }
    return (r, s) => (d(), w(v, { name: "fade" }, {
      default: T(() => [
        k(c) ? (d(), g("div", {
          key: 0,
          class: "go-to-top",
          onClick: p
        }, S)) : y("", !0)
      ]),
      _: 1
    }));
  }
});
const M = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [c, n] of t)
    o[c] = n;
  return o;
}, N = /* @__PURE__ */ M(L, [["__scopeId", "data-v-09295527"]]), V = (e) => {
  typeof window > "u" || window.addEventListener("load", () => {
    const t = document.createElement("div");
    document.body.appendChild(t), B(
      C(N, {
        threshold: e == null ? void 0 : e.threshold
      }),
      t
    );
  });
};
export {
  V as default
};
