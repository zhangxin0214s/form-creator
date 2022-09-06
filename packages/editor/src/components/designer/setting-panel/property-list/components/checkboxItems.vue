<template>
	<el-divider content-position="center">复选框设置</el-divider>
	<div class="setOptions">
		<span>动态数据:</span>
		<el-switch
			class="optionsType"
			v-model="optionsType"
		/>
	</div>

	<!-- 动态数据 -->
	<div v-if="optionsType">
		<dataSource :advanced-prop="advancedProp" />
	</div>

	<!-- 静态数据 -->
	<div v-else>
		<div v-for="(ite,index) in advancedProp?.optionItems">
			<span class="gutter-label-text">复选框 {{ index + 1 }}</span>
			<div>
				<span class="gutter-label-text">label:</span>
				<el-input
					style="width: 150px;margin-right: 10px"
					clearable
					v-model="ite.label"
				/>
			</div>
			<div>
				<span class="gutter-label-text">value:</span>
				<el-input
					style="width: 150px;margin-right: 10px"
					clearable
					v-model="ite.value"
				/>
			</div>

			<span style="margin-top: 10px; display: inline-block">{{ ite.text }}复选框{{ index + 1 }}：</span>
			<el-button
				circle
				size="small"
				style="float: right; margin-top: 10px; margin-right: 20px"
				type="primary"
				icon="el-icon-minus"
				@click="delCheckbox(ite,index)"
			/>
			<el-switch
				active-color="#ff4949"
				inactive-color="#13ce66"
				v-model="ite.disabled"
			/>
			<!-- <checkbox-select-linkage
				:advanced-prop="advancedProp.optionItems[index]"
				:selected-widget="selectedWidget"
        key1="linkage"
			>
			</checkbox-select-linkage> -->
		</div>
		<el-button
			circle
			type="primary"
			size="small"
			icon="el-icon-plus"
			@click="addCheckbox"
		/>
	</div>

</template>
<script setup>
import { ref } from 'vue';
import dataSource from './dataSource.vue';
// import checkboxSelectLinkage from './checkboxSelectLinkage.vue';
import { generateId } from '@/utils/util';
const optionsType = ref(false);
const props = defineProps(['selectedWidget', 'basicProp', 'advancedProp','key1','value']);
props.advancedProp.optionItems.forEach((opt) => {
	if (!opt.id) opt.id = generateId();
});
const addCheckbox = () => {
	props.advancedProp.optionItems.push({
		label: `label值${props.advancedProp.optionItems.length + 1}`,
		value: `value值${props.advancedProp.optionItems.length + 1}`,
		disabled: false,
		text: '是否禁用',
		isSelect: false,
		id: generateId(),
	});
};

const delCheckbox = (ite, index) => {
	props.advancedProp.optionItems.splice(index, 1);
};
</script>
<style lang="scss" scoped>
.gutter-label-text {
	display: inline-block;
	width: 100px;
	margin-top: 20px;
}

.optionsType {
	margin-left: 10px;
}
</style>
