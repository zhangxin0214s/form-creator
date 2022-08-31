// 表单设置
export const formConfig = {
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
		value: ""
	},// 标签宽度
	"rules": {},// 校验规则
	"ruleForm": {} // 提交数据
}

// 容器
export const containers = [
	{
		id: 1,
		name: "栅格",
		type: "grid",
		category: "container",
		icon: "lattice",
		options: {
			basic: {
				name: {
					label: "唯一名称",
					value: "栅格1"
				}, // 唯一名称
				colHeight: {
					label: "统一高度",
					value: ""
				},// 栅格统一高度
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
				]
			}
		},
	},
	{
		id: 2,
		name: "标签页",
		type: "tabs",
		category: "container",
		icon: "tag",
		addable: true,
		closable: true,
		maxCount: 10,
		options: {
			advanced: {
				cols: [
					{
						id: 1,
						name: '名称',
						widgetList: []
					}
				]
			}
		},
	},
	{
		id: 3,
		name: "表格",
		type: "Table",
		icon: "table ",
		options: {
			hidden: false,
		},
	},
	{
		id: 4,
		name: "卡片",
		type: "card",
		icon: "card ",
		title: '卡片名称',
		options: {
			hidden: false,
			advanced: {
				widgetList: []
			}
		},
	},
]

// 基础组件
export const basicWidgets = [
	{
		id: 1,
		name: "输入框",
		type: "input",
		category: "widget",
		icon: "input",
		value: null,
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
				},// 默认提示文本
				maxlength: {
					label: '最大输入长度',
					value: 50,
				},
				inputType: {
					label: '输入框类型',
					value: 'text',
					options: [
						{
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
				required: {
					label: "是否必填",
					value: false,
					message: ""
				},// 是否必填*
				readonly: {
					label: "是否只读",
					value: false
				},// 只读
				disabled: {
					label: "是否禁用",
					value: false
				},// 禁用
			},
			advanced: {
				validation: {
					label: "校验规则",
					options: [
						{
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
							label: "日期时间",
							value: '{"type":"date", "message":"请选择正确日期时间", "trigger":"blur"}'
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
			}
		},
	},
	{
		id: 2,
		name: "开关",
		type: "Switch",
		category: "widget",
		icon: "switch",
		value: false,
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
			advanced: {}
		},
	},
	{
		id: 3,
		name: "复选框",
		type: "checkbox",
		category: "widget",
		icon: "check",
		value: [],
		options: {
			basic: {
				name: {
					label: "唯一名称",
					value: "复选框1",
				}, // 唯一名称
				label: {
					label: "标签",
					value: "复选框:",
				}, // 标签
				hint: {
					label: '提示语',
					value: '',
				},
				checkSize: {
					label: '复选框尺寸',
					options: [
						{
							label: '大',
							value: 'large'
						},
						{
							label: '中',
							value: 'default'
						},
						{
							label: '小',
							value: 'small'
						},
					],
					value: 'default'
				},
				ruleFormKey: {
					label: "参数key",
					value: ''
				},
				required: {
					label: "是否必填",
					value: false,
					message: ""
				},// 是否必填
				hintHidden: {
					label: '提示语隐藏',
					value: false
				},// 提示语是否隐藏
				labelHidden: {
					label: '标签是否隐藏',
					value: false
				}, // 标签是否隐藏

			},
			advanced: {
				optionItems: [  // 选项设置
					{ label: "check1", value: "value1", disabled: false, text: '是否禁用', isSelect: true }
				],
				dataSource: {
					address: '', // 请求地址
					type: 'post',// 请求方式
					parameter: {},// 请求参数
					data: {}// 发送数据
				}
			}
		},
	},
	{
		id: 4,
		name: "按钮",
		type: "button",
		category: "widget",
		icon: "button",
		options: {
			basic: {
				name: {
					label: "唯一名称",
					value: "按钮1",
				}, // 唯一名称
				label: {
					label: "标签",
					value: "",
				},
				text: {
					label: "按钮名称",
					value: "确定",
				},
				btnType: {
					label: "按钮类型",
					options: [
						{
							label: '主要按钮',
							value: 'primary'
						},
						{
							label: '成功按钮',
							value: 'success'
						},
						{
							label: '信息按钮',
							value: 'info'
						},
						{
							label: '警告按钮',
							value: 'warning'
						},
						{
							label: '危险按钮',
							value: 'danger'
						},
						{
							label: '文字按钮',
							value: 'text'
						},
					],
					value: 'primary'
				},// 类型:success/warn/error参考element-ui button
				btnSize: {
					label: "按钮尺寸",
					options: [
						{
							label: '大',
							value: 'large'
						},
						{
							label: '中',
							value: 'default'
						},
						{
							label: '小',
							value: 'small'
						},
					],
					value: 'default'
				},
				disabled: {
					label: "是否禁用",
					value: false
				},// 禁用
				plain: {
					label: "是否朴素按钮",
					value: false
				},
				space: {
					label: '是否插入空格',
					value: false
				}

			},
			advanced: {
				value: 'Check',
				label: '按钮图标',
				btnIcon: [
					{
						label: '确定',
						value: 'Check'
					},
					{
						label: '删除',
						value: 'Delete'
					},
					{
						label: '搜索',
						value: 'Search'
					},
					{
						label: '上传',
						value: 'Upload'
					},
					{
						label: '下载',
						value: 'Download'
					},
					{
						label: '编辑',
						value: 'Edit'
					},
					{
						label: '分享',
						value: 'Share'
					},
					{
						label: '加号',
						value: 'Plus'
					},
					{
						label: '减号',
						value: 'Minus'
					},
				],
				btnRound: {
					label: '是否为圆角按钮',
					value: false
				},
				btnCircle: {
					label: '是否为圆形按钮',
					value: false
				}
			},
			events: {
				onBeforeMount: {
					label: "渲染前",
					value: ""
				},
				onMounted: {
					label: "渲染完成",
					value: ""
				},
				onClick: {
					label: "点击事件",
					value: "if (!props.ruleFormRef) return\nprops.ruleFormRef.validate((valid, fields) => {\n  console.log(valid, \"===valid===\")\n  if (valid) {\n    console.log('submit!')\n    ElMessage({\n      message: '提交成功',\n      type: 'success',\n      duration: 1000\n    })\n  } else {\n    console.log('error submit!', fields)\n    ElMessage({\n      message: '有必填项未填写，或填写错误，请检查',\n      type: 'error',\n      duration: 1000\n    })\n  }\n})"
				}
			}
		}
	},
	{
		id: 5,
		name: "下拉框",
		type: "select",
		category: "widget",
		icon: "select",
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
				ruleFormKey: {
					label: "参数key",
					value: ''
				},
				required: {
					label: "是否必填",
					value: false,
					message: ""
				},// 是否必填
				labelHidden: {
					label: '标签是否隐藏',
					value: false
				},
				hintHidden: {
					label: '提示语隐藏',
					value: false
				},// 提示语是否隐藏
				disabled: {
					label: "是否禁用",
					value: false
				},// 禁用
			},
			advanced: {
				selectConfig: {
					label: '选项设置',
					children: [],
				},
			}
		}
	},
	{
		id: 6,
		name: "单选框",
		type: "Radio",
		category: "widget",
		icon: "Radio",
		options: {
			basic: {
				name: {
					label: "唯一名称",
					value: "单选框",
				}, // 唯一名称
				label: {
					label: "标签",
					value: "单选框:",
				}, // 标签
				hint: {
					label: '提示语',
					value: '',
				},
				radioSize: {
					label: '单选框尺寸',
					options: [
						{
							label: '大',
							value: 'large'
						},
						{
							label: '中',
							value: 'default'
						},
						{
							label: '小',
							value: 'small'
						},
					],
					value: 'default'
				},
				ruleFormKey: {
					label: "参数key",
					value: ''
				},
				required: {
					label: "是否必填",
					value: false,
					message: ""
				},// 是否必填
				hintHidden: {
					label: '提示语隐藏',
					value: false
				},// 提示语是否隐藏
				labelHidden: {
					label: '标签是否隐藏',
					value: false
				}, // 标签是否隐藏
				// disabled: {
				// 	label: "是否禁用",
				// 	value: false
				// },// 禁用
			},
			advanced: {

				optionItems:  // 选项设置
					[
						{ label: "label值1", value: "value值1", disabled: false, text: '是否禁用' },
					]
			}
		},
	},
	{
		id: 7,
		name: "文本域",
		type: "textarea",
		category: "widget",
		icon: "textField",
		value: null,
		options: {
			basic: {
				name: {
					label: "唯一名称",
					value: "文本域"
				}, // 唯一名称
				label: {
					label: "标签",
					value: "内容:"
				}, // 标签
				type: "textarea",// 类型
				defaultValue: {
					label: "默认文本",
					value: "请输入文本域内容"
				},// 默认提示文本
				ruleFormKey: {
					label: "参数key",
					value: ''
				},
				required: {
					label: "是否必填",
					value: false,
					message: ""
				},// 是否必填
				readonly: {
					label: "是否只读",
					value: false
				},// 只读
				disabled: {
					label: "是否禁用",
					value: false
				},// 禁用
			},
			advanced: {
				validation: {
					label: "正则校验提示",
					options: [
						{
							label: "无校验",
							value: "提示不是最优正则，请按需在下方自定义输入",
						},
						{
							label: '中文字符',
							value: "[\\u4e00-\\u9fa5]"
						},
						{
							label: '正整数',
							value: '[1-9]\d*'
						},
						{
							label: "手机号码",
							value: "0?(13|14|15|17|18|19)[0-9]{9}"
						},
						{
							label: "身份证号",
							value: "\d{17}[\d|x]|\d{15}"
						},
						{
							label: "Email地址",
							value: "\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}"
						},
						{
							label: "网址",
							value: "[a-zA-z]+:\/\/[^\s]*"
						},
					],
					value: "提示不是最优正则，请按需在下方自定义输入"
				},// 校验规则
				validationCustom: {
					label: "自定义",
					value: ""
				}
				// validationHint:""//校验规则提示
			}
		},
	},
	{
		id: 8,
		name: "分割线",
		type: "divider",
		category: "widget",
		icon: "split",
		options: {
			basic: {
				name: {
					label: "唯一名称",
					value: "分割线"
				}, // 唯一名称
				label: {
					label: "",
					value: ""
				}, // 标签
				"divider-content": {
					label: "内容",
					value: "",
				},
				"divider-direction": {
					label: "方向",
					options: [
						{
							label: "横向分割线",
							value: "horizontal"
						},
						{
							label: "纵向分割线",
							value: "vertical"
						},
					],
					value: 'horizontal'
				},
				"divider-style": {
					label: "样式",
					options: [
						{
							label: "实线",
							value: "solid"
						},
						{
							label: "方格虚线",
							value: "dashed"
						},
						{
							label: "圆点虚线",
							value: "dotted"
						},
					],
					value: 'solid'
				},
				"divider-position": {
					label: "内容位置",
					options: [
						{
							label: "居左",
							value: "left"
						},
						{
							label: "居中",
							value: "center"
						},
						{
							label: "居右",
							value: "right"
						},
					],
					value: 'center'
				}

			},
			advanced: {}
		}
	},
	{
		id: 9,
		name: "手机号",
		type: "cellPhone",
		category: "widget",
		icon: "cellPhone",
		options: {
			basic: {
				name: {
					label: "唯一名称",
					value: "手机号"
				}, // 唯一名称
				label: {
					label: "标签",
					value: "联系电话:"
				}, // 标签
				prefix: {
					options: [
						{
							label: "86",
							value: '大陆'
						},
						{
							label: "852",
							value: '香港'
						},
						{
							label: "853",
							value: '澳门'
						},
					],
					value: '86'
				},
				type: "number",// 类型
				defaultValue: {
					label: "默认文本",
					value: "请填写正确的手机号"
				},// 默认提示文本
				ruleFormKey: {
					label: "参数key",
					value: ''
				},
				required: {
					label: "是否必填",
					value: false,
					message: ""
				},// 是否必填
				readonly: {
					label: "是否只读",
					value: false
				},// 只读
				disabled: {
					label: "是否禁用",
					value: false
				},// 禁用
			},
			advanced: {
				validation: {
					label: "正则校验提示",
					options: [
						{
							label: "无校验",
							value: "提示不是最优正则，请按需在下方自定义输入",
						},
						{
							label: '中文字符',
							value: "[\\u4e00-\\u9fa5]"
						},
						{
							label: '正整数',
							value: '[1-9]\d*'
						},
						{
							label: "手机号码",
							value: "0?(13|14|15|17|18|19)[0-9]{9}"
						},
						{
							label: "身份证号",
							value: "\d{17}[\d|x]|\d{15}"
						},
						{
							label: "Email地址",
							value: "\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}"
						},
						{
							label: "网址",
							value: "[a-zA-z]+:\/\/[^\s]*"
						},
					],
					value: "提示不是最优正则，请按需在下方自定义输入"
				},// 校验规则
				validationCustom: {
					label: "自定义",
					value: ""
				}
				// validationHint:""//校验规则提示
			}
		},
	},
	{
		id: 10,
		name: "静态文本",
		type: "staticText",
		category: "widget",
		icon: "staticText",
		options: {
			basic: {
				name: {
					label: "唯一名称",
					value: "静态文本"
				}, // 唯一名称
				label: {
					label: "",
					value: ""
				}, // 标签
				textareaDefaultValue: {
					label: '默认文本',
					value: '这是一段静态文本',
				}, // 默认文本
				"static-text-line-height": {
					label: '行高',
					value: 3
				},
				"font-size": {
					label: '字体大小',
					value: 16
				},
				"font-color": {
					label: '字体颜色',
					value: '#000000'
				},
				"font-style": {
					label: '字体样式',
					options: [
						{
							label: '加粗',
							value: false
						},
						{
							label: '斜体',
							value: false
						},
						{
							label: '下划线',
							value: false
						}
					]
				},
				alignment: {
					'value': 'left',
					'label': '对齐方式',
					"options": [
						{
							label: '左对齐',
							value: 'left'
						}, {
							label: '居中对齐',
							value: 'center'
						}, {
							label: '右对齐',
							value: 'right'
						}
					]
				},
			},
			advanced: {}
		}
	},
	{
		id: 11,
		name: "时间选择器",
		type: "date",
		category: "widget",
		icon: "time",
		options: {
			basic: {
				value: "",
				name: {
					label: "唯一名称",
					value: "时间选择"
				}, // 唯一名称
				label: {
					label: "标题",
					value: "时间:"
				}, // 标签
				hint: {
					label: '提示语',
					value: '',
				}, // 提示语
				dateSize: {
					label: "输入框尺寸",
					options: [
						{
							label: '大',
							value: 'large'
						},
						{
							label: '中',
							value: 'default'
						},
						{
							label: '小',
							value: 'small'
						},
					],
					value: 'default'
				},
				placeholder: {
					label: '占位内容',
					value: '请选择时间'
				},
				ruleFormKey: {
					label: "参数key",
					value: ''
				},
				required: {
					label: "是否必填",
					value: false,
					message: ""
				},// 是否必填
				// hintHidden: {
				// 	label: '提示语隐藏',
				// 	value: false
				// },// 提示语是否隐藏
				// labelHidden: {
				// 	label: '标签是否隐藏',
				// 	value: false
				// }, // 标签是否隐藏
				attribute: {
					label: '操作属性',
					options: [
						{
							label: '禁用',
							value: false
						},
						{
							label: '只读',
							value: false
						},
						{
							label: '可输入',
							value: false
						},
					]
				},
			},
			advanced: {
				isRange: {
					label: '是否为范围选择',
					value: false
				},
				startPlaceholder: {
					label: '开始占位内容',
					value: '开始时间'
				},
				endPlaceholder: {
					label: '结束占位内容',
					value: '结束时间'
				},
				rangeSeparator: {
					label: '范围选择分隔符',
					value: '至'
				},
			}
		}
	},
	{
		id: 12,
		name: "日期选择器",
		type: "datetimerange",
		category: "widget",
		icon: "date",
		options: {
			basic: {
				value: "",
				name: {
					label: "唯一名称",
					value: "时间选择"
				}, // 唯一名称
				label: {
					label: "标题",
					value: "日期:"
				}, // 标签
				hint: {
					label: '提示语',
					value: '',
				}, // 提示语
				dateSize: {
					label: "输入框尺寸",
					options: [
						{
							label: '大',
							value: 'large'
						},
						{
							label: '中',
							value: 'default'
						},
						{
							label: '小',
							value: 'small'
						},
					],
					value: 'default'
				},
				placeholder: {
					label: '非范围占位值',
					value: '请选择日期'
				},
				ruleFormKey: {
					label: "参数key",
					value: ''
				},
				required: {
					label: "是否必填",
					value: false,
					message: ""
				},// 是否必填
				// hintHidden: {
				// 	label: '提示语隐藏',
				// 	value: false
				// },// 提示语是否隐藏
				// labelHidden: {
				// 	label: '标签是否隐藏',
				// 	value: false
				// }, // 标签是否隐藏
				attribute: {
					label: '操作属性',
					options: [
						{
							label: '禁用',
							value: false
						},
						{
							label: '只读',
							value: false
						},
						{
							label: '可输入',
							value: false
						}
					]
				}
			},
			advanced: {
				value: 'date',
				label: '显示类型',
				dateType: [
					{
						value: 'year',
						label: '年'
					},
					{
						value: 'month',
						label: '月'
					},
					{
						value: 'date',
						label: '日'
					},
					{
						value: 'week',
						label: '周'
					},
					{
						value: 'datetime',
						label: '日期和时间点'
					},
					{
						value: 'datetimerange',
						label: '日期和时间范围'
					},
					{
						value: 'monthrange',
						label: '月份范围'
					},
					{
						value: 'daterange',
						label: '日期范围'
					}
				],
				startPlaceholder: {
					label: '开始占位内容',
					value: '开始日期'
				},
				endPlaceholder: {
					label: '结束占位内容',
					value: '结束日期'
				},
				rangeSeparator: {
					label: '范围选择分隔符',
					value: '至'
				},
			}
		}
	},
	// {
	// 	id:13,
	// 	name:"级联选择",
	// 	type:"hierarchy",
	// 	category:"widget",
	// 	icon:"hierarchy",
	// 	options:{
	// 		basic:{
	// 			name:{
	// 				label:"唯一名称",
	// 				value:"级联选择"
	// 			}, // 唯一名称
	// 			label:{
	// 				label:"标题",
	// 				value:""
	// 			}, // 标签
	// 			hint:{
	// 				label:'提示语',
	// 				value:'',
	// 			}, // 提示语
	// 			hintHidden:{
	// 				label:'提示语隐藏',
	// 				value:false
	// 			},// 提示语是否隐藏
	// 			labelHidden:{
	// 				label:'标签是否隐藏',
	// 				value:false
	// 			}, // 标签是否隐藏
	// 			required:{
	// 				label:'是否必填',
	// 				value:false
	// 			}, // 是否必填
	// 		},
	// 		advanced:{}
	// 	}
	// },

]

// 高级组件
export const advancedWidgets = [
	{
		id: 1,
		name: "新增按钮",
		type: "addButton",
		category: "widget",
		icon: "button",
		options: {
			hidden: false,
			basic: {},
			advanced: {}
		}
	},
	{
		id: 2,
		name: "上传",
		type: "upload",
		category: "widget",
		icon: "upload",
		options: {
			basic: {
				name: {
					label: "唯一名称",
					value: "上传"
				}, // 唯一名称
				label: {
					label: "标签",
					value: ""
				}, // 标签
				upLoadBtnText: {
					label: "按钮文本",
					value: "点击上传文件"
				},//上传按钮文本
				maxUpLoadNumber: {
					label: '最大上传数量',
					value: 1,
				},// 最大上传数量
				url: {
					label: '请求URL',
					value: 'https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15',
				},//上传的地址
				upLoadList: {
					label: '上传绑定的数组',
					value: [],
				},// 最大上传数量
				fileListType: {
					label: '文件列表类型',
					options: [
						{
							label: '文本',
							value: 'text'
						},
						{
							label: '相片',
							value: 'picture'
						},
						{
							label: '图片卡',
							value: 'picture-card'
						}
					],
					value: 'text'
				},// 文件列表类型
				multiple: {
					label: "是否批量选择",
					value: false
				},// 批量选择
				drag: {
					label: "是否拖拽",
					value: false
				},// 是否拖拽
				disabled: {
					label: '是否禁止上传',
					value: false
				}, // 是否必填
			},
			advanced: {}
		},

	},
	{
		id: 3,
		name: "富文本",
		type: "richtext",
		category: "widget",
		icon: "richtext",
		options: {
			basic: {
				name: {
					label: "唯一名称",
					value: "富文本"
				}, // 唯一名称
				label: {
					label: "标题",
					value: ""
				}, // 标签
				hint: {
					label: '提示语',
					value: '',
				}, // 提示语
				hintHidden: {
					label: '提示语隐藏',
					value: false
				},// 提示语是否隐藏
				labelHidden: {
					label: '标签是否隐藏',
					value: false
				}, // 标签是否隐藏
				required: {
					label: '是否必填',
					value: false
				}, // 是否必填
			},
			advanced: {}
		}
	},

]
