<template>
	<el-form
		label-position="left"
		label-width="100px"
		:model="advancedProp"
		style="max-width: 360px"
	>
		<el-form-item :label="`${advancedProp[key1].label}:`">
			<el-select
				placeholder="请选择"
				v-model="advancedProp[key1].value"
				class="m-2"
				@change="setLinkageObject"
			>
				<el-option
					v-for="item in advancedProp[key1].options"
					:key="item.value"
					:label="item.label"
					:value="item.value"
				/>
			</el-select>
		</el-form-item>
	</el-form>
</template>
<script setup>
import { defineProps, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { widgetStore } from '@/store/index';
import editLinkageEvent from '@/components/designer/stage-panel/components/element-ui/hooks/editLinkageEvent.js';
const { changeElement } = editLinkageEvent();
const _widgetStore = widgetStore();
const { widgetList, unWatch } = storeToRefs(_widgetStore);
const props = defineProps(['selectedWidget', 'advancedProp', 'key1', 'value']);
let currentEleData = props.advancedProp[props.key1];
const options = currentEleData.options;
options.splice(0);
// 从组件列表中选中除了自身的组件push到选择栏中
widgetList.value.forEach((widget) => {
	if (props.selectedWidget && widget.id !== props.selectedWidget.id) {
		options.push({
			label: `${widget.name}-${widget.id}`,
			value: widget.id,
		});
	}
});
// 切换联动对象
const setLinkageObject = (val) => {
	// 清除侦听器
	if (unWatch.value !== null) {
		unWatch.value();
		unWatch.value = null;
	};
	// 获取联动对象
	let linkageObject = getLinkageObject(val);
	// 挂侦听器
	unWatch.value = watch(linkageObject, () => {
		changeElement(props.selectedWidget, linkageObject);
	});
};
let getLinkageObject = (val) => {
	return widgetList.value.find((widget) => widget.id === val);
};
</script>
<style lang="scss" scoped>
</style>
