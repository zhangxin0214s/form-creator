// 容器
export const containers = [
	{
		id:1,
		name:"栅格",
		type:"grid",
		icon:"lattice",
		options:{
			basic:{
				name: "", // 唯一名称
				colHeight: "",// 栅格统一高度
			},
			advanced:{
				gutter:12 // 格数
			}
		},
	},
	{
		id:2,
		name:"标签页",
		type:"tabs",
		icon:"tag",
		options:{
			hidden:false,
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
		options:{
			basic:{
				name:"标题", // 唯一名称
				label: "", // 标签
				labelHidden:false, // 标签是否隐藏
				labelWidth:null,// 标签宽度
				labelAlign:"",// 标签对齐方式
				type: "text",// 类型
				defaultValue: "",// 默认提示文本
				required: false,// 是否必填*
				readonly: false,// 只读
				disabled: false,// 禁用
				hint:"",// 提示语
				hintHidden:false,// 提示语是否隐藏
			},
			advanced:{
				width:null, // 输入框宽度
				validation:"",// 校验规则
				validationHint:""//校验规则提示
			}
		},
	},
	{
		id:2,
		name:"开关",
		type:"Switch",
		icon:"switch",
		options:{
			basic:{
				name:"标题", // 唯一名称
				label: "", // 标签
				labelHidden:false, // 标签是否隐藏
				labelWidth:null,// 标签宽度
				labelAlign:"",// 标签对齐方式
				defaultValue:true,// 默认值:开 || 关
				required: false,// 是否必填*
				disabled: false,// 禁用
				hint:"",// 提示语
				hintHidden:false,// 提示语是否隐藏
			},
			advanced: {

			}
		},
	},
	{
		id:3,
		name:"复选框",
		type:"checkbox",
		icon:"check",
		options:{
			basic: {
				name:"标题", // 唯一名称
				label: "", // 标签
				labelHidden:false, // 标签是否隐藏
				labelWidth:null,// 标签宽度
				labelAlign:"",// 标签对齐方式
				required: false,// 是否必填* 
				hint:"",// 提示语
				hintHidden:false,// 提示语是否隐藏
			},
			advanced: {
				optionItems:  // 选项设置
				[ 
					{ label: "check 1", value: 1, disabled: false },
					{ label: "check 2", value: 2, disabled: false },
					{ label: "check 3", value: 3, disabled: false },
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
				name:"标题", // 唯一名称
				label: "", // 标签
				type:"",// 类型:success/warn/error参考element-ui button
				disabled: false,// 禁用

			},
			advanced:{

			}
		}
	},
	{
		id:5,
		name:"下拉框",
		type:"Select ",
		icon:"select ",
		options:{
			basic:{
				name:"标题", // 唯一名称
				label: "", // 标签
				labelHidden:false, // 标签是否隐藏
				labelWidth:null,// 标签宽度
				labelAlign:"",// 标签对齐方式
				required: false,// 是否必填* 
				hint:"",// 提示语
				hintHidden:false,// 提示语是否隐藏
			},
			advanced:{
				optionItems: // 选项设置
				[
					{label: "select 1",value: 1 },
					{ label: "select 2", value: 2 },
					{ label: "select 3", value: 3 },
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
				label: "", // 标签
				labelHidden:false, // 标签是否隐藏
				labelWidth:null,// 标签宽度
				labelAlign:"",// 标签对齐方式
				required: false,// 是否必填* 
				hint:"",// 提示语
				hintHidden:false,// 提示语是否隐藏
			},
			advanced:{
				optionItems: [
					{ label: "radio 1", value: 1 },
					{ label: "radio 2", value: 2 },
					{ label: "radio 3", value: 3 },
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
		type:"Divider",
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
