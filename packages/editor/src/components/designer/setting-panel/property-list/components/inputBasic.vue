<template>
	<el-form
		label-position="left"
		label-width="100px"
		:model="basicProp"
		style="max-width: 360px"
	>
		<el-form-item
			v-if="basicProp[key1]?.label"
			:label="`${basicProp[key1]?.label}:`"
		>
			<el-input
				v-model="basicProp[key1].value"
				@blur="initRuleForm"
			/>
		</el-form-item>
	</el-form>
</template>
<script setup>
import { defineProps } from 'vue';
import { storeToRefs } from 'pinia';
import { widgetStore } from '@/store/index';
const _widgetStore = widgetStore();
const { formConfig,selectedWidget } = storeToRefs(_widgetStore);

const props = defineProps(['basicProp', 'key1']);

const initRuleForm = () =>{
	if(props.key1 !== 'ruleFormKey') return
	
	if(props.basicProp[props.key1].value){
		_widgetStore.formConfig.ruleForm[props.basicProp[props.key1].value] = _widgetStore.selectedWidget.value
	}
}
</script>
<style lang="scss" scoped>
</style>
