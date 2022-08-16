<template>
	<widget-mask
		:widget="widget"
		:basic-prop="widget.options.basic"
		:advanced-prop="widget.options.advanced"
		:parent-widget="parentWidget"
	>
		<el-input
			:disabled="widget.options.basic.disabled.value"
			v-model="widget.options.basic.defaultValue.value"
		/>
	</widget-mask>
</template>

<script setup>
import widgetMask from '../common/widgetMask.vue';
defineProps(['widget', 'parentWidget']);
</script>
<style scoped>
.input-container {
	float: left;
	width: 100%;
}
</style>