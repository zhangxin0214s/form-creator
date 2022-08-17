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
			<el-input
				oninput="value=value.replace(/[^\d]/g,'')"
				maxLength="11"
				v-model="basicProp[key1].value"
				:placeholder="basicProp[key1]?.placeholder"
			/>
		</el-form-item>
	</el-form>
</template>
<script setup>
import { defineProps } from 'vue';

defineProps(['basicProp', 'key1', 'value']);
</script>
<style lang="scss" scoped>
</style>
