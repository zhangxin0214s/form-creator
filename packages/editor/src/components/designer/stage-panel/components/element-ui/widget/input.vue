<template>
	<widget-mask 
		:widget="widget"
		:basicProp="widget.options.basic"
		:advancedProp="widget.options.advanced"
		:inputKey="'defaultValue'"
		>
		<el-input
			:disabled="widget.options.basic.disabled.value"
			v-model="widget.options.basic.defaultValue.value"
		/>
	</widget-mask>
</template>

<script setup>
import widgetMask from '../common/widgetMask.vue'
defineProps([
	'widget'
]);

</script>
<style scoped>
	.input-container {
		float:left;
		width:100%;
	}
</style>