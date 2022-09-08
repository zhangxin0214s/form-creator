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
		ruleFormKey: null,
		ruleFormKeyType: 'object',
		options: {
			basic: {
				ruleFormKey: {
					label: "参数key",
					value: ''
				}
			},
			advanced: {
				cols: [
					{
						id: 1,
						name: '名称',
						ruleFormKey: {
							label: "参数key",
							value: ''
						},
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
		category: "container",
		icon: "card ",
		title: '卡片名称',
		ruleFormKey: null,
		ruleFormKeyType: 'object',
		options: {
			hidden: false,
			basic: {
				ruleFormKey: {
					label: "参数key",
					value: ''
				}
			},
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
				},// 默认提示文本
				hint: {
					label: "输入内容提示",
					value: ""
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
					value: []
				},
				linkageCode: {
					label: '联动代码',
					value: "//#region\n/*\n注:请在高级配置中设置联动对象\nprops:当前元素数据;\nlinkageObject:联动对象数据\n*/ \n//#endregion "
				}
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
					value: "//#region\n/*\n注:请在高级配置中设置联动对象\nprops:当前元素数据;\nlinkageObject:联动对象数据\n*/ \n//#endregion "
				}
			}
		},
	},
	{
		id: 3,
		name: "复选框",
		type: "checkbox",
		category: "widget",
		icon: "check",
		value: [],
		ruleFormKey: null,
		rules: [],
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
				"margin-left-right": {
					label: "左右移动",
					value: 0
				},

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
							label: '提示语隐藏',
							value: false
						},
						{
							label: '标签是否隐藏',
							value: false
						},
						{
							label: '是否有边框',
							value: false
						}
					]
				}
			},
			advanced: {
				linkage: {
					label: '联动对象',
					options: [],
					value: '请选择'
				},
				optionItems: [  // 选项设置
					{
						label: "label值1",
						value: "value值1",
						disabled: false,
						text: '是否禁用',
						isSelect: true,
					}
				],
				dataSource: {
					address: '', // 请求地址
					type: 'post',// 请求方式
					parameter: {},// 请求参数
					data: {}// 发送数据
				}
			},
			events: {
				linkageCode: {
					label: '联动代码',
					value: "//#region\n/*\n注:请在高级配置中设置联动对象\nprops:当前元素数据;\nlinkageObject:联动对象数据\n*/ \n//#endregion "
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
				dataSource: {
					label: '动态数据',
					check: false,
					address: '', // 请求地址
					type: 'post',// 请求方式
					parameter: {},// 请求参数
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
			}
		}
	},
	{
		id: 6,
		name: "单选框",
		type: "Radio",
		category: "widget",
		icon: "Radio",
		value: '',
		ruleFormKey: null,
		rules: [],
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
							label: '提示语隐藏',
							value: false
						},
						{
							label: '标签是否隐藏',
							value: false
						},
						{
							label: '是否有边框',
							value: false
						}
					]
				}
			},
			advanced: {
				// 选项设置
				optionItems: [
					{ label: "label值1", value: "value值1", disabled: false, text: '是否禁用' },
				],
				// 请求方式
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
		id: 7,
		name: "文本域",
		type: "textarea",
		category: "widget",
		icon: "textField",
		value: null,
		ruleFormKey: null,
		rules: [],
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
				maxlength: {
					label: "最大输入长度",
					value: 50
				},
				resizeDirection: {
					label: '缩放方向',
					options: [
						{
							label: '横向缩放',
							value: 'horizontal'
						},
						{
							label: '纵向缩放',
							value: 'vertical'
						},
						{
							label: '横纵双缩放',
							value: 'both'
						}
					],
					value: "both"
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
			advanced: {}
		}
	},
	{
		id: 9,
		name: "手机号",
		type: "cellPhone",
		category: "widget",
		icon: "cellPhone",
		value: null,
		ruleFormKey: null,
		rules: [{
			message: '请填写正确的手机号',
			pattern: '^(86|852|853)-1[3456789]\\d{9}$',
		}],
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
							valueText: "大陆",
							value: '86'
						},
						{
							label: "852",
							valueText: "香港",
							value: '852'
						},
						{
							label: "853",
							valueText: "澳门",
							value: '853'
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
			advanced: {}
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
				addRequired: {
					label: "添加必填符号",
					value: false,
				},
			},
			advanced: {}
		}
	},
	{
		id: 11,
		name: "时间选择",
		type: "date",
		category: "widget",
		icon: "time",
		value: null,
		ruleFormKey: null,
		rules: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
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
							label: '是否禁用',
							value: false
						},
						{
							label: '是否只读',
							value: false
						},
						{
							label: '输入框是否可输入',
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
		name: "日期选择",
		type: "datetimerange",
		category: "widget",
		icon: "date",
		value: null,
		ruleFormKey: null,
		rules: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
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
							label: '是否禁用',
							value: false
						},
						{
							label: '完全只读',
							value: false
						},
						{
							label: '输入框是否可输入',
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
]

// 高级组件
export const advancedWidgets = [
	{
		id: 1,
		name: "复按钮组",
		type: "repeatButton",
		category: "widget",
		icon: "repeatButton",
		value: [],
		options: {
			basic: {
				name: {
					label: "唯一名称",
					value: "复选框按钮组",
				}, // 唯一名称
				label: {
					label: "标签",
					value: "复选框按钮组:",
				}, // 标签
				hint: {
					label: '提示语',
					value: '',
				},
				checkSize: {
					label: '按钮组尺寸',
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
					{ label: "label值1", value: "value值1", disabled: false, text: '是否禁用', isSelect: true }
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
		id: 2,
		name: "单按钮组",
		type: "onlyButton",
		category: "widget",
		icon: "onlyButton",
		options: {
			basic: {
				name: {
					label: "唯一名称",
					value: "单选框按钮组",
				}, // 唯一名称
				label: {
					label: "标签",
					value: "单选框按钮组:",
				}, // 标签
				hint: {
					label: '提示语',
					value: '',
				},
				radioSize: {
					label: '按钮组尺寸',
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
				// 选项设置
				optionItems: [
					{ label: "label值1", value: "value值1", disabled: false, text: '是否禁用' },
				],
				// 请求方式
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
		id: 3,
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
		id: 4,
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
