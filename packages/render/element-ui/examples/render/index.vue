<template>

        <el-form 
            class="form-renderer"
            :label-width="`${formJson.formConfig['label-width'].value}px`"
            :label-position="formJson.formConfig['label-position'].value"
            ref="ruleFormRef"
            :model="formJson.formConfig.ruleForm"
        >
        <div v-for="(widget, index) in formJson.widgetList" :key="index">
            <!-- 非容器组件 -->
            <div v-if="widget.category === 'widget'">
                <widget-mask
                    :widget="widget"
                    :widget-list="formJson.widgetList"
                    :form-config="formJson.formConfig"
                    :rule-form-ref="ruleFormRef"
                    :prop-key="widget.ruleFormKey"
                    :rule-form="formJson.formConfig.ruleForm"
                />
            </div>

            <!-- 容器类组件 -->
            <div v-if="widget.category === 'container'">
                <container-mask
                    :widget="widget"
                    :widget-list="formJson.widgetList"
                    :form-config="formJson.formConfig"
                    :rule-form-ref="ruleFormRef"
                    :prop-key="widget.ruleFormKey"
                    :rule-form="formJson.formConfig.ruleForm"
                  />
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
                            value: "100"
                        },// 标签宽度
                        "ruleForm": {} // 提交数据
                    },
                    widgetList: [
                    {
                        id: 1,
                        name: "栅格",
                        type: "fcGrid",
                        category: "container",
                        icon: "lattice",
                        value: null,
                        ruleFormKey: null,
                        ruleFormKeyType: 'object',
                        options: {
                            basic: {
                                name: {
                                    label: "唯一名称",
                                    value: "栅格1"
                                }, // 唯一名称
                                colHeight: {
                                    label: "统一高度",
                                    value: 36
                                },// 栅格统一高度'
                                rowBackground: {
                                    label: "背景颜色",
                                    value: "#FFFFFF"
                                },
                                ruleFormKey: {
                                    label: "参数key",
                                    value: ''
                                },
                                isHidden: {
                                    label: "隐藏组件",
                                    value: false
                                },
                                ruleFormKeyType: {
                                    label: '参数类型',
                                    value: 'object',
                                    options: [
                                        {
                                            label: '对象',
                                            value: 'object'
                                        },
                                        {
                                            label: '数组',
                                            value: 'array'
                                        }
                                    ]
                                },
                                "isMoveDivider": {
                                    label: "是否上下移动",
                                    value: false,
                                },
                                "moveDistance": {
                                    label: "移动距离",
                                    value: 0,
                                }
                            },
                            advanced: {
                                cols: [
                                    {
                                        id: 1,
                                        gutter: 12,
                                        widgetList: []
                                    },
                                    {
                                        id: 2,
                                        gutter: 12,
                                        widgetList: []
                                    }
                                ],
                                linkage: {
                                    label: '联动对象',
                                    options: [],
                                    value: [],
                                    targets:[]
                                },
                                linkageCode: {
                                    label: '联动代码',
                                    value: "//#region\n/*\n注:请在高级配置中设置联动对象\nwidget:当前改变元素数据;\nlinkageObj:联动对象，是个数组*/ \n//#endregion "
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
<style scoped>
    .form-renderer {
        padding:10px;
    }
</style>