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
			<el-checkbox
				v-for="(item,index) in basicProp[key1].options"
        :key="index"
				v-model="item.value"
				:label="item.label"
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
