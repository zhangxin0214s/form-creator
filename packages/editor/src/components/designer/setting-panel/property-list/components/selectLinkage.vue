<template>
	<el-form
		label-position="left"
		label-width="100px"
		:model="advancedProp"
		style="max-width: 360px"
	>
		<el-form-item :label="`${advancedProp[key1].label}:`">
			<el-cascader
				v-model="advancedProp[key1].value"
				@change="setLinkageObject"
				:options="advancedProp[key1].options"
			></el-cascader>
			<!-- <el-select
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
			</el-select> -->
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
let getOptions = (widget) => {
	let obj = {
		label: widget.options.basic.name.value,
		value: widget.id,
		children: [],
	};
	if (widget.name === '栅格') {
		let temp = getChildren(widget.options.advanced.cols);
		obj.children.push(...temp);
	}
	return obj;
};
let getChildren = (cols, newChild) => {
	newChild = [];
	for (let i = 0; i < cols.length; i++) {
		for (let k = 0; k < cols[i].widgetList.length; k++) {
			let obj = {
				label: cols[i].widgetList[k].options.basic.name.value,
				value: cols[i].widgetList[k].id,
				children: [],
			};
			if (cols[i].widgetList[k].name === '栅格') {
				let temp = getChildren(
					cols[i].widgetList[k].options.advanced.cols
				);
				obj.children.push(...temp);
			}
			newChild.push(obj);
		}
	}
	return newChild;
};
widgetList.value.forEach((widget) => {
	if (props.selectedWidget && widget.id !== props.selectedWidget.id) {
		options.push(getOptions(widget));
	}
});
console.log('00000000', options);
// 切换联动对象
const setLinkageObject = (val) => {
	// 清除侦听器
	if (unWatch.value !== null) {
		unWatch.value();
		unWatch.value = null;
	}
	// 获取联动对象
	let linkageObject = getLinkageObject(val);
	console.log(linkageObject,'linkageObject');
	// 挂侦听器
	unWatch.value = watch(linkageObject, () => {
		changeElement(props.selectedWidget, linkageObject);
	});
};
let getLinkageObject = (val) => {
	let findValue = widgetList.value.find((widget) => widget.id === val[0]);
	if (val.length === 1) {
		return findValue;
	} else {
		let fun = (cols, val, valIndex) => {
			let linkageVal = val[valIndex];
			let tempVal = null;
			for (let i = 0; i < cols.length; i++) {
				if (!tempVal) {
					tempVal = cols[i].widgetList.find(
						(list) => list.id === linkageVal
					);
				}
			};
			if (valIndex === val.length - 1) return tempVal;
			return fun(tempVal.options.advanced.cols, val, ++valIndex);
		};
		return fun(findValue.options.advanced.cols, val, 1);
	}
};
</script>
<style lang="scss" scoped>
</style>
