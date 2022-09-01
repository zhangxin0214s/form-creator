<template>
	<widget-mask
		:widget="widget"
		:basic-prop="widget.options.basic"
		:advanced-prop="widget.options.advanced"
		:parent-widget="parentWidget"
	>
		<el-input
			:disabled="widget.options.basic.disabled.value"
			:placeholder="widget.options.basic.defaultValue.value"
			:type="widget.options.basic.inputType.value"
			v-model="formConfig.ruleForm[widget.options.basic.ruleFormKey.value]"
			show-word-limit
		/>
		<div class="hint">{{widget.options.basic.hint.value}}</div>
	</widget-mask>
</template>

<script setup>
import widgetMask from '../common/widgetMask.vue';
import { storeToRefs } from 'pinia';
import { widgetStore } from '@/store/index';
const _widgetStore = widgetStore();
const { formConfig } = storeToRefs(_widgetStore);
defineProps(['widget', 'parent' ,'parentWidget']);
</script>
<style scoped>
	.hint {
		font-size: 12px;
		color: #9b9b9b;
	}
</style>
