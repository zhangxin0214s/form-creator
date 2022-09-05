<template>
	<widget-mask
		:widget="widget"
		:basicProp="widget.options.basic"
		:advancedProp="widget.options.advanced"
		:parent-widget="parentWidget"
	>
		<el-switch
			v-model="widget.value"
			:disabled="widget.options.basic.disabled.value"
		/>
	</widget-mask>
</template>
<script setup>
import widgetMask from '../common/widgetMask.vue';
import { storeToRefs } from 'pinia';
import { widgetStore } from '@/store/index';
const _widgetStore = widgetStore();
const { formConfig } = storeToRefs(_widgetStore);
let props = defineProps(['widget', 'parentWidget']);
</script>
<style lang="scss" scoped>
</style>
