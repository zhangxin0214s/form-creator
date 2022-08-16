<template>
	<widget-mask
		:widget="widget"
		:basicProp="widget.options.basic"
		:advancedProp="widget.options.advanced"
		:parent-widget="parentWidget"
	>
		<el-switch
			v-model="widget.options.basic.switchDefaultValue.value"
			:disabled="widget.options.basic.disabled.value"
		/>
	</widget-mask>
</template>
<script setup>
import widgetMask from '../common/widgetMask.vue';
let props = defineProps(['widget', 'parentWidget']);
</script>
<style lang="scss" scoped>
</style>