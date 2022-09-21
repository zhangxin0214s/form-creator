<template>
<el-form class="form-renderer" :label-width="`${formJson.formConfig['label-width'].value}px`" :label-position="formJson.formConfig['label-position'].value" ref="ruleFormRef" :model="formJson.formConfig.ruleForm">
  <div v-for="(widget, index) in formJson.widgetList" :key="index">
    <!-- 非容器组件 -->
    <div v-if="widget.category === 'widget'">
      <widget-mask :widget="widget" :widget-list="formJson.widgetList" :form-config="formJson.formConfig" :rule-form-ref="ruleFormRef" :prop-key="widget.ruleFormKey" :rule-form="formJson.formConfig.ruleForm" />
    </div>

    <!-- 容器类组件 -->
    <div v-if="widget.category === 'container'">
      <container-mask :widget="widget" :widget-list="formJson.widgetList" :form-config="formJson.formConfig" :rule-form-ref="ruleFormRef" :prop-key="widget.ruleFormKey" :rule-form="formJson.formConfig.ruleForm" />
    </div>
  </div>
</el-form>
</template>
<script>
import WidgetMask from './widgetMask.vue'
import ContainerMask from './containerMask.vue'
export default {
  name: "FormRender",
  props: {

  },
  components: {
    WidgetMask,
    ContainerMask
  },
  data() {
    return {
      ruleFormRef: null,
      formJson: {
        formConfig: {
          "label-position": {
            'value': 'left',
            'label': '标签对齐方式:',
            "options": [{
              label: '左对齐',
              value: 'left'
            }, {
              label: '向上对齐',
              value: 'top'
            }, {
              label: '右对齐',
              value: 'right'
            }]
          }, // 标签位置
          "label-width": {
            label: '标签宽度',
            value: "100"
          }, // 标签宽度
          "ruleForm": {
            '111': []
          } // 提交数据
        },
        widgetList: [{
            id: 1,
            name: "输入框",
            type: "fcInput",
            category: "widget",
            icon: "input",
            value: null,
            ruleFormKey: null,
            rules: [],
            options: {
              basic: {
                name: {
                  label: "唯一名称",
                  value: "输入框"
                }, // 唯一名称
                label: {
                  label: "标签",
                  value: "工号:"
                }, // 标签
                defaultValue: {
                  label: "默认文本",
                  value: "请输入输入框内容"
                }, // 默认提示文本
                hint: {
                  label: "输入内容提示",
                  value: ""
                },
                inputType: {
                  label: '输入框类型',
                  value: 'text',
                  options: [{
                      label: '文本框',
                      value: 'text'
                    },
                    {
                      label: '密码框',
                      value: 'password'
                    }
                  ]
                },
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
                }, // 是否必填*
                readonly: {
                  label: "是否只读",
                  value: false
                }, // 只读
                disabled: {
                  label: "是否禁用",
                  value: false
                }, // 禁用
              },
              advanced: {
                validation: {
                  label: "校验规则",
                  options: [{
                      label: "无校验",
                      value: '',
                    },
                    {
                      label: "网址",
                      value: '{"type":"url", "message":"请输入正确的网址", "trigger":"blur"}'
                    },
                    {
                      label: "Email地址",
                      value: '{"type":"email", "message":"请输入正确的邮箱", "trigger":"blur"}'
                    },
                    {
                      label: "岗位编码",
                      value: '{"message":"只能输入数字英文", "pattern":"^[A-Za-z0-9]+$"}'
                    },
                    {
                      label: "营业执照",
                      value: '{"message":"请输入正确的营业执照", "pattern":"^[A-Z0-9]{8}-[A-Z0-9]$|^[A-Z0-9]{8}-[A-Z0-9]-[0-9]{2}$"}'
                    },
                    {
                      label: "身份证号码",
                      value: '{"message":"请正确输入您的身份证号码", "pattern":"^[1-9]\\\\d{5}[1-9]\\\\d{3}((0\\\\d)|(1[0-2]))(([0|1|2]\\\\d)|3[0-1])\\\\d{3}([0-9]|X|x)$"}'
                    },
                  ],
                  value: "",
                  customValue: "",
                  hintText: "注：请先填写参数key，再次选择校验规则，当前选择校验没有生效"
                },
                customWrongMessage: {
                  label: '校验错误提示',
                  value: ""
                },
                linkage: {
                  label: '联动对象',
                  options: [],
                  value: [],
                  targets: [],
                },
                linkageCode: {
                  label: '联动代码',
                  value: "//#region\n/*\n注:请在高级配置中设置联动对象\nwidget:当前改变元素数据;\nlinkageObj:联动对象，是个数组*/ \n//#endregion "
                }
              }
            },
          },
          {
            id: 2,
            name: "下拉框",
            type: "fcSelect",
            category: "widget",
            icon: "select",
            value: null,
            ruleFormKey: null,
            rules: [],
            options: {
              basic: {
                name: {
                  label: "唯一名称",
                  value: 1
                },
                label: {
                  label: '标签',
                  value: '选择框：'
                },
                defaultValue: {
                  label: "选择提示",
                  value: "请选择"
                },
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
                }, // 是否必填
                labelHidden: {
                  label: '标签是否隐藏',
                  value: false
                },
                hintHidden: {
                  label: '提示语隐藏',
                  value: false
                }, // 提示语是否隐藏
                disabled: {
                  label: "是否禁用",
                  value: false
                }, // 禁用
              },
              advanced: {
                dataSource: {
                  label: '动态数据',
                  check: false,
                  address: '', // 请求地址
                  type: 'post', // 请求方式
                  parameter: {}, // 请求参数
                  data: [],
                },
                cityData: {
                  label: '城市数据',
                  check: false,
                  data: [],
                },
                staticData: {
                  label: '静态数据',
                  check: false,
                  data: [],
                },
                data: [],
                linkage: {
                  label: '联动对象',
                  options: [],
                  value: [],
                  targets: []
                },
                linkageCode: {
                  label: '联动代码',
                  value: "//#region\n/*\n注:请在高级配置中设置联动对象\nwidget:当前改变元素数据;\nlinkageObj:联动对象，是个数组*/ \n//#endregion "
                }
              }
            }
          },
          {
            id: 4,
            name: "卡片",
            type: "fcCard",
            category: "container",
            icon: "card ",
            title: '卡片名称',
            ruleFormKey: null,
            ruleFormKeyType: 'object',
            options: {
              basic: {
                name: {
                  label: "唯一名称",
                  value: "卡片"
                }, // 唯一名称
                ruleFormKey: {
                  label: "参数key",
                  value: ''
                },
                isHidden: {
                  label: "隐藏组件",
                  value: false
                },
              },
              advanced: {
                widgetList: []
              }
            },
          }
        ]
      }
    }
  }
};
</script>
<style scoped>
.form-renderer {
  padding: 10px;
}
</style>
