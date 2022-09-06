<template>
	<widget-mask
		:widget="widget"
		:basic-prop="widget.options.basic"
		:advanced-prop="widget.options.advanced"
		:parent-widget="parentWidget"
	>
		<div class="phone-content">
			<el-select
				v-model="widget.options.basic.prefix.value"
				:disabled="widget.options.basic.disabled.value"
				class="prefix-select"
				@change="setRules()"
			>
				<template v-slot:prefix>
					<span>+</span>
				</template>
				<el-option
					v-for="item in widget.options.basic.prefix.options"
					:key="item.value"
					:label="item.label"
					:value="item.value"
				>
					<span style="float: left">{{ item.label }}</span>
					<span style="
          float: right;
          color: var(--el-text-color-secondary);
          font-size: 13px;">{{ item.valueText }}</span>
				</el-option>
			</el-select>
			<el-input
				oninput="value=value.replace(/[^\d]/g,'')"
				maxLength="11"
				:disabled="widget.options.basic.disabled.value"
				:placeholder="widget.options.basic.defaultValue.value"
				v-model="widget.value"
				@blur="setRules()"
			/>
		</div>
	</widget-mask>
</template>

<script setup>
import widgetMask from '../common/widgetMask.vue';
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { storeToRefs } from 'pinia';
import { widgetStore } from '@/store/index';
const _widgetStore = widgetStore();
const { formConfig } = storeToRefs(_widgetStore);
const props = defineProps(['widget', 'parentWidget']);
const tempVal = ref('');
const setRules = () => {
	const _ruleFormKey = props.widget.options.basic.ruleFormKey.value;
	const _rules = _widgetStore.formConfig.rules;
	const _ruleForm = formConfig.value.ruleForm;
	_ruleForm[_ruleFormKey] = `${props.widget.options.basic.prefix.value}-${tempVal.value}`;
	console.log('切换', props.widget.options.basic.prefix.value);
	if (!_ruleFormKey) {
		ElMessage({
			message: '请先设置参数key',
			type: 'error',
			duration: 1000,
		});
	} else {
		// 查找出必填的rule
		const requireRule = _rules[_ruleFormKey]?.filter((rule) => {
			return Object.keys(rule).indexOf('required') > -1;
		})[0];
		// 每次切换清空_rules[_ruleFormKey] & customValue
		_rules[_ruleFormKey] = [];
		requireRule && _rules[_ruleFormKey].push(requireRule);
		_rules[_ruleFormKey].push({
			message: '请填写正确的手机号',
			pattern: '^(86|852|853)-1[3456789]\\d{9}$',
		});
	}
};
</script>
<style scoped>
.phone-content {
	width: 100%;
	display: flex;
}
.prefix-select {
	margin-right: 10px;
}
</style>
