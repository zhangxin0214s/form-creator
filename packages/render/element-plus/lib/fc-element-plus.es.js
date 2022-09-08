import { resolveComponent, openBlock, createElementBlock, renderSlot, createVNode, withModifiers, createCommentVNode, createBlock, withCtx, mergeProps, createElementVNode, resolveDynamicComponent, watch, normalizeClass, toDisplayString } from "vue";
var containerMask_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => '@charset "UTF-8";.primary-color[data-v-28db24c4]{color:#409eff}.background-opacity[data-v-28db24c4]{background:rgba(64,158,255,.6)}.stage-form .ghost[data-v-28db24c4]{width:100%;content:"";font-size:0;height:3px;box-sizing:border-box;background:#409EFF;border:2px solid #409EFF;outline-width:0;padding:0;overflow:hidden}.el-form-item .el-rate[data-v-28db24c4]{margin-top:8px}.el-form-item--medium .el-radio[data-v-28db24c4]{line-height:36px!important}.el-form-item--medium .el-rate[data-v-28db24c4]{margin-top:8px}.el-form-item--small .el-radio[data-v-28db24c4]{line-height:32px!important}.el-form-item--small .el-rate[data-v-28db24c4]{margin-top:6px}.el-form-item--mini .el-radio[data-v-28db24c4]{line-height:28px!important}.el-form-item--mini .el-rate[data-v-28db24c4]{margin-top:4px}.el-card[data-v-28db24c4]{margin-top:3px;margin-bottom:3px}input[type=password][data-v-28db24c4]::-ms-reveal{display:none}.auto-full-width.el-date-editor.el-input[data-v-28db24c4],.auto-full-width.el-date-editor.el-input__inner[data-v-28db24c4]{width:100%!important}[data-v-28db24c4]::-webkit-scrollbar{width:8px;height:8px}[data-v-28db24c4]::-webkit-scrollbar-track{width:8px;background:rgba(16,31,28,.1);-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em}[data-v-28db24c4]::-webkit-scrollbar-thumb{background-color:#101f1c59;background-clip:padding-box;min-height:28px;-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em}[data-v-28db24c4]::-webkit-scrollbar-thumb:hover{background-color:#101f1cd9}*[data-v-28db24c4]{scrollbar-color:#e5e5e5 #f7f7f9;scrollbar-width:thin}.container-mask[data-v-28db24c4]{position:relative;margin-bottom:2px}.container-mask-title[data-v-28db24c4]{position:absolute;top:-2px;left:-2px;height:22px;line-height:22px;background:#409EFF;z-index:9}.container-mask-title .text[data-v-28db24c4]{font-size:14px;font-style:normal;color:#fff;margin:4px;cursor:move}.container-mask-action[data-v-28db24c4]{position:absolute;bottom:0;right:-2px;height:23px;line-height:28px;background:#409EFF;z-index:999}.copyIcon[data-v-28db24c4]:hover,.deleteIcon[data-v-28db24c4]:hover{cursor:pointer}\n')();
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$1 = { class: "container-mask" };
const _hoisted_2 = {
  key: 0,
  class: "container-mask-action"
};
const _sfc_main$2 = {
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
      var _a;
      emit("removeWidget", props.widget, props.parentWidget);
      props.widget.ruleFormKey && delete props.ruleForm[props.widget.ruleFormKey];
      if (((_a = props.parent) == null ? void 0 : _a.ruleFormKeyType) === "array") {
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
      var _a, _b;
      const _component_svg_icon = resolveComponent("svg-icon");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true),
        ((_a = __props.selectedWidget) == null ? void 0 : _a.id) === ((_b = __props.widget) == null ? void 0 : _b.id) && __props.isEditor ? (openBlock(), createElementBlock("div", _hoisted_2, [
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
var containerMask = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-28db24c4"]]);
var content_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => '@charset "UTF-8";.primary-color[data-v-05f595ee]{color:#409eff}.background-opacity[data-v-05f595ee]{background:rgba(64,158,255,.6)}.stage-form .ghost[data-v-05f595ee]{width:100%;content:"";font-size:0;height:3px;box-sizing:border-box;background:#409EFF;border:2px solid #409EFF;outline-width:0;padding:0;overflow:hidden}.el-form-item .el-rate[data-v-05f595ee]{margin-top:8px}.el-form-item--medium .el-radio[data-v-05f595ee]{line-height:36px!important}.el-form-item--medium .el-rate[data-v-05f595ee]{margin-top:8px}.el-form-item--small .el-radio[data-v-05f595ee]{line-height:32px!important}.el-form-item--small .el-rate[data-v-05f595ee]{margin-top:6px}.el-form-item--mini .el-radio[data-v-05f595ee]{line-height:28px!important}.el-form-item--mini .el-rate[data-v-05f595ee]{margin-top:4px}.el-card[data-v-05f595ee]{margin-top:3px;margin-bottom:3px}input[type=password][data-v-05f595ee]::-ms-reveal{display:none}.auto-full-width.el-date-editor.el-input[data-v-05f595ee],.auto-full-width.el-date-editor.el-input__inner[data-v-05f595ee]{width:100%!important}[data-v-05f595ee]::-webkit-scrollbar{width:8px;height:8px}[data-v-05f595ee]::-webkit-scrollbar-track{width:8px;background:rgba(16,31,28,.1);-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em}[data-v-05f595ee]::-webkit-scrollbar-thumb{background-color:#101f1c59;background-clip:padding-box;min-height:28px;-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em}[data-v-05f595ee]::-webkit-scrollbar-thumb:hover{background-color:#101f1cd9}*[data-v-05f595ee]{scrollbar-color:#e5e5e5 #f7f7f9;scrollbar-width:thin}.grid-content1[data-v-05f595ee]{min-height:34px}\n')();
const _sfc_main$1 = {
  __name: "content",
  props: [
    "widgetList",
    "widget",
    "propKey",
    "ruleForm"
  ],
  setup(__props) {
    const props = __props;
    const componentMap = {
      ...eleComponents
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
            "component-data": { name: "fade" }
          }), {
            item: withCtx(({ element, index }) => [
              createElementVNode("div", {
                class: "transition-group-el",
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.selected(__props.widget))
              }, [
                (openBlock(), createBlock(resolveDynamicComponent(componentMap[element.type]), {
                  key: element.id,
                  widget: element,
                  "parent-widget": __props.widgetList,
                  parent: __props.widget,
                  "rule-form": __props.ruleForm,
                  "prop-key": getPropKey(element)
                }, null, 8, ["widget", "parent-widget", "parent", "rule-form", "prop-key"]))
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
var cardContent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-05f595ee"]]);
var index_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => '@charset "UTF-8";.primary-color[data-v-5e94be28]{color:#409eff}.background-opacity[data-v-5e94be28]{background:rgba(64,158,255,.6)}.stage-form .ghost[data-v-5e94be28]{width:100%;content:"";font-size:0;height:3px;box-sizing:border-box;background:#409EFF;border:2px solid #409EFF;outline-width:0;padding:0;overflow:hidden}.el-form-item .el-rate[data-v-5e94be28]{margin-top:8px}.el-form-item--medium .el-radio[data-v-5e94be28]{line-height:36px!important}.el-form-item--medium .el-rate[data-v-5e94be28]{margin-top:8px}.el-form-item--small .el-radio[data-v-5e94be28]{line-height:32px!important}.el-form-item--small .el-rate[data-v-5e94be28]{margin-top:6px}.el-form-item--mini .el-radio[data-v-5e94be28]{line-height:28px!important}.el-form-item--mini .el-rate[data-v-5e94be28]{margin-top:4px}.el-card[data-v-5e94be28]{margin-top:3px;margin-bottom:3px}input[type=password][data-v-5e94be28]::-ms-reveal{display:none}.auto-full-width.el-date-editor.el-input[data-v-5e94be28],.auto-full-width.el-date-editor.el-input__inner[data-v-5e94be28]{width:100%!important}[data-v-5e94be28]::-webkit-scrollbar{width:8px;height:8px}[data-v-5e94be28]::-webkit-scrollbar-track{width:8px;background:rgba(16,31,28,.1);-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em}[data-v-5e94be28]::-webkit-scrollbar-thumb{background-color:#101f1c59;background-clip:padding-box;min-height:28px;-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em}[data-v-5e94be28]::-webkit-scrollbar-thumb:hover{background-color:#101f1cd9}*[data-v-5e94be28]{scrollbar-color:#e5e5e5 #f7f7f9;scrollbar-width:thin}.select[data-v-5e94be28]{outline:1px solid #409EFF}\n')();
const _hoisted_1 = { class: "card-header" };
const _sfc_main = {
  __name: "index",
  props: [
    "widget",
    "ruleForm",
    "propKey",
    "parent",
    "ruleFormRef",
    "selectedWidget",
    "isEditor"
  ],
  setup(__props) {
    const props = __props;
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
          var _a, _b;
          return [
            createVNode(_component_el_card, {
              type: "border-card",
              class: normalizeClass([((_a = __props.selectedWidget) == null ? void 0 : _a.id) === ((_b = __props.widget) == null ? void 0 : _b.id) && __props.isEditor ? "select" : ""])
            }, {
              header: withCtx(() => [
                createElementVNode("div", _hoisted_1, [
                  createElementVNode("span", null, toDisplayString(__props.widget.title), 1)
                ])
              ]),
              default: withCtx(() => [
                createVNode(cardContent, {
                  widgetList: __props.widget.options.advanced.widgetList,
                  "prop-key": __props.propKey,
                  widget: __props.widget,
                  "rule-form": __props.ruleForm[__props.widget.ruleFormKey] || __props.ruleForm
                }, null, 8, ["widgetList", "prop-key", "widget", "rule-form"])
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
var card = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5e94be28"]]);
card.install = (App) => {
  App.component(card.__name, card);
};
const components = [card];
const install = (App) => {
  components.forEach((item) => {
    App.component(item.__name, item);
  });
};
var eleComponents = { install };
export { card, eleComponents as default };
