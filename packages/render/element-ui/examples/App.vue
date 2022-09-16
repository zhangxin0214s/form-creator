<template>
  <div id="app">
    <form-render/>
  </div>
</template>

<script>
import FormRender from "./render/index.vue";
export default {
  name: "App",
  components: {
    FormRender,
  },
  data() {
      return {
          formJson: {
              formConfig: {
                  "label-position": {
                      'value': 'right',
                      'label': '标签对齐方式:',
                      "options": [
                          {
                              label: '左对齐',
                              value: 'left'
                          }, {
                              label: '向上对齐',
                              value: 'top'
                          }, {
                              label: '右对齐',
                              value: 'right'
                          }
                      ]
                  }, // 标签位置
                  "label-width": {
                      label: '标签宽度',
                      value: ""
                  },// 标签宽度
                  "ruleForm": {} // 提交数据
              },
              widgetList: [
                  {
                      id: 2,
                      name: "开关",
                      type: "switch1",
                      category: "widget",
                      icon: "switch",
                      value: false,
                      ruleFormKey: null,
                      rules: [],
                      options: {
                          basic: {
                              name: {
                                  label: "唯一名称",
                                  value: "开关"
                              }, // 唯一名称
                              label: {
                                  label: "标签",
                                  value: "是否启用开关:"
                              }, // 标签, // 标签
                              ruleFormKey: {
                                  label: "参数key",
                                  value: ''
                              },
                              isHidden: {
                                  label: "隐藏组件",
                                  value: false
                              },
                              required: {
                                  label: "是否必填",
                                  value: false,
                                  message: ""
                              },// 是否必填
                              disabled: {
                                  label: '是否禁用',
                                  value: false
                              },// 禁用
                          },
                          advanced: {
                              linkage: {
                                  label: '联动对象',
                                  options: [],
                                  value: []
                              },
                              linkageCode: {
                                  label: '联动代码',
                                  value: "//#region\n/*\n注:请在高级配置中设置联动对象\nprops:当前元素数据;\nlinkageObject:联动对象数据\ncopyWidget:复制对象*/ \n//#endregion "
                              }
                          }
                      }
                  }
              ]
          }
      }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
