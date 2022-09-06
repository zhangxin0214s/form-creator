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
			type="textarea"
			:disabled="widget.options.basic.disabled.value"
			:placeholder="widget.options.basic.defaultValue.value"
			:maxlength="widget.options.basic.maxlength.value"
			:resize="widget.options.basic.resizeDirection.value"
			v-model="widget.value"
			@change="handleChangeEvent(props,ElMessage)"
			show-word-limit
		/>
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
<style scoped></style>
