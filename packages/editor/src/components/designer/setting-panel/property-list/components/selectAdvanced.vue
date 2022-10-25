<template>
	<el-form
		label-position="left"
		label-width="100px"
		:model="advancedProp"
		style="max-width: 360px"
	>
		<el-form-item
			v-if="advancedProp[key1]?.label"
			:label="`${advancedProp[key1]?.label}:`"
		>
			<el-select
				v-model="advancedProp[key1].value"
				class="m-2"
				@change="setRules"
			>
				<el-option
					v-for="item in advancedProp[key1].options"
					:key="item.label"
					:label="item.label"
					:value="item.value"
				/>
			</el-select>
		</el-form-item>
		<p
			style="font-size:12px"
			v-if="advancedProp[key1].value"
		>{{isHint?advancedProp[key1].hintText:""}}</p>
		<p
			style="font-size:12px"
			v-else
		>"不是最优正则，请按需在下方自定义输入"</p>
		<el-form-item
			v-if="!advancedProp[key1].value"
			label="自定义:"
		>
			<el-input
				v-model="advancedProp[key1].customValue"
				@blur="setRules('custom')"
			/>
		</el-form-item>
		<el-form-item
			v-if="!advancedProp[key1].value"
			label="校验错误提示:"
		>
			<el-input
				v-model="advancedProp[key1].customWrongMessage"
				@blur="setRules('custom')"
			/>
		</el-form-item>
	</el-form>
</template>
<script setup>
import { defineProps, ref } from 'vue';
import { ElMessage } from 'element-plus';
import { widgetStore } from '@/store/index';
import { storeToRefs } from 'pinia';
const _widgetStore = widgetStore();
const props = defineProps(['advancedProp', 'basicProp', 'key1', 'value']);
const isHint = ref(false);
const setRules = (type) => {
	isHint.value = !type;
	const _rules = _widgetStore.selectedWidget.rules;
	console.log('切换', _rules);
	// 查找出必填的rule
	const requireRule = _rules.filter((rule) => {
		return Object.keys(rule).indexOf('required') > -1;
	})[0];
	_rules.splice(0);
	if (type !== 'custom') props.advancedProp[props.key1].customValue = '';
	requireRule && _rules.push(requireRule);

	let val = props.advancedProp[props.key1].value;
	if (val) {
		let objVal = JSON.parse(val);
		_rules.push(objVal);
	}
	let customVal = props.advancedProp[props.key1].customValue;
	if (customVal) {
		_rules.push({
			message: props.advancedProp[props.key1].customWrongMessage,
			pattern: customVal,
		});
	}
};
</script>
<style lang="scss" scoped>
</style>
