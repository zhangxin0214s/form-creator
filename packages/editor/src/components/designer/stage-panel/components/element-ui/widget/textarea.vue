<template>
	<widget-mask
		:widget="widget"
		:basic-prop="widget.options.basic"
		:advanced-prop="widget.options.advanced"
		:parent-widget="parentWidget"
		:prop-key="propKey"
		:rule-form="ruleForm"
		:parent="parent"
		:is-editor="isEditor"
		:selected-widget="selectedWidget">
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
import { ElMessage } from 'element-plus'
import { watch} from 'vue';
import { handleChangeEvent } from '../hooks/handleChangeEvent'
import { watchEvent } from '../hooks/watchEvent'

const props = defineProps(['widget', 'isEditor', 'selectedWidget', 'widgetType','ruleForm', 'propKey','parent', 'parentWidget']);

watchEvent(props,watch)
</script>
<style scoped></style>
