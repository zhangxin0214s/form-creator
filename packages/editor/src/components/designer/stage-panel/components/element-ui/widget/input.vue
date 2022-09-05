<template>
	<widget-mask
		:widget="widget"
		:basic-prop="widget.options.basic"
		:advanced-prop="widget.options.advanced"
		:parent-widget="parentWidget"
		:prop-key="propKey"
	>
		{{ propKey }}
		{{ ruleForm }}
		<el-input
			:disabled="widget.options.basic.disabled.value"
			:placeholder="widget.options.basic.defaultValue.value"
			:type="widget.options.basic.inputType.value"
			v-model="widget.value"
			show-word-limit
			@change="handleChangeEvent"
		/>
		<div class="hint">{{ widget.options.basic.hint.value }}</div>
	</widget-mask>
</template>

<script setup>
import widgetMask from '../common/widgetMask.vue';
import { storeToRefs } from 'pinia';
import { widgetStore } from '@/store/index';
import { onMounted } from 'vue';
const _widgetStore = widgetStore();
const { formConfig } = storeToRefs(_widgetStore);
const props = defineProps(['widget', 'widgetType','ruleForm', 'propKey','parent', 'parentWidget']);

onMounted(()=>{
	if(!props.ruleForm){
		props.ruleForm = {}
	}
})
const handleChangeEvent = () =>{
	const ruleFormKey = props.widget.options.basic.ruleFormKey.value;
	props.ruleForm[ruleFormKey] = props.widget.value;
	// // if(props.widgetType === 'widget'){
	// 	const propKeys = props.propKey.split(".");
	// 	console.log(_widgetStore.formConfig.ruleForm,"===propKey===",propKeys)
	// 	let temp = _widgetStore.formConfig.ruleForm;
	// 	for(let i = 0; i < propKeys.length; i++) {
	// 		if(!propKeys[i]){
	// 			continue
	// 		};
	// 		if(i == propKeys.length-1){
	// 			temp[propKeys[i]] = props.widget.value
	// 		}
	// 		if(!temp[propKeys[i]]){
	// 			temp = temp[propKeys[i]] = {};
	// 		}else{
	// 			temp = temp[propKeys[i]]
	// 		}
	// 	}
		
	// // }
}

const setRuleForm = (index) =>{
	const propKeys = props.propKey.split('.')
	if(index > propKeys.length-1){
		return
	}
	console.log(!_widgetStore.formConfig.ruleForm[propKeys[index]])
	if(!_widgetStore.formConfig.ruleForm[propKeys[index]]){
		
		_widgetStore.formConfig.ruleForm[propKeys[index]] = {}
	}
	_widgetStore.formConfig.ruleForm = _widgetStore.formConfig.ruleForm[propKeys[index]]
	if(index === propKeys.length-1){
		_widgetStore.formConfig.ruleForm[propKeys[index]] = '123'
	}
	console.log(_widgetStore.formConfig.ruleForm,"======")
	setRuleForm(index+1)
}
</script>
<style scoped>
	.hint {
		font-size: 12px;
		color: #9b9b9b;
	}
</style>
