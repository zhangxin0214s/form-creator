// 容器
export const containers = [
	{
		id:1,
		name:"栅格",
		type:"grid",
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
		icon:"tag",
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
]

// 基础组件
export const basicWidgets = [
	{
		id:1,
		name:"输入框",
		type:"input",
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
				labelWidth:{
					label:"标签宽度",
					value:100
				},// 标签宽度
				labelAlign:{
					label:"标签对齐方式",
					options:[
						{
							label:"左对齐",
							value:"left"
						},
						{
							label:"顶部对齐",
							value:"top"
						},
						{
							label:"右对齐",
							value:"right"
						}
					],
					value:"right"
				},// 标签对齐方式
				type:"text",// 类型
				defaultValue:{
					label:"默认文本",
					value:"这是默认文本"
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
					value:true
				},// 禁用
			},
			advanced:{
				validation:{
					label:"正则校验规则",
					options:[
						{
							label:"无校验",
							value:"",
						},
						{
							label:"手机号码（国内）",
							value:"/0?(13|14|15|17|18|19)[0-9]{9}/"
						},
						{
							label:"固定电话（国内）",
							value:"[0-9-()（）]{7,18}"
						},
						{
							label:"Email地址",
							value:"\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}"
						},
						{
							label:"身份证号",
							value:"\d{17}[\d|x]|\d{15}"
						},
					],
					value:"无校验"
				},// 校验规则
				// validationHint:""//校验规则提示
			}
		},
	},
	{
		id:2,
		name:"开关",
		type:"Switch",
		icon:"switch",
		value:null,
		options:{
			basic:{
				name: {
					label:"唯一名称",
					value:"开关1"
				}, // 唯一名称
				label:{
					label:"标签",
					value:"是否启用:"
				}, // 标签, // 标签
				labelWidth:{
					label:"标签宽度",
					value:100
				},
				labelAlign:"center",// 标签对齐方式
				defaultValue:true,// 默认值:开 || 关
				required:false,// 是否必填*
				disabled:false,// 禁用
				hint:"这是开关的提示语",// 提示语
				hintHidden:false,// 提示语是否隐藏
			},
			advanced:{}
		},
	},
	{
		id:3,
		name:"复选框",
		type:"checkbox",
		icon:"check",
		value:null,
		options:{
			basic:{
				name:{
					label:"唯一名称",
					value:"复选框1",
					placeholder:'表单标题，唯一名称'
				}, // 唯一名称
				label:{
					label:"标签",
					value:"复选框:",
					placeholder:'标签名称'
				}, // 标签
				labelWidth:{
					label:"标签宽度",
					value:200,
					placeholder:'用于设置标签宽度'
				},// 标签宽度
				hint:{
					label:'提示语',
					value:'',
					placeholder:'提示语，用于表单校验' // 输入框占位文本
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
				labelAlign:{
					label:"标签对齐方式",
					options:[
						{
							label:"左对齐",
							value:"left"
						},
						{
							label:"顶部对齐",
							value:"top"
						},
						{
							label:"右对齐",
							value:"right"
						}
					],
					value:"right"
				},// 标签对齐方式
			},
			advanced:{
				optionItems:  // 选项设置
					[
						{label:"check 1", value:1, disabled:false},
						{label:"check 2", value:2, disabled:false},
						{label:"check 3", value:3, disabled:false},
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
					placeholder:'表单标题，唯一名称'
				}, // 唯一名称
				label:{
					label:"",
					value:"",
					placeholder:''
				}, // 唯一名称
				text:{
					label:"按钮名称",
					value:"提交",
					placeholder:''
				}, // 标签
				labelWidth:{
					label:"标签宽度",
					value:100
				},
				required:{
					label:'是否必填',
					value:true
				},
				labelAlign:"",// 标签对齐方式
				type:"success",// 类型:success/warn/error参考element-ui button
				disabled:false,// 禁用
			},
			advanced:{}
		}
	},
	{
		id:5,
		name:"下拉框",
		type:"Select",
		icon:"select",
		options:{
			basic:{
				name:"标题", // 唯一名称
				label:"", // 标签
				labelHidden:false, // 标签是否隐藏
				labelWidth:null,// 标签宽度
				labelAlign:"",// 标签对齐方式
				required:false,// 是否必填*
				hint:"",// 提示语
				hintHidden:false,// 提示语是否隐藏
			},
			advanced:{
				optionItems: // 选项设置
					[
						{label:"select 1", value:1},
						{label:"select 2", value:2},
						{label:"select 3", value:3},
					]
			}
		}
	},
	{
		id:6,
		name:"单选框",
		type:"Radio",
		icon:"Radio",
		options:{
			basic:{
				name:"标题", // 唯一名称
				label:"", // 标签
				labelHidden:false, // 标签是否隐藏
				labelWidth:null,// 标签宽度
				labelAlign:"",// 标签对齐方式
				required:false,// 是否必填*
				hint:"",// 提示语
				hintHidden:false,// 提示语是否隐藏
			},
			advanced:{
				optionItems:[
					{label:"radio 1", value:1},
					{label:"radio 2", value:2},
					{label:"radio 3", value:3},
				]
			}
		}
	},
	{
		id:7,
		name:"文本域",
		type:"textarea",
		icon:"textField",
		options:{
			hidden:false,
			basic:{},
			advanced:{}
		}
	},
	{
		id:8,
		name:"分割线",
		type:"Divider",
		icon:"split",
		options:{
			hidden:false,
			basic:{},
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
		icon:"upload",
		options:{
			hidden:false,
			basic:{},
			advanced:{}
		}
	},
]
