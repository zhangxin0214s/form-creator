// 表单设置
export const formConfig = {
	"label-position":{
		'value':'left',
		'label':'标签对齐方式:',
		"options":[
			{
				label:'左对齐',
				value:'left'
			},{
				label:'向上对齐',
				value:'top'
			},{
				label:'右对齐',
				value:'right'
			}
		]
	}, // 标签位置
	"label-width":{
		label:'标签宽度',
		value:""
	},// 标签宽度
	"rules":{}// 校验规则
}
// 容器
export const containers = [
	{
		id: 1,
		name: "栅格",
		type: "grid",
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
]

// 基础组件
export const basicWidgets = [
	{
		id: 1,
		name: "输入框",
		type: "input",
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
				type: "text",// 类型
				defaultValue: {
					label: "默认文本",
					value: "这是默认文本"
				},// 默认提示文本
				required: {
					label: "是否必填",
					value: true
				},// 是否必填*
				readonly: {
					label: "是否只读",
					value: false
				},// 只读
				disabled: {
					label: "是否禁用",
					value: true
				},// 禁用
			},
			advanced: {
				validation: {
					label: "正则校验",
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
		id: 2,
		name: "开关",
		type: "Switch",
		icon: "switch",
		value: null,
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
				switchDefaultValue: {
					label: '默认值',
					value: true
				},// 默认值:开 || 关
				required: {
					label: '是否必填',
					value: false
				},// 是否必填*
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
		icon: "check",
		value: null,
		options: {
			basic: {
				name: {
					label: "唯一名称",
					value: "复选框1",
					placeholder: '表单标题，唯一名称'
				}, // 唯一名称
				label: {
					label: "标签",
					value: "复选框:",
					placeholder: '标签名称'
				}, // 标签
				hint: {
					label: '提示语',
					value: '',
					placeholder: '提示语，用于表单校验' // 输入框占位文本
				},
				hintHidden:{
					label:'提示语隐藏',
					value:false
				},// 提示语是否隐藏
				labelHidden:{
					label:'标签是否隐藏',
					value:false
				}, // 标签是否隐藏
				required:{
					label:'是否必填',
					value:true
				},// 是否必填*

			},
			advanced: {
				optionItems:  // 选项设置
					[
						{label:"check 1", value:1, disabled:false, text:'是否禁用', isSelect:true},
					]
			}
		},
	},
	{
		id:4,
		name:"按钮",
		type:"button",
		icon:"button",
		options:{
			basic:{
				name:{
					label:"唯一名称",
					value:"按钮1",
				}, // 唯一名称
				label:{
					label:"标签",
					value:"按钮:",
				},
				text:{
					label:"按钮名称",
					value:"提交",
				},
				type:{
					label:"按钮类型",
					options:[
						{
							label:'主要按钮',
							value:'primary'
						},
						{
							label:'成功按钮',
							value:'success'
						},
						{
							label:'信息按钮',
							value:'info'
						},
						{
							label:'警告按钮',
							value:'warning'
						},
						{
							label:'危险按钮',
							value:'danger'
						},
						{
							label:'文字按钮',
							value:'text'
						},
					],
					value:'primary'
				},// 类型:success/warn/error参考element-ui button
				btnSize:{
					label:"按钮尺寸",
					options:[
						{
							label:'中等按钮',
							value:'medium'
						},
						{
							label:'小型按钮',
							value:'small'
						},
					],
					value:'medium'
				},
				disabled:{
					label:"是否禁用",
					value:true
				},// 禁用
				required:{
					label:'是否必填',
					value:true
				},// 是否必填*
			},
			advanced: {},
			events:{
				onClick: {
					label: '点击',
					value: 'alert(1)'
				}
			}
		}
	},
	{
		id:5,
		name:"下拉框",
		type:"select",
		icon:"select",
		options:{
			basic:{
				name: {
					label: "唯一名称",
					value: 1
				},
				label:{
					label: '下拉框属性',
					value: '选择框：'
				},
				required: {
					label: '是否必填*',
					value: false
				},
				labelHidden: {
					label: '标签是否隐藏',
					value: false
				},
				hint:"",// 提示语
				hintHidden:false,// 提示语是否隐藏
			},
			advanced:{
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
		icon: "Radio",
		options: {
			basic: {
				name: "标题", // 唯一名称
				label: "", // 标签
				labelHidden: false, // 标签是否隐藏
				labelWidth: null,// 标签宽度
				labelAlign: "",// 标签对齐方式
				required: false,// 是否必填*
				hint: "",// 提示语
				hintHidden: false,// 提示语是否隐藏
			},
			advanced: {
				optionItems: [
					{ label: "radio 1", value: 1 },
					{ label: "radio 2", value: 2 },
					{ label: "radio 3", value: 3 },
				]
			}
		}
	},
	{
		id: 7,
		name: "文本域",
		type: "textarea",
		icon: "textField",
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
				labelWidth: {
					label: "标签宽度",
					value: 100
				},// 标签宽度
				labelAlign: {
					label: "标签对齐方式",
					options: [
						{
							label: "左对齐",
							value: "left"
						},
						{
							label: "顶部对齐",
							value: "top"
						},
						{
							label: "右对齐",
							value: "right"
						}
					],
					value: "right"
				},// 标签对齐方式
				type: "text",// 类型
				textureDefaultValue: {
					label: "默认文本",
					value: "这是默认文本"
				},// 默认提示文本
				required: {
					label: "是否必填",
					value: true
				},// 是否必填*
				readonly: {
					label: "是否只读",
					value: false
				},// 只读
				disabled: {
					label: "是否禁用",
					value: true
				},// 禁用
			},
			advanced: {
				validation: {
					label: "正则校验",
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
		type: "Divider",
		icon: "split",
		options: {
			hidden: false,
			basic: {},
			advanced: {}
		}
	},
]

// 高级组件
export const advancedWidgets = [
	{
		id: 1,
		name: "新增按钮",
		type: "addButton",
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
		type: "Upload",
		icon: "upload",
		options: {
			hidden: false,
			basic: {},
			advanced: {}
		}
	},
]
