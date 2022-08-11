// 容器
export const containers = [
	{
		id:1,
		name:"栅格",
		type:"grid",
		icon:"lattice",
		options:{
			basic:{},
			senior:{}
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
				// label: "", // 标签
				// type: "text",// 类型
				// defaultValue: "",// 默认提示文本
			},
			advanced:{}
		},
	},
	{
		id:2,
		name:"开关",
		type:"Switch",
		icon:"switch",
		options:{
			hidden:false,
		},
	},
	{
		id:3,
		name:"复选框",
		type:"checkbox",
		icon:"check",
		options:{
			hidden:false,
		},
	},
	{
		id:4,
		name:"按钮",
		type:"button",
		icon:"button",
		options:{
			hidden:false,
			basic:{},
			advanced:{}
		}
	},
	{
		id:5,
		name:"下拉框",
		type:"Select ",
		icon:"select ",
		options:{
			hidden:false,
			basic:{},
			advanced:{}
		}
	},
	{
		id:6,
		name:"单选框",
		type:"Radio",
		icon:"Radio",
		options:{
			hidden:false,
			basic:{},
			advanced:{}
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
