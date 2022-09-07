<template>
	<el-form
		label-position="left"
		label-width="100px"
		:model="basicProp"
		style="max-width: 360px"
	>
		<el-form-item
			:label="`${basicProp[key1]?.label}:`"
		>
			<el-switch
				active-color="#13ce66"
				inactive-color="#ff4949"
				@change="changeRequired"
				v-model="basicProp[key1].value"
			/>
		</el-form-item>
		<el-form-item
			v-if="basicProp[key1].value"
			:label="`必填校验提示:`"
		>
			<el-input
				v-model="basicProp[key1].message"
				@blur="changeHint"
			/>
		</el-form-item>
	</el-form>
</template>
<script setup>
import { defineProps } from 'vue';
import { storeToRefs } from 'pinia';
import { widgetStore } from '@/store/index';
import { ElMessage } from 'element-plus'

const _widgetStore = widgetStore();
const { widgetList,formConfig } = storeToRefs(_widgetStore);

const props = defineProps(['basicProp', 'key1', 'value']);

/**
 * 是否必填
 */
const changeRequired = () =>{
	const _rules = _widgetStore.selectedWidget.rules;
	const isExist = _rules.some(rule =>{
		if(Object.keys(rule).indexOf('required')>-1){
			return true;
		}
	})
	if(isExist){
		_rules.forEach(rule =>{
			if(Object.keys(rule).indexOf('required')>-1){
				rule.required = props.basicProp[props.key1].value
			}
		})
	}else {
		_rules.push({
			required: props.basicProp[props.key1].value,
			message:props.basicProp[props.key1].message,
			trigger:'blur'
		})
	}
}

/**
 * 提示语
 */
const changeHint = () =>{
	const _rules = _widgetStore.selectedWidget.rules;
	_rules.forEach(rule =>{
		if(Object.keys(rule).indexOf('required')>-1){
			rule.message = props.basicProp[props.key1].message
		}
	})
}
</script>
<style lang="scss" scoped>
</style>
