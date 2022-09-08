import { resolveComponent, openBlock, createElementBlock, renderSlot, createVNode, withModifiers, createCommentVNode, createBlock, withCtx, mergeProps, createElementVNode, resolveDynamicComponent, createTextVNode, watch, normalizeClass, toDisplayString, getCurrentScope, onScopeDispose, ref, unref, warn, getCurrentInstance, provide, computed, inject, defineComponent, Transition, withDirectives, vShow, shallowReactive, onMounted, normalizeStyle, Fragment, isVNode, render, renderList } from "vue";
var containerMask_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc$1 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$5 = { class: "container-mask" };
const _hoisted_2$1 = {
  key: 0,
  class: "container-mask-action"
};
const _sfc_main$7 = {
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
        props.ruleForm.forEach((rule, index) => {
          if (Object.keys(rule).indexOf(props.widget.ruleFormKey) > -1) {
            props.ruleForm.splice(index, 1);
          }
        });
      } else {
        props.widget.ruleFormKey && delete props.ruleForm[props.widget.ruleFormKey];
      }
    };
    return (_ctx, _cache) => {
      var _a2, _b;
      const _component_svg_icon = resolveComponent("svg-icon");
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true),
        ((_a2 = __props.selectedWidget) == null ? void 0 : _a2.id) === ((_b = __props.widget) == null ? void 0 : _b.id) && __props.isEditor ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
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
var containerMask = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["__scopeId", "data-v-28db24c4"]]);
var content_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$4 = /* @__PURE__ */ createTextVNode(" > ");
const _sfc_main$6 = {
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
    const componentMap = {
      ...eleComponents
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
    const getPropKey = (element, index) => {
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
            item: withCtx(({ element, index }) => [
              createElementVNode("div", {
                class: "transition-group-el",
                onClick: _cache[0] || (_cache[0] = ($event) => selected(__props.widget))
              }, [
                (openBlock(), createBlock(resolveDynamicComponent(componentMap[element.type]), {
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
                    _hoisted_1$4
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
var cardContent = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["__scopeId", "data-v-2f96beb3"]]);
var card_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$3 = { class: "card-header" };
const _sfc_main$5 = {
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
    watch(
      () => props.propKey,
      (value) => {
        const ruleFormKey = props.widget.options.basic.ruleFormKey.value;
        console.log("\u76D1\u542C\u5230\u6570\u636E\u53D8\u5316", ruleFormKey);
        if (ruleFormKey && !props.ruleForm[ruleFormKey]) {
          props.ruleForm[ruleFormKey] = {};
        }
      }
    );
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
                createElementVNode("div", _hoisted_1$3, [
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
var card$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["__scopeId", "data-v-f99d0e5c"]]);
card$1.install = (App) => {
  App.component(card$1.__name, card$1);
};
function fromPairs(pairs) {
  var index = -1, length = pairs == null ? 0 : pairs.length, result = {};
  while (++index < length) {
    var pair = pairs[index];
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
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
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
const withInstallFunction = (fn, name) => {
  fn.install = (app) => {
    fn._context = app._context;
    app.config.globalProperties[name] = fn;
  };
  return fn;
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
const mergeConfig = (a, b) => {
  var _a2;
  const keys = [.../* @__PURE__ */ new Set([...keysOf(a), ...keysOf(b)])];
  const obj = {};
  for (const key of keys) {
    obj[key] = (_a2 = b[key]) != null ? _a2 : a[key];
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
  const b = (blockSuffix = "") => _bem(unref(namespace), block, blockSuffix, "", "");
  const e = (element) => element ? _bem(unref(namespace), block, "", element, "") : "";
  const m = (modifier) => modifier ? _bem(unref(namespace), block, "", "", modifier) : "";
  const be = (blockSuffix, element) => blockSuffix && element ? _bem(unref(namespace), block, blockSuffix, element, "") : "";
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
    b,
    e,
    m,
    be,
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
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
var Icon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
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
const _hoisted_1$2 = ["textContent"];
const __default__$1 = {
  name: "ElBadge"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
            }, null, 10, _hoisted_1$2), [
              [vShow, !_ctx.hidden && (unref(content) || _ctx.isDot)]
            ])
          ]),
          _: 1
        }, 8, ["name"])
      ], 2);
    };
  }
});
var Badge = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);
const ElBadge = withInstall(Badge);
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
const _hoisted_1$1 = ["id"];
const _hoisted_2 = ["innerHTML"];
const __default__ = {
  name: "ElMessage"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
                }, null, 10, _hoisted_2)
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
          ], 46, _hoisted_1$1), [
            [vShow, visible.value]
          ])
        ]),
        _: 3
      }, 8, ["name", "onBeforeLeave"]);
    };
  }
});
var MessageConstructor = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);
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
var gridCol_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = { class: "transition-group-el" };
const _sfc_main$1 = {
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
    const componentMap = {
      ...eleComponents
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
    const getPropKey = (element, index) => {
      if (props.propKey) {
        if (props.widget.ruleFormKeyType === "object") {
          return `${props.propKey}.${element.ruleFormKey}`;
        }
        if (props.widget.ruleFormKeyType === "array") {
          return `${props.propKey}.${index}.${element.ruleFormKey}`;
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
            item: withCtx(({ element, index }) => [
              createElementVNode("div", _hoisted_1, [
                (openBlock(), createBlock(resolveDynamicComponent(componentMap[element.type]), {
                  key: element.id,
                  widget: element,
                  "prop-key": getPropKey(element, index),
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
var Col = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__scopeId", "data-v-2b70fd09"]]);
var grid_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  __name: "grid",
  props: ["widget", "selectedWidget", "isEditor", "parent", "propKey", "ruleForm", "ruleFormRef"],
  emits: ["selected1", "copyWidget1", "removeWidget1", "onEnd1"],
  setup(__props, { emit }) {
    const props = __props;
    watch(
      () => props.propKey,
      (value) => {
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
      },
      {
        deep: true,
        immediate: true
      }
    );
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
              style: normalizeStyle(
                `background-color:${__props.widget.options.basic.rowBackground.value}`
              )
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
var grid = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-4425d943"]]);
grid.install = (App) => {
  App.component(card.__name, grid);
};
const components = [
  card$1,
  grid
];
const install = (App) => {
  components.forEach((item) => {
    App.component(item.__name, item);
  });
};
var eleComponents = { install };
export { card$1 as card, eleComponents as default, grid };
