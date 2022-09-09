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
		:selected-widget="selectedWidget"
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
<script setup name="input">
import widgetMask from '../../common/widgetMask.vue';
import { ElMessage } from 'element-plus'
import { watch} from 'vue';
import { handleChangeEvent } from '../../hooks/handleChangeEvent'
import { watchEvent } from '../../hooks/watchEvent'

const props = defineProps(['widget', 'isEditor', 'selectedWidget','widgetType','ruleForm', 'propKey','parent', 'parentWidget']);

watchEvent(props,watch)

</script>
<style scoped>
.hint {
	font-size: 12px;
	color: #9b9b9b;
}
</style>
