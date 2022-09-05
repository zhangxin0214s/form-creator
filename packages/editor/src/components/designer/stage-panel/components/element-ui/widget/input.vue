<template>
	<widget-mask
		:widget="widget"
		:basic-prop="widget.options.basic"
		:advanced-prop="widget.options.advanced"
		:parent-widget="parentWidget"
		:prop-key="propKey"
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
const _widgetStore = widgetStore();
const { formConfig } = storeToRefs(_widgetStore);
const props = defineProps(['widget', 'widgetType','propKey','parent', 'parentWidget']);

const handleChangeEvent = () =>{
	const ruleFormKey = props.widget.options.basic.ruleFormKey.value;
	// if(props.widgetType === 'widget'){
		console.log(props.propKey.split('.'),"===propKey===")
		_widgetStore.formConfig.ruleForm[props.propKey.split('.')[0]][props.propKey.split('.')[1]] = props.widget.value
	// }
}
</script>
<style scoped>
	.hint {
		font-size: 12px;
		color: #9b9b9b;
	}
</style>
