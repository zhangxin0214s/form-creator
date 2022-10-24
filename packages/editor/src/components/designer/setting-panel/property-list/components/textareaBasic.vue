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
				type="textarea"
				v-model="basicProp[key1].value"
				:placeholder="basicProp[key1]?.placeholder"
				@blur="initRuleForm"
			/>
		</el-form-item>
	</el-form>
</template>
<script setup>
import { defineProps } from 'vue';
import { widgetStore } from '@/store/index';
const _widgetStore = widgetStore();

const props = defineProps(['basicProp', 'key1', 'value']);

const initRuleForm = () =>{
	if(_widgetStore.selectedWidget.type === 'fcStaticText' && props.key1 === 'textareaDefaultValue') {
		_widgetStore.selectedWidget.value = props.basicProp['textareaDefaultValue'].value
	}
}
</script>
<style lang="scss" scoped>
</style>
