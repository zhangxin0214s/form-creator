import { resolveComponent, openBlock, createElementBlock, renderSlot, createVNode, withModifiers, createCommentVNode, createBlock, withCtx, mergeProps, createElementVNode, resolveDynamicComponent, createTextVNode, watch, normalizeClass, toDisplayString, getCurrentScope, onScopeDispose, ref, unref, warn, getCurrentInstance, provide, computed, inject, defineComponent, Transition, withDirectives, vShow, shallowReactive, onMounted, normalizeStyle, Fragment, isVNode, render, renderList, isRef, onBeforeMount, pushScopeId, popScopeId, onBeforeUnmount, h as h$1 } from "vue";
var containerMask_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => '@charset "UTF-8";.primary-color[data-v-28db24c4]{color:#409eff}.background-opacity[data-v-28db24c4]{background:rgba(64,158,255,.6)}.stage-form .ghost[data-v-28db24c4]{width:100%;content:"";font-size:0;height:3px;box-sizing:border-box;background:#409EFF;border:2px solid #409EFF;outline-width:0;padding:0;overflow:hidden}.el-form-item .el-rate[data-v-28db24c4]{margin-top:8px}.el-form-item--medium .el-radio[data-v-28db24c4]{line-height:36px!important}.el-form-item--medium .el-rate[data-v-28db24c4]{margin-top:8px}.el-form-item--small .el-radio[data-v-28db24c4]{line-height:32px!important}.el-form-item--small .el-rate[data-v-28db24c4]{margin-top:6px}.el-form-item--mini .el-radio[data-v-28db24c4]{line-height:28px!important}.el-form-item--mini .el-rate[data-v-28db24c4]{margin-top:4px}.el-card[data-v-28db24c4]{margin-top:3px;margin-bottom:3px}input[type=password][data-v-28db24c4]::-ms-reveal{display:none}.auto-full-width.el-date-editor.el-input[data-v-28db24c4],.auto-full-width.el-date-editor.el-input__inner[data-v-28db24c4]{width:100%!important}[data-v-28db24c4]::-webkit-scrollbar{width:8px;height:8px}[data-v-28db24c4]::-webkit-scrollbar-track{width:8px;background:rgba(16,31,28,.1);-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em}[data-v-28db24c4]::-webkit-scrollbar-thumb{background-color:#101f1c59;background-clip:padding-box;min-height:28px;-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em}[data-v-28db24c4]::-webkit-scrollbar-thumb:hover{background-color:#101f1cd9}*[data-v-28db24c4]{scrollbar-color:#e5e5e5 #f7f7f9;scrollbar-width:thin}.container-mask[data-v-28db24c4]{position:relative;margin-bottom:2px}.container-mask-title[data-v-28db24c4]{position:absolute;top:-2px;left:-2px;height:22px;line-height:22px;background:#409EFF;z-index:9}.container-mask-title .text[data-v-28db24c4]{font-size:14px;font-style:normal;color:#fff;margin:4px;cursor:move}.container-mask-action[data-v-28db24c4]{position:absolute;bottom:0;right:-2px;height:23px;line-height:28px;background:#409EFF;z-index:999}.copyIcon[data-v-28db24c4]:hover,.deleteIcon[data-v-28db24c4]:hover{cursor:pointer}\n')();
var _export_sfc$1 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$d = { class: "container-mask" };
const _hoisted_2$4 = {
  key: 0,
  class: "container-mask-action"
};
const _sfc_main$r = {
  __name: "containerMask",
  props: [
    "widget",
    "ruleForm",
    "parentWidget",
    "parent",
    "selectedWidget",
    "isEditor"
  ],
  emits: ["copyWidget", "removeWidget"],
  setup(__props, { emit }) {
    const props = __props;
    const copy = () => {
      emit("copyWidget", props.widget);
    };
    const delete1 = () => {
      var _a2;
      emit("removeWidget", props.widget, props.parentWidget);
      props.widget.ruleFormKey && delete props.ruleForm[props.widget.ruleFormKey];
      if (((_a2 = props.parent) == null ? void 0 : _a2.ruleFormKeyType) === "array") {
        props.ruleForm.forEach((rule, index2) => {
          if (Object.keys(rule).indexOf(props.widget.ruleFormKey) > -1) {
            props.ruleForm.splice(index2, 1);
          }
        });
      } else {
        props.widget.ruleFormKey && delete props.ruleForm[props.widget.ruleFormKey];
      }
    };
    return (_ctx, _cache) => {
      var _a2, _b;
      const _component_svg_icon = resolveComponent("svg-icon");
      return openBlock(), createElementBlock("div", _hoisted_1$d, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true),
        ((_a2 = __props.selectedWidget) == null ? void 0 : _a2.id) === ((_b = __props.widget) == null ? void 0 : _b.id) && __props.isEditor ? (openBlock(), createElementBlock("div", _hoisted_2$4, [
          createVNode(_component_svg_icon, {
            "icon-class": "copy",
            class: "copyIcon",
            onClick: withModifiers(copy, ["stop"])
          }, null, 8, ["onClick"]),
          createVNode(_component_svg_icon, {
            "icon-class": "delete",
            class: "deleteIcon",
            onClick: withModifiers(delete1, ["stop"])
          }, null, 8, ["onClick"])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
};
var containerMask = /* @__PURE__ */ _export_sfc$1(_sfc_main$r, [["__scopeId", "data-v-28db24c4"]]);
var content_vue_vue_type_style_index_0_scoped_true_lang$1 = /* @__PURE__ */ (() => '@charset "UTF-8";.primary-color[data-v-720e2004]{color:#409eff}.background-opacity[data-v-720e2004]{background:rgba(64,158,255,.6)}.stage-form .ghost[data-v-720e2004]{width:100%;content:"";font-size:0;height:3px;box-sizing:border-box;background:#409EFF;border:2px solid #409EFF;outline-width:0;padding:0;overflow:hidden}.el-form-item .el-rate[data-v-720e2004]{margin-top:8px}.el-form-item--medium .el-radio[data-v-720e2004]{line-height:36px!important}.el-form-item--medium .el-rate[data-v-720e2004]{margin-top:8px}.el-form-item--small .el-radio[data-v-720e2004]{line-height:32px!important}.el-form-item--small .el-rate[data-v-720e2004]{margin-top:6px}.el-form-item--mini .el-radio[data-v-720e2004]{line-height:28px!important}.el-form-item--mini .el-rate[data-v-720e2004]{margin-top:4px}.el-card[data-v-720e2004]{margin-top:3px;margin-bottom:3px}input[type=password][data-v-720e2004]::-ms-reveal{display:none}.auto-full-width.el-date-editor.el-input[data-v-720e2004],.auto-full-width.el-date-editor.el-input__inner[data-v-720e2004]{width:100%!important}[data-v-720e2004]::-webkit-scrollbar{width:8px;height:8px}[data-v-720e2004]::-webkit-scrollbar-track{width:8px;background:rgba(16,31,28,.1);-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em}[data-v-720e2004]::-webkit-scrollbar-thumb{background-color:#101f1c59;background-clip:padding-box;min-height:28px;-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em}[data-v-720e2004]::-webkit-scrollbar-thumb:hover{background-color:#101f1cd9}*[data-v-720e2004]{scrollbar-color:#e5e5e5 #f7f7f9;scrollbar-width:thin}.grid-content1[data-v-720e2004]{min-height:34px}\n')();
const _hoisted_1$c = /* @__PURE__ */ createTextVNode(" > ");
const _sfc_main$q = {
  __name: "content",
  props: [
    "widgetList",
    "widget",
    "propKey",
    "ruleForm",
    "selectedWidget",
    "isEditor"
  ],
  emits: ["selected", "copyWidget", "removeWidget", "onEnd"],
  setup(__props, { emit }) {
    const props = __props;
    const onEnd = () => {
      emit("onEnd");
    };
    const selected = (element) => {
      emit("selected", element);
    };
    const copyWidget = (element) => {
      emit("copyWidget", element);
    };
    const removeWidget = (widget, parentWidget) => {
      emit("removeWidget", widget, parentWidget);
    };
    const submitForm = async () => {
      if (!props.ruleFormRef)
        return;
      await props.ruleFormRef.validate((valid, fields) => {
        console.log(valid, "===valid===");
        if (valid) {
          console.log("submit!");
        } else {
          console.log("error submit!", fields);
        }
      });
    };
    const getPropKey = (element, index2) => {
      if (props.propKey) {
        if (props.widget.ruleFormKeyType === "object") {
          return `${props.propKey}.${element.ruleFormKey}`;
        }
      } else {
        return `${element.ruleFormKey}`;
      }
    };
    return (_ctx, _cache) => {
      const _component_draggable = resolveComponent("draggable");
      const _component_el_col = resolveComponent("el-col");
      return openBlock(), createBlock(_component_el_col, { class: "grid-content1 ep-bg-purple" }, {
        default: withCtx(() => [
          createVNode(_component_draggable, mergeProps({
            list: __props.widgetList,
            "item-key": "id"
          }, { group: "dragGroup", ghostClass: "ghost", animation: 300 }, {
            tag: "transition-group",
            "component-data": { name: "fade" },
            onAdd: onEnd
          }), {
            item: withCtx(({ element, index: index2 }) => [
              createElementVNode("div", {
                class: "transition-group-el",
                onClick: _cache[0] || (_cache[0] = ($event) => selected(__props.widget))
              }, [
                (openBlock(), createBlock(resolveDynamicComponent(element.type), {
                  key: element.id,
                  widget: element,
                  "parent-widget": __props.widgetList,
                  parent: __props.widget,
                  "rule-form": __props.ruleForm,
                  "prop-key": getPropKey(element),
                  "selected-widget": __props.selectedWidget,
                  "is-editor": __props.isEditor,
                  onCopyWidget: ($event) => copyWidget(element),
                  onRemoveWidget: ($event) => removeWidget(element, __props.widgetList),
                  onClick: withModifiers(($event) => selected(element), ["stop"]),
                  onSubmitForm: submitForm
                }, {
                  default: withCtx(() => [
                    _hoisted_1$c
                  ]),
                  _: 2
                }, 1064, ["widget", "parent-widget", "parent", "rule-form", "prop-key", "selected-widget", "is-editor", "onCopyWidget", "onRemoveWidget", "onClick"]))
              ])
            ]),
            _: 1
          }, 16, ["list"])
        ]),
        _: 1
      });
    };
  }
};
var cardContent = /* @__PURE__ */ _export_sfc$1(_sfc_main$q, [["__scopeId", "data-v-720e2004"]]);
var card_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => '@charset "UTF-8";.primary-color[data-v-f99d0e5c]{color:#409eff}.background-opacity[data-v-f99d0e5c]{background:rgba(64,158,255,.6)}.stage-form .ghost[data-v-f99d0e5c]{width:100%;content:"";font-size:0;height:3px;box-sizing:border-box;background:#409EFF;border:2px solid #409EFF;outline-width:0;padding:0;overflow:hidden}.el-form-item .el-rate[data-v-f99d0e5c]{margin-top:8px}.el-form-item--medium .el-radio[data-v-f99d0e5c]{line-height:36px!important}.el-form-item--medium .el-rate[data-v-f99d0e5c]{margin-top:8px}.el-form-item--small .el-radio[data-v-f99d0e5c]{line-height:32px!important}.el-form-item--small .el-rate[data-v-f99d0e5c]{margin-top:6px}.el-form-item--mini .el-radio[data-v-f99d0e5c]{line-height:28px!important}.el-form-item--mini .el-rate[data-v-f99d0e5c]{margin-top:4px}.el-card[data-v-f99d0e5c]{margin-top:3px;margin-bottom:3px}input[type=password][data-v-f99d0e5c]::-ms-reveal{display:none}.auto-full-width.el-date-editor.el-input[data-v-f99d0e5c],.auto-full-width.el-date-editor.el-input__inner[data-v-f99d0e5c]{width:100%!important}[data-v-f99d0e5c]::-webkit-scrollbar{width:8px;height:8px}[data-v-f99d0e5c]::-webkit-scrollbar-track{width:8px;background:rgba(16,31,28,.1);-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em}[data-v-f99d0e5c]::-webkit-scrollbar-thumb{background-color:#101f1c59;background-clip:padding-box;min-height:28px;-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em}[data-v-f99d0e5c]::-webkit-scrollbar-thumb:hover{background-color:#101f1cd9}*[data-v-f99d0e5c]{scrollbar-color:#e5e5e5 #f7f7f9;scrollbar-width:thin}.select[data-v-f99d0e5c]{outline:1px solid #409EFF}\n')();
const _hoisted_1$b = { class: "card-header" };
const _sfc_main$p = {
  __name: "card",
  props: [
    "widget",
    "ruleForm",
    "propKey",
    "parent",
    "ruleFormRef",
    "selectedWidget",
    "isEditor"
  ],
  emits: ["selected1", "copyWidget1", "removeWidget1", "onEnd1"],
  setup(__props, { emit }) {
    const props = __props;
    const selected1 = (element) => {
      emit("selected1", element);
    };
    const copyWidget1 = (element) => {
      emit("copyWidget1", element);
    };
    const removeWidget1 = (widget, parentWidget) => {
      emit("removeWidget1", widget, parentWidget);
    };
    const onEnd1 = () => {
      emit("onEnd1");
    };
    watch(() => props.propKey, (value) => {
      const ruleFormKey = props.widget.options.basic.ruleFormKey.value;
      console.log("\u76D1\u542C\u5230\u6570\u636E\u53D8\u5316", ruleFormKey);
      if (ruleFormKey && !props.ruleForm[ruleFormKey]) {
        props.ruleForm[ruleFormKey] = {};
      }
    });
    return (_ctx, _cache) => {
      const _component_el_card = resolveComponent("el-card");
      return openBlock(), createBlock(containerMask, {
        widget: __props.widget,
        "rule-form": __props.ruleForm,
        parent: __props.parent,
        "is-editor": __props.isEditor,
        "selected-widget": __props.selectedWidget
      }, {
        default: withCtx(() => {
          var _a2, _b;
          return [
            createVNode(_component_el_card, {
              type: "border-card",
              class: normalizeClass([((_a2 = __props.selectedWidget) == null ? void 0 : _a2.id) === ((_b = __props.widget) == null ? void 0 : _b.id) && __props.isEditor ? "select" : ""])
            }, {
              header: withCtx(() => [
                createElementVNode("div", _hoisted_1$b, [
                  createElementVNode("span", null, toDisplayString(__props.widget.title), 1)
                ])
              ]),
              default: withCtx(() => [
                createVNode(cardContent, {
                  widgetList: __props.widget.options.advanced.widgetList,
                  "prop-key": __props.propKey,
                  widget: __props.widget,
                  "rule-form": __props.ruleForm[__props.widget.ruleFormKey] || __props.ruleForm,
                  "is-editor": __props.isEditor,
                  "selected-widget": __props.selectedWidget,
                  onOnEnd: onEnd1,
                  onSelected: selected1,
                  onCopyWidget: copyWidget1,
                  onRemoveWidget: removeWidget1
                }, null, 8, ["widgetList", "prop-key", "widget", "rule-form", "is-editor", "selected-widget"])
              ]),
              _: 1
            }, 8, ["class"])
          ];
        }),
        _: 1
      }, 8, ["widget", "rule-form", "parent", "is-editor", "selected-widget"]);
    };
  }
};
var card = /* @__PURE__ */ _export_sfc$1(_sfc_main$p, [["__scopeId", "data-v-f99d0e5c"]]);
card.install = (App) => {
  App.component(card.__name, card);
};
function fromPairs(pairs) {
  var index2 = -1, length = pairs == null ? 0 : pairs.length, result = {};
  while (++index2 < length) {
    var pair = pairs[index2];
    result[pair[0]] = pair[1];
  }
  return result;
}
var _a;
const isClient = typeof window !== "undefined";
const isNumber = (val) => typeof val === "number";
const isString$1 = (val) => typeof val === "string";
const noop = () => {
};
isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function tryOnScopeDispose(fn2) {
  if (getCurrentScope()) {
    onScopeDispose(fn2);
    return true;
  }
  return false;
}
function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = ref(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, unref(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (isClient)
      start();
  }
  tryOnScopeDispose(stop);
  return {
    isPending,
    start,
    stop
  };
}
function unrefElement(elRef) {
  var _a2;
  const plain = unref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = isClient ? window : void 0;
function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if (isString$1(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return noop;
  let cleanup = noop;
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (!el)
      return;
    el.addEventListener(event, listener, options);
    cleanup = () => {
      el.removeEventListener(event, listener, options);
      cleanup = noop;
    };
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
_global[globalKey];
var __getOwnPropSymbols$e = Object.getOwnPropertySymbols;
var __hasOwnProp$e = Object.prototype.hasOwnProperty;
var __propIsEnum$e = Object.prototype.propertyIsEnumerable;
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$e.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$e)
    for (var prop of __getOwnPropSymbols$e(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$e.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useResizeObserver(target, callback, options = {}) {
  const _a2 = options, { window: window2 = defaultWindow } = _a2, observerOptions = __objRest$2(_a2, ["window"]);
  let observer;
  const isSupported = window2 && "ResizeObserver" in window2;
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported && window2 && el) {
      observer = new ResizeObserver(callback);
      observer.observe(el, observerOptions);
    }
  }, { immediate: true, flush: "post" });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isObject = (val) => val !== null && typeof val === "object";
const isUndefined = (val) => val === void 0;
const isElement = (e) => {
  if (typeof Element === "undefined")
    return false;
  return e instanceof Element;
};
const keysOf = (arr) => Object.keys(arr);
function addUnit(value, defaultUnit = "px") {
  if (!value)
    return "";
  if (isString(value)) {
    return value;
  } else if (isNumber(value)) {
    return `${value}${defaultUnit}`;
  }
}
/*! Element Plus Icons Vue v2.0.9 */
var export_helper_default = (sfc, props) => {
  let target = sfc.__vccOpts || sfc;
  for (let [key, val] of props)
    target[key] = val;
  return target;
};
var _sfc_main50 = {
  name: "CircleCloseFilled"
}, _hoisted_150 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_250 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
}, null, -1), _hoisted_349 = [
  _hoisted_250
];
function _sfc_render50(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_150, _hoisted_349);
}
var circle_close_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main50, [["render", _sfc_render50], ["__file", "circle-close-filled.vue"]]);
var _sfc_main56 = {
  name: "Close"
}, _hoisted_156 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_256 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), _hoisted_355 = [
  _hoisted_256
];
function _sfc_render56(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_156, _hoisted_355);
}
var close_default = /* @__PURE__ */ export_helper_default(_sfc_main56, [["render", _sfc_render56], ["__file", "close.vue"]]);
var _sfc_main143 = {
  name: "InfoFilled"
}, _hoisted_1143 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2143 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
}, null, -1), _hoisted_3142 = [
  _hoisted_2143
];
function _sfc_render143(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1143, _hoisted_3142);
}
var info_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main143, [["render", _sfc_render143], ["__file", "info-filled.vue"]]);
var _sfc_main249 = {
  name: "SuccessFilled"
}, _hoisted_1249 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2249 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
}, null, -1), _hoisted_3248 = [
  _hoisted_2249
];
function _sfc_render249(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1249, _hoisted_3248);
}
var success_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main249, [["render", _sfc_render249], ["__file", "success-filled.vue"]]);
var _sfc_main287 = {
  name: "WarningFilled"
}, _hoisted_1287 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2287 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
}, null, -1), _hoisted_3286 = [
  _hoisted_2287
];
function _sfc_render287(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1287, _hoisted_3286);
}
var warning_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main287, [["render", _sfc_render287], ["__file", "warning-filled.vue"]]);
const epPropKey = "__epPropKey";
const definePropType = (val) => val;
const isEpProp = (val) => isObject(val) && !!val[epPropKey];
const buildProp = (prop, key) => {
  if (!isObject(prop) || isEpProp(prop))
    return prop;
  const { values, required, default: defaultValue, type, validator } = prop;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if (hasOwn(prop, "default")) {
        allowedValues.push(defaultValue);
      }
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  const epProp = {
    type,
    required: !!required,
    validator: _validator,
    [epPropKey]: true
  };
  if (hasOwn(prop, "default"))
    epProp.default = defaultValue;
  return epProp;
};
const buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [
  key,
  buildProp(option, key)
]));
const iconPropType = definePropType([
  String,
  Object,
  Function
]);
const TypeComponents = {
  Close: close_default,
  SuccessFilled: success_filled_default,
  InfoFilled: info_filled_default,
  WarningFilled: warning_filled_default,
  CircleCloseFilled: circle_close_filled_default
};
const TypeComponentsMap = {
  success: success_filled_default,
  warning: warning_filled_default,
  error: circle_close_filled_default,
  info: info_filled_default
};
const withInstall = (main, extra) => {
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp;
    }
  }
  return main;
};
const withInstallFunction = (fn2, name) => {
  fn2.install = (app) => {
    fn2._context = app._context;
    app.config.globalProperties[name] = fn2;
  };
  return fn2;
};
const EVENT_CODE = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
};
const componentSizes = ["", "default", "small", "large"];
const mutable = (val) => val;
const configProviderContextKey = Symbol();
const globalConfig = ref();
function useGlobalConfig(key, defaultValue = void 0) {
  const config = getCurrentInstance() ? inject(configProviderContextKey, globalConfig) : globalConfig;
  if (key) {
    return computed(() => {
      var _a2, _b;
      return (_b = (_a2 = config.value) == null ? void 0 : _a2[key]) != null ? _b : defaultValue;
    });
  } else {
    return config;
  }
}
const provideGlobalConfig = (config, app, global2 = false) => {
  var _a2;
  const inSetup = !!getCurrentInstance();
  const oldConfig = inSetup ? useGlobalConfig() : void 0;
  const provideFn = (_a2 = app == null ? void 0 : app.provide) != null ? _a2 : inSetup ? provide : void 0;
  if (!provideFn) {
    return;
  }
  const context = computed(() => {
    const cfg = unref(config);
    if (!(oldConfig == null ? void 0 : oldConfig.value))
      return cfg;
    return mergeConfig(oldConfig.value, cfg);
  });
  provideFn(configProviderContextKey, context);
  if (global2 || !globalConfig.value) {
    globalConfig.value = context.value;
  }
  return context;
};
const mergeConfig = (a2, b2) => {
  var _a2;
  const keys = [.../* @__PURE__ */ new Set([...keysOf(a2), ...keysOf(b2)])];
  const obj = {};
  for (const key of keys) {
    obj[key] = (_a2 = b2[key]) != null ? _a2 : a2[key];
  }
  return obj;
};
const useSizeProp = buildProp({
  type: String,
  values: componentSizes,
  required: false
});
const defaultNamespace = "el";
const statePrefix = "is-";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
const useNamespace = (block) => {
  const globalConfig2 = useGlobalConfig("namespace");
  const namespace = computed(() => globalConfig2.value || defaultNamespace);
  const b2 = (blockSuffix = "") => _bem(unref(namespace), block, blockSuffix, "", "");
  const e = (element) => element ? _bem(unref(namespace), block, "", element, "") : "";
  const m2 = (modifier) => modifier ? _bem(unref(namespace), block, "", "", modifier) : "";
  const be2 = (blockSuffix, element) => blockSuffix && element ? _bem(unref(namespace), block, blockSuffix, element, "") : "";
  const em = (element, modifier) => element && modifier ? _bem(unref(namespace), block, "", element, modifier) : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(unref(namespace), block, blockSuffix, "", modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(unref(namespace), block, blockSuffix, element, modifier) : "";
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : "";
  };
  const cssVar = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarBlock = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${block}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarName = (name) => `--${namespace.value}-${name}`;
  const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
  return {
    namespace,
    b: b2,
    e,
    m: m2,
    be: be2,
    em,
    bm,
    bem,
    is,
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName
  };
};
const zIndex = ref(0);
const useZIndex = () => {
  const initialZIndex = useGlobalConfig("zIndex", 2e3);
  const currentZIndex = computed(() => initialZIndex.value + zIndex.value);
  const nextZIndex = () => {
    zIndex.value++;
    return currentZIndex.value;
  };
  return {
    initialZIndex,
    currentZIndex,
    nextZIndex
  };
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const iconProps = buildProps({
  size: {
    type: definePropType([Number, String])
  },
  color: {
    type: String
  }
});
const __default__$2 = {
  name: "ElIcon",
  inheritAttrs: false
};
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: iconProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("icon");
    const style = computed(() => {
      if (!props.size && !props.color)
        return {};
      return {
        fontSize: isUndefined(props.size) ? void 0 : addUnit(props.size),
        "--color": props.color
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", mergeProps({
        class: unref(ns).b(),
        style: unref(style)
      }, _ctx.$attrs), [
        renderSlot(_ctx.$slots, "default")
      ], 16);
    };
  }
});
var Icon = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const ElIcon = withInstall(Icon);
const badgeProps = buildProps({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  }
});
const _hoisted_1$a = ["textContent"];
const __default__$1 = {
  name: "ElBadge"
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: badgeProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("badge");
    const content = computed(() => {
      if (props.isDot)
        return "";
      if (isNumber(props.value) && isNumber(props.max)) {
        return props.max < props.value ? `${props.max}+` : `${props.value}`;
      }
      return `${props.value}`;
    });
    expose({
      content
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns).b())
      }, [
        renderSlot(_ctx.$slots, "default"),
        createVNode(Transition, {
          name: `${unref(ns).namespace.value}-zoom-in-center`,
          persisted: ""
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("sup", {
              class: normalizeClass([
                unref(ns).e("content"),
                unref(ns).em("content", _ctx.type),
                unref(ns).is("fixed", !!_ctx.$slots.default),
                unref(ns).is("dot", _ctx.isDot)
              ]),
              textContent: toDisplayString(unref(content))
            }, null, 10, _hoisted_1$a), [
              [vShow, !_ctx.hidden && (unref(content) || _ctx.isDot)]
            ])
          ]),
          _: 1
        }, 8, ["name"])
      ], 2);
    };
  }
});
var Badge = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);
const ElBadge = withInstall(Badge);
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
const messageConfig = {};
const configProviderProps = buildProps({
  a11y: {
    type: Boolean,
    default: true
  },
  locale: {
    type: definePropType(Object)
  },
  size: useSizeProp,
  button: {
    type: definePropType(Object)
  },
  experimentalFeatures: {
    type: definePropType(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: true
  },
  message: {
    type: definePropType(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  }
});
defineComponent({
  name: "ElConfigProvider",
  props: configProviderProps,
  setup(props, { slots }) {
    watch(() => props.message, (val) => {
      Object.assign(messageConfig, val != null ? val : {});
    }, { immediate: true, deep: true });
    const config = provideGlobalConfig(props);
    return () => renderSlot(slots, "default", { config: config == null ? void 0 : config.value });
  }
});
const messageTypes = ["success", "info", "warning", "error"];
const messageDefaults = mutable({
  customClass: "",
  center: false,
  dangerouslyUseHTMLString: false,
  duration: 3e3,
  icon: "",
  id: "",
  message: "",
  onClose: void 0,
  showClose: false,
  type: "info",
  offset: 16,
  zIndex: 0,
  grouping: false,
  repeatNum: 1,
  appendTo: isClient ? document.body : void 0
});
const messageProps = buildProps({
  customClass: {
    type: String,
    default: messageDefaults.customClass
  },
  center: {
    type: Boolean,
    default: messageDefaults.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: messageDefaults.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: messageDefaults.duration
  },
  icon: {
    type: iconPropType,
    default: messageDefaults.icon
  },
  id: {
    type: String,
    default: messageDefaults.id
  },
  message: {
    type: definePropType([
      String,
      Object,
      Function
    ]),
    default: messageDefaults.message
  },
  onClose: {
    type: definePropType(Function),
    required: false
  },
  showClose: {
    type: Boolean,
    default: messageDefaults.showClose
  },
  type: {
    type: String,
    values: messageTypes,
    default: messageDefaults.type
  },
  offset: {
    type: Number,
    default: messageDefaults.offset
  },
  zIndex: {
    type: Number,
    default: messageDefaults.zIndex
  },
  grouping: {
    type: Boolean,
    default: messageDefaults.grouping
  },
  repeatNum: {
    type: Number,
    default: messageDefaults.repeatNum
  }
});
const messageEmits = {
  destroy: () => true
};
const instances = shallowReactive([]);
const getInstance = (id) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  const current = instances[idx];
  let prev;
  if (idx > 0) {
    prev = instances[idx - 1];
  }
  return { current, prev };
};
const getLastOffset = (id) => {
  const { prev } = getInstance(id);
  if (!prev)
    return 0;
  return prev.vm.exposeProxy.bottom;
};
const _hoisted_1$9 = ["id"];
const _hoisted_2$3 = ["innerHTML"];
const __default__ = {
  name: "ElMessage"
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: messageProps,
  emits: messageEmits,
  setup(__props, { expose }) {
    const props = __props;
    const { Close } = TypeComponents;
    const ns = useNamespace("message");
    const messageRef = ref();
    const visible = ref(false);
    const height = ref(0);
    let stopTimer = void 0;
    const badgeType = computed(() => props.type ? props.type === "error" ? "danger" : props.type : "info");
    const typeClass = computed(() => {
      const type = props.type;
      return { [ns.bm("icon", type)]: type && TypeComponentsMap[type] };
    });
    const iconComponent = computed(() => props.icon || TypeComponentsMap[props.type] || "");
    const lastOffset = computed(() => getLastOffset(props.id));
    const offset = computed(() => props.offset + lastOffset.value);
    const bottom = computed(() => height.value + offset.value);
    const customStyle = computed(() => ({
      top: `${offset.value}px`,
      zIndex: props.zIndex
    }));
    function startTimer() {
      if (props.duration === 0)
        return;
      ({ stop: stopTimer } = useTimeoutFn(() => {
        close();
      }, props.duration));
    }
    function clearTimer() {
      stopTimer == null ? void 0 : stopTimer();
    }
    function close() {
      visible.value = false;
    }
    function keydown({ code }) {
      if (code === EVENT_CODE.esc) {
        close();
      }
    }
    onMounted(() => {
      startTimer();
      visible.value = true;
    });
    watch(() => props.repeatNum, () => {
      clearTimer();
      startTimer();
    });
    useEventListener(document, "keydown", keydown);
    useResizeObserver(messageRef, () => {
      height.value = messageRef.value.getBoundingClientRect().height;
    });
    expose({
      visible,
      bottom,
      close
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: unref(ns).b("fade"),
        onBeforeLeave: _ctx.onClose,
        onAfterLeave: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("destroy")),
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            id: _ctx.id,
            ref_key: "messageRef",
            ref: messageRef,
            class: normalizeClass([
              unref(ns).b(),
              { [unref(ns).m(_ctx.type)]: _ctx.type && !_ctx.icon },
              unref(ns).is("center", _ctx.center),
              unref(ns).is("closable", _ctx.showClose),
              _ctx.customClass
            ]),
            style: normalizeStyle(unref(customStyle)),
            role: "alert",
            onMouseenter: clearTimer,
            onMouseleave: startTimer
          }, [
            _ctx.repeatNum > 1 ? (openBlock(), createBlock(unref(ElBadge), {
              key: 0,
              value: _ctx.repeatNum,
              type: unref(badgeType),
              class: normalizeClass(unref(ns).e("badge"))
            }, null, 8, ["value", "type", "class"])) : createCommentVNode("v-if", true),
            unref(iconComponent) ? (openBlock(), createBlock(unref(ElIcon), {
              key: 1,
              class: normalizeClass([unref(ns).e("icon"), unref(typeClass)])
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(iconComponent))))
              ]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("v-if", true),
            renderSlot(_ctx.$slots, "default", {}, () => [
              !_ctx.dangerouslyUseHTMLString ? (openBlock(), createElementBlock("p", {
                key: 0,
                class: normalizeClass(unref(ns).e("content"))
              }, toDisplayString(_ctx.message), 3)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createCommentVNode(" Caution here, message could've been compromised, never use user's input as message "),
                createElementVNode("p", {
                  class: normalizeClass(unref(ns).e("content")),
                  innerHTML: _ctx.message
                }, null, 10, _hoisted_2$3)
              ], 2112))
            ]),
            _ctx.showClose ? (openBlock(), createBlock(unref(ElIcon), {
              key: 2,
              class: normalizeClass(unref(ns).e("closeBtn")),
              onClick: withModifiers(close, ["stop"])
            }, {
              default: withCtx(() => [
                createVNode(unref(Close))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
          ], 46, _hoisted_1$9), [
            [vShow, visible.value]
          ])
        ]),
        _: 3
      }, 8, ["name", "onBeforeLeave"]);
    };
  }
});
var MessageConstructor = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);
let seed = 1;
const normalizeOptions = (params) => {
  const options = !params || isString(params) || isVNode(params) || isFunction(params) ? { message: params } : params;
  const normalized = {
    ...messageDefaults,
    ...options
  };
  if (!normalized.appendTo) {
    normalized.appendTo = document.body;
  } else if (isString(normalized.appendTo)) {
    let appendTo = document.querySelector(normalized.appendTo);
    if (!isElement(appendTo)) {
      appendTo = document.body;
    }
    normalized.appendTo = appendTo;
  }
  return normalized;
};
const closeMessage = (instance) => {
  const idx = instances.indexOf(instance);
  if (idx === -1)
    return;
  instances.splice(idx, 1);
  const { handler } = instance;
  handler.close();
};
const createMessage = ({ appendTo, ...options }, context) => {
  const { nextZIndex } = useZIndex();
  const id = `message_${seed++}`;
  const userOnClose = options.onClose;
  const container = document.createElement("div");
  const props = {
    ...options,
    zIndex: nextZIndex() + options.zIndex,
    id,
    onClose: () => {
      userOnClose == null ? void 0 : userOnClose();
      closeMessage(instance);
    },
    onDestroy: () => {
      render(null, container);
    }
  };
  const vnode = createVNode(MessageConstructor, props, isFunction(props.message) || isVNode(props.message) ? { default: props.message } : null);
  vnode.appContext = context || message._context;
  render(vnode, container);
  appendTo.appendChild(container.firstElementChild);
  const vm = vnode.component;
  const handler = {
    close: () => {
      vm.exposeProxy.visible = false;
    }
  };
  const instance = {
    id,
    vnode,
    vm,
    handler,
    props: vnode.component.props
  };
  return instance;
};
const message = (options = {}, context) => {
  if (!isClient)
    return { close: () => void 0 };
  if (isNumber(messageConfig.max) && instances.length >= messageConfig.max) {
    return { close: () => void 0 };
  }
  const normalized = normalizeOptions(options);
  if (normalized.grouping && instances.length) {
    const instance2 = instances.find(({ vnode: vm }) => {
      var _a2;
      return ((_a2 = vm.props) == null ? void 0 : _a2.message) === normalized.message;
    });
    if (instance2) {
      instance2.props.repeatNum += 1;
      instance2.props.type = normalized.type;
      return instance2.handler;
    }
  }
  const instance = createMessage(normalized, context);
  instances.push(instance);
  return instance.handler;
};
messageTypes.forEach((type) => {
  message[type] = (options = {}, appContext) => {
    const normalized = normalizeOptions(options);
    return message({ ...normalized, type }, appContext);
  };
});
function closeAll(type) {
  for (const instance of instances) {
    if (!type || type === instance.props.type) {
      instance.handler.close();
    }
  }
}
message.closeAll = closeAll;
message._context = null;
const ElMessage = withInstallFunction(message, "$message");
var gridCol_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => '@charset "UTF-8";.primary-color[data-v-fc3f0380]{color:#409eff}.background-opacity[data-v-fc3f0380]{background:rgba(64,158,255,.6)}.stage-form .ghost[data-v-fc3f0380]{width:100%;content:"";font-size:0;height:3px;box-sizing:border-box;background:#409EFF;border:2px solid #409EFF;outline-width:0;padding:0;overflow:hidden}.el-form-item .el-rate[data-v-fc3f0380]{margin-top:8px}.el-form-item--medium .el-radio[data-v-fc3f0380]{line-height:36px!important}.el-form-item--medium .el-rate[data-v-fc3f0380]{margin-top:8px}.el-form-item--small .el-radio[data-v-fc3f0380]{line-height:32px!important}.el-form-item--small .el-rate[data-v-fc3f0380]{margin-top:6px}.el-form-item--mini .el-radio[data-v-fc3f0380]{line-height:28px!important}.el-form-item--mini .el-rate[data-v-fc3f0380]{margin-top:4px}.el-card[data-v-fc3f0380]{margin-top:3px;margin-bottom:3px}input[type=password][data-v-fc3f0380]::-ms-reveal{display:none}.auto-full-width.el-date-editor.el-input[data-v-fc3f0380],.auto-full-width.el-date-editor.el-input__inner[data-v-fc3f0380]{width:100%!important}[data-v-fc3f0380]::-webkit-scrollbar{width:8px;height:8px}[data-v-fc3f0380]::-webkit-scrollbar-track{width:8px;background:rgba(16,31,28,.1);-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em}[data-v-fc3f0380]::-webkit-scrollbar-thumb{background-color:#101f1c59;background-clip:padding-box;min-height:28px;-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em}[data-v-fc3f0380]::-webkit-scrollbar-thumb:hover{background-color:#101f1cd9}*[data-v-fc3f0380]{scrollbar-color:#e5e5e5 #f7f7f9;scrollbar-width:thin}.grid-content1[data-v-fc3f0380]{border-radius:4px;min-height:36px}.gird-line[data-v-fc3f0380]{border:1px dashed #000}\n')();
const _hoisted_1$8 = { class: "transition-group-el" };
const _sfc_main$l = {
  __name: "grid-col",
  props: [
    "colWidget",
    "widget",
    "propKey",
    "ruleForm",
    "ruleFormRef",
    "selectedWidget",
    "isEditor"
  ],
  emits: ["selected", "copyWidget", "removeWidget", "onEnd"],
  setup(__props, { emit }) {
    const props = __props;
    const onEnd = () => {
      emit("onEnd");
    };
    const selected = (element) => {
      emit("selected", element);
    };
    const copyWidget = (element) => {
      emit("copyWidget", element);
    };
    const removeWidget = (widget, parentWidget) => {
      emit("removeWidget", widget, parentWidget);
    };
    const submitForm = async () => {
      if (!props.ruleFormRef)
        return;
      await props.ruleFormRef.validate((valid, fields) => {
        console.log(valid, "===valid===");
        if (valid) {
          console.log("submit!");
        } else {
          console.log("error submit!", fields);
        }
      });
    };
    const getPropKey = (element, index2) => {
      if (props.propKey) {
        if (props.widget.ruleFormKeyType === "object") {
          return `${props.propKey}.${element.ruleFormKey}`;
        }
        if (props.widget.ruleFormKeyType === "array") {
          return `${props.propKey}.${index2}.${element.ruleFormKey}`;
        }
      } else {
        return `${element.ruleFormKey}`;
      }
    };
    return (_ctx, _cache) => {
      const _component_draggable = resolveComponent("draggable");
      const _component_el_col = resolveComponent("el-col");
      return openBlock(), createBlock(_component_el_col, {
        span: __props.colWidget.gutter,
        class: normalizeClass(["grid-content1 ep-bg-purple", [__props.isEditor ? "gird-line" : ""]])
      }, {
        default: withCtx(() => [
          createVNode(_component_draggable, mergeProps({
            list: __props.colWidget.widgetList,
            "item-key": "id"
          }, { group: "dragGroup", ghostClass: "ghost", animation: 300 }, {
            tag: "transition-group",
            "component-data": { name: "fade" },
            onAdd: onEnd
          }), {
            item: withCtx(({ element, index: index2 }) => [
              createElementVNode("div", _hoisted_1$8, [
                (openBlock(), createBlock(resolveDynamicComponent(element.type), {
                  key: element.id,
                  widget: element,
                  "prop-key": getPropKey(element, index2),
                  "parent-widget": __props.colWidget.widgetList,
                  "rule-form-ref": __props.ruleFormRef,
                  "rule-form": __props.ruleForm,
                  parent: __props.widget,
                  "selected-widget": __props.selectedWidget,
                  "is-editor": __props.isEditor,
                  hidden: !__props.isEditor && __props.widget.options.basic.isHidden.value,
                  onCopyWidget: ($event) => copyWidget(element),
                  onRemoveWidget: ($event) => removeWidget(element, __props.colWidget.widgetList),
                  onClick: withModifiers(($event) => selected(element), ["stop"]),
                  onSubmitForm: submitForm
                }, null, 40, ["widget", "prop-key", "parent-widget", "rule-form-ref", "rule-form", "parent", "selected-widget", "is-editor", "hidden", "onCopyWidget", "onRemoveWidget", "onClick"]))
              ])
            ]),
            _: 1
          }, 16, ["list"])
        ]),
        _: 1
      }, 8, ["span", "class"]);
    };
  }
};
var Col = /* @__PURE__ */ _export_sfc$1(_sfc_main$l, [["__scopeId", "data-v-fc3f0380"]]);
var grid_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => '@charset "UTF-8";.primary-color[data-v-4425d943]{color:#409eff}.background-opacity[data-v-4425d943]{background:rgba(64,158,255,.6)}.stage-form .ghost[data-v-4425d943]{width:100%;content:"";font-size:0;height:3px;box-sizing:border-box;background:#409EFF;border:2px solid #409EFF;outline-width:0;padding:0;overflow:hidden}.el-form-item .el-rate[data-v-4425d943]{margin-top:8px}.el-form-item--medium .el-radio[data-v-4425d943]{line-height:36px!important}.el-form-item--medium .el-rate[data-v-4425d943]{margin-top:8px}.el-form-item--small .el-radio[data-v-4425d943]{line-height:32px!important}.el-form-item--small .el-rate[data-v-4425d943]{margin-top:6px}.el-form-item--mini .el-radio[data-v-4425d943]{line-height:28px!important}.el-form-item--mini .el-rate[data-v-4425d943]{margin-top:4px}.el-card[data-v-4425d943]{margin-top:3px;margin-bottom:3px}input[type=password][data-v-4425d943]::-ms-reveal{display:none}.auto-full-width.el-date-editor.el-input[data-v-4425d943],.auto-full-width.el-date-editor.el-input__inner[data-v-4425d943]{width:100%!important}[data-v-4425d943]::-webkit-scrollbar{width:8px;height:8px}[data-v-4425d943]::-webkit-scrollbar-track{width:8px;background:rgba(16,31,28,.1);-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em}[data-v-4425d943]::-webkit-scrollbar-thumb{background-color:#101f1c59;background-clip:padding-box;min-height:28px;-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em}[data-v-4425d943]::-webkit-scrollbar-thumb:hover{background-color:#101f1cd9}*[data-v-4425d943]{scrollbar-color:#e5e5e5 #f7f7f9;scrollbar-width:thin}.grid-container[data-v-4425d943]{padding:1px}.grid-line[data-v-4425d943]{outline:1px dashed #444}.select[data-v-4425d943]{outline:1px solid #409EFF}.el-row[data-v-4425d943]:last-child{margin-bottom:0}.el-col[data-v-4425d943]{border-radius:4px}.grid-content[data-v-4425d943]{border-radius:4px;min-height:36px;border:1px dashed #444}\n')();
const _sfc_main$k = {
  __name: "grid",
  props: ["widget", "selectedWidget", "isEditor", "parent", "propKey", "ruleForm", "ruleFormRef"],
  emits: ["selected1", "copyWidget1", "removeWidget1", "onEnd1"],
  setup(__props, { emit }) {
    const props = __props;
    watch(() => props.propKey, (value) => {
      var _a2;
      const ruleFormKey = props.widget.options.basic.ruleFormKey.value;
      const parentRuleFormKeyType = (_a2 = props.parent) == null ? void 0 : _a2.ruleFormKeyType;
      const ruleFormKeyType = props.widget.ruleFormKeyType;
      if (ruleFormKey && !props.ruleForm[ruleFormKey]) {
        console.log("\u76D1\u542C\u5230\u6570\u636E\u53D8\u5316", ruleFormKey);
        if (parentRuleFormKeyType === "object" || !parentRuleFormKeyType) {
          if (ruleFormKeyType === "array") {
            props.ruleForm[ruleFormKey] = [];
          } else {
            props.ruleForm[ruleFormKey] = {};
          }
        }
        if (parentRuleFormKeyType === "array") {
          if (ruleFormKeyType === "array") {
            ElMessage({
              message: "\u7236\u7EA7\u5BB9\u5668\u662F\u6570\u7EC4\u7ED3\u6784\uFF0C\u8BE5\u5143\u7D20\u53EA\u652F\u6301\u8BBE\u7F6E\u5BF9\u8C61\u7ED3\u6784",
              type: "error",
              duration: 1500
            });
          } else {
            const isExist = props.ruleForm.some((rule) => {
              Object.keys(rule).indexOf(ruleFormKey) > -1;
            });
            if (!isExist) {
              props.ruleForm.push({
                [ruleFormKey]: props.widget.value
              });
            }
          }
        }
      }
    }, {
      deep: true,
      immediate: true
    });
    const selected1 = (element) => {
      emit("selected1", element);
    };
    const copyWidget1 = (element) => {
      emit("copyWidget1", element);
    };
    const removeWidget1 = (widget, parentWidget) => {
      emit("removeWidget1", widget, parentWidget);
    };
    const onEnd1 = () => {
      emit("onEnd1");
    };
    return (_ctx, _cache) => {
      const _component_el_row = resolveComponent("el-row");
      return openBlock(), createBlock(containerMask, {
        widget: __props.widget,
        style: normalizeStyle(`${__props.widget.options.basic.isMoveDivider.value ? `top:${__props.widget.options.basic.moveDistance.value}px` : ""}`),
        "rule-form": __props.ruleForm,
        parent: __props.parent,
        "is-editor": __props.isEditor,
        "selected-widget": __props.selectedWidget
      }, {
        default: withCtx(() => {
          var _a2, _b;
          return [
            createVNode(_component_el_row, {
              class: normalizeClass(["grid-container", [
                ((_a2 = __props.selectedWidget) == null ? void 0 : _a2.id) === ((_b = __props.widget) == null ? void 0 : _b.id) && __props.isEditor ? "select" : ""
              ]]),
              style: normalizeStyle(`background-color:${__props.widget.options.basic.rowBackground.value}`)
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.widget.options.advanced.cols, (colWidget, colIdx) => {
                  return openBlock(), createBlock(Col, {
                    key: colIdx,
                    colWidget,
                    widget: __props.widget,
                    "prop-key": __props.propKey,
                    "rule-form-ref": __props.ruleFormRef,
                    "is-editor": __props.isEditor,
                    "selected-widget": __props.selectedWidget,
                    "rule-form": __props.ruleForm[__props.widget.ruleFormKey] || __props.ruleForm,
                    "rule-form-key-type": __props.widget.ruleFormKeyType,
                    onOnEnd: onEnd1,
                    onSelected: selected1,
                    onCopyWidget: copyWidget1,
                    onRemoveWidget: removeWidget1,
                    style: normalizeStyle(`height:${__props.widget.options.basic.colHeight.value}px;`)
                  }, null, 8, ["colWidget", "widget", "prop-key", "rule-form-ref", "is-editor", "selected-widget", "rule-form", "rule-form-key-type", "style"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["class", "style"])
          ];
        }),
        _: 1
      }, 8, ["widget", "style", "rule-form", "parent", "is-editor", "selected-widget"]);
    };
  }
};
var grid = /* @__PURE__ */ _export_sfc$1(_sfc_main$k, [["__scopeId", "data-v-4425d943"]]);
grid.install = (App) => {
  App.component(grid.__name, grid);
};
var content_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => '@charset "UTF-8";.primary-color[data-v-7e902883]{color:#409eff}.background-opacity[data-v-7e902883]{background:rgba(64,158,255,.6)}.stage-form .ghost[data-v-7e902883]{width:100%;content:"";font-size:0;height:3px;box-sizing:border-box;background:#409EFF;border:2px solid #409EFF;outline-width:0;padding:0;overflow:hidden}.el-form-item .el-rate[data-v-7e902883]{margin-top:8px}.el-form-item--medium .el-radio[data-v-7e902883]{line-height:36px!important}.el-form-item--medium .el-rate[data-v-7e902883]{margin-top:8px}.el-form-item--small .el-radio[data-v-7e902883]{line-height:32px!important}.el-form-item--small .el-rate[data-v-7e902883]{margin-top:6px}.el-form-item--mini .el-radio[data-v-7e902883]{line-height:28px!important}.el-form-item--mini .el-rate[data-v-7e902883]{margin-top:4px}.el-card[data-v-7e902883]{margin-top:3px;margin-bottom:3px}input[type=password][data-v-7e902883]::-ms-reveal{display:none}.auto-full-width.el-date-editor.el-input[data-v-7e902883],.auto-full-width.el-date-editor.el-input__inner[data-v-7e902883]{width:100%!important}[data-v-7e902883]::-webkit-scrollbar{width:8px;height:8px}[data-v-7e902883]::-webkit-scrollbar-track{width:8px;background:rgba(16,31,28,.1);-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em}[data-v-7e902883]::-webkit-scrollbar-thumb{background-color:#101f1c59;background-clip:padding-box;min-height:28px;-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em}[data-v-7e902883]::-webkit-scrollbar-thumb:hover{background-color:#101f1cd9}*[data-v-7e902883]{scrollbar-color:#e5e5e5 #f7f7f9;scrollbar-width:thin}.grid-content1[data-v-7e902883]{min-height:34px;padding-bottom:20px}\n')();
const _hoisted_1$7 = { class: "transition-group-el" };
const _sfc_main$j = {
  __name: "content",
  props: [
    "colWidget",
    "ruleForm",
    "widget",
    "propKey",
    "colIdx",
    "isEditor",
    "selectedWidget"
  ],
  emits: ["selected", "copyWidget", "removeWidget", "onEnd"],
  setup(__props, { emit }) {
    const props = __props;
    const getPropKey = (element, index2) => {
      if (props.propKey) {
        return `${props.propKey}.${index2}.${element.ruleFormKey}`;
      } else {
        return `${element.ruleFormKey}`;
      }
    };
    const onEnd = () => {
      emit("onEnd");
    };
    const selected = (element) => {
      emit("selected", element);
    };
    const copyWidget = (element) => {
      emit("copyWidget", element);
    };
    const removeWidget = (widget, parentWidget) => {
      emit("removeWidget", widget, parentWidget);
    };
    return (_ctx, _cache) => {
      const _component_draggable = resolveComponent("draggable");
      const _component_el_col = resolveComponent("el-col");
      return openBlock(), createBlock(_component_el_col, { class: "grid-content1 ep-bg-purple" }, {
        default: withCtx(() => [
          createVNode(_component_draggable, mergeProps({
            list: __props.colWidget.widgetList,
            "item-key": "id"
          }, { group: "dragGroup", ghostClass: "ghost", animation: 300 }, {
            tag: "transition-group",
            "component-data": { name: "fade" },
            onAdd: onEnd
          }), {
            item: withCtx(({ element }) => [
              createElementVNode("div", _hoisted_1$7, [
                (openBlock(), createBlock(resolveDynamicComponent(element.type), {
                  key: element.id,
                  "parent-widget": __props.colWidget.widgetList,
                  widget: element,
                  parent: __props.widget,
                  "prop-key": getPropKey(element, __props.colIdx),
                  "rule-form": __props.ruleForm[__props.colIdx],
                  "selected-widget": __props.selectedWidget,
                  "is-editor": __props.isEditor,
                  onCopyWidget: ($event) => copyWidget(element),
                  onRemoveWidget: ($event) => removeWidget(element, __props.colWidget.widgetList),
                  onClick: withModifiers(($event) => selected(element), ["stop"])
                }, null, 40, ["parent-widget", "widget", "parent", "prop-key", "rule-form", "selected-widget", "is-editor", "onCopyWidget", "onRemoveWidget", "onClick"]))
              ])
            ]),
            _: 1
          }, 16, ["list"])
        ]),
        _: 1
      });
    };
  }
};
var tabsContent = /* @__PURE__ */ _export_sfc$1(_sfc_main$j, [["__scopeId", "data-v-7e902883"]]);
var tabs_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => '@charset "UTF-8";.primary-color[data-v-3b922a8a]{color:#409eff}.background-opacity[data-v-3b922a8a]{background:rgba(64,158,255,.6)}.stage-form .ghost[data-v-3b922a8a]{width:100%;content:"";font-size:0;height:3px;box-sizing:border-box;background:#409EFF;border:2px solid #409EFF;outline-width:0;padding:0;overflow:hidden}.el-form-item .el-rate[data-v-3b922a8a]{margin-top:8px}.el-form-item--medium .el-radio[data-v-3b922a8a]{line-height:36px!important}.el-form-item--medium .el-rate[data-v-3b922a8a]{margin-top:8px}.el-form-item--small .el-radio[data-v-3b922a8a]{line-height:32px!important}.el-form-item--small .el-rate[data-v-3b922a8a]{margin-top:6px}.el-form-item--mini .el-radio[data-v-3b922a8a]{line-height:28px!important}.el-form-item--mini .el-rate[data-v-3b922a8a]{margin-top:4px}.el-card[data-v-3b922a8a]{margin-top:3px;margin-bottom:3px}input[type=password][data-v-3b922a8a]::-ms-reveal{display:none}.auto-full-width.el-date-editor.el-input[data-v-3b922a8a],.auto-full-width.el-date-editor.el-input__inner[data-v-3b922a8a]{width:100%!important}[data-v-3b922a8a]::-webkit-scrollbar{width:8px;height:8px}[data-v-3b922a8a]::-webkit-scrollbar-track{width:8px;background:rgba(16,31,28,.1);-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em}[data-v-3b922a8a]::-webkit-scrollbar-thumb{background-color:#101f1c59;background-clip:padding-box;min-height:28px;-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em}[data-v-3b922a8a]::-webkit-scrollbar-thumb:hover{background-color:#101f1cd9}*[data-v-3b922a8a]{scrollbar-color:#e5e5e5 #f7f7f9;scrollbar-width:thin}.grid-container[data-v-3b922a8a]{padding:1px}.select[data-v-3b922a8a]{outline:1px solid #409EFF}.el-row[data-v-3b922a8a]{margin-bottom:20px}.el-row[data-v-3b922a8a]:last-child{margin-bottom:0}.el-col[data-v-3b922a8a]{border-radius:4px}.grid-content[data-v-3b922a8a]{border-radius:4px;min-height:36px;border:1px dashed #444}\n')();
const _sfc_main$i = {
  __name: "tabs",
  props: [
    "widget",
    "parent",
    "propKey",
    "ruleForm",
    "ruleFormRef",
    "selectedWidget",
    "isEditor"
  ],
  emits: ["selected1", "copyWidget1", "removeWidget1", "onEnd1"],
  setup(__props, { emit }) {
    const props = __props;
    watch(() => props.propKey, (value) => {
      const ruleFormKey = props.widget.options.basic.ruleFormKey.value;
      if (ruleFormKey && !props.ruleForm[ruleFormKey]) {
        props.ruleForm[ruleFormKey] = [{}];
      }
    });
    let activeName = props.widget.options.advanced.cols[0].id;
    const addTabsHandler = () => {
      let maxCount = props.widget.maxCount;
      if (maxCount <= 0 || props.widget.options.advanced.cols.length < maxCount) {
        props.widget.options.advanced.cols.push({
          id: guid(),
          name: "\u540D\u79F0",
          widgetList: []
        });
        const ruleFormKey = props.widget.options.basic.ruleFormKey.value;
        ruleFormKey && props.ruleForm[ruleFormKey].push({});
      }
    };
    const removeTabsHandler1 = (name) => {
      console.log(name);
      const ruleFormKey = props.widget.options.basic.ruleFormKey.value;
      let cols = props.widget.options.advanced.cols;
      if (cols.length === 1) {
        return;
      }
      for (let i = 0; i < cols.length; i++) {
        if (cols[i].id === name) {
          cols.splice(i, 1);
          props.ruleForm[ruleFormKey].splice(i, 1);
          return;
        }
      }
    };
    const guid = () => {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c2) {
        var r = Math.random() * 16 | 0, v2 = c2 == "x" ? r : r & 3 | 8;
        return v2.toString(16);
      });
    };
    const selected1 = (element) => {
      emit("selected1", element);
    };
    const copyWidget1 = (element) => {
      emit("copyWidget1", element);
    };
    const removeWidget1 = (widget, parentWidget) => {
      emit("removeWidget1", widget, parentWidget);
    };
    const onEnd1 = () => {
      emit("onEnd1");
    };
    return (_ctx, _cache) => {
      const _component_el_tab_pane = resolveComponent("el-tab-pane");
      const _component_el_tabs = resolveComponent("el-tabs");
      return openBlock(), createBlock(containerMask, {
        widget: __props.widget,
        "rule-form": __props.ruleForm,
        parent: __props.parent,
        "is-editor": __props.isEditor,
        "selected-widget": __props.selectedWidget
      }, {
        default: withCtx(() => {
          var _a2, _b;
          return [
            createVNode(_component_el_tabs, {
              type: "border-card",
              modelValue: unref(activeName),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(activeName) ? activeName.value = $event : activeName = $event),
              class: normalizeClass([((_a2 = __props.selectedWidget) == null ? void 0 : _a2.id) === ((_b = __props.widget) == null ? void 0 : _b.id) && __props.isEditor ? "select" : ""]),
              addable: __props.widget.addable,
              closable: __props.widget.closable,
              onTabAdd: addTabsHandler,
              onTabRemove: _cache[1] || (_cache[1] = ($event) => removeTabsHandler1($event))
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.widget.options.advanced.cols, (colWidget, colIdx) => {
                  return openBlock(), createBlock(_component_el_tab_pane, {
                    label: colWidget.name,
                    name: colWidget.id,
                    key: colIdx
                  }, {
                    default: withCtx(() => [
                      createVNode(tabsContent, {
                        colWidget,
                        "rule-form": __props.ruleForm[__props.widget.ruleFormKey] || [{}],
                        widget: __props.widget,
                        "prop-key": __props.propKey,
                        colIdx,
                        "selected-widget": __props.selectedWidget,
                        "is-editor": __props.isEditor,
                        onOnEnd: onEnd1,
                        onSelected: selected1,
                        onCopyWidget: copyWidget1,
                        onRemoveWidget: removeWidget1
                      }, null, 8, ["colWidget", "rule-form", "widget", "prop-key", "colIdx", "selected-widget", "is-editor"])
                    ]),
                    _: 2
                  }, 1032, ["label", "name"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["modelValue", "class", "addable", "closable"])
          ];
        }),
        _: 1
      }, 8, ["widget", "rule-form", "parent", "is-editor", "selected-widget"]);
    };
  }
};
var tabs = /* @__PURE__ */ _export_sfc$1(_sfc_main$i, [["__scopeId", "data-v-3b922a8a"]]);
tabs.install = (App) => {
  App.component(tabs.__name, tabs);
};
const _sfc_main$h = {};
function _sfc_render$1(_ctx, _cache) {
  return " \u6682\u672A\u652F\u6301 ";
}
var table = /* @__PURE__ */ _export_sfc$1(_sfc_main$h, [["render", _sfc_render$1]]);
table.install = (App) => {
  App.component(table.__name, table);
};
var widgetMask_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => '@charset "UTF-8";.primary-color[data-v-dd6246fc]{color:#409eff}.background-opacity[data-v-dd6246fc]{background:rgba(64,158,255,.6)}.stage-form .ghost[data-v-dd6246fc]{width:100%;content:"";font-size:0;height:3px;box-sizing:border-box;background:#409EFF;border:2px solid #409EFF;outline-width:0;padding:0;overflow:hidden}.el-form-item .el-rate[data-v-dd6246fc]{margin-top:8px}.el-form-item--medium .el-radio[data-v-dd6246fc]{line-height:36px!important}.el-form-item--medium .el-rate[data-v-dd6246fc]{margin-top:8px}.el-form-item--small .el-radio[data-v-dd6246fc]{line-height:32px!important}.el-form-item--small .el-rate[data-v-dd6246fc]{margin-top:6px}.el-form-item--mini .el-radio[data-v-dd6246fc]{line-height:28px!important}.el-form-item--mini .el-rate[data-v-dd6246fc]{margin-top:4px}.el-card[data-v-dd6246fc]{margin-top:3px;margin-bottom:3px}input[type=password][data-v-dd6246fc]::-ms-reveal{display:none}.auto-full-width.el-date-editor.el-input[data-v-dd6246fc],.auto-full-width.el-date-editor.el-input__inner[data-v-dd6246fc]{width:100%!important}[data-v-dd6246fc]::-webkit-scrollbar{width:8px;height:8px}[data-v-dd6246fc]::-webkit-scrollbar-track{width:8px;background:rgba(16,31,28,.1);-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em}[data-v-dd6246fc]::-webkit-scrollbar-thumb{background-color:#101f1c59;background-clip:padding-box;min-height:28px;-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em}[data-v-dd6246fc]::-webkit-scrollbar-thumb:hover{background-color:#101f1cd9}*[data-v-dd6246fc]{scrollbar-color:#e5e5e5 #f7f7f9;scrollbar-width:thin}.select[data-v-dd6246fc]{outline:1px solid #409EFF}.container-mask[data-v-dd6246fc]{position:relative;margin-bottom:2px}.container-mask-title[data-v-dd6246fc]{position:absolute;top:-2px;left:-2px;height:22px;line-height:22px;background:#409EFF;z-index:9}.container-mask-title .text[data-v-dd6246fc]{font-size:14px;font-style:normal;color:#fff;margin:4px;cursor:move}.container-mask-action[data-v-dd6246fc]{position:absolute;bottom:0;right:-2px;height:23px;line-height:28px;background:#409EFF;z-index:999}.copyIcon[data-v-dd6246fc]:hover,.deleteIcon[data-v-dd6246fc]:hover{cursor:pointer}\n')();
const _hoisted_1$6 = { class: "container-mask" };
const _hoisted_2$2 = {
  key: 0,
  class: "container-mask-action"
};
const _sfc_main$g = {
  __name: "widgetMask",
  props: ["widget", "copyWidget", "isEditor", "selectedWidget", "basicProp", "parent", "ruleForm", "propKey", "parentWidget"],
  emits: ["copyWidget", "removeWidget"],
  setup(__props, { emit }) {
    const props = __props;
    const copy = () => {
      emit("copyWidget", props.widget);
    };
    const delete1 = () => {
      var _a2;
      emit("removeWidget", props.widget, props.parentWidget);
      if (((_a2 = props.parent) == null ? void 0 : _a2.ruleFormKeyType) === "array") {
        props.ruleForm.forEach((rule, index2) => {
          if (Object.keys(rule).indexOf(props.widget.ruleFormKey) > -1) {
            props.ruleForm.splice(index2, 1);
          }
        });
      } else {
        props.widget.ruleFormKey && delete props.ruleForm[props.widget.ruleFormKey];
      }
    };
    return (_ctx, _cache) => {
      var _a2, _b, _c, _d;
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_svg_icon = resolveComponent("svg-icon");
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        (openBlock(), createBlock(_component_el_form_item, {
          class: normalizeClass([((_a2 = __props.selectedWidget) == null ? void 0 : _a2.id) === ((_b = __props.widget) == null ? void 0 : _b.id) && __props.isEditor ? "select" : ""]),
          label: __props.basicProp.label.value,
          rules: __props.widget.rules,
          prop: __props.propKey,
          key: __props.propKey
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["class", "label", "rules", "prop"])),
        ((_c = __props.selectedWidget) == null ? void 0 : _c.id) === ((_d = __props.widget) == null ? void 0 : _d.id) && __props.isEditor ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
          createVNode(_component_svg_icon, {
            "icon-class": "copy",
            class: "copyIcon",
            onClick: withModifiers(copy, ["stop"])
          }, null, 8, ["onClick"]),
          createVNode(_component_svg_icon, {
            "icon-class": "delete",
            class: "deleteIcon",
            onClick: withModifiers(delete1, ["stop"])
          }, null, 8, ["onClick"])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
};
var widgetMask = /* @__PURE__ */ _export_sfc$1(_sfc_main$g, [["__scopeId", "data-v-dd6246fc"]]);
const handleChangeEvent = (props, ElMessage2) => {
  var _a2, _b;
  const ruleFormKey = props.widget.options.basic.ruleFormKey.value;
  if (!ruleFormKey) {
    ElMessage2({
      message: "\u8BF7\u5148\u7ED1\u5B9A\u53C2\u6570key",
      type: "error",
      duration: 1e3
    });
    return;
  }
  if (((_a2 = props.paren) == null ? void 0 : _a2.ruleFormKeyType) === "object") {
    props.ruleForm[ruleFormKey] = props.widget.value;
  } else if (((_b = props.parent) == null ? void 0 : _b.ruleFormKeyType) === "array") {
    props.ruleForm.map((rule) => {
      if (Object.keys(rule).indexOf(ruleFormKey) > -1) {
        rule[ruleFormKey] = props.widget.value;
      }
    });
  } else {
    props.ruleForm[ruleFormKey] = props.widget.value;
  }
};
const watchEvent = (props, watch2) => {
  watch2(() => props.propKey, (value) => {
    var _a2, _b;
    const ruleFormKey = props.widget.options.basic.ruleFormKey.value;
    if (ruleFormKey && !props.ruleForm[ruleFormKey]) {
      console.log("\u76D1\u542C\u5230\u6570\u636E\u53D8\u5316", ruleFormKey);
      if (((_a2 = props.parent) == null ? void 0 : _a2.ruleFormKeyType) === "object") {
        props.ruleForm[ruleFormKey] = props.widget.value;
      } else if (((_b = props.parent) == null ? void 0 : _b.ruleFormKeyType) === "array") {
        const isExist = props.ruleForm.some((rule) => Object.keys(rule).indexOf(ruleFormKey) > -1);
        if (!isExist) {
          props.ruleForm.push({
            [ruleFormKey]: props.widget.value
          });
        }
      } else {
        props.ruleForm[ruleFormKey] = props.widget.value;
      }
    }
  }, {
    deep: true,
    immediate: true
  });
};
var input_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".hint[data-v-62352cca]{font-size:12px;color:#9b9b9b}\n")();
const _hoisted_1$5 = { class: "hint" };
const _sfc_main$f = {
  __name: "input",
  props: ["widget", "isEditor", "selectedWidget", "widgetType", "ruleForm", "propKey", "parent", "parentWidget"],
  setup(__props) {
    const props = __props;
    watchEvent(props, watch);
    return (_ctx, _cache) => {
      const _component_el_input = resolveComponent("el-input");
      return openBlock(), createBlock(widgetMask, {
        widget: __props.widget,
        "basic-prop": __props.widget.options.basic,
        "advanced-prop": __props.widget.options.advanced,
        "parent-widget": __props.parentWidget,
        "prop-key": __props.propKey,
        "rule-form": __props.ruleForm,
        parent: __props.parent,
        "is-editor": __props.isEditor,
        "selected-widget": __props.selectedWidget
      }, {
        default: withCtx(() => [
          createVNode(_component_el_input, {
            disabled: __props.widget.options.basic.disabled.value,
            placeholder: __props.widget.options.basic.defaultValue.value,
            type: __props.widget.options.basic.inputType.value,
            modelValue: __props.widget.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => __props.widget.value = $event),
            "show-word-limit": "",
            onChange: _cache[1] || (_cache[1] = ($event) => unref(handleChangeEvent)(props, unref(ElMessage)))
          }, null, 8, ["disabled", "placeholder", "type", "modelValue"]),
          createElementVNode("div", _hoisted_1$5, toDisplayString(__props.widget.options.basic.hint.value), 1)
        ]),
        _: 1
      }, 8, ["widget", "basic-prop", "advanced-prop", "parent-widget", "prop-key", "rule-form", "parent", "is-editor", "selected-widget"]);
    };
  }
};
var input = /* @__PURE__ */ _export_sfc$1(_sfc_main$f, [["__scopeId", "data-v-62352cca"]]);
input.install = (App) => {
  App.component(input.__name, input);
};
const _sfc_main$e = {
  __name: "switch",
  props: [
    "widget",
    "ruleForm",
    "propKey",
    "parent",
    "parentWidget",
    "isEditor",
    "selectedWidget"
  ],
  setup(__props) {
    const props = __props;
    watchEvent(props, watch);
    return (_ctx, _cache) => {
      const _component_el_switch = resolveComponent("el-switch");
      return openBlock(), createBlock(widgetMask, {
        widget: __props.widget,
        basicProp: __props.widget.options.basic,
        advancedProp: __props.widget.options.advanced,
        "parent-widget": __props.parentWidget,
        "prop-key": __props.propKey,
        "rule-form": __props.ruleForm,
        parent: __props.parent,
        "is-editor": __props.isEditor,
        "selected-widget": __props.selectedWidget
      }, {
        default: withCtx(() => [
          createVNode(_component_el_switch, {
            modelValue: __props.widget.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => __props.widget.value = $event),
            disabled: __props.widget.options.basic.disabled.value,
            onChange: _cache[1] || (_cache[1] = ($event) => unref(handleChangeEvent)(props, unref(ElMessage)))
          }, null, 8, ["modelValue", "disabled"])
        ]),
        _: 1
      }, 8, ["widget", "basicProp", "advancedProp", "parent-widget", "prop-key", "rule-form", "parent", "is-editor", "selected-widget"]);
    };
  }
};
_sfc_main$e.install = (App) => {
  App.component(_sfc_main$e.__name, _sfc_main$e);
};
const _sfc_main$d = {
  __name: "checkbox",
  props: ["widget", "isEditor", "selectedWidget", "widgetType", "ruleForm", "propKey", "parent", "parentWidget"],
  setup(__props) {
    const props = __props;
    watchEvent(props, watch);
    return (_ctx, _cache) => {
      const _component_el_checkbox = resolveComponent("el-checkbox");
      const _component_el_checkbox_group = resolveComponent("el-checkbox-group");
      return openBlock(), createBlock(widgetMask, {
        widget: __props.widget,
        basicProp: __props.widget.options.basic,
        advancedProp: __props.widget.options.advanced,
        "parent-widget": __props.parentWidget,
        "prop-key": __props.propKey,
        "rule-form": __props.ruleForm,
        parent: __props.parent,
        "is-editor": __props.isEditor,
        "selected-widget": __props.selectedWidget
      }, {
        default: withCtx(() => [
          createVNode(_component_el_checkbox_group, {
            modelValue: __props.widget.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => __props.widget.value = $event),
            onChange: _cache[1] || (_cache[1] = ($event) => unref(handleChangeEvent)(props, unref(ElMessage)))
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.widget.options.advanced.optionItems, (item, index2) => {
                return openBlock(), createBlock(_component_el_checkbox, {
                  key: index2,
                  label: item.value,
                  disabled: item.disabled,
                  size: __props.widget.options.basic.checkSize.value,
                  border: __props.widget.options.basic.attribute.options[2].value,
                  style: normalizeStyle(`margin-left:${__props.widget.options.basic["margin-left-right"].value}px`)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.label), 1)
                  ]),
                  _: 2
                }, 1032, ["label", "disabled", "size", "border", "style"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["widget", "basicProp", "advancedProp", "parent-widget", "prop-key", "rule-form", "parent", "is-editor", "selected-widget"]);
    };
  }
};
_sfc_main$d.install = (App) => {
  App.component(_sfc_main$d.__name, _sfc_main$d);
};
const useRegisterEvent = () => {
  const handleOnClick = (props, emit) => {
    const EVENTS = props.widget.options.events;
    if (!(EVENTS == null ? void 0 : EVENTS.onClick))
      return;
    new Function("props", "emit", "ElMessage", EVENTS == null ? void 0 : EVENTS.onClick.value)(props, emit, ElMessage);
  };
  const handleOnBeforeMount = (widget) => {
    const EVENTS = widget.options.events;
    if (!(EVENTS == null ? void 0 : EVENTS.onBeforeMount))
      return;
    let onBeforeMountFunc = new Function(EVENTS == null ? void 0 : EVENTS.onBeforeMount.value);
    onBeforeMountFunc.call(widget);
  };
  const handleOnMounted = (widget) => {
    const EVENTS = widget.options.events;
    if (!(EVENTS == null ? void 0 : EVENTS.onMounted))
      return;
    let onMountedFunc = new Function(EVENTS == null ? void 0 : EVENTS.onMounted.value);
    onMountedFunc.call(widget);
  };
  return {
    handleOnClick,
    handleOnBeforeMount,
    handleOnMounted
  };
};
const _sfc_main$c = {
  __name: "button",
  props: [
    "widget",
    "parentWidget",
    "ruleFormRef",
    "isEditor",
    "selectedWidget"
  ],
  emits: ["submitForm"],
  setup(__props, { emit }) {
    const props = __props;
    const { handleOnClick, handleOnBeforeMount, handleOnMounted } = useRegisterEvent();
    onBeforeMount(() => {
      handleOnBeforeMount(props.widget);
    });
    onMounted(() => {
      handleOnMounted(props.widget);
    });
    return (_ctx, _cache) => {
      const _component_el_button = resolveComponent("el-button");
      return openBlock(), createBlock(widgetMask, {
        widget: __props.widget,
        basicProp: __props.widget.options.basic,
        advancedProp: __props.widget.options.advanced,
        "parent-widget": __props.parentWidget,
        "is-editor": __props.isEditor,
        "selected-widget": __props.selectedWidget
      }, {
        default: withCtx(() => [
          createVNode(_component_el_button, {
            icon: __props.widget.options.advanced.value,
            type: __props.widget.options.basic.btnType.value,
            disabled: __props.widget.options.basic.disabled.value,
            size: __props.widget.options.basic.btnSize.value,
            round: __props.widget.options.advanced.btnRound.value,
            circle: __props.widget.options.advanced.btnCircle.value,
            plain: __props.widget.options.basic.plain.value,
            "auto-insert-space": __props.widget.options.basic.space.value,
            onClick: _cache[0] || (_cache[0] = ($event) => unref(handleOnClick)(unref(props), emit))
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(__props.widget.options.basic.text.value), 1)
            ]),
            _: 1
          }, 8, ["icon", "type", "disabled", "size", "round", "circle", "plain", "auto-insert-space"])
        ]),
        _: 1
      }, 8, ["widget", "basicProp", "advancedProp", "parent-widget", "is-editor", "selected-widget"]);
    };
  }
};
_sfc_main$c.install = (App) => {
  App.component(_sfc_main$c.__name, _sfc_main$c);
};
const _sfc_main$b = {
  __name: "select",
  props: ["widget", "isEditor", "selectedWidget", "widgetType", "ruleForm", "propKey", "parent", "parentWidget"],
  setup(__props) {
    const props = __props;
    const { basic, advanced } = props.widget.options;
    watchEvent(props, watch);
    return (_ctx, _cache) => {
      const _component_el_cascader = resolveComponent("el-cascader");
      return openBlock(), createBlock(widgetMask, {
        widget: __props.widget,
        "basic-prop": unref(basic),
        "advanced-prop": unref(advanced),
        "parent-widget": __props.parentWidget,
        "prop-key": __props.propKey,
        "rule-form": __props.ruleForm,
        parent: __props.parent,
        "is-editor": __props.isEditor,
        "selected-widget": __props.selectedWidget
      }, {
        default: withCtx(() => [
          createVNode(_component_el_cascader, {
            modelValue: __props.widget.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => __props.widget.value = $event),
            options: unref(advanced).data,
            disabled: unref(basic).disabled.value,
            placeholder: unref(basic).defaultValue.value,
            onChange: _cache[1] || (_cache[1] = ($event) => unref(handleChangeEvent)(props, unref(ElMessage)))
          }, null, 8, ["modelValue", "options", "disabled", "placeholder"])
        ]),
        _: 1
      }, 8, ["widget", "basic-prop", "advanced-prop", "parent-widget", "prop-key", "rule-form", "parent", "is-editor", "selected-widget"]);
    };
  }
};
_sfc_main$b.install = (App) => {
  App.component(_sfc_main$b.__name, _sfc_main$b);
};
const _sfc_main$a = {
  __name: "radio",
  props: ["widget", "isEditor", "selectedWidget", "widgetType", "ruleForm", "propKey", "parent", "parentWidget"],
  setup(__props) {
    const props = __props;
    watchEvent(props, watch);
    return (_ctx, _cache) => {
      const _component_el_radio = resolveComponent("el-radio");
      const _component_el_radio_group = resolveComponent("el-radio-group");
      return openBlock(), createBlock(widgetMask, {
        widget: __props.widget,
        basicProp: __props.widget.options.basic,
        advancedProp: __props.widget.options.advanced,
        "parent-widget": __props.parentWidget,
        "prop-key": __props.propKey,
        "rule-form": __props.ruleForm,
        parent: __props.parent,
        "is-editor": __props.isEditor,
        "selected-widget": __props.selectedWidget
      }, {
        default: withCtx(() => [
          createVNode(_component_el_radio_group, {
            modelValue: __props.widget.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => __props.widget.value = $event)
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.widget.options.advanced.optionItems, (item, index2) => {
                return openBlock(), createBlock(_component_el_radio, {
                  key: index2,
                  label: item.value,
                  disabled: item.disabled,
                  size: __props.widget.options.basic.radioSize.value,
                  border: __props.widget.options.basic.attribute.options[2].value,
                  onChange: _cache[0] || (_cache[0] = ($event) => unref(handleChangeEvent)(props, unref(ElMessage)))
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.label), 1)
                  ]),
                  _: 2
                }, 1032, ["label", "disabled", "size", "border"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["widget", "basicProp", "advancedProp", "parent-widget", "prop-key", "rule-form", "parent", "is-editor", "selected-widget"]);
    };
  }
};
_sfc_main$a.install = (App) => {
  App.component(_sfc_main$a.__name, _sfc_main$a);
};
const _sfc_main$9 = {
  __name: "textarea",
  props: ["widget", "isEditor", "selectedWidget", "widgetType", "ruleForm", "propKey", "parent", "parentWidget"],
  setup(__props) {
    const props = __props;
    watchEvent(props, watch);
    return (_ctx, _cache) => {
      const _component_el_input = resolveComponent("el-input");
      return openBlock(), createBlock(widgetMask, {
        widget: __props.widget,
        "basic-prop": __props.widget.options.basic,
        "advanced-prop": __props.widget.options.advanced,
        "parent-widget": __props.parentWidget,
        "prop-key": __props.propKey,
        "rule-form": __props.ruleForm,
        parent: __props.parent,
        "is-editor": __props.isEditor,
        "selected-widget": __props.selectedWidget
      }, {
        default: withCtx(() => [
          createVNode(_component_el_input, {
            type: "textarea",
            disabled: __props.widget.options.basic.disabled.value,
            placeholder: __props.widget.options.basic.defaultValue.value,
            maxlength: __props.widget.options.basic.maxlength.value,
            resize: __props.widget.options.basic.resizeDirection.value,
            modelValue: __props.widget.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => __props.widget.value = $event),
            onChange: _cache[1] || (_cache[1] = ($event) => unref(handleChangeEvent)(props, unref(ElMessage))),
            "show-word-limit": ""
          }, null, 8, ["disabled", "placeholder", "maxlength", "resize", "modelValue"])
        ]),
        _: 1
      }, 8, ["widget", "basic-prop", "advanced-prop", "parent-widget", "prop-key", "rule-form", "parent", "is-editor", "selected-widget"]);
    };
  }
};
_sfc_main$9.install = (App) => {
  App.component(_sfc_main$9.__name, _sfc_main$9);
};
const _hoisted_1$4 = { key: 0 };
const _sfc_main$8 = {
  __name: "divider",
  props: ["widget", "isEditor", "selectedWidget", "parentWidget"],
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_divider = resolveComponent("el-divider");
      return openBlock(), createBlock(widgetMask, {
        widget: __props.widget,
        "basic-prop": __props.widget.options.basic,
        "advanced-prop": __props.widget.options.advanced,
        "parent-widget": __props.parentWidget,
        "is-editor": __props.isEditor,
        "selected-widget": __props.selectedWidget,
        style: normalizeStyle(`top:${__props.widget.options.basic.moveDistance.value}px`)
      }, {
        default: withCtx(() => [
          createVNode(_component_el_divider, {
            direction: __props.widget.options.basic["divider-direction"].value,
            "border-style": __props.widget.options.basic["divider-style"].value,
            "content-position": __props.widget.options.basic["divider-position"].value,
            style: normalizeStyle(__props.widget.options.basic.isMoveDivider.value ? `margin:0` : ``)
          }, {
            default: withCtx(() => [
              __props.widget.options.basic["divider-direction"].value === "horizontal" ? (openBlock(), createElementBlock("span", _hoisted_1$4, toDisplayString(__props.widget.options.basic["divider-content"].value), 1)) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["direction", "border-style", "content-position", "style"])
        ]),
        _: 1
      }, 8, ["widget", "basic-prop", "advanced-prop", "parent-widget", "is-editor", "selected-widget", "style"]);
    };
  }
};
_sfc_main$8.install = (App) => {
  App.component(_sfc_main$8.__name, _sfc_main$8);
};
var cellPhone_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".phone-content[data-v-716845ec]{width:100%;display:flex}.prefix-select[data-v-716845ec]{margin-right:10px}\n")();
const _withScopeId = (n) => (pushScopeId("data-v-716845ec"), n = n(), popScopeId(), n);
const _hoisted_1$3 = { class: "phone-content" };
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", null, "+", -1));
const _hoisted_3$1 = { style: { "float": "left" } };
const _hoisted_4$1 = { style: { "float": "right", "color": "var(--el-text-color-secondary)", "font-size": "13px" } };
const _sfc_main$7 = {
  __name: "cellPhone",
  props: [
    "widget",
    "widgetType",
    "ruleForm",
    "propKey",
    "parent",
    "parentWidget",
    "isEditor",
    "selectedWidget"
  ],
  setup(__props) {
    const props = __props;
    watchEvent(props, watch);
    const setRules = () => {
    };
    return (_ctx, _cache) => {
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      const _component_el_input = resolveComponent("el-input");
      return openBlock(), createBlock(widgetMask, {
        widget: __props.widget,
        "basic-prop": __props.widget.options.basic,
        "advanced-prop": __props.widget.options.advanced,
        "parent-widget": __props.parentWidget,
        "prop-key": __props.propKey,
        "rule-form": __props.ruleForm,
        parent: __props.parent,
        "is-editor": __props.isEditor,
        "selected-widget": __props.selectedWidget
      }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1$3, [
            createVNode(_component_el_select, {
              modelValue: __props.widget.options.basic.prefix.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => __props.widget.options.basic.prefix.value = $event),
              disabled: __props.widget.options.basic.disabled.value,
              class: "prefix-select",
              onChange: _cache[1] || (_cache[1] = ($event) => setRules())
            }, {
              prefix: withCtx(() => [
                _hoisted_2$1
              ]),
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.widget.options.basic.prefix.options, (item) => {
                  return openBlock(), createBlock(_component_el_option, {
                    key: item.value,
                    label: item.label,
                    value: item.value
                  }, {
                    default: withCtx(() => [
                      createElementVNode("span", _hoisted_3$1, toDisplayString(item.label), 1),
                      createElementVNode("span", _hoisted_4$1, toDisplayString(item.valueText), 1)
                    ]),
                    _: 2
                  }, 1032, ["label", "value"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["modelValue", "disabled"]),
            createVNode(_component_el_input, {
              oninput: "value=value.replace(/[^\\d]/g,'')",
              maxLength: "11",
              disabled: __props.widget.options.basic.disabled.value,
              placeholder: __props.widget.options.basic.defaultValue.value,
              modelValue: __props.widget.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => __props.widget.value = $event),
              onBlur: _cache[3] || (_cache[3] = ($event) => setRules()),
              onChange: _cache[4] || (_cache[4] = ($event) => unref(handleChangeEvent)(props, unref(ElMessage)))
            }, null, 8, ["disabled", "placeholder", "modelValue"])
          ])
        ]),
        _: 1
      }, 8, ["widget", "basic-prop", "advanced-prop", "parent-widget", "prop-key", "rule-form", "parent", "is-editor", "selected-widget"]);
    };
  }
};
var cellPhone = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["__scopeId", "data-v-716845ec"]]);
cellPhone.install = (App) => {
  App.component(cellPhone.__name, cellPhone);
};
const _hoisted_1$2 = { style: { "color": "red" } };
const _sfc_main$6 = {
  __name: "staticText",
  props: ["widget", "isEditor", "selectedWidget", "parentWidget"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(widgetMask, {
        widget: __props.widget,
        "basic-prop": __props.widget.options.basic,
        "advanced-prop": __props.widget.options.advanced,
        "parent-widget": __props.parentWidget,
        "is-editor": __props.isEditor,
        "selected-widget": __props.selectedWidget
      }, {
        default: withCtx(() => [
          createElementVNode("pre", {
            style: normalizeStyle({
              "width": "100%",
              "margin": "inherit",
              "line-height": `${__props.widget.options.basic["static-text-line-height"].value}`,
              "text-align": `${__props.widget.options.basic.alignment.value}`,
              "font-size": `${__props.widget.options.basic["font-size"].value}px`,
              "color": `${__props.widget.options.basic["font-color"].value}`,
              "font-style": `${__props.widget.options.basic["font-style"].options[1].value ? "italic" : "normal"}`,
              "font-weight": `${__props.widget.options.basic["font-style"].options[0].value ? "bold" : "normal"}`,
              "text-decoration": `${__props.widget.options.basic["font-style"].options[2].value ? "underline" : "none"}`
            })
          }, [
            withDirectives(createElementVNode("span", _hoisted_1$2, "*", 512), [
              [vShow, __props.widget.options.basic.addRequired.value]
            ]),
            createElementVNode("span", null, toDisplayString(__props.widget.options.basic.textareaDefaultValue.value), 1)
          ], 4)
        ]),
        _: 1
      }, 8, ["widget", "basic-prop", "advanced-prop", "parent-widget", "is-editor", "selected-widget"]);
    };
  }
};
_sfc_main$6.install = (App) => {
  App.component(_sfc_main$6.__name, _sfc_main$6);
};
var zhCn$1 = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var zhCn2 = {
    name: "zh-cn",
    el: {
      colorpicker: {
        confirm: "\u786E\u5B9A",
        clear: "\u6E05\u7A7A"
      },
      datepicker: {
        now: "\u6B64\u523B",
        today: "\u4ECA\u5929",
        cancel: "\u53D6\u6D88",
        clear: "\u6E05\u7A7A",
        confirm: "\u786E\u5B9A",
        selectDate: "\u9009\u62E9\u65E5\u671F",
        selectTime: "\u9009\u62E9\u65F6\u95F4",
        startDate: "\u5F00\u59CB\u65E5\u671F",
        startTime: "\u5F00\u59CB\u65F6\u95F4",
        endDate: "\u7ED3\u675F\u65E5\u671F",
        endTime: "\u7ED3\u675F\u65F6\u95F4",
        prevYear: "\u524D\u4E00\u5E74",
        nextYear: "\u540E\u4E00\u5E74",
        prevMonth: "\u4E0A\u4E2A\u6708",
        nextMonth: "\u4E0B\u4E2A\u6708",
        year: "\u5E74",
        month1: "1 \u6708",
        month2: "2 \u6708",
        month3: "3 \u6708",
        month4: "4 \u6708",
        month5: "5 \u6708",
        month6: "6 \u6708",
        month7: "7 \u6708",
        month8: "8 \u6708",
        month9: "9 \u6708",
        month10: "10 \u6708",
        month11: "11 \u6708",
        month12: "12 \u6708",
        weeks: {
          sun: "\u65E5",
          mon: "\u4E00",
          tue: "\u4E8C",
          wed: "\u4E09",
          thu: "\u56DB",
          fri: "\u4E94",
          sat: "\u516D"
        },
        months: {
          jan: "\u4E00\u6708",
          feb: "\u4E8C\u6708",
          mar: "\u4E09\u6708",
          apr: "\u56DB\u6708",
          may: "\u4E94\u6708",
          jun: "\u516D\u6708",
          jul: "\u4E03\u6708",
          aug: "\u516B\u6708",
          sep: "\u4E5D\u6708",
          oct: "\u5341\u6708",
          nov: "\u5341\u4E00\u6708",
          dec: "\u5341\u4E8C\u6708"
        }
      },
      select: {
        loading: "\u52A0\u8F7D\u4E2D",
        noMatch: "\u65E0\u5339\u914D\u6570\u636E",
        noData: "\u65E0\u6570\u636E",
        placeholder: "\u8BF7\u9009\u62E9"
      },
      cascader: {
        noMatch: "\u65E0\u5339\u914D\u6570\u636E",
        loading: "\u52A0\u8F7D\u4E2D",
        placeholder: "\u8BF7\u9009\u62E9",
        noData: "\u6682\u65E0\u6570\u636E"
      },
      pagination: {
        goto: "\u524D\u5F80",
        pagesize: "\u6761/\u9875",
        total: "\u5171 {total} \u6761",
        pageClassifier: "\u9875",
        deprecationWarning: "\u4F60\u4F7F\u7528\u4E86\u4E00\u4E9B\u5DF2\u88AB\u5E9F\u5F03\u7684\u7528\u6CD5\uFF0C\u8BF7\u53C2\u8003 el-pagination \u7684\u5B98\u65B9\u6587\u6863"
      },
      messagebox: {
        title: "\u63D0\u793A",
        confirm: "\u786E\u5B9A",
        cancel: "\u53D6\u6D88",
        error: "\u8F93\u5165\u7684\u6570\u636E\u4E0D\u5408\u6CD5!"
      },
      upload: {
        deleteTip: "\u6309 delete \u952E\u53EF\u5220\u9664",
        delete: "\u5220\u9664",
        preview: "\u67E5\u770B\u56FE\u7247",
        continue: "\u7EE7\u7EED\u4E0A\u4F20"
      },
      table: {
        emptyText: "\u6682\u65E0\u6570\u636E",
        confirmFilter: "\u7B5B\u9009",
        resetFilter: "\u91CD\u7F6E",
        clearFilter: "\u5168\u90E8",
        sumText: "\u5408\u8BA1"
      },
      tree: {
        emptyText: "\u6682\u65E0\u6570\u636E"
      },
      transfer: {
        noMatch: "\u65E0\u5339\u914D\u6570\u636E",
        noData: "\u65E0\u6570\u636E",
        titles: ["\u5217\u8868 1", "\u5217\u8868 2"],
        filterPlaceholder: "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",
        noCheckedFormat: "\u5171 {total} \u9879",
        hasCheckedFormat: "\u5DF2\u9009 {checked}/{total} \u9879"
      },
      image: {
        error: "\u52A0\u8F7D\u5931\u8D25"
      },
      pageHeader: {
        title: "\u8FD4\u56DE"
      },
      popconfirm: {
        confirmButtonText: "\u786E\u5B9A",
        cancelButtonText: "\u53D6\u6D88"
      }
    }
  };
  exports["default"] = zhCn2;
})(zhCn$1);
var zhCn = /* @__PURE__ */ getDefaultExportFromCjs(zhCn$1);
const _sfc_main$5 = {
  __name: "time",
  props: [
    "widget",
    "parentWidget"
  ],
  setup(__props) {
    const locale = zhCn;
    return (_ctx, _cache) => {
      const _component_el_time_picker = resolveComponent("el-time-picker");
      const _component_el_config_provider = resolveComponent("el-config-provider");
      return openBlock(), createBlock(widgetMask, {
        widget: __props.widget,
        basicProp: __props.widget.options.basic,
        advancedProp: __props.widget.options.advanced,
        "parent-widget": __props.parentWidget
      }, {
        default: withCtx(() => [
          createVNode(_component_el_config_provider, { locale: unref(locale) }, {
            default: withCtx(() => [
              createVNode(_component_el_time_picker, {
                clearable: "",
                "arrow-control": "",
                placeholder: __props.widget.options.basic.placeholder.value,
                disabled: __props.widget.options.basic.attribute.options[0].value,
                readonly: __props.widget.options.basic.attribute.options[1].value,
                editable: __props.widget.options.basic.attribute.options[2].value,
                size: __props.widget.options.basic.dateSize.value,
                "is-range": __props.widget.options.advanced.isRange.value,
                "start-placeholder": __props.widget.options.advanced.startPlaceholder.value,
                "end-placeholder": __props.widget.options.advanced.endPlaceholder.value,
                "range-separator": __props.widget.options.advanced.rangeSeparator.value,
                modelValue: __props.widget.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => __props.widget.value = $event)
              }, null, 8, ["placeholder", "disabled", "readonly", "editable", "size", "is-range", "start-placeholder", "end-placeholder", "range-separator", "modelValue"])
            ]),
            _: 1
          }, 8, ["locale"])
        ]),
        _: 1
      }, 8, ["widget", "basicProp", "advancedProp", "parent-widget"]);
    };
  }
};
_sfc_main$5.install = (App) => {
  App.component(_sfc_main$5.__name, _sfc_main$5);
};
const _sfc_main$4 = {
  __name: "dateTimeRange",
  props: [
    "widget",
    "parentWidget"
  ],
  setup(__props) {
    const locale = zhCn;
    return (_ctx, _cache) => {
      const _component_el_date_picker = resolveComponent("el-date-picker");
      const _component_el_config_provider = resolveComponent("el-config-provider");
      return openBlock(), createBlock(widgetMask, {
        widget: __props.widget,
        basicProp: __props.widget.options.basic,
        advancedProp: __props.widget.options.advanced,
        "parent-widget": __props.parentWidget
      }, {
        default: withCtx(() => [
          createVNode(_component_el_config_provider, { locale: unref(locale) }, {
            default: withCtx(() => [
              createVNode(_component_el_date_picker, {
                clearable: "",
                placeholder: __props.widget.options.basic.placeholder.value,
                "range-separator": __props.widget.options.advanced.rangeSeparator.value,
                "start-placeholder": __props.widget.options.advanced.startPlaceholder.value,
                "end-placeholder": __props.widget.options.advanced.endPlaceholder.value,
                type: __props.widget.options.advanced.value,
                disabled: __props.widget.options.basic.attribute.options[0].value,
                readonly: __props.widget.options.basic.attribute.options[1].value,
                editable: __props.widget.options.basic.attribute.options[2].value,
                size: __props.widget.options.basic.dateSize.value,
                modelValue: __props.widget.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => __props.widget.value = $event)
              }, null, 8, ["placeholder", "range-separator", "start-placeholder", "end-placeholder", "type", "disabled", "readonly", "editable", "size", "modelValue"])
            ]),
            _: 1
          }, 8, ["locale"]),
          createElementVNode("span", null, toDisplayString(__props.widget.value), 1)
        ]),
        _: 1
      }, 8, ["widget", "basicProp", "advancedProp", "parent-widget"]);
    };
  }
};
_sfc_main$4.install = (App) => {
  App.component(_sfc_main$4.__name, _sfc_main$4);
};
const _sfc_main$3 = {
  __name: "repeatButton",
  props: [
    "widget",
    "parentWidget",
    "advancedProp"
  ],
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_checkbox_button = resolveComponent("el-checkbox-button");
      const _component_el_checkbox_group = resolveComponent("el-checkbox-group");
      return openBlock(), createBlock(widgetMask, {
        widget: __props.widget,
        basicProp: __props.widget.options.basic,
        advancedProp: __props.widget.options.advanced,
        "parent-widget": __props.parentWidget
      }, {
        default: withCtx(() => [
          createVNode(_component_el_checkbox_group, {
            size: __props.widget.options.basic.checkSize.value,
            modelValue: __props.widget.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => __props.widget.value = $event)
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.widget.options.advanced.optionItems, (item, index2) => {
                return openBlock(), createBlock(_component_el_checkbox_button, {
                  key: index2,
                  label: item.label,
                  disabled: item.disabled
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.label), 1)
                  ]),
                  _: 2
                }, 1032, ["label", "disabled"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["size", "modelValue"])
        ]),
        _: 1
      }, 8, ["widget", "basicProp", "advancedProp", "parent-widget"]);
    };
  }
};
_sfc_main$3.install = (App) => {
  App.component(_sfc_main$3.__name, _sfc_main$3);
};
const _sfc_main$2 = {
  __name: "onlyButton",
  props: [
    "widget",
    "parentWidget",
    "advancedProp"
  ],
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_radio_button = resolveComponent("el-radio-button");
      const _component_el_radio_group = resolveComponent("el-radio-group");
      return openBlock(), createBlock(widgetMask, {
        widget: __props.widget,
        basicProp: __props.widget.options.basic,
        advancedProp: __props.widget.options.advanced,
        "parent-widget": __props.parentWidget
      }, {
        default: withCtx(() => [
          createVNode(_component_el_radio_group, {
            size: __props.widget.options.basic.radioSize.value,
            modelValue: __props.widget.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => __props.widget.value = $event)
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.widget.options.advanced.optionItems, (item, index2) => {
                return openBlock(), createBlock(_component_el_radio_button, {
                  key: index2,
                  label: item.label,
                  value: item.value,
                  disabled: item.disabled
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.label), 1)
                  ]),
                  _: 2
                }, 1032, ["label", "value", "disabled"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["size", "modelValue"])
        ]),
        _: 1
      }, 8, ["widget", "basicProp", "advancedProp", "parent-widget"]);
    };
  }
};
_sfc_main$2.install = (App) => {
  App.component(_sfc_main$2.__name, _sfc_main$2);
};
const _hoisted_1$1 = { key: 0 };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u8BF7\u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u5904\uFF0C\u6216\u8005 ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u8BF7\u70B9\u51FB\u6B64\u5904\u4E0A\u4F20");
const _hoisted_5 = { key: 1 };
const _hoisted_6 = ["src"];
const _sfc_main$1 = {
  __name: "upload",
  props: ["widget", "parentWidget"],
  setup(__props) {
    const dialogImageUrl = ref("");
    const dialogVisible = ref(false);
    const handlePictureCardPreview = (uploadFile) => {
      dialogImageUrl.value = uploadFile.url;
      dialogVisible.value = true;
    };
    return (_ctx, _cache) => {
      const _component_svg_icon = resolveComponent("svg-icon");
      const _component_el_link = resolveComponent("el-link");
      const _component_el_dialog = resolveComponent("el-dialog");
      const _component_el_upload = resolveComponent("el-upload");
      return openBlock(), createBlock(widgetMask, {
        widget: __props.widget,
        "basic-prop": __props.widget.options.basic,
        "advanced-prop": __props.widget.options.advanced,
        "parent-widget": __props.parentWidget
      }, {
        default: withCtx(() => [
          createVNode(_component_el_upload, {
            "file-list": __props.widget.options.basic.maxUpLoadNumber.upLoadList,
            "onUpdate:file-list": _cache[1] || (_cache[1] = ($event) => __props.widget.options.basic.maxUpLoadNumber.upLoadList = $event),
            class: "upload-demo",
            action: __props.widget.options.basic.url.value,
            multiple: __props.widget.options.basic.multiple.value,
            limit: __props.widget.options.basic.maxUpLoadNumber.value,
            "list-type": __props.widget.options.basic.fileListType.value,
            "on-preview": handlePictureCardPreview,
            drag: __props.widget.options.basic.drag.value,
            disabled: __props.widget.options.basic.disabled.value
          }, {
            default: withCtx(() => [
              __props.widget.options.basic.drag.value ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
                createVNode(_component_svg_icon, {
                  "icon-class": "upload",
                  style: { "font-size": "3rem" }
                }),
                __props.widget.options.basic.fileListType.value !== "picture-card" ? (openBlock(), createElementBlock("div", _hoisted_2, [
                  _hoisted_3,
                  createVNode(_component_el_link, {
                    type: "primary",
                    underline: false
                  }, {
                    default: withCtx(() => [
                      _hoisted_4
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true)
              ])) : (openBlock(), createElementBlock("div", _hoisted_5, toDisplayString(__props.widget.options.basic.upLoadBtnText.value), 1)),
              createVNode(_component_el_dialog, {
                modelValue: dialogVisible.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dialogVisible.value = $event)
              }, {
                default: withCtx(() => [
                  createElementVNode("img", {
                    style: { "width": "100%" },
                    src: dialogImageUrl.value,
                    alt: "Preview Image"
                  }, null, 8, _hoisted_6)
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["file-list", "action", "multiple", "limit", "list-type", "drag", "disabled"])
        ]),
        _: 1
      }, 8, ["widget", "basic-prop", "advanced-prop", "parent-widget"]);
    };
  }
};
_sfc_main$1.install = (App) => {
  App.component(_sfc_main$1.__name, _sfc_main$1);
};
var t = Object.assign;
const l = { essential: [[{ header: [1, 2, 3, 4, 5, 6, false] }], ["bold", "italic", "underline"], [{ list: "ordered" }, { list: "bullet" }, { align: [] }], ["blockquote", "code-block", "link"], [{ color: [] }, "clean"]], minimal: [[{ header: 1 }, { header: 2 }], ["bold", "italic", "underline"], [{ list: "ordered" }, { list: "bullet" }, { align: [] }]], full: [["bold", "italic", "underline", "strike"], ["blockquote", "code-block"], [{ header: 1 }, { header: 2 }], [{ list: "ordered" }, { list: "bullet" }], [{ script: "sub" }, { script: "super" }], [{ indent: "-1" }, { indent: "+1" }], [{ direction: "rtl" }], [{ size: ["small", false, "large", "huge"] }], [{ header: [1, 2, 3, 4, 5, 6, false] }], [{ color: [] }, { background: [] }], [{ font: [] }], [{ align: [] }], ["link", "video", "image"], ["clean"]] };
var a = defineComponent({ name: "QuillEditor", props: { content: { type: [String, Object], default: {} }, enable: { type: Boolean, default: true }, readOnly: { type: Boolean, default: false }, placeholder: { type: String, required: false }, theme: { type: String, default: "snow", validator: (t4) => ["snow", "bubble", ""].includes(t4) }, toolbar: { type: [String, Array, Object], required: false, validator: (t4) => typeof t4 != "string" || t4 === "" || (t4.charAt(0) === "#" || Object.keys(l).indexOf(t4) !== -1) }, options: { type: Object, required: false }, globalOptions: { type: Object, required: false, default: {} } }, emits: ["textChange", "selectionChange", "editorChange", "update:content", "focus", "blur", "ready"], setup: (t4, e) => {
  let s, a2;
  onMounted(() => {
    c2();
  }), onBeforeUnmount(() => {
    s = null;
  });
  const u2 = ref(), c2 = () => {
    var n;
    u2.value && (a2 = h2(), s = new sn(u2.value, a2), typeof t4.content == "string" ? (s.setText(t4.content), e.emit("update:content", s.getContents())) : s.setContents(t4.content), s.on("text-change", f2), s.on("selection-change", d2), s.on("editor-change", y2), t4.theme !== "bubble" && u2.value.classList.remove("ql-bubble"), t4.theme !== "snow" && u2.value.classList.remove("ql-snow"), (n = s.getModule("toolbar")) == null || n.container.addEventListener("mousedown", (t5) => {
      t5.preventDefault();
    }), e.emit("ready", s));
  }, h2 = () => {
    const e2 = {};
    return t4.theme !== "" && (e2.theme = t4.theme), t4.readOnly && (e2.readOnly = t4.readOnly), t4.placeholder && (e2.placeholder = t4.placeholder), t4.toolbar && t4.toolbar !== "" && (e2.modules = { toolbar: (() => {
      if (typeof t4.toolbar == "object")
        return t4.toolbar;
      if (typeof t4.toolbar == "string") {
        return t4.toolbar.charAt(0) === "#" ? t4.toolbar : l[t4.toolbar];
      }
    })() }), Object.assign({}, t4.globalOptions, t4.options, e2);
  }, f2 = (t5, n, r) => {
    e.emit("update:content", s == null ? void 0 : s.getContents()), e.emit("textChange", { delta: t5, oldContents: n, source: r });
  }, p2 = ref(), d2 = (t5, n, r) => {
    p2.value = !!(s == null ? void 0 : s.hasFocus()), e.emit("selectionChange", { range: t5, oldRange: n, source: r });
  };
  watch(p2, (t5) => {
    t5 ? e.emit("focus", u2) : e.emit("blur", u2);
  });
  const y2 = (t5, ...n) => {
    t5 === "text-change" ? e.emit("editorChange", { name: t5, delta: n[0], oldContents: n[1], source: n[2] }) : t5 === "selection-change" && e.emit("editorChange", { name: t5, range: n[0], oldRange: n[1], source: n[2] });
  };
  return watch(() => t4.content, (e2, n) => {
    s && (e2 && e2 !== t4.content ? typeof e2 == "string" ? s.setText(t4.content) : s.setContents(e2) : e2 || s.setText(""));
  }), watch(() => t4.enable, (t5, e2) => {
    s && s.enable(t5);
  }), { editor: u2, getEditor: () => u2.value, getToolbar: () => {
    var t5;
    return (t5 = s == null ? void 0 : s.getModule("toolbar")) == null ? void 0 : t5.container;
  }, getQuill: () => {
    if (s)
      return s;
    throw `The quill editor hasn't been instantiated yet, 
                  make sure to call this method when the editor ready
                  or use v-on:ready="onReady(quill)" event instead.`;
  }, getHTML: () => {
    var t5;
    return (t5 = s == null ? void 0 : s.root.innerHTML) != null ? t5 : "";
  }, setHTML: (t5) => {
    s == null || s.clipboard.dangerouslyPasteHTML(t5);
  }, reinit: () => {
    var t5;
    !e.slots.toolbar && s && ((t5 = s.getModule("toolbar")) == null || t5.container.remove()), c2();
  } };
}, inheritAttrs: false, render() {
  var e, n;
  return [(n = (e = this.$slots).toolbar) == null ? void 0 : n.call(e), h$1("div", t({ ref: "editor" }, this.$attrs))];
} }), u = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function c(t4) {
  return t4 && t4.__esModule && Object.prototype.hasOwnProperty.call(t4, "default") ? t4.default : t4;
}
function h(t4) {
  var e = { exports: {} };
  return t4(e, e.exports), e.exports;
}
var f = c(h(function(t4, e) {
  var n;
  n = function() {
    return function(t5) {
      var e2 = {};
      function n2(r) {
        if (e2[r])
          return e2[r].exports;
        var o = e2[r] = { i: r, l: false, exports: {} };
        return t5[r].call(o.exports, o, o.exports, n2), o.l = true, o.exports;
      }
      return n2.m = t5, n2.c = e2, n2.d = function(t6, e3, r) {
        n2.o(t6, e3) || Object.defineProperty(t6, e3, { configurable: false, enumerable: true, get: r });
      }, n2.n = function(t6) {
        var e3 = t6 && t6.__esModule ? function() {
          return t6.default;
        } : function() {
          return t6;
        };
        return n2.d(e3, "a", e3), e3;
      }, n2.o = function(t6, e3) {
        return Object.prototype.hasOwnProperty.call(t6, e3);
      }, n2.p = "", n2(n2.s = 9);
    }([function(t5, e2, n2) {
      var r, o = this && this.__extends || (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, e3) {
        t6.__proto__ = e3;
      } || function(t6, e3) {
        for (var n3 in e3)
          e3.hasOwnProperty(n3) && (t6[n3] = e3[n3]);
      }, function(t6, e3) {
        function n3() {
          this.constructor = t6;
        }
        r(t6, e3), t6.prototype = e3 === null ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
      });
      Object.defineProperty(e2, "__esModule", { value: true });
      var i = function(t6) {
        function e3(e4) {
          var n3 = this;
          return e4 = "[Parchment] " + e4, (n3 = t6.call(this, e4) || this).message = e4, n3.name = n3.constructor.name, n3;
        }
        return o(e3, t6), e3;
      }(Error);
      e2.ParchmentError = i;
      var s, l2, a2 = {}, u2 = {}, c2 = {}, h2 = {};
      function f2(t6, e3) {
        var n3;
        if (e3 === void 0 && (e3 = s.ANY), typeof t6 == "string")
          n3 = h2[t6] || a2[t6];
        else if (t6 instanceof Text || t6.nodeType === Node.TEXT_NODE)
          n3 = h2.text;
        else if (typeof t6 == "number")
          t6 & s.LEVEL & s.BLOCK ? n3 = h2.block : t6 & s.LEVEL & s.INLINE && (n3 = h2.inline);
        else if (t6 instanceof HTMLElement) {
          var r2 = (t6.getAttribute("class") || "").split(/\s+/);
          for (var o2 in r2)
            if (n3 = u2[r2[o2]])
              break;
          n3 = n3 || c2[t6.tagName];
        }
        return n3 == null ? null : e3 & s.LEVEL & n3.scope && e3 & s.TYPE & n3.scope ? n3 : null;
      }
      e2.DATA_KEY = "__blot", (l2 = s = e2.Scope || (e2.Scope = {}))[l2.TYPE = 3] = "TYPE", l2[l2.LEVEL = 12] = "LEVEL", l2[l2.ATTRIBUTE = 13] = "ATTRIBUTE", l2[l2.BLOT = 14] = "BLOT", l2[l2.INLINE = 7] = "INLINE", l2[l2.BLOCK = 11] = "BLOCK", l2[l2.BLOCK_BLOT = 10] = "BLOCK_BLOT", l2[l2.INLINE_BLOT = 6] = "INLINE_BLOT", l2[l2.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", l2[l2.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", l2[l2.ANY = 15] = "ANY", e2.create = function(t6, e3) {
        var n3 = f2(t6);
        if (n3 == null)
          throw new i("Unable to create " + t6 + " blot");
        var r2 = n3, o2 = t6 instanceof Node || t6.nodeType === Node.TEXT_NODE ? t6 : r2.create(e3);
        return new r2(o2, e3);
      }, e2.find = function t6(n3, r2) {
        return r2 === void 0 && (r2 = false), n3 == null ? null : n3[e2.DATA_KEY] != null ? n3[e2.DATA_KEY].blot : r2 ? t6(n3.parentNode, r2) : null;
      }, e2.query = f2, e2.register = function t6() {
        for (var e3 = [], n3 = 0; n3 < arguments.length; n3++)
          e3[n3] = arguments[n3];
        if (e3.length > 1)
          return e3.map(function(e4) {
            return t6(e4);
          });
        var r2 = e3[0];
        if (typeof r2.blotName != "string" && typeof r2.attrName != "string")
          throw new i("Invalid definition");
        if (r2.blotName === "abstract")
          throw new i("Cannot register abstract class");
        if (h2[r2.blotName || r2.attrName] = r2, typeof r2.keyName == "string")
          a2[r2.keyName] = r2;
        else if (r2.className != null && (u2[r2.className] = r2), r2.tagName != null) {
          Array.isArray(r2.tagName) ? r2.tagName = r2.tagName.map(function(t7) {
            return t7.toUpperCase();
          }) : r2.tagName = r2.tagName.toUpperCase();
          var o2 = Array.isArray(r2.tagName) ? r2.tagName : [r2.tagName];
          o2.forEach(function(t7) {
            c2[t7] != null && r2.className != null || (c2[t7] = r2);
          });
        }
        return r2;
      };
    }, function(t5, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r = n2(0), o = function() {
        function t6(t7, e3, n3) {
          n3 === void 0 && (n3 = {}), this.attrName = t7, this.keyName = e3;
          var o2 = r.Scope.TYPE & r.Scope.ATTRIBUTE;
          n3.scope != null ? this.scope = n3.scope & r.Scope.LEVEL | o2 : this.scope = r.Scope.ATTRIBUTE, n3.whitelist != null && (this.whitelist = n3.whitelist);
        }
        return t6.keys = function(t7) {
          return [].map.call(t7.attributes, function(t8) {
            return t8.name;
          });
        }, t6.prototype.add = function(t7, e3) {
          return !!this.canAdd(t7, e3) && (t7.setAttribute(this.keyName, e3), true);
        }, t6.prototype.canAdd = function(t7, e3) {
          return r.query(t7, r.Scope.BLOT & (this.scope | r.Scope.TYPE)) != null && (this.whitelist == null || (typeof e3 == "string" ? this.whitelist.indexOf(e3.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(e3) > -1));
        }, t6.prototype.remove = function(t7) {
          t7.removeAttribute(this.keyName);
        }, t6.prototype.value = function(t7) {
          var e3 = t7.getAttribute(this.keyName);
          return this.canAdd(t7, e3) && e3 ? e3 : "";
        }, t6;
      }();
      e2.default = o;
    }, function(t5, e2, n2) {
      var r, o = this && this.__extends || (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, e3) {
        t6.__proto__ = e3;
      } || function(t6, e3) {
        for (var n3 in e3)
          e3.hasOwnProperty(n3) && (t6[n3] = e3[n3]);
      }, function(t6, e3) {
        function n3() {
          this.constructor = t6;
        }
        r(t6, e3), t6.prototype = e3 === null ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
      });
      Object.defineProperty(e2, "__esModule", { value: true });
      var i = n2(11), s = n2(5), l2 = n2(0), a2 = function(t6) {
        function e3(e4) {
          var n3 = t6.call(this, e4) || this;
          return n3.build(), n3;
        }
        return o(e3, t6), e3.prototype.appendChild = function(t7) {
          this.insertBefore(t7);
        }, e3.prototype.attach = function() {
          t6.prototype.attach.call(this), this.children.forEach(function(t7) {
            t7.attach();
          });
        }, e3.prototype.build = function() {
          var t7 = this;
          this.children = new i.default(), [].slice.call(this.domNode.childNodes).reverse().forEach(function(e4) {
            try {
              var n3 = u2(e4);
              t7.insertBefore(n3, t7.children.head || void 0);
            } catch (r2) {
              if (r2 instanceof l2.ParchmentError)
                return;
              throw r2;
            }
          });
        }, e3.prototype.deleteAt = function(t7, e4) {
          if (t7 === 0 && e4 === this.length())
            return this.remove();
          this.children.forEachAt(t7, e4, function(t8, e5, n3) {
            t8.deleteAt(e5, n3);
          });
        }, e3.prototype.descendant = function(t7, n3) {
          var r2 = this.children.find(n3), o2 = r2[0], i2 = r2[1];
          return t7.blotName == null && t7(o2) || t7.blotName != null && o2 instanceof t7 ? [o2, i2] : o2 instanceof e3 ? o2.descendant(t7, i2) : [null, -1];
        }, e3.prototype.descendants = function(t7, n3, r2) {
          n3 === void 0 && (n3 = 0), r2 === void 0 && (r2 = Number.MAX_VALUE);
          var o2 = [], i2 = r2;
          return this.children.forEachAt(n3, r2, function(n4, r3, s2) {
            (t7.blotName == null && t7(n4) || t7.blotName != null && n4 instanceof t7) && o2.push(n4), n4 instanceof e3 && (o2 = o2.concat(n4.descendants(t7, r3, i2))), i2 -= s2;
          }), o2;
        }, e3.prototype.detach = function() {
          this.children.forEach(function(t7) {
            t7.detach();
          }), t6.prototype.detach.call(this);
        }, e3.prototype.formatAt = function(t7, e4, n3, r2) {
          this.children.forEachAt(t7, e4, function(t8, e5, o2) {
            t8.formatAt(e5, o2, n3, r2);
          });
        }, e3.prototype.insertAt = function(t7, e4, n3) {
          var r2 = this.children.find(t7), o2 = r2[0], i2 = r2[1];
          if (o2)
            o2.insertAt(i2, e4, n3);
          else {
            var s2 = n3 == null ? l2.create("text", e4) : l2.create(e4, n3);
            this.appendChild(s2);
          }
        }, e3.prototype.insertBefore = function(t7, e4) {
          if (this.statics.allowedChildren != null && !this.statics.allowedChildren.some(function(e5) {
            return t7 instanceof e5;
          }))
            throw new l2.ParchmentError("Cannot insert " + t7.statics.blotName + " into " + this.statics.blotName);
          t7.insertInto(this, e4);
        }, e3.prototype.length = function() {
          return this.children.reduce(function(t7, e4) {
            return t7 + e4.length();
          }, 0);
        }, e3.prototype.moveChildren = function(t7, e4) {
          this.children.forEach(function(n3) {
            t7.insertBefore(n3, e4);
          });
        }, e3.prototype.optimize = function(e4) {
          if (t6.prototype.optimize.call(this, e4), this.children.length === 0)
            if (this.statics.defaultChild != null) {
              var n3 = l2.create(this.statics.defaultChild);
              this.appendChild(n3), n3.optimize(e4);
            } else
              this.remove();
        }, e3.prototype.path = function(t7, n3) {
          n3 === void 0 && (n3 = false);
          var r2 = this.children.find(t7, n3), o2 = r2[0], i2 = r2[1], s2 = [[this, t7]];
          return o2 instanceof e3 ? s2.concat(o2.path(i2, n3)) : (o2 != null && s2.push([o2, i2]), s2);
        }, e3.prototype.removeChild = function(t7) {
          this.children.remove(t7);
        }, e3.prototype.replace = function(n3) {
          n3 instanceof e3 && n3.moveChildren(this), t6.prototype.replace.call(this, n3);
        }, e3.prototype.split = function(t7, e4) {
          if (e4 === void 0 && (e4 = false), !e4) {
            if (t7 === 0)
              return this;
            if (t7 === this.length())
              return this.next;
          }
          var n3 = this.clone();
          return this.parent.insertBefore(n3, this.next), this.children.forEachAt(t7, this.length(), function(t8, r2, o2) {
            t8 = t8.split(r2, e4), n3.appendChild(t8);
          }), n3;
        }, e3.prototype.unwrap = function() {
          this.moveChildren(this.parent, this.next), this.remove();
        }, e3.prototype.update = function(t7, e4) {
          var n3 = this, r2 = [], o2 = [];
          t7.forEach(function(t8) {
            t8.target === n3.domNode && t8.type === "childList" && (r2.push.apply(r2, t8.addedNodes), o2.push.apply(o2, t8.removedNodes));
          }), o2.forEach(function(t8) {
            if (!(t8.parentNode != null && t8.tagName !== "IFRAME" && document.body.compareDocumentPosition(t8) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
              var e5 = l2.find(t8);
              e5 != null && (e5.domNode.parentNode != null && e5.domNode.parentNode !== n3.domNode || e5.detach());
            }
          }), r2.filter(function(t8) {
            return t8.parentNode == n3.domNode;
          }).sort(function(t8, e5) {
            return t8 === e5 ? 0 : t8.compareDocumentPosition(e5) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1;
          }).forEach(function(t8) {
            var e5 = null;
            t8.nextSibling != null && (e5 = l2.find(t8.nextSibling));
            var r3 = u2(t8);
            r3.next == e5 && r3.next != null || (r3.parent != null && r3.parent.removeChild(n3), n3.insertBefore(r3, e5 || void 0));
          });
        }, e3;
      }(s.default);
      function u2(t6) {
        var e3 = l2.find(t6);
        if (e3 == null)
          try {
            e3 = l2.create(t6);
          } catch (n3) {
            e3 = l2.create(l2.Scope.INLINE), [].slice.call(t6.childNodes).forEach(function(t7) {
              e3.domNode.appendChild(t7);
            }), t6.parentNode && t6.parentNode.replaceChild(e3.domNode, t6), e3.attach();
          }
        return e3;
      }
      e2.default = a2;
    }, function(t5, e2, n2) {
      var r, o = this && this.__extends || (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, e3) {
        t6.__proto__ = e3;
      } || function(t6, e3) {
        for (var n3 in e3)
          e3.hasOwnProperty(n3) && (t6[n3] = e3[n3]);
      }, function(t6, e3) {
        function n3() {
          this.constructor = t6;
        }
        r(t6, e3), t6.prototype = e3 === null ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
      });
      Object.defineProperty(e2, "__esModule", { value: true });
      var i = n2(1), s = n2(6), l2 = n2(2), a2 = n2(0), u2 = function(t6) {
        function e3(e4) {
          var n3 = t6.call(this, e4) || this;
          return n3.attributes = new s.default(n3.domNode), n3;
        }
        return o(e3, t6), e3.formats = function(t7) {
          return typeof this.tagName == "string" || (Array.isArray(this.tagName) ? t7.tagName.toLowerCase() : void 0);
        }, e3.prototype.format = function(t7, e4) {
          var n3 = a2.query(t7);
          n3 instanceof i.default ? this.attributes.attribute(n3, e4) : e4 && (n3 == null || t7 === this.statics.blotName && this.formats()[t7] === e4 || this.replaceWith(t7, e4));
        }, e3.prototype.formats = function() {
          var t7 = this.attributes.values(), e4 = this.statics.formats(this.domNode);
          return e4 != null && (t7[this.statics.blotName] = e4), t7;
        }, e3.prototype.replaceWith = function(e4, n3) {
          var r2 = t6.prototype.replaceWith.call(this, e4, n3);
          return this.attributes.copy(r2), r2;
        }, e3.prototype.update = function(e4, n3) {
          var r2 = this;
          t6.prototype.update.call(this, e4, n3), e4.some(function(t7) {
            return t7.target === r2.domNode && t7.type === "attributes";
          }) && this.attributes.build();
        }, e3.prototype.wrap = function(n3, r2) {
          var o2 = t6.prototype.wrap.call(this, n3, r2);
          return o2 instanceof e3 && o2.statics.scope === this.statics.scope && this.attributes.move(o2), o2;
        }, e3;
      }(l2.default);
      e2.default = u2;
    }, function(t5, e2, n2) {
      var r, o = this && this.__extends || (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, e3) {
        t6.__proto__ = e3;
      } || function(t6, e3) {
        for (var n3 in e3)
          e3.hasOwnProperty(n3) && (t6[n3] = e3[n3]);
      }, function(t6, e3) {
        function n3() {
          this.constructor = t6;
        }
        r(t6, e3), t6.prototype = e3 === null ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
      });
      Object.defineProperty(e2, "__esModule", { value: true });
      var i = n2(5), s = n2(0), l2 = function(t6) {
        function e3() {
          return t6 !== null && t6.apply(this, arguments) || this;
        }
        return o(e3, t6), e3.value = function(t7) {
          return true;
        }, e3.prototype.index = function(t7, e4) {
          return this.domNode === t7 || this.domNode.compareDocumentPosition(t7) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(e4, 1) : -1;
        }, e3.prototype.position = function(t7, e4) {
          var n3 = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
          return t7 > 0 && (n3 += 1), [this.parent.domNode, n3];
        }, e3.prototype.value = function() {
          return (t7 = {})[this.statics.blotName] = this.statics.value(this.domNode) || true, t7;
          var t7;
        }, e3.scope = s.Scope.INLINE_BLOT, e3;
      }(i.default);
      e2.default = l2;
    }, function(t5, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r = n2(0), o = function() {
        function t6(t7) {
          this.domNode = t7, this.domNode[r.DATA_KEY] = { blot: this };
        }
        return Object.defineProperty(t6.prototype, "statics", { get: function() {
          return this.constructor;
        }, enumerable: true, configurable: true }), t6.create = function(t7) {
          if (this.tagName == null)
            throw new r.ParchmentError("Blot definition missing tagName");
          var e3;
          return Array.isArray(this.tagName) ? (typeof t7 == "string" && (t7 = t7.toUpperCase(), parseInt(t7).toString() === t7 && (t7 = parseInt(t7))), e3 = typeof t7 == "number" ? document.createElement(this.tagName[t7 - 1]) : this.tagName.indexOf(t7) > -1 ? document.createElement(t7) : document.createElement(this.tagName[0])) : e3 = document.createElement(this.tagName), this.className && e3.classList.add(this.className), e3;
        }, t6.prototype.attach = function() {
          this.parent != null && (this.scroll = this.parent.scroll);
        }, t6.prototype.clone = function() {
          var t7 = this.domNode.cloneNode(false);
          return r.create(t7);
        }, t6.prototype.detach = function() {
          this.parent != null && this.parent.removeChild(this), delete this.domNode[r.DATA_KEY];
        }, t6.prototype.deleteAt = function(t7, e3) {
          this.isolate(t7, e3).remove();
        }, t6.prototype.formatAt = function(t7, e3, n3, o2) {
          var i = this.isolate(t7, e3);
          if (r.query(n3, r.Scope.BLOT) != null && o2)
            i.wrap(n3, o2);
          else if (r.query(n3, r.Scope.ATTRIBUTE) != null) {
            var s = r.create(this.statics.scope);
            i.wrap(s), s.format(n3, o2);
          }
        }, t6.prototype.insertAt = function(t7, e3, n3) {
          var o2 = n3 == null ? r.create("text", e3) : r.create(e3, n3), i = this.split(t7);
          this.parent.insertBefore(o2, i);
        }, t6.prototype.insertInto = function(t7, e3) {
          e3 === void 0 && (e3 = null), this.parent != null && this.parent.children.remove(this);
          var n3 = null;
          t7.children.insertBefore(this, e3), e3 != null && (n3 = e3.domNode), this.domNode.parentNode == t7.domNode && this.domNode.nextSibling == n3 || t7.domNode.insertBefore(this.domNode, n3), this.parent = t7, this.attach();
        }, t6.prototype.isolate = function(t7, e3) {
          var n3 = this.split(t7);
          return n3.split(e3), n3;
        }, t6.prototype.length = function() {
          return 1;
        }, t6.prototype.offset = function(t7) {
          return t7 === void 0 && (t7 = this.parent), this.parent == null || this == t7 ? 0 : this.parent.children.offset(this) + this.parent.offset(t7);
        }, t6.prototype.optimize = function(t7) {
          this.domNode[r.DATA_KEY] != null && delete this.domNode[r.DATA_KEY].mutations;
        }, t6.prototype.remove = function() {
          this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
        }, t6.prototype.replace = function(t7) {
          t7.parent != null && (t7.parent.insertBefore(this, t7.next), t7.remove());
        }, t6.prototype.replaceWith = function(t7, e3) {
          var n3 = typeof t7 == "string" ? r.create(t7, e3) : t7;
          return n3.replace(this), n3;
        }, t6.prototype.split = function(t7, e3) {
          return t7 === 0 ? this : this.next;
        }, t6.prototype.update = function(t7, e3) {
        }, t6.prototype.wrap = function(t7, e3) {
          var n3 = typeof t7 == "string" ? r.create(t7, e3) : t7;
          return this.parent != null && this.parent.insertBefore(n3, this.next), n3.appendChild(this), n3;
        }, t6.blotName = "abstract", t6;
      }();
      e2.default = o;
    }, function(t5, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r = n2(1), o = n2(7), i = n2(8), s = n2(0), l2 = function() {
        function t6(t7) {
          this.attributes = {}, this.domNode = t7, this.build();
        }
        return t6.prototype.attribute = function(t7, e3) {
          e3 ? t7.add(this.domNode, e3) && (t7.value(this.domNode) != null ? this.attributes[t7.attrName] = t7 : delete this.attributes[t7.attrName]) : (t7.remove(this.domNode), delete this.attributes[t7.attrName]);
        }, t6.prototype.build = function() {
          var t7 = this;
          this.attributes = {};
          var e3 = r.default.keys(this.domNode), n3 = o.default.keys(this.domNode), l3 = i.default.keys(this.domNode);
          e3.concat(n3).concat(l3).forEach(function(e4) {
            var n4 = s.query(e4, s.Scope.ATTRIBUTE);
            n4 instanceof r.default && (t7.attributes[n4.attrName] = n4);
          });
        }, t6.prototype.copy = function(t7) {
          var e3 = this;
          Object.keys(this.attributes).forEach(function(n3) {
            var r2 = e3.attributes[n3].value(e3.domNode);
            t7.format(n3, r2);
          });
        }, t6.prototype.move = function(t7) {
          var e3 = this;
          this.copy(t7), Object.keys(this.attributes).forEach(function(t8) {
            e3.attributes[t8].remove(e3.domNode);
          }), this.attributes = {};
        }, t6.prototype.values = function() {
          var t7 = this;
          return Object.keys(this.attributes).reduce(function(e3, n3) {
            return e3[n3] = t7.attributes[n3].value(t7.domNode), e3;
          }, {});
        }, t6;
      }();
      e2.default = l2;
    }, function(t5, e2, n2) {
      var r, o = this && this.__extends || (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, e3) {
        t6.__proto__ = e3;
      } || function(t6, e3) {
        for (var n3 in e3)
          e3.hasOwnProperty(n3) && (t6[n3] = e3[n3]);
      }, function(t6, e3) {
        function n3() {
          this.constructor = t6;
        }
        r(t6, e3), t6.prototype = e3 === null ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
      });
      function i(t6, e3) {
        return (t6.getAttribute("class") || "").split(/\s+/).filter(function(t7) {
          return t7.indexOf(e3 + "-") === 0;
        });
      }
      Object.defineProperty(e2, "__esModule", { value: true });
      var s = function(t6) {
        function e3() {
          return t6 !== null && t6.apply(this, arguments) || this;
        }
        return o(e3, t6), e3.keys = function(t7) {
          return (t7.getAttribute("class") || "").split(/\s+/).map(function(t8) {
            return t8.split("-").slice(0, -1).join("-");
          });
        }, e3.prototype.add = function(t7, e4) {
          return !!this.canAdd(t7, e4) && (this.remove(t7), t7.classList.add(this.keyName + "-" + e4), true);
        }, e3.prototype.remove = function(t7) {
          i(t7, this.keyName).forEach(function(e4) {
            t7.classList.remove(e4);
          }), t7.classList.length === 0 && t7.removeAttribute("class");
        }, e3.prototype.value = function(t7) {
          var e4 = (i(t7, this.keyName)[0] || "").slice(this.keyName.length + 1);
          return this.canAdd(t7, e4) ? e4 : "";
        }, e3;
      }(n2(1).default);
      e2.default = s;
    }, function(t5, e2, n2) {
      var r, o = this && this.__extends || (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, e3) {
        t6.__proto__ = e3;
      } || function(t6, e3) {
        for (var n3 in e3)
          e3.hasOwnProperty(n3) && (t6[n3] = e3[n3]);
      }, function(t6, e3) {
        function n3() {
          this.constructor = t6;
        }
        r(t6, e3), t6.prototype = e3 === null ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
      });
      function i(t6) {
        var e3 = t6.split("-"), n3 = e3.slice(1).map(function(t7) {
          return t7[0].toUpperCase() + t7.slice(1);
        }).join("");
        return e3[0] + n3;
      }
      Object.defineProperty(e2, "__esModule", { value: true });
      var s = function(t6) {
        function e3() {
          return t6 !== null && t6.apply(this, arguments) || this;
        }
        return o(e3, t6), e3.keys = function(t7) {
          return (t7.getAttribute("style") || "").split(";").map(function(t8) {
            return t8.split(":")[0].trim();
          });
        }, e3.prototype.add = function(t7, e4) {
          return !!this.canAdd(t7, e4) && (t7.style[i(this.keyName)] = e4, true);
        }, e3.prototype.remove = function(t7) {
          t7.style[i(this.keyName)] = "", t7.getAttribute("style") || t7.removeAttribute("style");
        }, e3.prototype.value = function(t7) {
          var e4 = t7.style[i(this.keyName)];
          return this.canAdd(t7, e4) ? e4 : "";
        }, e3;
      }(n2(1).default);
      e2.default = s;
    }, function(t5, e2, n2) {
      t5.exports = n2(10);
    }, function(t5, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r = n2(2), o = n2(3), i = n2(4), s = n2(12), l2 = n2(13), a2 = n2(14), u2 = n2(15), c2 = n2(16), h2 = n2(1), f2 = n2(7), p2 = n2(8), d2 = n2(6), y2 = n2(0), m2 = { Scope: y2.Scope, create: y2.create, find: y2.find, query: y2.query, register: y2.register, Container: r.default, Format: o.default, Leaf: i.default, Embed: u2.default, Scroll: s.default, Block: a2.default, Inline: l2.default, Text: c2.default, Attributor: { Attribute: h2.default, Class: f2.default, Style: p2.default, Store: d2.default } };
      e2.default = m2;
    }, function(t5, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r = function() {
        function t6() {
          this.head = this.tail = null, this.length = 0;
        }
        return t6.prototype.append = function() {
          for (var t7 = [], e3 = 0; e3 < arguments.length; e3++)
            t7[e3] = arguments[e3];
          this.insertBefore(t7[0], null), t7.length > 1 && this.append.apply(this, t7.slice(1));
        }, t6.prototype.contains = function(t7) {
          for (var e3, n3 = this.iterator(); e3 = n3(); )
            if (e3 === t7)
              return true;
          return false;
        }, t6.prototype.insertBefore = function(t7, e3) {
          t7 && (t7.next = e3, e3 != null ? (t7.prev = e3.prev, e3.prev != null && (e3.prev.next = t7), e3.prev = t7, e3 === this.head && (this.head = t7)) : this.tail != null ? (this.tail.next = t7, t7.prev = this.tail, this.tail = t7) : (t7.prev = null, this.head = this.tail = t7), this.length += 1);
        }, t6.prototype.offset = function(t7) {
          for (var e3 = 0, n3 = this.head; n3 != null; ) {
            if (n3 === t7)
              return e3;
            e3 += n3.length(), n3 = n3.next;
          }
          return -1;
        }, t6.prototype.remove = function(t7) {
          this.contains(t7) && (t7.prev != null && (t7.prev.next = t7.next), t7.next != null && (t7.next.prev = t7.prev), t7 === this.head && (this.head = t7.next), t7 === this.tail && (this.tail = t7.prev), this.length -= 1);
        }, t6.prototype.iterator = function(t7) {
          return t7 === void 0 && (t7 = this.head), function() {
            var e3 = t7;
            return t7 != null && (t7 = t7.next), e3;
          };
        }, t6.prototype.find = function(t7, e3) {
          e3 === void 0 && (e3 = false);
          for (var n3, r2 = this.iterator(); n3 = r2(); ) {
            var o = n3.length();
            if (t7 < o || e3 && t7 === o && (n3.next == null || n3.next.length() !== 0))
              return [n3, t7];
            t7 -= o;
          }
          return [null, 0];
        }, t6.prototype.forEach = function(t7) {
          for (var e3, n3 = this.iterator(); e3 = n3(); )
            t7(e3);
        }, t6.prototype.forEachAt = function(t7, e3, n3) {
          if (!(e3 <= 0))
            for (var r2, o = this.find(t7), i = o[0], s = t7 - o[1], l2 = this.iterator(i); (r2 = l2()) && s < t7 + e3; ) {
              var a2 = r2.length();
              t7 > s ? n3(r2, t7 - s, Math.min(e3, s + a2 - t7)) : n3(r2, 0, Math.min(a2, t7 + e3 - s)), s += a2;
            }
        }, t6.prototype.map = function(t7) {
          return this.reduce(function(e3, n3) {
            return e3.push(t7(n3)), e3;
          }, []);
        }, t6.prototype.reduce = function(t7, e3) {
          for (var n3, r2 = this.iterator(); n3 = r2(); )
            e3 = t7(e3, n3);
          return e3;
        }, t6;
      }();
      e2.default = r;
    }, function(t5, e2, n2) {
      var r, o = this && this.__extends || (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, e3) {
        t6.__proto__ = e3;
      } || function(t6, e3) {
        for (var n3 in e3)
          e3.hasOwnProperty(n3) && (t6[n3] = e3[n3]);
      }, function(t6, e3) {
        function n3() {
          this.constructor = t6;
        }
        r(t6, e3), t6.prototype = e3 === null ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
      });
      Object.defineProperty(e2, "__esModule", { value: true });
      var i = n2(2), s = n2(0), l2 = { attributes: true, characterData: true, characterDataOldValue: true, childList: true, subtree: true }, a2 = function(t6) {
        function e3(e4) {
          var n3 = t6.call(this, e4) || this;
          return n3.scroll = n3, n3.observer = new MutationObserver(function(t7) {
            n3.update(t7);
          }), n3.observer.observe(n3.domNode, l2), n3.attach(), n3;
        }
        return o(e3, t6), e3.prototype.detach = function() {
          t6.prototype.detach.call(this), this.observer.disconnect();
        }, e3.prototype.deleteAt = function(e4, n3) {
          this.update(), e4 === 0 && n3 === this.length() ? this.children.forEach(function(t7) {
            t7.remove();
          }) : t6.prototype.deleteAt.call(this, e4, n3);
        }, e3.prototype.formatAt = function(e4, n3, r2, o2) {
          this.update(), t6.prototype.formatAt.call(this, e4, n3, r2, o2);
        }, e3.prototype.insertAt = function(e4, n3, r2) {
          this.update(), t6.prototype.insertAt.call(this, e4, n3, r2);
        }, e3.prototype.optimize = function(e4, n3) {
          var r2 = this;
          e4 === void 0 && (e4 = []), n3 === void 0 && (n3 = {}), t6.prototype.optimize.call(this, n3);
          for (var o2 = [].slice.call(this.observer.takeRecords()); o2.length > 0; )
            e4.push(o2.pop());
          for (var l3 = function(t7, e5) {
            e5 === void 0 && (e5 = true), t7 != null && t7 !== r2 && t7.domNode.parentNode != null && (t7.domNode[s.DATA_KEY].mutations == null && (t7.domNode[s.DATA_KEY].mutations = []), e5 && l3(t7.parent));
          }, a3 = function(t7) {
            t7.domNode[s.DATA_KEY] != null && t7.domNode[s.DATA_KEY].mutations != null && (t7 instanceof i.default && t7.children.forEach(a3), t7.optimize(n3));
          }, u2 = e4, c2 = 0; u2.length > 0; c2 += 1) {
            if (c2 >= 100)
              throw new Error("[Parchment] Maximum optimize iterations reached");
            for (u2.forEach(function(t7) {
              var e5 = s.find(t7.target, true);
              e5 != null && (e5.domNode === t7.target && (t7.type === "childList" ? (l3(s.find(t7.previousSibling, false)), [].forEach.call(t7.addedNodes, function(t8) {
                var e6 = s.find(t8, false);
                l3(e6, false), e6 instanceof i.default && e6.children.forEach(function(t9) {
                  l3(t9, false);
                });
              })) : t7.type === "attributes" && l3(e5.prev)), l3(e5));
            }), this.children.forEach(a3), o2 = (u2 = [].slice.call(this.observer.takeRecords())).slice(); o2.length > 0; )
              e4.push(o2.pop());
          }
        }, e3.prototype.update = function(e4, n3) {
          var r2 = this;
          n3 === void 0 && (n3 = {}), (e4 = e4 || this.observer.takeRecords()).map(function(t7) {
            var e5 = s.find(t7.target, true);
            return e5 == null ? null : e5.domNode[s.DATA_KEY].mutations == null ? (e5.domNode[s.DATA_KEY].mutations = [t7], e5) : (e5.domNode[s.DATA_KEY].mutations.push(t7), null);
          }).forEach(function(t7) {
            t7 != null && t7 !== r2 && t7.domNode[s.DATA_KEY] != null && t7.update(t7.domNode[s.DATA_KEY].mutations || [], n3);
          }), this.domNode[s.DATA_KEY].mutations != null && t6.prototype.update.call(this, this.domNode[s.DATA_KEY].mutations, n3), this.optimize(e4, n3);
        }, e3.blotName = "scroll", e3.defaultChild = "block", e3.scope = s.Scope.BLOCK_BLOT, e3.tagName = "DIV", e3;
      }(i.default);
      e2.default = a2;
    }, function(t5, e2, n2) {
      var r, o = this && this.__extends || (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, e3) {
        t6.__proto__ = e3;
      } || function(t6, e3) {
        for (var n3 in e3)
          e3.hasOwnProperty(n3) && (t6[n3] = e3[n3]);
      }, function(t6, e3) {
        function n3() {
          this.constructor = t6;
        }
        r(t6, e3), t6.prototype = e3 === null ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
      });
      Object.defineProperty(e2, "__esModule", { value: true });
      var i = n2(3), s = n2(0), l2 = function(t6) {
        function e3() {
          return t6 !== null && t6.apply(this, arguments) || this;
        }
        return o(e3, t6), e3.formats = function(n3) {
          if (n3.tagName !== e3.tagName)
            return t6.formats.call(this, n3);
        }, e3.prototype.format = function(n3, r2) {
          var o2 = this;
          n3 !== this.statics.blotName || r2 ? t6.prototype.format.call(this, n3, r2) : (this.children.forEach(function(t7) {
            t7 instanceof i.default || (t7 = t7.wrap(e3.blotName, true)), o2.attributes.copy(t7);
          }), this.unwrap());
        }, e3.prototype.formatAt = function(e4, n3, r2, o2) {
          this.formats()[r2] != null || s.query(r2, s.Scope.ATTRIBUTE) ? this.isolate(e4, n3).format(r2, o2) : t6.prototype.formatAt.call(this, e4, n3, r2, o2);
        }, e3.prototype.optimize = function(n3) {
          t6.prototype.optimize.call(this, n3);
          var r2 = this.formats();
          if (Object.keys(r2).length === 0)
            return this.unwrap();
          var o2 = this.next;
          o2 instanceof e3 && o2.prev === this && function(t7, e4) {
            if (Object.keys(t7).length !== Object.keys(e4).length)
              return false;
            for (var n4 in t7)
              if (t7[n4] !== e4[n4])
                return false;
            return true;
          }(r2, o2.formats()) && (o2.moveChildren(this), o2.remove());
        }, e3.blotName = "inline", e3.scope = s.Scope.INLINE_BLOT, e3.tagName = "SPAN", e3;
      }(i.default);
      e2.default = l2;
    }, function(t5, e2, n2) {
      var r, o = this && this.__extends || (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, e3) {
        t6.__proto__ = e3;
      } || function(t6, e3) {
        for (var n3 in e3)
          e3.hasOwnProperty(n3) && (t6[n3] = e3[n3]);
      }, function(t6, e3) {
        function n3() {
          this.constructor = t6;
        }
        r(t6, e3), t6.prototype = e3 === null ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
      });
      Object.defineProperty(e2, "__esModule", { value: true });
      var i = n2(3), s = n2(0), l2 = function(t6) {
        function e3() {
          return t6 !== null && t6.apply(this, arguments) || this;
        }
        return o(e3, t6), e3.formats = function(n3) {
          var r2 = s.query(e3.blotName).tagName;
          if (n3.tagName !== r2)
            return t6.formats.call(this, n3);
        }, e3.prototype.format = function(n3, r2) {
          s.query(n3, s.Scope.BLOCK) != null && (n3 !== this.statics.blotName || r2 ? t6.prototype.format.call(this, n3, r2) : this.replaceWith(e3.blotName));
        }, e3.prototype.formatAt = function(e4, n3, r2, o2) {
          s.query(r2, s.Scope.BLOCK) != null ? this.format(r2, o2) : t6.prototype.formatAt.call(this, e4, n3, r2, o2);
        }, e3.prototype.insertAt = function(e4, n3, r2) {
          if (r2 == null || s.query(n3, s.Scope.INLINE) != null)
            t6.prototype.insertAt.call(this, e4, n3, r2);
          else {
            var o2 = this.split(e4), i2 = s.create(n3, r2);
            o2.parent.insertBefore(i2, o2);
          }
        }, e3.prototype.update = function(e4, n3) {
          navigator.userAgent.match(/Trident/) ? this.build() : t6.prototype.update.call(this, e4, n3);
        }, e3.blotName = "block", e3.scope = s.Scope.BLOCK_BLOT, e3.tagName = "P", e3;
      }(i.default);
      e2.default = l2;
    }, function(t5, e2, n2) {
      var r, o = this && this.__extends || (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, e3) {
        t6.__proto__ = e3;
      } || function(t6, e3) {
        for (var n3 in e3)
          e3.hasOwnProperty(n3) && (t6[n3] = e3[n3]);
      }, function(t6, e3) {
        function n3() {
          this.constructor = t6;
        }
        r(t6, e3), t6.prototype = e3 === null ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
      });
      Object.defineProperty(e2, "__esModule", { value: true });
      var i = function(t6) {
        function e3() {
          return t6 !== null && t6.apply(this, arguments) || this;
        }
        return o(e3, t6), e3.formats = function(t7) {
        }, e3.prototype.format = function(e4, n3) {
          t6.prototype.formatAt.call(this, 0, this.length(), e4, n3);
        }, e3.prototype.formatAt = function(e4, n3, r2, o2) {
          e4 === 0 && n3 === this.length() ? this.format(r2, o2) : t6.prototype.formatAt.call(this, e4, n3, r2, o2);
        }, e3.prototype.formats = function() {
          return this.statics.formats(this.domNode);
        }, e3;
      }(n2(4).default);
      e2.default = i;
    }, function(t5, e2, n2) {
      var r, o = this && this.__extends || (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t6, e3) {
        t6.__proto__ = e3;
      } || function(t6, e3) {
        for (var n3 in e3)
          e3.hasOwnProperty(n3) && (t6[n3] = e3[n3]);
      }, function(t6, e3) {
        function n3() {
          this.constructor = t6;
        }
        r(t6, e3), t6.prototype = e3 === null ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
      });
      Object.defineProperty(e2, "__esModule", { value: true });
      var i = n2(4), s = n2(0), l2 = function(t6) {
        function e3(e4) {
          var n3 = t6.call(this, e4) || this;
          return n3.text = n3.statics.value(n3.domNode), n3;
        }
        return o(e3, t6), e3.create = function(t7) {
          return document.createTextNode(t7);
        }, e3.value = function(t7) {
          var e4 = t7.data;
          return e4.normalize && (e4 = e4.normalize()), e4;
        }, e3.prototype.deleteAt = function(t7, e4) {
          this.domNode.data = this.text = this.text.slice(0, t7) + this.text.slice(t7 + e4);
        }, e3.prototype.index = function(t7, e4) {
          return this.domNode === t7 ? e4 : -1;
        }, e3.prototype.insertAt = function(e4, n3, r2) {
          r2 == null ? (this.text = this.text.slice(0, e4) + n3 + this.text.slice(e4), this.domNode.data = this.text) : t6.prototype.insertAt.call(this, e4, n3, r2);
        }, e3.prototype.length = function() {
          return this.text.length;
        }, e3.prototype.optimize = function(n3) {
          t6.prototype.optimize.call(this, n3), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof e3 && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
        }, e3.prototype.position = function(t7, e4) {
          return [this.domNode, t7];
        }, e3.prototype.split = function(t7, e4) {
          if (e4 === void 0 && (e4 = false), !e4) {
            if (t7 === 0)
              return this;
            if (t7 === this.length())
              return this.next;
          }
          var n3 = s.create(this.domNode.splitText(t7));
          return this.parent.insertBefore(n3, this.next), this.text = this.statics.value(this.domNode), n3;
        }, e3.prototype.update = function(t7, e4) {
          var n3 = this;
          t7.some(function(t8) {
            return t8.type === "characterData" && t8.target === n3.domNode;
          }) && (this.text = this.statics.value(this.domNode));
        }, e3.prototype.value = function() {
          return this.text;
        }, e3.blotName = "text", e3.scope = s.Scope.INLINE_BLOT, e3;
      }(i.default);
      e2.default = l2;
    }]);
  }, t4.exports = n();
}));
let p = document.createElement("div");
if (p.classList.toggle("test-class", false), p.classList.contains("test-class")) {
  let t4 = DOMTokenList.prototype.toggle;
  DOMTokenList.prototype.toggle = function(e, n) {
    return arguments.length > 1 && !this.contains(e) == !n ? n : t4.call(this, e);
  };
}
String.prototype.startsWith || (String.prototype.startsWith = function(t4, e) {
  return e = e || 0, this.substr(e, t4.length) === t4;
}), String.prototype.endsWith || (String.prototype.endsWith = function(t4, e) {
  var n = this.toString();
  (typeof e != "number" || !isFinite(e) || Math.floor(e) !== e || e > n.length) && (e = n.length), e -= t4.length;
  var r = n.indexOf(t4, e);
  return r !== -1 && r === e;
}), Array.prototype.find || Object.defineProperty(Array.prototype, "find", { value: function(t4) {
  if (this === null)
    throw new TypeError("Array.prototype.find called on null or undefined");
  if (typeof t4 != "function")
    throw new TypeError("predicate must be a function");
  for (var e, n = Object(this), r = n.length >>> 0, o = arguments[1], i = 0; i < r; i++)
    if (e = n[i], t4.call(o, e, i, n))
      return e;
} }), document.addEventListener("DOMContentLoaded", function() {
  document.execCommand("enableObjectResizing", false, false), document.execCommand("autoUrlDetect", false, false);
});
function d(t4, e, n) {
  if (t4 == e)
    return t4 ? [[0, t4]] : [];
  (n < 0 || t4.length < n) && (n = null);
  var r = m(t4, e), o = t4.substring(0, r);
  r = g(t4 = t4.substring(r), e = e.substring(r));
  var i = t4.substring(t4.length - r), s = function(t5, e2) {
    var n2;
    if (!t5)
      return [[1, e2]];
    if (!e2)
      return [[-1, t5]];
    var r2 = t5.length > e2.length ? t5 : e2, o2 = t5.length > e2.length ? e2 : t5, i2 = r2.indexOf(o2);
    if (i2 != -1)
      return n2 = [[1, r2.substring(0, i2)], [0, o2], [1, r2.substring(i2 + o2.length)]], t5.length > e2.length && (n2[0][0] = n2[2][0] = -1), n2;
    if (o2.length == 1)
      return [[-1, t5], [1, e2]];
    var s2 = function(t6, e3) {
      var n3 = t6.length > e3.length ? t6 : e3, r3 = t6.length > e3.length ? e3 : t6;
      if (n3.length < 4 || 2 * r3.length < n3.length)
        return null;
      function o3(t7, e4, n4) {
        for (var r4, o4, i4, s4, l4 = t7.substring(n4, n4 + Math.floor(t7.length / 4)), a4 = -1, u4 = ""; (a4 = e4.indexOf(l4, a4 + 1)) != -1; ) {
          var c4 = m(t7.substring(n4), e4.substring(a4)), h4 = g(t7.substring(0, n4), e4.substring(0, a4));
          u4.length < h4 + c4 && (u4 = e4.substring(a4 - h4, a4) + e4.substring(a4, a4 + c4), r4 = t7.substring(0, n4 - h4), o4 = t7.substring(n4 + c4), i4 = e4.substring(0, a4 - h4), s4 = e4.substring(a4 + c4));
        }
        return 2 * u4.length >= t7.length ? [r4, o4, i4, s4, u4] : null;
      }
      var i3, s3, l3, a3, u3, c3 = o3(n3, r3, Math.ceil(n3.length / 4)), h3 = o3(n3, r3, Math.ceil(n3.length / 2));
      if (!c3 && !h3)
        return null;
      i3 = h3 ? c3 && c3[4].length > h3[4].length ? c3 : h3 : c3;
      t6.length > e3.length ? (s3 = i3[0], l3 = i3[1], a3 = i3[2], u3 = i3[3]) : (a3 = i3[0], u3 = i3[1], s3 = i3[2], l3 = i3[3]);
      var f3 = i3[4];
      return [s3, l3, a3, u3, f3];
    }(t5, e2);
    if (s2) {
      var l2 = s2[0], a2 = s2[1], u2 = s2[2], c2 = s2[3], h2 = s2[4], f2 = d(l2, u2), p2 = d(a2, c2);
      return f2.concat([[0, h2]], p2);
    }
    return function(t6, e3) {
      for (var n3 = t6.length, r3 = e3.length, o3 = Math.ceil((n3 + r3) / 2), i3 = o3, s3 = 2 * o3, l3 = new Array(s3), a3 = new Array(s3), u3 = 0; u3 < s3; u3++)
        l3[u3] = -1, a3[u3] = -1;
      l3[i3 + 1] = 0, a3[i3 + 1] = 0;
      for (var c3 = n3 - r3, h3 = c3 % 2 != 0, f3 = 0, p3 = 0, d2 = 0, m2 = 0, g2 = 0; g2 < o3; g2++) {
        for (var b2 = -g2 + f3; b2 <= g2 - p3; b2 += 2) {
          for (var v2 = i3 + b2, N2 = (T = b2 == -g2 || b2 != g2 && l3[v2 - 1] < l3[v2 + 1] ? l3[v2 + 1] : l3[v2 - 1] + 1) - b2; T < n3 && N2 < r3 && t6.charAt(T) == e3.charAt(N2); )
            T++, N2++;
          if (l3[v2] = T, T > n3)
            p3 += 2;
          else if (N2 > r3)
            f3 += 2;
          else if (h3) {
            if ((x2 = i3 + c3 - b2) >= 0 && x2 < s3 && a3[x2] != -1) {
              if (T >= (A2 = n3 - a3[x2]))
                return y(t6, e3, T, N2);
            }
          }
        }
        for (var E2 = -g2 + d2; E2 <= g2 - m2; E2 += 2) {
          for (var A2, x2 = i3 + E2, O2 = (A2 = E2 == -g2 || E2 != g2 && a3[x2 - 1] < a3[x2 + 1] ? a3[x2 + 1] : a3[x2 - 1] + 1) - E2; A2 < n3 && O2 < r3 && t6.charAt(n3 - A2 - 1) == e3.charAt(r3 - O2 - 1); )
            A2++, O2++;
          if (a3[x2] = A2, A2 > n3)
            m2 += 2;
          else if (O2 > r3)
            d2 += 2;
          else if (!h3) {
            if ((v2 = i3 + c3 - E2) >= 0 && v2 < s3 && l3[v2] != -1) {
              var T;
              N2 = i3 + (T = l3[v2]) - v2;
              if (T >= (A2 = n3 - A2))
                return y(t6, e3, T, N2);
            }
          }
        }
      }
      return [[-1, t6], [1, e3]];
    }(t5, e2);
  }(t4 = t4.substring(0, t4.length - r), e = e.substring(0, e.length - r));
  return o && s.unshift([0, o]), i && s.push([0, i]), b(s), n != null && (s = function(t5, e2) {
    var n2 = function(t6, e3) {
      if (e3 === 0)
        return [0, t6];
      for (var n3 = 0, r3 = 0; r3 < t6.length; r3++) {
        var o3 = t6[r3];
        if (o3[0] === -1 || o3[0] === 0) {
          var i3 = n3 + o3[1].length;
          if (e3 === i3)
            return [r3 + 1, t6];
          if (e3 < i3) {
            t6 = t6.slice();
            var s3 = e3 - n3, l3 = [o3[0], o3[1].slice(0, s3)], a2 = [o3[0], o3[1].slice(s3)];
            return t6.splice(r3, 1, l3, a2), [r3 + 1, t6];
          }
          n3 = i3;
        }
      }
      throw new Error("cursor_pos is out of bounds!");
    }(t5, e2), r2 = n2[1], o2 = n2[0], i2 = r2[o2], s2 = r2[o2 + 1];
    if (i2 == null)
      return t5;
    if (i2[0] !== 0)
      return t5;
    if (s2 != null && i2[1] + s2[1] === s2[1] + i2[1])
      return r2.splice(o2, 2, s2, i2), E(r2, o2, 2);
    if (s2 != null && s2[1].indexOf(i2[1]) === 0) {
      r2.splice(o2, 2, [s2[0], i2[1]], [0, i2[1]]);
      var l2 = s2[1].slice(i2[1].length);
      return l2.length > 0 && r2.splice(o2 + 2, 0, [s2[0], l2]), E(r2, o2, 3);
    }
    return t5;
  }(s, n)), s = function(t5) {
    for (var e2 = false, n2 = function(t6) {
      return t6.charCodeAt(0) >= 56320 && t6.charCodeAt(0) <= 57343;
    }, r2 = function(t6) {
      return t6.charCodeAt(t6.length - 1) >= 55296 && t6.charCodeAt(t6.length - 1) <= 56319;
    }, o2 = 2; o2 < t5.length; o2 += 1)
      t5[o2 - 2][0] === 0 && r2(t5[o2 - 2][1]) && t5[o2 - 1][0] === -1 && n2(t5[o2 - 1][1]) && t5[o2][0] === 1 && n2(t5[o2][1]) && (e2 = true, t5[o2 - 1][1] = t5[o2 - 2][1].slice(-1) + t5[o2 - 1][1], t5[o2][1] = t5[o2 - 2][1].slice(-1) + t5[o2][1], t5[o2 - 2][1] = t5[o2 - 2][1].slice(0, -1));
    if (!e2)
      return t5;
    var i2 = [];
    for (o2 = 0; o2 < t5.length; o2 += 1)
      t5[o2][1].length > 0 && i2.push(t5[o2]);
    return i2;
  }(s);
}
function y(t4, e, n, r) {
  var o = t4.substring(0, n), i = e.substring(0, r), s = t4.substring(n), l2 = e.substring(r), a2 = d(o, i), u2 = d(s, l2);
  return a2.concat(u2);
}
function m(t4, e) {
  if (!t4 || !e || t4.charAt(0) != e.charAt(0))
    return 0;
  for (var n = 0, r = Math.min(t4.length, e.length), o = r, i = 0; n < o; )
    t4.substring(i, o) == e.substring(i, o) ? i = n = o : r = o, o = Math.floor((r - n) / 2 + n);
  return o;
}
function g(t4, e) {
  if (!t4 || !e || t4.charAt(t4.length - 1) != e.charAt(e.length - 1))
    return 0;
  for (var n = 0, r = Math.min(t4.length, e.length), o = r, i = 0; n < o; )
    t4.substring(t4.length - o, t4.length - i) == e.substring(e.length - o, e.length - i) ? i = n = o : r = o, o = Math.floor((r - n) / 2 + n);
  return o;
}
function b(t4) {
  t4.push([0, ""]);
  for (var e, n = 0, r = 0, o = 0, i = "", s = ""; n < t4.length; )
    switch (t4[n][0]) {
      case 1:
        o++, s += t4[n][1], n++;
        break;
      case -1:
        r++, i += t4[n][1], n++;
        break;
      case 0:
        r + o > 1 ? (r !== 0 && o !== 0 && ((e = m(s, i)) !== 0 && (n - r - o > 0 && t4[n - r - o - 1][0] == 0 ? t4[n - r - o - 1][1] += s.substring(0, e) : (t4.splice(0, 0, [0, s.substring(0, e)]), n++), s = s.substring(e), i = i.substring(e)), (e = g(s, i)) !== 0 && (t4[n][1] = s.substring(s.length - e) + t4[n][1], s = s.substring(0, s.length - e), i = i.substring(0, i.length - e))), r === 0 ? t4.splice(n - o, r + o, [1, s]) : o === 0 ? t4.splice(n - r, r + o, [-1, i]) : t4.splice(n - r - o, r + o, [-1, i], [1, s]), n = n - r - o + (r ? 1 : 0) + (o ? 1 : 0) + 1) : n !== 0 && t4[n - 1][0] == 0 ? (t4[n - 1][1] += t4[n][1], t4.splice(n, 1)) : n++, o = 0, r = 0, i = "", s = "";
    }
  t4[t4.length - 1][1] === "" && t4.pop();
  var l2 = false;
  for (n = 1; n < t4.length - 1; )
    t4[n - 1][0] == 0 && t4[n + 1][0] == 0 && (t4[n][1].substring(t4[n][1].length - t4[n - 1][1].length) == t4[n - 1][1] ? (t4[n][1] = t4[n - 1][1] + t4[n][1].substring(0, t4[n][1].length - t4[n - 1][1].length), t4[n + 1][1] = t4[n - 1][1] + t4[n + 1][1], t4.splice(n - 1, 1), l2 = true) : t4[n][1].substring(0, t4[n + 1][1].length) == t4[n + 1][1] && (t4[n - 1][1] += t4[n + 1][1], t4[n][1] = t4[n][1].substring(t4[n + 1][1].length) + t4[n + 1][1], t4.splice(n + 1, 1), l2 = true)), n++;
  l2 && b(t4);
}
var v = d;
v.INSERT = 1, v.DELETE = -1, v.EQUAL = 0;
var N = v;
function E(t4, e, n) {
  for (var r = e + n - 1; r >= 0 && r >= e - 1; r--)
    if (r + 1 < t4.length) {
      var o = t4[r], i = t4[r + 1];
      o[0] === i[1] && t4.splice(r, 2, [o[0], o[1] + i[1]]);
    }
  return t4;
}
var A, x = Object.prototype.toString, O = function(t4) {
  var e = x.call(t4), n = e === "[object Arguments]";
  return n || (n = e !== "[object Array]" && t4 !== null && typeof t4 == "object" && typeof t4.length == "number" && t4.length >= 0 && x.call(t4.callee) === "[object Function]"), n;
};
if (!Object.keys) {
  var T = Object.prototype.hasOwnProperty, w = Object.prototype.toString, _ = O, S = Object.prototype.propertyIsEnumerable, k = !S.call({ toString: null }, "toString"), L = S.call(function() {
  }, "prototype"), C = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], j = function(t4) {
    var e = t4.constructor;
    return e && e.prototype === t4;
  }, P = { $applicationCache: true, $console: true, $external: true, $frame: true, $frameElement: true, $frames: true, $innerHeight: true, $innerWidth: true, $onmozfullscreenchange: true, $onmozfullscreenerror: true, $outerHeight: true, $outerWidth: true, $pageXOffset: true, $pageYOffset: true, $parent: true, $scrollLeft: true, $scrollTop: true, $scrollX: true, $scrollY: true, $self: true, $webkitIndexedDB: true, $webkitStorageInfo: true, $window: true }, I = function() {
    if (typeof window == "undefined")
      return false;
    for (var t4 in window)
      try {
        if (!P["$" + t4] && T.call(window, t4) && window[t4] !== null && typeof window[t4] == "object")
          try {
            j(window[t4]);
          } catch (e) {
            return true;
          }
      } catch (e) {
        return true;
      }
    return false;
  }();
  A = function(t4) {
    var e = t4 !== null && typeof t4 == "object", n = w.call(t4) === "[object Function]", r = _(t4), o = e && w.call(t4) === "[object String]", i = [];
    if (!e && !n && !r)
      throw new TypeError("Object.keys called on a non-object");
    var s = L && n;
    if (o && t4.length > 0 && !T.call(t4, 0))
      for (var l2 = 0; l2 < t4.length; ++l2)
        i.push(String(l2));
    if (r && t4.length > 0)
      for (var a2 = 0; a2 < t4.length; ++a2)
        i.push(String(a2));
    else
      for (var u2 in t4)
        s && u2 === "prototype" || !T.call(t4, u2) || i.push(String(u2));
    if (k)
      for (var c2 = function(t5) {
        if (typeof window == "undefined" || !I)
          return j(t5);
        try {
          return j(t5);
        } catch (e2) {
          return false;
        }
      }(t4), h2 = 0; h2 < C.length; ++h2)
        c2 && C[h2] === "constructor" || !T.call(t4, C[h2]) || i.push(C[h2]);
    return i;
  };
}
var R = A, q = Array.prototype.slice, B = Object.keys, D = B ? function(t4) {
  return B(t4);
} : R, M = Object.keys;
D.shim = function() {
  Object.keys ? function() {
    var t4 = Object.keys(arguments);
    return t4 && t4.length === arguments.length;
  }(1, 2) || (Object.keys = function(t4) {
    return O(t4) ? M(q.call(t4)) : M(t4);
  }) : Object.keys = D;
  return Object.keys || D;
};
var U = D, F = u.Symbol, K = function() {
  return typeof F == "function" && (typeof Symbol == "function" && (typeof F("foo") == "symbol" && (typeof Symbol("bar") == "symbol" && function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return false;
    if (typeof Symbol.iterator == "symbol")
      return true;
    var t4 = {}, e = Symbol("test"), n = Object(e);
    if (typeof e == "string")
      return false;
    if (Object.prototype.toString.call(e) !== "[object Symbol]")
      return false;
    if (Object.prototype.toString.call(n) !== "[object Symbol]")
      return false;
    for (e in t4[e] = 42, t4)
      return false;
    if (typeof Object.keys == "function" && Object.keys(t4).length !== 0)
      return false;
    if (typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t4).length !== 0)
      return false;
    var r = Object.getOwnPropertySymbols(t4);
    if (r.length !== 1 || r[0] !== e)
      return false;
    if (!Object.prototype.propertyIsEnumerable.call(t4, e))
      return false;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var o = Object.getOwnPropertyDescriptor(t4, e);
      if (o.value !== 42 || o.enumerable !== true)
        return false;
    }
    return true;
  }())));
}, z = "Function.prototype.bind called on incompatible ", $ = Array.prototype.slice, W = Object.prototype.toString, G = Function.prototype.bind || function(t4) {
  var e = this;
  if (typeof e != "function" || W.call(e) !== "[object Function]")
    throw new TypeError(z + e);
  for (var n, r = $.call(arguments, 1), o = function() {
    if (this instanceof n) {
      var o2 = e.apply(this, r.concat($.call(arguments)));
      return Object(o2) === o2 ? o2 : this;
    }
    return e.apply(t4, r.concat($.call(arguments)));
  }, i = Math.max(0, e.length - r.length), s = [], l2 = 0; l2 < i; l2++)
    s.push("$" + l2);
  if (n = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(o), e.prototype) {
    var a2 = function() {
    };
    a2.prototype = e.prototype, n.prototype = new a2(), a2.prototype = null;
  }
  return n;
}, H = G.call(Function.call, Object.prototype.hasOwnProperty), V = SyntaxError, Y = Function, X = TypeError, J = function(t4) {
  try {
    return Y('"use strict"; return (' + t4 + ").constructor;")();
  } catch (e) {
  }
}, Q = Object.getOwnPropertyDescriptor;
if (Q)
  try {
    Q({}, "");
  } catch (Zn) {
    Q = null;
  }
var Z = function() {
  throw new X();
}, tt = Q ? function() {
  try {
    return Z;
  } catch (t4) {
    try {
      return Q(arguments, "callee").get;
    } catch (e) {
      return Z;
    }
  }
}() : Z, et = K(), nt = Object.getPrototypeOf || function(t4) {
  return t4.__proto__;
}, rt = {}, ot = typeof Uint8Array == "undefined" ? void 0 : nt(Uint8Array), it = { "%AggregateError%": typeof AggregateError == "undefined" ? void 0 : AggregateError, "%Array%": Array, "%ArrayBuffer%": typeof ArrayBuffer == "undefined" ? void 0 : ArrayBuffer, "%ArrayIteratorPrototype%": et ? nt([][Symbol.iterator]()) : void 0, "%AsyncFromSyncIteratorPrototype%": void 0, "%AsyncFunction%": rt, "%AsyncGenerator%": rt, "%AsyncGeneratorFunction%": rt, "%AsyncIteratorPrototype%": rt, "%Atomics%": typeof Atomics == "undefined" ? void 0 : Atomics, "%BigInt%": typeof BigInt == "undefined" ? void 0 : BigInt, "%Boolean%": Boolean, "%DataView%": typeof DataView == "undefined" ? void 0 : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": Error, "%eval%": eval, "%EvalError%": EvalError, "%Float32Array%": typeof Float32Array == "undefined" ? void 0 : Float32Array, "%Float64Array%": typeof Float64Array == "undefined" ? void 0 : Float64Array, "%FinalizationRegistry%": typeof FinalizationRegistry == "undefined" ? void 0 : FinalizationRegistry, "%Function%": Y, "%GeneratorFunction%": rt, "%Int8Array%": typeof Int8Array == "undefined" ? void 0 : Int8Array, "%Int16Array%": typeof Int16Array == "undefined" ? void 0 : Int16Array, "%Int32Array%": typeof Int32Array == "undefined" ? void 0 : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": et ? nt(nt([][Symbol.iterator]())) : void 0, "%JSON%": typeof JSON == "object" ? JSON : void 0, "%Map%": typeof Map == "undefined" ? void 0 : Map, "%MapIteratorPrototype%": typeof Map != "undefined" && et ? nt((/* @__PURE__ */ new Map())[Symbol.iterator]()) : void 0, "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": typeof Promise == "undefined" ? void 0 : Promise, "%Proxy%": typeof Proxy == "undefined" ? void 0 : Proxy, "%RangeError%": RangeError, "%ReferenceError%": ReferenceError, "%Reflect%": typeof Reflect == "undefined" ? void 0 : Reflect, "%RegExp%": RegExp, "%Set%": typeof Set == "undefined" ? void 0 : Set, "%SetIteratorPrototype%": typeof Set != "undefined" && et ? nt((/* @__PURE__ */ new Set())[Symbol.iterator]()) : void 0, "%SharedArrayBuffer%": typeof SharedArrayBuffer == "undefined" ? void 0 : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": et ? nt(""[Symbol.iterator]()) : void 0, "%Symbol%": et ? Symbol : void 0, "%SyntaxError%": V, "%ThrowTypeError%": tt, "%TypedArray%": ot, "%TypeError%": X, "%Uint8Array%": typeof Uint8Array == "undefined" ? void 0 : Uint8Array, "%Uint8ClampedArray%": typeof Uint8ClampedArray == "undefined" ? void 0 : Uint8ClampedArray, "%Uint16Array%": typeof Uint16Array == "undefined" ? void 0 : Uint16Array, "%Uint32Array%": typeof Uint32Array == "undefined" ? void 0 : Uint32Array, "%URIError%": URIError, "%WeakMap%": typeof WeakMap == "undefined" ? void 0 : WeakMap, "%WeakRef%": typeof WeakRef == "undefined" ? void 0 : WeakRef, "%WeakSet%": typeof WeakSet == "undefined" ? void 0 : WeakSet }, st = function t2(e) {
  var n;
  if (e === "%AsyncFunction%")
    n = J("async function () {}");
  else if (e === "%GeneratorFunction%")
    n = J("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    n = J("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var r = t2("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var o = t2("%AsyncGenerator%");
    o && (n = nt(o.prototype));
  }
  return it[e] = n, n;
}, lt = { "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, at = G.call(Function.call, Array.prototype.concat), ut = G.call(Function.apply, Array.prototype.splice), ct = G.call(Function.call, String.prototype.replace), ht = G.call(Function.call, String.prototype.slice), ft = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, pt = /\\(\\)?/g, dt = function(t4) {
  var e = ht(t4, 0, 1), n = ht(t4, -1);
  if (e === "%" && n !== "%")
    throw new V("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && e !== "%")
    throw new V("invalid intrinsic syntax, expected opening `%`");
  var r = [];
  return ct(t4, ft, function(t5, e2, n2, o) {
    r[r.length] = n2 ? ct(o, pt, "$1") : e2 || t5;
  }), r;
}, yt = function(t4, e) {
  var n, r = t4;
  if (H(lt, r) && (r = "%" + (n = lt[r])[0] + "%"), H(it, r)) {
    var o = it[r];
    if (o === rt && (o = st(r)), o === void 0 && !e)
      throw new X("intrinsic " + t4 + " exists, but is not available. Please file an issue!");
    return { alias: n, name: r, value: o };
  }
  throw new V("intrinsic " + t4 + " does not exist!");
}, mt = function(t4, e) {
  if (typeof t4 != "string" || t4.length === 0)
    throw new X("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof e != "boolean")
    throw new X('"allowMissing" argument must be a boolean');
  var n = dt(t4), r = n.length > 0 ? n[0] : "", o = yt("%" + r + "%", e), i = o.name, s = o.value, l2 = false, a2 = o.alias;
  a2 && (r = a2[0], ut(n, at([0, 1], a2)));
  for (var u2 = 1, c2 = true; u2 < n.length; u2 += 1) {
    var h2 = n[u2], f2 = ht(h2, 0, 1), p2 = ht(h2, -1);
    if ((f2 === '"' || f2 === "'" || f2 === "`" || p2 === '"' || p2 === "'" || p2 === "`") && f2 !== p2)
      throw new V("property names with quotes must have matching quotes");
    if (h2 !== "constructor" && c2 || (l2 = true), H(it, i = "%" + (r += "." + h2) + "%"))
      s = it[i];
    else if (s != null) {
      if (!(h2 in s)) {
        if (!e)
          throw new X("base intrinsic for " + t4 + " exists, but the property is not available.");
        return;
      }
      if (Q && u2 + 1 >= n.length) {
        var d2 = Q(s, h2);
        s = (c2 = !!d2) && "get" in d2 && !("originalValue" in d2.get) ? d2.get : s[h2];
      } else
        c2 = H(s, h2), s = s[h2];
      c2 && !l2 && (it[i] = s);
    }
  }
  return s;
}, gt = h(function(t4) {
  var e = mt("%Function.prototype.apply%"), n = mt("%Function.prototype.call%"), r = mt("%Reflect.apply%", true) || G.call(n, e), o = mt("%Object.getOwnPropertyDescriptor%", true), i = mt("%Object.defineProperty%", true), s = mt("%Math.max%");
  if (i)
    try {
      i({}, "a", { value: 1 });
    } catch (Zn) {
      i = null;
    }
  t4.exports = function(t5) {
    var e2 = r(G, n, arguments);
    if (o && i) {
      var l3 = o(e2, "length");
      l3.configurable && i(e2, "length", { value: 1 + s(0, t5.length - (arguments.length - 1)) });
    }
    return e2;
  };
  var l2 = function() {
    return r(G, e, arguments);
  };
  i ? i(t4.exports, "apply", { value: l2 }) : t4.exports.apply = l2;
}), bt = gt(mt("String.prototype.indexOf")), vt = function(t4, e) {
  var n = mt(t4, !!e);
  return typeof n == "function" && bt(t4, ".prototype.") > -1 ? gt(n) : n;
}, Nt = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol", Et = vt("Object.prototype.toString"), At = function(t4) {
  return !(Nt && t4 && typeof t4 == "object" && Symbol.toStringTag in t4) && Et(t4) === "[object Arguments]";
}, xt = function(t4) {
  return !!At(t4) || t4 !== null && typeof t4 == "object" && typeof t4.length == "number" && t4.length >= 0 && Et(t4) !== "[object Array]" && Et(t4.callee) === "[object Function]";
}, Ot = function() {
  return At(arguments);
}();
At.isLegacyArguments = xt;
var Tt = Ot ? At : xt, wt = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", _t = Object.prototype.toString, St = Array.prototype.concat, kt = Object.defineProperty, Lt = kt && function() {
  var t4 = {};
  try {
    for (var e in kt(t4, "x", { enumerable: false, value: t4 }), t4)
      return false;
    return t4.x === t4;
  } catch (Zn) {
    return false;
  }
}(), Ct = function(t4, e, n, r) {
  var o;
  (!(e in t4) || typeof (o = r) == "function" && _t.call(o) === "[object Function]" && r()) && (Lt ? kt(t4, e, { configurable: true, enumerable: false, value: n, writable: true }) : t4[e] = n);
}, jt = function(t4, e) {
  var n = arguments.length > 2 ? arguments[2] : {}, r = U(e);
  wt && (r = St.call(r, Object.getOwnPropertySymbols(e)));
  for (var o = 0; o < r.length; o += 1)
    Ct(t4, r[o], e[r[o]], n[r[o]]);
};
jt.supportsDescriptors = !!Lt;
var Pt = jt, It = function(t4) {
  return t4 != t4;
}, Rt = function(t4, e) {
  return t4 === 0 && e === 0 ? 1 / t4 == 1 / e : t4 === e || !(!It(t4) || !It(e));
}, qt = function() {
  return typeof Object.is == "function" ? Object.is : Rt;
}, Bt = gt(qt(), Object);
Pt(Bt, { getPolyfill: qt, implementation: Rt, shim: function() {
  var t4 = qt();
  return Pt(Object, { is: t4 }, { is: function() {
    return Object.is !== t4;
  } }), t4;
} });
var Dt, Mt, Ut, Ft, Kt = Bt, zt = K() && typeof Symbol.toStringTag == "symbol";
if (zt) {
  Dt = vt("Object.prototype.hasOwnProperty"), Mt = vt("RegExp.prototype.exec"), Ut = {};
  var $t = function() {
    throw Ut;
  };
  Ft = { toString: $t, valueOf: $t }, typeof Symbol.toPrimitive == "symbol" && (Ft[Symbol.toPrimitive] = $t);
}
var Wt = vt("Object.prototype.toString"), Gt = Object.getOwnPropertyDescriptor, Ht = zt ? function(t4) {
  if (!t4 || typeof t4 != "object")
    return false;
  var e = Gt(t4, "lastIndex");
  if (!(e && Dt(e, "value")))
    return false;
  try {
    Mt(t4, Ft);
  } catch (Zn) {
    return Zn === Ut;
  }
} : function(t4) {
  return !(!t4 || typeof t4 != "object" && typeof t4 != "function") && Wt(t4) === "[object RegExp]";
}, Vt = Object, Yt = TypeError, Xt = function() {
  if (this != null && this !== Vt(this))
    throw new Yt("RegExp.prototype.flags getter called on non-object");
  var t4 = "";
  return this.global && (t4 += "g"), this.ignoreCase && (t4 += "i"), this.multiline && (t4 += "m"), this.dotAll && (t4 += "s"), this.unicode && (t4 += "u"), this.sticky && (t4 += "y"), t4;
}, Jt = Pt.supportsDescriptors, Qt = Object.getOwnPropertyDescriptor, Zt = TypeError, te = function() {
  if (!Jt)
    throw new Zt("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
  if (/a/gim.flags === "gim") {
    var t4 = Qt(RegExp.prototype, "flags");
    if (t4 && typeof t4.get == "function" && typeof /a/.dotAll == "boolean")
      return t4.get;
  }
  return Xt;
}, ee = Pt.supportsDescriptors, ne = Object.getOwnPropertyDescriptor, re = Object.defineProperty, oe = TypeError, ie = Object.getPrototypeOf, se = /a/, le = gt(Xt);
Pt(le, { getPolyfill: te, implementation: Xt, shim: function() {
  if (!ee || !ie)
    throw new oe("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
  var t4 = te(), e = ie(se), n = ne(e, "flags");
  return n && n.get === t4 || re(e, "flags", { configurable: true, enumerable: false, get: t4 }), t4;
} });
var ae = le, ue = Date.prototype.getDay, ce = Object.prototype.toString, he = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol", fe = function(t4) {
  return typeof t4 == "object" && t4 !== null && (he ? function(t5) {
    try {
      return ue.call(t5), true;
    } catch (Zn) {
      return false;
    }
  }(t4) : ce.call(t4) === "[object Date]");
}, pe = Date.prototype.getTime;
function de(t4, e, n) {
  var r = n || {};
  return !!(r.strict ? Kt(t4, e) : t4 === e) || (!t4 || !e || typeof t4 != "object" && typeof e != "object" ? r.strict ? Kt(t4, e) : t4 == e : function(t5, e2, n2) {
    var r2, o;
    if (typeof t5 != typeof e2)
      return false;
    if (ye(t5) || ye(e2))
      return false;
    if (t5.prototype !== e2.prototype)
      return false;
    if (Tt(t5) !== Tt(e2))
      return false;
    var i = Ht(t5), s = Ht(e2);
    if (i !== s)
      return false;
    if (i || s)
      return t5.source === e2.source && ae(t5) === ae(e2);
    if (fe(t5) && fe(e2))
      return pe.call(t5) === pe.call(e2);
    var l2 = me(t5), a2 = me(e2);
    if (l2 !== a2)
      return false;
    if (l2 || a2) {
      if (t5.length !== e2.length)
        return false;
      for (r2 = 0; r2 < t5.length; r2++)
        if (t5[r2] !== e2[r2])
          return false;
      return true;
    }
    if (typeof t5 != typeof e2)
      return false;
    try {
      var u2 = U(t5), c2 = U(e2);
    } catch (Zn) {
      return false;
    }
    if (u2.length !== c2.length)
      return false;
    for (u2.sort(), c2.sort(), r2 = u2.length - 1; r2 >= 0; r2--)
      if (u2[r2] != c2[r2])
        return false;
    for (r2 = u2.length - 1; r2 >= 0; r2--)
      if (!de(t5[o = u2[r2]], e2[o], n2))
        return false;
    return true;
  }(t4, e, r));
}
function ye(t4) {
  return t4 == null;
}
function me(t4) {
  return !(!t4 || typeof t4 != "object" || typeof t4.length != "number") && (typeof t4.copy == "function" && typeof t4.slice == "function" && !(t4.length > 0 && typeof t4[0] != "number"));
}
var ge = de, be = Object.prototype.hasOwnProperty, ve = Object.prototype.toString, Ne = Object.defineProperty, Ee = Object.getOwnPropertyDescriptor, Ae = function(t4) {
  return typeof Array.isArray == "function" ? Array.isArray(t4) : ve.call(t4) === "[object Array]";
}, xe = function(t4) {
  if (!t4 || ve.call(t4) !== "[object Object]")
    return false;
  var e, n = be.call(t4, "constructor"), r = t4.constructor && t4.constructor.prototype && be.call(t4.constructor.prototype, "isPrototypeOf");
  if (t4.constructor && !n && !r)
    return false;
  for (e in t4)
    ;
  return e === void 0 || be.call(t4, e);
}, Oe = function(t4, e) {
  Ne && e.name === "__proto__" ? Ne(t4, e.name, { enumerable: true, configurable: true, value: e.newValue, writable: true }) : t4[e.name] = e.newValue;
}, Te = function(t4, e) {
  if (e === "__proto__") {
    if (!be.call(t4, e))
      return;
    if (Ee)
      return Ee(t4, e).value;
  }
  return t4[e];
}, we = function t3() {
  var e, n, r, o, i, s, l2 = arguments[0], a2 = 1, u2 = arguments.length, c2 = false;
  for (typeof l2 == "boolean" && (c2 = l2, l2 = arguments[1] || {}, a2 = 2), (l2 == null || typeof l2 != "object" && typeof l2 != "function") && (l2 = {}); a2 < u2; ++a2)
    if ((e = arguments[a2]) != null)
      for (n in e)
        r = Te(l2, n), l2 !== (o = Te(e, n)) && (c2 && o && (xe(o) || (i = Ae(o))) ? (i ? (i = false, s = r && Ae(r) ? r : []) : s = r && xe(r) ? r : {}, Oe(l2, { name: n, newValue: t3(c2, s, o) })) : o !== void 0 && Oe(l2, { name: n, newValue: o }));
  return l2;
}, _e = { attributes: { compose: function(t4, e, n) {
  typeof t4 != "object" && (t4 = {}), typeof e != "object" && (e = {});
  var r = we(true, {}, e);
  for (var o in n || (r = Object.keys(r).reduce(function(t5, e2) {
    return r[e2] != null && (t5[e2] = r[e2]), t5;
  }, {})), t4)
    t4[o] !== void 0 && e[o] === void 0 && (r[o] = t4[o]);
  return Object.keys(r).length > 0 ? r : void 0;
}, diff: function(t4, e) {
  typeof t4 != "object" && (t4 = {}), typeof e != "object" && (e = {});
  var n = Object.keys(t4).concat(Object.keys(e)).reduce(function(n2, r) {
    return ge(t4[r], e[r]) || (n2[r] = e[r] === void 0 ? null : e[r]), n2;
  }, {});
  return Object.keys(n).length > 0 ? n : void 0;
}, transform: function(t4, e, n) {
  if (typeof t4 != "object")
    return e;
  if (typeof e == "object") {
    if (!n)
      return e;
    var r = Object.keys(e).reduce(function(n2, r2) {
      return t4[r2] === void 0 && (n2[r2] = e[r2]), n2;
    }, {});
    return Object.keys(r).length > 0 ? r : void 0;
  }
} }, iterator: function(t4) {
  return new Se(t4);
}, length: function(t4) {
  return typeof t4.delete == "number" ? t4.delete : typeof t4.retain == "number" ? t4.retain : typeof t4.insert == "string" ? t4.insert.length : 1;
} };
function Se(t4) {
  this.ops = t4, this.index = 0, this.offset = 0;
}
Se.prototype.hasNext = function() {
  return this.peekLength() < 1 / 0;
}, Se.prototype.next = function(t4) {
  t4 || (t4 = 1 / 0);
  var e = this.ops[this.index];
  if (e) {
    var n = this.offset, r = _e.length(e);
    if (t4 >= r - n ? (t4 = r - n, this.index += 1, this.offset = 0) : this.offset += t4, typeof e.delete == "number")
      return { delete: t4 };
    var o = {};
    return e.attributes && (o.attributes = e.attributes), typeof e.retain == "number" ? o.retain = t4 : typeof e.insert == "string" ? o.insert = e.insert.substr(n, t4) : o.insert = e.insert, o;
  }
  return { retain: 1 / 0 };
}, Se.prototype.peek = function() {
  return this.ops[this.index];
}, Se.prototype.peekLength = function() {
  return this.ops[this.index] ? _e.length(this.ops[this.index]) - this.offset : 1 / 0;
}, Se.prototype.peekType = function() {
  return this.ops[this.index] ? typeof this.ops[this.index].delete == "number" ? "delete" : typeof this.ops[this.index].retain == "number" ? "retain" : "insert" : "retain";
}, Se.prototype.rest = function() {
  if (this.hasNext()) {
    if (this.offset === 0)
      return this.ops.slice(this.index);
    var t4 = this.offset, e = this.index, n = this.next(), r = this.ops.slice(this.index);
    return this.offset = t4, this.index = e, [n].concat(r);
  }
  return [];
};
var ke = _e, Le = String.fromCharCode(0), Ce = function(t4) {
  Array.isArray(t4) ? this.ops = t4 : t4 != null && Array.isArray(t4.ops) ? this.ops = t4.ops : this.ops = [];
};
Ce.prototype.insert = function(t4, e) {
  var n = {};
  return t4.length === 0 ? this : (n.insert = t4, e != null && typeof e == "object" && Object.keys(e).length > 0 && (n.attributes = e), this.push(n));
}, Ce.prototype.delete = function(t4) {
  return t4 <= 0 ? this : this.push({ delete: t4 });
}, Ce.prototype.retain = function(t4, e) {
  if (t4 <= 0)
    return this;
  var n = { retain: t4 };
  return e != null && typeof e == "object" && Object.keys(e).length > 0 && (n.attributes = e), this.push(n);
}, Ce.prototype.push = function(t4) {
  var e = this.ops.length, n = this.ops[e - 1];
  if (t4 = we(true, {}, t4), typeof n == "object") {
    if (typeof t4.delete == "number" && typeof n.delete == "number")
      return this.ops[e - 1] = { delete: n.delete + t4.delete }, this;
    if (typeof n.delete == "number" && t4.insert != null && (e -= 1, typeof (n = this.ops[e - 1]) != "object"))
      return this.ops.unshift(t4), this;
    if (ge(t4.attributes, n.attributes)) {
      if (typeof t4.insert == "string" && typeof n.insert == "string")
        return this.ops[e - 1] = { insert: n.insert + t4.insert }, typeof t4.attributes == "object" && (this.ops[e - 1].attributes = t4.attributes), this;
      if (typeof t4.retain == "number" && typeof n.retain == "number")
        return this.ops[e - 1] = { retain: n.retain + t4.retain }, typeof t4.attributes == "object" && (this.ops[e - 1].attributes = t4.attributes), this;
    }
  }
  return e === this.ops.length ? this.ops.push(t4) : this.ops.splice(e, 0, t4), this;
}, Ce.prototype.chop = function() {
  var t4 = this.ops[this.ops.length - 1];
  return t4 && t4.retain && !t4.attributes && this.ops.pop(), this;
}, Ce.prototype.filter = function(t4) {
  return this.ops.filter(t4);
}, Ce.prototype.forEach = function(t4) {
  this.ops.forEach(t4);
}, Ce.prototype.map = function(t4) {
  return this.ops.map(t4);
}, Ce.prototype.partition = function(t4) {
  var e = [], n = [];
  return this.forEach(function(r) {
    (t4(r) ? e : n).push(r);
  }), [e, n];
}, Ce.prototype.reduce = function(t4, e) {
  return this.ops.reduce(t4, e);
}, Ce.prototype.changeLength = function() {
  return this.reduce(function(t4, e) {
    return e.insert ? t4 + ke.length(e) : e.delete ? t4 - e.delete : t4;
  }, 0);
}, Ce.prototype.length = function() {
  return this.reduce(function(t4, e) {
    return t4 + ke.length(e);
  }, 0);
}, Ce.prototype.slice = function(t4, e) {
  t4 = t4 || 0, typeof e != "number" && (e = 1 / 0);
  for (var n = [], r = ke.iterator(this.ops), o = 0; o < e && r.hasNext(); ) {
    var i;
    o < t4 ? i = r.next(t4 - o) : (i = r.next(e - o), n.push(i)), o += ke.length(i);
  }
  return new Ce(n);
}, Ce.prototype.compose = function(t4) {
  var e = ke.iterator(this.ops), n = ke.iterator(t4.ops), r = [], o = n.peek();
  if (o != null && typeof o.retain == "number" && o.attributes == null) {
    for (var i = o.retain; e.peekType() === "insert" && e.peekLength() <= i; )
      i -= e.peekLength(), r.push(e.next());
    o.retain - i > 0 && n.next(o.retain - i);
  }
  for (var s = new Ce(r); e.hasNext() || n.hasNext(); )
    if (n.peekType() === "insert")
      s.push(n.next());
    else if (e.peekType() === "delete")
      s.push(e.next());
    else {
      var l2 = Math.min(e.peekLength(), n.peekLength()), a2 = e.next(l2), u2 = n.next(l2);
      if (typeof u2.retain == "number") {
        var c2 = {};
        typeof a2.retain == "number" ? c2.retain = l2 : c2.insert = a2.insert;
        var h2 = ke.attributes.compose(a2.attributes, u2.attributes, typeof a2.retain == "number");
        if (h2 && (c2.attributes = h2), s.push(c2), !n.hasNext() && ge(s.ops[s.ops.length - 1], c2)) {
          var f2 = new Ce(e.rest());
          return s.concat(f2).chop();
        }
      } else
        typeof u2.delete == "number" && typeof a2.retain == "number" && s.push(u2);
    }
  return s.chop();
}, Ce.prototype.concat = function(t4) {
  var e = new Ce(this.ops.slice());
  return t4.ops.length > 0 && (e.push(t4.ops[0]), e.ops = e.ops.concat(t4.ops.slice(1))), e;
}, Ce.prototype.diff = function(t4, e) {
  if (this.ops === t4.ops)
    return new Ce();
  var n = [this, t4].map(function(e2) {
    return e2.map(function(n2) {
      if (n2.insert != null)
        return typeof n2.insert == "string" ? n2.insert : Le;
      throw new Error("diff() called " + (e2 === t4 ? "on" : "with") + " non-document");
    }).join("");
  }), r = new Ce(), o = N(n[0], n[1], e), i = ke.iterator(this.ops), s = ke.iterator(t4.ops);
  return o.forEach(function(t5) {
    for (var e2 = t5[1].length; e2 > 0; ) {
      var n2 = 0;
      switch (t5[0]) {
        case N.INSERT:
          n2 = Math.min(s.peekLength(), e2), r.push(s.next(n2));
          break;
        case N.DELETE:
          n2 = Math.min(e2, i.peekLength()), i.next(n2), r.delete(n2);
          break;
        case N.EQUAL:
          n2 = Math.min(i.peekLength(), s.peekLength(), e2);
          var o2 = i.next(n2), l2 = s.next(n2);
          ge(o2.insert, l2.insert) ? r.retain(n2, ke.attributes.diff(o2.attributes, l2.attributes)) : r.push(l2).delete(n2);
      }
      e2 -= n2;
    }
  }), r.chop();
}, Ce.prototype.eachLine = function(t4, e) {
  e = e || "\n";
  for (var n = ke.iterator(this.ops), r = new Ce(), o = 0; n.hasNext(); ) {
    if (n.peekType() !== "insert")
      return;
    var i = n.peek(), s = ke.length(i) - n.peekLength(), l2 = typeof i.insert == "string" ? i.insert.indexOf(e, s) - s : -1;
    if (l2 < 0)
      r.push(n.next());
    else if (l2 > 0)
      r.push(n.next(l2));
    else {
      if (t4(r, n.next(1).attributes || {}, o) === false)
        return;
      o += 1, r = new Ce();
    }
  }
  r.length() > 0 && t4(r, {}, o);
}, Ce.prototype.transform = function(t4, e) {
  if (e = !!e, typeof t4 == "number")
    return this.transformPosition(t4, e);
  for (var n = ke.iterator(this.ops), r = ke.iterator(t4.ops), o = new Ce(); n.hasNext() || r.hasNext(); )
    if (n.peekType() !== "insert" || !e && r.peekType() === "insert")
      if (r.peekType() === "insert")
        o.push(r.next());
      else {
        var i = Math.min(n.peekLength(), r.peekLength()), s = n.next(i), l2 = r.next(i);
        if (s.delete)
          continue;
        l2.delete ? o.push(l2) : o.retain(i, ke.attributes.transform(s.attributes, l2.attributes, e));
      }
    else
      o.retain(ke.length(n.next()));
  return o.chop();
}, Ce.prototype.transformPosition = function(t4, e) {
  e = !!e;
  for (var n = ke.iterator(this.ops), r = 0; n.hasNext() && r <= t4; ) {
    var o = n.peekLength(), i = n.peekType();
    n.next(), i !== "delete" ? (i === "insert" && (r < t4 || !e) && (t4 += o), r += o) : t4 -= Math.min(o, t4 - r);
  }
  return t4;
};
var je = Ce;
class Pe extends f.Embed {
  static value() {
  }
  insertInto(t4, e) {
    t4.children.length === 0 ? super.insertInto(t4, e) : this.remove();
  }
  length() {
    return 0;
  }
  value() {
    return "";
  }
}
Pe.blotName = "break", Pe.tagName = "BR";
class Ie extends f.Text {
}
class Re extends f.Inline {
  static compare(t4, e) {
    let n = Re.order.indexOf(t4), r = Re.order.indexOf(e);
    return n >= 0 || r >= 0 ? n - r : t4 === e ? 0 : t4 < e ? -1 : 1;
  }
  formatAt(t4, e, n, r) {
    if (Re.compare(this.statics.blotName, n) < 0 && f.query(n, f.Scope.BLOT)) {
      let o = this.isolate(t4, e);
      r && o.wrap(n, r);
    } else
      super.formatAt(t4, e, n, r);
  }
  optimize(t4) {
    if (super.optimize(t4), this.parent instanceof Re && Re.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
      let t5 = this.parent.isolate(this.offset(), this.length());
      this.moveChildren(t5), t5.wrap(this);
    }
  }
}
Re.allowedChildren = [Re, f.Embed, Ie], Re.order = ["cursor", "inline", "underline", "strike", "italic", "bold", "script", "link", "code"];
class qe extends f.Embed {
  attach() {
    super.attach(), this.attributes = new f.Attributor.Store(this.domNode);
  }
  delta() {
    return new je().insert(this.value(), we(this.formats(), this.attributes.values()));
  }
  format(t4, e) {
    let n = f.query(t4, f.Scope.BLOCK_ATTRIBUTE);
    n != null && this.attributes.attribute(n, e);
  }
  formatAt(t4, e, n, r) {
    this.format(n, r);
  }
  insertAt(t4, e, n) {
    if (typeof e == "string" && e.endsWith("\n")) {
      let n2 = f.create(Be.blotName);
      this.parent.insertBefore(n2, t4 === 0 ? this : this.next), n2.insertAt(0, e.slice(0, -1));
    } else
      super.insertAt(t4, e, n);
  }
}
qe.scope = f.Scope.BLOCK_BLOT;
class Be extends f.Block {
  constructor(t4) {
    super(t4), this.cache = {};
  }
  delta() {
    return this.cache.delta == null && (this.cache.delta = this.descendants(f.Leaf).reduce((t4, e) => e.length() === 0 ? t4 : t4.insert(e.value(), De(e)), new je()).insert("\n", De(this))), this.cache.delta;
  }
  deleteAt(t4, e) {
    super.deleteAt(t4, e), this.cache = {};
  }
  formatAt(t4, e, n, r) {
    e <= 0 || (f.query(n, f.Scope.BLOCK) ? t4 + e === this.length() && this.format(n, r) : super.formatAt(t4, Math.min(e, this.length() - t4 - 1), n, r), this.cache = {});
  }
  insertAt(t4, e, n) {
    if (n != null)
      return super.insertAt(t4, e, n);
    if (e.length === 0)
      return;
    let r = e.split("\n"), o = r.shift();
    o.length > 0 && (t4 < this.length() - 1 || this.children.tail == null ? super.insertAt(Math.min(t4, this.length() - 1), o) : this.children.tail.insertAt(this.children.tail.length(), o), this.cache = {});
    let i = this;
    r.reduce(function(t5, e2) {
      return i = i.split(t5, true), i.insertAt(0, e2), e2.length;
    }, t4 + o.length);
  }
  insertBefore(t4, e) {
    let n = this.children.head;
    super.insertBefore(t4, e), n instanceof Pe && n.remove(), this.cache = {};
  }
  length() {
    return this.cache.length == null && (this.cache.length = super.length() + 1), this.cache.length;
  }
  moveChildren(t4, e) {
    super.moveChildren(t4, e), this.cache = {};
  }
  optimize(t4) {
    super.optimize(t4), this.cache = {};
  }
  path(t4) {
    return super.path(t4, true);
  }
  removeChild(t4) {
    super.removeChild(t4), this.cache = {};
  }
  split(t4, e = false) {
    if (e && (t4 === 0 || t4 >= this.length() - 1)) {
      let e2 = this.clone();
      return t4 === 0 ? (this.parent.insertBefore(e2, this), this) : (this.parent.insertBefore(e2, this.next), e2);
    }
    {
      let n = super.split(t4, e);
      return this.cache = {}, n;
    }
  }
}
function De(t4, e = {}) {
  return t4 == null ? e : (typeof t4.formats == "function" && (e = we(e, t4.formats())), t4.parent == null || t4.parent.blotName == "scroll" || t4.parent.statics.scope !== t4.statics.scope ? e : De(t4.parent, e));
}
Be.blotName = "block", Be.tagName = "P", Be.defaultChild = "break", Be.allowedChildren = [Re, f.Embed, Ie];
class Me extends Be {
  static create(t4) {
    let e = super.create(t4);
    return e.setAttribute("spellcheck", false), e;
  }
  static formats() {
    return true;
  }
  delta() {
    let t4 = this.domNode.textContent;
    return t4.endsWith("\n") && (t4 = t4.slice(0, -1)), t4.split("\n").reduce((t5, e) => t5.insert(e).insert("\n", this.formats()), new je());
  }
  format(t4, e) {
    if (t4 === this.statics.blotName && e)
      return;
    let [n] = this.descendant(Ie, this.length() - 1);
    n != null && n.deleteAt(n.length() - 1, 1), super.format(t4, e);
  }
  formatAt(t4, e, n, r) {
    if (e === 0)
      return;
    if (f.query(n, f.Scope.BLOCK) == null || n === this.statics.blotName && r === this.statics.formats(this.domNode))
      return;
    let o = this.newlineIndex(t4);
    if (o < 0 || o >= t4 + e)
      return;
    let i = this.newlineIndex(t4, true) + 1, s = o - i + 1, l2 = this.isolate(i, s), a2 = l2.next;
    l2.format(n, r), a2 instanceof Me && a2.formatAt(0, t4 - i + e - s, n, r);
  }
  insertAt(t4, e, n) {
    if (n != null)
      return;
    let [r, o] = this.descendant(Ie, t4);
    r.insertAt(o, e);
  }
  length() {
    let t4 = this.domNode.textContent.length;
    return this.domNode.textContent.endsWith("\n") ? t4 : t4 + 1;
  }
  newlineIndex(t4, e = false) {
    if (e)
      return this.domNode.textContent.slice(0, t4).lastIndexOf("\n");
    {
      let e2 = this.domNode.textContent.slice(t4).indexOf("\n");
      return e2 > -1 ? t4 + e2 : -1;
    }
  }
  optimize(t4) {
    this.domNode.textContent.endsWith("\n") || this.appendChild(f.create("text", "\n")), super.optimize(t4);
    let e = this.next;
    e != null && e.prev === this && e.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === e.statics.formats(e.domNode) && (e.optimize(t4), e.moveChildren(this), e.remove());
  }
  replace(t4) {
    super.replace(t4), [].slice.call(this.domNode.querySelectorAll("*")).forEach(function(t5) {
      let e = f.find(t5);
      e == null ? t5.parentNode.removeChild(t5) : e instanceof f.Embed ? e.remove() : e.unwrap();
    });
  }
}
Me.blotName = "code-block", Me.tagName = "PRE", Me.TAB = "  ";
class Ue extends f.Embed {
  static value() {
  }
  constructor(t4, e) {
    super(t4), this.selection = e, this.textNode = document.createTextNode(Ue.CONTENTS), this.domNode.appendChild(this.textNode), this._length = 0;
  }
  detach() {
    this.parent != null && this.parent.removeChild(this);
  }
  format(t4, e) {
    if (this._length !== 0)
      return super.format(t4, e);
    let n = this, r = 0;
    for (; n != null && n.statics.scope !== f.Scope.BLOCK_BLOT; )
      r += n.offset(n.parent), n = n.parent;
    n != null && (this._length = Ue.CONTENTS.length, n.optimize(), n.formatAt(r, Ue.CONTENTS.length, t4, e), this._length = 0);
  }
  index(t4, e) {
    return t4 === this.textNode ? 0 : super.index(t4, e);
  }
  length() {
    return this._length;
  }
  position() {
    return [this.textNode, this.textNode.data.length];
  }
  remove() {
    super.remove(), this.parent = null;
  }
  restore() {
    if (this.selection.composing || this.parent == null)
      return;
    let t4, e, n, r = this.textNode, o = this.selection.getNativeRange();
    for (o != null && o.start.node === r && o.end.node === r && ([t4, e, n] = [r, o.start.offset, o.end.offset]); this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode; )
      this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
    if (this.textNode.data !== Ue.CONTENTS) {
      let e2 = this.textNode.data.split(Ue.CONTENTS).join("");
      this.next instanceof Ie ? (t4 = this.next.domNode, this.next.insertAt(0, e2), this.textNode.data = Ue.CONTENTS) : (this.textNode.data = e2, this.parent.insertBefore(f.create(this.textNode), this), this.textNode = document.createTextNode(Ue.CONTENTS), this.domNode.appendChild(this.textNode));
    }
    return this.remove(), e != null ? ([e, n] = [e, n].map(function(e2) {
      return Math.max(0, Math.min(t4.data.length, e2 - 1));
    }), { startNode: t4, startOffset: e, endNode: t4, endOffset: n }) : void 0;
  }
  update(t4, e) {
    if (t4.some((t5) => t5.type === "characterData" && t5.target === this.textNode)) {
      let t5 = this.restore();
      t5 && (e.range = t5);
    }
  }
  value() {
    return "";
  }
}
Ue.blotName = "cursor", Ue.className = "ql-cursor", Ue.tagName = "span", Ue.CONTENTS = "\uFEFF";
var Fe = h(function(t4) {
  var e = function() {
    function t5(t6, e3) {
      return e3 != null && t6 instanceof e3;
    }
    var e2, n, r;
    try {
      e2 = Map;
    } catch (l2) {
      e2 = function() {
      };
    }
    try {
      n = Set;
    } catch (l2) {
      n = function() {
      };
    }
    try {
      r = Promise;
    } catch (l2) {
      r = function() {
      };
    }
    function o(i2, l2, a2, u2, c2) {
      typeof l2 == "object" && (a2 = l2.depth, u2 = l2.prototype, c2 = l2.includeNonEnumerable, l2 = l2.circular);
      var h2 = [], f2 = [], p2 = typeof Buffer != "undefined";
      return l2 === void 0 && (l2 = true), a2 === void 0 && (a2 = 1 / 0), function i3(a3, d2) {
        if (a3 === null)
          return null;
        if (d2 === 0)
          return a3;
        var y2, m2;
        if (typeof a3 != "object")
          return a3;
        if (t5(a3, e2))
          y2 = new e2();
        else if (t5(a3, n))
          y2 = new n();
        else if (t5(a3, r))
          y2 = new r(function(t6, e3) {
            a3.then(function(e4) {
              t6(i3(e4, d2 - 1));
            }, function(t7) {
              e3(i3(t7, d2 - 1));
            });
          });
        else if (o.__isArray(a3))
          y2 = [];
        else if (o.__isRegExp(a3))
          y2 = new RegExp(a3.source, s(a3)), a3.lastIndex && (y2.lastIndex = a3.lastIndex);
        else if (o.__isDate(a3))
          y2 = new Date(a3.getTime());
        else {
          if (p2 && Buffer.isBuffer(a3))
            return y2 = Buffer.allocUnsafe ? Buffer.allocUnsafe(a3.length) : new Buffer(a3.length), a3.copy(y2), y2;
          t5(a3, Error) ? y2 = Object.create(a3) : u2 === void 0 ? (m2 = Object.getPrototypeOf(a3), y2 = Object.create(m2)) : (y2 = Object.create(u2), m2 = u2);
        }
        if (l2) {
          var g2 = h2.indexOf(a3);
          if (g2 != -1)
            return f2[g2];
          h2.push(a3), f2.push(y2);
        }
        for (var b2 in t5(a3, e2) && a3.forEach(function(t6, e3) {
          var n2 = i3(e3, d2 - 1), r2 = i3(t6, d2 - 1);
          y2.set(n2, r2);
        }), t5(a3, n) && a3.forEach(function(t6) {
          var e3 = i3(t6, d2 - 1);
          y2.add(e3);
        }), a3) {
          var v2;
          m2 && (v2 = Object.getOwnPropertyDescriptor(m2, b2)), v2 && v2.set == null || (y2[b2] = i3(a3[b2], d2 - 1));
        }
        if (Object.getOwnPropertySymbols) {
          var N2 = Object.getOwnPropertySymbols(a3);
          for (b2 = 0; b2 < N2.length; b2++) {
            var E2 = N2[b2];
            (!(x2 = Object.getOwnPropertyDescriptor(a3, E2)) || x2.enumerable || c2) && (y2[E2] = i3(a3[E2], d2 - 1), x2.enumerable || Object.defineProperty(y2, E2, { enumerable: false }));
          }
        }
        if (c2) {
          var A2 = Object.getOwnPropertyNames(a3);
          for (b2 = 0; b2 < A2.length; b2++) {
            var x2, O2 = A2[b2];
            (x2 = Object.getOwnPropertyDescriptor(a3, O2)) && x2.enumerable || (y2[O2] = i3(a3[O2], d2 - 1), Object.defineProperty(y2, O2, { enumerable: false }));
          }
        }
        return y2;
      }(i2, a2);
    }
    function i(t6) {
      return Object.prototype.toString.call(t6);
    }
    function s(t6) {
      var e3 = "";
      return t6.global && (e3 += "g"), t6.ignoreCase && (e3 += "i"), t6.multiline && (e3 += "m"), e3;
    }
    return o.clonePrototype = function(t6) {
      if (t6 === null)
        return null;
      var e3 = function() {
      };
      return e3.prototype = t6, new e3();
    }, o.__objToStr = i, o.__isDate = function(t6) {
      return typeof t6 == "object" && i(t6) === "[object Date]";
    }, o.__isArray = function(t6) {
      return typeof t6 == "object" && i(t6) === "[object Array]";
    }, o.__isRegExp = function(t6) {
      return typeof t6 == "object" && i(t6) === "[object RegExp]";
    }, o.__getRegExpFlags = s, o;
  }();
  t4.exports && (t4.exports = e);
});
const Ke = /^[ -~]*$/;
class ze {
  constructor(t4) {
    this.scroll = t4, this.delta = this.getDelta();
  }
  applyDelta(t4) {
    let e = false;
    this.scroll.update();
    let n = this.scroll.length();
    return this.scroll.batchStart(), (t4 = t4.reduce(function(t5, e2) {
      if (e2.insert === 1) {
        let n2 = Fe(e2.attributes);
        return delete n2.image, t5.insert({ image: e2.attributes.image }, n2);
      }
      if (e2.attributes == null || e2.attributes.list !== true && e2.attributes.bullet !== true || ((e2 = Fe(e2)).attributes.list ? e2.attributes.list = "ordered" : (e2.attributes.list = "bullet", delete e2.attributes.bullet)), typeof e2.insert == "string") {
        let n2 = e2.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
        return t5.insert(n2, e2.attributes);
      }
      return t5.push(e2);
    }, new je())).reduce((t5, r) => {
      let o = r.retain || r.delete || r.insert.length || 1, i = r.attributes || {};
      if (r.insert != null) {
        if (typeof r.insert == "string") {
          let o2 = r.insert;
          o2.endsWith("\n") && e && (e = false, o2 = o2.slice(0, -1)), t5 >= n && !o2.endsWith("\n") && (e = true), this.scroll.insertAt(t5, o2);
          let [s, l2] = this.scroll.line(t5), a2 = we({}, De(s));
          if (s instanceof Be) {
            let [t6] = s.descendant(f.Leaf, l2);
            a2 = we(a2, De(t6));
          }
          i = ke.attributes.diff(a2, i) || {};
        } else if (typeof r.insert == "object") {
          let e2 = Object.keys(r.insert)[0];
          if (e2 == null)
            return t5;
          this.scroll.insertAt(t5, e2, r.insert[e2]);
        }
        n += o;
      }
      return Object.keys(i).forEach((e2) => {
        this.scroll.formatAt(t5, o, e2, i[e2]);
      }), t5 + o;
    }, 0), t4.reduce((t5, e2) => typeof e2.delete == "number" ? (this.scroll.deleteAt(t5, e2.delete), t5) : t5 + (e2.retain || e2.insert.length || 1), 0), this.scroll.batchEnd(), this.update(t4);
  }
  deleteText(t4, e) {
    return this.scroll.deleteAt(t4, e), this.update(new je().retain(t4).delete(e));
  }
  formatLine(t4, e, n = {}) {
    return this.scroll.update(), Object.keys(n).forEach((r) => {
      if (this.scroll.whitelist != null && !this.scroll.whitelist[r])
        return;
      let o = this.scroll.lines(t4, Math.max(e, 1)), i = e;
      o.forEach((e2) => {
        let o2 = e2.length();
        if (e2 instanceof Me) {
          let o3 = t4 - e2.offset(this.scroll), s = e2.newlineIndex(o3 + i) - o3 + 1;
          e2.formatAt(o3, s, r, n[r]);
        } else
          e2.format(r, n[r]);
        i -= o2;
      });
    }), this.scroll.optimize(), this.update(new je().retain(t4).retain(e, Fe(n)));
  }
  formatText(t4, e, n = {}) {
    return Object.keys(n).forEach((r) => {
      this.scroll.formatAt(t4, e, r, n[r]);
    }), this.update(new je().retain(t4).retain(e, Fe(n)));
  }
  getContents(t4, e) {
    return this.delta.slice(t4, t4 + e);
  }
  getDelta() {
    return this.scroll.lines().reduce((t4, e) => t4.concat(e.delta()), new je());
  }
  getFormat(t4, e = 0) {
    let n = [], r = [];
    e === 0 ? this.scroll.path(t4).forEach(function(t5) {
      let [e2] = t5;
      e2 instanceof Be ? n.push(e2) : e2 instanceof f.Leaf && r.push(e2);
    }) : (n = this.scroll.lines(t4, e), r = this.scroll.descendants(f.Leaf, t4, e));
    let o = [n, r].map(function(t5) {
      if (t5.length === 0)
        return {};
      let e2 = De(t5.shift());
      for (; Object.keys(e2).length > 0; ) {
        let n2 = t5.shift();
        if (n2 == null)
          return e2;
        e2 = $e(De(n2), e2);
      }
      return e2;
    });
    return we.apply(we, o);
  }
  getText(t4, e) {
    return this.getContents(t4, e).filter(function(t5) {
      return typeof t5.insert == "string";
    }).map(function(t5) {
      return t5.insert;
    }).join("");
  }
  insertEmbed(t4, e, n) {
    return this.scroll.insertAt(t4, e, n), this.update(new je().retain(t4).insert({ [e]: n }));
  }
  insertText(t4, e, n = {}) {
    return e = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n"), this.scroll.insertAt(t4, e), Object.keys(n).forEach((r) => {
      this.scroll.formatAt(t4, e.length, r, n[r]);
    }), this.update(new je().retain(t4).insert(e, Fe(n)));
  }
  isBlank() {
    if (this.scroll.children.length == 0)
      return true;
    if (this.scroll.children.length > 1)
      return false;
    let t4 = this.scroll.children.head;
    return t4.statics.blotName === Be.blotName && (!(t4.children.length > 1) && t4.children.head instanceof Pe);
  }
  removeFormat(t4, e) {
    let n = this.getText(t4, e), [r, o] = this.scroll.line(t4 + e), i = 0, s = new je();
    r != null && (i = r instanceof Me ? r.newlineIndex(o) - o + 1 : r.length() - o, s = r.delta().slice(o, o + i - 1).insert("\n"));
    let l2 = this.getContents(t4, e + i).diff(new je().insert(n).concat(s)), a2 = new je().retain(t4).concat(l2);
    return this.applyDelta(a2);
  }
  update(t4, e = [], n) {
    let r = this.delta;
    if (e.length === 1 && e[0].type === "characterData" && e[0].target.data.match(Ke) && f.find(e[0].target)) {
      let o = f.find(e[0].target), i = De(o), s = o.offset(this.scroll), l2 = e[0].oldValue.replace(Ue.CONTENTS, ""), a2 = new je().insert(l2), u2 = new je().insert(o.value());
      t4 = new je().retain(s).concat(a2.diff(u2, n)).reduce(function(t5, e2) {
        return e2.insert ? t5.insert(e2.insert, i) : t5.push(e2);
      }, new je()), this.delta = r.compose(t4);
    } else
      this.delta = this.getDelta(), t4 && ge(r.compose(t4), this.delta) || (t4 = r.diff(this.delta, n));
    return t4;
  }
}
function $e(t4, e) {
  return Object.keys(e).reduce(function(n, r) {
    return t4[r] == null || (e[r] === t4[r] ? n[r] = e[r] : Array.isArray(e[r]) ? e[r].indexOf(t4[r]) < 0 && (n[r] = e[r].concat([t4[r]])) : n[r] = [e[r], t4[r]]), n;
  }, {});
}
var We = h(function(t4) {
  var e = Object.prototype.hasOwnProperty, n = "~";
  function r() {
  }
  function o(t5, e2, n2) {
    this.fn = t5, this.context = e2, this.once = n2 || false;
  }
  function i() {
    this._events = new r(), this._eventsCount = 0;
  }
  Object.create && (r.prototype = /* @__PURE__ */ Object.create(null), new r().__proto__ || (n = false)), i.prototype.eventNames = function() {
    var t5, r2, o2 = [];
    if (this._eventsCount === 0)
      return o2;
    for (r2 in t5 = this._events)
      e.call(t5, r2) && o2.push(n ? r2.slice(1) : r2);
    return Object.getOwnPropertySymbols ? o2.concat(Object.getOwnPropertySymbols(t5)) : o2;
  }, i.prototype.listeners = function(t5, e2) {
    var r2 = n ? n + t5 : t5, o2 = this._events[r2];
    if (e2)
      return !!o2;
    if (!o2)
      return [];
    if (o2.fn)
      return [o2.fn];
    for (var i2 = 0, s = o2.length, l2 = new Array(s); i2 < s; i2++)
      l2[i2] = o2[i2].fn;
    return l2;
  }, i.prototype.emit = function(t5, e2, r2, o2, i2, s) {
    var l2 = n ? n + t5 : t5;
    if (!this._events[l2])
      return false;
    var a2, u2, c2 = this._events[l2], h2 = arguments.length;
    if (c2.fn) {
      switch (c2.once && this.removeListener(t5, c2.fn, void 0, true), h2) {
        case 1:
          return c2.fn.call(c2.context), true;
        case 2:
          return c2.fn.call(c2.context, e2), true;
        case 3:
          return c2.fn.call(c2.context, e2, r2), true;
        case 4:
          return c2.fn.call(c2.context, e2, r2, o2), true;
        case 5:
          return c2.fn.call(c2.context, e2, r2, o2, i2), true;
        case 6:
          return c2.fn.call(c2.context, e2, r2, o2, i2, s), true;
      }
      for (u2 = 1, a2 = new Array(h2 - 1); u2 < h2; u2++)
        a2[u2 - 1] = arguments[u2];
      c2.fn.apply(c2.context, a2);
    } else {
      var f2, p2 = c2.length;
      for (u2 = 0; u2 < p2; u2++)
        switch (c2[u2].once && this.removeListener(t5, c2[u2].fn, void 0, true), h2) {
          case 1:
            c2[u2].fn.call(c2[u2].context);
            break;
          case 2:
            c2[u2].fn.call(c2[u2].context, e2);
            break;
          case 3:
            c2[u2].fn.call(c2[u2].context, e2, r2);
            break;
          case 4:
            c2[u2].fn.call(c2[u2].context, e2, r2, o2);
            break;
          default:
            if (!a2)
              for (f2 = 1, a2 = new Array(h2 - 1); f2 < h2; f2++)
                a2[f2 - 1] = arguments[f2];
            c2[u2].fn.apply(c2[u2].context, a2);
        }
    }
    return true;
  }, i.prototype.on = function(t5, e2, r2) {
    var i2 = new o(e2, r2 || this), s = n ? n + t5 : t5;
    return this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], i2] : this._events[s].push(i2) : (this._events[s] = i2, this._eventsCount++), this;
  }, i.prototype.once = function(t5, e2, r2) {
    var i2 = new o(e2, r2 || this, true), s = n ? n + t5 : t5;
    return this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], i2] : this._events[s].push(i2) : (this._events[s] = i2, this._eventsCount++), this;
  }, i.prototype.removeListener = function(t5, e2, o2, i2) {
    var s = n ? n + t5 : t5;
    if (!this._events[s])
      return this;
    if (!e2)
      return --this._eventsCount == 0 ? this._events = new r() : delete this._events[s], this;
    var l2 = this._events[s];
    if (l2.fn)
      l2.fn !== e2 || i2 && !l2.once || o2 && l2.context !== o2 || (--this._eventsCount == 0 ? this._events = new r() : delete this._events[s]);
    else {
      for (var a2 = 0, u2 = [], c2 = l2.length; a2 < c2; a2++)
        (l2[a2].fn !== e2 || i2 && !l2[a2].once || o2 && l2[a2].context !== o2) && u2.push(l2[a2]);
      u2.length ? this._events[s] = u2.length === 1 ? u2[0] : u2 : --this._eventsCount == 0 ? this._events = new r() : delete this._events[s];
    }
    return this;
  }, i.prototype.removeAllListeners = function(t5) {
    var e2;
    return t5 ? (e2 = n ? n + t5 : t5, this._events[e2] && (--this._eventsCount == 0 ? this._events = new r() : delete this._events[e2])) : (this._events = new r(), this._eventsCount = 0), this;
  }, i.prototype.off = i.prototype.removeListener, i.prototype.addListener = i.prototype.on, i.prototype.setMaxListeners = function() {
    return this;
  }, i.prefixed = n, i.EventEmitter = i, t4.exports = i;
});
let Ge = ["error", "warn", "log", "info"], He = "warn";
function Ve(t4, ...e) {
  Ge.indexOf(t4) <= Ge.indexOf(He) && console[t4](...e);
}
function Ye(t4) {
  return Ge.reduce(function(e, n) {
    return e[n] = Ve.bind(console, n, t4), e;
  }, {});
}
Ve.level = Ye.level = function(t4) {
  He = t4;
};
let Xe = Ye("quill:events");
["selectionchange", "mousedown", "mouseup", "click"].forEach(function(t4) {
  document.addEventListener(t4, (...t5) => {
    [].slice.call(document.querySelectorAll(".ql-container")).forEach((e) => {
      e.__quill && e.__quill.emitter && e.__quill.emitter.handleDOM(...t5);
    });
  });
});
class Je extends We {
  constructor() {
    super(), this.listeners = {}, this.on("error", Xe.error);
  }
  emit() {
    Xe.log.apply(Xe, arguments), super.emit.apply(this, arguments);
  }
  handleDOM(t4, ...e) {
    (this.listeners[t4.type] || []).forEach(function({ node: n, handler: r }) {
      (t4.target === n || n.contains(t4.target)) && r(t4, ...e);
    });
  }
  listenDOM(t4, e, n) {
    this.listeners[t4] || (this.listeners[t4] = []), this.listeners[t4].push({ node: e, handler: n });
  }
}
Je.events = { EDITOR_CHANGE: "editor-change", SCROLL_BEFORE_UPDATE: "scroll-before-update", SCROLL_OPTIMIZE: "scroll-optimize", SCROLL_UPDATE: "scroll-update", SELECTION_CHANGE: "selection-change", TEXT_CHANGE: "text-change" }, Je.sources = { API: "api", SILENT: "silent", USER: "user" };
class Qe {
  constructor(t4, e = {}) {
    this.quill = t4, this.options = e;
  }
}
Qe.DEFAULTS = {};
let Ze = Ye("quill:selection");
class tn {
  constructor(t4, e = 0) {
    this.index = t4, this.length = e;
  }
}
class en {
  constructor(t4, e) {
    this.emitter = e, this.scroll = t4, this.composing = false, this.mouseDown = false, this.root = this.scroll.domNode, this.cursor = f.create("cursor", this), this.lastRange = this.savedRange = new tn(0, 0), this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, () => {
      this.mouseDown || setTimeout(this.update.bind(this, Je.sources.USER), 1);
    }), this.emitter.on(Je.events.EDITOR_CHANGE, (t5, e2) => {
      t5 === Je.events.TEXT_CHANGE && e2.length() > 0 && this.update(Je.sources.SILENT);
    }), this.emitter.on(Je.events.SCROLL_BEFORE_UPDATE, () => {
      if (!this.hasFocus())
        return;
      let t5 = this.getNativeRange();
      t5 != null && t5.start.node !== this.cursor.textNode && this.emitter.once(Je.events.SCROLL_UPDATE, () => {
        try {
          this.setNativeRange(t5.start.node, t5.start.offset, t5.end.node, t5.end.offset);
        } catch (e2) {
        }
      });
    }), this.emitter.on(Je.events.SCROLL_OPTIMIZE, (t5, e2) => {
      if (e2.range) {
        const { startNode: t6, startOffset: n, endNode: r, endOffset: o } = e2.range;
        this.setNativeRange(t6, n, r, o);
      }
    }), this.update(Je.sources.SILENT);
  }
  handleComposition() {
    this.root.addEventListener("compositionstart", () => {
      this.composing = true;
    }), this.root.addEventListener("compositionend", () => {
      if (this.composing = false, this.cursor.parent) {
        const t4 = this.cursor.restore();
        if (!t4)
          return;
        setTimeout(() => {
          this.setNativeRange(t4.startNode, t4.startOffset, t4.endNode, t4.endOffset);
        }, 1);
      }
    });
  }
  handleDragging() {
    this.emitter.listenDOM("mousedown", document.body, () => {
      this.mouseDown = true;
    }), this.emitter.listenDOM("mouseup", document.body, () => {
      this.mouseDown = false, this.update(Je.sources.USER);
    });
  }
  focus() {
    this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange));
  }
  format(t4, e) {
    if (this.scroll.whitelist != null && !this.scroll.whitelist[t4])
      return;
    this.scroll.update();
    let n = this.getNativeRange();
    if (n != null && n.native.collapsed && !f.query(t4, f.Scope.BLOCK)) {
      if (n.start.node !== this.cursor.textNode) {
        let t5 = f.find(n.start.node, false);
        if (t5 == null)
          return;
        if (t5 instanceof f.Leaf) {
          let e2 = t5.split(n.start.offset);
          t5.parent.insertBefore(this.cursor, e2);
        } else
          t5.insertBefore(this.cursor, n.start.node);
        this.cursor.attach();
      }
      this.cursor.format(t4, e), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
    }
  }
  getBounds(t4, e = 0) {
    let n = this.scroll.length();
    t4 = Math.min(t4, n - 1), e = Math.min(t4 + e, n - 1) - t4;
    let r, [o, i] = this.scroll.leaf(t4);
    if (o == null)
      return null;
    [r, i] = o.position(i, true);
    let s = document.createRange();
    if (e > 0)
      return s.setStart(r, i), [o, i] = this.scroll.leaf(t4 + e), o == null ? null : ([r, i] = o.position(i, true), s.setEnd(r, i), s.getBoundingClientRect());
    {
      let t5, e2 = "left";
      return r instanceof Text ? (i < r.data.length ? (s.setStart(r, i), s.setEnd(r, i + 1)) : (s.setStart(r, i - 1), s.setEnd(r, i), e2 = "right"), t5 = s.getBoundingClientRect()) : (t5 = o.domNode.getBoundingClientRect(), i > 0 && (e2 = "right")), { bottom: t5.top + t5.height, height: t5.height, left: t5[e2], right: t5[e2], top: t5.top, width: 0 };
    }
  }
  getNativeRange() {
    let t4 = document.getSelection();
    if (t4 == null || t4.rangeCount <= 0)
      return null;
    let e = t4.getRangeAt(0);
    if (e == null)
      return null;
    let n = this.normalizeNative(e);
    return Ze.info("getNativeRange", n), n;
  }
  getRange() {
    let t4 = this.getNativeRange();
    return t4 == null ? [null, null] : [this.normalizedToRange(t4), t4];
  }
  hasFocus() {
    return document.activeElement === this.root;
  }
  normalizedToRange(t4) {
    let e = [[t4.start.node, t4.start.offset]];
    t4.native.collapsed || e.push([t4.end.node, t4.end.offset]);
    let n = e.map((t5) => {
      let [e2, n2] = t5, r2 = f.find(e2, true), o2 = r2.offset(this.scroll);
      return n2 === 0 ? o2 : r2 instanceof f.Container ? o2 + r2.length() : o2 + r2.index(e2, n2);
    }), r = Math.min(Math.max(...n), this.scroll.length() - 1), o = Math.min(r, ...n);
    return new tn(o, r - o);
  }
  normalizeNative(t4) {
    if (!nn(this.root, t4.startContainer) || !t4.collapsed && !nn(this.root, t4.endContainer))
      return null;
    let e = { start: { node: t4.startContainer, offset: t4.startOffset }, end: { node: t4.endContainer, offset: t4.endOffset }, native: t4 };
    return [e.start, e.end].forEach(function(t5) {
      let e2 = t5.node, n = t5.offset;
      for (; !(e2 instanceof Text) && e2.childNodes.length > 0; )
        if (e2.childNodes.length > n)
          e2 = e2.childNodes[n], n = 0;
        else {
          if (e2.childNodes.length !== n)
            break;
          e2 = e2.lastChild, n = e2 instanceof Text ? e2.data.length : e2.childNodes.length + 1;
        }
      t5.node = e2, t5.offset = n;
    }), e;
  }
  rangeToNative(t4) {
    let e = t4.collapsed ? [t4.index] : [t4.index, t4.index + t4.length], n = [], r = this.scroll.length();
    return e.forEach((t5, e2) => {
      t5 = Math.min(r - 1, t5);
      let o, [i, s] = this.scroll.leaf(t5);
      [o, s] = i.position(s, e2 !== 0), n.push(o, s);
    }), n.length < 2 && (n = n.concat(n)), n;
  }
  scrollIntoView(t4) {
    let e = this.lastRange;
    if (e == null)
      return;
    let n = this.getBounds(e.index, e.length);
    if (n == null)
      return;
    let r = this.scroll.length() - 1, [o] = this.scroll.line(Math.min(e.index, r)), i = o;
    if (e.length > 0 && ([i] = this.scroll.line(Math.min(e.index + e.length, r))), o == null || i == null)
      return;
    let s = t4.getBoundingClientRect();
    n.top < s.top ? t4.scrollTop -= s.top - n.top : n.bottom > s.bottom && (t4.scrollTop += n.bottom - s.bottom);
  }
  setNativeRange(t4, e, n = t4, r = e, o = false) {
    if (Ze.info("setNativeRange", t4, e, n, r), t4 != null && (this.root.parentNode == null || t4.parentNode == null || n.parentNode == null))
      return;
    let i = document.getSelection();
    if (i != null)
      if (t4 != null) {
        this.hasFocus() || this.root.focus();
        let s = (this.getNativeRange() || {}).native;
        if (s == null || o || t4 !== s.startContainer || e !== s.startOffset || n !== s.endContainer || r !== s.endOffset) {
          t4.tagName == "BR" && (e = [].indexOf.call(t4.parentNode.childNodes, t4), t4 = t4.parentNode), n.tagName == "BR" && (r = [].indexOf.call(n.parentNode.childNodes, n), n = n.parentNode);
          let o2 = document.createRange();
          o2.setStart(t4, e), o2.setEnd(n, r), i.removeAllRanges(), i.addRange(o2);
        }
      } else
        i.removeAllRanges(), this.root.blur(), document.body.focus();
  }
  setRange(t4, e = false, n = Je.sources.API) {
    if (typeof e == "string" && (n = e, e = false), Ze.info("setRange", t4), t4 != null) {
      let n2 = this.rangeToNative(t4);
      this.setNativeRange(...n2, e);
    } else
      this.setNativeRange(null);
    this.update(n);
  }
  update(t4 = Je.sources.USER) {
    let e = this.lastRange, [n, r] = this.getRange();
    if (this.lastRange = n, this.lastRange != null && (this.savedRange = this.lastRange), !ge(e, this.lastRange)) {
      !this.composing && r != null && r.native.collapsed && r.start.node !== this.cursor.textNode && this.cursor.restore();
      let n2 = [Je.events.SELECTION_CHANGE, Fe(this.lastRange), Fe(e), t4];
      this.emitter.emit(Je.events.EDITOR_CHANGE, ...n2), t4 !== Je.sources.SILENT && this.emitter.emit(...n2);
    }
  }
}
function nn(t4, e) {
  try {
    e.parentNode;
  } catch (Zn) {
    return false;
  }
  return e instanceof Text && (e = e.parentNode), t4.contains(e);
}
class rn {
  constructor(t4, e) {
    this.quill = t4, this.options = e, this.modules = {};
  }
  init() {
    Object.keys(this.options.modules).forEach((t4) => {
      this.modules[t4] == null && this.addModule(t4);
    });
  }
  addModule(t4) {
    let e = this.quill.constructor.import(`modules/${t4}`);
    return this.modules[t4] = new e(this.quill, this.options.modules[t4] || {}), this.modules[t4];
  }
}
rn.DEFAULTS = { modules: {} }, rn.themes = { default: rn };
let on = Ye("quill");
class sn {
  static debug(t4) {
    t4 === true && (t4 = "log"), Ye.level(t4);
  }
  static find(t4) {
    return t4.__quill || f.find(t4);
  }
  static import(t4) {
    return this.imports[t4] == null && on.error(`Cannot import ${t4}. Are you sure it was registered?`), this.imports[t4];
  }
  static register(t4, e, n = false) {
    if (typeof t4 != "string") {
      let n2 = t4.attrName || t4.blotName;
      typeof n2 == "string" ? this.register("formats/" + n2, t4, e) : Object.keys(t4).forEach((n3) => {
        this.register(n3, t4[n3], e);
      });
    } else
      this.imports[t4] == null || n || on.warn(`Overwriting ${t4} with`, e), this.imports[t4] = e, (t4.startsWith("blots/") || t4.startsWith("formats/")) && e.blotName !== "abstract" ? f.register(e) : t4.startsWith("modules") && typeof e.register == "function" && e.register();
  }
  constructor(t4, e = {}) {
    if (this.options = function(t5, e2) {
      if ((e2 = we(true, { container: t5, modules: { clipboard: true, keyboard: true, history: true } }, e2)).theme && e2.theme !== sn.DEFAULTS.theme) {
        if (e2.theme = sn.import(`themes/${e2.theme}`), e2.theme == null)
          throw new Error(`Invalid theme ${e2.theme}. Did you register it?`);
      } else
        e2.theme = rn;
      let n2 = we(true, {}, e2.theme.DEFAULTS);
      [n2, e2].forEach(function(t6) {
        t6.modules = t6.modules || {}, Object.keys(t6.modules).forEach(function(e3) {
          t6.modules[e3] === true && (t6.modules[e3] = {});
        });
      });
      let r2 = Object.keys(n2.modules).concat(Object.keys(e2.modules)).reduce(function(t6, e3) {
        let n3 = sn.import(`modules/${e3}`);
        return n3 == null ? on.error(`Cannot load ${e3} module. Are you sure you registered it?`) : t6[e3] = n3.DEFAULTS || {}, t6;
      }, {});
      e2.modules != null && e2.modules.toolbar && e2.modules.toolbar.constructor !== Object && (e2.modules.toolbar = { container: e2.modules.toolbar });
      return e2 = we(true, {}, sn.DEFAULTS, { modules: r2 }, n2, e2), ["bounds", "container", "scrollingContainer"].forEach(function(t6) {
        typeof e2[t6] == "string" && (e2[t6] = document.querySelector(e2[t6]));
      }), e2.modules = Object.keys(e2.modules).reduce(function(t6, n3) {
        return e2.modules[n3] && (t6[n3] = e2.modules[n3]), t6;
      }, {}), e2;
    }(t4, e), this.container = this.options.container, this.container == null)
      return on.error("Invalid Quill container", t4);
    this.options.debug && sn.debug(this.options.debug);
    let n = this.container.innerHTML.trim();
    this.container.classList.add("ql-container"), this.container.innerHTML = "", this.container.__quill = this, this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.root.setAttribute("data-gramm", false), this.scrollingContainer = this.options.scrollingContainer || this.root, this.emitter = new Je(), this.scroll = f.create(this.root, { emitter: this.emitter, whitelist: this.options.formats }), this.editor = new ze(this.scroll), this.selection = new en(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.theme.init(), this.emitter.on(Je.events.EDITOR_CHANGE, (t5) => {
      t5 === Je.events.TEXT_CHANGE && this.root.classList.toggle("ql-blank", this.editor.isBlank());
    }), this.emitter.on(Je.events.SCROLL_UPDATE, (t5, e2) => {
      let n2 = this.selection.lastRange, r2 = n2 && n2.length === 0 ? n2.index : void 0;
      ln.call(this, () => this.editor.update(null, e2, r2), t5);
    });
    let r = this.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">${n}<p><br></p></div>`);
    this.setContents(r), this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable();
  }
  addContainer(t4, e = null) {
    if (typeof t4 == "string") {
      let e2 = t4;
      (t4 = document.createElement("div")).classList.add(e2);
    }
    return this.container.insertBefore(t4, e), t4;
  }
  blur() {
    this.selection.setRange(null);
  }
  deleteText(t4, e, n) {
    return [t4, e, , n] = an(t4, e, n), ln.call(this, () => this.editor.deleteText(t4, e), n, t4, -1 * e);
  }
  disable() {
    this.enable(false);
  }
  enable(t4 = true) {
    this.scroll.enable(t4), this.container.classList.toggle("ql-disabled", !t4);
  }
  focus() {
    let t4 = this.scrollingContainer.scrollTop;
    this.selection.focus(), this.scrollingContainer.scrollTop = t4, this.scrollIntoView();
  }
  format(t4, e, n = Je.sources.API) {
    return ln.call(this, () => {
      let n2 = this.getSelection(true), r = new je();
      if (n2 == null)
        return r;
      if (f.query(t4, f.Scope.BLOCK))
        r = this.editor.formatLine(n2.index, n2.length, { [t4]: e });
      else {
        if (n2.length === 0)
          return this.selection.format(t4, e), r;
        r = this.editor.formatText(n2.index, n2.length, { [t4]: e });
      }
      return this.setSelection(n2, Je.sources.SILENT), r;
    }, n);
  }
  formatLine(t4, e, n, r, o) {
    let i;
    return [t4, e, i, o] = an(t4, e, n, r, o), ln.call(this, () => this.editor.formatLine(t4, e, i), o, t4, 0);
  }
  formatText(t4, e, n, r, o) {
    let i;
    return [t4, e, i, o] = an(t4, e, n, r, o), ln.call(this, () => this.editor.formatText(t4, e, i), o, t4, 0);
  }
  getBounds(t4, e = 0) {
    let n;
    n = typeof t4 == "number" ? this.selection.getBounds(t4, e) : this.selection.getBounds(t4.index, t4.length);
    let r = this.container.getBoundingClientRect();
    return { bottom: n.bottom - r.top, height: n.height, left: n.left - r.left, right: n.right - r.left, top: n.top - r.top, width: n.width };
  }
  getContents(t4 = 0, e = this.getLength() - t4) {
    return [t4, e] = an(t4, e), this.editor.getContents(t4, e);
  }
  getFormat(t4 = this.getSelection(true), e = 0) {
    return typeof t4 == "number" ? this.editor.getFormat(t4, e) : this.editor.getFormat(t4.index, t4.length);
  }
  getIndex(t4) {
    return t4.offset(this.scroll);
  }
  getLength() {
    return this.scroll.length();
  }
  getLeaf(t4) {
    return this.scroll.leaf(t4);
  }
  getLine(t4) {
    return this.scroll.line(t4);
  }
  getLines(t4 = 0, e = Number.MAX_VALUE) {
    return typeof t4 != "number" ? this.scroll.lines(t4.index, t4.length) : this.scroll.lines(t4, e);
  }
  getModule(t4) {
    return this.theme.modules[t4];
  }
  getSelection(t4 = false) {
    return t4 && this.focus(), this.update(), this.selection.getRange()[0];
  }
  getText(t4 = 0, e = this.getLength() - t4) {
    return [t4, e] = an(t4, e), this.editor.getText(t4, e);
  }
  hasFocus() {
    return this.selection.hasFocus();
  }
  insertEmbed(t4, e, n, r = sn.sources.API) {
    return ln.call(this, () => this.editor.insertEmbed(t4, e, n), r, t4);
  }
  insertText(t4, e, n, r, o) {
    let i;
    return [t4, , i, o] = an(t4, 0, n, r, o), ln.call(this, () => this.editor.insertText(t4, e, i), o, t4, e.length);
  }
  isEnabled() {
    return !this.container.classList.contains("ql-disabled");
  }
  off() {
    return this.emitter.off.apply(this.emitter, arguments);
  }
  on() {
    return this.emitter.on.apply(this.emitter, arguments);
  }
  once() {
    return this.emitter.once.apply(this.emitter, arguments);
  }
  pasteHTML(t4, e, n) {
    this.clipboard.dangerouslyPasteHTML(t4, e, n);
  }
  removeFormat(t4, e, n) {
    return [t4, e, , n] = an(t4, e, n), ln.call(this, () => this.editor.removeFormat(t4, e), n, t4);
  }
  scrollIntoView() {
    this.selection.scrollIntoView(this.scrollingContainer);
  }
  setContents(t4, e = Je.sources.API) {
    return ln.call(this, () => {
      t4 = new je(t4);
      let e2 = this.getLength(), n = this.editor.deleteText(0, e2), r = this.editor.applyDelta(t4), o = r.ops[r.ops.length - 1];
      return o != null && typeof o.insert == "string" && o.insert[o.insert.length - 1] === "\n" && (this.editor.deleteText(this.getLength() - 1, 1), r.delete(1)), n.compose(r);
    }, e);
  }
  setSelection(t4, e, n) {
    t4 == null ? this.selection.setRange(null, e || sn.sources.API) : ([t4, e, , n] = an(t4, e, n), this.selection.setRange(new tn(t4, e), n), n !== Je.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer));
  }
  setText(t4, e = Je.sources.API) {
    let n = new je().insert(t4);
    return this.setContents(n, e);
  }
  update(t4 = Je.sources.USER) {
    let e = this.scroll.update(t4);
    return this.selection.update(t4), e;
  }
  updateContents(t4, e = Je.sources.API) {
    return ln.call(this, () => (t4 = new je(t4), this.editor.applyDelta(t4, e)), e, true);
  }
}
function ln(t4, e, n, r) {
  if (this.options.strict && !this.isEnabled() && e === Je.sources.USER)
    return new je();
  let o = n == null ? null : this.getSelection(), i = this.editor.delta, s = t4();
  if (o != null && (n === true && (n = o.index), r == null ? o = un(o, s, e) : r !== 0 && (o = un(o, n, r, e)), this.setSelection(o, Je.sources.SILENT)), s.length() > 0) {
    let t5 = [Je.events.TEXT_CHANGE, s, i, e];
    this.emitter.emit(Je.events.EDITOR_CHANGE, ...t5), e !== Je.sources.SILENT && this.emitter.emit(...t5);
  }
  return s;
}
function an(t4, e, n, r, o) {
  let i = {};
  return typeof t4.index == "number" && typeof t4.length == "number" ? typeof e != "number" ? (o = r, r = n, n = e, e = t4.length, t4 = t4.index) : (e = t4.length, t4 = t4.index) : typeof e != "number" && (o = r, r = n, n = e, e = 0), typeof n == "object" ? (i = n, o = r) : typeof n == "string" && (r != null ? i[n] = r : o = n), [t4, e, i, o = o || Je.sources.API];
}
function un(t4, e, n, r) {
  if (t4 == null)
    return null;
  let o, i;
  return [o, i] = e instanceof je ? [t4.index, t4.index + t4.length].map(function(t5) {
    return e.transformPosition(t5, r !== Je.sources.USER);
  }) : [t4.index, t4.index + t4.length].map(function(t5) {
    return t5 < e || t5 === e && r === Je.sources.USER ? t5 : n >= 0 ? t5 + n : Math.max(e, t5 + n);
  }), new tn(o, i - o);
}
sn.DEFAULTS = { bounds: null, formats: null, modules: {}, placeholder: "", readOnly: false, scrollingContainer: null, strict: true, theme: "default" }, sn.events = Je.events, sn.sources = Je.sources, sn.version = typeof QUILL_VERSION == "undefined" ? "dev" : QUILL_VERSION, sn.imports = { delta: je, parchment: f, "core/module": Qe, "core/theme": rn };
class cn extends f.Container {
}
cn.allowedChildren = [Be, qe, cn];
class hn extends f.Embed {
  constructor(t4) {
    super(t4), this.contentNode = document.createElement("span"), this.contentNode.setAttribute("contenteditable", false), [].slice.call(this.domNode.childNodes).forEach((t5) => {
      this.contentNode.appendChild(t5);
    }), this.leftGuard = document.createTextNode("\uFEFF"), this.rightGuard = document.createTextNode("\uFEFF"), this.domNode.appendChild(this.leftGuard), this.domNode.appendChild(this.contentNode), this.domNode.appendChild(this.rightGuard);
  }
  index(t4, e) {
    return t4 === this.leftGuard ? 0 : t4 === this.rightGuard ? 1 : super.index(t4, e);
  }
  restore(t4) {
    let e, n, r = t4.data.split("\uFEFF").join("");
    if (t4 === this.leftGuard)
      if (this.prev instanceof Ie) {
        let t5 = this.prev.length();
        this.prev.insertAt(t5, r), e = { startNode: this.prev.domNode, startOffset: t5 + r.length };
      } else
        n = document.createTextNode(r), this.parent.insertBefore(f.create(n), this), e = { startNode: n, startOffset: r.length };
    else
      t4 === this.rightGuard && (this.next instanceof Ie ? (this.next.insertAt(0, r), e = { startNode: this.next.domNode, startOffset: r.length }) : (n = document.createTextNode(r), this.parent.insertBefore(f.create(n), this.next), e = { startNode: n, startOffset: r.length }));
    return t4.data = "\uFEFF", e;
  }
  update(t4, e) {
    t4.forEach((t5) => {
      if (t5.type === "characterData" && (t5.target === this.leftGuard || t5.target === this.rightGuard)) {
        let n = this.restore(t5.target);
        n && (e.range = n);
      }
    });
  }
}
function fn(t4) {
  return t4 instanceof Be || t4 instanceof qe;
}
class pn extends f.Scroll {
  constructor(t4, e) {
    super(t4), this.emitter = e.emitter, Array.isArray(e.whitelist) && (this.whitelist = e.whitelist.reduce(function(t5, e2) {
      return t5[e2] = true, t5;
    }, {})), this.domNode.addEventListener("DOMNodeInserted", function() {
    }), this.optimize(), this.enable();
  }
  batchStart() {
    this.batch = true;
  }
  batchEnd() {
    this.batch = false, this.optimize();
  }
  deleteAt(t4, e) {
    let [n, r] = this.line(t4), [o] = this.line(t4 + e);
    if (super.deleteAt(t4, e), o != null && n !== o && r > 0) {
      if (n instanceof qe || o instanceof qe)
        return void this.optimize();
      if (n instanceof Me) {
        let t6 = n.newlineIndex(n.length(), true);
        if (t6 > -1 && (n = n.split(t6 + 1), n === o))
          return void this.optimize();
      } else if (o instanceof Me) {
        let t6 = o.newlineIndex(0);
        t6 > -1 && o.split(t6 + 1);
      }
      let t5 = o.children.head instanceof Pe ? null : o.children.head;
      n.moveChildren(o, t5), n.remove();
    }
    this.optimize();
  }
  enable(t4 = true) {
    this.domNode.setAttribute("contenteditable", t4);
  }
  formatAt(t4, e, n, r) {
    (this.whitelist == null || this.whitelist[n]) && (super.formatAt(t4, e, n, r), this.optimize());
  }
  insertAt(t4, e, n) {
    if (n == null || this.whitelist == null || this.whitelist[e]) {
      if (t4 >= this.length())
        if (n == null || f.query(e, f.Scope.BLOCK) == null) {
          let t5 = f.create(this.statics.defaultChild);
          this.appendChild(t5), n == null && e.endsWith("\n") && (e = e.slice(0, -1)), t5.insertAt(0, e, n);
        } else {
          let t5 = f.create(e, n);
          this.appendChild(t5);
        }
      else
        super.insertAt(t4, e, n);
      this.optimize();
    }
  }
  insertBefore(t4, e) {
    if (t4.statics.scope === f.Scope.INLINE_BLOT) {
      let e2 = f.create(this.statics.defaultChild);
      e2.appendChild(t4), t4 = e2;
    }
    super.insertBefore(t4, e);
  }
  leaf(t4) {
    return this.path(t4).pop() || [null, -1];
  }
  line(t4) {
    return t4 === this.length() ? this.line(t4 - 1) : this.descendant(fn, t4);
  }
  lines(t4 = 0, e = Number.MAX_VALUE) {
    let n = (t5, e2, r) => {
      let o = [], i = r;
      return t5.children.forEachAt(e2, r, function(t6, e3, r2) {
        fn(t6) ? o.push(t6) : t6 instanceof f.Container && (o = o.concat(n(t6, e3, i))), i -= r2;
      }), o;
    };
    return n(this, t4, e);
  }
  optimize(t4 = [], e = {}) {
    this.batch !== true && (super.optimize(t4, e), t4.length > 0 && this.emitter.emit(Je.events.SCROLL_OPTIMIZE, t4, e));
  }
  path(t4) {
    return super.path(t4).slice(1);
  }
  update(t4) {
    if (this.batch === true)
      return;
    let e = Je.sources.USER;
    typeof t4 == "string" && (e = t4), Array.isArray(t4) || (t4 = this.observer.takeRecords()), t4.length > 0 && this.emitter.emit(Je.events.SCROLL_BEFORE_UPDATE, e, t4), super.update(t4.concat([])), t4.length > 0 && this.emitter.emit(Je.events.SCROLL_UPDATE, e, t4);
  }
}
pn.blotName = "scroll", pn.className = "ql-editor", pn.tagName = "DIV", pn.defaultChild = "block", pn.allowedChildren = [Be, qe, cn];
let dn = { scope: f.Scope.BLOCK, whitelist: ["right", "center", "justify"] }, yn = new f.Attributor.Attribute("align", "align", dn);
new f.Attributor.Class("align", "ql-align", dn);
let mn = new f.Attributor.Style("align", "text-align", dn);
class gn extends f.Attributor.Style {
  value(t4) {
    let e = super.value(t4);
    return e.startsWith("rgb(") ? (e = e.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), "#" + e.split(",").map(function(t5) {
      return ("00" + parseInt(t5).toString(16)).slice(-2);
    }).join("")) : e;
  }
}
new f.Attributor.Class("color", "ql-color", { scope: f.Scope.INLINE });
let bn = new gn("color", "color", { scope: f.Scope.INLINE });
new f.Attributor.Class("background", "ql-bg", { scope: f.Scope.INLINE });
let vn = new gn("background", "background-color", { scope: f.Scope.INLINE }), Nn = { scope: f.Scope.BLOCK, whitelist: ["rtl"] }, En = new f.Attributor.Attribute("direction", "dir", Nn);
new f.Attributor.Class("direction", "ql-direction", Nn);
let An = new f.Attributor.Style("direction", "direction", Nn), xn = { scope: f.Scope.INLINE, whitelist: ["serif", "monospace"] };
new f.Attributor.Class("font", "ql-font", xn);
class On extends f.Attributor.Style {
  value(t4) {
    return super.value(t4).replace(/["']/g, "");
  }
}
let Tn = new On("font", "font-family", xn);
new f.Attributor.Class("size", "ql-size", { scope: f.Scope.INLINE, whitelist: ["small", "large", "huge"] });
let wn = new f.Attributor.Style("size", "font-size", { scope: f.Scope.INLINE, whitelist: ["10px", "18px", "32px"] }), _n = Ye("quill:clipboard");
const Sn = "__ql-matcher", kn = [[Node.TEXT_NODE, function(t4, e) {
  let n = t4.data;
  if (t4.parentNode.tagName === "O:P")
    return e.insert(n.trim());
  if (n.trim().length === 0 && t4.parentNode.classList.contains("ql-clipboard"))
    return e;
  if (!In(t4.parentNode).whiteSpace.startsWith("pre")) {
    let e2 = function(t5, e3) {
      return (e3 = e3.replace(/[^\u00a0]/g, "")).length < 1 && t5 ? " " : e3;
    };
    n = n.replace(/\r\n/g, " ").replace(/\n/g, " "), n = n.replace(/\s\s+/g, e2.bind(e2, true)), (t4.previousSibling == null && qn(t4.parentNode) || t4.previousSibling != null && qn(t4.previousSibling)) && (n = n.replace(/^\s+/, e2.bind(e2, false))), (t4.nextSibling == null && qn(t4.parentNode) || t4.nextSibling != null && qn(t4.nextSibling)) && (n = n.replace(/\s+$/, e2.bind(e2, false)));
  }
  return e.insert(n);
}], [Node.TEXT_NODE, Mn], ["br", function(t4, e) {
  Rn(e, "\n") || e.insert("\n");
  return e;
}], [Node.ELEMENT_NODE, Mn], [Node.ELEMENT_NODE, function(t4, e) {
  let n = f.query(t4);
  if (n == null)
    return e;
  if (n.prototype instanceof f.Embed) {
    let r = {}, o = n.value(t4);
    o != null && (r[n.blotName] = o, e = new je().insert(r, n.formats(t4)));
  } else
    typeof n.formats == "function" && (e = Pn(e, n.blotName, n.formats(t4)));
  return e;
}], [Node.ELEMENT_NODE, Un], [Node.ELEMENT_NODE, function(t4, e) {
  let n = f.Attributor.Attribute.keys(t4), r = f.Attributor.Class.keys(t4), o = f.Attributor.Style.keys(t4), i = {};
  n.concat(r).concat(o).forEach((e2) => {
    let n2 = f.query(e2, f.Scope.ATTRIBUTE);
    n2 != null && (i[n2.attrName] = n2.value(t4), i[n2.attrName]) || (n2 = Ln[e2], n2 == null || n2.attrName !== e2 && n2.keyName !== e2 || (i[n2.attrName] = n2.value(t4) || void 0), n2 = Cn[e2], n2 == null || n2.attrName !== e2 && n2.keyName !== e2 || (n2 = Cn[e2], i[n2.attrName] = n2.value(t4) || void 0));
  }), Object.keys(i).length > 0 && (e = Pn(e, i));
  return e;
}], [Node.ELEMENT_NODE, function(t4, e) {
  let n = {}, r = t4.style || {};
  r.fontStyle && In(t4).fontStyle === "italic" && (n.italic = true);
  r.fontWeight && (In(t4).fontWeight.startsWith("bold") || parseInt(In(t4).fontWeight) >= 700) && (n.bold = true);
  Object.keys(n).length > 0 && (e = Pn(e, n));
  parseFloat(r.textIndent || 0) > 0 && (e = new je().insert("	").concat(e));
  return e;
}], ["li", function(t4, e) {
  let n = f.query(t4);
  if (n == null || n.blotName !== "list-item" || !Rn(e, "\n"))
    return e;
  let r = -1, o = t4.parentNode;
  for (; !o.classList.contains("ql-clipboard"); )
    (f.query(o) || {}).blotName === "list" && (r += 1), o = o.parentNode;
  return r <= 0 ? e : e.compose(new je().retain(e.length() - 1).retain(1, { indent: r }));
}], ["b", Dn.bind(Dn, "bold")], ["i", Dn.bind(Dn, "italic")], ["style", function() {
  return new je();
}]], Ln = [yn, En].reduce(function(t4, e) {
  return t4[e.keyName] = e, t4;
}, {}), Cn = [mn, vn, bn, An, Tn, wn].reduce(function(t4, e) {
  return t4[e.keyName] = e, t4;
}, {});
class jn extends Qe {
  constructor(t4, e) {
    super(t4, e), this.quill.root.addEventListener("paste", this.onPaste.bind(this)), this.container = this.quill.addContainer("ql-clipboard"), this.container.setAttribute("contenteditable", true), this.container.setAttribute("tabindex", -1), this.matchers = [], kn.concat(this.options.matchers).forEach(([t5, n]) => {
      (e.matchVisual || n !== Un) && this.addMatcher(t5, n);
    });
  }
  addMatcher(t4, e) {
    this.matchers.push([t4, e]);
  }
  convert(t4) {
    if (typeof t4 == "string")
      return this.container.innerHTML = t4.replace(/\>\r?\n +\</g, "><"), this.convert();
    const e = this.quill.getFormat(this.quill.selection.savedRange.index);
    if (e[Me.blotName]) {
      const t5 = this.container.innerText;
      return this.container.innerHTML = "", new je().insert(t5, { [Me.blotName]: e[Me.blotName] });
    }
    let [n, r] = this.prepareMatching(), o = Bn(this.container, n, r);
    return Rn(o, "\n") && o.ops[o.ops.length - 1].attributes == null && (o = o.compose(new je().retain(o.length() - 1).delete(1))), _n.log("convert", this.container.innerHTML, o), this.container.innerHTML = "", o;
  }
  dangerouslyPasteHTML(t4, e, n = sn.sources.API) {
    if (typeof t4 == "string")
      this.quill.setContents(this.convert(t4), e), this.quill.setSelection(0, sn.sources.SILENT);
    else {
      let r = this.convert(e);
      this.quill.updateContents(new je().retain(t4).concat(r), n), this.quill.setSelection(t4 + r.length(), sn.sources.SILENT);
    }
  }
  onPaste(t4) {
    if (t4.defaultPrevented || !this.quill.isEnabled())
      return;
    let e = this.quill.getSelection(), n = new je().retain(e.index), r = this.quill.scrollingContainer.scrollTop;
    this.container.focus(), this.quill.selection.update(sn.sources.SILENT), setTimeout(() => {
      n = n.concat(this.convert()).delete(e.length), this.quill.updateContents(n, sn.sources.USER), this.quill.setSelection(n.length() - e.length, sn.sources.SILENT), this.quill.scrollingContainer.scrollTop = r, this.quill.focus();
    }, 1);
  }
  prepareMatching() {
    let t4 = [], e = [];
    return this.matchers.forEach((n) => {
      let [r, o] = n;
      switch (r) {
        case Node.TEXT_NODE:
          e.push(o);
          break;
        case Node.ELEMENT_NODE:
          t4.push(o);
          break;
        default:
          [].forEach.call(this.container.querySelectorAll(r), (t5) => {
            t5[Sn] = t5[Sn] || [], t5[Sn].push(o);
          });
      }
    }), [t4, e];
  }
}
function Pn(t4, e, n) {
  return typeof e == "object" ? Object.keys(e).reduce(function(t5, n2) {
    return Pn(t5, n2, e[n2]);
  }, t4) : t4.reduce(function(t5, r) {
    return r.attributes && r.attributes[e] ? t5.push(r) : t5.insert(r.insert, we({}, { [e]: n }, r.attributes));
  }, new je());
}
function In(t4) {
  if (t4.nodeType !== Node.ELEMENT_NODE)
    return {};
  const e = "__ql-computed-style";
  return t4[e] || (t4[e] = window.getComputedStyle(t4));
}
function Rn(t4, e) {
  let n = "";
  for (let r = t4.ops.length - 1; r >= 0 && n.length < e.length; --r) {
    let e2 = t4.ops[r];
    if (typeof e2.insert != "string")
      break;
    n = e2.insert + n;
  }
  return n.slice(-1 * e.length) === e;
}
function qn(t4) {
  if (t4.childNodes.length === 0)
    return false;
  let e = In(t4);
  return ["block", "list-item"].indexOf(e.display) > -1;
}
function Bn(t4, e, n) {
  return t4.nodeType === t4.TEXT_NODE ? n.reduce(function(e2, n2) {
    return n2(t4, e2);
  }, new je()) : t4.nodeType === t4.ELEMENT_NODE ? [].reduce.call(t4.childNodes || [], (r, o) => {
    let i = Bn(o, e, n);
    return o.nodeType === t4.ELEMENT_NODE && (i = e.reduce(function(t5, e2) {
      return e2(o, t5);
    }, i), i = (o[Sn] || []).reduce(function(t5, e2) {
      return e2(o, t5);
    }, i)), r.concat(i);
  }, new je()) : new je();
}
function Dn(t4, e, n) {
  return Pn(n, t4, true);
}
function Mn(t4, e) {
  return Rn(e, "\n") || (qn(t4) || e.length() > 0 && t4.nextSibling && qn(t4.nextSibling)) && e.insert("\n"), e;
}
function Un(t4, e) {
  if (qn(t4) && t4.nextElementSibling != null && !Rn(e, "\n\n")) {
    let n = t4.offsetHeight + parseFloat(In(t4).marginTop) + parseFloat(In(t4).marginBottom);
    t4.nextElementSibling.offsetTop > t4.offsetTop + 1.5 * n && e.insert("\n");
  }
  return e;
}
jn.DEFAULTS = { matchers: [], matchVisual: true };
class Fn extends Qe {
  constructor(t4, e) {
    super(t4, e), this.lastRecorded = 0, this.ignoreChange = false, this.clear(), this.quill.on(sn.events.EDITOR_CHANGE, (t5, e2, n, r) => {
      t5 !== sn.events.TEXT_CHANGE || this.ignoreChange || (this.options.userOnly && r !== sn.sources.USER ? this.transform(e2) : this.record(e2, n));
    }), this.quill.keyboard.addBinding({ key: "Z", shortKey: true }, this.undo.bind(this)), this.quill.keyboard.addBinding({ key: "Z", shortKey: true, shiftKey: true }, this.redo.bind(this)), /Win/i.test(navigator.platform) && this.quill.keyboard.addBinding({ key: "Y", shortKey: true }, this.redo.bind(this));
  }
  change(t4, e) {
    if (this.stack[t4].length === 0)
      return;
    let n = this.stack[t4].pop();
    this.stack[e].push(n), this.lastRecorded = 0, this.ignoreChange = true, this.quill.updateContents(n[t4], sn.sources.USER), this.ignoreChange = false;
    let r = function(t5) {
      let e2 = t5.reduce(function(t6, e3) {
        return t6 += e3.delete || 0;
      }, 0), n2 = t5.length() - e2;
      (function(t6) {
        let e3 = t6.ops[t6.ops.length - 1];
        if (e3 == null)
          return false;
        if (e3.insert != null)
          return typeof e3.insert == "string" && e3.insert.endsWith("\n");
        if (e3.attributes != null)
          return Object.keys(e3.attributes).some(function(t7) {
            return f.query(t7, f.Scope.BLOCK) != null;
          });
        return false;
      })(t5) && (n2 -= 1);
      return n2;
    }(n[t4]);
    this.quill.setSelection(r);
  }
  clear() {
    this.stack = { undo: [], redo: [] };
  }
  cutoff() {
    this.lastRecorded = 0;
  }
  record(t4, e) {
    if (t4.ops.length === 0)
      return;
    this.stack.redo = [];
    let n = this.quill.getContents().diff(e), r = Date.now();
    if (this.lastRecorded + this.options.delay > r && this.stack.undo.length > 0) {
      let e2 = this.stack.undo.pop();
      n = n.compose(e2.undo), t4 = e2.redo.compose(t4);
    } else
      this.lastRecorded = r;
    this.stack.undo.push({ redo: t4, undo: n }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift();
  }
  redo() {
    this.change("redo", "undo");
  }
  transform(t4) {
    this.stack.undo.forEach(function(e) {
      e.undo = t4.transform(e.undo, true), e.redo = t4.transform(e.redo, true);
    }), this.stack.redo.forEach(function(e) {
      e.undo = t4.transform(e.undo, true), e.redo = t4.transform(e.redo, true);
    });
  }
  undo() {
    this.change("undo", "redo");
  }
}
Fn.DEFAULTS = { delay: 1e3, maxStack: 100, userOnly: false };
let Kn = Ye("quill:keyboard");
const zn = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey";
class $n extends Qe {
  static match(t4, e) {
    return e = Qn(e), !["altKey", "ctrlKey", "metaKey", "shiftKey"].some(function(n) {
      return !!e[n] !== t4[n] && e[n] !== null;
    }) && e.key === (t4.which || t4.keyCode);
  }
  constructor(t4, e) {
    super(t4, e), this.bindings = {}, Object.keys(this.options.bindings).forEach((e2) => {
      (e2 !== "list autofill" || t4.scroll.whitelist == null || t4.scroll.whitelist.list) && this.options.bindings[e2] && this.addBinding(this.options.bindings[e2]);
    }), this.addBinding({ key: $n.keys.ENTER, shiftKey: null }, Yn), this.addBinding({ key: $n.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function() {
    }), /Firefox/i.test(navigator.userAgent) ? (this.addBinding({ key: $n.keys.BACKSPACE }, { collapsed: true }, Gn), this.addBinding({ key: $n.keys.DELETE }, { collapsed: true }, Hn)) : (this.addBinding({ key: $n.keys.BACKSPACE }, { collapsed: true, prefix: /^.?$/ }, Gn), this.addBinding({ key: $n.keys.DELETE }, { collapsed: true, suffix: /^.?$/ }, Hn)), this.addBinding({ key: $n.keys.BACKSPACE }, { collapsed: false }, Vn), this.addBinding({ key: $n.keys.DELETE }, { collapsed: false }, Vn), this.addBinding({ key: $n.keys.BACKSPACE, altKey: null, ctrlKey: null, metaKey: null, shiftKey: null }, { collapsed: true, offset: 0 }, Gn), this.listen();
  }
  addBinding(t4, e = {}, n = {}) {
    let r = Qn(t4);
    if (r == null || r.key == null)
      return Kn.warn("Attempted to add invalid keyboard binding", r);
    typeof e == "function" && (e = { handler: e }), typeof n == "function" && (n = { handler: n }), r = we(r, e, n), this.bindings[r.key] = this.bindings[r.key] || [], this.bindings[r.key].push(r);
  }
  listen() {
    this.quill.root.addEventListener("keydown", (t4) => {
      if (t4.defaultPrevented)
        return;
      let e = t4.which || t4.keyCode, n = (this.bindings[e] || []).filter(function(e2) {
        return $n.match(t4, e2);
      });
      if (n.length === 0)
        return;
      let r = this.quill.getSelection();
      if (r == null || !this.quill.hasFocus())
        return;
      let [o, i] = this.quill.getLine(r.index), [s, l2] = this.quill.getLeaf(r.index), [a2, u2] = r.length === 0 ? [s, l2] : this.quill.getLeaf(r.index + r.length), c2 = s instanceof f.Text ? s.value().slice(0, l2) : "", h2 = a2 instanceof f.Text ? a2.value().slice(u2) : "", p2 = { collapsed: r.length === 0, empty: r.length === 0 && o.length() <= 1, format: this.quill.getFormat(r), offset: i, prefix: c2, suffix: h2 };
      n.some((t5) => {
        if (t5.collapsed != null && t5.collapsed !== p2.collapsed)
          return false;
        if (t5.empty != null && t5.empty !== p2.empty)
          return false;
        if (t5.offset != null && t5.offset !== p2.offset)
          return false;
        if (Array.isArray(t5.format)) {
          if (t5.format.every(function(t6) {
            return p2.format[t6] == null;
          }))
            return false;
        } else if (typeof t5.format == "object" && !Object.keys(t5.format).every(function(e2) {
          return t5.format[e2] === true ? p2.format[e2] != null : t5.format[e2] === false ? p2.format[e2] == null : ge(t5.format[e2], p2.format[e2]);
        }))
          return false;
        return !(t5.prefix != null && !t5.prefix.test(p2.prefix)) && (!(t5.suffix != null && !t5.suffix.test(p2.suffix)) && t5.handler.call(this, r, p2) !== true);
      }) && t4.preventDefault();
    });
  }
}
function Wn(t4, e) {
  const n = t4 === $n.keys.LEFT ? "prefix" : "suffix";
  return { key: t4, shiftKey: e, altKey: null, [n]: /^$/, handler: function(n2) {
    let r = n2.index;
    t4 === $n.keys.RIGHT && (r += n2.length + 1);
    const [o] = this.quill.getLeaf(r);
    return !(o instanceof f.Embed) || (t4 === $n.keys.LEFT ? e ? this.quill.setSelection(n2.index - 1, n2.length + 1, sn.sources.USER) : this.quill.setSelection(n2.index - 1, sn.sources.USER) : e ? this.quill.setSelection(n2.index, n2.length + 1, sn.sources.USER) : this.quill.setSelection(n2.index + n2.length + 1, sn.sources.USER), false);
  } };
}
function Gn(t4, e) {
  if (t4.index === 0 || this.quill.getLength() <= 1)
    return;
  let [n] = this.quill.getLine(t4.index), r = {};
  if (e.offset === 0) {
    let [e2] = this.quill.getLine(t4.index - 1);
    if (e2 != null && e2.length() > 1) {
      let e3 = n.formats(), o2 = this.quill.getFormat(t4.index - 1, 1);
      r = ke.attributes.diff(e3, o2) || {};
    }
  }
  let o = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix) ? 2 : 1;
  this.quill.deleteText(t4.index - o, o, sn.sources.USER), Object.keys(r).length > 0 && this.quill.formatLine(t4.index - o, o, r, sn.sources.USER), this.quill.focus();
}
function Hn(t4, e) {
  let n = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix) ? 2 : 1;
  if (t4.index >= this.quill.getLength() - n)
    return;
  let r = {}, o = 0, [i] = this.quill.getLine(t4.index);
  if (e.offset >= i.length() - 1) {
    let [e2] = this.quill.getLine(t4.index + 1);
    if (e2) {
      let n2 = i.formats(), s = this.quill.getFormat(t4.index, 1);
      r = ke.attributes.diff(n2, s) || {}, o = e2.length();
    }
  }
  this.quill.deleteText(t4.index, n, sn.sources.USER), Object.keys(r).length > 0 && this.quill.formatLine(t4.index + o - 1, n, r, sn.sources.USER);
}
function Vn(t4) {
  let e = this.quill.getLines(t4), n = {};
  if (e.length > 1) {
    let t5 = e[0].formats(), r = e[e.length - 1].formats();
    n = ke.attributes.diff(r, t5) || {};
  }
  this.quill.deleteText(t4, sn.sources.USER), Object.keys(n).length > 0 && this.quill.formatLine(t4.index, 1, n, sn.sources.USER), this.quill.setSelection(t4.index, sn.sources.SILENT), this.quill.focus();
}
function Yn(t4, e) {
  t4.length > 0 && this.quill.scroll.deleteAt(t4.index, t4.length);
  let n = Object.keys(e.format).reduce(function(t5, n2) {
    return f.query(n2, f.Scope.BLOCK) && !Array.isArray(e.format[n2]) && (t5[n2] = e.format[n2]), t5;
  }, {});
  this.quill.insertText(t4.index, "\n", n, sn.sources.USER), this.quill.setSelection(t4.index + 1, sn.sources.SILENT), this.quill.focus(), Object.keys(e.format).forEach((t5) => {
    n[t5] == null && (Array.isArray(e.format[t5]) || t5 !== "link" && this.quill.format(t5, e.format[t5], sn.sources.USER));
  });
}
function Xn(t4) {
  return { key: $n.keys.TAB, shiftKey: !t4, format: { "code-block": true }, handler: function(e) {
    let n = f.query("code-block"), r = e.index, o = e.length, [i, s] = this.quill.scroll.descendant(n, r);
    if (i == null)
      return;
    let l2 = this.quill.getIndex(i), a2 = i.newlineIndex(s, true) + 1, u2 = i.newlineIndex(l2 + s + o), c2 = i.domNode.textContent.slice(a2, u2).split("\n");
    s = 0, c2.forEach((e2, l3) => {
      t4 ? (i.insertAt(a2 + s, n.TAB), s += n.TAB.length, l3 === 0 ? r += n.TAB.length : o += n.TAB.length) : e2.startsWith(n.TAB) && (i.deleteAt(a2 + s, n.TAB.length), s -= n.TAB.length, l3 === 0 ? r -= n.TAB.length : o -= n.TAB.length), s += e2.length + 1;
    }), this.quill.update(sn.sources.USER), this.quill.setSelection(r, o, sn.sources.SILENT);
  } };
}
function Jn(t4) {
  return { key: t4[0].toUpperCase(), shortKey: true, handler: function(e, n) {
    this.quill.format(t4, !n.format[t4], sn.sources.USER);
  } };
}
function Qn(t4) {
  if (typeof t4 == "string" || typeof t4 == "number")
    return Qn({ key: t4 });
  if (typeof t4 == "object" && (t4 = Fe(t4, false)), typeof t4.key == "string")
    if ($n.keys[t4.key.toUpperCase()] != null)
      t4.key = $n.keys[t4.key.toUpperCase()];
    else {
      if (t4.key.length !== 1)
        return null;
      t4.key = t4.key.toUpperCase().charCodeAt(0);
    }
  return t4.shortKey && (t4[zn] = t4.shortKey, delete t4.shortKey), t4;
}
$n.keys = { BACKSPACE: 8, TAB: 9, ENTER: 13, ESCAPE: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 }, $n.DEFAULTS = { bindings: { bold: Jn("bold"), italic: Jn("italic"), underline: Jn("underline"), indent: { key: $n.keys.TAB, format: ["blockquote", "indent", "list"], handler: function(t4, e) {
  if (e.collapsed && e.offset !== 0)
    return true;
  this.quill.format("indent", "+1", sn.sources.USER);
} }, outdent: { key: $n.keys.TAB, shiftKey: true, format: ["blockquote", "indent", "list"], handler: function(t4, e) {
  if (e.collapsed && e.offset !== 0)
    return true;
  this.quill.format("indent", "-1", sn.sources.USER);
} }, "outdent backspace": { key: $n.keys.BACKSPACE, collapsed: true, shiftKey: null, metaKey: null, ctrlKey: null, altKey: null, format: ["indent", "list"], offset: 0, handler: function(t4, e) {
  e.format.indent != null ? this.quill.format("indent", "-1", sn.sources.USER) : e.format.list != null && this.quill.format("list", false, sn.sources.USER);
} }, "indent code-block": Xn(true), "outdent code-block": Xn(false), "remove tab": { key: $n.keys.TAB, shiftKey: true, collapsed: true, prefix: /\t$/, handler: function(t4) {
  this.quill.deleteText(t4.index - 1, 1, sn.sources.USER);
} }, tab: { key: $n.keys.TAB, handler: function(t4) {
  this.quill.history.cutoff();
  let e = new je().retain(t4.index).delete(t4.length).insert("	");
  this.quill.updateContents(e, sn.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(t4.index + 1, sn.sources.SILENT);
} }, "list empty enter": { key: $n.keys.ENTER, collapsed: true, format: ["list"], empty: true, handler: function(t4, e) {
  this.quill.format("list", false, sn.sources.USER), e.format.indent && this.quill.format("indent", false, sn.sources.USER);
} }, "checklist enter": { key: $n.keys.ENTER, collapsed: true, format: { list: "checked" }, handler: function(t4) {
  let [e, n] = this.quill.getLine(t4.index), r = we({}, e.formats(), { list: "checked" }), o = new je().retain(t4.index).insert("\n", r).retain(e.length() - n - 1).retain(1, { list: "unchecked" });
  this.quill.updateContents(o, sn.sources.USER), this.quill.setSelection(t4.index + 1, sn.sources.SILENT), this.quill.scrollIntoView();
} }, "header enter": { key: $n.keys.ENTER, collapsed: true, format: ["header"], suffix: /^$/, handler: function(t4, e) {
  let [n, r] = this.quill.getLine(t4.index), o = new je().retain(t4.index).insert("\n", e.format).retain(n.length() - r - 1).retain(1, { header: null });
  this.quill.updateContents(o, sn.sources.USER), this.quill.setSelection(t4.index + 1, sn.sources.SILENT), this.quill.scrollIntoView();
} }, "list autofill": { key: " ", collapsed: true, format: { list: false }, prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/, handler: function(t4, e) {
  let n, r = e.prefix.length, [o, i] = this.quill.getLine(t4.index);
  if (i > r)
    return true;
  switch (e.prefix.trim()) {
    case "[]":
    case "[ ]":
      n = "unchecked";
      break;
    case "[x]":
      n = "checked";
      break;
    case "-":
    case "*":
      n = "bullet";
      break;
    default:
      n = "ordered";
  }
  this.quill.insertText(t4.index, " ", sn.sources.USER), this.quill.history.cutoff();
  let s = new je().retain(t4.index - i).delete(r + 1).retain(o.length() - 2 - i).retain(1, { list: n });
  this.quill.updateContents(s, sn.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(t4.index - r, sn.sources.SILENT);
} }, "code exit": { key: $n.keys.ENTER, collapsed: true, format: ["code-block"], prefix: /\n\n$/, suffix: /^\s+$/, handler: function(t4) {
  const [e, n] = this.quill.getLine(t4.index), r = new je().retain(t4.index + e.length() - n - 2).retain(1, { "code-block": null }).delete(1);
  this.quill.updateContents(r, sn.sources.USER);
} }, "embed left": Wn($n.keys.LEFT, false), "embed left shift": Wn($n.keys.LEFT, true), "embed right": Wn($n.keys.RIGHT, false), "embed right shift": Wn($n.keys.RIGHT, true) } }, sn.register({ "blots/block": Be, "blots/block/embed": qe, "blots/break": Pe, "blots/container": cn, "blots/cursor": Ue, "blots/embed": hn, "blots/inline": Re, "blots/scroll": pn, "blots/text": Ie, "modules/clipboard": jn, "modules/history": Fn, "modules/keyboard": $n }), f.register(Be, Pe, Ue, Re, pn, Ie);
var vueQuill_snow = /* @__PURE__ */ (() => '.ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative}.ql-container.ql-disabled .ql-tooltip{visibility:hidden}.ql-container.ql-disabled .ql-editor ul[data-checked]>li:before,.ql-editor ul[data-checked=false],.ql-editor ul[data-checked=true]{pointer-events:none}.ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.ql-clipboard p{margin:0;padding:0}.ql-editor{box-sizing:border-box;line-height:1.42;height:100%;outline:0;overflow-y:auto;padding:12px 15px;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.ql-editor>*{cursor:text}.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor ol,.ql-editor p,.ql-editor pre,.ql-editor ul{margin:0;padding:0;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol,.ql-editor ul{padding-left:1.5em}.ql-editor ol>li,.ql-editor ul>li{list-style-type:none}.ql-editor ul>li:before{content:"\\2022"}.ql-editor ul[data-checked=false]>li *,.ql-editor ul[data-checked=true]>li *{pointer-events:all}.ql-editor ul[data-checked=false]>li:before,.ql-editor ul[data-checked=true]>li:before{color:#777;cursor:pointer;pointer-events:all}.ql-editor ul[data-checked=true]>li:before{content:"\\2611"}.ql-editor ul[data-checked=false]>li:before{content:"\\2610"}.ql-editor li:before{display:inline-block;white-space:nowrap;width:1.2em}.ql-editor li:not(.ql-direction-rtl):before{margin-left:-1.5em;margin-right:.3em;text-align:right}.ql-editor li.ql-direction-rtl:before{margin-left:.3em;margin-right:-1.5em}.ql-editor ol li:not(.ql-direction-rtl),.ql-editor ul li:not(.ql-direction-rtl){padding-left:1.5em}.ql-editor ol li.ql-direction-rtl,.ql-editor ul li.ql-direction-rtl{padding-right:1.5em}.ql-editor ol li{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment:list-0}.ql-editor ol li:before{content:counter(list-0,decimal) ". "}.ql-editor ol li.ql-indent-1{counter-increment:list-1;counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-1:before{content:counter(list-1,lower-alpha) ". "}.ql-editor ol li.ql-indent-2{counter-increment:list-2;counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-2:before{content:counter(list-2,lower-roman) ". "}.ql-editor ol li.ql-indent-3{counter-increment:list-3;counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-3:before{content:counter(list-3,decimal) ". "}.ql-editor ol li.ql-indent-4{counter-increment:list-4;counter-reset:list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-4:before{content:counter(list-4,lower-alpha) ". "}.ql-editor ol li.ql-indent-5{counter-increment:list-5;counter-reset:list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-5:before{content:counter(list-5,lower-roman) ". "}.ql-editor ol li.ql-indent-6{counter-increment:list-6;counter-reset:list-7 list-8 list-9}.ql-editor ol li.ql-indent-6:before{content:counter(list-6,decimal) ". "}.ql-editor ol li.ql-indent-7{counter-increment:list-7;counter-reset:list-8 list-9}.ql-editor ol li.ql-indent-7:before{content:counter(list-7,lower-alpha) ". "}.ql-editor ol li.ql-indent-8{counter-increment:list-8;counter-reset:list-9}.ql-editor ol li.ql-indent-8:before{content:counter(list-8,lower-roman) ". "}.ql-editor ol li.ql-indent-9{counter-increment:list-9}.ql-editor ol li.ql-indent-9:before{content:counter(list-9,decimal) ". "}.ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.ql-editor .ql-video{display:block;max-width:100%}.ql-editor .ql-video.ql-align-center{margin:0 auto}.ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.ql-editor .ql-bg-black{background-color:#000}.ql-editor .ql-bg-red{background-color:#e60000}.ql-editor .ql-bg-orange{background-color:#f90}.ql-editor .ql-bg-yellow{background-color:#ff0}.ql-editor .ql-bg-green{background-color:#008a00}.ql-editor .ql-bg-blue{background-color:#06c}.ql-editor .ql-bg-purple{background-color:#93f}.ql-editor .ql-color-white{color:#fff}.ql-editor .ql-color-red{color:#e60000}.ql-editor .ql-color-orange{color:#f90}.ql-editor .ql-color-yellow{color:#ff0}.ql-editor .ql-color-green{color:#008a00}.ql-editor .ql-color-blue{color:#06c}.ql-editor .ql-color-purple{color:#93f}.ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.ql-editor .ql-size-small{font-size:.75em}.ql-editor .ql-size-large,.ql-snow .ql-editor h2{font-size:1.5em}.ql-editor .ql-size-huge{font-size:2.5em}.ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.ql-editor .ql-align-center{text-align:center}.ql-editor .ql-align-justify{text-align:justify}.ql-editor .ql-align-right{text-align:right}.ql-editor.ql-blank:before{color:#0009;content:attr(data-placeholder);font-style:italic;left:15px;pointer-events:none;position:absolute;right:15px}.ql-snow .ql-formats:after,.ql-snow .ql-toolbar:after,.ql-snow.ql-toolbar:after{clear:both;content:"";display:table}.ql-snow .ql-toolbar button,.ql-snow.ql-toolbar button{background:0 0;border:0;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px;margin-left:1px;margin-right:1px}.ql-snow .ql-toolbar button svg,.ql-snow.ql-toolbar button svg{float:left;height:100%}.ql-snow .ql-toolbar button:active:hover,.ql-snow.ql-toolbar button:active:hover{outline:0}.ql-snow .ql-hidden,.ql-snow .ql-toolbar input.ql-image[type=file],.ql-snow .ql-tooltip.ql-editing a.ql-preview,.ql-snow .ql-tooltip.ql-editing a.ql-remove,.ql-snow.ql-toolbar input.ql-image[type=file]{display:none}.ql-snow .ql-toolbar .ql-picker-item:hover,.ql-snow .ql-toolbar .ql-picker-label:hover,.ql-snow .ql-toolbar button:focus,.ql-snow .ql-toolbar button:hover,.ql-snow.ql-toolbar .ql-picker-item:hover,.ql-snow.ql-toolbar .ql-picker-label:hover,.ql-snow.ql-toolbar button:focus,.ql-snow.ql-toolbar button:hover{background-color:#f3f4f6}.ql-snow .ql-toolbar .ql-picker-item.ql-selected,.ql-snow .ql-toolbar .ql-picker-label.ql-active,.ql-snow .ql-toolbar button.ql-active,.ql-snow.ql-toolbar .ql-picker-item.ql-selected,.ql-snow.ql-toolbar .ql-picker-label.ql-active,.ql-snow.ql-toolbar button.ql-active{background-color:#dbeafe;color:#2563eb}.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill{fill:#2563eb}.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar button.ql-active .ql-stroke,.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar button.ql-active .ql-stroke,.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter{stroke:#2563eb}@media (pointer:coarse){.ql-snow .ql-toolbar button:hover:not(.ql-active),.ql-snow.ql-toolbar button:hover:not(.ql-active){color:#4b5563}.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#4b5563}.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#4b5563}}.ql-snow,.ql-snow *{box-sizing:border-box}.ql-snow .ql-out-bottom,.ql-snow .ql-out-top{visibility:hidden}.ql-snow .ql-tooltip{position:absolute;transform:translateY(10px)}.ql-snow .ql-tooltip a{cursor:pointer;text-decoration:none}.ql-snow .ql-tooltip.ql-flip{transform:translateY(-10px)}.ql-snow .ql-formats{display:inline-block;vertical-align:middle}.ql-snow .ql-stroke{fill:none;stroke:#4b5563;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ql-snow .ql-stroke-miter{fill:none;stroke:#4b5563;stroke-miterlimit:10;stroke-width:2}.ql-snow .ql-fill,.ql-snow .ql-stroke.ql-fill{fill:#4b5563}.ql-snow .ql-empty{fill:none}.ql-snow .ql-even{fill-rule:evenodd}.ql-snow .ql-stroke.ql-thin,.ql-snow .ql-thin{stroke-width:1}.ql-snow .ql-transparent{opacity:.4}.ql-snow .ql-direction svg:last-child{display:none}.ql-snow .ql-direction.ql-active svg:last-child{display:inline}.ql-snow .ql-direction.ql-active svg:first-child{display:none}.ql-snow .ql-editor h1{font-size:2em}.ql-snow .ql-editor h3{font-size:1.17em}.ql-snow .ql-editor h4{font-size:1em}.ql-snow .ql-editor h5{font-size:.83em}.ql-snow .ql-editor h6{font-size:.67em}.ql-snow .ql-editor a{text-decoration:underline}.ql-snow .ql-editor blockquote{border-left:4px solid #ccc;margin-bottom:5px;margin-top:5px;padding-left:16px}.ql-snow .ql-editor code,.ql-snow .ql-editor pre{background-color:#f0f0f0;border-radius:3px}.ql-snow .ql-editor pre{white-space:pre-wrap;margin-bottom:5px;margin-top:5px;padding:5px 10px}.ql-snow .ql-editor code{font-size:85%;padding:2px 4px}.ql-snow .ql-editor pre.ql-syntax{background-color:#23241f;color:#f8f8f2;overflow:visible}.ql-snow .ql-editor img{max-width:100%}.ql-snow .ql-picker{color:#4b5563;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle;margin-right:1px;margin-left:1px}.ql-snow .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.ql-snow .ql-picker-label:before{display:inline-block;line-height:22px}.ql-snow .ql-picker-options{background-color:#fff;display:none;min-width:100%;position:absolute;white-space:nowrap}.ql-snow .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding:5px 8px}.ql-snow .ql-picker.ql-expanded .ql-picker-label{color:#d1d5db;z-index:2}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#d1d5db}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#d1d5db}.ql-snow .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.ql-snow .ql-color-picker,.ql-snow .ql-icon-picker{width:28px}.ql-snow .ql-color-picker .ql-picker-label,.ql-snow .ql-icon-picker .ql-picker-label{padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-label svg,.ql-snow .ql-icon-picker .ql-picker-label svg{right:4px}.ql-snow .ql-icon-picker .ql-picker-options{padding:3px}.ql-snow .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px;margin:2px}.ql-snow .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.ql-snow .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=""]):before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=""]):before{content:attr(data-label)}.ql-snow .ql-picker.ql-header{width:98px}.ql-snow .ql-picker.ql-header .ql-picker-item:before,.ql-snow .ql-picker.ql-header .ql-picker-label:before{content:"Normal"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]:before{content:"Heading 1"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]:before{content:"Heading 2"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]:before{content:"Heading 3"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]:before{content:"Heading 4"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]:before{content:"Heading 5"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]:before{content:"Heading 6"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]:before{font-size:2em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]:before{font-size:1.5em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]:before{font-size:1.17em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]:before{font-size:1em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]:before{font-size:.83em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]:before{font-size:.67em}.ql-snow .ql-picker.ql-font{width:108px}.ql-snow .ql-picker.ql-font .ql-picker-item:before,.ql-snow .ql-picker.ql-font .ql-picker-label:before{content:"Sans Serif"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]:before{content:"Serif"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]:before{content:"Monospace"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{font-family:Georgia,Times New Roman,serif}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{font-family:Monaco,Courier New,monospace}.ql-snow .ql-picker.ql-size{width:98px}.ql-snow .ql-picker.ql-size .ql-picker-item:before,.ql-snow .ql-picker.ql-size .ql-picker-label:before{content:"Normal"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]:before{content:"Small"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]:before{content:"Large"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]:before{content:"Huge"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before{font-size:10px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before{font-size:18px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{font-size:32px}.ql-snow .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.ql-snow .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.ql-toolbar.ql-snow{border:1px solid #d1d5db;box-sizing:border-box;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;padding:8px}.ql-toolbar.ql-snow .ql-formats{margin-right:15px}.ql-toolbar.ql-snow .ql-picker-label{border:1px solid transparent}.ql-toolbar.ql-snow .ql-picker-options{border:1px solid transparent;box-shadow:#0003 0 2px 8px}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label,.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#d1d5db}.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{border-color:#000}.ql-toolbar.ql-snow+.ql-container.ql-snow{border-top:0}.ql-snow .ql-tooltip{background-color:#fff;box-shadow:0 0 5px #d1d5db;color:#4b5563;padding:5px 12px;white-space:nowrap}.ql-snow .ql-tooltip:before{content:"Visit URL:";line-height:26px;margin-right:8px}.ql-snow .ql-tooltip input[type=text]{display:none;border:1px solid #d1d5db;font-size:13px;height:26px;margin:0;padding:3px 5px;width:170px}.ql-snow .ql-tooltip a.ql-preview{display:inline-block;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;vertical-align:top}.ql-snow .ql-tooltip a.ql-action:after{border-right:1px solid #d1d5db;content:"Edit";margin-left:16px;padding-right:8px}.ql-snow .ql-tooltip a.ql-remove:before{content:"Remove";margin-left:8px}.ql-snow .ql-tooltip a{line-height:26px}.ql-snow .ql-tooltip.ql-editing input[type=text]{display:inline-block}.ql-snow .ql-tooltip.ql-editing a.ql-action:after{border-right:0;content:"Save";padding-right:0}.ql-snow .ql-tooltip[data-mode=link]:before{content:"Enter link:"}.ql-snow .ql-tooltip[data-mode=formula]:before{content:"Enter formula:"}.ql-snow .ql-tooltip[data-mode=video]:before{content:"Enter video:"}.ql-snow a{color:#2563eb}.ql-container.ql-snow,.ql-snow .ql-tooltip{border:1px solid #d1d5db}\n')();
var richText_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => '@charset "UTF-8";.primary-color[data-v-faab8a64]{color:#409eff}.background-opacity[data-v-faab8a64]{background:rgba(64,158,255,.6)}.stage-form .ghost[data-v-faab8a64]{width:100%;content:"";font-size:0;height:3px;box-sizing:border-box;background:#409EFF;border:2px solid #409EFF;outline-width:0;padding:0;overflow:hidden}.el-form-item .el-rate[data-v-faab8a64]{margin-top:8px}.el-form-item--medium .el-radio[data-v-faab8a64]{line-height:36px!important}.el-form-item--medium .el-rate[data-v-faab8a64]{margin-top:8px}.el-form-item--small .el-radio[data-v-faab8a64]{line-height:32px!important}.el-form-item--small .el-rate[data-v-faab8a64]{margin-top:6px}.el-form-item--mini .el-radio[data-v-faab8a64]{line-height:28px!important}.el-form-item--mini .el-rate[data-v-faab8a64]{margin-top:4px}.el-card[data-v-faab8a64]{margin-top:3px;margin-bottom:3px}input[type=password][data-v-faab8a64]::-ms-reveal{display:none}.auto-full-width.el-date-editor.el-input[data-v-faab8a64],.auto-full-width.el-date-editor.el-input__inner[data-v-faab8a64]{width:100%!important}[data-v-faab8a64]::-webkit-scrollbar{width:8px;height:8px}[data-v-faab8a64]::-webkit-scrollbar-track{width:8px;background:rgba(16,31,28,.1);-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em}[data-v-faab8a64]::-webkit-scrollbar-thumb{background-color:#101f1c59;background-clip:padding-box;min-height:28px;-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em}[data-v-faab8a64]::-webkit-scrollbar-thumb:hover{background-color:#101f1cd9}*[data-v-faab8a64]{scrollbar-color:#e5e5e5 #f7f7f9;scrollbar-width:thin}.local-quill-editor .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="12px"][data-v-faab8a64]:before,.local-quill-editor .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="12px"][data-v-faab8a64]:before{content:"12px"}.local-quill-editor .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="14px"][data-v-faab8a64]:before,.local-quill-editor .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="14px"][data-v-faab8a64]:before{content:"14px"}.local-quill-editor .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="16px"][data-v-faab8a64]:before,.local-quill-editor .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="16px"][data-v-faab8a64]:before{content:"16px"}.local-quill-editor .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="18px"][data-v-faab8a64]:before,.local-quill-editor .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="18px"][data-v-faab8a64]:before{content:"18px"}.local-quill-editor .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="20px"][data-v-faab8a64]:before,.local-quill-editor .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="20px"][data-v-faab8a64]:before{content:"20px"}.local-quill-editor .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="24px"][data-v-faab8a64]:before,.local-quill-editor .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="24px"][data-v-faab8a64]:before{content:"24px"}.local-quill-editor .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="28px"][data-v-faab8a64]:before,.local-quill-editor .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="28px"][data-v-faab8a64]:before{content:"28px"}.local-quill-editor .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="32px"][data-v-faab8a64]:before,.local-quill-editor .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="32px"][data-v-faab8a64]:before{content:"32px"}.local-quill-editor .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="36px"][data-v-faab8a64]:before,.local-quill-editor .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="36px"][data-v-faab8a64]:before{content:"36px"}.local-quill-editor .ql-snow .ql-picker.ql-header .ql-picker-label[data-v-faab8a64]:before,.local-quill-editor .ql-snow .ql-picker.ql-header .ql-picker-item[data-v-faab8a64]:before{content:"\\6587\\672c"}.local-quill-editor .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"][data-v-faab8a64]:before,.local-quill-editor .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"][data-v-faab8a64]:before{content:"\\6807\\9898 1"}.local-quill-editor .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"][data-v-faab8a64]:before,.local-quill-editor .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"][data-v-faab8a64]:before{content:"\\6807\\9898 2"}.local-quill-editor .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"][data-v-faab8a64]:before,.local-quill-editor .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"][data-v-faab8a64]:before{content:"\\6807\\9898 3"}.local-quill-editor .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"][data-v-faab8a64]:before,.local-quill-editor .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"][data-v-faab8a64]:before{content:"\\6807\\9898 4"}.local-quill-editor .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"][data-v-faab8a64]:before,.local-quill-editor .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"][data-v-faab8a64]:before{content:"\\6807\\9898 5"}.local-quill-editor .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"][data-v-faab8a64]:before,.local-quill-editor .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"][data-v-faab8a64]:before{content:"\\6807\\9898 6"}.local-quill-editor .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=SimSun][data-v-faab8a64]:before,.local-quill-editor .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=SimSun][data-v-faab8a64]:before{content:"\\5b8b\\4f53";font-family:SimSun!important}.local-quill-editor .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=SimHei][data-v-faab8a64]:before,.local-quill-editor .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=SimHei][data-v-faab8a64]:before{content:"\\9ed1\\4f53";font-family:SimHei}.local-quill-editor .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=Microsoft-YaHei][data-v-faab8a64]:before,.local-quill-editor .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=Microsoft-YaHei][data-v-faab8a64]:before{content:"\\5fae\\8f6f\\96c5\\9ed1";font-family:Microsoft YaHei}.local-quill-editor .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=KaiTi][data-v-faab8a64]:before,.local-quill-editor .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=KaiTi][data-v-faab8a64]:before{content:"\\6977\\4f53";font-family:KaiTi!important}.local-quill-editor .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=FangSong][data-v-faab8a64]:before,.local-quill-editor .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=FangSong][data-v-faab8a64]:before{content:"\\4eff\\5b8b";font-family:"FangSong"}.local-quill-editor .ql-align-center[data-v-faab8a64]{text-align:center}.local-quill-editor .ql-align-right[data-v-faab8a64]{text-align:right}.local-quill-editor .ql-align-left[data-v-faab8a64]{text-align:left}\n')();
const fontSize = ["12px", "14px", "16px", "20px", "24px", "36px"];
sn.imports["attributors/style/size"].whitelist = fontSize;
sn.register(sn.imports["attributors/style/size"]);
const Font = sn.import("attributors/style/font");
const fonts = [
  "SimSun",
  "SimHei",
  "Microsoft-YaHei",
  "KaiTi",
  "FangSong"
];
Font.whitelist = fonts;
sn.register(Font, true);
const _sfc_main = {
  components: {
    QuillEditor: a
  },
  data() {
    return {
      editorOption: {
        placeholder: "\u8BF7\u5728\u8FD9\u91CC\u8F93\u5165",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ size: fontSize }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            [{ font: fonts }],
            [{ align: [] }],
            ["clean"],
            ["image"]
          ]
        }
      }
    };
  },
  created() {
  }
};
const _hoisted_1 = { class: "local-quill-editor" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_QuillEditor = resolveComponent("QuillEditor");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_QuillEditor, {
      theme: "snow",
      options: $data.editorOption
    }, null, 8, ["options"])
  ]);
}
var richText = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-faab8a64"]]);
richText.install = (App) => {
  App.component(richText.__name, richText);
};
const components = [
  card,
  grid,
  tabs,
  table,
  input,
  _sfc_main$d,
  _sfc_main$c,
  _sfc_main$b,
  _sfc_main$a,
  _sfc_main$9,
  _sfc_main$8,
  cellPhone,
  _sfc_main$6,
  _sfc_main$5,
  _sfc_main$4,
  _sfc_main$3,
  _sfc_main$2,
  _sfc_main$1,
  richText,
  _sfc_main$e
];
const install = (App) => {
  components.forEach((item) => {
    App.component(item.__name, item);
  });
};
var index = { install };
export { _sfc_main$c as button, card, cellPhone, _sfc_main$d as checkbox, _sfc_main$4 as dateTimeRange, index as default, _sfc_main$8 as divider, grid, input, _sfc_main$2 as onlyButton, _sfc_main$a as radio, _sfc_main$3 as repeatButton, richText, _sfc_main$b as select, _sfc_main$6 as staticText, _sfc_main$e as switch1, table, tabs, _sfc_main$9 as textarea, _sfc_main$5 as time, _sfc_main$1 as upload };
