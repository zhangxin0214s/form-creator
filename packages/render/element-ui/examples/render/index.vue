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
                        "ruleForm": {
                            '111':[]
                        } // 提交数据
                    },
                    widgetList: [
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
        padding:10px;
    }
</style>