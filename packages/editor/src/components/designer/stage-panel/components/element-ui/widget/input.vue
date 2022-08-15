<template>
	<widget-mask 
		:widget="widget"
		:basicProp="widget.options.basic"
		:advancedProp="widget.options.advanced">
		<el-input
			:disabled="widget.options.basic.disabled"
			v-model="widget.options.basic.defaultValue.value"
		/>
	</widget-mask>
</template>

<script setup>
import {ref} from 'vue';
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