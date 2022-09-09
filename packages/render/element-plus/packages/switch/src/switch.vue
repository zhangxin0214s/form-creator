<template>
	<widget-mask
		:widget="widget"
		:basicProp="widget.options.basic"
		:advancedProp="widget.options.advanced"
		:parent-widget="parentWidget"
		:prop-key="propKey"
		:rule-form="ruleForm"
		:parent="parent"
		:is-editor="isEditor"
		:selected-widget="selectedWidget"
	>
		<el-switch
			v-model="widget.value"
			:disabled="widget.options.basic.disabled.value"
			@change="handleChangeEvent(props,ElMessage)"
		/>
	</widget-mask>
</template>
<script setup name="switch">
import widgetMask from '../../common/widgetMask.vue';
import { watch } from 'vue'
import { ElMessage } from 'element-plus'
import { handleChangeEvent } from '../../hooks/handleChangeEvent'
import { watchEvent } from '../../hooks/watchEvent'

const props = defineProps([
	'widget',
	'ruleForm', 
	'propKey',
	'parent', 
	'parentWidget',
	'isEditor',
	'selectedWidget'
])

watchEvent(props,watch)
</script>
<style lang="scss" scoped>
</style>
