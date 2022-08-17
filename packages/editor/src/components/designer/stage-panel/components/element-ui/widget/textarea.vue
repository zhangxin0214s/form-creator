<template>
	<widget-mask
		:widget="widget"
		:basic-prop="widget.options.basic"
		:advanced-prop="widget.options.advanced"
		:parent-widget="parentWidget"
	>
		<el-input
			type="textarea"
			:disabled="widget.options.basic.disabled.value"
			v-model="widget.options.basic.textareaDefaultValue.value"
		/>
	</widget-mask>
</template>

<script setup>
import widgetMask from '../common/widgetMask.vue';
defineProps(['widget', 'parentWidget']);
</script>
<style scoped></style>