<template>
	<el-form
		label-position="left"
		label-width="100px"
		:model="advancedProp"
		style="max-width: 360px"
	>
		<el-divider content-position="center">联动设置</el-divider>
		<el-form-item :label="`${advancedProp[key1].label}:`">
			<el-cascader
				v-model="advancedProp[key1].value"
				@change="setLinkageObject"
				:options="advancedProp[key1].options"
				:props="cascaderProps"
			></el-cascader>
			<event-basic
				v-if="advancedProp[key1].value.length !== 0"
				:events-prop="advancedProp"
				:key1="'linkageCode'"
				:style="`margin-left: -100px;margin-top: 10px;`"
			></event-basic>
		</el-form-item>
	</el-form>
</template>
<script setup>
import { defineProps, watch, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { widgetStore } from '@/store/index';
import eventBasic from './eventBasic.vue';
import editLinkageEvent from '../../hooks/editLinkageEvent.js';
const cascaderProps = ref({ multiple: true });
const { changeElement } = editLinkageEvent();
const _widgetStore = widgetStore();
const { widgetList } = storeToRefs(_widgetStore);
const props = defineProps([
	'selectedWidget',
	'advancedProp',
	'basicProp',
	'key1',
	'value',
]);
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
	if (widget.name === '栅格' || widget.name === '标签页') {
		let temp = getChildren(widget.options.advanced.cols);
		obj.children.push(...temp);
	}
	return obj;
};
let getChildren = (cols, newChild) => {
	newChild = [];
	for (let i = 0; i < cols.length; i++) {
		for (let k = 0; k < cols[i].widgetList.length; k++) {
			if (
				props.selectedWidget &&
				cols[i].widgetList[k].id !== props.selectedWidget.id
			) {
				let obj = {
					label: cols[i].widgetList[k].options.basic.name.value,
					value: cols[i].widgetList[k].id,
					children: [],
				};
				if (
					cols[i].widgetList[k].name === '栅格' ||
					cols[i].widgetList[k].name === '标签页'
				) {
					let temp = getChildren(
						cols[i].widgetList[k].options.advanced.cols
					);
					obj.children.push(...temp);
				}
				newChild.push(obj);
			}
		}
	}
	return newChild;
};
widgetList.value.forEach((widget) => {
	if (props.selectedWidget && widget.id !== props.selectedWidget.id) {
		options.push(getOptions(widget));
	}
});

// 切换联动对象
const setLinkageObject = (val) => {
	// 获取联动对象
	let linkageObject = getLinkageObject(val);
	currentEleData.targets = linkageObject;
	console.log(linkageObject, 'linkageObject');
};
let getLinkageObject = (vals) => {
	let tempArr = [];
	for (let i = 0; i < vals.length; i++) {
		let findValue = widgetList.value.find(
			(widget) => widget.id === vals[i][0]
		);
		if (vals[i].length === 1) {
			tempArr.push(findValue);
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
				}
				if (valIndex === val.length - 1) return tempVal;
				return fun(tempVal.options.advanced.cols, val, ++valIndex);
			};
			tempArr.push(fun(findValue.options.advanced.cols, vals[i], 1));
		}
	}
	return tempArr;
};
/**
 * 复制组件
 */
// const copyWidget = (widget) => {
// 	_widgetStore.copyWidget(widget);
// };
</script>
<style lang="scss" scoped>
</style>
