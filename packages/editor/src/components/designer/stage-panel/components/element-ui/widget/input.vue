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
			v-model="widget.value"
			show-word-limit
			@input="changeInput"
		/>
		<div class="hint">{{widget.options.basic.hint.value}}</div>
	</widget-mask>
</template>

<script setup>
import widgetMask from '../common/widgetMask.vue';
import { storeToRefs } from 'pinia';
import { widgetStore } from '@/store/index';
import { watch } from 'vue';
const _widgetStore = widgetStore();
const { formConfig, widgetList } = storeToRefs(_widgetStore);
const props = defineProps(['widget', 'parent', 'parentWidget']);
const changeInput = (val) => {
	formConfig.value.ruleForm[props.widget.options.basic.ruleFormKey.value] =
		val;
};
</script>
<style scoped>
.hint {
	font-size: 12px;
	color: #9b9b9b;
}
</style>
