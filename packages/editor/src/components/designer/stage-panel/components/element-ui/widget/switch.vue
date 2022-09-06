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
			@change="changeSwitch"
		/>
	</widget-mask>
</template>
<script setup>
import widgetMask from '../common/widgetMask.vue';
import { storeToRefs } from 'pinia';
import { widgetStore } from '@/store/index';
const _widgetStore = widgetStore();
const { formConfig,widgetList } = storeToRefs(_widgetStore);
let props = defineProps(['widget', 'parentWidget']);
const changeSwitch = (val)=>{
	formConfig.value.ruleForm[props.widget.options.basic.ruleFormKey.value] = val;
}
</script>
<style lang="scss" scoped>
</style>
