<template>
	<widget-mask
		:widget="widget"
		:basic-prop="widget.options.basic"
		:advanced-prop="widget.options.advanced"
		:parent-widget="parentWidget"
		:prop-key="propKey"
		:rule-form="ruleForm"
		:parent="parent"
	>
		<el-input
			:disabled="widget.options.basic.disabled.value"
			:placeholder="widget.options.basic.defaultValue.value"
			:type="widget.options.basic.inputType.value"
			v-model="widget.value"
			show-word-limit
			@change="handleChangeEvent(props,ElMessage)"
		/>
		<div class="hint">{{ widget.options.basic.hint.value }}</div>
	</widget-mask>
</template>

<script setup>
import widgetMask from '../common/widgetMask.vue';
import { storeToRefs } from 'pinia';
import { widgetStore } from '@/store/index';
import { ElMessage } from 'element-plus'
import { watch} from 'vue';
import { handleChangeEvent } from '../hooks/handleChangeEvent'
import { watchEvent } from '../hooks/watchEvent'
const _widgetStore = widgetStore();
const { formConfig } = storeToRefs(_widgetStore);
const props = defineProps(['widget', 'widgetType','ruleForm', 'propKey','parent', 'parentWidget']);

watchEvent(props,watch)

</script>
<style scoped>
.hint {
	font-size: 12px;
	color: #9b9b9b;
}
</style>
