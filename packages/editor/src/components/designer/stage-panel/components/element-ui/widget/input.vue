<template>
	<widget-mask 
		:widget="widget"
		:basicProp="widget.options.basic"
		:advancedProp="widget.options.advanced">
		<el-input
			:value="widget.options.basic.defaultValue"
			:disabled="widget.options.basic.disabled"
		/>
	</widget-mask>
</template>

<script setup>
import widgetMask from '../common/widgetMask.vue'
let props = defineProps([
	'widget'
]);
</script>
<style scoped>
	.input-container {
		float:left;
		width:100%;
	}
</style>