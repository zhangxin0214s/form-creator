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
			:maxlength="widget.options.basic.maxlength.value"
			:type="widget.options.basic.inputType.value"
			v-model="formConfig.ruleForm[widget.options.basic.ruleFormKey.value]"
      show-word-limit
    />
	</widget-mask>
</template>

<script setup>
import widgetMask from '../common/widgetMask.vue';
import { storeToRefs } from 'pinia';
import { widgetStore } from '@/store/index';
const _widgetStore = widgetStore();
const { formConfig } = storeToRefs(_widgetStore);
defineProps(['widget', 'parentWidget']);
</script>
<style scoped>
</style>
