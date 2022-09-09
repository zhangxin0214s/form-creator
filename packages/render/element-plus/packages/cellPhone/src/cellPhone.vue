<template>
	<widget-mask
		:widget="widget"
		:basic-prop="widget.options.basic"
		:advanced-prop="widget.options.advanced"
		:parent-widget="parentWidget"
		:prop-key="propKey"
		:rule-form="ruleForm"
		:parent="parent"
		:is-editor="isEditor"
		:selected-widget="selectedWidget"
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
				@change="handleChangeEvent(props,ElMessage)"
			/>
		</div>
	</widget-mask>
</template>

<script setup name="cellPhone">
import widgetMask from '../../common/widgetMask.vue';
import { watch } from 'vue';
import { ElMessage } from 'element-plus'
import { handleChangeEvent } from '../../hooks/handleChangeEvent';
import { watchEvent } from '../../hooks/watchEvent';
const props = defineProps([
	'widget',
	'widgetType',
	'ruleForm',
	'propKey',
	'parent',
	'parentWidget',
	'isEditor',
	'selectedWidget',
]);

watchEvent(props, watch);
const setRules = () => {
	// const _ruleFormKey = props.widget.options.basic.ruleFormKey.value;
	// const _ruleForm = formConfig.value.ruleForm;
	// _ruleForm[
	// 	_ruleFormKey
	// ] = `${props.widget.options.basic.prefix.value}-${props.widget.value}`;
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
