<template>
	<el-button @click="drawer = true">
		<svg-icon
			icon-class="formConfig"
			class="formConfigIcon"
			@click.stop="formConfig"
		/>
		公共属性配置
	</el-button>
	<el-drawer v-model="drawer">
		<template #header="{ close, titleId, titleClass }">
			<el-divider content-position="center">表单属性配置</el-divider>
		</template>
		<div
			class="form-config"
			v-for="(form,key1) in formConfig"
			:key="key1"
		>
			<component
				:is="componentMap[getPropCompName(key1)]"
				:basic-prop="formConfig"
				:value="key1"
				:key1="key1"
			></component>
		</div>
	</el-drawer>
</template>
<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { widgetStore } from '@/store/index';
import {
	BASCI_COMPONENTS,
	BASIC_PROPERTIES,
	ADVANCED_PROPERTIES,
} from '../propertyRegister';
import * as basicComponents from './index.js';

const componentMap = {
	...basicComponents,
};
const _widgetStore = widgetStore();
const { formConfig } = storeToRefs(_widgetStore);
const getPropCompName = (key) => {
	return BASCI_COMPONENTS[BASIC_PROPERTIES[key]];
};
const drawer = ref(false);
</script>
<style lang="scss" scoped>
.form-config{
	display: flex;
}
</style>