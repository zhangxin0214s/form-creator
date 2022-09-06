<template>
	<widget-mask
		:widget="widget"
		:basicProp="widget.options.basic"
		:advancedProp="widget.options.advanced"
		:parent-widget="parentWidget"
		:prop-key="propKey"
		:rule-form="ruleForm"
		:parent="parent"
	>
		<el-switch
			v-model="widget.value"
			:disabled="widget.options.basic.disabled.value"
			@change="handleChangeEvent(props)"
		/>
	</widget-mask>
</template>
<script setup>
import widgetMask from '../common/widgetMask.vue';
import { storeToRefs } from 'pinia';
import { widgetStore } from '@/store/index';
import { watch } from 'vue'
const _widgetStore = widgetStore();
const { formConfig } = storeToRefs(_widgetStore);
const props = defineProps(['widget', 'widgetType','ruleForm', 'propKey','parent', 'parentWidget']);

import { handleChangeEvent } from '../hooks/handleChangeEvent'
import { watchEvent } from '../hooks/watchEvent'

watchEvent(props,watch)
</script>
<style lang="scss" scoped>
</style>
