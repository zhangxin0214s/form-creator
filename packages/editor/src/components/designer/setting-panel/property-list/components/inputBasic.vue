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
				v-model="basicPropKey"
				@blur="initRuleForm"
        		clearable
			/>
		</el-form-item>
	</el-form>
</template>
<script setup>
import { defineProps } from 'vue';
import { storeToRefs } from 'pinia';
import { widgetStore } from '@/store/index';
import { ref } from 'vue'
const _widgetStore = widgetStore();
const { formConfig,selectedWidget } = storeToRefs(_widgetStore);

const props = defineProps(['basicProp', 'key1']);

const basicPropKey = ref(null);

const initRuleForm = () =>{
	if(props.key1 !== 'ruleFormKey') return
	props.basicProp[props.key1].value = basicPropKey;
	if(props.basicProp[props.key1].value){
		// _widgetStore.formConfig.ruleForm[props.basicProp[props.key1].value] = _widgetStore.selectedWidget.value
	} else {
    _widgetStore.selectedWidget.options.basic.required.value = false
    _widgetStore.selectedWidget.options.basic.required.message = ''

  }
}
</script>
<style lang="scss" scoped>
</style>
