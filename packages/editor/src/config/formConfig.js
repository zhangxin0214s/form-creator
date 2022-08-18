// 表单设置
export const formConfig = {
	"label-position":{
		'value':'left',
		'label':'标签对齐方式',
		"options":[
			{
				label:'左对齐',
				value:'left'
			}, {
				label:'向上对齐',
				value:'top'
			}, {
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
		id:1,
		name:"栅格",
		type:"grid",
		category:"container",
		icon:"lattice",
		options:{
			basic:{
				name:{
					label:"唯一名称",
					value:"栅格1"
				}, // 唯一名称
				colHeight:{
					label:"统一高度",
					value:""
				},// 栅格统一高度
			},
			advanced:{
				cols:[
					{
						id:1,
						gutter:12,
						widgetList:[]
					},
					{
						id:2,
						gutter:12,
						widgetList:[]
					}
				]
			}
		},
	},
	{
		id:2,
		name:"标签页",
		type:"tabs",
		category:"container",
		icon:"tag",
		addable:true,
		closable:true,
		maxCount:10,
		options:{
			advanced:{
				cols:[
					{
						id:1,
						name:'名称',
						widgetList:[]
					}
				]
			}
		},
	},
	{
		id:3,
		name:"表格",
		type:"Table",
		icon:"table ",
		options:{
			hidden:false,
		},
	},
	{
		id:4,
		name:"卡片",
		type:"card",
		icon:"card ",
		title:'卡片名称',
		options:{
			hidden:false,
			advanced:{
				widgetList:[]
			}
		},
	},
]

// 基础组件
export const basicWidgets = [
	{
		id:1,
		name:"输入框",
		type:"input",
		category:"widget",
		icon:"input",
		value:null,
		options:{
			basic:{
				name:{
					label:"唯一名称",
					value:"输入框"
				}, // 唯一名称
				label:{
					label:"标签",
					value:"工号:"
				}, // 标签
				type:"text",// 类型
				defaultValue:{
					label:"默认文本",
					value:"请输入输入框内容"
				},// 默认提示文本
				required:{
					label:"是否必填",
					value:true
				},// 是否必填*
				readonly:{
					label:"是否只读",
					value:false
				},// 只读
				disabled:{
					label:"是否禁用",
					value:false
				},// 禁用
			},
			advanced:{
				validation:{
					label:"正则校验提示",
					options:[
						{
							label:"无校验",
							value:"提示不是最优正则，请按需在下方自定义输入",
						},
						{
							label:'中文字符',
							value:"[\\u4e00-\\u9fa5]"
						},
						{
							label:'正整数',
							value:'[1-9]\d*'
						},
						{
							label:"手机号码",
							value:"0?(13|14|15|17|18|19)[0-9]{9}"
						},
						{
							label:"身份证号",
							value:"\d{17}[\d|x]|\d{15}"
						},
						{
							label:"Email地址",
							value:"\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}"
						},
						{
							label:"网址",
							value:"[a-zA-z]+:\/\/[^\s]*"
						},
					],
					value:"提示不是最优正则，请按需在下方自定义输入"
				},// 校验规则
				validationCustom:{
					label:"自定义",
					value:""
				}
				// validationHint:""//校验规则提示
			}
		},
	},
	{
		id:2,
		name:"开关",
		type:"Switch",
		category:"widget",
		icon:"switch",
		value:null,
		options:{
			basic:{
				name:{
					label:"唯一名称",
					value:"开关"
				}, // 唯一名称
				label:{
					label:"标签",
					value:"是否启用开关:"
				}, // 标签, // 标签
				switchDefaultValue:{
					label:'默认值',
					value:true
				},// 默认值:开 || 关
				required:{
					label:'是否必填',
					value:false
				},// 是否必填*
				disabled:{
					label:'是否禁用',
					value:false
				},// 禁用
			},
			advanced:{}
		},
	},
	{
		id:3,
		name:"复选框",
		type:"checkbox",
		category:"widget",
		icon:"check",
		value:null,
		options:{
			basic:{
				name:{
					label:"唯一名称",
					value:"复选框1",
				}, // 唯一名称
				label:{
					label:"标签",
					value:"复选框:",
				}, // 标签
				hint:{
					label:'提示语',
					value:'',
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
			advanced:{
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
		category:"widget",
		icon:"button",
		options:{
			basic:{
				name:{
					label:"唯一名称",
					value:"按钮1",
				}, // 唯一名称
				label:{
					label:"标签",
					value:"",
				},
				text:{
					label:"按钮名称",
					value:"",
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
					value:false
				},// 禁用

			},
			advanced:{
				label:'按钮图标',
				btnIcon:[
					{
						label:'确定',
						value:'Check'
					},
					{
						label:'删除',
						value:'Delete'
					},
					{
						label:'搜索',
						value:'Search'
					},
					{
						label:'上传',
						value:'Upload'
					},
					{
						label:'下载',
						value:'Download'
					},
					{
						label:'编辑',
						value:'Edit'
					},
					{
						label:'分享',
						value:'Share'
					},
				],
				value:'请选择按钮图标'
			}
		}
	},
	{
		id:5,
		name:"下拉框",
		type:"select",
		category:"widget",
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
		id:6,
		name:"单选框",
		type:"Radio",
		category:"widget",
		icon:"Radio",
		options:{
			basic:{
				name:{
					label:"唯一名称",
					value:"单选框",
				}, // 唯一名称
				label:{
					label:"标签",
					value:"单选框:",
				}, // 标签
				hint:{
					label:'提示语',
					value:'',
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
			advanced:{

				optionItems:  // 选项设置
					[
						{label:"radio 1", value:"1", disabled:false, text:'是否禁用'},
					]
			}
		},
	},
	{
		id:7,
		name:"文本域",
		type:"textarea",
		category:"widget",
		icon:"textField",
		value:null,
		options:{
			basic:{
				name:{
					label:"唯一名称",
					value:"文本域"
				}, // 唯一名称
				label:{
					label:"标签",
					value:"内容:"
				}, // 标签
				type:"textarea",// 类型
				textareaDefaultValue:{
					label:"默认文本",
					value:"请输入文本域内容"
				},// 默认提示文本
				required:{
					label:"是否必填",
					value:true
				},// 是否必填*
				readonly:{
					label:"是否只读",
					value:false
				},// 只读
				disabled:{
					label:"是否禁用",
					value:false
				},// 禁用
			},
			advanced:{
				validation:{
					label:"正则校验提示",
					options:[
						{
							label:"无校验",
							value:"提示不是最优正则，请按需在下方自定义输入",
						},
						{
							label:'中文字符',
							value:"[\\u4e00-\\u9fa5]"
						},
						{
							label:'正整数',
							value:'[1-9]\d*'
						},
						{
							label:"手机号码",
							value:"0?(13|14|15|17|18|19)[0-9]{9}"
						},
						{
							label:"身份证号",
							value:"\d{17}[\d|x]|\d{15}"
						},
						{
							label:"Email地址",
							value:"\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}"
						},
						{
							label:"网址",
							value:"[a-zA-z]+:\/\/[^\s]*"
						},
					],
					value:"提示不是最优正则，请按需在下方自定义输入"
				},// 校验规则
				validationCustom:{
					label:"自定义",
					value:""
				}
				// validationHint:""//校验规则提示
			}
		},
	},
	{
		id:8,
		name:"分割线",
		type:"divider",
		category:"widget",
		icon:"split",
		options:{
			basic:{
				name:{
					label:"唯一名称",
					value:"分割线"
				}, // 唯一名称
				label:{
					label:"",
					value:""
				}, // 标签
				"divider-content":{
					label:"内容",
					value:"",
				},
				"divider-direction":{
					label:"方向",
					options:[
						{
							label:"横向分割线",
							value:"horizontal"
						},
						{
							label:"纵向分割线",
							value:"vertical"
						},
					],
					value:'horizontal'
				},
				"divider-style":{
					label:"样式",
					options:[
						{
							label:"实线",
							value:"solid"
						},
						{
							label:"方格虚线",
							value:"dashed"
						},
						{
							label:"圆点虚线",
							value:"dotted"
						},
					],
					value:'solid'
				},
				"divider-position":{
					label:"内容位置",
					options:[
						{
							label:"居左",
							value:"left"
						},
						{
							label:"居中",
							value:"center"
						},
						{
							label:"居右",
							value:"right"
						},
					],
					value:'center'
				}

			},
			advanced:{}
		}
	},
	{
		id:9,
		name:"手机号",
		type:"cellPhone",
		category:"widget",
		icon:"cellPhone",
		options:{
			basic:{
				name:{
					label:"唯一名称",
					value:"手机号"
				}, // 唯一名称
				label:{
					label:"标签",
					value:"联系电话:"
				}, // 标签
				prefix:{
					options:[
						{
							label:"86",
							value:'大陆'
						},
						{
							label:"852",
							value:'香港'
						},
						{
							label:"853",
							value:'澳门'
						},
					],
					value:'86'
				},
				type:"number",// 类型
				defaultValue:{
					label:"默认文本",
					value:"请填写正确的手机号"
				},// 默认提示文本
				required:{
					label:"是否必填",
					value:true
				},// 是否必填*
				readonly:{
					label:"是否只读",
					value:false
				},// 只读
				disabled:{
					label:"是否禁用",
					value:false
				},// 禁用
			},
			advanced:{
				validation:{
					label:"正则校验提示",
					options:[
						{
							label:"无校验",
							value:"提示不是最优正则，请按需在下方自定义输入",
						},
						{
							label:'中文字符',
							value:"[\\u4e00-\\u9fa5]"
						},
						{
							label:'正整数',
							value:'[1-9]\d*'
						},
						{
							label:"手机号码",
							value:"0?(13|14|15|17|18|19)[0-9]{9}"
						},
						{
							label:"身份证号",
							value:"\d{17}[\d|x]|\d{15}"
						},
						{
							label:"Email地址",
							value:"\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}"
						},
						{
							label:"网址",
							value:"[a-zA-z]+:\/\/[^\s]*"
						},
					],
					value:"提示不是最优正则，请按需在下方自定义输入"
				},// 校验规则
				validationCustom:{
					label:"自定义",
					value:""
				}
				// validationHint:""//校验规则提示
			}
		},
	},
	{
		id:10,
		name:"静态文本",
		type:"staticText",
		category:"widget",
		icon:"staticText",
		options:{
			basic:{
				name:{
					label:"唯一名称",
					value:"静态文本"
				}, // 唯一名称
				label:{
					label:"标题",
					value:""
				}, // 标签
				hint:{
					label:'提示语',
					value:'',
				}, // 提示语
				hintHidden:{
					label:'提示语隐藏',
					value:false
				},// 提示语是否隐藏
				labelHidden:{
					label:'标签是否隐藏',
					value:false
				}, // 标签是否隐藏
				required:{
					label:'是否必填*',
					value:false
				}, // 是否必填
			},
			advanced:{}
		}
	},
	{
		id:11,
		name:"时间",
		type:"date",
		category:"widget",
		icon:"date",
		options:{
			basic:{
				name:{
					label:"唯一名称",
					value:"时间选择"
				}, // 唯一名称
				label:{
					label:"标题",
					value:""
				}, // 标签
				hint:{
					label:'提示语',
					value:'',
				}, // 提示语
				hintHidden:{
					label:'提示语隐藏',
					value:false
				},// 提示语是否隐藏
				labelHidden:{
					label:'标签是否隐藏',
					value:false
				}, // 标签是否隐藏
				required:{
					label:'是否必填*',
					value:false
				}, // 是否必填
			},
			advanced:{}
		}
	},
	{
		id:12,
		name:"时间范围",
		type:"datetimerange",
		category:"widget",
		icon:"datetimerange",
		options:{
			basic:{
				name:{
					label:"唯一名称",
					value:"时间范围选择"
				}, // 唯一名称
				label:{
					label:"标题",
					value:""
				}, // 标签
				hint:{
					label:'提示语',
					value:'',
				}, // 提示语
				hintHidden:{
					label:'提示语隐藏',
					value:false
				},// 提示语是否隐藏
				labelHidden:{
					label:'标签是否隐藏',
					value:false
				}, // 标签是否隐藏
				required:{
					label:'是否必填*',
					value:false
				}, // 是否必填
			},
			advanced:{}
		}
	},
	{
		id:13,
		name:"级联选择",
		type:"hierarchy",
		category:"widget",
		icon:"hierarchy",
		options:{
			basic:{
				name:{
					label:"唯一名称",
					value:"级联选择"
				}, // 唯一名称
				label:{
					label:"标题",
					value:""
				}, // 标签
				hint:{
					label:'提示语',
					value:'',
				}, // 提示语
				hintHidden:{
					label:'提示语隐藏',
					value:false
				},// 提示语是否隐藏
				labelHidden:{
					label:'标签是否隐藏',
					value:false
				}, // 标签是否隐藏
				required:{
					label:'是否必填*',
					value:false
				}, // 是否必填
			},
			advanced:{}
		}
	},

]

// 高级组件
export const advancedWidgets = [
	{
		id:1,
		name:"新增按钮",
		type:"addButton",
		category:"widget",
		icon:"button",
		options:{
			hidden:false,
			basic:{},
			advanced:{}
		}
	},
	{
		id:2,
		name:"上传",
		type:"Upload",
		category:"widget",
		icon:"upload",
		options:{
			hidden:false,
			basic:{},
			advanced:{}
		}
	},
	{
		id:3,
		name:"富文本",
		type:"richtext",
		category:"widget",
		icon:"richtext",
		options:{
			basic:{
				name:{
					label:"唯一名称",
					value:"富文本"
				}, // 唯一名称
				label:{
					label:"标题",
					value:""
				}, // 标签
				hint:{
					label:'提示语',
					value:'',
				}, // 提示语
				hintHidden:{
					label:'提示语隐藏',
					value:false
				},// 提示语是否隐藏
				labelHidden:{
					label:'标签是否隐藏',
					value:false
				}, // 标签是否隐藏
				required:{
					label:'是否必填*',
					value:false
				}, // 是否必填
			},
			advanced:{}
		}
	},

]
