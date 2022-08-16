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
			<el-input
				v-model="advancedProp[key1].value"
				:placeholder="advancedProp[key1]?.placeholder"
			/>
		</el-form-item>
	</el-form>
</template>
<script setup>
import { defineProps } from 'vue';

defineProps(['advancedProp', 'key1', 'value']);
</script>
<style lang="scss" scoped>
</style>
