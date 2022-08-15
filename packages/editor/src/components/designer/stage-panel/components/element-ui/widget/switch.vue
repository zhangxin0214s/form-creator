<template>
	<widget-mask 
		:widget="widget"
		:basicProp="widget.options.basic"
		:advancedProp="widget.options.advanced">
			<el-switch v-model="widget.value"/>
	</widget-mask>
</template>
<script setup>
import widgetMask from '../common/widgetMask.vue'
import Hint from '../common/Hint.vue';
let props = defineProps(['widget']);
</script>
<style lang="scss" scoped>
</style>