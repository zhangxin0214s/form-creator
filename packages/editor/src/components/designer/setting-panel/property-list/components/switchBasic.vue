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

			<el-switch
				active-color="#13ce66"
				inactive-color="#ff4949"
				v-model="basicProp[key1].value"
			/>
		</el-form-item>
	</el-form>
</template>
<script setup>
import { defineProps } from 'vue';
import { widgetStore } from '@/store/index';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
const _widgetStore = widgetStore();
const { selectedWidget } = storeToRefs(_widgetStore);
defineProps([ 'basicProp', 'key1', 'value']);
</script>
<style lang="scss" scoped>
</style>
