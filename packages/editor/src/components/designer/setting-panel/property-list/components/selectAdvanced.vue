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
import { defineProps } from 'vue';

defineProps(['advancedProp', 'key1', 'value']);
</script>
<style lang="scss" scoped>
</style>
