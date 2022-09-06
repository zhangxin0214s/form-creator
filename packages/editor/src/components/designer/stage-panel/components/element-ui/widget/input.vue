<template>
	<widget-mask
		:widget="widget"
		:basic-prop="widget.options.basic"
		:advanced-prop="widget.options.advanced"
		:parent-widget="parentWidget"
		:prop-key="propKey"
		:rule-form="ruleForm"
	>
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
import { ElMessage } from 'element-plus'
import { onMounted ,watch} from 'vue';
const _widgetStore = widgetStore();
const { formConfig } = storeToRefs(_widgetStore);
const props = defineProps(['widget', 'widgetType','ruleForm', 'propKey','parent', 'parentWidget']);

watch(
	() => props.propKey,
	(value) => {
		const ruleFormKey = props.widget.options.basic.ruleFormKey.value;
		if(ruleFormKey && !props.ruleForm[ruleFormKey]){
			console.log("监听到数据变化",ruleFormKey)
			if(props.parent?.ruleFormKeyType === 'object'){
				props.ruleForm[ruleFormKey] = null
			}else if(props.parent?.ruleFormKeyType === 'array'){
				props.ruleForm.push({
					[ruleFormKey]: null
				})
			}else{
				props.ruleForm[ruleFormKey] = null
			}
			
		}
	},
	{
		deep: true,
		immediate: true
	}
)

const handleChangeEvent = () =>{
	const ruleFormKey = props.widget.options.basic.ruleFormKey.value;
	if(!ruleFormKey){
		ElMessage({
            message: '请先绑定参数key',
            type: 'error',
            duration:1000
        })
		return;
	}
	if(props.paren?.ruleFormKeyType === 'object'){
		props.ruleForm[ruleFormKey] = props.widget.value;
	}else if(props.parent?.ruleFormKeyType === 'array'){
		props.ruleForm.push({
			[ruleFormKey] : props.widget.value
		})
	}else{
		props.ruleForm[ruleFormKey] = props.widget.value;
	}
	
}

</script>
<style scoped>
	.hint {
		font-size: 12px;
		color: #9b9b9b;
	}
</style>
