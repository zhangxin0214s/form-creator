// 基础控件组件列表
const BASCI_COMPONENTS = {
	'1':'inputBasic',
	'2':'switchBasic',
	'3':'selectBasic',
	'4':'selectAdvanced',
	'5':'inputAdvanced',
	'6':'addSelectList',
	'7':'textareaBasic',
	'8':'buttonGroup',
	'9':'inputNumberBasic',
	'10':'colorBasic',
	'11':'checkboxBasic1',
	'12':'eventBasic',
	'13':'required',
	'14':'inputBtn',
	'15':'radioButtonBasic',
}

// 基础属性组件映射表
const BASIC_PROPERTIES = {
	'name':'1',
	'placeholder':'1',
	'label':'1',
	'hint':'1',
	'editable':'2',
	'alignment':'8',
	'font-color':'10',
	'font-size':'9',
	'font-style':'11',
	'attribute':'11',
	'labelWidth':'1',
	'labelAlign':'3',
	'btnType':'3',
	'maxlength':'9',
	'inputType':'15',
	'btnSize':'15',
	'dateSize':'15',
	'radioSize':'15',
	'checkSize':'15',
	'defaultValue':'1',
	'text':'1',
	'switchDefaultValue':'2',
	'disabled':'2',
	'plain':'2',
	'space':'2',
	'required':'13',
	'hintHidden':'2',
	'labelHidden':'2',
	'readonly':'2',
	'colHeight':'1',
	'label-width':'1',
	'label-position':'8',
	'list':'6',
	'textareaDefaultValue':'7',
	'divider-direction':'8',
	'divider-style':'8',
	'divider-position':'8',
	'divider-content':'1',
	'static-text-line-height':'9',
	'ruleFormKey':'1',
	'upLoadBtnText':'1',
	'maxUpLoadNumber':'9',
	'fileListType':'3',
	'multiple':'2',
	'drag':'2',
	'url':'1',
}


// 高级属性组件映射表
const ADVANCED_PROPERTIES = {
	'validation':'4',
	'validationCustom':'5',
	'selectConfig':'6',
}


// 事件属性组件映射表
const EVENTS_PROPERTIES = {
	'onClick':'12',
	'onMounted':'12',
	'onBeforeMount': '12',
}
export {
	BASCI_COMPONENTS,
	BASIC_PROPERTIES,
	ADVANCED_PROPERTIES,
	EVENTS_PROPERTIES
}
